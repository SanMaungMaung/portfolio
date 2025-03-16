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

// Certificate data with Meta Front-End Developer Certificate
const certificates = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    image: "/Meta Front-end Developer.jpg",
    verificationUrl: "https://coursera.org/verify/professional-cert/F2OAPYNJVLM",
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
  // Placeholder for other certificates
  ...Array(7).fill({
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
          className={`cursor-pointer group relative ${
            isMetaCertificate ? 'col-span-2 row-span-2' : ''
          } bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow`}
        >
          <div className="relative w-full h-full">
            {isMetaCertificate && (
              <div className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2">
                <certificate.icon className="w-8 h-8 text-[#0668E1]" />
              </div>
            )}
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {isMetaCertificate && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-lg font-semibold">{certificate.title}</h3>
                <p className="text-white/80 text-sm">{certificate.issueDate}</p>
              </div>
            )}
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-[#003366] dark:text-[#66b2ff] flex items-center gap-2">
            {certificate.icon && <certificate.icon className="w-6 h-6 text-[#0668E1]" />}
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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