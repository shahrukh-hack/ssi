import React from 'react';
import { Globe2, Laptop, Cpu, Code2, Database, Cloud, Shield, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Globe2 className="h-8 w-8 text-blue-600" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies.',
    details: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems'
    ]
  },
  {
    icon: <Laptop className="h-8 w-8 text-blue-600" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    details: [
      'iOS Development',
      'Android Development',
      'React Native Apps',
      'Flutter Applications'
    ]
  },
  {
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    title: 'Software Solutions',
    description: 'Tailored software solutions to streamline your business processes.',
    details: [
      'Custom Software Development',
      'Enterprise Solutions',
      'API Integration',
      'Legacy System Modernization'
    ]
  },
  {
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment solutions for scalable applications.',
    details: [
      'AWS Solutions',
      'Azure Services',
      'Cloud Migration',
      'DevOps Implementation'
    ]
  },
  {
    icon: <Database className="h-8 w-8 text-blue-600" />,
    title: 'Database Solutions',
    description: 'Robust database design and management for your applications.',
    details: [
      'Database Design',
      'Data Migration',
      'Performance Optimization',
      'Backup Solutions'
    ]
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our security solutions.',
    details: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Solutions',
      'Security Training'
    ]
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Create engaging user experiences that convert visitors into customers.',
    details: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'User Testing'
    ]
  },
  {
    icon: <Code2 className="h-8 w-8 text-blue-600" />,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance for your digital solutions.',
    details: [
      '24/7 Support',
      'Performance Monitoring',
      'Regular Updates',
      'Technical Support'
    ]
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 animate-slide-in-right`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 animate-float">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li 
                    key={idx} 
                    className="text-sm text-gray-500 flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;