import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    company: "Yachiyo Engineering Co., Ltd.",
    position: "Project Manager",
    period: "2014 - 2024",
    description: "Led and managed multiple engineering projects, focusing on system development and team coordination."
  },
  {
    company: "Next Generation Co., Ltd.",
    position: "Managing Director",
    period: "2009 - 2014",
    description: "Directed company operations and strategic development initiatives while overseeing technical projects."
  },
  {
    company: "Sunshine Media Group",
    position: "Junior Web Developer",
    period: "2007 - 2009",
    description: "Developed and maintained web applications using modern web technologies."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#003366] dark:text-[#66b2ff] mb-4">Work Experience</h2>
          <p className="text-[#336699] dark:text-gray-300">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-[#003366]/20 dark:bg-[#66b2ff]/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[50%] top-[50%] w-4 h-4 rounded-full bg-[#CC3333] dark:bg-[#ff6666] transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="absolute w-8 h-8 rounded-full border-2 border-[#CC3333] dark:border-[#ff6666] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                </div>

                <div className={`md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:pl-12 md:pr-0'}`}>
                  <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-[#003366] dark:text-[#66b2ff]">{exp.position}</CardTitle>
                      <div className="text-[#CC3333] dark:text-[#ff6666] font-medium">{exp.company}</div>
                      <div className="text-[#336699] dark:text-gray-300 text-sm">{exp.period}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#003366] dark:text-gray-300">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty column for timeline alignment */}
                <div className={index % 2 === 0 ? 'md:order-2' : ''} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}