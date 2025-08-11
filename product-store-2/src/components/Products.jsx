import { useState } from 'react'

// Import images for each product card
import img1 from '../components/IMG-20250731-WA0001.jpg'
import img2 from '../components/IMG-20250731-WA0002.jpg'
import img3 from '../components/IMG-20250731-WA0003.jpg'
import img4 from '../components/IMG-20250731-WA0004.jpg'
import img5 from '../components/IMG-20250731-WA0005.jpg'
import img6 from '../components/IMG-20250731-WA0006.jpg'
import img7 from '../components/IMG-20250731-WA0007.jpg'
import img8 from '../components/IMG-20250731-WA0008.jpg'
import img9 from '../components/IMG-20250731-WA0009.jpg'
import img10 from '../components/IMG-20250731-WA0010.jpg'
import img11 from '../components/IMG-20250731-WA0011.jpg'
import img12 from '../components/IMG-20250731-WA0012.jpg'
import img13 from '../components/IMG-20250731-WA0013.jpg'

// Product data array with details for each watch
const productsData = [
  {
    id: 1,
    name: "Classic Silver Watch",
    image: img1,
    description: "Elegant silver watch with leather strap.",
    price: 99.99,
    category: "Classic"
  },
  {
    id: 2,
    name: "Modern Black Watch",
    image: img2,
    description: "Sleek black watch for modern style.",
    price: 129.99,
    category: "Modern"
  },
  {
    id: 3,
    name: "Luxury Gold Watch",
    image: img3,
    description: "Premium gold watch for special occasions.",
    price: 249.99,
    category: "Luxury"
  },
  {
    id: 4,
    name: "Sporty Blue Watch",
    image: img4,
    description: "Durable blue watch for active lifestyle.",
    price: 89.99,
    category: "Sport"
  },
  {
    id: 5,
    name: "Minimalist White Watch",
    image: img5,
    description: "Clean white design for everyday wear.",
    price: 79.99,
    category: "Minimalist"
  },
  {
    id: 6,
    name: "Chronograph Steel Watch",
    image: img6,
    description: "Steel chronograph with multiple dials.",
    price: 159.99,
    category: "Chronograph"
  },
  {
    id: 7,
    name: "Vintage Brown Watch",
    image: img7,
    description: "Retro brown watch with classic look.",
    price: 109.99,
    category: "Vintage"
  },
  {
    id: 8,
    name: "Digital Black Watch",
    image: img8,
    description: "Modern digital display in black.",
    price: 59.99,
    category: "Digital"
  },
  {
    id: 9,
    name: "Elegant Rose Gold Watch",
    image: img9,
    description: "Rose gold finish for a touch of elegance.",
    price: 139.99,
    category: "Luxury"
  },
  {
    id: 10,
    name: "Outdoor Green Watch",
    image: img10,
    description: "Rugged green watch for outdoor adventures.",
    price: 99.99,
    category: "Sport"
  },
  {
    id: 11,
    name: "Slim Black Watch",
    image: img11,
    description: "Ultra-slim black watch for formal events.",
    price: 119.99,
    category: "Minimalist"
  },
  {
    id: 12,
    name: "Kids Colorful Watch",
    image: img12,
    description: "Fun and colorful watch for kids.",
    price: 39.99,
    category: "Kids"
  },
  {
    id: 13,
    name: "Smart Fitness Watch",
    image: img13,
    description: "Track your fitness with this smart watch.",
    price: 149.99,
    category: "Digital"
  },
]

// Build a unique list of categories for filtering
const categories = ["All", ...Array.from(new Set(productsData.map(p => p.category)))]

export default function Products() {
  // State for the currently selected category filter
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All"
    ? productsData
    : productsData.filter(p => p.category === selectedCategory)

  return (
    <div className="p-6">
      {/* Page title */}
      <h2 className="text-2xl font-bold mb-4 text-yellow-400 font-serif">Products</h2>
      {/* Category filter buttons */}
      <div className="mb-4 flex flex-wrap gap-2 w-full">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded font-semibold min-w-[100px] text-center ${
              selectedCategory === cat
                ? "bg-yellow-500 text-black"
                : "bg-zinc-800 text-yellow-400 border border-yellow-700"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-zinc-900 rounded shadow-lg p-4 border border-yellow-700">
            {/* Product image */}
            <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-2 rounded bg-black" />
            {/* Product name */}
            <h3 className="font-semibold text-yellow-400">{product.name}</h3>
            {/* Product description */}
            <p className="text-yellow-200">{product.description}</p>
            {/* Product price */}
            <div className="mt-2 font-bold text-yellow-300">${product.price}</div>
            {/* Product category */}
            <div className="text-xs text-yellow-500">{product.category}</div>
          </div>
        ))}
      </div>
    </div>
  )
}