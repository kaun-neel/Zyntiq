import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Monitor, Shield, Building, Building2, Home } from 'lucide-react';

const CareersPage = () => {
  const internships = [
    {
      title: 'HR/Marketing',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Fuel your ambition: Take charge of your career with our 2-month HR/Marketing internship.',
      image: '/DigitalM.png'
    },
    {
      title: 'Web Development',
      icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Fuel your ambition: Take charge of your career with our 2-month Web Development internship.',
      image: '/WebD.png'
    },
    {
      title: 'Cybersecurity',
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Fuel your ambition: Take charge of your career with our 2-month Cybersecurity internship.',
      image: '/Cyber.png'
    }
  ];

  const benefits = [
    {
      title: 'Interactive Online Learning',
      description: 'Gain access to high-quality content and live session led by expert instructors for a smooth and engaging learning experience.',
      icon: '🎯'
    },
    {
      title: 'Flexible Study Schedule',
      description: 'Learn at your own pace with a customizable schedule that fits your lifestyle and personal commitments.',
      icon: '📅'
    },
    {
      title: 'Industry-Focused Training',
      description: 'Work on real-world projects and earn certifications that are internationally recognized, ensuring and relevant skills.',
      icon: '🏢'
    },
    {
      title: 'Hand-On Projects & Global Certification',
      description: 'Build experience through live projects and receive certifications acknowledged by organizations around the world.',
      icon: '📜'
    }
  ];

  const companies = [
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg'
  ];

  return (
    <div className="min-h-screen yellow-gradient-bg text-gray-800">
      {/* Hero Section - Mobile Optimized */}
      <div className="relative overflow-hidden min-h-[500px] sm:min-h-[600px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-32 sm:pb-48 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors mb-6 sm:mb-8 md:mb-12 min-h-[44px] touch-manipulation">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm sm:text-base">Back</span>
          </Link>

          {/* Hero Title - Mobile First */}
          <div className="text-center sm:text-left mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 mb-2 sm:mb-4 leading-tight">
              Zyntiq<br />
              <span className="text-2xl sm:text-3xl md:text-4xl">INTERNSHIP</span><br />
              <span className="text-2xl sm:text-3xl md:text-4xl">PROGRAM</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-900 mt-2 sm:mt-4">2025</h2>
          </div>
        </div>
        
        {/* Building Elements - Responsive */}
        <div className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 h-full flex items-end justify-end z-0 opacity-40 sm:opacity-60">
          <div className="flex items-end gap-1 sm:gap-2 md:gap-4 mb-8 sm:mb-16">
            {/* Building 1 */}
            <div className="w-8 sm:w-12 md:w-16 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-purple-400/80 to-purple-300/60 rounded-t-lg relative">
              <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-1 sm:w-2 md:w-3 h-1 sm:h-2 md:h-3 bg-yellow-300/80 rounded-sm"></div>
              <div className="absolute top-3 sm:top-6 left-1 sm:left-2 w-1 sm:w-2 md:w-3 h-1 sm:h-2 md:h-3 bg-yellow-300/80 rounded-sm"></div>
              <Building className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 text-purple-600" />
            </div>
            
            {/* Building 2 */}
            <div className="w-10 sm:w-16 md:w-20 h-20 sm:h-32 md:h-40 bg-gradient-to-t from-indigo-400/80 to-indigo-300/60 rounded-t-lg relative">
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-1 sm:w-2 md:w-3 h-1 sm:h-2 md:h-3 bg-yellow-300/80 rounded-sm"></div>
              <div className="absolute top-4 sm:top-8 left-2 sm:left-3 w-1 sm:w-2 md:w-3 h-1 sm:h-2 md:h-3 bg-yellow-300/80 rounded-sm"></div>
              <Building2 className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-indigo-600" />
            </div>
            
            {/* Building 3 */}
            <div className="w-7 sm:w-11 md:w-14 h-14 sm:h-21 md:h-28 bg-gradient-to-t from-purple-500/80 to-purple-400/60 rounded-t-lg relative">
              <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-1 sm:w-2 h-1 sm:h-2 bg-yellow-300/80 rounded-sm"></div>
              <Home className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 text-purple-700" />
            </div>
            
            {/* Building 4 */}
            <div className="w-9 sm:w-14 md:w-18 h-18 sm:h-28 md:h-36 bg-gradient-to-t from-blue-400/80 to-blue-300/60 rounded-t-lg relative">
              <div className="absolute top-2 sm:top-3 left-1 sm:left-2 w-1 sm:w-2 md:w-3 h-1 sm:h-2 md:h-3 bg-yellow-300/80 rounded-sm"></div>
              <Building className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 text-blue-600" />
            </div>
            
            {/* Building 5 */}
            <div className="w-6 sm:w-9 md:w-12 h-12 sm:h-18 md:h-24 bg-gradient-to-t from-purple-300/80 to-purple-200/60 rounded-t-lg relative">
              <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-1 sm:w-2 h-1 sm:h-2 bg-yellow-300/80 rounded-sm"></div>
              <Home className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 text-purple-600" />
            </div>
          </div>
        </div>
        
        {/* Wave SVG - Responsive */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="rgba(255, 255, 255, 0.8)" fillOpacity="1" d="M0,96L1440,192L1440,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Internship Cards - Mobile Optimized */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-32 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {internships.map((internship, index) => (
            <div key={index} className="glass-card-dark rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-xl transition-all touch-manipulation">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  {internship.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mt-2 text-gray-800 flex-1">{internship.title}</h3>
              </div>
              <div className="mb-4 sm:mb-6">
                <img 
                  src={internship.image} 
                  alt={internship.title} 
                  className="w-full h-24 sm:h-32 object-contain"
                />
              </div>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{internship.description}</p>
              <button className="w-full bg-purple-600 text-white py-3 sm:py-3.5 rounded-full hover:bg-purple-700 transition-colors text-sm sm:text-base font-medium min-h-[48px] touch-manipulation">
                Apply now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Program Overview - Mobile Optimized */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-800 text-center sm:text-left">Program Overview</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video bg-purple-100/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center border border-purple-200/50 relative overflow-hidden">
              <img 
                src="images/final.jpeg" 
                alt="Program Overview Chart" 
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
              />
              
              {/* Sample chart bars for visual effect */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
                {[20, 40, 60, 80].map((height, index) => (
                  <div
                    key={index}
                    className="w-4 sm:w-6 md:w-8 bg-purple-600 rounded-t-lg opacity-30"
                    style={{ height: `${height * 0.5}px` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Unlock access to over 30 internship-related resources, attend interactive live sessions, and become part of an encouraging learning community. Choose between a 1-month or 2-month access plan, learn at your own pace, and download materials to keep forever.
            </p>
            
            <ul className="space-y-3 sm:space-y-4">
              {[
                'Get unlimited access to more than 30 high quality learning modules.',
                'Join live weekend sessions led by experienced instructors.',
                'Use exclusive resources and join Q&A discussion.',
                'Select either 1 or 2 months of flexible access to internship materials.',
                'Study from anywhere, anytime-it fits into your schedule.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Certification Section - Mobile Optimized */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 text-center lg:text-left">
              Internationally Recognized & Government Approved Internship Certification
            </h2>
            
            <ul className="space-y-3 sm:space-y-4">
              {[
                'Certified to ISO 9001:2015 standards by QFS Management System LLP, ensuring excellence in quality management.',
                'Accredited by the Standards Council of Canada.',
                'Compliant with globally recognized quality standards.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="images/certification.png"
              alt="Certificate"
              className="w-full max-w-sm sm:max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section - Mobile Optimized */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800 text-center sm:text-left">Internship Benefits</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12">
          <div className="space-y-6 sm:space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 sm:gap-4">
                <span className="text-xl sm:text-2xl flex-shrink-0">{benefit.icon}</span>
                <div>
                  <h3 className="font-bold mb-2 text-gray-800 text-sm sm:text-base">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/woman-working-from-home-5706071-4755620.png"
              alt="Working from home"
              className="w-full max-w-xs sm:max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Training Structure - Mobile Optimized */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-2 sm:mb-4">
            How will your training be structured?
          </h2>
          <p className="text-purple-600 text-sm sm:text-base">
            it's as simple as it sounds- and even more rewarding!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: 'Join the Program',
              items: [
                'Sign up for the internship program directly through the Zyntiq platform.',
                'You\'ll be assigned a dedicated instructor.',
                'Learn at your own pace with flexible scheduling.'
              ]
            },
            {
              title: 'Watch video lessons & Attend Weekend Mentorships',
              items: [
                'Get access to a wide range of recorded video lessons covering different areas of the internship syllabus.',
                'Join live mentor-led weekend sessions to receive expert advice and clarify doubts.',
                'Concentrate on mastering key concepts during the first 15 days.'
              ]
            },
            {
              title: 'Work on Projects',
              items: [
                'Take part in hands-on project sessions to put your knowledge into action.',
                'Apply what you\'ve learned through practical assignments designed to solidify your understanding.',
                'Work on projects throughout the internship to deepen your skills.',
                'Receive expert feedback and answers to your questions within 24 hours.'
              ]
            },
            {
              title: 'Earn Your Certificate',
              items: [
                'Go over all you\'ve learned to get ready for the final evaluation.',
                'Make sure to complete and submit all required assignments and coursework.',
                'After passing the final exam and meeting all criteria, you\'ll receive an internship certificate recognizing your expertise and accomplishments.'
              ]
            }
          ].map((section, index) => (
            <div key={index} className="glass-card-dark rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-600">{index + 1}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">{section.title}</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Companies Section - Mobile Optimized */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          Our internship graduates are currently working at
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          {companies.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company logo"
              className="h-6 sm:h-8 opacity-50 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Footer Banner - Mobile Optimized */}
      <div className="bg-black text-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Embrace Education,<br />
              Reach <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">New</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Elevation</span>
            </h2>
            <Link 
              to="/courses"
              className="px-6 sm:px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm sm:text-base font-medium min-h-[48px] touch-manipulation"
            >
              Start Learning
              <span className="text-lg sm:text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;