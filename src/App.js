import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [boardgameData, setBoardgameData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://www.boardgamegeek.com/xmlapi2/";

  useEffect(() => {
    async function  fetchData() {
      let response = await getAllGames(initialUrl);
    }
  }, [])

  return (
    <div>

    </div>
  );
}

export default App;
