
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Client project data
const projects = [
  {
    id: "slb-lab",
    client: "SLB",
    title: "Research Laboratory Setup",
    description: "A comprehensive laboratory setup for SLB's research facility, featuring specialized equipment installations, custom workstations, and advanced safety systems.",
    services: ["Turnkey Lab Setup", "HVAC Works", "EHS Services"],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "siemens-office",
    client: "SIEMENS",
    title: "Corporate Office Renovation",
    description: "Complete interior renovation of SIEMENS' corporate office space, creating a modern, efficient work environment with enhanced functionality and aesthetic appeal.",
    services: ["Turnkey Interior Work", "HVAC Works"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "mafatlal-warehouse",
    client: "Mafatlal",
    title: "Industrial Warehouse Design & Setup",
    description: "Design and construction of a 50,000 sq. ft. warehouse facility for Mafatlal, optimizing storage capacity and operational efficiency with advanced logistics systems.",
    services: ["Warehouse Design & Setup", "Lifting Solutions"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "weatherford-facility",
    client: "Weatherford",
    title: "Manufacturing Facility Upgrade",
    description: "Comprehensive upgrade of Weatherford's manufacturing facility, including structural improvements, advanced HVAC systems, and implementation of new safety protocols.",
    services: ["Turnkey Interior and Exterior Work", "HVAC Works", "EHS Services"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

// Client logos for the client section
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

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Showcasing our successful projects and collaborations with industry leaders
            </p>
          </div>
        </div>
      </section>

      {/* Clients Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Trusted Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to work with leading companies across various industries, delivering exceptional results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client) => (
              <div key={client.name} className="flex justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our recent projects showcasing our expertise and commitment to quality.
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="h-64 md:h-auto">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      {project.client}
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Services Provided:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span 
                            key={service} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Pacific Corporation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-4xl text-primary">"</div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                Pacific Corporation delivered our laboratory setup with exceptional attention to detail and expertise. The team's understanding of our specialized requirements resulted in a facility that perfectly meets our research needs.
              </p>
              <div>
                <p className="font-semibold text-gray-900">Technical Director</p>
                <p className="text-primary">SLB</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-4xl text-primary">"</div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                The warehouse design and setup provided by Pacific Corporation has significantly improved our operational efficiency. Their innovative approach to space utilization and material handling has been a game-changer for our logistics.
              </p>
              <div>
                <p className="font-semibold text-gray-900">Operations Manager</p>
                <p className="text-primary">Mafatlal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how Pacific Corporation can help bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
