// ## MORE ON STATE

// ### Structure State 

import { useState } from "react";

export default function Person(){
    const [person, setPerson] = useState({ name: "John", age: 100 });
    
    const handleIncreaseAge = () => {
        const newPerson = { ...person, age: person.age + 1 };
        setPerson(newPerson);
    }

    return (
        <>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
        </>
    );
}

// We should always provide a new Object for setState to trigger a rerender.

// ### How state updates 

// -  whenever we call the setState function, React will apply the update in the next component render

// ### Controlled Components

export function CustomInput() {
    const [value, setValue] = useState('');

    return (
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
    );
}