import React from 'react';
import categories from './Data/Categories';
import './categories.styles.scss';

function App() {
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p> Shop Now </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
