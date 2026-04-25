import { motion } from 'framer-motion'
import { CheckCircle2, Heart, Shield, Users } from 'lucide-react'
import Card from '../components/Card'

const About = () => {
  const values = [
    { icon: <Shield size={24} />, title: 'Integrity', desc: 'Honesty is at the core of everything we do. Our valuation is open and fair.' },
    { icon: <Heart size={24} />, title: 'Empathy', desc: 'We understand the emotional value of your jewelry and treat every piece with respect.' },
    { icon: <Users size={24} />, title: 'Customer First', desc: 'Our processes are designed for your convenience, safety, and maximum benefit.' }
  ]

  const steps = [
    { number: '01', title: 'Free Valuation', desc: 'Bring your gold to any of our branches for a free, no-obligation valuation using XRF technology.' },
    { number: '02', title: 'Purity Check', desc: 'We check the weight and purity of your gold in your presence with absolute transparency.' },
    { number: '03', title: 'Instant Offer', desc: 'Based on current market rates, we provide you with the best possible cash offer.' },
    { number: '04', title: 'Spot Payment', desc: 'Accept the offer and get instant payment via cash, IMPS, or bank transfer.' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 lg:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-brand-black mb-4 sm:mb-6">Our <span className="text-gold">Story</span></h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto">
            Redefining the gold buying industry in Coimbatore through transparency, trust, and technology.
          </p>
        </div>

        {/* Section 1: Our Story */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-24 md:mb-32">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display text-brand-black mb-4 sm:mb-6 leading-tight">Built on Foundation of Trust</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Founded with a mission to eliminate unfair practices in the unorganized gold buying sector, SDRS Gold Finance has grown to become Coimbatore's most preferred destination for liquidating gold assets.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
              We realized that customers often get undervalued offers or pay exorbitant hidden fees at traditional pawn shops. We decided to change that by introducing scientific testing methods and transparent market-linked pricing.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-gold mb-1">10+</h4>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-[10px] sm:text-sm">Years of Trust</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-gold mb-1">15k+</h4>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-[10px] sm:text-sm">Customers Served</p>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 w-full">
            <div className="aspect-[16/10] bg-gold-100 rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-soft sm:rotate-2">
               <img 
                 src="/about-gold.png" 
                 alt="Professional Gold Valuation" 
                 className="w-full h-auto max-w-full object-cover sm:-rotate-2 sm:scale-110"
                 onError={(e) => {
                   e.target.src = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
                 }}
               />
            </div>
          </div>
        </div>

        {/* Section 2: Our Process */}
        <div className="mb-16 sm:mb-24 md:mb-32">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-brand-black mb-4 sm:mb-6">Transparent Four-Step Process</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">Getting cash for your gold has never been simpler or more secure.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <Card key={i} className="text-center relative p-6 sm:p-8 md:p-10 group bg-gray-50 border-none">
                <span className="absolute top-4 right-6 text-4xl sm:text-6xl font-display font-black text-gold/10 group-hover:text-gold/20 transition-colors">
                  {step.number}
                </span>
                <h4 className="text-lg sm:text-2xl font-bold font-display text-brand-black mb-3 sm:mb-4 relative z-10">{step.title}</h4>
                <p className="text-sm sm:text-base text-gray-500 relative z-10">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 3: Why Choose Us */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="flex-1 w-full">
             <div className="aspect-square bg-gray-100 rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-soft sm:-rotate-2 relative">
                <img 
                   src="https://images.unsplash.com/photo-1556742049-3177fc657271?auto=format&fit=crop&q=80&w=1000" 
                   alt="Customer Satisfaction" 
                   className="w-full h-auto max-w-full object-cover sm:rotate-2 sm:scale-110"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-multiply" />
             </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-brand-black mb-6 sm:mb-8">Why SDRS Gold Finance?</h2>
            <div className="space-y-6 sm:space-y-8">
              {values.map((value, i) => (
                <div key={i} className="flex gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold rounded-xl sm:rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-gold/20">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-brand-black mb-1">{value.title}</h4>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-12">
               <button className="flex items-center space-x-3 group text-brand-black font-bold text-base sm:text-lg bg-gray-50 p-4 rounded-xl w-full sm:w-auto">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-white shadow-sm transition-all flex-shrink-0">
                   <CheckCircle2 size={24} />
                 </div>
                 <span className="text-sm sm:text-base">ISO 9001:2015 Certified Company</span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
