// src/components/ClientProductList.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Product, ProductFilters } from '../types/product'
import FilterControls from './FilterControls'

interface ClientProductListProps {
  initialProducts: Product[]
}

export default function ClientProductList({ initialProducts }: ClientProductListProps) {
  const [products, setProducts] = useState(initialProducts)
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(initialProducts.map(p => p.category)))
    setCategories(uniqueCategories)
  }, [initialProducts])

  const handleFilterChange = (filters: ProductFilters) => {
    const filteredProducts = initialProducts.filter((product) => {
      const categoryMatch = !filters.category || product.category === filters.category
      const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice
      return categoryMatch && priceMatch
    })
    setProducts(filteredProducts)
  }

  return (
    <>
      <FilterControls categories={categories} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={product.image} alt={product.name} width={300} height={200} className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}