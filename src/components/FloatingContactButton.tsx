
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={() => document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-110 transition-all"
          aria-label="Contact"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-20" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
