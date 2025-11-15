<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Student'S Mart - Healthy Delights</title>
  {/* Use Tailwind CSS via CDN for rapid styling */}
  {/* Custom CSS for a more attractive and refined look */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Import Google Fonts - Poppins for a modern, clean look */\n        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');\n\n        /* Define CSS variables for a new, vibrant color palette */\n        :root {\n            --primary-color: #5A67D8; /* A deep, rich blue */\n            --primary-light: #7F9CF5;\n            --background-color: #F8F9FA;\n            --card-background: #FFFFFF;\n            --text-color: #2D3748; /* Dark text for light mode (close to black) */\n            --text-light: #4A5568;\n            --shadow-color: rgba(0, 0, 0, 0.1);\n            --gradient-start: #6e8efb;\n            --gradient-end: #a777e3;\n        }\n\n        /* Dark mode variables */\n        .dark-mode {\n            --background-color: #1A202C;\n            --card-background: #2D3748;\n            --text-color: #E2E8F0; /* Changed to a lighter grey for better contrast */\n            --text-light: #A0AEC0;\n            --shadow-color: rgba(0, 0, 0, 0.4);\n            --gradient-start: #4C51BF;\n            --gradient-end: #6B46C1;\n        }\n\n        /* Base styles using the new palette and font */\n        body {\n            font-family: 'Poppins', sans-serif;\n            background-color: var(--background-color);\n            color: var(--text-color);\n            transition: background-color 0.4s ease, color 0.4s ease;\n            padding-top: 70px; /* Space for the fixed navbar */\n        }\n\n        /* Hero section styling with an updated gradient */\n        .hero-section {\n            background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));\n            color: white;\n            animation: fadeIn 1s ease-in-out;\n        }\n\n        /* Product card styling with enhanced hover effects */\n        .product-card {\n            cursor: pointer;\n            transition: all 0.3s ease;\n            background-color: var(--card-background);\n            box-shadow: 0 4px 6px -1px var(--shadow-color), 0 2px 4px -1px var(--shadow-color);\n            border: 1px solid transparent;\n        }\n        .product-card:hover {\n            transform: translateY(-8px) scale(1.02); /* More pronounced lift and slight scale */\n            box-shadow: 0 15px 30px -5px rgba(0,0,0,0.2), 0 8px 10px -6px rgba(0,0,0,0.1);\n            border-color: var(--primary-color);\n        }\n\n        /* Styling for buttons to make them more uniform and interactive */\n        .btn-primary {\n            background-color: var(--primary-color);\n            color: white;\n            transition: background-color 0.3s ease, transform 0.2s ease;\n        }\n        .btn-primary:hover {\n            background-color: #4C51BF;\n            transform: translateY(-2px);\n        }\n\n        .category-btn {\n            transition: all 0.3s ease;\n        }\n        .category-btn.active {\n            background-color: var(--primary-color);\n            color: white;\n            border-color: var(--primary-color);\n        }\n\n        /* Animation for fade-in effect on page load */\n        @keyframes fadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n        }\n\n        /* Other minor visual enhancements */\n        .discount-badge {\n            animation: bounceIn 0.8s;\n        }\n        @keyframes bounceIn {\n            0%, 20%, 40%, 60%, 80%, 100% {\n                transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            }\n            0% { opacity: 0; transform: scale3d(.3, .3, .3); }\n            20% { transform: scale3d(1.1, 1.1, 1.1); }\n            40% { transform: scale3d(.9, .9, .9); }\n            60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03); }\n            80% { transform: scale3d(.97, .97, .97); }\n            100% { opacity: 1; transform: scale3d(1, 1, 1); }\n        }\n\n        /* Dark Mode specific styles */\n        body.dark-mode .bg-white {\n            background-color: #2d3748; /* Darker background for white elements */\n        }\n        body.dark-mode .text-gray-800 {\n            color: #e2e8f0; /* Light text for dark mode */\n        }\n        body.dark-mode .text-gray-600 {\n            color: #cbd5e0; /* Lighter gray text */\n        }\n        body.dark-mode .shadow-lg {\n            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.2);\n        }\n        body.dark-mode #product-search {\n            background-color: #2d3748;\n            border-color: #4a5568;\n            color: #e2e8f0;\n        }\n        body.dark-mode footer {\n            background-color: #1a202c;\n        }\n        body.dark-mode .border-gray-300 {\n            border-color: #4a5568;\n        }\n        body.dark-mode .border-gray-700 {\n            border-color: #4a5568;\n        }\n        body.dark-mode .mobile-menu li a:hover,\n        body.dark-mode .mobile-menu li button:hover {\n            background-color: var(--primary-color);\n            color: white;\n        }\n        body.dark-mode #theme-toggle-btn {\n            background-color: #4a5568;\n            color: #e2e8f0;\n        }\n        body.dark-mode #theme-toggle-btn:hover {\n            background-color: #616a7a;\n        }\n        body.dark-mode .payment-method-btn {\n            background-color: #4a5568;\n            color: #e2e8f0;\n        }\n        body.dark-mode .payment-method-btn.active {\n            background-color: var(--primary-color);\n            color: white;\n        }\n        body.dark-mode .payment-modal-content,\n        body.dark-mode #custom-message-box .bg-white {\n            background-color: #2d3748;\n        }\n        body.dark-mode input,\n        body.dark-mode textarea,\n        body.dark-mode select { /* Added select for dark mode */\n            background-color: #2d3748;\n            color: #e2e8f0;\n            border-color: #4a5568;\n        }\n        /* Ensure all text is white in dark mode */\n        body.dark-mode,\n        body.dark-mode .text-gray-800,\n        body.dark-mode .text-gray-700,\n        body.dark-mode .text-gray-600 {\n            color: var(--text-color) !important;\n        }\n        body.dark-mode nav .text-gray-800 {\n            color: var(--text-color) !important;\n        }\n        body.dark-mode .product-card .text-gray-800 {\n            color: var(--text-color) !important;\n        }\n        body.dark-mode .product-card .text-gray-600 {\n            color: var(--text-light) !important;\n        }\n        body.dark-mode .cart-item .text-gray-800 {\n            color: var(--text-color) !important;\n        }\n        body.dark-mode .cart-item .text-gray-600 {\n            color: var(--text-light) !important;\n        }\n        body.dark-mode .bg-gray-50 {\n            background-color: #3a475a !important; /* Slightly lighter dark background for cart items */\n        }\n        body.dark-mode .quantity-input {\n            background-color: #4a5568 !important;\n            color: #e2e8f0 !important;\n            border-color: #616a7a !important;\n        }\n        body.dark-mode .quantity-minus,\n        body.dark-mode .quantity-plus {\n            background-color: #4a5568 !important;\n            color: #e2e8f0 !important;\n        }\n        body.dark-mode .quantity-minus:hover,\n        body.dark-mode .quantity-plus:hover {\n            background-color: #616a7a !important;\n        }\n        body.dark-mode .text-blue-600 {\n            color: var(--primary-light) !important;\n        }\n        body.dark-mode .text-blue-400 {\n            color: #90CDF4 !important;\n        }\n        body.dark-mode .text-red-500 {\n            color: #FC8181 !important;\n        }\n        body.dark-mode .text-green-600 {\n            color: #68D391 !important;\n        }\n        body.dark-mode .text-gray-400 {\n            color: #CBD5E0 !important;\n        }\n        body.dark-mode .border-t {\n            border-color: #4A5568 !important;\n        }\n        body.dark-mode .border-b {\n            border-color: #4A5568 !important;\n        }\n        body.dark-mode .payment-modal-overlay {\n            background-color: rgba(0, 0, 0, 0.7);\n        }\n        body.dark-mode .message-box-overlay {\n            background-color: rgba(0, 0, 0, 0.7);\n        }\n\n        /* Added style for light mode background */\n        body:not(.dark-mode) .bg-white {\n            background-color: #FFFFFF !important; /* Ensure white background in light mode */\n        }\n\n        /* Ensure all text is black in light mode */\n        body:not(.dark-mode) {\n            color: #000000 !important; /* Force black text for the body */\n        }\n        body:not(.dark-mode) .text-gray-800,\n        body:not(.dark-mode) .text-gray-700,\n        body:not(.dark-mode) .text-gray-600 {\n            color: #000000 !important; /* Force black text for specific gray classes */\n        }\n        body:not(.dark-mode) nav .text-gray-800 {\n            color: #000000 !important;\n        }\n        body:not(.dark-mode) .product-card .text-gray-800 {\n            color: #000000 !important;\n        }\n        body:not(.dark-mode) .product-card .text-gray-600 {\n            color: #000000 !important;\n        }\n        body:not(.dark-mode) .cart-item .text-gray-800 {\n            color: #000000 !important;\n        }\n        body:not(.dark-mode) .cart-item .text-gray-600 {\n            color: #000000 !important;\n        }\n        body:not(.dark-mode) #product-search {\n            color: #000000 !important;\n        }\n        body:not(.dark-mode) input,\n        body:not(.dark-mode) textarea,\n        body:not(.dark-mode) select {\n            color: #000000 !important;\n        }\n    "
    }}
  />
  {/* Navigation Bar */}
  <nav className="bg-white dark:bg-gray-800 shadow-lg fixed top-0 w-full z-50 transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-7">
          {/* Website Logo/Brand Name */}
          <div className="flex items-center py-4 px-2">
            <span className="font-semibold text-gray-800 dark:text-white text-2xl">
              Student'S{" "}
              <span className="text-blue-600 dark:text-blue-400">Mart</span>
            </span>
          </div>
        </div>
        {/* Primary Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#home"
            className="py-4 px-2 text-gray-800 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#products"
            className="py-4 px-2 text-gray-800 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            Products
          </a>
          <a
            href="#about"
            className="py-4 px-2 text-gray-800 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="py-4 px-2 text-gray-800 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            id="order-history-btn"
            className="py-4 px-2 text-gray-800 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            Order History
          </a>{" "}
          {/* New Order History Button */}
          {/* Cart Button with Item Count */}
          <button
            id="cart-btn"
            className="py-2 px-4 flex items-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart{" "}
            <span
              id="cart-count"
              className="ml-1 bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >
              0
            </span>
          </button>
          {/* Theme Toggle Button (Desktop) */}
          <button
            id="theme-toggle-btn"
            className="py-2 px-4 flex items-center bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 ml-3"
          >
            <svg
              id="theme-icon"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h1M3 12H2m8.005-9.111a9.004 9.004 0 0110.792 10.792M12 12l-3.182 3.182a4 4 0 005.656 5.656l3.182-3.182M12 7.5V12h4.5M12 12l-3.182 3.182a4 4 0 005.656 5.656l3.182-3.182"
              />
            </svg>
            <span className="ml-1">Light</span>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Menu (Hidden by default) */}
    <div className="hidden mobile-menu">
      <ul className="">
        <li>
          <a
            href="#home"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#products"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            id="mobile-order-history-btn"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white"
          >
            Order History
          </a>
        </li>{" "}
        {/* New Mobile Order History Button */}
        {/* Mobile Cart Button - Added for mobile visibility */}
        <li>
          <button
            id="mobile-cart-btn"
            className="w-full text-left px-4 py-2 flex items-center text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart{" "}
            <span
              id="mobile-cart-count"
              className="ml-1 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >
              0
            </span>
          </button>
        </li>
        {/* Theme Toggle Button (Mobile) */}
        <li>
          <button
            id="mobile-theme-toggle-btn"
            className="w-full text-left px-4 py-2 flex items-center text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white"
          >
            <svg
              id="mobile-theme-icon"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h1M3 12H2m8.005-9.111a9.004 9.004 0 0110.792 10.792M12 12l-3.182 3.182a4 4 0 005.656 5.656l3.182-3.182M12 7.5V12h4.5M12 12l-3.182 3.182a4 4 0 005.656 5.656l3.182-3.182"
              />
            </svg>
            <span className="ml-1">Light Mode</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
  {/* Hero Section */}
  <section id="home" className="hero-section py-20">
    <div className="container mx-auto px-6 pt-12 pb-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col justify-center items-start mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Healthy Delights at Your Class
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Premium quality chiki, smoothies, and organic milk - all in one
            place!
          </p>
          {/* Removed Shop Now button */}
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://ik.imagekit.io/m1aziocop/Student%20Mart-removebg-preview.jpg?updatedAt=1754385249571"
            alt="Student'S Mart product showcase"
            onerror="this.src='https://placehold.co/600x400/E0E7FF/3B82F6?text=Product+Showcase'"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Product Categories and Search */}
  <section id="products" className="py-16 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Our Products
      </h2>
      {/* Product Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          id="product-search"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />
      </div>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center mb-12 gap-4">
        <button
          className="category-btn active px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
          data-category="all"
        >
          All Products
        </button>
        <button
          className="category-btn px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
          data-category="chiki"
        >
          Chiki
        </button>
        <button
          className="category-btn px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
          data-category="smooth"
        >
          Smoothies
        </button>
        <button
          className="category-btn px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
          data-category="milk"
        >
          Milk
        </button>
        <button
          className="category-btn px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
          data-category="Dress"
        >
          Dress
        </button>
      </div>
      {/* Product Cards Container */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        id="products-container"
      >
        {/* Product cards will be inserted here by JavaScript */}
      </div>
    </div>
  </section>
  {/* About Section */}
  <section id="about" className="py-16 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://ik.imagekit.io/m1aziocop/Shlok/691b94c3-a66b-4bb8-8f49-eba3677471e9.jpg?updatedAt=1754903114628"
            alt="Student'S Mart store interior"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            About Student'S Mart
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Rmdis Student S-mart is an innovative Education rewardingly by
            Subodh Jaju Sir. It is a worldwide copyright program of him.{" "}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This Pedagogy is not limited to just financial literacy, ahead to
            that it is a financial management Students do learn practically
            about financial exchange, sales, purchase, banking transaction
            stocks reports, CSR fuel profit-loss account.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            A perfect example of hands-on learning which is aimed to make Aadi,
            Advik, Anuj, Shlok Entrepreneur’s of future.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section */}
  <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Contact Us
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Send us a message
          </h3>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                type="text"
                id="name"
                placeholder="Your name"
                required=""
              />
              <p id="name-error" className="text-red-500 text-xs italic hidden">
                Please enter your name.
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="class"
              >
                Class
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                id="class"
                required=""
              >
                <option value="" disabled="" selected="">
                  Select Class
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
              <p
                id="class-error"
                className="text-red-500 text-xs italic hidden"
              >
                Please select your class.
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="division"
              >
                Division
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                id="division"
                required=""
              >
                <option value="" disabled="" selected="">
                  Select Division
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
              <p
                id="division-error"
                className="text-red-500 text-xs italic hidden"
              >
                Please select your division.
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                type="email"
                id="email"
                placeholder="Your email"
                required=""
              />
              <p
                id="email-error"
                className="text-red-500 text-xs italic hidden"
              >
                Please enter a valid email address.
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                id="message"
                rows={5}
                placeholder="Your message"
                required=""
                defaultValue={""}
              />
              <p
                id="message-error"
                className="text-red-500 text-xs italic hidden"
              >
                Please enter your message.
              </p>
            </div>
            <button
              id="contact-submit-btn"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Information
          </h3>
          <div className="mb-6 flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                Address
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {" "}
                Rasiklal M.Dhariwal International School, Fatttechand Marg, near
                Chafekar Chowk, Pawana Nagar, Chinchwad, Pimpri-Chinchwad,
                Maharashtra 411033
              </p>
            </div>
          </div>
          <div className="mb-6 flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">Phone</h4>
              <p className="text-gray-600 dark:text-gray-300">
                (+91) 084469-96049
              </p>
            </div>
          </div>
          <div className="mb-6 flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">
                rmdismartinfo@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                Opening Hours
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Saturday: 8:30 AM - 3:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">
            Student'S <span className="text-blue-400">Mart</span>
          </h3>
          <p className="text-gray-400 max-w-xs">
            Your one-stop shop for healthy snacks, and nutritious drinks.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Chiki
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Smoothies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {" "}
                  Milk
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {" "}
                  Dress
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/rmdispcmc/"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="https://www.facebook.com/rmdispcmc/"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              {/* Instagram Icon - Updated href and added target="_blank" */}
              <a
                href="https://www.instagram.com/rmdispcmc?igsh=endxaWtlZ3lvczVi"
                target="_blank"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Chrome Icon (Replaced from Twitter) */}
              <a
                href="https://rmdis.org/"
                target="_blank"
                aria-label="Chrome"
                className="text-gray-500 hover:text-gray-600 transition-colors duration-200"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 460c-117.755 0-213.682-95.927-213.682-213.682S138.245 42.318 256 42.318s213.682 95.927 213.682 213.682S373.755 468 256 468zm-25.043-43.08l41.258-74.88c-1.353-.298-2.671-.62-4.008-.942-20.916-4.966-40.403-15.118-54.856-32.937l33.642-58.423c-1.637-1.12-3.23-2.313-4.823-3.52-24.82-19.12-51.787-32.91-81.246-40.914l-42.31 75.82c-.87-.333-1.745-.662-2.618-.99-27.185-9.613-53.947-23.77-78.58-42.793l21.32-37.58c-2.348-.962-4.667-1.996-6.99-3.045-29.23-13.43-57.087-31.5-81.18-54.496l38.217-21.783c-1.002-2.365-1.96-4.757-2.878-7.17-20.94-55.88-29.56-114.735-25.99-174.91l44.02-4.66c-3.13 52.887 5.06 102.83 23.99 146.47l-35.12 21.65c.67 1.63 1.35 3.25 2.05 4.88 17.58 41.74 41.92 78.43 72.93 109.91l38.99-21.21c1.23-2.39 2.45-4.8 3.65-7.22 17.47-34.93 25.12-73.66 23.95-113.84l44.33-4.27c.41 12.04-.08 24.1-.73 36.16-1.57 28.98-6.19 57.57-13.9 84.81-7.85 28.01-18.42 54.38-31.79 79.29-13.37 24.91-29.67 47.66-48.46 68.17-1.72 1.84-3.47 3.63-5.23 5.37l-41.97 73.81zm-70.186-13.784l-40.09-72.24c-13.626-25.2-24.814-51.487-33.342-78.78l33.84-58.8c.84-.25 1.68-.5 2.52-.75 22.02-6.52 44.57-11.23 67.24-14.18l45.2-4.52-25.04 43.08-41.26 74.88c1.35.3 2.67.62 4.01.94 13.9 3.29 27.69 7.82 41.21 13.56l33.64-58.42c1.64-1.12 3.23-2.31 4.82-3.52 14.9-11.45 28.73-24.08 41.29-37.66l-42.31-75.82c-.87-.33-1.75-.66-2.62-.99-16.14-5.74-32.55-9.67-49.03-12.05l-44.33-4.27 21.32-37.58c1.02-1.92 2.05-3.83 3.08-5.73 14.97-27.42 30.73-53.94 47.45-79.5l38.22-21.78c-1.01-2.37-1.96-4.76-2.88-7.17-21.82-58.19-27.27-119.57-18.15-180.23l44.02-4.66-35.12 21.65c.67 1.63 1.35 3.25 2.05 4.88 23.33 55.42 32.88 114.77 28.78 174.91l44.33-4.27-.41 12.04c-.65 24.52-3.26 49.33-7.85 74.19-4.59 24.86-11.39 48.97-20.24 72.31-8.86 23.34-19.58 45.41-32.06 65.8-12.49 20.39-26.68 39.06-42.54 55.84-1.72 1.84-3.47 3.63-5.23 5.37l-41.97 73.81zm-70.186-13.784l-40.09-72.24c-13.626-25.2-24.814-51.487-33.342-78.78l33.84-58.8c.84-.25 1.68-.5 2.52-.75 22.02-6.52 44.57-11.23 67.24-14.18l45.2-4.52-25.04 43.08-41.26 74.88c1.35.3 2.67.62 4.01.94 13.9 3.29 27.69 7.82 41.21 13.56l33.64-58.42c1.64-1.12 3.23-2.31 4.82-3.52 14.9-11.45 28.73-24.08 41.29-37.66l-42.31-75.82c-.87-.33-1.75-.66-2.62-.99-16.14-5.74-32.55-9.67-49.03-12.05l-44.33-4.27 21.32-37.58c1.02-1.92 2.05-3.83 3.08-5.73 14.97-27.42 30.73-53.94 47.45-79.5l38.22-21.78c-1.01-2.37-1.96-4.76-2.88-7.17-21.82-58.19-27.27-119.57-18.15-180.23l44.02-4.66-35.12 21.65c.67 1.63 1.35 3.25 2.05 4.88 23.33 55.42 32.88 114.77 28.78 174.91l44.33-4.27-.41 12.04c-.65 24.52-3.26 49.33-7.85 74.19-4.59 24.86-11.39 48.97-20.24 72.31-8.86 23.34-19.58 45.41-32.06 65.8-12.49 20.39-26.68 39.06-42.54 55.84-1.72 1.84-3.47 3.63-5.23 5.37l-41.97 73.81z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8 text-center text-gray-400">
      <p>© 2024 Student'S Mart. All rights reserved.</p>
    </div>
  </footer>
  {/* Shopping Cart Modal */}
  <div
    id="cart-modal"
    className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 hidden flex justify-end"
  >
    <div className="bg-white dark:bg-gray-800 w-full md:w-1/3 h-full overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Your Cart
          </h3>
          <button
            id="close-cart"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div id="cart-items" className="space-y-4 mb-6">
          {/* Cart items will be inserted here by JavaScript */}
          <div className="text-center py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Your cart is empty
            </p>
          </div>
        </div>
        <div className="border-t pt-4 border-gray-200 dark:border-gray-700">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-600 dark:text-gray-300">
              Subtotal
            </span>
            <span
              id="cart-subtotal"
              className="font-bold text-gray-800 dark:text-white"
            >
              ₹0.00
            </span>
          </div>
          {/* Tax removed */}
          <div className="flex justify-between mb-6 border-b pb-4 border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-600 dark:text-gray-300">
              Shipping
            </span>
            <span className="font-bold text-green-600 dark:text-green-400">
              FREE
            </span>
          </div>
          <div className="flex justify-between text-lg mb-6">
            <span className="font-bold text-gray-800 dark:text-white">
              Total
            </span>
            <span
              id="cart-total"
              className="font-bold text-gray-800 dark:text-white"
            >
              ₹0.00
            </span>
          </div>
          <button
            id="checkout-btn"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Product Detail Modal */}
  <div
    id="product-detail-modal"
    className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 hidden flex justify-center items-center p-4"
  >
    {/* Added max-w-xl and mx-auto for normal sizing on larger screens */}
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 payment-modal-content overflow-y-auto max-h-[90vh] w-full max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3
          id="detail-product-name"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        />
        <button
          id="close-product-detail-modal"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="md:flex md:space-x-6">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            id="detail-product-image"
            src=""
            alt=""
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <p
              id="detail-product-description"
              className="text-gray-700 dark:text-gray-300 mb-4 text-lg"
            />
            <div className="flex items-center mb-4">
              <span
                className="text-blue-600 dark:text-blue-400 font-bold text-3xl"
                id="detail-product-price"
              />
              <span
                id="detail-product-old-price"
                className="text-gray-500 dark:text-gray-400 text-lg line-through ml-3 hidden"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Category:{" "}
              <span id="detail-product-category" className="font-semibold" />
            </p>
            <div id="detail-product-size-container" className="mb-4 hidden">
              <label
                htmlFor="detail-product-size"
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              >
                Size:
              </label>
              <select
                id="detail-product-size"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              >
                {/* Sizes will be populated by JS */}
              </select>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                Nutritional Information:
              </h4>
              <ul
                id="detail-product-nutrition"
                className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm"
              >
                {/* Nutritional info will be dynamically added */}
              </ul>
            </div>
          </div>
          <button
            id="add-to-cart-from-detail"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Order History Modal */}
  <div
    id="order-history-modal"
    className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 hidden flex justify-center items-center p-4"
  >
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 payment-modal-content overflow-y-auto max-h-[90vh]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          Your Order History
        </h3>
        <button
          id="close-order-history-modal"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div id="order-history-items" className="space-y-4">
        {/* Order items will be dynamically loaded here */}
        <p className="text-center text-gray-600 dark:text-gray-300">
          No past orders found.
        </p>
      </div>
    </div>
  </div>
  {/* Payment Modal */}
  <div
    id="payment-modal"
    className="fixed inset-0 w-full h-full z-[60] hidden payment-modal-overlay flex justify-center items-center p-4"
  >
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 payment-modal-content">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          Complete Your Purchase
        </h3>
        <button
          id="close-payment-modal"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* Payment Method Selection */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          id="card-payment-tab"
          className="payment-method-btn flex-1 py-3 px-4 rounded-lg font-bold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 active"
        >
          Card Payment
        </button>
        <button
          id="qr-payment-tab"
          className="payment-method-btn flex-1 py-3 px-4 rounded-lg font-bold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
        >
          QR Code Payment
        </button>
      </div>
      {/* Card Payment Section */}
      <div id="card-payment-section">
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="card-number"
          >
            Card Number
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            type="text"
            id="card-number"
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength={19}
            pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
            title="Please enter a 16-digit card number"
            required=""
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="expiry-date"
            >
              Expiry Date
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              type="text"
              id="expiry-date"
              placeholder="MM/YY"
              maxLength={5}
              pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
              title="Please enter a valid expiry date (MM/YY)"
              required=""
            />
          </div>
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="cvv"
            >
              CVV
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              type="text"
              id="cvv"
              placeholder="XXX"
              maxLength={3}
              pattern="[0-9]{3}"
              title="Please enter a 3-digit CVV"
              required=""
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="card-name"
          >
            Cardholder Name
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            type="text"
            id="card-name"
            placeholder="Name on Card"
            required=""
          />
        </div>
      </div>
      {/* QR Code Payment Section */}
      <div id="qr-payment-section" className="hidden text-center py-4">
        <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-4">
          Scan the QR code to complete your payment:
        </p>
        <img
          src="https://ik.imagekit.io/m1aziocop/or%20code%20_MeyRVBxNNa?updatedAt=1753854901204"
          alt="QR Code for Payment"
          className="mx-auto w-48 h-48 sm:w-64 sm:h-64 rounded-lg shadow-md mb-6"
          id="qr-code-image"
        />
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Please ensure your payment app is open and ready to scan.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
          After scanning, click "Confirm QR Payment" below.
        </p>
      </div>
      <div className="flex justify-between items-center text-xl font-bold mb-6">
        <span className="text-gray-800 dark:text-white">Total Amount:</span>
        <span
          id="payment-total-amount"
          className="text-gray-800 dark:text-white"
        >
          ₹0.00
        </span>
      </div>
      <div className="flex gap-4">
        <button
          id="pay-now-btn"
          className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
        >
          Pay Now
        </button>
        <button
          id="confirm-qr-payment-btn"
          className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-green-700 transition duration-300 hidden"
        >
          Confirm QR Payment
        </button>
        <button
          id="cancel-payment-btn"
          className="flex-1 bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white py-3 px-4 rounded-lg font-bold hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
        >
          Cancel
        </button>
      </div>
      <div id="payment-processing-section" className="hidden text-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-6" />
        <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
          Processing your payment...
        </p>
      </div>
      <div id="payment-result-section" className="hidden text-center py-12">
        <div id="payment-result-icon" className="mx-auto mb-4 text-green-500">
          {/* Success or Error SVG will be injected here */}
        </div>
        <p
          id="payment-result-message"
          className="text-xl font-semibold text-gray-800 dark:text-white mb-6"
        />
        <button
          id="payment-result-close-btn"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
        >
          Done
        </button>
      </div>
    </div>
  </div>
  {/* Custom Message Box */}
  <div
    id="custom-message-box"
    className="fixed inset-0 w-full h-full z-[70] hidden message-box-overlay flex justify-center items-center p-4"
  >
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 message-box-content max-w-sm w-11/12 text-center">
      <p
        id="message-box-text"
        className="text-gray-800 dark:text-white text-lg mb-6"
      />
      {/* OK button removed as per request */}
    </div>
  </div>
  {/* Back to Top Button */}
  <button
    id="back-to-top"
    className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-40 hidden"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
</>
