import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { ProfileFallback } from "@/components/ui/profile-fallback";

export default function Welcome() {
  const [imageLoaded, setImageLoaded] = useState(true);
  
  return (
    <section
      id="welcome"
      className="min-h-screen pt-16 flex items-center relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#004080] to-[#003366]"
    >
      <div className="absolute inset-0 overflow-hidden">
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
              width: `${20 + i * 5}vw`,
              height: `${20 + i * 5}vw`,
              left: `${-5 + i * 2}vw`,
              top: `${-5 + i * 3}vh`,
              filter: "blur(calc(1.5vw + 10px))",
              zIndex: 0,
            }}
          />
        ))}

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
              width: `${15 + i * 3}vw`,
              height: `${15 + i * 3}vw`,
              left: `${-1 - i}vw`,
              top: `${1 + i}vh`,
              filter: "blur(calc(1vw + 8px))",
              zIndex: 0,
            }}
          />
        ))}

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#004080]/40 to-transparent"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ zIndex: 0 }}
        />
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#003366]/50 via-[#004080]/30 to-[#003366]/50"
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ zIndex: 1 }}
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
            <span className="text-white/80 text-lg">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.6] pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
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
            Designing the Future of the Web 👋 Hello! I'm Zack, a Full Stack and
            Frontend Developer dedicated to bringing your ideas to life. With
            over a decade of experience, I excel in UX/UI design and
            user-centered design (UCD). Skilled in HTML, CSS, JavaScript, React,
            Next.js, Joomla!, and WordPress for front-end development, I also
            possess strong back-end expertise with Python, Django Framework,
            Laravel, and Node.js, enabling me to design innovative solutions
            tailored to your needs.
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
          className="order-1 md:order-2 relative z-20"
        >
          <div className="relative">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-lg transform hover:scale-105 transition-transform duration-300">
              {imageLoaded ? (
                <img
                  src={import.meta.env.PROD ? "/public/images/profile/zprofile.jpg" : "/images/profile/zprofile.jpg"}
                  alt="San Maung Maung"
                  className="w-full h-full object-cover"
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                <ProfileFallback />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}