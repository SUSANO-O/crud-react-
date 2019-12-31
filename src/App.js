import React, { useState } from 'react'

import UseTable from './tables/UseTable'
import AddUserForm from './forms/AddUserForm'
const App = () => {
  const usersData = [
    { id: 1, name: 'tania', username: 'diaz'},
    { id: 2, name: 'andres', username: 'vargas'},
    { id: 3, name: 'maria', username: 'perez'}
  ]

  const [ users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !==id))
  }
	


  
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm  addUser={addUser}   />

        </div>
        <div className="flex-large">
          <h2>View users</h2>
        <UseTable  users={users} deleteUser={deleteUser}  />
        </div>
      </div>
    </div>
  )
}

export default App


// import React, { useState, Fragment } from 'react'
// import AddUserForm from './forms/AddUserForm'
// import UserTable from './tables/UseTable'

// const App = () => {
// 	const usersData = [
// 		{ name: 'Tania', username: 'floppydiskette' },
// 		{ name: 'Craig', username: 'siliconeidolon' },
// 		{ name: 'Ben', username: 'benisphere' },
// 	]

// 	const initialFormState = { name: '', username: '' }

// 	// Setting state
// 	const [ users, setUsers ] = useState(usersData)
// 	const [ currentUser, setCurrentUser ] = useState(initialFormState)

// 	// CRUD operations
// 	const addUser = user => {
// 		setUsers([ ...users, user ])
// 	}

	

// 	const deleteUser = id => {
// 		setUsers(users.filter(user => user.name !== id))
// 	}



// 	return (
// 		<div className="container">
// 			<h1>CRUD App with Hooks</h1>
// 			<div className="flex-row">
// 				<div className="flex-large">
// 							<h2>Add user</h2>
// 							<AddUserForm addUser={addUser} />
// 					)
// 				</div>
// 				<div className="flex-large">
// 					<h2>View users</h2>

// 					<UserTable users={users} deleteUser={deleteUser} />
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default App