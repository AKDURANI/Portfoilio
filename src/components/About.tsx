
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Cloud, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Deep learning, neural networks, and intelligent system design'
    },
    {
      icon: Code,
      title: 'Flask-Based Microservices Development',
      description: 'End-to-end solutions using a Flask-based microservices architecture'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure with Docker, GCP, and monitoring'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Transforming complex problems into elegant solutions'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science graduate with a specialization in Artificial Intelligence. 
              My journey in tech has been driven by curiosity and the desire to create intelligent systems 
              that solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From developing immersive VR real estate platforms to building sophisticated neural networks 
              for medical imaging, I thrive on tackling complex challenges that push the boundaries of 
              what's possible with technology.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across machine learning, cloud computing, and modern software development, 
              with a strong focus on creating scalable, efficient, and user-centric solutions.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">What drives me:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Building intelligent systems that make a difference
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continuous learning and staying at the forefront of AI innovation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborating with teams to create impactful solutions
                </li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
