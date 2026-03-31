import Link from 'next/link';
import { Calendar, Star, Users, MapPin } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Tours & Packages - iTrap Travel',
  description: 'Explore curated tour packages and experiences with iTrap Travel Agency.',
};

const tours = [
  {
    id: 'paris-romantic',
    name: 'Romantic Paris Getaway',
    destination: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80',
    duration: '7 Days / 6 Nights',
    price: 2499,
    rating: 4.9,
    reviews: 127,
    category: 'Romantic',
    description: 'Experience the magic of Paris with luxury stays, fine dining, and iconic landmarks like the Eiffel Tower and Louvre Museum.',
    availableDates: ['Apr 15', 'Apr 22', 'Apr 29', 'May 6', 'May 13'],
  },
  {
    id: 'bali-escape',
    name: 'Bali Paradise Escape',
    destination: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80',
    duration: '10 Days / 9 Nights',
    price: 1899,
    rating: 4.8,
    reviews: 89,
    category: 'Relaxation',
    description: 'Discover Bali\'s stunning beaches, ancient temples, and vibrant culture. Perfect for relaxation and adventure.',
    availableDates: ['Apr 10', 'Apr 17', 'Apr 24', 'May 1', 'May 8'],
  },
  {
    id: 'tokyo-adventure',
    name: 'Tokyo Culture & Adventure',
    destination: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80',
    duration: '8 Days / 7 Nights',
    price: 2199,
    rating: 4.7,
    reviews: 156,
    category: 'Cultural',
    description: 'Immerse yourself in Japanese culture. From modern skyscrapers to ancient temples, experience Tokyo\'s unique blend.',
    availableDates: ['Apr 18', 'Apr 25', 'May 2', 'May 9', 'May 16'],
  },
  {
    id: 'maldives-luxury',
    name: 'Maldives Luxury Retreat',
    destination: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop&q=80',
    duration: '7 Days / 6 Nights',
    price: 4999,
    rating: 4.9,
    reviews: 98,
    category: 'Luxury',
    description: 'Experience paradise in Maldives. Overwater bungalows, crystal-clear waters, and ultimate relaxation.',
    availableDates: ['May 15', 'May 22', 'May 29', 'Jun 5', 'Jun 12'],
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps Adventure',
    destination: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop&q=80',
    duration: '9 Days / 8 Nights',
    price: 3299,
    rating: 4.7,
    reviews: 112,
    category: 'Adventure',
    description: 'Explore breathtaking Swiss Alps. Mountain villages, scenic train rides, and winter sports.',
    availableDates: ['Apr 20', 'Apr 27', 'May 4', 'May 11', 'May 18'],
  },
  {
    id: 'safari-adventure',
    name: 'African Safari Adventure',
    destination: 'Kenya, Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80',
    duration: '8 Days / 7 Nights',
    price: 3799,
    rating: 4.9,
    reviews: 134,
    category: 'Adventure',
    description: 'Witness the Big Five on an unforgettable African safari. Luxury lodges and expert guides.',
    availableDates: ['Jun 1', 'Jun 8', 'Jun 15', 'Jun 22', 'Jun 29'],
  },
];

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                i
              </div>
              <span className="text-2xl font-bold text-gray-900">iTrap</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              <Link href="/destinations" className="text-gray-700 hover:text-primary-600 transition-colors">Destinations</Link>
              <Link href="/tours" className="text-primary-600 font-semibold">Tours</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link>
            </div>
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Tour Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our carefully curated tour packages designed for unforgettable experiences
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white">
                <option value="">All Destinations</option>
                <option value="paris">Paris</option>
                <option value="bali">Bali</option>
                <option value="tokyo">Tokyo</option>
                <option value="maldives">Maldives</option>
                <option value="swiss-alps">Swiss Alps</option>
                <option value="africa">Africa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white">
                <option value="">All Categories</option>
                <option value="romantic">Romantic</option>
                <option value="family">Family</option>
                <option value="adventure">Adventure</option>
                <option value="relaxation">Relaxation</option>
                <option value="luxury">Luxury</option>
                <option value="cultural">Cultural</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white">
                <option value="">Any Duration</option>
                <option value="5-7">5-7 Days</option>
                <option value="8-10">8-10 Days</option>
                <option value="11-14">11-14 Days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
              <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white">
                <option value="">Any Budget</option>
                <option value="budget">$500 - $1,500</option>
                <option value="moderate">$1,500 - $3,000</option>
                <option value="luxury">$3,000 - $5,000</option>
                <option value="premium">$5,000+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Link key={tour.id} href={`/tours/${tour.id}`} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-video bg-gray-200">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-gray-900 font-semibold text-sm">{tour.rating}</span>
                      <span className="text-gray-500 text-sm">({tour.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium`}>
                        {tour.category}
                      </span>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{tour.destination}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                      {tour.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-2">
                      {tour.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="text-sm">{tour.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="text-sm">Available dates: {tour.availableDates.length} options</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div>
                        <span className="text-gray-500 text-sm">From</span>
                        <span className="text-3xl font-bold text-primary-600">${tour.price.toLocaleString()}</span>
                        <span className="text-gray-500 text-sm">/person</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Can't Find Your Perfect Tour?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our travel experts create a custom itinerary just for you!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2026 iTrap Travel Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
