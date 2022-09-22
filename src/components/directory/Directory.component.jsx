import './Directory.styles.scss';
import React from 'react';
import Categories from '../../data/Categories';
import CategoryItem from '../category-item/Category-Item.component';

function Directory() {
  return (
    <div className="directory-container">
      {Categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Directory;
