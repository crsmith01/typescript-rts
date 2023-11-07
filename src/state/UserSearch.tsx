import React from "react";
import { useState } from "react";

const users = [
    { name: 'Sarah', age: 20},
    { name: 'Alex', age: 21},
    { name: 'Michael', age: 22}

]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })

        console.log(foundUser)
    }

    return (
        <>
            User Search
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onClick}>Find User</button>
            <div>
                {/* only try to access name property of user if user is defined */}
                {user && user.name}
                {user && user.age}
            </div>
        </>
    )
}

export default UserSearch;