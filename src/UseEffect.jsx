import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

const UseEffects = () => {
    const [data, setData] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        alert("I am clicked :   " + data);
    }, [data]);

    return (
        <>

            <Button variant="outlined" color="primary"
                onClick={() => {
                    setData(data + 1)
                }
                }>
                Click Me {data}
            </Button>
            <Button style={{ paddingLeft: '20px' }} variant="outlined" color="primary"
                onClick={() => {
                    setValue(value + 1)
                }
                }>
                Click Me {value}
            </Button>
            <spam style={{ fontSize: '30px', paddingLeft: '20px' }}>useEffect (hook)</spam>
        </>
    );
}
export default UseEffects;

