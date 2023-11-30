import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/search/?queryy=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      console.log(data);
      let finalData = shuffleArray(data);
      setData(finalData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="App">
      <h1 className="title">Spood</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div className="image-grid">
        {data.map((data, index) => (
          <a href={data['source_url']}>
            <div key={data['id']} className="grid-item">
              <img src={data['image_url']} alt={`${index}-${data['id']}`} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
