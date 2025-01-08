import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Our team"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
            </div>
            <p className="text-xl text-gray-600 mb-6">
              Siddheshwar Sai Infotech, based in Adelaide, is led by Yogeshkumar Patel, 
              a passionate developer and innovator. We specialize in creating cutting-edge 
              software solutions that help businesses thrive in the digital age.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              With years of experience in software development and a deep understanding of 
              business needs, we deliver solutions that combine technical excellence with 
              practical business value.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;