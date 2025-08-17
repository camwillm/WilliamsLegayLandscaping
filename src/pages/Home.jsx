
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import InstantQuoteModal from '../components/InstantQuoteModal';
import {
  TreePine,
  Scissors,
  Truck,
  Flower2,
  FlaskConical,
  Mountain,
  Phone,
  Mail,
  MapPin,
  Smartphone,
  CreditCard,
  Bell,
  CheckCircle,
  ArrowRight,
  Play,
  Instagram
} from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: "Grass Service",
    description: "Professional lawn mowing and maintenance with precision care for a perfectly manicured landscape.",
    features: ["Weekly/Bi-weekly Service", "Edge Trimming", "Debris Removal"]
  },
  {
    icon: Mountain,
    title: "Mulch Service",
    description: "Premium mulch installation and maintenance to enhance your garden's health and aesthetic appeal.",
    features: ["Quality Materials", "Professional Installation", "Seasonal Refresh"]
  },
  {
    icon: TreePine,
    title: "Tree Service",
    description: "Expert tree care, specializing in pruning and small tree removal by certified arborists.",
    features: ["Tree Pruning", "Safe Small Tree Removal", "Health Assessment"]
  },
  {
    icon: FlaskConical,
    title: "Spraying Service",
    description: "Targeted pest control and fertilization treatments to keep your landscape healthy and thriving.",
    features: ["Pest Control", "Fertilization", "Weed Management"]
  },
  {
    icon: Flower2,
    title: "Planting Service",
    description: "Beautiful plantings and garden design to transform your outdoor space into a natural paradise.",
    features: ["Seasonal Flowers", "Shrub Installation", "Garden Design"]
  },
  {
    icon: Truck,
    title: "Hauling Service",
    description: "Efficient removal of yard waste, debris, and unwanted materials with eco-friendly disposal.",
    features: ["Debris Removal", "Yard Waste", "Eco-Friendly Disposal"]
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className={`font-bold text-xl tracking-wider transition-colors duration-300 ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
            Williams Legacy
            <p className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-stone-600' : 'text-stone-200'}`}>
              Servicing Baltimore & Surrounding Areas
            </p>
          </div>
          <Button
            className={`rounded-lg transition-all duration-300 ${isScrolled
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30'
              }`}
          >
            Payment Portal
          </Button>
        </div>
      </motion.header>

      <InstantQuoteModal isOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.6)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`
          }}
        />

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-center gap-4 mb-6">
              <Badge className="bg-white/10 text-white border-white/20 px-6 py-2 text-sm font-normal tracking-widest">
                WILLIAMS LEGACY LANDSCAPING
              </Badge>
              <Badge className="bg-emerald-600 text-white border-emerald-500 px-4 py-1 text-xs font-semibold tracking-wider">
                PROUDLY BLACK-OWNED
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Crafting Your
              <br />
              <span className="text-emerald-300">Outdoor Legacy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-stone-200 max-w-3xl mx-auto leading-relaxed">
              Professional recurring lawn care and comprehensive landscaping services
              that keep your property looking pristine year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Instant Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white bg-black/20 hover:bg-white/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Work
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating elements animation */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 bg-emerald-400/20 rounded-full"
          animate={{
            y: [10, -10, 10],
            x: [-5, 5, -5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Badge className="bg-emerald-100 text-emerald-800 px-6 py-2 mb-6">
                Our Expertise
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8">
                Complete Landscape
                <br />
                <span className="text-emerald-600">Care Solutions</span>
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                From weekly grass maintenance to complete landscape transformations,
                we deliver exceptional results with meticulous attention to detail.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-stone-50">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-stone-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-stone-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Portal Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-stone-900 to-emerald-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-white">
              <Badge className="bg-white/10 text-white border-white/20 mb-6 px-6 py-2">
                Customer Portal
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Manage Your Services
                <br />
                <span className="text-emerald-300">With Ease</span>
              </h2>
              <p className="text-xl text-stone-200 mb-8 leading-relaxed">
                Access your personalized dashboard to view service schedules,
                manage payments, and track your landscape transformation journey.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 text-emerald-400 mr-4" />
                  <span className="text-lg">Secure payment processing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mr-4" />
                  <span className="text-lg">Service history & scheduling</span>
                </div>
                <div className="flex items-center">
                  <Bell className="w-6 h-6 text-emerald-400 mr-4" />
                  <span className="text-lg">Real-time notifications</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                Access Customer Portal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">Current Balance</h3>
                      <p className="text-stone-600">Due: March 15, 2024</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-stone-800 mb-6">$145.00</div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl">
                    Pay Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-stone-800 to-stone-900 rounded-[3rem] mx-auto relative overflow-hidden shadow-2xl">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
                  <div className="p-6 pt-12">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 mb-4">
                      <div className="flex items-center mb-3">
                        <Bell className="w-6 h-6 text-emerald-600 mr-3" />
                        <span className="font-semibold text-stone-800">Service Alert</span>
                      </div>
                      <p className="text-sm text-stone-600 mb-3">
                        Your grass service is scheduled for tomorrow at 9:00 AM
                      </p>
                      <Button size="sm" className="w-full bg-emerald-600 text-white rounded-lg">
                        View Details
                      </Button>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-stone-800">Quick Pay</span>
                        <span className="text-2xl font-bold text-emerald-600">$85.00</span>
                      </div>
                      <Button size="sm" className="w-full bg-stone-800 text-white rounded-lg">
                        Pay Balance
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <Badge className="bg-emerald-100 text-emerald-800 px-6 py-2 mb-6">
                Mobile App</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8 leading-tight">
                Stay Connected
                <br />
                <span className="text-emerald-600">On The Go</span>
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Get instant notifications about your upcoming services and pay
                your balance with just a few taps. Convenience at your fingertips.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Smartphone className="w-6 h-6 text-emerald-600 mr-4" />
                  <span className="text-lg text-stone-700">Push notifications for service updates</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 text-emerald-600 mr-4" />
                  <span className="text-lg text-stone-700">One-tap payment processing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-4" />
                  <span className="text-lg text-stone-700">Service history and scheduling</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300">
                  Download for iOS
                </Button>
                <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-4 text-lg rounded-xl transition-all duration-300">
                  Download for Android
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About the Owner Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <img
                src="https://images.unsplash.com/photo-1567784177951-6faBFc267c1c?w=800&q=80"
                alt="Owner of Williams Legacy Landscaping"
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/5]"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Badge className="bg-emerald-100 text-emerald-800 px-6 py-2 mb-6">
                Our Founder
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8 leading-tight">
                A Legacy of
                <br />
                <span className="text-emerald-600">Quality and Care</span>
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                "Williams Legacy Landscaping was born from a lifelong passion for transforming outdoor spaces. Growing up in Baltimore, I learned the value of hard work and the joy of seeing a well-tended garden thrive. Our mission is to bring that same dedication and meticulous care to every lawn and garden we touch."
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                "We're more than a business; we're a part of the community, committed to building lasting relationships with our clients and leaving a legacy of beauty in our neighborhoods. Thank you for trusting us with your vision."
              </p>
              <p className="font-serif text-2xl text-stone-800">
                - David Williams
              </p>
              <p className="text-stone-500">
                Founder, Williams Legacy Landscaping
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-24 px-6 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Badge className="bg-white/10 text-white border-white/20 mb-6 px-6 py-2">
                Williams Legacy Landscaping
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Ready to Transform
                <br />
                <span className="text-emerald-400">Your Landscape?</span>
              </h2>
              <p className="text-xl text-stone-300 mb-12 leading-relaxed">
                Contact us today for a free consultation and discover how we can
                elevate your outdoor space with our premium services.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-stone-400">(555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-stone-400">info@williamslegacy.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Service Area</h3>
                <p className="text-stone-400">Baltimore City & County</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
                <p className="text-stone-400">@williamslegacy</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 text-xl rounded-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
