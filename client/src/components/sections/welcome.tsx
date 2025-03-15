import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="min-h-screen pt-16 flex items-center bg-[#003366] text-white"
    >
      <div className="container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-[1fr,auto] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            San Maung Maung @ Zack
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-white/90">
            Full Stack Frontend Developer
          </h2>
          <p className="text-lg mb-8 text-white/80 max-w-2xl">
            Designing the Future of the Web 👋 Hello! I'm Zack, a Full Stack and Frontend Developer dedicated to bringing your ideas to life. With over a decade of experience, I excel in UX/UI design and user-centered design (UCD). Skilled in HTML, CSS, JavaScript, React, Next.js, Joomla!, and WordPress for front-end development, I also possess strong back-end expertise with Python, Django Framework, Laravel, and Node.js, enabling me to design innovative solutions tailored to your needs.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#003366] transition-colors"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20">
            <img
              src="54113232300.jpg"
              alt="San Maung Maung"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}