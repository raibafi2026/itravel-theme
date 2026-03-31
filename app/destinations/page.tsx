import Link from 'next/link';
import { MapPin, Calendar, Star } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Destinations - iTrap Travel',
  description: 'Explore amazing destinations worldwide with iTrap Travel Agency',
};

const destinations = [
  {
    id: 'paris',
    name: 'Paris, France',
    description: 'The City of Lights beckons with iconic landmarks, world-class museums, and romantic ambiance.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80',
    bestTime: 'April-June, September-October',
    tours: 15,
    rating: 4.9,
  },
  {
    id: 'bali',
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with stunning beaches, ancient temples, and a rich cultural heritage.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80',
    bestTime: 'April-October',
    tours: 22,
    rating: 4.8,
  },
  {
    id: 'tokyo',
    name: 'Tokyo, Japan',
    description: 'A fascinating blend of ancient traditions and cutting-edge technology in a vibrant metropolis.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80',
    bestTime: 'March-May, October-November',
    tours: 18,
    rating: 4.7,
  },
  {
    id: 'maldives',
    name: 'Maldives',
    description: 'Crystal-clear waters, overwater bungalows, and pristine beaches - the ultimate luxury escape.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop&q=80',
    bestTime: 'November-April',
    tours: 12,
    rating: 4.9,
  },
  {
    id: 'new-york',
    name: 'New York, USA',
    description: 'The city that never sleeps offers iconic landmarks, world-famous museums, and diverse neighborhoods.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=80',
    bestTime: 'April-June, September-November',
    tours: 25,
    rating: 4.6,
  },
  {
    id: 'rome',
    name: 'Rome, Italy',
    description: 'The Eternal City is an open-air museum with ancient ruins, Renaissance art, and incredible cuisine.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop&q=80',
    bestTime: 'April-June, September-October',
    tours: 20,
    rating: 4.8,
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps',
    description: 'Breathtaking mountain villages, scenic train rides, and winter sports paradise.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop&q=80',
    bestTime: 'December-March, June-August',
    tours: 14,
    rating: 4.7,
  },
  {
    id: 'safari',
    name: 'African Safari',
    description: 'Witness the Big Five on an unforgettable African safari with luxury lodges.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80',
    bestTime: 'June-September',
    tours: 16,
    rating: 4.9,
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Simplified version */}
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
              <Link href="/destinations" className="text-primary-600 font-semibold">Destinations</Link>
              <Link href="/tours" className="text-gray-700 hover:text-primary-600 transition-colors">Tours</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link>
            </div>
            <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Explore Destinations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover breathtaking destinations worldwide. Each location offers unique experiences and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-gray-900 font-semibold text-sm">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {destination.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="text-sm">Best time: {destination.bestTime}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="text-sm">{destination.tours} tours available</span>
                      </div>
                    </div>
                    <Link
                      href={`/destinations/${destination.id}`}
                      className="mt-4 inline-flex items-center w-full justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      Explore Destination
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2026 iTrap Travel Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
