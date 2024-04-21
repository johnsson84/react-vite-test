import { useRef } from "react";

const Form = () => {

    const saveInput = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(saveInput);
        if (saveInput.current.value === "") {
            alert("Please input name!")
            return
        };
        alert("Name: " + saveInput.current.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" ref={saveInput} placeholder="Enter your name"></input>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default Form;
