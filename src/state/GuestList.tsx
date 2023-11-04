import React from "react"
import { useState } from "react"

// not including angled backets <> because not expected to pass in any props
const GuestList: React.FC = () => {
    const [name, setName] = useState('')
    // initialize as an empty array
    // shows guests is an array of type never since we haven't initialized it with any values. TS doesn't know what type of values will be in the array
    // const [guests, setGuests] = useState([]) 
    const [guests, setGuests] = useState<string[]>([]) 

    const onClick = () => {
        setName('') // empty out that input field
        setGuests([...guests, name]) // take current array of guests, take all strings out of it, add them to a new array, and add name to the very end
    }

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map(guest => (
                <li key={guest}>{guest}</li>
            ))}
        </ul>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={onClick}>Add Guest</button>
    </div>
}

export default GuestList