import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Pacific Corporation</h3>
            <p className="text-gray-300 mb-4">
              Providing quality civil work solutions for businesses across India.
            </p>
            <div className="flex items-start mb-2">
              <MapPin className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Flat No 204, OM Sai Sadan, Plot No 245, Sector 05, 
                Sanpada, Navi Mumbai-400706
              </p>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 text-accent mr-2" />
              <p className="text-gray-300">+91 XXXXX XXXXX</p>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 text-accent mr-2" />
              <p className="text-gray-300">info@pacificcorp.com</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-accent transition-colors">
                <Link to="/services#interior-exterior">Turnkey Interior and Exterior Work</Link>
              </li>
              <li className="text-gray-300 hover:text-accent transition-colors">
                <Link to="/services#lab-setup">Turnkey Lab Setup Works</Link>
              </li>
              <li className="text-gray-300 hover:text-accent transition-colors">
                <Link to="/services#warehouse">Warehouse Design & Setup Works</Link>
              </li>
              <li className="text-gray-300 hover:text-accent transition-colors">
                <Link to="/services#hvac">HVAC Works</Link>
              </li>
              <li className="text-gray-300 hover:text-accent transition-colors">
                <Link to="/services#lifting">Lifting Solutions</Link>
              </li>
              <li className="text-gray-300 hover:text-accent transition-colors">
                <Link to="/services#ehs">EHS Services</Link>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Our Location</h3>
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6790305070843!2d73.0070543!3d19.0462898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c70b6fad8f%3A0xe927d1e2f9b28c62!2sSector%205%2C%20Sanpada%2C%20Navi%20Mumbai%2C%20Maharashtra%20400705!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Pacific Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
