import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Users, Heart, Lightbulb, Globe, Star } from "lucide-react";

export function TeachingMethodsSection() {
  const methods = [
    {
      icon: BookOpen,
      title: "Integrated Curriculum",
      description: "Seamlessly blend Islamic studies with modern academic subjects, ensuring students excel in both religious knowledge and contemporary sciences.",
      features: ["Quran & Hadith Studies", "Modern Sciences & Mathematics", "Language Arts", "Social Studies"]
    },
    {
      icon: Users,
      title: "Small Class Learning",
      description: "Maintain optimal teacher-to-student ratios to provide personalized attention and foster meaningful relationships.",
      features: ["Max 20 students per class", "Individualized learning plans", "Peer mentoring programs", "One-on-one guidance"]
    },
    {
      icon: Heart,
      title: "Character Development",
      description: "Focus on building strong Islamic character (Akhlaq) through practical application of Islamic values in daily life.",
      features: ["Daily Islamic practices", "Community service projects", "Leadership opportunities", "Moral reasoning exercises"]
    },
    {
      icon: Lightbulb,
      title: "Active Learning",
      description: "Employ interactive teaching methods that encourage critical thinking, discussion, and hands-on learning experiences.",
      features: ["Project-based learning", "Group discussions", "Research projects", "Practical applications"]
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Prepare students to be global citizens while maintaining their Islamic identity and values.",
      features: ["International exchanges", "Multicultural awareness", "Current affairs analysis", "Global Islamic community studies"]
    },
    {
      icon: Star,
      title: "Excellence Standards",
      description: "Maintain high academic and spiritual standards while supporting each student's individual growth and potential.",
      features: ["Regular assessments", "Progress tracking", "Achievement recognition", "Continuous improvement"]
    }
  ];

  return (
    <section id="teaching-methods" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">Our Teaching Philosophy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We employ a holistic approach that nurtures the mind, body, and soul, 
            combining traditional Islamic pedagogy with modern educational excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6 text-primary">Educational Excellence Through Islamic Values</h3>
            <p className="text-foreground mb-6 leading-relaxed">
              Our teaching methodology is rooted in the Quranic principle of seeking knowledge and the 
              prophetic tradition of comprehensive education. We believe that true education encompasses 
              not just academic achievement, but also spiritual growth, moral development, and practical life skills.
            </p>
            <p className="text-foreground leading-relaxed">
              By integrating Islamic teachings with modern pedagogical approaches, we create an environment 
              where students develop into well-rounded individuals prepared for both this world and the hereafter.
            </p>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop"
              alt="Students in classroom"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-8 w-8 text-amber-700" />
                    <CardTitle className="text-primary">{method.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-amber-800 text-background rounded-lg p-8 text-center">
          <h3 className="text-2xl mb-4">Join Our Educational Community</h3>
          <p className="text-xl mb-6 opacity-90">
            Experience education that prepares students for success in both worlds
          </p>
          <a
            href="#contact"
            className="bg-background text-amber-800 px-8 py-3 rounded-lg hover:bg-background/90 transition-colors inline-block"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}