import { useState, useEffect } from 'react'

import './App.css'

// API
const apiEndpoint = new URL('https://v2.jokeapi.dev/joke/Any');
apiEndpoint.searchParams.set('blacklistFlags', 'nsfw,religious,political,racist,sexist,explicit');
apiEndpoint.searchParams.set('type', 'single');

const App = () => {
  const placeholderText = 'Get ready to laugh...';
  const [jokeObj, setJokeObj] = useState<Joke | null>(null);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchJoke = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setJokeObj(data);
      } catch (error) {
        console.error("Error fetching joke:", error);
      } finally {
        setIsLoading(false);
        setShouldFetch(false);
      }
    };

    if (shouldFetch) {
      fetchJoke();
    }
  }, [shouldFetch]);

  return (
    <div>
      <h1 className='title'>Simple useEffect Example</h1>
      <h3 className='subtitle'>Click for a random joke</h3>

      <div className='card'>
        <div className='joke-text'>
          {isLoading ? "Loading..." : `"${(jokeObj && jokeObj.joke) || placeholderText}"`}
        </div>
        <button onClick={() => setShouldFetch(true)}>Get Joke</button>
      </div>
    </div>
  )
}

export default App
