
import { Building2, Beaker, Warehouse, Wind, Cable, ShieldAlert } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Service data with detailed descriptions
const services = [
  {
    id: "interior-exterior",
    title: "Turnkey Interior and Exterior Work",
    icon: Building2,
    shortDesc: "Comprehensive interior and exterior solutions for commercial and industrial buildings.",
    description: `Our turnkey interior and exterior services provide complete solutions for your building projects. We handle everything from conceptualization to completion, ensuring high-quality workmanship and attention to detail.
    
    Our services include:
    • Interior fit-outs and renovations
    • Facade development and renovations
    • Custom joinery and furniture
    • Flooring and ceiling solutions
    • Complete electrical, plumbing and HVAC integration
    • Project management and coordination`,
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "lab-setup",
    title: "Turnkey Lab Setup Works",
    icon: Beaker,
    shortDesc: "Full-service laboratory design, construction, and equipment installation services.",
    description: `Pacific Corporation specializes in creating state-of-the-art laboratory environments that adhere to industry standards and regulations. Our lab setup works encompass everything from initial design to final commissioning.
    
    Our expertise includes:
    • Specialized lab design for various scientific disciplines
    • Clean room construction and certification
    • Lab furniture and equipment installation
    • Safety systems and protocols implementation
    • Utility connections and management
    • Compliance with regulatory standards`,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "warehouse",
    title: "Warehouse Design & Setup Works",
    icon: Warehouse,
    shortDesc: "Custom warehouse design and construction with optimal space utilization.",
    description: `We deliver efficient warehouse solutions designed to maximize operational efficiency and storage capacity. Our comprehensive approach ensures your warehouse is tailored to your specific business requirements.
    
    Our warehouse services include:
    • Custom warehouse layout and design
    • Racking and shelving systems
    • Loading dock design and construction
    • Material handling systems integration
    • Safety and security implementations
    • Warehouse optimization consultancy`,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "hvac",
    title: "HVAC Works",
    icon: Wind,
    shortDesc: "Advanced heating, ventilation, and air conditioning systems for all facility types.",
    description: `Our HVAC services ensure optimal climate control and air quality in your facilities. We design, install, and maintain systems that are energy-efficient and reliable for various building types.
    
    Our HVAC offerings include:
    • Custom HVAC system design
    • Installation of heating, cooling, and ventilation systems
    • Energy-efficient solutions
    • Indoor air quality improvements
    • System upgrades and retrofits
    • Regular maintenance and service plans`,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "lifting",
    title: "Lifting Solutions",
    icon: Cable,
    shortDesc: "Industrial lifting equipment installation and maintenance services.",
    description: `We provide specialized lifting solutions for industrial and commercial applications, ensuring safe and efficient material handling capabilities in your facilities.
    
    Our lifting solutions encompass:
    • Crane and hoist system design and installation
    • Lifting equipment certification and inspections
    • Custom lifting apparatus for specialized applications
    • Preventive maintenance programs
    • Operator training and safety protocols
    • Compliance with industry standards and regulations`,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ehs",
    title: "EHS Services",
    icon: ShieldAlert,
    shortDesc: "Environmental, health, and safety consultancy and implementation services.",
    description: `Our EHS services focus on creating safe and compliant workplaces. We provide comprehensive solutions to help you meet regulatory requirements while protecting your employees and the environment.
    
    Our EHS offerings include:
    • Workplace safety assessments and implementations
    • Environmental compliance audits
    • Health and safety training programs
    • Risk assessment and management
    • Emergency response planning
    • Regular monitoring and reporting`,
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Comprehensive civil work solutions designed to meet your specific requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                <a 
                  href={`#${service.id}`}
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  Read more <span className="ml-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-6">{service.title}</h2>
                <div className="text-gray-600 space-y-4 whitespace-pre-line">
                  {service.description}
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and how our services can meet your needs.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
