import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-amber-900 to-amber-800">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-cream-50 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-6 text-background">Nuun Wal Qalam</h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed text-background/90">
          Nurturing Islamic values and academic excellence since 1985. 
          Where knowledge meets spirituality, and character is built with wisdom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#profile"
            className="bg-background text-primary px-8 py-3 rounded-lg hover:bg-background/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="border-2 border-background text-background px-8 py-3 rounded-lg hover:bg-background hover:text-primary transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}