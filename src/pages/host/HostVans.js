import React from "react";
import { NavLink } from "react-router-dom";
import { getHostVans } from "../../api"

export default function HostVans() { 
    const [vans, setVans] = React.useState([]); 
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
      async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])
    const vanElements = vans.map((van) => {
        return (
            <div key={van.id} onClick={() => {
                // window.location.href = `/Vans/${van.id}`;
            }} className="host-van-single">
                <NavLink to={`${van.id}`}
                    aria-label={`View details for ${van.name},
                    priced at $${van.price} per day`}
                    className="host-van-link-wrapper"
                >
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </NavLink>
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