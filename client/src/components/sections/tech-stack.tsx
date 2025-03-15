import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaJoomla, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPython, SiDjango, SiTailwindcss, SiLaravel, SiNextdotjs, SiNodedotjs } from "react-icons/si";

const technologies = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPython, name: "Python" },
  { icon: SiDjango, name: "Django" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: FaWordpress, name: "WordPress" },
  { icon: FaJoomla, name: "Joomla!" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaGitAlt, name: "Git" }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#003366] mb-4">Tech Stack</h2>
          <p className="text-[#336699]">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <tech.icon className="w-12 h-12 text-[#003366] mb-4" />
              <span className="text-[#336699] font-medium text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}