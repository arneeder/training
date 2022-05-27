import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AllContacts from './pages/AllContacts'
import ContactDetails from './pages/ContactDetails'
import Home from './pages/Home'

const App = () => {

  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<AllContacts />} />
            <Route path='/contacts/details' element={<ContactDetails />} />
        </Routes>
    </div>
  )
}

export default App
