import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description: "Specialized in Software Engineering and Distributed Systems"
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description: "Major in Computer Science with focus on Web Technologies"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#003366] mb-4">Education</h2>
          <p className="text-[#336699]">Academic Background</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#003366]">{edu.degree}</CardTitle>
                  <div className="text-[#CC3333] font-medium">{edu.institution}</div>
                  <div className="text-[#336699] text-sm">{edu.period}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#003366]">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
