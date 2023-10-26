import React, { useState } from "react";
import './nav-search.css'

function Searchs(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event)=> {
        const name = event.target.sname;
        const value = event.target.value;
        setInputs((values) =>({
            ...values,
            [name]:value,
        }));
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs);
    };
    return (
        <div>
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={handleSubmit} className="container2">
                <input
                    className="input"
                    placeholder="Search"
                    type="text"
                    name="Search Name"
                    value={inputs.sname}
                    onChange={handleChange}> 
                       
                </input>         
            </form>
        </div>
        
    );
}
export default Searchs