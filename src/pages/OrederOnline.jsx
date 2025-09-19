import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const OrderOnline = () => {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('coffee');
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    phone: '',
    instructions: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const menuItems = {
    coffee: [
      {
        id: 1,
        name: 'Espresso',
        description: 'Rich, concentrated coffee with a layer of crema',
        price: 3.50,
        image: 'https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe04-500x500.jpg'
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and silky foam',
        price: 4.50,
        image: 'https://www.livingnorth.com/images/media/articles/food-and-drink/eat-and-drink/coffee.png?fm=pjpg&w=1000&q=95'
      },
      {
        id: 3,
        name: 'Latte Macchiato',
        description: 'Layered espresso with milk and foam',
        price: 4.75,
        image: 'https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg'
      }
    ],
    breakfast: [
      {
        id: 4,
        name: 'Avocado Toast',
        description: 'Sourdough with avocado, cherry tomatoes, and feta',
        price: 8.50,
        image: 'https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg'
      },
      {
        id: 5,
        name: 'Granola Bowl',
        description: 'Homemade granola with yogurt and fresh berries',
        price: 7.25,
        image: 'https://freshapron.com/wp-content/uploads/2022/05/Yogurt-Granola-Bowl-02.jpg'
      }
    ],
    bakery: [
      {
        id: 6,
        name: 'Croissant',
        description: 'Buttery, flaky French pastry',
        price: 3.75,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDtkdyRh2yjlRKvzCN-zboBk2zQt-AqGKzg&s'
      },
      {
        id: 7,
        name: 'Blueberry Muffin',
        description: 'Moist muffin packed with fresh blueberries',
        price: 4.00,
        image: 'https://recipesblob.oetker.co.uk/assets/2eccc3c1e0004769b14e7e08ac9d92a6/964x526/double-blueberry-muffins.webp'
      }
    ]
  };

  const addToCart = (item) => {
    setCart([...cart, { ...item, cartId: Date.now(), quantity: 1 }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item =>
      item.cartId === cartId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { cart, deliveryInfo });
    setOrderPlaced(true);
    setCart([]);
    setDeliveryInfo({ name: '', address: '', phone: '', instructions: '' });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2);
  };

  return (
    <>
    <Navbar/>
    <div className="noto-serif max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Order Online</h1>

      {orderPlaced ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Your coffee is on its way. We'll send you a confirmation shortly.
          </p>
          <button
            onClick={() => setOrderPlaced(false)}
            className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors cursor-pointer"
          >
            Place Another Order
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <div className="flex border-b border-gray-200 mb-8">
              {Object.keys(menuItems).map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 font-medium text-sm cursor-pointer ${activeTab === category ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {menuItems[activeTab].map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/400x300?text=Menu+Item';
                        e.target.alt = 'Placeholder for missing menu item image';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="font-bold text-amber-700">${item.price.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-4 w-full py-2 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-700 transition-colors cursor-pointer"
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Your Order</h2>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.cartId} className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-gray-400 hover:text-red-500 mr-2 cursor-pointer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.cartId, (item.quantity || 1) - 1)}
                            className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-amber-600 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="mx-2 text-sm w-6 text-center">{item.quantity || 1}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, (item.quantity || 1) + 1)}
                            className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-amber-600"
                          >
                            +
                          </button>
                          <span className="ml-4 text-sm font-medium text-gray-700 w-12 text-right cursor-pointer">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold text-gray-800">
                      <span>Total</span>
                      <span>${calculateTotal()}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitOrder} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={deliveryInfo.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={deliveryInfo.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={deliveryInfo.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
                      <textarea
                        id="instructions"
                        name="instructions"
                        value={deliveryInfo.instructions}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors cursor-pointer"
                    >
                      Place Order
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default OrderOnline;
