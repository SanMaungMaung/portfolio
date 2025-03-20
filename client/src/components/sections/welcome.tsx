import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="min-h-screen pt-16 flex items-center relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#004080] to-[#003366]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-white/20 to-transparent"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${-100 + i * 30}px`,
              top: `${-100 + i * 50}px`,
              filter: 'blur(40px)',
            }}
          />
        ))}

        {/* Additional animated shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute bg-gradient-to-r from-white/30 to-transparent"
            animate={{
              x: ["0vw", "100vw"],
              y: ["0vh", "100vh"],
              scale: [0.8, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${-20 - i * 10}%`,
              top: `${10 + i * 15}%`,
              filter: 'blur(30px)',
            }}
          />
        ))}

        {/* Wave animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#004080]/40 to-transparent"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Background pulse effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#003366]/50 via-[#004080]/30 to-[#003366]/50"
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-[1fr,auto] gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-white/80 text-lg">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            San Maung Maung @ Zack
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Full Stack Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg mb-8 text-white/80 max-w-2xl leading-relaxed"
          >
            Designing the Future of the Web 👋 Hello! I'm Zack, a Full Stack and Frontend Developer dedicated to bringing your ideas to life. With over a decade of experience, I excel in UX/UI design and user-centered design (UCD). Skilled in HTML, CSS, JavaScript, React, Next.js, Joomla!, and WordPress for front-end development, I also possess strong back-end expertise with Python, Django Framework, Laravel, and Node.js, enabling me to design innovative solutions tailored to your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-white/20"
            />

            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <img
                src="./images/profile/zprofile.jpg"
                alt="San Maung Maung"
                className="w-full h-full object-cover rounded-full"
                onLoad={() => console.log('Profile image loaded successfully')}
                onError={(e) => {
                  console.error('Profile image failed to load:', e.currentTarget.src);
                  e.currentTarget.src = `data:image/svg+xml,${encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#003366"/><text x="100" y="100" font-family="Arial" font-size="14" fill="white" text-anchor="middle">Profile Image</text></svg>'
                  )}`;
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}