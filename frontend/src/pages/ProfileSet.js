import React,{useState,useEffect} from 'react';

export default function ProfileSet() {
    const file_loc="/assets/images/Blank-Profile.png";
    const [pic,setPic]=useState(file_loc);
    const profileUpdate=(event)=>
    {
        setPic(event.target.value);
    }
    // useEffect(()=>
    // {
        
    // })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 mx-auto">
                        <div className="profile">
                            <img src={`${process.env.PUBLIC_URL}${file_loc}`} alt="Profile Pic" className="profile-pic" />
                            <input type="file" onChange={profileUpdate}></input>
                        </div>
                        <button type="submit">save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
