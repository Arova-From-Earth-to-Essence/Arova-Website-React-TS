// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Arova</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#" className="hover:text-blue-500">Home</a></li>
        <li><a href="#" className="hover:text-blue-500">Shop</a></li>
        <li><a href="#" className="hover:text-blue-500">About</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  )
}
