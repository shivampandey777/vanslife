import React from "react";
import { Link ,  useParams } from "react-router-dom";

export default function HostVansDetail() {
    const params = useParams()
    const [van, setVans] = React.useState([])
    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then((res) => res.json())
        .then(data => setVans(data.vans))
    },[params.id])

    return (
        <div>
            <div className="back-btn">
                <p>⬅</p>
            <Link to="/host/Vans" >Back to all vans</Link>
            </div>
         {van ? (
          <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                </div>
            ) : <h2>Loading...</h2>}   

        </div>
    )
}