import React, { useState } from 'react';
import './Post.css';

const Post: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [dishName, setDishName] = useState('');
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleRestaurantNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantName(event.target.value);
  };

  const handleDishNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDishName(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="post-container">
      <h1>Post A Dish</h1>
      <label className="post-label">
        Restaurant Name:
        <input type="text" className="post-input" value={restaurantName} onChange={handleRestaurantNameChange} />
      </label>
      <label className="post-label">
        Dish Name:
        <input type="text" className="post-input" value={dishName} onChange={handleDishNameChange} />
      </label>
      <label className="post-label">
        Rating (0-100):
        <input type="number" className="post-input" min="0" max="100" value={rating} onChange={handleRatingChange} />
      </label>
      <label className="post-label">
        Upload Picture:
        <input type="file" className="post-input" onChange={handleFileChange} accept="image/*" />
      </label>
      {previewUrl && (
        <div className="image-preview">
          <img src={previewUrl} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default Post;
