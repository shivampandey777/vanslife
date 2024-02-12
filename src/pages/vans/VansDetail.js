import React from "react"
import { useParams , Link, useLocation} from "react-router-dom"

export default function VanDetail(props) {
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
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