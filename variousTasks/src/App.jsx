import { useState } from 'react';
import './App.css'
import DataBinding from './components/DataBinding';
import List from './components/list';
import Toggle from './components/Toggle';


function App() {
    
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
    ];

    const [toggle, setToggle] = useState(false)
    const [inputString, setInputString] = useState('')

    return (
        <div className="App">
            <List users={users} />
            <Toggle toggle={toggle} setToggle={setToggle} />
            <DataBinding inputString={inputString} setInputString={setInputString} />
        </div>
    )
}

export default App
