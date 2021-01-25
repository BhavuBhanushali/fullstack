import React, { useState } from 'react'
import './App.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const Todo = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const incNum = () => {
        setValue(value + 1);

    }
    const decNum = () => {
        if (value <= 0) {
            alert("value can't decrement than zero!!");
            setValue(0);
        }
        else {
            setValue(value - 1);
        }
    }

    return (
        <>
            <div className={classes.root}>
                <div className="main_div">
                    <div className="center_div">
                        <h1>Material Icon & useState(hook)</h1>
                        <h1 className="heading">{value}</h1>
                        <div className="btn_div">
                            <Button onClick={incNum} variant="outlined" color="primary">
                                <AddIcon />
                            </Button>
                            <Button onClick={decNum} variant="outlined" color="secondary">
                                <RemoveIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo;