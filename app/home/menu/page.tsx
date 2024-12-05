export default function Menu() {
  // (fetch from database later)
  const menuItems = [
    {
      id: 1,
      name: "Momo",
      price: "145 KR",
      description: "Authentic Nepalese momo",
      image: "/menu-items/momo2.jpg",
    },
    {
      id: 2,
      name: "Daal Bhat Tarkari",
      price: "55 KR",
      description:
        "Basmati rice and tomato blazed lentils with delicious authentic vegetables cooked in Nepalese style ",
      image: "/menu-items/dal-bhat-tarkari.jpg",
    },
    {
      id: 3,
      name: "Jhol Momo",
      price: "160 KR",
      description: "Delicious sesame flavoured soup with spices from Himalayas",
      image: "/menu-items/momo.jpg",
    },
    {
      id: 4,
      name: "Pani Puri",
      price: "45 KR",
      description:
        "Typical Nepalese style fluffed tostadea with smashed potato mixed with spices with juicy and sour cold soup",
      image: "/menu-items/panipuri.jpg",
    },
    {
      id: 5,
      name: "Yomari",
      price: "35 KR",
      description: "delicious authentic nepali dessert",
      image: "/menu-items/Yomari.jpg",
    },
    {
      id: 6,
      name: "Thukpa",
      price: "39 KR",
      description:
        "Himalayan spaghetti with hot soup and chicken and vegetables",
      image: "/menu-items/thukpa.jpg",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-8 mb-8">
            All Dishes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-md"
                // style={{ backgroundImage: `url('${item.image}')` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                  <p className="text-xl font-semibold text-yellow-400 mt-2">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
