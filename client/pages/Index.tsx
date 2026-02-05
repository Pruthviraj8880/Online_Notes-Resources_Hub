import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoteCard from "@/components/NoteCard";
import { Search, TrendingUp, BookOpen, Users, Award, ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";

const subjects = [
  {
    name: "Mathematics",
    icon: "🔢",
    color: "from-blue-500 to-blue-600",
    count: 248,
    description: "Algebra, Calculus, Geometry & more",
  },
  {
    name: "Physics",
    icon: "⚛️",
    color: "from-purple-500 to-purple-600",
    count: 186,
    description: "Mechanics, Thermodynamics & more",
  },
  {
    name: "Chemistry",
    icon: "🧪",
    color: "from-green-500 to-green-600",
    count: 215,
    description: "Organic, Inorganic, Physical",
  },
  {
    name: "Biology",
    icon: "🔬",
    color: "from-red-500 to-red-600",
    count: 194,
    description: "Botany, Zoology, Genetics",
  },
  {
    name: "English",
    icon: "📖",
    color: "from-yellow-500 to-yellow-600",
    count: 167,
    description: "Literature, Grammar & Composition",
  },
  {
    name: "History",
    icon: "🏛️",
    color: "from-amber-500 to-amber-600",
    count: 132,
    description: "Ancient to Modern History",
  },
];

const featuredNotes = [
  {
    title: "Calculus Complete Guide",
    subject: "Mathematics",
    description: "Comprehensive coverage of limits, derivatives, integrals and their applications.",
    author: "Prof. Sarah Johnson",
    rating: 4.8,
    downloads: 5.2,
    pages: 127,
    difficulty: "hard" as const,
  },
  {
    title: "Molecular Biology Notes",
    subject: "Biology",
    description: "Deep dive into cellular structures, DNA replication, and protein synthesis.",
    author: "Dr. Alex Chen",
    rating: 4.9,
    downloads: 4.8,
    pages: 95,
    difficulty: "hard" as const,
  },
  {
    title: "Organic Chemistry Essentials",
    subject: "Chemistry",
    description: "Key concepts in bonding, reactions, and mechanisms with solved examples.",
    author: "Prof. Michael Brown",
    rating: 4.7,
    downloads: 3.6,
    pages: 112,
    difficulty: "medium" as const,
  },
  {
    title: "Physics Problem Solving",
    subject: "Physics",
    description: "Step-by-step solutions to complex physics problems and real-world applications.",
    author: "Dr. Emma Wilson",
    rating: 4.6,
    downloads: 4.2,
    pages: 108,
    difficulty: "hard" as const,
  },
  {
    title: "English Literature Summary",
    subject: "English",
    description: "Complete summaries and analysis of classic and modern literary works.",
    author: "Prof. James Mitchell",
    rating: 4.5,
    downloads: 3.1,
    pages: 87,
    difficulty: "medium" as const,
  },
  {
    title: "World History Timeline",
    subject: "History",
    description: "Interactive timeline covering major events, civilizations, and turning points.",
    author: "Dr. Isabella Garcia",
    rating: 4.7,
    downloads: 2.9,
    pages: 142,
    difficulty: "easy" as const,
  },
];

const stats = [
  { number: "10K+", label: "Study Notes", icon: BookOpen },
  { number: "50K+", label: "Active Students", icon: Users },
  { number: "4.8★", label: "Average Rating", icon: Award },
  { number: "500K+", label: "Total Downloads", icon: TrendingUp },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNotes = selectedCategory === "all" 
    ? featuredNotes 
    : featuredNotes.filter(note => note.subject.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Learning Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Discover perfectly organized study materials, notes, and resources curated by experts. Learn smarter, not harder.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notes, subjects, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Explore Notes
              </button>
              <button className="px-8 py-3 bg-white/20 border border-white/40 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200">
                View All Subjects
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-xl md:text-2xl font-bold">{stat.number}</p>
                      <p className="text-sm text-gray-300">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Subject
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore thousands of notes and study materials organized by subject for easy access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className={`bg-gradient-to-r ${subject.color} h-24 flex items-center justify-center text-5xl`}>
                  {subject.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{subject.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-purple-600">{subject.count} materials</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Notes Section */}
      <section id="notes" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Study Materials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Handpicked notes and resources from top educators, verified and rated by students
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === "all"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              {["Mathematics", "Physics", "Chemistry", "Biology"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note, index) => (
              <NoteCard key={index} {...note} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 mx-auto">
              View All Notes
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose StudyHub?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to ace your exams and master your subjects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Organized & Categorized",
                description: "All notes are meticulously organized by subject and topic for easy navigation",
                icon: "📂",
              },
              {
                title: "Expert Curated",
                description: "Content verified and curated by experienced educators and top students",
                icon: "✨",
              },
              {
                title: "High Quality PDFs",
                description: "Professionally formatted notes with clear diagrams, tables, and examples",
                icon: "📄",
              },
              {
                title: "Community Rated",
                description: "Every note is rated by thousands of students - use the best ones",
                icon: "⭐",
              },
              {
                title: "Frequently Updated",
                description: "New notes and materials added daily to match latest syllabi",
                icon: "🔄",
              },
              {
                title: "100% Free Access",
                description: "Download and access all study materials without any hidden costs",
                icon: "🎁",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ace Your Exams?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of students who are already using StudyHub to improve their grades and master their subjects.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Start Learning Now
            </button>
            <button className="px-8 py-3 bg-white/20 border border-white/40 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200">
              Explore All Subjects
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
