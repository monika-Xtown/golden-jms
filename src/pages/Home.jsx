import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Clock, ShieldCheck, Phone, TrendingUp } from 'lucide-react'
import Card from '../components/Card'
import logoImg from '../asstes/logo.jpg'

const Home = () => {
  const stats = [
    { icon: <Clock className="text-gold" />, title: 'Instant Payment', desc: 'Cash in hand in 15 mins' },
    { icon: <BadgeCheck className="text-gold" />, title: 'Trusted Clients', desc: '10,000+ happy customers' },
    { icon: <ShieldCheck className="text-gold" />, title: 'Safe Process', desc: '100% transparent valuation' },
  ]

  const services = [
    { title: 'Cash for Gold', desc: 'Get the highest market value for your old jewelry instantly.' },
    { title: 'Release Pledged Gold', desc: 'We help you release your gold from banks or financiers.' },
    { title: 'Silver & Diamonds', desc: 'Fair market evaluation for all your precious metals and stones.' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-24 -z-10" />

        {/* Floating Gold Coin Decorations */}
        <motion.img
          src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=120"
          alt="gold coin"
          className="absolute top-10 left-6 w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover opacity-20 blur-[1px] -z-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=120"
          alt="gold coin"
          className="absolute bottom-16 left-1/4 w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover opacity-15 blur-[1px] -z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-24">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 text-gold rounded-full mb-6">
                  <BadgeCheck size={18} />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Coimbatore's #1 Gold Buyer</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold font-display leading-tight mb-6 text-brand-black">
                  Instant Cash for Your <span className="text-gold">Gold</span> in Minutes
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0">
                  Turn your unused jewelry into immediate cash. We offer the best market rates in Coimbatore with a process that's transparent, secure, and blazing fast.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button 
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary w-full sm:w-auto px-6 sm:px-10 py-4 text-base sm:text-lg"
                  >
                    Get Instant Cash
                  </button>
                  <Link to="/services" className="btn-secondary w-full sm:w-auto px-6 sm:px-10 py-4 text-base sm:text-lg flex items-center justify-center space-x-2">
                    <span>Discover Services</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative w-full lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 w-full"
              >
                <div className="aspect-[4/5] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 sm:border-8 border-white w-full max-w-md mx-auto lg:max-w-full bg-gradient-to-br from-amber-100 via-yellow-200 to-amber-400">
                  {/* Decorative gold pattern */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                    <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 shadow-2xl shadow-amber-400/50 flex items-center justify-center border-8 border-yellow-100/60">
                      <img src={logoImg} alt="SDRS Gold" className="w-20 h-20 sm:w-28 sm:h-28 object-contain rounded-full" />
                    </div>
                    <div className="text-center">
                      <p className="text-amber-800 font-extrabold text-lg sm:text-2xl font-display">SDRS Gold Finance</p>
                      <p className="text-amber-700 text-sm sm:text-base mt-1">Coimbatore's Trusted Gold Buyer</p>
                    </div>
                    <div className="flex gap-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg border-2 border-yellow-200" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
                </div>
                
                {/* Floating Card: Gold Rate */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-left-12 glass-card p-4 sm:p-6 max-w-[180px] sm:max-w-[240px]"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <div className="p-1.5 sm:p-2 bg-gold/20 rounded-lg">
                      <TrendingUp className="text-gold" size={16} />
                    </div>
                    <span className="text-[10px] sm:text-sm font-bold text-gray-600 uppercase tracking-wide">Live Rate</span>
                  </div>
                  <h4 className="text-lg sm:text-2xl font-bold font-display text-brand-black">₹ 6,850 <span className="text-[10px] sm:text-xs font-medium text-gray-400">/per gm</span></h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">24K Gold in Coimbatore Today</p>
                </motion.div>

                {/* Floating Gold Coin - top right */}
                <motion.div
                  className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=200"
                    alt="Gold Coins"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="text-center group overflow-hidden relative p-6 sm:p-8">
                   <div className="absolute top-0 left-0 w-2 h-full bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                   <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                   </div>
                   <h3 className="text-xl sm:text-2xl font-bold font-display mb-2">{stat.title}</h3>
                   <p className="text-sm sm:text-base text-gray-500">{stat.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goddess Lakshmi & Gold Coins — Images Only */}
      <section className="py-8 sm:py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">

            {/* Goddess Lakshmi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="sm:col-span-2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-gold/20"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Goddess_Lakshmi.jpg/402px-Goddess_Lakshmi.jpg"
                alt="Goddess Lakshmi"
                className="w-full h-56 sm:h-72 md:h-80 object-cover object-top"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1508950136762-e8e1bc6e00e8?auto=format&fit=crop&q=80&w=600"
                }}
              />
            </motion.div>

            {/* Gold Coin 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              animate={{ y: [0, -8, 0] }}
              className="rounded-2xl overflow-hidden shadow-lg border-2 border-gold/20"
            >
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=400"
                alt="Gold Coins"
                className="w-full h-40 sm:h-52 md:h-60 object-cover"
              />
            </motion.div>

            {/* Gold Coin 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              animate={{ y: [0, 8, 0] }}
              className="rounded-2xl overflow-hidden shadow-lg border-2 border-gold/20"
            >
              <img
                src="https://images.unsplash.com/photo-1624365168968-f283d506c6b6?auto=format&fit=crop&q=80&w=400"
                alt="Gold Coins Stack"
                className="w-full h-40 sm:h-52 md:h-60 object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=400"
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center sm:items-end mb-10 sm:mb-16 gap-6 text-center sm:text-left">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-brand-black mb-4 sm:mb-6">Comprehensive Gold Financial Solutions</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-500">We offer a range of services designed to provide maximum value for your precious metals with absolute transparency.</p>
            </div>
            <Link to="/services" className="text-gold font-bold flex items-center space-x-2 group whitespace-nowrap">
              <span>View All Services</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="cursor-pointer"
              >
                <Card className="h-full border-none shadow-none bg-white p-6 sm:p-8 group hover:bg-gold-50 transition-colors duration-500">
                  <div className="w-12 h-1 bg-gold mb-6 sm:mb-8 group-hover:w-20 transition-all duration-500" />
                  <h4 className="text-xl sm:text-2xl font-bold font-display mb-3 sm:mb-4">{service.title}</h4>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed group-hover:text-gray-700">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-black rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/10 blur-[100px] rounded-full translate-x-1/2" />
            {/* Gold coin decoration */}
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 opacity-10">
              <img src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=300" alt="" className="w-full rounded-tr-full" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 text-center lg:text-left">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4 sm:mb-6">Need Immediate Assistance?</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">Our experts are ready to help you with the best valuation for your gold. Direct and transparent.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
                <a href="tel:9843257757" className="btn-primary w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 text-lg flex items-center justify-center space-x-3 bg-white text-brand-black hover:bg-gold hover:text-white border-none">
                  <Phone size={24} />
                  <span>Call: 98432 57757</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="contact-form" />
    </motion.div>
  )
}

export default Home

