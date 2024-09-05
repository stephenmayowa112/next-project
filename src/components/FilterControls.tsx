// src/components/FilterControls.tsx
'use client'

import React, { useState } from 'react'
import { ProductFilters } from '../types/product'

interface FilterControlsProps {
  categories: string[];
  onFilterChange: (filters: ProductFilters) => void;
}

export default function FilterControls({ categories = [], onFilterChange }: FilterControlsProps) {
  const [category, setCategory] = useState<string>('')
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(1000)

  const handleFilterChange = () => {
    onFilterChange({ category, minPrice, maxPrice })
  }

  return (
    <div className="mb-6 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
      <div className="flex flex-wrap gap-4">
        <div>
          <label htmlFor="category" className="block mb-2">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="minPrice" className="block mb-2">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="border rounded px-2 py-1 w-24"
          />
        </div>
        <div>
          <label htmlFor="maxPrice" className="block mb-2">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="border rounded px-2 py-1 w-24"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={handleFilterChange}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}