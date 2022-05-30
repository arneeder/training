import { useState } from 'react';
import './App.css'
import List from './components/list';
import Toggle from './components/Toggle';


function App() {
    
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
    ];

    const [toggle, setToggle] = useState(false)

    return (
        <div className="App">
            <List users={users} />
            <Toggle toggle={toggle} setToggle={setToggle} />
        </div>
    )
}

export default App
