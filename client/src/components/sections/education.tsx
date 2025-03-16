import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SiMeta } from "react-icons/si";
import { BsWindows } from "react-icons/bs";

// Certificate data with Meta Front-End Developer Certificate
const certificates = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    image: "/Meta Front-end Developer.jpg",
    verificationUrl: "https://coursera.org/verify/professional-cert/F2OAPYNPJVLM",
    issuer: "Meta",
    issueDate: "Feb 17, 2025",
    description: "This 9-course program prepares learners for an entry-level career as a front-end developer.",
    featured: true,
    icon: SiMeta,
    courses: [
      "Introduction to Front-End Development",
      "Programming with JavaScript",
      "Version Control",
      "HTML and CSS in depth",
      "React Basics",
      "Advanced React",
      "Principles of UX/UI Design",
      "Front-End Developer Capstone",
      "Coding Interview Preparation"
    ]
  },
  {
    title: "Microsoft UX Design Professional Certificate",
    image: "/Microsoft UX Design Pro_page-0001.jpg",
    verificationUrl: "https://coursera.org/verify/professionalal-cert/EZ51MOA140J8",
    issuer: "Microsoft",
    issueDate: "Jan 4, 2025",
    description: "Gain in-demand UX design skills through this Professional Certificate. You'll become proficient in user research, information architecture, wireframing, prototyping, visual design, and accessibility considerations.",
    featured: true,
    icon: BsWindows,
    courses: [
      "Fundamentals of UI/UX Design",
      "Designing for User Experience",
      "User Interface Design and Prototyping",
      "UX Design in Practice: Accessibility and Collaboration"
    ]
  },
  {
    title: "Introduction to Front-End Development",
    image: "/Meta Front-End Developer Pro_page-0002.jpg",
    verificationUrl: "https://coursera.org/verify/DNQT875KDJOF",
    issuer: "Meta",
    issueDate: "Jan 5, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "Fundamentals of UX/UI Design",
    image: "/Microsoft UX Design Pro_page-0002.jpg",
    verificationUrl: "https://coursera.org/verify/LG4U4A6HAMYY",
    issuer: "Microsoft",
    issueDate: "Dec 23, 2024",
    description: "An online non-credit course authorized by Microsoft and offered through Coursera",
    featured: true,
    icon: BsWindows
  },
  // Placeholder for other certificates
  ...Array(4).fill({
    title: "Certificate Title",
    image: "placeholder-certificate.jpg",
    verificationUrl: "https://example.com/verify",
    featured: false
  })
];

interface CertificateCardProps {
  certificate: typeof certificates[0];
  index: number;
}

function CertificateCard({ certificate, index }: CertificateCardProps) {
  const isMetaCertificate = certificate.featured;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="cursor-pointer group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow aspect-video"
        >
          <div className="relative w-full h-full">
            {isMetaCertificate ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0668E1]/10 to-[#0668E1]/5">
                <certificate.icon className="w-16 h-16 text-[#0668E1] mb-6" />
                <h3 className="text-xl font-semibold text-[#003366] dark:text-[#66b2ff] text-center">
                  {certificate.title}
                </h3>
                <p className="text-[#336699] dark:text-gray-300 mt-2 text-sm">
                  {certificate.issueDate}
                </p>
              </div>
            ) : (
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-[#003366] dark:text-[#66b2ff] flex items-center gap-2">
            {certificate.icon && <certificate.icon className="w-5 h-5 text-[#0668E1]" />}
            {certificate.title}
          </DialogTitle>
          {certificate.issueDate && (
            <DialogDescription>
              Issued by {certificate.issuer} • {certificate.issueDate}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="mt-4">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        {certificate.courses && (
          <div className="mt-4">
            <h4 className="font-semibold text-[#003366] dark:text-[#66b2ff] mb-2">Courses Completed:</h4>
            <ul className="list-disc list-inside space-y-1 text-[#336699] dark:text-gray-300">
              {certificate.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <Button
            onClick={() => window.open(certificate.verificationUrl, '_blank')}
            className="bg-[#003366] hover:bg-[#336699] text-white dark:bg-[#66b2ff] dark:hover:bg-[#99ccff] dark:text-white"
          >
            Verify Certificate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#F5F5F5] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">My Recent Achievements</h2>
          <p className="text-[#336699] dark:text-gray-300">Certificates and Qualifications</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              certificate={cert}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}