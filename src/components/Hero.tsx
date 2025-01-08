import React from 'react';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-in">
              Transforming Ideas into
              <span className="text-blue-600 animate-pulse-scale inline-block ml-2">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              We create innovative software solutions that drive business growth and success.
              Let's build your digital future together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-glow"
            >
              Get Started
              <Rocket className="ml-2 h-5 w-5 animate-bounce" />
            </a>
          </div>
          <div className="md:w-1/2 animate-float transform hover:scale-105 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team working on software development"
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;