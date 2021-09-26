import React, { useEffect } from 'react';
// import Login from '../component/Login';
import Navbar from "../component/navbar";
import Loading from "./Loading";
import { useDispatch, useSelector } from 'react-redux';
import { NeedsAction } from "../reduxAction/NeedsAction";
// import { Link } from 'react-router-dom';
import PatientShow from './patientShow';
// import { data } from "./patientdata";
import Banner from '../component/Banner';
export default function Home(props) {
  const dispatch = useDispatch();
  const Patient = useSelector((state) => state.Needs_patient);
  const { loading, error, patients } = Patient;

  useEffect(() => {
    dispatch(NeedsAction())
  }, [dispatch]);
  return (
    <>
      <Navbar />
      {
        loading ? (<Loading />) :
          error ? (<p>hello</p>) : (
            <div>
              <Banner/>
              {patients.map((patient) => (
                  <PatientShow key={patient._id} patient={patient}></PatientShow>
                ))
              }
              
            </div>
          )}
    </>
  );
}
