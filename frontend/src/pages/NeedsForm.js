import React, { useState } from 'react'
import Navbar from "../component/Navbar";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';

const required=(value)=>
{
    if(!value.toString().trim().length)
    {
        return <span className="must">required</span>;
    }
}
const phone=(value)=>{
    if(value.toString().trim().length<10 & value.toString().trim().length!==10)
    {
        return <span className="error">Enter Valid phone number</span>
    }
}
const pin=(value)=>{
    if(value.toString().trim().length<6)
    {
        return <span className="error">Not valid PIN code</span>;
    }
}
function NeedsFrom() {
    const [need, setNeed] = useState();
    const [Name, setName] = useState();
    const [Phone, setPhone] = useState();
    const [Address, setAddress] = useState();
    const [PinCode, setPinCode] = useState();
    const [BloodGroup, setBloodGroup] = useState();
    const [Message, setMessage] = useState();
    const NeedUpdate = (event) => {
        setNeed(event.target.value)
    }
    const NameUpdate = (event) => { // Dealing with name field changes to update our state
        setName(event.target.value)
    }
    const PhoneUpdate = (event) => {
        setPhone(event.target.value)
    }
    const AddressUpdate = (event) => {
        setAddress(event.target.value)
    }
    const PinCodeUpdate = (event) => {
        setPinCode(event.target.value)
    }
    const BloodGroupUpdate = (event) => {
        setBloodGroup(event.target.value)
    }
    const MessageUpdate = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = () => { // Once the form has been submitted, this function will post to the backend
        const postURL = "/api/staff/"; //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                need: need,
                Name: Name,
                Phone: Phone,
                Address: Address,
                PinCode: PinCode,
                BloodGroup: BloodGroup,
                Message: Message
            })
        })
            .then(() => {
                // Once posted, the user will be notified 
                alert('You have been added to the system!');
            })
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 mx-auto">
                        <h1 className="page-header">Covid-help</h1>
                        <p>Please Help for humanity</p>
                        <a href="/"> Let's save one </a>
                        <label htmlFor="patientInfo">patient</label>
                        <br />
                        <Form onSubmit={handleSubmit}>
                            <input list="Needs" onChange={NeedUpdate} name="Need" id="Need" placeholder="Your Need" className="from-control" />
                            <datalist id="Needs">
                                <option value="Oxygen" />
                                <option value="Bed" />
                                <option value="Plasma" />
                            </datalist>
                            <br />
                            <label htmlFor="Name">Enter Name:</label>
                            <Input type="text" id="Name"
                             name="name"
                             validations={[required]}
                              onChange={NameUpdate} 
                              className="form-control"
                               placeholder="Enter Name" />
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <Input type="number"
                             name="Phone" 
                             onChange={PhoneUpdate}
                              className="form-control"
                               id="phoneNumber" 
                               validations={[required,phone]}
                               placeholder="Enter phone Number" />
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" className="form-control" onChange={AddressUpdate} id="address" placeholder="Enter address" />
                            <label htmlFor="pinCode">Pin Code:</label>
                            <Input type="text" 
                            name="pinCode" 
                            className="form-control"
                             onChange={PinCodeUpdate}
                              id="pinCode"
                              validations={[required,pin]}
                              placeholder="Enter pin code" />
                            <label htmlFor="bloodGroup">Blood Group:(If Need Plasma)</label>
                            <input list="BloodGroup" name="BloodGroup" id="bloodGroup" onChange={BloodGroupUpdate} placeholder="Enter blood group" className="form-control" />
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
                            <textarea className="form-control" name="info" id="" onChange={MessageUpdate} cols="50" rows="10" placeholder="Any additional info You  want to share"></textarea>
                            <Button type="submit" className="btn btn-primary" >Get Help</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NeedsFrom;
