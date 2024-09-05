// src/app/page.tsx
import { Product } from '../types/product'
import ClientProductList from '../components/ClientProductList'

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4">
      <main className="py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <ClientProductList initialProducts={products} />
      </main>
    </div>
  )
}