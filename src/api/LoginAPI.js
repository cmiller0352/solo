const addUsers = (userObject) => {
  return fetch('http://ffd39e09.ngrok.io/morels/users/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(userObject)
  })
}

export default {
  addUsers: addUsers,
}
