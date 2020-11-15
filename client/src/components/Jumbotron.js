import React from "react";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Welcome to SubAway.</h1>
            <p className="lead">Where we manage your subscriptions so you dont have to.</p>
            <hr className="my-4" />
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    )
}

export default Jumbotron;