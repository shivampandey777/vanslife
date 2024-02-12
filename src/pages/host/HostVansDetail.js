import React from "react";
import { Link , NavLink ,  useParams , Outlet} from "react-router-dom";

export default function HostVansDetail() {
    const params = useParams()
    const [van, setVans] = React.useState([])
    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then((res) => res.json())
        .then(data => setVans(data.vans))
    },[params.id])

    if (!van) {
        return <h1>Loading...</h1>
    }
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <div className="host-van-detail-container">
            <div className="back-btn">
                <p>⬅</p>
            <Link to=".."  relative="path">Back to all vans</Link>
            </div>
            <div className="details-vans">
                <div className="detailhost-van">
                <img src={van.imageUrl} alt={van.name} />
                <div className="host-van-list">
                     <i className={`van-type ${van.type} selected`}>{van.type}</i>
                     <h2>{van.name}</h2>
                     <p className="van-price"><span>${van.price}</span>/day</p>
                </div>
                </div>
                <div>
                    <NavLink 
                    style={({ isActive }) => isActive ? activeStyles : null}
                    end
                    to='.' >
                        Detail
                    </NavLink>
                    <NavLink 
                    style={({ isActive }) => isActive ? activeStyles : null}
                    to="pricing"  >
                        Pricing
                    </NavLink>
                    <NavLink 
                    style={({ isActive }) => isActive ? activeStyles : null}
                    to="photos" >
                        Photos
                    </NavLink>
                </div>
                <Outlet  context={[van , setVans]} />
            </div>
        </div>
    )
}