import Link from "next/link";
import { Plane, MapPin, Calendar, Users, Star } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
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
              <Link href="/destinations" className="text-gray-700 hover:text-primary-600 transition-colors">
                Destinations
              </Link>
              <Link href="/tours" className="text-gray-700 hover:text-primary-600 transition-colors">
                Tours
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact
              </Link>
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

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-600/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Explore breathtaking destinations worldwide. From tropical beaches to mountain peaks, we curate unforgettable experiences just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tours"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-center transition-colors"
              >
                Browse Tours
              </Link>
              <Link
                href="/destinations"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-center transition-colors"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search/Quick Book Form */}
      <section className="bg-white py-12 -mt-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 -mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-500" />
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-500" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Travelers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-500" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white">
                    <option value="">Select travelers</option>
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3">3 Travelers</option>
                    <option value="4">4 Travelers</option>
                    <option value="5+">5+ Travelers</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white">
                  <option value="">Select budget</option>
                  <option value="budget">$500 - $1,000</option>
                  <option value="moderate">$1,000 - $3,000</option>
                  <option value="luxury">$3,000 - $5,000</option>
                  <option value="premium">$5,000+</option>
                </select>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked destinations loved by travelers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Paris */}
            <Link href="/destinations/paris" className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80"
                    alt="Paris"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Paris, France</h3>
                  <p className="text-white/90">City of lights and romance</p>
                </div>
              </div>
            </Link>

            {/* Bali */}
            <Link href="/destinations/bali" className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80"
                    alt="Bali"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Bali, Indonesia</h3>
                  <p className="text-white/90">Tropical paradise awaits</p>
                </div>
              </div>
            </Link>

            {/* Tokyo */}
            <Link href="/destinations/tokyo" className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80"
                    alt="Tokyo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Tokyo, Japan</h3>
                  <p className="text-white/90">Ancient meets modern</p>
                </div>
              </div>
            </Link>

            {/* Maldives */}
            <Link href="/destinations/maldives" className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop&q=80"
                    alt="Maldives"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Maldives</h3>
                  <p className="text-white/90">Luxury overwater retreat</p>
                </div>
              </div>
            </Link>

            {/* New York */}
            <Link href="/destinations/new-york" className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=80"
                    alt="New York"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">New York, USA</h3>
                  <p className="text-white/90">The city that never sleeps</p>
                </div>
              </div>
            </Link>

            {/* Rome */}
            <Link href="/destinations/rome" className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop&q=80"
                    alt="Rome"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Rome, Italy</h3>
                  <p className="text-white/90">The eternal city</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors"
            >
              View All Destinations
              <Plane className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Popular Tours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked tour packages loved by travelers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tour 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80"
                  alt="Paris Tour"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">7 Days</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-gray-700 font-medium">4.9</span>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Romantic Paris Getaway
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Experience the magic of Paris with luxury stays, fine dining, and iconic landmarks like the Eiffel Tower and Louvre Museum.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 text-sm">From</span>
                    <span className="text-3xl font-bold text-primary-600">$2,499</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <Link
                    href="/tours/paris-romantic"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Tour 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80"
                  alt="Bali Tour"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">10 Days</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-gray-700 font-medium">4.8</span>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Bali Paradise Escape
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Discover Bali's stunning beaches, ancient temples, and vibrant culture. Perfect for relaxation and adventure.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 text-sm">From</span>
                    <span className="text-3xl font-bold text-primary-600">$1,899</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <Link
                    href="/tours/bali-escape"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors"
            >
              View All Tours
              <Plane className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our travel experts are here to help you plan your perfect trip. Get in touch today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Browse Tours
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold mb-4">iTrap Travel</h3>
              <p className="text-gray-400 mb-4">
                Your trusted travel partner for unforgettable experiences worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</Link></li>
                <li><Link href="/tours" className="text-gray-400 hover:text-white transition-colors">Tours</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>hello@itrap.travel</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Travel Street, Adventure City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 iTrap Travel Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
