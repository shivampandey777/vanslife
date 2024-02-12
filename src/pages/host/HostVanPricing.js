import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing(){
    const [ van ] = useOutletContext();
    return (
        <div className="van-pricing">
            <p className="van-price"><span><b>${van.price}</b></span>/day</p>
        </div>
    )
}