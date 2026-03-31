import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Paris, France - iTrap Travel',
  description: 'Experience the magic of Paris with iTrap. Visit Eiffel Tower, Louvre Museum, and enjoy authentic French cuisine.',
};

const parisDestination = {
  name: 'Paris, France',
  description: 'The City of Lights beckons with iconic landmarks, world-class museums, and romantic ambiance.',
  image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop&q=80',
  bestTime: 'April-June, September-October',
  flightTime: '8-10 hours from major cities',
  currency: 'EUR (€)',
  timezone: 'GMT+2',
};

const highlights = [
  {
    title: 'Eiffel Tower',
    description: 'Visit the iconic symbol of Paris and enjoy breathtaking city views.',
  },
  {
    title: 'Louvre Museum',
    description: 'Explore the world\'s largest art museum home to the Mona Lisa.',
  },
  {
    title: 'Seine River Cruise',
    description: 'Romantic evening cruise along the Seine with dinner options.',
  },
  {
    title: 'Montmartre',
    description: 'Charming historic district with stunning views and artistic heritage.',
  },
  {
    title: 'Champs-Élysées',
    description: 'Famous avenue with luxury shopping, Arc de Triomphe.',
  },
  {
    title: 'Notre-Dame Cathedral',
    description: 'Gothic masterpiece and symbol of Paris.',
  },
  {
    title: 'Palace of Versailles',
    description: 'Opulent royal palace with magnificent gardens.',
  },
  {
    title: 'Latin Quarter',
    description: 'Historic district with vibrant cafes and Roman ruins.',
  },
];

const tours = [
  {
    id: 'paris-romantic',
    name: 'Romantic Paris Getaway',
    duration: '7 Days / 6 Nights',
    price: 2499,
    rating: 4.9,
    reviews: 127,
    description: 'Perfect for couples seeking unforgettable experiences.',
    includes: [
      '5-star luxury hotel accommodation',
      'Daily breakfast',
      'Eiffel Tower visit with skip-the-line tickets',
      'Louvre Museum tickets',
      'Seine River dinner cruise',
      'Airport transfers',
    ],
  },
  {
    id: 'paris-family',
    name: 'Paris Family Adventure',
    duration: '8 Days / 7 Nights',
    price: 3199,
    rating: 4.8,
    reviews: 89,
    description: 'Family-friendly tour with kid-friendly activities.',
    includes: [
      'Family-friendly hotel',
      'All meals included',
      'Disneyland Paris day trip',
      'Eiffel Tower experience',
      'Cultural workshops for kids',
      'Airport transfers',
    ],
  },
  {
    id: 'paris-culinary',
    name: 'Paris Culinary Journey',
    duration: '6 Days / 5 Nights',
    price: 2799,
    rating: 4.7,
    reviews: 64,
    description: 'Food lover\'s paradise with cooking classes and food tours.',
    includes: [
      'Boutique hotel',
      'Cooking class with French chef',
      'Food walking tours',
      'Wine tasting experience',
      'Market visits',
      'Airport transfers',
    ],
  },
];

export default function ParisDestinationPage() {
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
              <Link href="/destinations" className="text-primary-600 font-semibold">Destinations</Link>
              <Link href="/tours" className="text-gray-700 hover:text-primary-600 transition-colors">Tours</Link>
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

      {/* Back Button */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/destinations" className="inline-flex items-center text-gray-700 hover:text-primary-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Destinations
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
        <Image
          src={parisDestination.image}
          alt={parisDestination.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {parisDestination.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {parisDestination.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 mr-2 text-primary-500" />
              <div>
                <span className="text-sm text-gray-500">Best Time</span>
                <p className="font-semibold">{parisDestination.bestTime}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-2 text-primary-500" />
              <div>
                <span className="text-sm text-gray-500">Flight Time</span>
                <p className="font-semibold">{parisDestination.flightTime}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-sm text-gray-500">Currency</span>
              <p className="font-semibold">{parisDestination.currency}</p>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-sm text-gray-500">Timezone</span>
              <p className="font-semibold">{parisDestination.timezone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
            Top Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
            Available Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tour.duration}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-gray-700 font-medium">{tour.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                    {tour.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {tour.includes.map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-gray-500 text-sm">From</span>
                      <span className="text-3xl font-bold text-primary-600">€{tour.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm">/person</span>
                    </div>
                    <Link
                      href={`/tours/${tour.id}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Book Your Paris Trip?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our travel experts to customize your perfect Paris experience.
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
