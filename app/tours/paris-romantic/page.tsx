import Link from 'next/link';
import { ArrowLeft, Star, Calendar, Users, MapPin, CheckCircle, Plane } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Romantic Paris Getaway - iTrap Travel',
  description: '7-day romantic Paris tour with Eiffel Tower, Louvre Museum, Seine River cruise, and more. From €2,499/person.',
};

const tour = {
  name: 'Romantic Paris Getaway',
  destination: 'Paris, France',
  duration: '7 Days / 6 Nights',
  price: 2499,
  originalPrice: 2899,
  rating: 4.9,
  totalReviews: 127,
  heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop&q=80',
  category: 'Romantic',
  description: 'Experience the magic of Paris with your loved one. Enjoy luxury stays, fine dining, and iconic landmarks like the Eiffel Tower and Louvre Museum. Perfect for honeymooners and couples seeking unforgettable memories.',
};

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Paris',
    activities: [
      'Meet & Greet at Charles de Gaulle Airport',
      'Private transfer to 5-star hotel',
      'Evening orientation walk near Champs-Élysées',
      'Welcome dinner at local bistro',
    ],
    meals: ['Welcome Dinner'],
    accommodation: 'Luxury Hotel - Central Paris',
  },
  {
    day: 2,
    title: 'Eiffel Tower & Seine River',
    activities: [
      'Morning: Skip-the-line Eiffel Tower visit with expert guide',
      'Lunch at Eiffel Tower restaurant with city views',
      'Afternoon: Montmartre district exploration',
      'Evening: Romantic Seine River dinner cruise',
    ],
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    accommodation: 'Luxury Hotel - Central Paris',
  },
  {
    day: 3,
    title: 'Louvre Museum & Art Tour',
    activities: [
      'Morning: Private guided Louvre Museum tour (Mona Lisa, Venus de Milo)',
      'Lunch at museum café',
      'Afternoon: Musée d\'Orsay & Impressionist masterpieces',
      'Evening: Free time for shopping or leisure',
    ],
    meals: ['Breakfast', 'Lunch'],
    accommodation: 'Luxury Hotel - Central Paris',
  },
  {
    day: 4,
    title: 'Palace of Versailles',
    activities: [
      'Morning: Train to Versailles',
      'Full day guided tour: Palace, Gardens, Trianon Palaces',
      'Lunch at Versailles restaurant',
      'Afternoon: Return to Paris',
      'Evening: Free time',
    ],
    meals: ['Breakfast', 'Lunch'],
    accommodation: 'Luxury Hotel - Central Paris',
  },
  {
    day: 5,
    title: 'Montmartre & Latin Quarter',
    activities: [
      'Morning: Montmartre & Sacré-Cœur Basilica (panoramic views)',
      'Lunch at Montmartre café',
      'Afternoon: Latin Quarter, Panthéon, Roman ruins',
      'Evening: Dinner in Saint-Germain des Prés',
    ],
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    accommodation: 'Luxury Hotel - Central Paris',
  },
  {
    day: 6,
    title: 'Free Day & Shopping',
    activities: [
      'Morning: Visit to Galeries Lafayette for luxury shopping',
      'Lunch: French cuisine cooking class',
      'Afternoon: Explore Le Marais district or leisure',
      'Evening: Farewell dinner at Michelin-starred restaurant',
    ],
    meals: ['Breakfast', 'Lunch', 'Farewell Dinner'],
    accommodation: 'Luxury Hotel - Central Paris',
  },
  {
    day: 7,
    title: 'Departure',
    activities: [
      'Morning: Breakfast at hotel',
      'Transfer to Charles de Gaulle Airport',
      'Assistance with check-in',
    ],
    meals: ['Breakfast'],
    accommodation: 'N/A',
  },
];

const inclusions = [
  '5-star luxury hotel accommodation (6 nights)',
  'Daily breakfast at hotel',
  'Skip-the-line Eiffel Tower tickets',
  'Skip-the-line Louvre Museum tickets',
  'Private Seine River dinner cruise',
  'Private airport transfers (arrival & departure)',
  'Expert bilingual tour guide (Days 2-4)',
  'Welcome dinner',
  'Farewell dinner at Michelin-starred restaurant',
  'Cooking class experience',
  'Travel insurance',
  '24/7 support hotline',
];

const exclusions = [
  'International flights to/from Paris',
  'Personal expenses (shopping, additional meals)',
  'Tips for tour guide and driver (optional)',
  'Visa fees (if applicable)',
  'Travel insurance (optional upgrade available)',
];

const availableDates = [
  { date: 'Apr 15, 2026', price: 2499, availability: 'limited' },
  { date: 'Apr 22, 2026', price: 2499, availability: 'available' },
  { date: 'Apr 29, 2026', price: 2499, availability: 'available' },
  { date: 'May 6, 2026', price: 2599, availability: 'available' },
  { date: 'May 13, 2026', price: 2599, availability: 'limited' },
];

export default function TourDetailPage() {
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

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tours" className="inline-flex items-center text-gray-700 hover:text-primary-600 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Tours
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
        <Image
          src={tour.heroImage}
          alt={tour.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              {tour.name}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {tour.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tour Info Bar */}
      <section className="bg-white py-6 shadow-sm -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary-500" />
              <div>
                <span className="text-sm text-gray-500">Duration</span>
                <p className="font-semibold">{tour.duration}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary-500" />
              <div>
                <span className="text-sm text-gray-500">Group Size</span>
                <p className="font-semibold">2-12 travelers</p>
              </div>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-primary-500" />
              <div>
                <span className="text-sm text-gray-500">Rating</span>
                <p className="font-semibold">{tour.rating} ({tour.totalReviews} reviews)</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary-500" />
              <div>
                <span className="text-sm text-gray-500">Destination</span>
                <p className="font-semibold">{tour.destination}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-8">
            {itinerary.map((day) => (
              <div key={day.day} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-primary-600 px-6 py-4">
                  <h3 className="text-xl font-display font-bold text-white flex items-center">
                    Day {day.day}: {day.title}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Activities</h4>
                    <ul className="space-y-2">
                      {day.activities.map((activity, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Meals</h4>
                      <ul className="space-y-1">
                        {day.meals.map((meal, index) => (
                          <li key={index} className="text-sm text-gray-600">• {meal}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Accommodation</h4>
                      <p className="text-sm text-gray-600">{day.accommodation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                What's Included
              </h2>
              <ul className="space-y-3">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center">
                What's Not Included
              </h2>
              <ul className="space-y-3">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-gray-400 mr-3 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Available Dates & Pricing */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
            Available Dates & Pricing
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Departure Date</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Price per Person</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Availability</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {availableDates.map((option, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-900">{option.date}</td>
                    <td className="px-6 py-4">
                      {option.price > tour.price && (
                        <span className="text-gray-500 line-through mr-2">€{option.price.toLocaleString()}</span>
                      )}
                      <span className="text-2xl font-bold text-primary-600">€{option.price.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {option.availability === 'available' && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          Available
                        </span>
                      )}
                      {option.availability === 'limited' && (
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                          Limited
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        href="/contact"
                        className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                      >
                        Book Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              <Plane className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Book Your Romantic Paris Getaway?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our travel experts to secure your dates and customize your experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Book This Tour
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Browse More Tours
            </Link>
          </div>
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
