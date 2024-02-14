import React from "react"
import { useParams , Link, useLocation} from "react-router-dom"
import { getVan } from "../../api"

export default function VanDetail(props) {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    //optional chaining operator before that   "const search = location.state && location.state.search || "" "
    //uselocation is a hook that returns the location object that represents the current URL.
    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    
    return (
        <div className="van-detail-container">
            <div className="back-btn">
                <p>⬅</p>
            <Link   to={`..${search}`}  relative="path">Back to {type} vans</Link>
            </div>
             {van ? (
          <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>} 

        </div>
    )
}