import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const projects = {
  featured: [
    {
      title: "Automatic Billing System (ABS)",
      client: "Ministry of Electric Power Myanmar",
      description: "Developed an intelligent and sophisticated electricity billing data analysis system that automates manual errors while increasing data accuracy and security.",
      tech: "HTML, CSS, MySQL, Python, Django Framework, PostgreSQL",
      image: "/project1.jpg"
    },
    {
      title: "Advanced Metering Infrastructure (AMI)",
      client: "Ministry of Electric Power Myanmar",
      description: "Experimental smart system and IoT technology to reduce Non-Technical Losses, enabling real-time remote meter readings, load management, usage analytics, and billing accuracy.",
      tech: "HTML, CSS, JavaScript, React, Python, Django Framework, PostgreSQL",
      image: "/project2.jpg"
    }
  ],
  web: [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and responsive design.",
      tech: "React, Node.js, PostgreSQL, Stripe API",
      image: "/ecommerce.jpg"
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive social media management platform with analytics, scheduling, and engagement tracking features.",
      tech: "Next.js, TypeScript, TailwindCSS, MongoDB",
      image: "/dashboard.jpg"
    }
  ],
  ai: [
    {
      title: "ML-Powered Content Generator",
      description: "AI-driven content generation tool that creates SEO-optimized articles and blog posts using advanced natural language processing.",
      tech: "Python, TensorFlow, FastAPI, React",
      image: "/ai-content.jpg"
    },
    {
      title: "Computer Vision Analytics",
      description: "Real-time object detection and analytics system for retail stores to track customer behavior and optimize store layouts.",
      tech: "Python, OpenCV, PyTorch, Django",
      image: "/cv-analytics.jpg"
    }
  ],
  design: [
    {
      title: "Mobile Banking App Design",
      description: "Modern and intuitive mobile banking application design with focus on accessibility and user experience.",
      tech: "Figma, Adobe XD, Principle",
      image: "/banking-app.jpg"
    },
    {
      title: "Healthcare Portal Prototype",
      description: "User-centered design for a healthcare management system focusing on patient engagement and medical record access.",
      tech: "Sketch, InVision, Adobe Creative Suite",
      image: "/healthcare.jpg"
    }
  ]
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-64 md:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#003366] mb-2">
            {project.title}
          </h3>
          {project.client && (
            <p className="text-[#CC3333] font-medium mb-2">
              Client: {project.client}
            </p>
          )}
          <p className="text-[#336699] mb-4">{project.description}</p>
          <p className="text-sm text-[#003366]/70 mb-4">
            Technologies: {project.tech}
          </p>
          <Button variant="outline" className="text-[#003366]">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  </motion.div>
);

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
          <p className="text-[#336699]">Featured Projects</p>
        </motion.div>

        <Tabs defaultValue="featured" className="space-y-8">
          <TabsList className="flex justify-center gap-2">
            <TabsTrigger value="featured">Featured Projects</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="ai">AI Integration</TabsTrigger>
            <TabsTrigger value="design">Design Prototypes</TabsTrigger>
          </TabsList>

          {Object.entries(projects).map(([category, projectList]) => (
            <TabsContent key={category} value={category} className="space-y-8">
              {projectList.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}