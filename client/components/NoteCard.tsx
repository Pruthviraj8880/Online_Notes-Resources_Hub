import { Download, FileText, Star } from "lucide-react";
import { useState } from "react";

interface NoteCardProps {
  title: string;
  subject: string;
  description: string;
  author: string;
  rating: number;
  downloads: number;
  pages: number;
  difficulty?: "easy" | "medium" | "hard";
}

export default function NoteCard({
  title,
  subject,
  description,
  author,
  rating,
  downloads,
  pages,
  difficulty = "medium",
}: NoteCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const difficultyColors = {
    easy: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    hard: "bg-red-100 text-red-700",
  };

  return (
    <div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div className="bg-gradient-to-r from-purple-50 to-cyan-50 p-4 flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{subject}</p>
          </div>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${difficultyColors[difficulty]}`}
        >
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Meta Information */}
        <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-y border-gray-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-yellow-500" />
              <span className="text-sm font-semibold">{rating}</span>
            </div>
            <p className="text-xs text-gray-600">Rating</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-900">{pages}p</p>
            <p className="text-xs text-gray-600">Pages</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-900">{downloads}k</p>
            <p className="text-xs text-gray-600">Downloads</p>
          </div>
        </div>

        {/* Author */}
        <p className="text-xs text-gray-600 mb-4">
          By <span className="font-medium text-gray-900">{author}</span>
        </p>

        {/* Download Button */}
        <button
          className={`w-full py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            isHovered
              ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          <Download className="w-4 h-4" />
          {isHovered ? "Download Now" : "Download PDF"}
        </button>
      </div>
    </div>
  );
}
