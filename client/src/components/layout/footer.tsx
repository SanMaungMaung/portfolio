import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#CC3333] text-white py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <p className="text-sm">
          Designed and developed by Zack © 2025. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
