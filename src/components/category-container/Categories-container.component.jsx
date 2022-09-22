import './Categories-container.styles.scss';
import React from 'react';
import Categories from '../../data/Categories';
import CategoryItem from '../category-item/Category-Item.component';

function CategoriesContainer() {
  return (
    <div className="categories-container">
      {Categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoriesContainer;
