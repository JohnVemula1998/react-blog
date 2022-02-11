import React from "react";
import "./Content.css";


function Content(props){
    return(
        <div className="content-card">
            <img className="image" src={props.image} alt="Not found"/>
            <h5 className="heading">{props.heading}</h5>
            <p className="content">{props.content}</p>
            <p className="topic">{props.topicname}</p>
        </div>
    )
}
export default Content;