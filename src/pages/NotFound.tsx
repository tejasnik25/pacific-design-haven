import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            We're sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
