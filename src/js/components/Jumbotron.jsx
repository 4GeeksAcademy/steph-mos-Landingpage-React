import React from "react";

const Jumbotron = () => {
    return (
        <div className="row justify-content-center g-4 mx-auto bg-light" >
                <h1 className="display-5 fw-normal p-3">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur similique cupiditate blanditiis, maiores tempore reprehenderit, nemo recusandae quis accusantium vel quasi. Error tenetur, dolore hic</p>
                
                <div className="p-3">
                    <button href="#" className="btn btn-primary">Call to action!</button>
                </div>
                
        </div>
    );
};

export default Jumbotron;