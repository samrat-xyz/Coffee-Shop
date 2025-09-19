import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const menuItems = {
    coffee: [
      {
        id: 1,
        name: "Espresso",
        description: "Rich, concentrated coffee with a layer of crema",
        price: 3.5,
        image:
          "https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe04-500x500.jpg",
      },
      {
        id: 2,
        name: "Cappuccino",
        description: "Espresso with steamed milk and silky foam",
        price: 4.5,
        image:
          "https://www.livingnorth.com/images/media/articles/food-and-drink/eat-and-drink/coffee.png?fm=pjpg&w=1000&q=95",
      },
      {
        id: 3,
        name: "Latte Macchiato",
        description: "Layered espresso with milk and foam",
        price: 4.75,
        image:
          "https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg",
      },
    ],
    breakfast: [
      {
        id: 4,
        name: "Avocado Toast",
        description: "Sourdough with avocado, cherry tomatoes, and feta",
        price: 8.5,
        image:
          "https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg",
      },
      {
        id: 5,
        name: "Granola Bowl",
        description: "Homemade granola with yogurt and fresh berries",
        price: 7.25,
        image: "https://freshapron.com/wp-content/uploads/2022/05/Yogurt-Granola-Bowl-02.jpg",
      },
    ],
    bakery: [
      {
        id: 6,
        name: "Croissant",
        description: "Buttery, flaky French pastry",
        price: 3.75,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDtkdyRh2yjlRKvzCN-zboBk2zQt-AqGKzg&s",
      },
      {
        id: 7,
        name: "Blueberry Muffin",
        description: "Moist muffin packed with fresh blueberries",
        price: 4.0,
        image:
          "https://recipesblob.oetker.co.uk/assets/2eccc3c1e0004769b14e7e08ac9d92a6/964x526/double-blueberry-muffins.webp",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="noto-serif max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Coffee Haven Menu
        </h1>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 border-b border-gray-200 mb-10">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              className={`cursor-pointer px-5 py-2 font-medium text-sm transition ${
                activeCategory === category
                  ? "text-amber-600 border-b-2 border-amber-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/400x300?text=${item.name
                      .split(" ")
                      .join("+")}`;
                  }}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-bold text-amber-700">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
