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

const generatePlaceholderImage = (title: string) => {
  // Create a base64 encoded SVG that will work in production
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#003366"/>
    <text x="400" y="300" font-family="Arial" font-size="30" fill="white" text-anchor="middle" dominant-baseline="middle">
      ${title}
    </text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const projects = {
  featured: [
    {
      title: "Survetic - Survey Builder & Analytics Platform",
      description: "A comprehensive survey builder and analytics platform that empowers organizations to create, distribute, and analyze surveys with advanced administrative capabilities. Built as a full-stack TypeScript application with drag-and-drop functionality, real-time analytics, and mobile-first responsive design.",
      tech: "React 18, TypeScript, Node.js, Express, PostgreSQL, Drizzle ORM, Tailwind CSS, shadcn/ui, TanStack Query, Framer Motion, Recharts",
      role: "As the sole designer and developer of Survetic, I led the project end-to-end — from idea validation and UI/UX design to full-stack implementation and deployment. I architected a scalable, production-ready survey platform that demonstrates my ability to build robust, modern web applications that solve real business problems.",
      responsibilities: [
        "🧠 Product Design & Planning: Conceptualized product vision and defined feature set to address fragmented survey tool limitations",
        "🖥️ Frontend Development: Engineered UI using React 18 with TypeScript, built drag-and-drop survey builder with real-time previews",
        "🔒 Backend & Authentication: Developed secure backend using Node.js, Express, implemented modular authentication with Passport.js",
        "📊 Analytics & Performance: Designed real-time analytics dashboard, applied code splitting and lazy loading for optimization",
        "📱 Responsive UX: Used CSS Grid/Flexbox for 100% mobile compatibility, developed responsive admin interfaces",
        "⚙️ DevOps & Deployment: Configured Vite and ESBuild for fast development, deployed on Vercel with CI/CD workflows"
      ],
      image: import.meta.env.PROD ? "/public/images/projects/survetic-homepage.png" : "/images/projects/survetic-homepage.png",
      challenges: [
        "Creating responsive survey builder interface for all device sizes",
        "Implementing robust authentication with session management",
        "Handling real-time survey responses without performance degradation",
        "Designing flexible database schema for various question types",
        "Ensuring consistent API error handling across endpoints"
      ],
      solutions: [
        "Mobile-first design with collapsible settings panel and hamburger navigation",
        "Modular authentication system with Passport.js, secure sessions, and role-based access",
        "TanStack Query for intelligent caching and background updates with Drizzle ORM optimization",
        "Comprehensive error boundaries with user-friendly messages and retry mechanisms",
        "Code splitting, lazy loading, and tree shaking for optimal performance"
      ],
      results: [
        "Sub-2-second initial page load with 100% mobile compatibility",
        "Zero runtime type errors with full TypeScript implementation",
        "Intuitive drag-and-drop reduces survey creation time significantly",
        "Real-time analytics dashboard with instant feedback and insights",
        "Production-ready deployment on Vercel with automated CI/CD"
      ],
      githubUrl: "https://github.com/SanMaungMaung/survetic",
      liveUrl: "https://www.survetic.com"
    }
  ],
  web: [
    {
      title: "Advanced Metering Infrastructure (AMI) Deployment",
      client: "Myanmar Electricity Sector",
      description: "Led the national-scale implementation of an Advanced Metering Infrastructure system that replaced manual meter reading and enabled real-time, secure, and remote energy data acquisition. The AMI system formed the foundation for the country's first fully automated billing and energy usage monitoring platform.",
      tech: "React, Redux, TypeScript, Map APIs, WebSocket/MQTT, REST APIs, DLMS/COSEM Protocol, Custom Device Management Tools, Secure TLS Data Transport, Grafana",
      role: "As Project Manager & Senior Front-End Developer, I directed cross-departmental collaboration among hardware engineers, embedded system developers, software engineers, and governmental stakeholders. I managed the nationwide rollout across multiple townships while designing and building critical front-end tools for live meter monitoring and administration.",
      responsibilities: [
        "🔹 Project Management: Directed cross-departmental collaboration among hardware engineers, embedded system developers, and governmental stakeholders",
        "🔹 Rollout Coordination: Managed deployment across multiple townships, coordinating logistics, testing, and stakeholder training",
        "🔹 Stakeholder Communication: Acted as central point between international hardware suppliers, local utility staff, and software teams",
        "🔹 Data Visualization: Designed front-end tools to visualize live meter data and grid health across multiple zones",
        "🔹 System Monitoring: Built admin dashboards to monitor communication status of thousands of remote meters",
        "🔹 Device Management: Developed tools for firmware update rollouts, diagnostics, and meter administration by township/ward"
      ],
      image: generatePlaceholderImage("Advanced Metering Infrastructure"),
      challenges: [
        "Managing nationwide rollout of 2.7 million+ smart meters across diverse geographic regions",
        "Ensuring seamless data exchange between smart meters and billing servers at scale",
        "Implementing real-time monitoring and communication status tracking for thousands of devices",
        "Coordinating cross-departmental teams including hardware engineers and governmental stakeholders",
        "Developing compliance with DLMS/COSEM protocols while maintaining system security"
      ],
      solutions: [
        "Architected scalable React/Redux platform with real-time WebSocket/MQTT data streaming",
        "Implemented DLMS/COSEM protocol compliance with secure TLS data transport",
        "Built comprehensive AMI Health Dashboard with live communication uptime monitoring",
        "Developed advanced geo-visualization tools using Map APIs for multi-zone grid management",
        "Created automated anomaly detection interface for suspicious consumption patterns and tampering"
      ],
      results: [
        "Successfully connected over 2.7 million smart meters nationwide with operational deployment",
        "Enabled real-time consumption monitoring and remote meter disconnections/reconnections",
        "Drastically reduced Non-Technical Losses through automated anomaly and tampering detection",
        "Improved energy planning and load balancing via accurate real-time consumption data",
        "Achieved seamless integration between smart meters and automated billing infrastructure"
      ],
      githubUrl: "#confidential",
      liveUrl: "#confidential",
      isConfidential: true
    }
  ],
  design: [
    {
      title: "Nationwide Automatic Billing System (ABS)",
      client: "Myanmar Electricity Sector (YESC, ESE, MESC)",
      description: "Led the design, development, and implementation of a scalable Automatic Billing System integrated with Advanced Metering Infrastructure across multiple Myanmar electricity corporations. This enterprise platform replaced traditional manual billing processes with automated meter readings, real-time billing, and centralized compliance reporting.",
      tech: "React, TypeScript, Redux, SCSS, Node.js, PostgreSQL, REST APIs, AMI Protocols, OTP-based Security, Docker, Bank API Integrations",
      role: "As Project Manager & Senior Front-End Developer, I oversaw cross-functional teams across 3 corporations while architecting modern, responsive interfaces for billing dashboards and reporting tools. I coordinated with international experts and delivered on strict governmental deadlines during the transition to smart metering infrastructure.",
      responsibilities: [
        "🔹 Project Management: Oversaw cross-functional teams of developers, testers, and infrastructure engineers across 3 corporations",
        "🔹 Front-End Development: Architected responsive interfaces for billing dashboard and reporting tools using React and TypeScript",
        "🔹 Access Controls: Created role-based access controls and admin panels for township-level management",
        "🔹 Analytics Dashboard: Built real-time analytics dashboards for tariff ledgers and compliance forms (Form 7/43/76/243)",
        "🔹 Integration Management: Integrated with smart meters using industry protocols (DLMS/COSEM) and bank APIs",
        "🔹 Security Implementation: Developed secure data flows and OTP-based security systems for financial transactions"
      ],
      image: generatePlaceholderImage("Automatic Billing System"),
      challenges: [
        "Replacing manual billing processes across 85+ townships with automated systems",
        "Integrating with various smart meters using industry protocols (DLMS/COSEM)",
        "Coordinating cross-functional teams across 3 different electricity corporations",
        "Meeting strict governmental deadlines during smart metering infrastructure transition",
        "Ensuring 24/7 system availability with real-time billing and compliance reporting"
      ],
      solutions: [
        "Architected scalable React/TypeScript platform with role-based access controls",
        "Implemented industry-standard AMI protocols for seamless smart meter integration",
        "Established coordinated project management across multiple corporations with international expert guidance",
        "Built robust automated billing cycles with real-time processing and audit transparency",
        "Developed comprehensive online payment gateway with major local bank integrations"
      ],
      results: [
        "Successfully deployed across 85 townships in Myanmar with active government use",
        "Reduced billing cycle from weeks to hours with automated processing",
        "Achieved over 90% accuracy in meter readings and automated calculations",
        "Eliminated human errors and reduced field staff exposure to harsh environments",
        "Delivered 24/7 billing support with automated real-time government auditing compliance"
      ],
      githubUrl: "#confidential",
      liveUrl: "#confidential",
      isConfidential: true
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
            {["featured", "web", "design"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="relative px-4 py-2 rounded-md transition-all duration-300 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-[#003366] dark:data-[state=active]:text-[#66b2ff] data-[state=active]:shadow-sm hover:text-[#003366] dark:hover:text-[#66b2ff] group"
              >
                <span>{tab === "featured" ? "Featured Project" : tab === "web" ? "Advanced Metering Infrastructure" : "Automatic Billing System"}</span>
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