import React from 'react'
import "../App.css";

const Info = () => {
    return (
        <form className="form">
            <h1>Database information</h1>

            <label>Wolof</label>
            <input placeholder="Wolof word"/>

            <label>English</label>
            <input placeholder="English word"/>

            <label>French</label>
            <input placeholder="French word"/>

            <button type="submit">Submit</button>
            
        </form>
    )
}

export default Info
