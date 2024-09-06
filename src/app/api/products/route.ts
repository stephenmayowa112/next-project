// src/app/api/products/route.ts
import { NextResponse } from 'next/server'
import { Product } from '@/types/product'

const products: Product[] = [
  {
    id: '1',
    name: 'Stylish Watch',
    description: 'A sleek and modern watch for everyday wear.',
    price: 99.99,
    category: 'Accessories',
    image: 'https://picsum.photos/id/111/300/200',
  },
  {
    id: '2',
    name: 'Leather Bag',
    description: 'High-quality leather bag for professionals.',
    price: 159.99,
    category: 'Accessories',
    image: 'https://picsum.photos/id/7/300/200',
  },
  {
    id: '3',
    name: 'Wireless Earbuds',
    description: 'Crystal clear sound with long battery life.',
    price: 79.99,
    category: 'Electronics',
    image: 'https://picsum.photos/id/3/300/200',
  },
  {
    id: '4',
    name: 'Yoga Mat',
    description: 'Eco-friendly yoga mat for your daily practice.',
    price: 29.99,
    category: 'Fitness',
    image: 'https://picsum.photos/id/28/300/200',
  },
]

export async function GET() {
  return NextResponse.json(products)
}