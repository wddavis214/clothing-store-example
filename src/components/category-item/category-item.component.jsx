

import React from 'react'
import "./category-item.styles.scss"

function CategoryItem({ category }) {
    return (
        <div className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${category.imageUrl})`
            }}></div>
            <div className="category-body-container">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem