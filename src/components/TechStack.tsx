
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const skillCategories = [
    {
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'PyTorch', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Transformers', level: 88 },
        { name: 'NLTK ', level: 82 },
        { name: 'Pandas', level: 90 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Docker', level: 88 },
        { name: 'Google Cloud Platform', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Grafana', level: 80 },
        { name: 'CI/CD', level: 82 },
        { name: 'Linux', level: 85 }
      ]
    },
    {
  title: 'Virtual Reality Development',
  skills: [
    { name: 'Python', level: 92 },
    { name: 'Flask', level: 88 },
    { name: 'Unity (C#)', level: 85 },
    { name: 'Gaussian Splatting', level: 80 },
    { name: 'COLMAP', level: 78 },
    { name: 'PostgreSQL', level: 75 }
  ]
},


    {
      title: 'Specialized',
      skills: [
        { name: 'Computer Vision', level: 88 },
        { name: 'NLP', level: 85 },
        { name: 'Unity/VR', level: 80 },
        { name: 'Medical Imaging', level: 75 },
        { name: 'Microservices', level: 82 },
        { name: 'API Design', level: 88 }
      ]
    }
  ];

  const certifications = [
    'NLP Intern (Artificial Intelligence and Machine Learning Lab)',
    'Teaching Assistant (Statistical Modeling)'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Tech Stack & Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across AI/ML, cloud technologies, and modern development practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'PyTorch', 'TensorFlow', 'Docker', 'GRPC', 'Kubernetes',
              'Flask', 'FastAPI', 'PostgreSQL', 'MongoDB',
              '3DGS', 'Pandas', 'Grafana', 'Unity', 'Linux', 'Git'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Certifications & Achievements</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
                >
                  <span className="text-center font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechStack;
