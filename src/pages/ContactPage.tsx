
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 50
          }}
        >
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            Contact Me
          </motion.h1>
          <motion.p 
            className="text-lg max-w-2xl mx-auto text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring"
            }}
          >
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
          </motion.p>
        </motion.div>
        
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
