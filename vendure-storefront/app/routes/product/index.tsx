import { motion } from 'framer-motion';
import { Link } from '@remix-run/react';

export default function ProductsIntroPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-6xl font-extrabold text-center mb-16">
        Find Your Perfect Car
      </h1>

      {/* New Cars Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="overflow-hidden rounded-lg"
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/800x600"
              alt="New Cars"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <h2 className="text-4xl font-bold mb-4">New Cars</h2>
            <p className="text-lg text-gray-600 mb-6">
              Step into the future with our latest selection of brand new cars,
              designed with cutting-edge technology, luxury, and performance.
              Whether you are looking for efficiency or style, we have a perfect
              match waiting for you.
            </p>
            <motion.div transition={{ duration: 0.3 }}>
              <Link
                to="/collections/new"
                className="inline-block bg-black text-white font-bold py-3 px-8 rounded-md"
              >
                Discover New Cars
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Used Cars Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Used Cars</h2>
            <p className="text-lg text-gray-600 mb-6">
              Get the best deals on top-quality used cars that have been
              meticulously inspected and certified. Drive away with confidence,
              knowing you’ve secured a reliable vehicle at a fraction of the
              price.
            </p>
            <motion.div transition={{ duration: 0.3 }}>
              <Link
                to="/collections/used"
                className="inline-block bg-black text-white font-bold py-3 px-8 rounded-md"
              >
                Browse Used Cars
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="overflow-hidden rounded-lg"
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/800x600"
              alt="Used Cars"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Rental Cars Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="overflow-hidden rounded-lg"
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/800x600"
              alt="Rental Cars"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Rental Cars</h2>
            <p className="text-lg text-gray-600 mb-6">
              Flexible and convenient car rentals at your fingertips. Whether
              it’s for a weekend adventure or a special event, choose from a
              variety of rental options that fit your needs.
            </p>
            <motion.div transition={{ duration: 0.3 }}>
              <Link
                to="/collections/rental"
                className="inline-block bg-black text-white font-bold py-3 px-8 rounded-md"
              >
                Explore Rental Cars
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
