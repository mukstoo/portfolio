"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const highlights = [
    t('about.highlights.jsExpert'),
    t('about.highlights.fullstack'),
    t('about.highlights.reactNative'),
    t('about.highlights.modernTech'),
    t('about.highlights.dbDesign'),
    t('about.highlights.apiDev')
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">{t('about.myStory')}</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {t('about.story1')}
                  </p>
                  <p>
                    {t('about.story2')}
                  </p>
                  <p>
                    {t('about.story3')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">{t('about.whatIBring')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="w-full justify-center py-2">
                        {highlight}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{t('about.quickFacts')}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{t('about.specialization')}:</span>
                    <span className="font-medium">{t('about.specializationValue')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('about.experience')}:</span>
                    <span className="font-medium">{t('about.experienceValue')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('about.focus')}:</span>
                    <span className="font-medium">{t('about.focusValue')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('about.platforms')}:</span>
                    <span className="font-medium">{t('about.platformsValue')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('about.availability')}:</span>
                    <span className="font-medium text-green-600">{t('about.availabilityValue')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 