import { Code, BrainCircuit, Trophy, BadgeCheck, Bell, ArrowRight, Shield, BookOpen, Globe, Users, GraduationCap, Briefcase, MapPin, CreditCard, Headphones, Calendar } from 'lucide-react';

const benefits = [
  {
    icon: <Code className="w-6 h-6 text-blue-600" />,
    title: "Access Coding Events",
    description: "Participate in hands-on coding events and challenges.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
    title: "Tech Workshops",
    description: "Learn latest tech skills from curated workshops and mentors.",
  },
  {
    icon: <Trophy className="w-6 h-6 text-blue-600" />,
    title: "Real Projects",
    description: "Build and showcase real-world tech projects.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-blue-600" />,
    title: "Earn Badges & Certificates",
    description: "Get recognized for your efforts and achievements.",
  },
  {
    icon: <Bell className="w-6 h-6 text-blue-600" />,
    title: "Push Notifications",
    description: "Receive alerts about events, deadlines, and project updates right from the website.",
  },
];

const StudentClubPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Navigation */}
      

      {/* Main Student Club Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-1/2">
          <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Unite and Thrive with Campus Connect</h2>
              <p className="text-blue-600 font-medium mb-4">Powered by Student Developer Clubs</p>
              <p className="text-gray-700 mb-6">
                Whether you're joining events, collaborating on projects, or exploring new ideas, 
                our platform offers the tools you need to engage and grow within your college community.
              </p>
              <p className="text-sm text-gray-500 italic">
                Start exploring events, connecting with peers, and making your college journey unforgettable.
              </p>
            </div>


        </div>
        <div className="md:w-1/2">
          <img 
            src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/privilege-club/brand/student-club/h1-SC-Tier-Upgrade-hn.jpg" 
            alt="Students collaborating" 
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Enhanced Student Club Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Enhanced Student Club Membership Card */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl p-6 text-white col-span-full lg:col-span-2">
  <div className="flex items-center mb-4">
    <Users className="w-8 h-8 text-white mr-3" />
    <h2 className="text-2xl font-bold">Student Club Platform Highlights</h2>
  </div>
  <p className="mb-6 text-blue-100">
    A centralized hub where students can discover events, collaborate with peers, 
    access learning materials, and showcase their talents — all in one place.
  </p>

  {/* Enhanced Features Grid */}
  <div className="grid md:grid-cols-2 gap-6 mb-6">
    <div className="space-y-4">
      <div className="flex items-start">
        <BookOpen className="w-5 h-5 mr-3 mt-1 text-blue-200" />
        <div>
          <h4 className="font-semibold mb-1">Learning Resources</h4>
          <p className="text-sm text-blue-100">Access curated content, tech tutorials, and skill-building guides</p>
        </div>
      </div>
      <div className="flex items-start">
        <Globe className="w-5 h-5 mr-3 mt-1 text-blue-200" />
        <div>
          <h4 className="font-semibold mb-1">Club Directory</h4>
          <p className="text-sm text-blue-100">Explore active clubs across departments and interest areas</p>
        </div>
      </div>
      <div className="flex items-start">
        <CreditCard className="w-5 h-5 mr-3 mt-1 text-blue-200" />
        <div>
          <h4 className="font-semibold mb-1">Project Showcases</h4>
          <p className="text-sm text-blue-100">Highlight and share student-led innovations and creations</p>
        </div>
      </div>
    </div>
    <div className="space-y-4">
      <div className="flex items-start">
        <Trophy className="w-5 h-5 mr-3 mt-1 text-blue-200" />
        <div>
          <h4 className="font-semibold mb-1">Events & Competitions</h4>
          <p className="text-sm text-blue-100">Stay updated with hackathons, workshops, and club meetups</p>
        </div>
      </div>
      <div className="flex items-start">
        <BadgeCheck className="w-5 h-5 mr-3 mt-1 text-blue-200" />
        <div>
          <h4 className="font-semibold mb-1">Student Achievements</h4>
          <p className="text-sm text-blue-100">Celebrate milestones and recognize active contributors</p>
        </div>
      </div>
      <div className="flex items-start">
        <Headphones className="w-5 h-5 mr-3 mt-1 text-blue-200" />
        <div>
          <h4 className="font-semibold mb-1">Collaboration Hub</h4>
          <p className="text-sm text-blue-100">Connect with peers, form teams, and build together</p>
        </div>
      </div>
    </div>
  </div>

  <p className="text-sm text-blue-200 italic">
    Empowering student clubs with tools to organize, connect, and grow.
  </p>
</div>


        {/* Health Insurance Card */}
        <div className="bg-white rounded-x1 shadow-lg overflow-hidden border border-gray-100">
  <div className="p-8">
    <div className="flex items-center mb-4">
      <Shield className="w-8 h-8 text-green-600 mr-3" />
      <h2 className="text-xl font-bold text-gray-800">Safe & Inclusive Events</h2>
    </div>
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Guidelines Include:</h3>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start">
          <span className="text-green-500 mr-2 font-bold">✓</span>
          <span className="text-sm">Code of conduct for all participants and organizers</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2 font-bold">✓</span>
          <span className="text-sm">Emergency contact information for each event</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2 font-bold">✓</span>
          <span className="text-sm">Dedicated safety volunteers on-site</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2 font-bold">✓</span>
          <span className="text-sm">Inclusivity and accessibility measures for all</span>
        </li>
      </ul>
    </div>
    <p className="text-sm text-gray-500 italic">
      We prioritize safety and inclusivity in every event organized on our platform.
    </p>
  </div>
</div>

      </div>

      {/* Additional Service Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {/* Academic Excellence Card */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-white">
  <div className="flex items-center mb-4">
    <GraduationCap className="w-8 h-8 text-white mr-3" />
    <h3 className="text-xl font-bold">Club Opportunities</h3>
  </div>
  <ul className="space-y-2 text-purple-100 mb-6">
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-purple-300 rounded-full mr-2"></span>
      Inter-club collaborations
    </li>
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-purple-300 rounded-full mr-2"></span>
      Campus-wide events
    </li>
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-purple-300 rounded-full mr-2"></span>
      Project showcases
    </li>
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-purple-300 rounded-full mr-2"></span>
      Leadership programs
    </li>
  </ul>
  <button className="text-white font-medium hover:text-purple-200 transition duration-300">
    View all clubs →
  </button>
</div>


        {/* Career Development Card */}
        <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-6 text-white">
  <div className="flex items-center mb-4">
    <Briefcase className="w-8 h-8 text-white mr-3" />
    <h3 className="text-xl font-bold">Club-Led Career Boost</h3>
  </div>
  <ul className="space-y-2 text-orange-100 mb-6">
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-orange-300 rounded-full mr-2"></span>
      Tech talks with alumni
    </li>
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-orange-300 rounded-full mr-2"></span>
      Startup and hackathon links
    </li>
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-orange-300 rounded-full mr-2"></span>
      Resume revamp sessions
    </li>
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-orange-300 rounded-full mr-2"></span>
      Peer mock interviews
    </li>
  </ul>
  <button className="text-white font-medium hover:text-orange-200 transition duration-300">
    Start your journey →
  </button>
</div>


        {/* Global Community Card */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl p-6 text-white">
  <div className="flex items-center mb-4">
    <MapPin className="w-8 h-8 text-white mr-3" />
    <h3 className="text-xl font-bold">Connect Beyond Campus</h3>
  </div>
  <ul className="space-y-2 text-teal-100 mb-6">
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-teal-300 rounded-full mr-2"></span>
      Collaborate with global clubs
    </li>
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-teal-300 rounded-full mr-2"></span>
      Cross-cultural project teams
    </li>
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-teal-300 rounded-full mr-2"></span>
      Virtual student meetups
    </li>
    <li className="flex items-center text-sm">
      <span className="w-2 h-2 bg-teal-300 rounded-full mr-2"></span>
      Regional club alliances
    </li>
  </ul>
  <button className="text-white font-medium hover:text-teal-200 transition duration-300">
    Connect globally →
  </button>
</div>

      </div>

      {/* Build & Run Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl mb-16" id="build-run">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Build. Learn. Achieve.</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your academic journey with hands-on projects, real-world experience, and industry connections 
            that prepare you for tomorrow's challenges.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Build</h3>
              <p className="text-gray-300 text-sm">Create innovative solutions and showcase your technical skills</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Learn</h3>
              <p className="text-gray-300 text-sm">Master cutting-edge technologies through expert-led workshops</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Achieve</h3>
              <p className="text-gray-300 text-sm">Earn recognition and advance your career with proven results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-1 px-6 bg-white-50 rounded-xl mb-16" id="why-join">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Student Club?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the comprehensive benefits and opportunities that make Student Club the premier choice 
              for ambitious students across Qatar and beyond.
            </p>
          </div>
          
          {/* Scrollable container with hidden scrollbar */}
          <div className="relative">
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex space-x-6">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 border border-gray-100"
                  >
                    <div className="mb-4 bg-blue-50 p-3 rounded-full">{item.icon}</div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
<div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 text-white">
  <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Student Experience?</h2>
  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
    Join thousands of students who are already leveraging exclusive opportunities, building valuable skills,
    and creating lasting professional networks through Student Club.
  </p>
  <a 
    href="/student-login"
    className="inline-block bg-white text-blue-600 font-semibold py-3 px-12 rounded-lg hover:bg-gray-100 transition duration-300"
  >
    Join Now
  </a>
</div>

{/* Contact Us Section */}
<div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
  <div className="grid md:grid-cols-2">
    {/* Contact Information */}
    <div className="p-8 md:p-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Student Club</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-4">
            <BookOpen className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">General Inquiries</h3>
            <a href="mailto:info@studentclub.com" className="text-blue-600 hover:underline">
              info@studentclub.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-full mr-4">
            <Headphones className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Support</h3>
            <a href="mailto:support@studentclub.com" className="text-blue-600 hover:underline">
              support@studentclub.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-purple-100 p-2 rounded-full mr-4">
            <MapPin className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Campus Location</h3>
            <p className="text-gray-600">Student Center, Room 101</p>
            <p className="text-gray-600">Education City, Doha</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Image Section (Replace Contact Form) */}
    <div className="p-8 md:p-7 flex justify-center items-center">
      {/* Replace this with your image */}
      <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="Contact Us Image" className="max-w-full h-auto rounded-xl" />
    </div>
  </div>
</div>

    </div>
  );
};

export default StudentClubPage;