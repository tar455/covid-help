import React from 'react'
import Login from './Login'

export default function Banner() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Login />
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <h2>#Stay Safe</h2>
                                </div>
                                <div className="carousel-item">
                                    <h2 className="d-block w-100">#Stay At Home<i className="fas fa-praying-hands"></i></h2>
                                </div>
                                <div className="carousel-item">
                                    <h2>#Use Mask</h2>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
