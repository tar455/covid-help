import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NeedsAction } from '../reduxAction/NeedsAction';
import Loading from './Loading';

export default function PatientShow() {
  const dispatch = useDispatch();
  const Patient = useSelector((state) => state.Needs_patient);
  const { loading, error, patient } = Patient;

  useEffect(() => {
    dispatch(NeedsAction())
  }, [dispatch]);
  return (
    <>
            {
              loading?(<Loading/>)
              :(
              <>
              </>
              )
            }
    </>
  );
}
