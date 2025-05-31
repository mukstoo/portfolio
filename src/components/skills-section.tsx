"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

const skillCategories = [
  {
    title: "frontend",
    description: "frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
    prominent: true
  },
  {
    title: "backend",
    description: "backend", 
    skills: ["Node.js", "Express", "PHP", "WordPress"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "databases",
    description: "databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Firebase", "Supabase"],
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "tools",
    description: "tools",
    skills: ["Git", "Figma", "Jest", "Stripe", "Sanity"],
    color: "from-orange-500 to-red-500"
  }
]

const featuredTechnologies = [
  { name: "Next.js", category: "Full-Stack Framework", featured: true },
  { name: "React", category: "Frontend Framework", featured: true },
  { name: "TypeScript", category: "Programming Language", featured: true },
  { name: "React Native", category: "Mobile Development" },
  { name: "Node.js", category: "Backend Runtime" },
  { name: "WordPress", category: "CMS Platform" }
]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">{t('skills.coreTitle')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className={`h-full text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 ${
                  tech.featured ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                }`}>
                  <CardContent className="p-4">
                    <div className={`font-semibold text-lg mb-1 group-hover:text-primary transition-colors ${
                      tech.featured ? 'text-primary' : ''
                    }`}>
                      {tech.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {tech.category}
                    </div>
                    {tech.featured && (
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-xs">
                          ⭐ Specialty
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full hover:shadow-xl transition-all duration-300 overflow-hidden ${
                category.prominent ? 'ring-2 ring-primary/30 bg-primary/5' : ''
              }`}>
                <CardHeader className="pb-3">
                  <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-3 ${
                    category.prominent ? 'h-2' : ''
                  }`} />
                  <CardTitle className={`text-xl group-hover:text-primary transition-colors ${
                    category.prominent ? 'text-primary' : ''
                  }`}>
                    {t(`skills.categories.${category.title}.title`)}
                    {category.prominent && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Primary Focus
                      </Badge>
                    )}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {t(`skills.categories.${category.description}.description`)}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant={category.prominent ? "default" : "secondary"}
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default text-xs"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>{t('skills.alwaysLearning')}</CardTitle>
              <p className="text-muted-foreground">
                {t('skills.learningSubtitle')}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div>🚀 {t('skills.practices.performance')}</div>
                <div>📱 {t('skills.practices.responsive')}</div>
                <div>🔒 {t('skills.practices.security')}</div>
                <div>♿ {t('skills.practices.accessibility')}</div>
                <div>🧪 {t('skills.practices.testing')}</div>
                <div>🔄 {t('skills.practices.cicd')}</div>
                <div>☁️ {t('skills.practices.cloud')}</div>
                <div>📊 {t('skills.practices.analytics')}</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 