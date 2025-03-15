import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior Software Engineer",
    period: "2020 - Present",
    description: "Leading development of enterprise applications using React and Node.js"
  },
  {
    company: "Digital Solutions Inc",
    position: "Full Stack Developer",
    period: "2018 - 2020",
    description: "Developed and maintained multiple client projects"
  },
  {
    company: "StartUp Innovation",
    position: "Frontend Developer",
    period: "2016 - 2018",
    description: "Created responsive web applications using modern JavaScript frameworks"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#003366] mb-4">Work Experience</h2>
          <p className="text-[#336699]">My professional journey</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#003366]">{exp.position}</CardTitle>
                  <div className="text-[#CC3333] font-medium">{exp.company}</div>
                  <div className="text-[#336699] text-sm">{exp.period}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#003366]">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
