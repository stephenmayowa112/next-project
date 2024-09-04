// src/app/api/products/route.ts
import { NextResponse } from 'next/server'
import { Product } from '@/types/product'

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is product 1',
    price: 19.99,
    category: 'Category A',
    image: '/images/product1.jpg',
  },
  // Add more products here
]

export async function GET() {
  return NextResponse.json(products)
}