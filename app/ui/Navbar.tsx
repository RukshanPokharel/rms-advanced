import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-3xl font-bold text-grey-800">
            <Link href="/home">Nepalisk Cusine</Link>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="#home" className="text-grey-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="#menu" className="text-gray-600 hover:text-gray-800">
                Menu
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-600 hover:text-gray-800">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-800"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded md:hidden">
            Menu
          </button>
        </div>
      </nav>
    </div>
  );
}
