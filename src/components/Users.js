import React from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:5000/api/users')
        .then(res => {
            console.log(res)
            setUsers(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div>
            {users.map(each => (
                <>
                <p>{each.username}</p>
                </>
            ))
            }
        </div>
    )
}

export default Users;