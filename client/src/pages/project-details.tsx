import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/components/sections/portfolio";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BackToTop } from "@/components/ui/back-to-top";

interface ProjectDetailsProps {
  params: {
    category: string;
    id: string;
  }
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const [, setLocation] = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get project data from the projects object
  const project = projects[params.category]?.[parseInt(params.id)];

  // If project not found, redirect to portfolio section
  if (!project) {
    setLocation('/home#portfolio');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => setLocation('/home')}
                  className="text-[#003366] dark:text-[#66b2ff] hover:text-[#336699] dark:hover:text-[#99ccff] cursor-pointer"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => setLocation('/home#portfolio')}
                  className="text-[#003366] dark:text-[#66b2ff] hover:text-[#336699] dark:hover:text-[#99ccff] cursor-pointer"
                >
                  Portfolio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => setLocation('/home#portfolio')}
                  className="text-[#003366] dark:text-[#66b2ff] hover:text-[#336699] dark:hover:text-[#99ccff] cursor-pointer"
                >
                  {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#CC3333] dark:text-[#ff6666]">
                  {project.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        <Button
          variant="ghost"
          className="mb-8 text-[#003366] dark:text-[#66b2ff] hover:bg-[#003366]/10 dark:hover:bg-[#66b2ff]/10"
          onClick={() => setLocation('/home#portfolio')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">
              {project.title}
            </h1>
            {project.client && (
              <p className="text-[#CC3333] dark:text-[#ff6666] font-medium mb-4">
                Client: {project.client}
              </p>
            )}
            <p className="text-[#336699] dark:text-gray-300 mb-6 whitespace-pre-line">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className={`${
                    project.isConfidential 
                      ? "bg-gray-400 cursor-not-allowed text-white" 
                      : "bg-[#003366] hover:bg-[#336699] text-white dark:bg-[#003366] dark:hover:bg-[#66b2ff] dark:text-white dark:hover:text-[#003366]"
                  } transition-all duration-300`}
                  onClick={() => !project.isConfidential && window.open(project.githubUrl, '_blank')}
                  disabled={project.isConfidential}
                >
                  <Github className="mr-2 h-4 w-4" />
                  {project.isConfidential ? "Confidential (NDA)" : "View Source"}
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="outline"
                  className={`${
                    project.isConfidential 
                      ? "bg-gray-400 cursor-not-allowed text-white" 
                      : "bg-[#003366] hover:bg-[#336699] text-white dark:bg-[#003366] dark:hover:bg-[#66b2ff] dark:text-white dark:hover:text-[#003366]"
                  } transition-all duration-300`}
                  onClick={() => !project.isConfidential && window.open(project.liveUrl, '_blank')}
                  disabled={project.isConfidential}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {project.isConfidential ? "Confidential (NDA)" : "Live Demo"}
                </Button>
              )}
            </div>
            {project.isConfidential && (
              <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  🔒 <strong>Note:</strong> Due to a non-disclosure agreement (NDA), I cannot publicly share the source code, UI screenshots, or internal implementation details. This case study offers a generalized overview of my responsibilities and the impact of the system.
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* My Role Section */}
        {project.role && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
          >
            <h2 className="text-xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">
              My Role
            </h2>
            <p className="text-[#336699] dark:text-gray-300 mb-4">
              {project.role}
            </p>
            {project.responsibilities && (
              <div>
                <h3 className="text-lg font-semibold text-[#003366] dark:text-[#66b2ff] mb-3">
                  Key Responsibilities
                </h3>
                <ul className="list-none text-[#336699] dark:text-gray-300 space-y-4">
                  {project.responsibilities.map((responsibility, index) => {
                    const [title, ...descriptionParts] = responsibility.split(':');
                    const description = descriptionParts.join(':').trim();
                    return (
                      <li key={index}>
                        <div className="font-semibold text-[#003366] dark:text-[#66b2ff] mb-1">
                          {title}
                        </div>
                        <div className="text-[#336699] dark:text-gray-300">
                          {description}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </motion.div>
        )}

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">
              Challenges
            </h2>
            <ul className="list-disc list-inside text-[#336699] dark:text-gray-300 space-y-2">
              {project.challenges?.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">
              Solutions
            </h2>
            <ul className="list-disc list-inside text-[#336699] dark:text-gray-300 space-y-2">
              {project.solutions?.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">
              Results
            </h2>
            <ul className="list-disc list-inside text-[#336699] dark:text-gray-300 space-y-2">
              {project.results?.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.split(", ").map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#003366]/10 dark:bg-[#66b2ff]/10 text-[#003366] dark:text-[#66b2ff] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <BackToTop />
    </div>
  );
}