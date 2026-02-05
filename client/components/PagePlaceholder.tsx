import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

interface PagePlaceholderProps {
  title?: string;
  description?: string;
  icon?: string;
}

export default function PagePlaceholder({
  title = "Page Coming Soon",
  description = "This page is being built with amazing features. Check back soon!",
  icon = "🚀",
}: PagePlaceholderProps) {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6 animate-bounce">{icon}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-gray-600 text-lg mb-8">{description}</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-2 text-blue-700 justify-center mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Pro Tip</span>
          </div>
          <p className="text-sm text-blue-600">
            Continue exploring StudyHub or reach out to suggest what should go
            here!
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
