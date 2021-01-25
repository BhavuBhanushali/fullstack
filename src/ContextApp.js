
import { createContext } from 'react';
import './App.css';
// import Todo from './Todo'
import CompA from './CompA'
const FirstName = createContext();
const LastName = createContext();

function ContextApp() {
  return (
    <>
      {/* <CompA /> */}
      <FirstName.Provider value={"bhavesh"}>
        <LastName.Provider value={"bhanushali"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>

    </>
  );
}

export default ContextApp;
export { FirstName , LastName};
