
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Cloud, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'Agentic AI Expertise',
      description: 'Langchain, Langgraph, and Langsmith agentic systems implementation'
    },
    {
      icon: Code,
      title: 'AI/ML Expertise',
      description: 'Generative AI, LLMs, and NLP intelligent system design'
    },
    {
      icon: Zap,
      title: 'Microservices Development',
      description: 'End-to-end solutions using a Flask-based microservices architecture'
    },
    {
      icon: Cloud,
      title: 'Cloud & MLOps',
      description: 'Scalable infrastructure with Docker, AWS, and Prometheus'
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
              I am a dedicated AI Engineer specializing in Generative AI and Natural Language Processing (NLP).
              My professional focus is driven by a commitment to architecting intelligent systems that move
              beyond simple automation to solve complex, real-world problems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From engineering autonomous Agentic AI workflows to fine-tuning Large Language Models (LLMs)
              for custom use cases, I thrive on building sophisticated architectures that utilize advanced
              reasoning to push the boundaries of what is possible with modern technology.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across advanced machine learning, cloud computing, and full-stack integration,
              with a strong focus on creating scalable, efficient, and production-ready AI solutions.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">What drives me:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Architecting autonomous, reasoning-based Agentic AI systems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Driving innovation in Generative AI and LLM integration
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Delivering scalable, high-impact technical solutions
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
