import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const ProjectCardSkeleton = () => (
  <div className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <div className="grid md:grid-cols-2 gap-6">
      <Skeleton className="h-64 md:h-full" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  </div>
);

export const projects = {
  featured: [
    {
      title: "Automatic Billing System (ABS)",
      client: "Ministry of Electric Power Myanmar",
      description: "Developed an intelligent and sophisticated electricity billing data analysis system that automates manual errors while increasing data accuracy and security.",
      tech: "HTML, CSS, MySQL, Python, Django Framework, PostgreSQL",
      image: "https://placehold.co/800x600/003366/FFFFFF/png?text=Automatic+Billing+System&font=raleway",
      challenges: [
        "Integration with legacy systems",
        "Data migration from paper-based records",
        "Training staff on the new system",
        "Ensuring 24/7 system availability"
      ],
      solutions: [
        "Developed custom API adapters for legacy system integration",
        "Created automated data entry and verification tools",
        "Implemented comprehensive training programs",
        "Built robust backup and failover systems"
      ],
      results: [
        "95% reduction in billing errors",
        "80% faster processing time",
        "30% reduction in customer complaints",
        "Improved data accuracy and security"
      ],
      githubUrl: "https://github.com/example/abs",
      liveUrl: "https://abs.example.com"
    },
    {
      title: "Advanced Metering Infrastructure (AMI)",
      client: "Ministry of Electric Power Myanmar",
      description: "Experimental smart system and IoT technology to reduce Non-Technical Losses, enabling real-time remote meter readings, load management, usage analytics, and billing accuracy.",
      tech: "HTML, CSS, JavaScript, React, Python, Django Framework, PostgreSQL",
      image: "https://placehold.co/800x600/003366/FFFFFF/png?text=Advanced+Metering+Infrastructure&font=raleway",
      challenges: [
        "Real-time data collection at scale",
        "Secure communication protocols",
        "Integration with existing infrastructure",
        "Data privacy compliance"
      ],
      solutions: [
        "Implemented MQTT protocol for efficient IoT communication",
        "Developed end-to-end encryption system",
        "Created modular integration framework",
        "Built comprehensive data anonymization pipeline"
      ],
      results: [
        "40% reduction in technical losses",
        "Real-time monitoring of 10,000+ meters",
        "98% data accuracy improvement",
        "50% faster issue resolution"
      ],
      githubUrl: "https://github.com/example/ami",
      liveUrl: "https://ami.example.com"
    }
  ],
  web: [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and responsive design.",
      tech: "React, Node.js, PostgreSQL, Stripe API",
      image: "https://placehold.co/800x600/003366/FFFFFF/png?text=E-commerce+Platform&font=raleway",
      challenges: [
        "Real-time inventory synchronization",
        "Secure payment processing",
        "Mobile-first responsive design",
        "Performance optimization"
      ],
      solutions: [
        "Implemented WebSocket for real-time updates",
        "Integrated Stripe payment gateway",
        "Used Tailwind CSS for responsive layouts",
        "Implemented lazy loading and code splitting"
      ],
      results: [
        "99.9% uptime achievement",
        "2x faster page load times",
        "50% increase in mobile conversions",
        "30% reduction in cart abandonment"
      ],
      githubUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://ecommerce.example.com"
    }
  ],
  ai: [
    {
      title: "ML-Powered Content Generator",
      description: "AI-driven content generation tool that creates SEO-optimized articles and blog posts using advanced natural language processing.",
      tech: "Python, TensorFlow, FastAPI, React",
      image: "https://placehold.co/800x600/003366/FFFFFF/png?text=ML-Powered+Content+Generator&font=raleway",
      challenges: [
        "Training large language models",
        "Ensuring content quality",
        "Real-time generation",
        "SEO optimization"
      ],
      solutions: [
        "Fine-tuned GPT models",
        "Implemented quality scoring system",
        "Used async processing",
        "Integrated SEO analysis tools"
      ],
      results: [
        "90% reduction in content creation time",
        "85% acceptance rate of generated content",
        "40% improvement in SEO rankings",
        "2x increase in organic traffic"
      ],
      githubUrl: "https://github.com/example/ai-content",
      liveUrl: "https://ai-content.example.com"
    }
  ],
  design: [
    {
      title: "Healthcare Portal UX Design",
      description: "User-centered design for a healthcare management system focusing on patient engagement and medical record access.",
      tech: "Figma, Adobe XD, Principle",
      image: "https://placehold.co/800x600/003366/FFFFFF/png?text=Healthcare+Portal+UX+Design&font=raleway",
      challenges: [
        "Complex information architecture",
        "Accessibility compliance",
        "Mobile responsiveness",
        "User privacy concerns"
      ],
      solutions: [
        "Created intuitive navigation system",
        "Implemented WCAG 2.1 guidelines",
        "Developed responsive design system",
        "Built secure authentication flows"
      ],
      results: [
        "95% user satisfaction rate",
        "30% reduction in support tickets",
        "100% WCAG compliance",
        "40% increase in mobile usage"
      ],
      githubUrl: "https://github.com/example/healthcare-ux",
      liveUrl: "https://healthcare-ux.example.com"
    }
  ]
};

const ProjectCard = ({ project, index, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden bg-white dark:bg-gray-800 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative group">
        {/* Shimmering border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-[#003366] to-transparent group-hover:opacity-100 opacity-0 transition duration-1000 group-hover:duration-2000 animate-shimmer dark:via-[#66b2ff] blur"></div>
        <div className="relative bg-white dark:bg-gray-800 p-2 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-64 md:h-auto overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-6">
              <motion.h3
                className="text-2xl font-bold text-[#003366] dark:text-[#66b2ff] mb-2"
                animate={{
                  color: isHovered ? '#CC3333' : '#003366'
                }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              {project.client && (
                <p className="text-[#CC3333] dark:text-[#ff6666] font-medium mb-2">
                  Client: {project.client}
                </p>
              )}
              <p className="text-[#336699] dark:text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-[#003366]/70 dark:text-gray-400 mb-4">
                Technologies: {project.tech}
              </p>
              <Button
                variant="outline"
                className="text-[#003366] dark:text-[#66b2ff] hover:bg-[#003366]/10 dark:hover:bg-[#66b2ff]/10 transform transition-all duration-300 hover:scale-105"
                onClick={() => setLocation(`/project/${category}/${index}`)}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useState(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">Portfolio</h2>
          <p className="text-[#336699] dark:text-gray-300">Featured Projects</p>
        </motion.div>

        <Tabs defaultValue="featured" className="space-y-8">
          <TabsList className="flex justify-center gap-2 p-1 bg-[#F5F5F5] dark:bg-gray-800 rounded-lg">
            {["featured", "web", "ai", "design"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="relative px-4 py-2 rounded-md transition-all duration-300 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-[#003366] dark:data-[state=active]:text-[#66b2ff] data-[state=active]:shadow-sm hover:text-[#003366] dark:hover:text-[#66b2ff] group"
              >
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)} {tab === "featured" ? "Projects" : tab === "ai" ? "Integration" : tab === "web" ? "Development" : "Prototypes"}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#003366] dark:bg-[#66b2ff] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(projects).map(([category, projectList]) => (
              <TabsContent key={category} value={category} className="space-y-16">
                {isLoading ? (
                  <div className="space-y-16">
                    {[...Array(projectList.length)].map((_, index) => (
                      <ProjectCardSkeleton key={index} />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-16"
                  >
                    {projectList.map((project, index) => (
                      <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        category={category}
                      />
                    ))}
                  </motion.div>
                )}
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}