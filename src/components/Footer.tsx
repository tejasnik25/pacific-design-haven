
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
