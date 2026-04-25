import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import logoImg from '../asstes/logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12 text-center sm:text-left">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logoImg} 
                alt="SDRS Gold Logo" 
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="text-lg font-bold font-display tracking-tight text-brand-black">
                SDRS <span className="text-gold">Gold</span>
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              Coimbatore's most trusted partner for instant cash for gold. We provide transparent valuation and immediate payment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-black font-bold font-display mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-gold transition-colors">Find Branch</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-brand-black font-bold font-display mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-500 hover:text-gold transition-colors">Cash for Gold</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gold transition-colors">Gold Loan Release</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gold transition-colors">Silver Purchase</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gold transition-colors">Diamond Purchase</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gold transition-colors">Jewelry Valuation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-brand-black font-bold font-display mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-500">123 Gold Street, Gandhipuram, Coimbatore, Tamil Nadu 641012</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-gold flex-shrink-0" size={20} />
                <span className="text-gray-500">+91 98432 57757</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-gold flex-shrink-0" size={20} />
                <span className="text-gray-500">info@sdrsgold.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SDRS Gold Finance. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
