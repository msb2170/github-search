import {useState} from 'react';
import './App.css';
import Form from './Form';
import User from './User'

async function getResults(query) {
  try {
    const data = await fetch(`https:api.github.com/search/users?q=${query}`)
    const json = await data.json()
    return json.items || []
  } catch (error) {
    throw new Error(error)
  }
}

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  function handleChange(e) {
    setQuery(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const results = await getResults(query)
    setResults(results)
    console.log(results)
  }

  return (
    <div className="App">
      <h2>Github User Search</h2>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={query} 
      />
      <h3>Results:</h3>
      {results.map((user) => (
        <User
          avatar={user.avatar_url}
          key={user.login}
          url={user.html_url}
          username={user.login} 
        />
      )
      )}
    </div>
  );
}

export default App;
