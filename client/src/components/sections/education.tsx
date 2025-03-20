import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; // Added import for Button component
import { SiMeta } from "react-icons/si";
import { BsWindows } from "react-icons/bs";

const certificates = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    image: "/certificates/Meta/Meta Front-end Developer.jpg",
    verificationUrl: "https://coursera.org/verify/professional-cert/F2OAPYNPJVLM",
    issuer: "Meta",
    issueDate: "Feb 17, 2025",
    description: "This 9-course program prepares learners for an entry-level career as a front-end developer.",
    featured: true,
    icon: SiMeta
  },
  {
    title: "Microsoft UX Design Professional Certificate",
    image: "/certificates/Microsoft/Microsoft UX Design Pro_page-0001.jpg",
    verificationUrl: "https://coursera.org/verify/professionalal-cert/EZ51MOA140J8",
    issuer: "Microsoft",
    issueDate: "Jan 4, 2025",
    description: "Gain in-demand UX design skills through this Professional Certificate.",
    featured: true,
    icon: BsWindows
  },
  {
    title: "Introduction to Front-End Development",
    image: "/certificates/Meta/Meta Front-End Developer Pro_page-0002.jpg",
    verificationUrl: "https://coursera.org/verify/DNQT875KDJOF",
    issuer: "Meta",
    issueDate: "Jan 5, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "Fundamentals of UX/UI Design",
    image: "/certificates/Microsoft/Microsoft UX Design Pro_page-0002.jpg",
    verificationUrl: "https://coursera.org/verify/LG4U4A6HAMYY",
    issuer: "Microsoft",
    issueDate: "Dec 23, 2024",
    description: "An online non-credit course authorized by Microsoft and offered through Coursera",
    featured: true,
    icon: BsWindows
  },
  {
    title: "Programming with JavaScript",
    image: "/certificates/Meta/Meta Front-End Developer Pro_page-0003.jpg",
    verificationUrl: "https://coursera.org/verify/X4ZA6W90MCEH",
    issuer: "Meta",
    issueDate: "Jan 9, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "Designing for User Experience",
    image: "/certificates/Microsoft/Microsoft UX Design Pro_page-0003.jpg",
    verificationUrl: "https://coursera.org/verify/K260DLK5IG2M",
    issuer: "Microsoft",
    issueDate: "Jan 1, 2025",
    description: "An online non-credit course authorized by Microsoft and offered through Coursera",
    featured: true,
    icon: BsWindows
  },
  {
    title: "Version Control",
    image: "/certificates/Meta/Meta Front-End Developer Pro_page-0004.jpg",
    verificationUrl: "https://coursera.org/verify/TRNJAZCNXOBN",
    issuer: "Meta",
    issueDate: "Jan 9, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "User Interface Design and Prototyping",
    image: "/certificates/Microsoft/Microsoft UX Design Pro_page-0004.jpg",
    verificationUrl: "https://coursera.org/verify/CDOZY4VGBF0T",
    issuer: "Microsoft",
    issueDate: "Jan 3, 2025",
    description: "An online non-credit course authorized by Microsoft and offered through Coursera",
    featured: true,
    icon: BsWindows
  },
  {
    title: "HTML and CSS in Depth",
    image: "/certificates/Meta/Meta Front-End Developer Pro_page-0005.jpg",
    verificationUrl: "https://coursera.org/verify/IJVQDKNFFKIM",
    issuer: "Meta",
    issueDate: "Jan 16, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "UX Design in Practice: Accessibility and Collaboration",
    image: "/certificates/Microsoft/Microsoft UX Design Pro_page-0005.jpg",
    verificationUrl: "https://coursera.org/verify/GGHFKRPOTOVI",
    issuer: "Microsoft",
    issueDate: "Jan 4, 2025",
    description: "An online non-credit course authorized by Microsoft and offered through Coursera",
    featured: true,
    icon: BsWindows
  },
  {
    title: "React Basics",
    image: "/certificates/Meta/Meta Front-End Developer Pro_page-0006.jpg",
    verificationUrl: "https://coursera.org/verify/CQEO6TF0ZN3G",
    issuer: "Meta",
    issueDate: "Jan 21, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "Advanced React",
    image: "/certificates/Meta/Meta Front-End Developer Pro_page-0007.jpg",
    verificationUrl: "https://coursera.org/verify/PCEZFWCBJBDH",
    issuer: "Meta",
    issueDate: "Jan 24, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "Principles of UX/UI Design",
    image: "/certificates/Meta/Meta Front-End Developer Pro_page-0008.jpg",
    verificationUrl: "https://coursera.org/verify/62Y0G4NCTTCJ",
    issuer: "Meta",
    issueDate: "Jan 30, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "Front-End Developer Capstone",
    image: "/certificates/Meta/Meta Front-End Developer Pro_page-0009.jpg",
    verificationUrl: "https://coursera.org/verify/2B03XAAFFJZZ",
    issuer: "Meta",
    issueDate: "Feb 11, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "Coding Interview Preparation",
    image: "/certificates/Meta/Meta Front-End Developer Pro_page-0010.jpg",
    verificationUrl: "https://coursera.org/verify/G54GEKYQIMKE",
    issuer: "Meta",
    issueDate: "Feb 17, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  },
  {
    title: "Introduction to Back-End Development",
    image: "/certificates/Meta/Introduction to Back-end Development_page-0001.jpg",
    verificationUrl: "https://coursera.org/verify/BQLX3LCSS7Z6",
    issuer: "Meta",
    issueDate: "Feb 17, 2025",
    description: "An online non-credit course authorized by Meta and offered through Coursera",
    featured: true,
    icon: SiMeta
  }
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
          className={`relative group ${index % 4 === 0 ? 'md:col-start-1' : ''}`}
        >
          <div 
            className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 group-hover:animate-border-travel rounded-lg transition-opacity duration-500"
            style={{
              background: 'linear-gradient(90deg, transparent, #003366, transparent)',
              backgroundSize: '200% 100%',
            }}
          >
            <div className="absolute inset-0 rounded-lg dark:bg-gradient-to-r dark:from-transparent dark:via-[#66b2ff] dark:to-transparent"></div>
          </div>
          <div className="relative flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md group-hover:shadow-lg transition-shadow aspect-[4/3]">
            {isMetaCertificate ? (
              <>
                {certificate.icon && (
                  <div className="flex items-center justify-center w-12 h-12 mb-3">
                    <certificate.icon className="w-full h-full text-[#003366] dark:text-[#66b2ff] mb-4 transform transition-transform duration-300 group-hover:scale-110" style={{ maxWidth: '3rem', maxHeight: '3rem' }} />
                  </div>
                )}
                <h3 className="text-base font-semibold text-[#003366] dark:text-[#66b2ff] text-center line-clamp-2">
                  {certificate.title}
                </h3>
                <p className="text-[#336699] dark:text-gray-300 mt-1 text-xs">
                  {certificate.issueDate}
                </p>
              </>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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