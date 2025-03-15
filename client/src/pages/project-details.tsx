import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/components/sections/portfolio";

interface ProjectDetailsProps {
  params: {
    category: string;
    id: string;
  }
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const [, setLocation] = useLocation();

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
                  className="bg-[#003366] hover:bg-[#336699] text-white dark:bg-[#003366] dark:hover:bg-[#66b2ff] dark:text-white dark:hover:text-[#003366] transition-all duration-300"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="outline"
                  className="bg-[#003366] hover:bg-[#336699] text-white dark:bg-[#003366] dark:hover:bg-[#66b2ff] dark:text-white dark:hover:text-[#003366] transition-all duration-300"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              )}
            </div>
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

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            transition={{ duration: 0.5, delay: 0.3 }}
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
            transition={{ duration: 0.5, delay: 0.4 }}
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
    </div>
  );
}