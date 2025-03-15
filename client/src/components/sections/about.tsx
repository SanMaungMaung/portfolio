import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">About Me</h2>
          <p className="text-[#336699] dark:text-gray-300">Get to know me better</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto dark:prose-invert"
          >
            <p className="text-[#003366] dark:text-gray-300">
              I'm a passionate Full Stack Developer with over 6 years of experience in
              creating web applications. My journey in software development started
              during my university years, and since then, I've been constantly
              learning and growing in this ever-evolving field.
            </p>
            <p className="text-[#003366] dark:text-gray-300">
              I specialize in building scalable web applications using modern
              technologies and best practices. My approach to development focuses on
              creating clean, maintainable code while ensuring an excellent user
              experience.
            </p>
            <p className="text-[#003366] dark:text-gray-300">
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical blog posts, or mentoring junior
              developers. I believe in continuous learning and sharing knowledge
              with the developer community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}