import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    link: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics and management platform",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    link: "#"
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first workout tracking solution",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    link: "#"
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    link: "#"
  },
  {
    title: "AI Image Generator",
    description: "Creative AI-powered image creation tool",
    image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#003366] mb-4">Portfolio</h2>
          <p className="text-[#336699]">Check out some of my recent projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-[#003366]">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#336699]">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
