// import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  // const router = useRouter();

  // const handleMenuClick = () => {
  //   router.push("/home/menu");
  // };
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/restaurant-image.jpg')" }}
      >
        <div className="text-center text-white bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Our Restaurant
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Experience the best dining experience with us
          </p>
          <p className="mt-4 text-lg text-red-950 md:text-xl">
            Copenhagen Nørreport, Fiolstræde 44 / rosengården 18
          </p>
          <div className="flex items-center justify-center">
            <button className="mt-6 bg-red-950 mx-4 px-6 py-3 text-white font-semibold rounded hover:bg-red-600">
              Change Location
            </button>
          </div>
          <button className="mt-6 bg-red-500 mx-4 px-6 py-3 text-white font-semibold rounded hover:bg-red-600">
            <Link href="/home/booking" className="">
              Book a Table
            </Link>
          </button>
          <button
            // onClick={handleMenuClick}
            className="mt-6 bg-red-500 mx-4 px-6 py-3 text-white font-semibold rounded hover:bg-red-600"
          >
            {/* you can use the same button design classnames to design link as a button. the button design will not apply to Link since its renders an <a> tag */}
            <Link href="/home/menu" className="">
              Explore Menu
            </Link>
          </button>
        </div>
      </section>

      {/*Opening hours section */}

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-yellow-50 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              OPENING HOURS
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Monday: 15:00 PM - 21:00 PM</li>
              <li>Tuesday: 15:00 PM - 21:00 PM</li>
              <li>Wednesday: 15:00 PM - 21:00 PM</li>
              <li>Thursday: 15:00 PM - 21:00 PM</li>
              <li>Friday: 13:00 PM - 00:00 AM</li>
              <li>Saturday: 12:00 PM - 00:00 AM</li>
              <li>Sunday: 15:00 PM - 9:00 PM</li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              We have different closing times for Kitchen and Bar. The waiters
              will notify you as a last call for service. 🍿🎉
            </p>
            <p className="text-sm text-gray-600">
              we do not accept cash! 💳 Sorry!
            </p>

            <div className="mt-8 pt-4 border-t border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                UPCOMING EVENTS
              </h3>
              <div className="bg-white shadow-md p-4 rounded-md">
                <p className="font-bold text-gray-700 mb-1">
                  🎉 Black Friday Offer and Games
                </p>
                <p className="text-gray-700">
                  November 30, 2024, 16:00 PM - 10:00 PM <br />
                  Come and enjoy with us!🥂
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section (fetch from database later) */}
      <section id="menu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Item */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src="/momo.jpg"
                alt="Momos"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Momo</h3>
                <p className="text-gray-600 mt-2">150 dkk</p>
                <p className="mt-4 text-sm text-gray-500">
                  Typical authentic Nepalese kylling dumplings.
                </p>
              </div>
            </div>
            {/* Add more items as needed */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src="/thukpa.jpg"
                alt="Thukpa"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Thukkpa</h3>
                <p className="text-gray-600 mt-2">170 dkk</p>
                <p className="mt-4 text-sm text-gray-500">
                  Delicious nepalse spaghetti with spicy surry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="/about-us.jpg"
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">
              We are committed to delivering the finest culinary experience.
              With fresh ingredients and authentic Nepalese flavors, we ensure
              every meal is a memorable one.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
