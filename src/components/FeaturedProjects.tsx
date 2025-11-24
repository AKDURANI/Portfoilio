
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Travel Planning AI Platform',
      description: 'Agentic AI system for personalized trip planning with itinerary generation, multi-agent collaboration, and real-time optimization.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      tech: ['Python', 'Streamlit', 'Langchain', 'Langgraph'],
      category: 'Agentic AI',
      github: 'https://github.com/AKDURANI/Travel-AI',
      demo: '#'
    },
    {
      title: 'AI Psychiatrist Chatbot',
      description: 'Therapeutic AI agent supporting people with clinical-grade natural language understanding and specialist recommendations.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      tech: ['Python', 'Streamlit/Twilio', 'Langchain', 'Langgraph'],
      category: 'Agentic AI',
      github: 'https://github.com/AKDURANI/Psychiatrist-AI',
      demo: '#'
    },
    {
      title: 'Multilingual AI Chatbot',
      description: 'Advanced conversational AI supporting multiple languages with natural language processing, context awareness, and sentiment analysis.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tech: ['Python', 'PyTorch', 'Transformers', 'Flask'],
      category: 'NLP/Generative AI',
      github: 'https://github.com/AKDURANI/Multilingual-Voice-Chatbot',
      demo: '#'
    },
    {
      title: 'PDF-to-Audio Microservice',
      description: 'Scalable microservice that converts PDF documents to natural-sounding audio with advanced text processing and voice synthesis.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      tech: ['Python', 'Docker', 'GRPC', 'Coqui-TTS'],
      category: 'Microservice',
      github: 'https://github.com/AKDURANI/NLP_TTS_Micrservice',
      demo: '#'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate my expertise in Agentic AI, NLP, Generative AI, and cloud technologies
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {projects[currentProject].category}
                  </span>
                </div>
              </div>

              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {projects[currentProject].title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-muted px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => window.open(projects[currentProject].github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevProject}
              className="rounded-full p-3"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProject
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextProject}
              className="rounded-full p-3"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${index === currentProject ? 'ring-2 ring-blue-600' : ''
                }`}
              onClick={() => setCurrentProject(index)}
            >
              <div className="relative h-32">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-1 truncate">{project.title}</h4>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
