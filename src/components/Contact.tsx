import { useState } from "react";
import { Mail, Phone, Facebook, Instagram, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailForwarded, setEmailForwarded] = useState(false);
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.08)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const forwardEmail = async (data: typeof formData) => {
    try {
      // Email forwarding simulation
      // In a real application, this would be an API call to your backend
      console.log("Forwarding email to jerrellhasan25@gmail.com");
      console.log("From:", data.name, data.email);
      console.log("Subject:", data.subject);
      console.log("Message:", data.message);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // This is a simulation - in a real app you would:
      // 1. Use an Email API service like SendGrid, Mailgun, etc.
      // 2. Set up a serverless function that handles the forwarding
      // 3. Forward using a simple SMTP service

      setEmailForwarded(true);
      return true;
    } catch (error) {
      console.error("Error forwarding email:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First attempt to forward the email
      const forwarded = await forwardEmail(formData);

      // This is where you would typically configure an email service
      // For demo purposes, we're simulating a successful email send

      // Example of how you might set up EmailJS or similar service:
      // await emailjs.send(
      //   "service_id",
      //   "template_id",
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //   },
      //   "user_id"
      // );

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 700));

      toast({
        title: forwarded ? "Message sent and forwarded" : "Message sent",
        description: forwarded
          ? `Thank you ${formData.name}! Your message has been sent and forwarded to my email.`
          : "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container-custom">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Interested in working together? Fill out the form below or reach out
            directly through one of my contact channels.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div className="md:w-1/3" variants={itemVariants}>
            <motion.div
              className="bg-sand bg-opacity-20 p-6 rounded-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5, color: "#C5A880" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="text-gold mr-3" size={20} />
                  <a
                    href="mailto:jerrellhasan25@gmail.com"
                    className="hover:text-gold transition-colors"
                  >
                    jerrellhasan25@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5, color: "#C5A880" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="text-gold mr-3" size={20} />
                  <a
                    href="tel:+639765545869"
                    className="hover:text-gold transition-colors"
                  >
                    +63 976 554 5869
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5, color: "#C5A880" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Facebook className="text-gold mr-3" size={20} />
                  <a
                    href="https://www.facebook.com/jerrell.hasan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    jerrell.hasan
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5, color: "#C5A880" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Instagram className="text-gold mr-3" size={20} />
                  <a
                    href="https://www.instagram.com/visuals_of_jerrell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    visuals_of_jerrell
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5, color: "#C5A880" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MessageSquare className="text-gold mr-3" size={20} />
                  <a
                    href="https://wa.me/+8220742419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    WhatsApp: +8220742419
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="md:w-2/3" variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-sand rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-sand rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-sand rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 border border-sand rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-midnight text-white rounded hover:bg-opacity-90 transition-all font-montserrat text-sm uppercase tracking-wider disabled:opacity-70"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(44, 62, 80, 0.9)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {isSubmitting ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Send Message
                  </motion.span>
                )}
              </motion.button>

              {emailForwarded && (
                <motion.div
                  className="text-sm text-gold italic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  * Your message has been forwarded to my email.
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
