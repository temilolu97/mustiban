import { Link } from 'react-router-dom';
import { products } from '../data/products';

const HomePage = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Welcome to</p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-900">MUSTIBAN CONCEPT</h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-gray-700">
              Your go-to destination for premium electronics and reliable tech solutions. From home entertainment systems to essential office devices, we bring you cutting-edge technology at unbeatable prices, delivered straight to your doorstep.
            </p>
            <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-gray-700">
              Powering Your Everyday Life with Technology
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-black transition-colors"
            >
              Shop Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Who We Are</h3>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              MUSTIBAN CONCEPT is a trusted provider of electronics and computer-related services. We specialize in delivering high-quality products that meet the needs of both households and businesses. Our commitment to excellence ensures that every product we offer is durable, efficient, and tailored to your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-md p-6 text-center">
              <h4 className="text-lg font-medium text-gray-900 mb-1">Free delivery in Lagos</h4>
              <p className="text-gray-600 text-sm">For orders above ₦250,000</p>
            </div>
            <div className="border border-gray-2 00 rounded-md p-6 text-center">
              <h4 className="text-lg font-medium text-gray-900 mb-1">1-year warranty</h4>
              <p className="text-gray-600 text-sm">On selected products</p>
            </div>
            <div className="border border-gray-200 rounded-md p-6 text-center">
              <h4 className="text-lg font-medium text-gray-900 mb-1">5-day return policy</h4>
              <p className="text-gray-600 text-sm">For eligible items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-md p-5">
              <h5 className="font-medium text-gray-900 mb-2">Privacy Policy</h5>
              <p className="text-sm text-gray-600">Your privacy is important to us. We protect your data and never share it without your consent.</p>
            </div>
            <div className="border border-gray-200 rounded-md p-5">
              <h5 className="font-medium text-gray-900 mb-2">Terms & Conditions</h5>
              <p className="text-sm text-gray-600">By purchasing from us, you agree to our warranty, delivery, and return policies.</p>
            </div>
            <div className="border border-gray-200 rounded-md p-5">
              <h5 className="font-medium text-gray-900 mb-2">Payment Options</h5>
              <p className="text-sm text-gray-600">We accept bank transfers, debit cards, and secure online payments.</p>
            </div>
            <div className="border border-gray-200 rounded-md p-5">
              <h5 className="font-medium text-gray-900 mb-2">Return Policy</h5>
              <p className="text-sm text-gray-600">Products can be returned within 5 days if faulty or not as described. Terms & Conditions apply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products (kept minimal) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Featured Products</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-sm transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-gray-900">₦{product.price.toLocaleString()}</span>
                    <Link
                      to={`/product/${product.id}`}
                      className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-black transition-colors"
            >
              View All Products
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 