import React from 'react';

 
function Card(props) {

  return (

    <div className="card">
      <img src={props.img} className="card-img-top img-fluid w-100" alt={props.imgAlt} style={{objectFit: "cover", height: "30rem"}}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <a href={props.buttonURL} className="btn btn-primary">Watch!</a>
      </div>
    </div>
  );
}

export default Card;