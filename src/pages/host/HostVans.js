import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() { 
    const [vans, setVans] = React.useState([]); 
    React.useEffect(() => {
        fetch("/api/host/vans")
        .then((res) => res.json())
        .then((data) => setVans(data.vans))
    }, [])
    const vanElements = vans.map((van) => {
        return (
            <div key={van.id} onClick={() => {
                // window.location.href = `/Vans/${van.id}`;
            }} className="host-van-single">
                <Link to={`/host/vans/${van.id}`}
                    aria-label={`View details for ${van.name},
                    priced at $${van.price} per day`}
                    className="host-van-link-wrapper"
                >
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </Link>
            </div>
        )
    
    })
    return (
        <div className="host-vans-title">
            <h1>Your Listed Vans</h1>
            <div className="host-vans-list">  
            {
                    vans.length > 0 ? (
                        <section>
                            {vanElements}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </div>
    );
}