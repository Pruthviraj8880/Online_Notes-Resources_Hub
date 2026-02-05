import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Home, MessageSquare } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <div className="text-8xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Sorry, we couldn't find the page you're looking for at{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-purple-600">
              {location.pathname}
            </code>
          </p>
          <p className="text-gray-600 mb-8">
            The page might have been moved or deleted. Let's get you back on track!
          </p>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
