import { Building2, Beaker, Warehouse, Wind, Cable, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

// Employee data
const employees = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    bio: "With over 15 years in civil engineering and construction, John leads Pacific Corporation with expertise in turnkey projects.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Jane Smith",
    position: "Operations Director",
    bio: "Jane brings 12 years of experience in project management and operations, ensuring flawless execution of all projects.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Mike Johnson",
    position: "Technical Lead",
    bio: "A technical expert with specialization in HVAC systems and laboratory design with 10+ years of experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Sarah Williams",
    position: "EHS Specialist",
    bio: "Sarah holds certifications in environmental health and safety protocols with 8 years of industry experience.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

// Service data
const services = [
  {
    title: "Turnkey Interior and Exterior Work",
    description: "Comprehensive interior and exterior solutions for commercial and industrial buildings.",
    icon: Building2,
    id: "interior-exterior"
  },
  {
    title: "Turnkey Lab Setup Works",
    description: "Full-service laboratory design, construction, and equipment installation services.",
    icon: Beaker,
    id: "lab-setup"
  },
  {
    title: "Warehouse Design & Setup Works",
    description: "Custom warehouse design and construction with optimal space utilization.",
    icon: Warehouse,
    id: "warehouse"
  },
  {
    title: "HVAC Works",
    description: "Advanced heating, ventilation, and air conditioning systems for all facility types.",
    icon: Wind,
    id: "hvac"
  },
  {
    title: "Lifting Solutions",
    description: "Industrial lifting equipment installation and maintenance services.",
    icon: Cable,
    id: "lifting"
  },
  {
    title: "EHS Services",
    description: "Environmental, health, and safety consultancy and implementation services.",
    icon: ShieldAlert,
    id: "ehs"
  }
];

// Client data
const clients = [
  {
    name: "SLB",
    logo: "https://placehold.co/200x100/e3e3e3/595959?text=SLB&font=playfair"
  },
  {
    name: "SIEMENS",
    logo: "https://placehold.co/200x100/e3e3e3/595959?text=SIEMENS&font=playfair"
  },
  {
    name: "Mafatlal",
    logo: "https://placehold.co/200x100/e3e3e3/595959?text=Mafatlal&font=playfair"
  },
  {
    name: "Weatherford",
    logo: "https://placehold.co/200x100/e3e3e3/595959?text=Weatherford&font=playfair"
  }
];

// Statistics data
const statistics = [
  {
    label: "Projects Completed",
    value: "300+",
    description: "Successfully delivered projects"
  },
  {
    label: "Happy Clients",
    value: "150+",
    description: "Satisfied customers"
  },
  {
    label: "Support Hours",
    value: "1,453",
    description: "Hours of AMC support"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative bg-gradient-to-r from-primary to-blue-700 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://cdn.gpteng.co/construction-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Welcome to Pacific Corporation
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Where Vision's Transformed into Concrete Realities
            </p>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Specialized civil works and turnkey solutions for industry leaders
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive civil work solutions tailored to meet the unique needs of your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={`/services#${service.id}`}
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4 text-gray-900">Our Clients</h2>
            <p className="text-lg text-gray-600">
              Trusted by industry leaders to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={client.name}
                className="flex justify-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="h-20 w-auto max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-8 rounded-lg bg-gray-50 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xl font-heading font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4 text-gray-900">Our Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experts behind Pacific Corporation's success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employees.map((employee, index) => (
              <div 
                key={employee.name}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={employee.image} 
                  alt={employee.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-1 text-gray-900">{employee.name}</h3>
                  <p className="text-primary font-medium mb-3">{employee.position}</p>
                  <p className="text-gray-600 text-sm">{employee.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how Pacific Corporation can help bring your construction and civil work projects to life.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
