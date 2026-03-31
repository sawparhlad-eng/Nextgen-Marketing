import { motion } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  Globe, 
  Mail, 
  MessageSquare, 
  Rocket, 
  Search, 
  TrendingUp, 
  Users,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">Nextgen<span className="text-indigo-600">Marketing</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#results" className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors">Results</a>
            <a href="#contact" className="px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Get Started</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-neutral-200 px-4 py-6 flex flex-col gap-4"
        >
          <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-600">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-600">About</a>
          <a href="#results" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-600">Results</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-3 bg-indigo-600 text-white rounded-xl text-center font-semibold">Get Started</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
            The Future of Digital Growth
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 max-w-4xl mx-auto tracking-tight">
            Scale Your Brand with <span className="text-indigo-600">Next-Gen</span> Strategies
          </h1>
          <p className="text-lg lg:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We combine data-driven insights with creative excellence to help modern brands dominate their digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
              Start Your Growth <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#results" className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 border border-neutral-200 rounded-full font-bold text-lg hover:bg-neutral-50 transition-all">
              View Case Studies
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
            <img 
              src="https://picsum.photos/seed/marketing/1200/600" 
              alt="Dashboard Preview" 
              className="w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 hidden lg:block">
            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 font-medium">Avg. ROI Increase</p>
                <p className="text-2xl font-bold text-neutral-900">+145%</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 hidden lg:block">
            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 font-medium">Active Campaigns</p>
                <p className="text-2xl font-bold text-neutral-900">250+</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Search Engine Optimization",
      desc: "Dominate search results and drive organic traffic with our advanced SEO frameworks.",
      icon: <Search className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      title: "Paid Advertising (PPC)",
      desc: "High-converting ad campaigns across Google, Meta, and LinkedIn that maximize your ROAS.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-indigo-500"
    },
    {
      title: "Social Media Strategy",
      desc: "Build a loyal community and drive engagement with platform-specific content strategies.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "bg-purple-500"
    },
    {
      title: "Content Marketing",
      desc: "Strategic storytelling that positions your brand as an industry authority and drives leads.",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4 tracking-tight">Our Core Expertise</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">We don't just offer services; we build growth engines tailored to your business goals.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-4xl lg:text-6xl font-display font-bold mb-2">500+</p>
            <p className="text-indigo-100 font-medium">Clients Served</p>
          </div>
          <div>
            <p className="text-4xl lg:text-6xl font-display font-bold mb-2">$10M+</p>
            <p className="text-indigo-100 font-medium">Ad Spend Managed</p>
          </div>
          <div>
            <p className="text-4xl lg:text-6xl font-display font-bold mb-2">98%</p>
            <p className="text-indigo-100 font-medium">Client Retention</p>
          </div>
          <div>
            <p className="text-4xl lg:text-6xl font-display font-bold mb-2">15+</p>
            <p className="text-indigo-100 font-medium">Industry Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-neutral-100">
          <div className="lg:w-1/2 p-10 lg:p-20 bg-indigo-600 text-white">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">Ready to scale?</h2>
            <p className="text-indigo-100 text-lg mb-12">Book a free strategy session with our growth experts and discover your brand's true potential.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-indigo-200">Email us at</p>
                  <p className="text-lg font-semibold">hello@nextgen.marketing</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-indigo-200">Call us</p>
                  <p className="text-lg font-semibold">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-10 lg:p-20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Company Website</label>
                <input type="url" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="https://company.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">How can we help?</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">Nextgen Marketing</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Empowering ambitious brands with cutting-edge digital marketing strategies and data-driven growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">PPC Management</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Content Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-neutral-500 mb-4">Get the latest marketing insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input type="email" className="flex-1 px-4 py-2 rounded-lg border border-neutral-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email address" />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-neutral-100 text-center text-sm text-neutral-400">
          <p>© 2026 Nextgen Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        
        {/* Results Section */}
        <section id="results" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-4 block">Our Impact</span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">Real results for real businesses.</h2>
                <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                  We don't just track clicks; we track revenue. Our holistic approach ensures every dollar spent contributes to your bottom line.
                </p>
                <ul className="space-y-4">
                  {[
                    "Data-driven decision making",
                    "Custom growth frameworks",
                    "Full-funnel optimization",
                    "Transparent reporting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-neutral-800">
                      <CheckCircle2 className="text-green-500 w-6 h-6" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">3.5x</p>
                    <p className="text-sm text-neutral-500">Average ROAS</p>
                  </div>
                  <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">45%</p>
                    <p className="text-sm text-neutral-500">Lower CPA</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">120%</p>
                    <p className="text-sm text-neutral-500">Traffic Growth</p>
                  </div>
                  <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">2.4k</p>
                    <p className="text-sm text-neutral-500">Leads Generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
