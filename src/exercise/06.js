// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null);
  const inputRef = React.useRef();
  // 🐨 add a submit event handler here (`handleSubmit`).

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value);
  };
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const handleChange = (event) => {
    const { value } = event.target; // can be destructured!
    const isValid = value === value.toLowerCase();
    setError(isValid ? null: 'Username must be lower case');    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlfor="usernameInput">Username:</label> {/* missed this instruction - important for screen readers */}
        <input id="usernameInput" type="text" ref={inputRef} onChange={handleChange}/>
      </div>
      <div role="alert" style={{color: 'red'}}>{error}</div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
