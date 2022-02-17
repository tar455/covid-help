// import Error from './Error';
import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from '../component/Banner.js';
import { data } from "./patientdata.js";

export default function PatientShow(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <center> <Link to="/needs"><button className="btn"><strong>Post Your Needs</strong></button></Link></center>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Asansol</h5>
                <h6 className="need">Need Bed</h6>
                <h2>Request</h2>
                <p className="card-text">
                  My name is {data.patient[0].name}.
                  {data.patient[3].Message}.
                </p>
                <button className="btn btn-success">Thanks</button>
                <button className="btn btn-normal Track">InTouch</button>
                <Link to="/comment" className="btn  btn-light">comments</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
