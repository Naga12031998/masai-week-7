import React from 'react';

class Carosul extends React.Component{
    render(){
        return (
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card bg-dark text-white">
                                <img src="https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="card-img" alt="corosel1" style={{height:400}}/>
                                <div className="card-img-overlay text-center">
                                    <h5 className="card-title">Surface Pro</h5>
                                    <p className="card-text">Stand out from the ordinary</p>
                                    <button className="rounded-0 text-black bg-light border border-dark font-weight-bold">SHOP NOW ></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card bg-dark text-dark">
                                <img src="https://images.unsplash.com/photo-1565375706248-2fd61105f01e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" className="card-img" alt="corosel1" style={{height:400}}/>
                                <div className="card-img-overlay text-center">
                                    <h5 className="card-title">Go a touch above ordinary</h5>
                                    <p className="card-text">Surface laptop 2</p>
                                    <button className="rounded-0 text-white bg-dark border border-white font-weight-bold">SHOP NOW ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Carosul;
