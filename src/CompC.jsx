import React from 'react';
import { FirstName, LastName } from './ContextApp';

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1>
                                        Hello {fname} {lname} (Provider-Consumer)
                                    </h1>
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}

            </FirstName.Consumer>

        </>
    )

}
export default CompC;