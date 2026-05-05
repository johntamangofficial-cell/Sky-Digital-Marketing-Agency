/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, X, ChevronRight, Globe, TrendingUp, Palette, 
  Search, Share2, MousePointer2, Star, CheckCircle2, 
  Mail, Phone, MapPin, Instagram, Facebook, Twitter,
  ArrowRight
} from 'lucide-react';

// --- Data ---

const services = [
  {
    title: "Web Design and Development",
    description: "Crafting Website with creativity, our website designing service transforms your vision into online realities.",
    icon: Globe,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Digital Marketing",
    description: "Transforming business through digital strategies, we help businesses to achieve their marketing objectives.",
    icon: TrendingUp,
    color: "from-violet-500 to-purple-400"
  },
  {
    title: "Graphic Designing",
    description: "Creating visual stories that captivate and engage, our graphic design service brings your ideas to life.",
    icon: Palette,
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "SEO Optimization",
    description: "Boost your organic reach and dominate search rankings with our data-driven SEO strategies.",
    icon: Search,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "SMO",
    description: "Build a powerful social presence and engage with your audience where they hang out most.",
    icon: Share2,
    color: "from-orange-500 to-yellow-400"
  },
  {
    title: "Paid Advertisements",
    description: "Generate instant results and high ROI with targeted PPC and social ad campaigns.",
    icon: MousePointer2,
    color: "from-blue-600 to-indigo-500"
  }
];

const values = [
  {
    title: "Expertise",
    description: "Years of industry experience to tackle projects of any size or complexity."
  },
  {
    title: "Creativity",
    description: "We thrive on pushing boundaries to deliver truly innovative solutions."
  },
  {
    title: "Client Focused",
    description: "Your satisfaction is our top priority. We go above and beyond."
  },
  {
    title: "Affordability",
    description: "Quality doesn't have to break the bank. Flexible packages available."
  }
];

const testimonials = [
  {
    name: "Vision Synergy Corporation",
    text: "Working with Sky Digital Marketing Agency was the best decision we made for our business. Their expertise took our online presence to new heights."
  },
  {
    name: "Allied Comfort Elevators",
    text: "Thanks to Sky Digital Marketing Agency we've seen results and a significant return on investment. Highly recommend their services."
  },
  {
    name: "Homeycomb Designs",
    text: "Their expertise took our online presence to new heights, bringing in more leads and boosting our sales. Exceptional service!"
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
            <Globe className="text-white w-6 h-6" />
          </div>
          <span>SKY <span className="text-brand-primary">DIGITAL</span></span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Blogs', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-brand-primary rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            Call Us Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-xl">
              {['Home', 'About', 'Services', 'Blogs', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="w-full py-4 bg-brand-primary rounded-xl font-bold">
                Call Us Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 500], [0, 100]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-primary mb-6"
          >
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            Leading Digital Agency in Delhi
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            360° Digital Marketing <br />
            <span className="text-gradient">Generates Revenue</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            We create stunning websites that elevate your brand and convert visitors into customers. 
            Experience creativity that transforms your vision into online realities.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-primary rounded-full font-bold flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Our Portfolio
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 rounded-3xl border border-white/10 p-4 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
              alt="Digital Growth" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* HUD Elements */}
            <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl animate-float [animation-delay:1s]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <TrendingUp className="text-emerald-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold">Growth</div>
                  <div className="text-lg font-bold">+184%</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl animate-float [animation-delay:2s]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Globe className="text-blue-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold">Traffic</div>
                  <div className="text-lg font-bold">12.5k</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface Service {
  title: string;
  description: string;
  icon: any; // Using any for simplicity with lucide icons in this context
  color: string;
}

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all duration-500 relative overflow-hidden"
    >
      <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
      
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
        <service.icon className="text-white w-full h-full" />
      </div>
      
      <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm mb-6">
        {service.description}
      </p>
      
      <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group/link">
        Learn More 
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="services" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
              Our Expertise
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Solutions that mark the <br />
              <span className="text-gradient">Presence of your Business</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            View All Services
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service as Service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Value {
  title: string;
  description: string;
}

const ValueItem: React.FC<{ value: Value; index: number }> = ({ value, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-primary/30 flex items-center justify-center text-brand-primary font-bold">
      0{index + 1}
    </div>
    <div>
      <h4 className="text-lg font-bold mb-2">{value.title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
    </div>
  </motion.div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2340" 
              alt="Our Team" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay" />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl z-20 hidden md:block border border-brand-primary/20">
            <div className="text-4xl font-bold text-brand-primary mb-1">10+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400">Years Industry Experience</div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            Why Choose <span className="text-brand-primary">Sky Digital?</span>
          </h2>
          <div className="space-y-2">
            {values.map((v, i) => (
              <ValueItem key={v.title} value={v as Value} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-brand-primary/5">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-1 mb-6 text-brand-primary"
        >
          {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-5 h-5" />)}
        </motion.div>
        <h2 className="text-4xl font-display font-bold mb-16">What Our Clients Say?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="mb-6 relative">
                <span className="text-6xl text-brand-primary/20 absolute -top-4 -left-2 font-serif">"</span>
                <p className="text-gray-300 italic relative z-10">
                  {t.text}
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-[10px] uppercase text-gray-500">Verified Client</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Let's elevate your brand <span className="text-brand-primary">together.</span></h2>
              <p className="text-gray-400 mb-12">
                Have a project in mind? We'd love to hear from you. Our team is ready to help you reach your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Call Us</div>
                    <div className="font-medium">+91 8448035401</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Email Us</div>
                    <div className="font-medium">mail@skydma.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Visit Us</div>
                    <div className="font-medium">167 LGF SS Plaza, Mahavir Enclave, New Delhi</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors" />
              <textarea placeholder="Message" rows={4} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors resize-none" />
              <button className="w-full py-4 bg-brand-primary rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-brand-primary/20">
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
    <footer className="pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Globe className="text-white w-4 h-4" />
              </div>
              <span>SKY <span className="text-brand-primary">DIGITAL</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We help businesses achieve their marketing objectives through innovative digital strategies and stunning online experiences.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['About us', 'Blog', 'Contact us', 'Privacy Policy', 'Terms and Conditions'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Website Designing', 'Graphic Designing', 'Digital Marketing', 'SEO', 'Paid Ads'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">Join our newsletter for exclusive insights and digital marketing trends.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-brand-primary w-full" />
              <button className="p-3 bg-brand-primary rounded-xl shrink-0"><ChevronRight className="w-4 h-4" /></button>
            </div>
            <p className="text-[10px] text-gray-500 mt-4 italic">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <PortfolioSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
