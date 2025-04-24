import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Package2, Building2, FileText, Cable } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Enterprise IT Hardware Solutions",
    description: "Complete range of enterprise-grade IT infrastructure and hardware solutions.",
    icon: Package2,
    id: "it-hardware",
    detailedDescription: `Our enterprise IT hardware solutions provide comprehensive technology infrastructure for modern businesses.
    
    Our offerings include:
    • Servers and Storage Systems
    • Networking Equipment
    • Workstations and Thin Clients
    • Data Center Infrastructure
    • Security Hardware
    • Enterprise Peripherals`,
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Industrial Hardware & Components",
    description: "High-quality industrial hardware components and materials for manufacturing and construction.",
    icon: Building2,
    id: "industrial-hardware",
    detailedDescription: `We supply a wide range of industrial-grade hardware components designed for reliability and performance in demanding environments.
    
    Our product range includes:
    • Industrial Fasteners and Fittings
    • Construction Materials
    • Manufacturing Equipment Parts
    • Industrial Safety Equipment
    • Specialized Tools and Hardware
    • Quality Control Equipment`,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Office Equipment & Stationery",
    description: "Professional office supplies and equipment for optimal workplace efficiency.",
    icon: FileText,
    id: "stationery",
    detailedDescription: `Complete office supply solutions to keep your workplace running smoothly and efficiently.
    
    We provide:
    • Office Furniture and Equipment
    • Professional Stationery Items
    • Paper Products and Supplies
    • Filing and Organization Systems
    • Printing and Copying Solutions
    • Office Technology Products`,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Electrical & Electronic Systems",
    description: "Advanced electrical and electronic components for industrial applications.",
    icon: Cable,
    id: "electrical",
    detailedDescription: `High-quality electrical and electronic components designed for industrial and commercial applications.
    
    Our electrical solutions include:
    • Industrial Control Systems
    • Power Distribution Equipment
    • Electronic Components
    • Automation Systems
    • Testing and Measurement Equipment
    • Lighting Solutions`,
    image: "https://images.unsplash.com/photo-1617839625591-e5a789593135?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Comprehensive supply solutions for your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow animate-scale-in"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <product.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/products#${product.id}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id} 
          id={product.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <product.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-6">{product.title}</h2>
                <div className="text-gray-600 space-y-4 whitespace-pre-line">
                  {product.detailedDescription}
                </div>
                <Button asChild className="mt-8">
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src={product.image}
                  alt={product.title}
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
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Need Help Choosing Products?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Our team is here to help you select the right products for your specific requirements.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
