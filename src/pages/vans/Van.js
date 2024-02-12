import React from "react"
import { createServer, Model } from "miragejs"
import { Link , useSearchParams} from "react-router-dom"


//server to fetch the requested data
createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "123"  })
        server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" ,hostId: "123" })
        server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury",hostId: "456"  })
        server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple",hostId: "789"  })
        server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789" })
        server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged",hostId: "123" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })
        
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
            // Hard-code the hostId for now
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })
    }
})


export default function Van() {
    
    const [ searchParams , setSearchParams  ] = useSearchParams();
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans)) 
    }, [])

    let typeFilter =  searchParams.get("type")
    const vanFilter = typeFilter 
    ? vans.filter(van => van.type.toLowerCase() === typeFilter)
    : vans
   

    
    const vanElements = vanFilter.map(van => (
        <div  key={van.id} onClick={() => {
            // window.location.href = `/Vans/${van.id}`;
        }} className="van-tile" >
          <Link to={`/Vans/${van.id}`}
                aria-label={`View details for ${van.name}, 
                priced at $${van.price} per day`}
               >
            <img src={van.imageUrl}  alt={van.name}/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p> 
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
        </div>
    ))
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
          if (value === null) {
            prevParams.delete(key)
          } else {
            prevParams.set(key, value)
          }
          return prevParams
        })
      }
   
    return (
    <div className="vans">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons"> 
        <button 
             onClick={() => handleFilterChange("type", "simple")}
             className={
                `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
            }
        >Simple
        </button>
        <button 
             onClick={() => handleFilterChange("type", "luxury")}
             className={
                `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
            }
         >Luxury
         </button>
        <button 
          onClick={() => handleFilterChange("type", "rugged")}
          className={
            `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
        }
        >Rugged
        </button>
        {  typeFilter ? <button
                    onClick={() => handleFilterChange("type", null)}
                    className="van-type clear-filters"
                >Clear filter</button> : null}
        </div>
        <div className="van-list-container"> 
            <div  className="van-list">
            {vanElements}
            </div>
        </div>
    </div>
    )
}

//another wat to filter the vans by setSeachParams
//<button onClick={() => setSearchParams({type: "simple"})}>Jedi</button>
//<button onClick={() => setSearchParams({type: "luxury"})}>Sith</button>
//<button onClick={() => setSearchParams({type: "rugged"})}>Clear</button>

/* 
        <Link to="?type=jedi">Jedi</Link>
        <Link to="?type=sith">Sith</Link>
        <Link to=".">Clear</Link> 
*/
// for multiple search in url 
/* 
call the function in "to" of the "link" to filter the vans 
function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)// searchParams is a hook
    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }
*/

/* 
callback function in onClick of the "button" to filter the vans
function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }
*/