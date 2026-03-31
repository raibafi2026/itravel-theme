import { Shield, Globe, Award } from 'lucide-react';

export const metadata = {
  title: 'About Us - iTrap Travel',
  description: 'Learn about iTrap Travel Agency - your trusted travel partner for unforgettable experiences worldwide.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">i</div>
              <span className="text-2xl font-bold text-gray-900">iTrap</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
              <a href="/destinations" className="text-gray-700 hover:text-primary-600 transition-colors">Destinations</a>
              <a href="/tours" className="text-gray-700 hover:text-primary-600 transition-colors">Tours</a>
              <a href="/about" className="text-primary-600 font-semibold">About</a>
              <a href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
            </div>
            <a href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">About iTrap</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your Trusted Travel Partner for Unforgettable Experiences
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, iTrap started with a simple mission: to make travel planning effortless and accessible for everyone. What began as a small team of passionate travelers has grown into a leading travel agency serving customers worldwide.
              </p>
              <p className="text-gray-600">
                Our team combines years of travel expertise with cutting-edge technology to deliver personalized travel experiences that exceed expectations. We believe that travel is more than just visiting new places—it's about creating unforgettable memories.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-5xl font-bold text-primary-600">i</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 text-center">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Globe className="w-12 h-12 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To inspire and enable people to explore the world by providing seamless, affordable, and memorable travel experiences. We believe everyone deserves their dream vacation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Award className="w-12 h-12 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To become the world's most trusted travel companion, connecting people with their dream destinations through innovative solutions and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 text-center">
            Why Choose iTrap?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Planning</h3>
              <p className="text-gray-600 text-sm">
                Our experienced travel specialists craft personalized itineraries tailored to your preferences and budget.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600 text-sm">
                With partners in over 100 countries, we can take you anywhere your heart desires.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">
                We partner with airlines and hotels worldwide to bring you competitive rates and exclusive deals.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Our dedicated support team is available around the clock to assist you during your journey.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Partners</h3>
              <p className="text-gray-600 text-sm">
                We only work with verified and trusted accommodations, airlines, and tour operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-white mb-2">50K+</p>
              <p className="text-white/90">Happy Travelers</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">100+</p>
              <p className="text-white/90">Destinations</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">98%</p>
              <p className="text-white/90">Satisfaction</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">4.9/5</p>
              <p className="text-white/90">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our travel experts help you plan your perfect trip. Get in touch with us today!
          </p>
          <a href="/contact" className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Contact Us Today
          </a>
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
