import React from 'react'
import Navbar from '../component/navbar'

export default function NeedsFrom() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h1 className="page-header">Covid-help</h1>
                        <p>Please Help for humanity</p>
                        <a href="/home"> Let's save one </a>
                        <label for="patientInfo">patient</label>
                        <br />
                        <form action="/save-data" method="POST">
                            <input list="Needs" name="Need" id="Need" placeholder="Your Need" className="from-control" />
                            <datalist id="Needs">
                                <option value="Oxygen" />
                                <option value="Bed" />
                                <option value="Plasma" />
                            </datalist>
                            <br/>
                            <label for="Name">Enter Name:</label>
                            <input type="text" id="Name" className="form-control" placeholder="Enter Name" />
                            <label for="phoneNumber">Phone Number:</label>
                            <input type="number" className="form-control" id="phoneNumber" placeholder="Enter phone Number" />
                            <label for="address">Address:</label>
                            <input type="text" className="form-control" id="address" placeholder="Enter address" />
                            <label for="pinCode">Pin Code:</label>
                            <input type="text" className="form-control" id="pinCode" placeholder="Enter pin code" />
                            <label for="bloodGroup">Blood Group:(If Need Plasma)</label>
                            <input list="BloodGroup" id="bloodGroup" placeholder="Enter blood group" className="form-control" />
                            <datalist id="BloodGroup">
                                <option value="A+" />
                                <option value="A-" />
                                <option value="B+" />
                                <option value="B-" />
                                <option value="AB+" />
                                <option value="AB-" />
                                <option value="O+" />
                                <option value="O-" />
                            </datalist>
                            <textarea name="info" id="" cols="30" rows="10" placeholder="Any additional info You  want to share"></textarea>
                            <input type="submit" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
