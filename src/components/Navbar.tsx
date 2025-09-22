import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const cartItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = String(formData.get('q') || '').trim();
    if (!query) return;
    navigate(`/products?search=${encodeURIComponent(query)}`);
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle Menu"
              onClick={() => setIsOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MC</span>
              </div>
              <span className="hidden sm:block text-lg font-semibold tracking-tight">Mustiban Concept</span>
            </Link>
          </div>

          <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center w-full max-w-md">
            <input
              type="search"
              name="q"
              placeholder="Search products..."
              className="w-full rounded-l-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button type="submit" className="rounded-r-md bg-gray-900 px-4 py-2 text-white hover:bg-black">
              Search
            </button>
          </form>

          <div className="flex items-center gap-2">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hidden md:inline-block px-3 py-2 rounded-md ${isActive ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-black'}`
              }
            >
              Products
            </NavLink>

            <NavLink to="/cart" className="relative p-2 rounded-md hover:bg-gray-100" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-700">
                <path d="M2.25 3a.75.75 0 0 0 0 1.5h1.309l.401 1.606 1.358 5.431a2.25 2.25 0 0 0 2.186 1.708h8.54a2.25 2.25 0 0 0 2.186-1.708l1.358-5.432a.75.75 0 0 0-.728-.927H5.477l-.36-1.444A1.5 1.5 0 0 0 3.559 3H2.25z" />
                <path d="M9 21.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7.5-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="search"
                name="q"
                placeholder="Search products..."
                className="w-full rounded-l-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button type="submit" className="rounded-r-md bg-gray-900 px-4 py-2 text-white hover:bg-black">
                Search
              </button>
            </form>

            <nav className="space-y-1">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/cart"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`
                }
              >
                Cart
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


