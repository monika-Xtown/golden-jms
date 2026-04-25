import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Cash for Gold',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.phone) {
      newErrors.phone = 'Phone is required'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit number'
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length === 0) {
      // Mock submission
      setIsSubmitted(true)
      console.log('Form data:', formData)
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user type
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 bg-gold/5 rounded-2xl border-2 border-dashed border-gold/30 text-center"
      >
        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="text-white" size={32} />
        </div>
        <h3 className="text-2xl font-bold font-display text-brand-black mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-8">Thank you for reaching out. Our expert will contact you within 15 minutes.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-xl border-2 transition-all outline-none focus:border-gold ${
              errors.name ? 'border-red-100 bg-red-50' : 'border-gray-50 bg-gray-50'
            }`}
          />
          {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">+91</span>
            <input
              type="tel"
              name="phone"
              placeholder="98432 57757"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full pl-14 pr-4 py-2.5 rounded-xl border-2 transition-all outline-none focus:border-gold ${
                errors.phone ? 'border-red-100 bg-red-50' : 'border-gray-50 bg-gray-50'
              }`}
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500 ml-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email & Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Email Address (Optional)</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-50 bg-gray-50 transition-all outline-none focus:border-gold"
          />
          {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Service Required</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-50 bg-gray-50 transition-all outline-none focus:border-gold appearance-none bg-[url('https://cdn0.iconfinder.com/data/icons/lucide-vol-2/24/chevron-down-512.png')] bg-[length:1.2rem] bg-[right_1rem_center] bg-no-repeat"
          >
            <option>Cash for Gold</option>
            <option>Gold Loan Release</option>
            <option>Silver Purchase</option>
            <option>Diamond Purchase</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us how we can help you..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-50 bg-gray-50 transition-all outline-none focus:border-gold resize-none"
        />
      </div>

      <button 
        type="submit"
        className="w-full btn-primary flex items-center justify-center space-x-2 py-4"
      >
        <span>Send Inquiry</span>
        <Send size={20} />
      </button>
    </form>
  )
}

export default ContactForm
