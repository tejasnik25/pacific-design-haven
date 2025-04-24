
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Package2, Building2, FileText, Cable } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Enterprise IT Hardware Solutions",
    description: "Complete range of enterprise-grade IT infrastructure and hardware solutions.",
    icon: Package2,
    id: "it-hardware"
  },
  {
    title: "Industrial Hardware & Components",
    description: "High-quality industrial hardware components and materials for manufacturing and construction.",
    icon: Building2,
    id: "industrial-hardware"
  },
  {
    title: "Office Equipment & Stationery",
    description: "Professional office supplies and equipment for optimal workplace efficiency.",
    icon: FileText,
    id: "stationery"
  },
  {
    title: "Electrical & Electronic Systems",
    description: "Advanced electrical and electronic components for industrial applications.",
    icon: Cable,
    id: "electrical"
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
