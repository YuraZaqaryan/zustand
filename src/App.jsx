import React, {useEffect} from "react";
import './App.css'
import { useDeviceStore } from "./store/store.js";

function App() {
    const [value, setValue] = React.useState("")
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const devices = useDeviceStore((state) => state.devices)
    const users = useDeviceStore((state) => state.users)
    const addDevice = useDeviceStore((state) => state.addDevice)
    const fetchUsers = useDeviceStore((state) => state.fetchUsers)
    // useEffect(() => {
    //     fetchUsers()
    // })
    const handleClick = () => {
        if(value) {
            addDevice(value)
        }
  }
  return (
    <div className="App">
        <input value={value} onChange={handleChange}/>
      <h2>{JSON.stringify(devices)}</h2>
      <button onClick={handleClick}>ADD DEVICE</button>
    </div>
  )
}

export default App
