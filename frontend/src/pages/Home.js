import React from 'react';
import Login from '../component/Login';
import Navbar from "../component/Navbar";
import { data } from "./patientdata.js";
// import {NeedsAction} from "../reduxAction/NeedsAction";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <center> <a href="/needs"><button className="btn"><strong>Post Your Needs</strong></button></a></center>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data.patient[0].Address}</h5>
                <h6 className="need">Need Bed</h6>
                <h2>Request</h2>
                <p className="card-text">
                  My name is {data.patient[0].name}.
                  {data.patient[0].Message}.
                </p>
                <a href="/" className="btn btn-success">Thanks</a>
                <a href="/comment" className="btn  btn-light">comments</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card-body">
              <h5 className="card-title">Asansol</h5>
              <h6 className="need">Need {data.patient[1].need}</h6>
              <h2>Request</h2>
              <p className="card-text">
                I am {data.patient[1].name}.My Blood groups is {data.patient[1].BloodGroup}.
                {data.patient[1].Message}
              </p>
              <a href="/" className="btn btn-success">Thanks</a>
              <a href="/comment" className="btn  btn-light">comments</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
