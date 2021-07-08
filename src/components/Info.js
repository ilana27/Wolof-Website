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

            <label>Image</label>
            <input type="file" accept="image/png, image/gif, image/jpeg" id="imgfile"></input>

            <label>Audio</label>
            <input type="file" accept=".mp3" id="audiofile"></input>

            <button type="submit">Submit</button>
            
        </form>
    )
}

export default Info
