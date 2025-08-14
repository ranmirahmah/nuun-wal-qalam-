import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl mb-4">Nuun Wal Qalam</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Dedicated to providing excellence in Islamic education, character development, 
              and academic achievement. Preparing students for success in this world and the hereafter.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80">
                    Jalan Pendidikan Islamiah 123,<br />
                    Bandar Ilmu, 50450<br />
                    Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-background/80">+60-3-2234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-background/80">info@nuunwalqalam.edu.my</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#profile" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#teachers" className="text-background/80 hover:text-background transition-colors">Faculty</a></li>
              <li><a href="#teaching-methods" className="text-background/80 hover:text-background transition-colors">Programs</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Admissions</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">News & Events</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Alumni</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/80 text-sm">
              © 2024 Nuun Wal Qalam Islamic Boarding School. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">Student Handbook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}