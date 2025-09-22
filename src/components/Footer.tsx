const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MC</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">MUSTIBAN CONCEPT</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your go-to destination for premium electronics and reliable tech solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</a></li>
              <li><a href="/cart" className="text-gray-600 hover:text-gray-900 transition-colors">Cart</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Privacy Policy — Your privacy is important to us. We protect your data and never share it without your consent.</li>
              <li>Terms & Conditions — By purchasing from us, you agree to our warranty, delivery, and return policies.</li>
              <li>Payment Options — We accept bank transfers, debit cards, and secure online payments.</li>
              <li>Return Policy — Products can be returned within 5 days if faulty or not as described. Terms & Conditions apply.</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Phone: 09068953350</p>
              <p>Email: info@mustibanconcept.com</p>
              <p>Address: 8, Rasheed Alaba Williams Street, Lekki, Lagos State, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              Website: www.mustibanconcept.com
            </div>
            <div className="text-sm text-gray-600 text-center">
              © 2025 www.mustibanconcept.com — Powered by MUSTIBAN CONCEPT
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 