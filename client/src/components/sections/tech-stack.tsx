import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaJoomla, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPython, SiDjango, SiTailwindcss, SiLaravel, SiNextdotjs, SiNodedotjs, SiAdobephotoshop, SiAdobexd, SiFigma, SiAdobedreamweaver, SiDrupal, SiShopify, SiSass } from "react-icons/si";
import { VscCode, VscExtensions } from "react-icons/vsc";

const techCategories = [
  {
    title: "Front-end Development",
    technologies: [
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3Alt, name: "CSS3" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiSass, name: "Sass" },
    ]
  },
  {
    title: "Back-end Development",
    technologies: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiPython, name: "Python" },
      { icon: SiDjango, name: "Django" },
      { icon: SiLaravel, name: "Laravel" },
    ]
  },
  {
    title: "Content Management",
    technologies: [
      { icon: FaWordpress, name: "WordPress" },
      { icon: FaJoomla, name: "Joomla!" },
      { icon: SiDrupal, name: "Drupal" },
      { icon: SiShopify, name: "Shopify" },
    ]
  },
  {
    title: "Design & Development Tools",
    technologies: [
      { icon: SiAdobephotoshop, name: "Photoshop" },
      { icon: SiAdobexd, name: "XD" },
      { icon: SiFigma, name: "Figma" },
      { icon: VscExtensions, name: "Zeplin" },
      { icon: VscCode, name: "VS Code" },
      { icon: SiAdobedreamweaver, name: "Dreamweaver" },
      { icon: FaGitAlt, name: "Git" },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-[#F5F5F5] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">Tech Stack</h2>
          <p className="text-[#336699] dark:text-gray-300">Technologies I work with</p>
        </motion.div>

        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#003366] dark:text-[#66b2ff] mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div 
                      className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #003366, transparent)',
                        backgroundSize: '200% 100%'
                      }}
                    >
                      <div className="absolute inset-0 rounded-lg animate-border-travel dark:bg-gradient-to-r dark:from-transparent dark:via-[#66b2ff] dark:to-transparent"></div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                      <tech.icon className="w-12 h-12 text-[#003366] dark:text-[#66b2ff] mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-[#336699] dark:text-gray-300 font-medium text-sm">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}