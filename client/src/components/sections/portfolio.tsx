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
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
      tech: "React, Node.js"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      tech: "React, Node.js, MongoDB"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and management platform",
      image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
      tech: "React, Node.js, MongoDB"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first workout tracking solution",
      image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
      tech: "React Native, Node.js"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system",
      image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
      tech: "React, Node.js, PostgreSQL"
    },
    {
      title: "AI Image Generator",
      description: "Creative AI-powered image creation tool",
      image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
      tech: "Python, TensorFlow, React"
    }
  ],
  web: [],
  ai: [],
  design: []
};

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

          <TabsContent value="featured" className="space-y-8">
            {projects.featured.map((project, index) => (
              <motion.div
                key={index}
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
                      {project.tech && (
                        <p className="text-sm text-[#003366]/70 mb-4">
                          Technologies: {project.tech}
                        </p>
                      )}
                      <Button variant="outline" className="text-[#003366]">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="web">
            {/* Add web development projects here */}
          </TabsContent>
          <TabsContent value="ai">
            {/* Add AI integration projects here */}
          </TabsContent>
          <TabsContent value="design">
            {/* Add design prototype projects here */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}