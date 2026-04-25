import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react'
import Card from '../components/Card'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const contactInfo = [
    { 
      icon: <Phone className="text-gold" />, 
      title: 'Call Us', 
      details: ['+91 98432 57757', '+91 422 1234567'],
      action: 'tel:9843257757'
    },
    { 
      icon: <Mail className="text-gold" />, 
      title: 'Email Us', 
      details: ['info@sdrsgold.com', 'support@sdrsgold.com'],
      action: 'mailto:info@sdrsgold.com'
    },
    { 
      icon: <Clock className="text-gold" />, 
      title: 'Business Hours', 
      details: ['Mon - Sat: 10:00 AM - 7:30 PM', 'Sunday: 10:00 AM - 2:00 PM'],
      action: null
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 lg:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 text-gold rounded-full mb-6"
          >
            <MessageSquare size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Get in Touch</span>
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-brand-black mb-4 sm:mb-6">Contact Our <span className="text-gold">Experts</span></h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions about your gold valuation? Reach out to us through any of the channels below or visit our branch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {/* Contact Details */}
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {contactInfo.map((info, i) => (
                <Card key={i} className="flex items-start space-x-4 sm:space-x-6 p-6 sm:p-8 hover:bg-gold-50 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-soft rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-brand-black mb-1 sm:mb-2 font-display">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-gray-500 font-medium">{detail}</p>
                    ))}
                    {info.action && (
                      <a href={info.action} className="text-gold font-bold text-xs sm:text-sm mt-2 sm:mt-3 inline-block hover:underline">
                        Get in contact →
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Address Card */}
            <Card className="bg-brand-black p-6 sm:p-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10">
                 <div className="flex items-center space-x-3 text-gold mb-4 sm:mb-6">
                   <MapPin size={24} />
                   <h4 className="text-lg sm:text-xl font-bold font-display text-white">Main Branch</h4>
                 </div>
                 <p className="text-gray-400 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
                   123 Gold Street, Opp. To Bus Stand,<br />Gandhipuram, Coimbatore,<br />Tamil Nadu 641012
                 </p>
                 <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center text-white transition-all">
                       <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center text-white transition-all">
                       <Facebook size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center text-white transition-all">
                       <Twitter size={20} />
                    </a>
                 </div>
               </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <Card className="p-6 sm:p-10 lg:p-12 h-full">
              <h3 className="text-xl sm:text-3xl font-bold font-display text-brand-black mb-2">Send an Inquiry</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-10">Fill out the form below and our gold expert will get back to you within 15 minutes.</p>
              <ContactForm />
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <section className="w-full">
          <div className="h-[300px] sm:h-[400px] md:h-[450px] bg-gray-100 rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-soft relative group">
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
               <p className="text-gray-400 font-bold font-display text-xl sm:text-2xl text-center px-4">Google Maps Integration</p>
            </div>
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.88172!2d76.9535!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzYwLjUiTiA3NsKwNTcnMTIuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy"
               className="grayscale transition-all duration-700 group-hover:grayscale-0 relative z-10"
            />
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Contact
