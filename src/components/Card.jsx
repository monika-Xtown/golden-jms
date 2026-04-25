import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02, boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)' } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`bg-white border border-gray-100 shadow-soft rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
