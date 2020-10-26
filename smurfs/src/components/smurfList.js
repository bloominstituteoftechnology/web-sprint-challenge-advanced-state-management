import React from "react";
import SmurfCard from "./smurfCard";

export default function SmurfList() {
    return(
        <div className="smurf-list">
            {state.data.map((obj) => {
                return <SmurfCard key={obj.id} object={obj} />
            })}
        </div>
    )
}