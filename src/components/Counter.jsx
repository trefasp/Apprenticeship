import {Button, Grid} from "@material-ui/core";
import {useState} from "react";

export const Counter = () => {
    const [value, setValue] = useState(0);

    const handleIncreaseValue = () => {
        setValue(value + 1);
    };

    const handleDecreaseValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return (
        <Grid>
            <Button onClick={handleIncreaseValue}>+</Button>
            <h2>{value}</h2>
            <Button onClick={handleDecreaseValue}>-</Button>
        </Grid>
    )
}
