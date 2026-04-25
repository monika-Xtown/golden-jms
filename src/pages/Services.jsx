import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CircleDot, Info } from 'lucide-react'
import Card from '../components/Card'
import Modal from '../components/Modal'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 1,
      title: 'Cash for Gold',
      shortDesc: 'Convert your old, broken or unused gold jewelry into instant cash at current market prices.',
      fullDesc: 'We provide Coimbatore\'s highest market valuation for your gold jewelry. Our process is transparent, using certified testing methods to ensure you get every rupee your gold is worth. No hidden charges, just fair prices.',
      benefits: ['Instant Cash/Bank Transfer', 'Certified Karat Testing', 'Direct Market Pricing', 'No Service Fees'],
      iconColor: 'bg-yellow-500'
    },
    {
      id: 2,
      title: 'Gold Loan Release',
      shortDesc: 'Struggling with high interest rates? We help you release your pledged gold from banks and financiers.',
      fullDesc: 'Don\'t let interest eat up your gold\'s value. We help you pay off your existing gold loans at any bank or finance company, release the ornaments, and then buy them from you at the best price, giving you the balance cash instantly.',
      benefits: ['Immediate Loan Closure', 'Interest Savings', 'Professional Coordination', 'Balance Cash Settlement'],
      iconColor: 'bg-orange-500'
    },
    {
      id: 3,
      title: 'Diamond & Silver Purchase',
      shortDesc: 'We also purchase certified diamonds and old silver articles with accurate valuation.',
      fullDesc: 'Our experts specialize in evaluating precious stones and silver ornaments. Whether it\'s antique silver sets or diamond jewelry, we use modern appraisal techniques to offer you the most competitive price in the region.',
      benefits: ['Expert Gem Appraisal', 'Silver Purity Testing', 'Competitive Rates', 'Immediate Settlement'],
      iconColor: 'bg-blue-400'
    },
    {
      id: 4,
      title: 'Jewelry Valuation',
      shortDesc: 'Get professional appraisal and valuation for your jewelry for insurance or personal records.',
      fullDesc: 'Know the true worth of your family heirlooms or new purchases. We provide detailed valuation reports based on weight, purity, and current market trends, helping you make informed financial decisions.',
      benefits: ['Detailed Reports', 'Market Trend Analysis', 'Professional Certification', 'Transparent Weights'],
      iconColor: 'bg-green-500'
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-brand-black mb-4 sm:mb-6"
          >
            Excellence in <span className="text-gold">Gold Services</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"
          >
            We provide a suite of financial services centered around precious metals, ensuring maximum liquidity and value for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full group p-6 sm:p-8 md:p-10 flex flex-col items-start hover:border-gold/30 hover:shadow-gold/5">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${service.iconColor} bg-opacity-10 mb-6 sm:mb-8 flex items-center justify-center text-brand-black`}>
                  <Info className="text-gold" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-black mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 flex-grow">{service.shortDesc}</p>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="flex items-center space-x-3 text-gold font-bold transition-all hover:space-x-5"
                >
                  <span className="text-base sm:text-lg">Learn More</span>
                  <ArrowRight size={22} />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-16 sm:mt-24 md:mt-32">
          <Card className="bg-gray-50 border-none p-6 sm:p-10 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-black mb-8 sm:mb-10 text-center md:text-left">Why Our Process is Better</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 text-gold">
                    <CircleDot size={20} />
                    <h4 className="font-bold text-brand-black text-lg sm:text-xl">No Hidden deductions</h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500">Unlike others who deduct 10-15% for 'wastage', we pay for the actual net weight based on purity.</p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 text-gold">
                    <CircleDot size={20} />
                    <h4 className="font-bold text-brand-black text-lg sm:text-xl">Live Market Rates</h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500">Our pricing is updated every hour based on the global gold market trends.</p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 text-gold">
                    <CircleDot size={20} />
                    <h4 className="font-bold text-brand-black text-lg sm:text-xl">XRF Laser Testing</h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500">We use non-destructive laser technology to determine the exact karat of your jewelry.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Service Modal */}
      <Modal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
      >
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed text-lg">
            {selectedService?.fullDesc}
          </p>
          <div>
            <h4 className="font-bold text-brand-black mb-4">Key Benefits:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedService?.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center space-x-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <button 
              onClick={() => {
                setSelectedService(null)
                // Small delay to allow modal to close before scrolling
                setTimeout(() => {
                   window.location.href = '/contact'
                }, 300)
              }}
              className="btn-primary w-full py-4 text-lg"
            >
              Enquire About This Service
            </button>
          </div>
        </div>
      </Modal>
    </motion.div>
  )
}

export default Services
