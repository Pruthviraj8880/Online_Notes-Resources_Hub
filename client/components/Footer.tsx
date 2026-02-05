import { Mail, MessageSquare, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">📚</span>
              </div>
              <span className="font-bold text-lg text-gray-900">StudyHub</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your complete learning companion for organized notes and study materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#subjects" className="text-gray-600 hover:text-primary transition-colors">All Subjects</a></li>
              <li><a href="#notes" className="text-gray-600 hover:text-primary transition-colors">Browse Notes</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a></li>
              <li><a href="/" className="text-gray-600 hover:text-primary transition-colors">Home</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/" className="text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/" className="text-gray-600 hover:text-primary transition-colors">Support</a></li>
              <li><a href="/" className="text-gray-600 hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@studyhub.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Chat with us anytime</span>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="/" className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  <Twitter className="w-4 h-4 text-gray-600" />
                </a>
                <a href="/" className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  <Github className="w-4 h-4 text-gray-600" />
                </a>
                <a href="/" className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 StudyHub. All rights reserved. Made for students, by students.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</a>
              <a href="/" className="text-gray-600 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
