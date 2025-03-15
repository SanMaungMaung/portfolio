import { motion } from "framer-motion";
import SocialIcons from "../layout/social-icons";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="min-h-screen pt-16 flex items-center bg-gradient-to-b from-[#F5F5F5] to-[#E0E0E0]"
    >
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-[#003366] mb-4">
            Hi, I'm <span className="text-[#CC3333]">John Doe</span>
          </h1>
          <p className="text-xl text-[#336699] mb-6">
            Full Stack Developer specializing in modern web technologies
          </p>
          <p className="text-[#003366] mb-8">
            I create beautiful, responsive, and user-friendly applications with a
            focus on clean code and optimal performance.
          </p>
          <SocialIcons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Professional headshot"
            className="rounded-full object-cover w-full h-full border-4 border-[#003366]"
          />
        </motion.div>
      </div>
    </section>
  );
}
