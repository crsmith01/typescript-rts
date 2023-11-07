import { Component } from 'react'

interface User {
    name: string
    age: number
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string
    user: User | undefined
}

class UserSearch extends Component<UserSearchProps> {
   state: UserSearchState = {
        name: '',
        user: undefined
   }

    onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name
        })

        this.setState({ user: foundUser })

        console.log(foundUser)
    }

   render() {
    const { name, user } = this.state

    return (
        <>
            User Search
            <input value={name} onChange={e => this.setState({ name: e.target.value })}/>
            <button onClick={this.onClick}>Find User</button>
            <div>
                {/* only try to access name property of user if user is defined */}
                Name: {user && user.name}.
                Age: {user && user.age}.
            </div>
        </>
    )
   }
}

export default UserSearch