import React, { useContext } from 'react';
import CompC from './CompC'
import { FirstName, LastName } from './ContextApp';
const CompB = () => {
  const spans = {
    color: 'red',
    fontSize: '40px'
  }

  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <>
      <h1>
        Hello <span style={spans}>  {fname}  {lname}</span> (useContext)
      </h1>
      <CompC />
    </>
  )

}
export default CompB;