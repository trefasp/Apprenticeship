import './App.css';
import {Welcome} from "./components/Welcome";
import {useState} from "react";
import {Input} from "@material-ui/core";
import {Counter} from "./components/Counter";
import {Orders} from "./views/Orders";

function App() {
    const [value, setValue] = useState();

    const handleChangeInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="App">
            <Welcome name={value}/>
            <Input onChange={handleChangeInput}/>
            <Counter/>
            <Orders/>
        </div>
    );
}

export default App;
