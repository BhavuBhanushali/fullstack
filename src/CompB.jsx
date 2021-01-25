import React, { useContext } from 'react';
import CompC from './CompC'
import { FirstName, LastName } from './ContextApp';
const CompB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName)
  return (
    <>
      <h1>
        hello {fname} {lname} (useContext)
      </h1>
      <CompC />
    </>
  )

}
export default CompB;