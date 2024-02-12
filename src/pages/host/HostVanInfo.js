import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(){
    const [ van ] = useOutletContext();
    return(
        <div className="host-id-detail">
            <p> <b>Name:</b> {van.name}</p>
            <p> <b>Category:</b> {van.type}</p>
            <p> <b>Description:</b> {van.description}</p>
            <p> <b>Visibility:</b> Public</p>
        </div>
    )
}