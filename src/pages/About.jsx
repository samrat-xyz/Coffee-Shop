import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Emma Wilson',
      role: 'Head Barista',
      bio: 'With 8 years of specialty coffee experience, Emma creates our signature drinks.',
      image: 'https://c1.wallpaperflare.com/preview/984/53/201/barista-barista-girl-business-caf%C3%A9.jpg' 
    },
    {
      id: 2,
      name: 'James Rodriguez',
      role: 'Baker',
      bio: 'James crafts all our pastries fresh daily using traditional French techniques.',
      image: 'https://www.shutterstock.com/image-photo/chefcooker-chefs-hat-jacket-working-260nw-2285545465.jpg'
    },
    {
      id: 3,
      name: 'Sophia Chen',
      role: 'Owner',
      bio: 'Sophia founded Coffe Haven to bring authentic coffee culture to the neighborhood.',
      image: 'https://www.shutterstock.com/image-photo/portrait-asian-business-woman-holding-600nw-2326205829.jpg'
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="noto-serif max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
        <div className="w-24 h-1 bg-amber-800 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Since 2015, Coffe Haven has been a sanctuary for coffee lovers and a gathering place for our community.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">From Humble Beginnings</h2>
          <p className="text-gray-600 mb-6">
            What started as a small cart in the farmer's market has grown into a beloved neighborhood coffee shop. Our founder, Sophia Chen, dreamed of creating a space where quality coffee meets warm hospitality.
          </p>
          <p className="text-gray-600 mb-6">
            We roast our beans in-house using sustainable sourcing practices, ensuring every cup tells a story from farm to cup.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <span className="ml-2 font-medium text-gray-800">50+ Coffee Varieties</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3m0-6c1.657 0 3-1.343 3-3s-1.343-3-3-3m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="ml-2 font-medium text-gray-800">Sustainable Sourcing</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
            alt="Vintage coffee shop interior with wooden tables, pendant lighting, and barista at work"
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/800x600?text=Our+Coffee+Shop';
              e.target.alt = 'Placeholder image of coffee shop interior';
            }}
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-amber-50 rounded-xl p-10 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8">
            To craft exceptional coffee experiences that delight the senses while fostering community and connection.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">Only the finest specialty-grade beans</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">Ethical sourcing and eco-friendly practices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">Creating welcoming spaces for all</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet Our Team</h2>
        <div className="w-24 h-1 bg-amber-800 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/400x300?text=Team+Member';
                    e.target.alt = 'Generic placeholder for missing team member photo';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-amber-700 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 rounded-xl p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Visit Us</h2>
        <div className="w-24 h-1 bg-amber-800 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Location</h3>
            <address className="not-italic text-gray-600 mb-6">
              123 Coffee Bean Lane<br />
              Portland, OR 97201
            </address>
            <div className="rounded-lg overflow-hidden h-64 shadow-md">
              <img 
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
                alt="Street view of Brew Haven Coffee shop with outdoor seating and green awnings"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400?text=Shop+Location';
                  e.target.alt = 'Placeholder for coffee shop location image';
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Hours</h3>
            <div className="mb-6">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="font-medium text-gray-800">6:30 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700">Saturday</span>
                <span className="font-medium text-gray-800">7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700">Sunday</span>
                <span className="font-medium text-gray-800">7:30 AM - 7:00 PM</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">(503) 555-0199</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">hello@coffehaven.com</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">@coffehaven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
