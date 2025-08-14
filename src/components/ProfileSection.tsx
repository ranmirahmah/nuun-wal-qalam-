import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Users, Award, Globe } from "lucide-react";

export function ProfileSection() {
  const stats = [
    { icon: BookOpen, label: "Years of Excellence", value: "39+" },
    { icon: Users, label: "Students", value: "500+" },
    { icon: Award, label: "Graduates", value: "2000+" },
    { icon: Globe, label: "Countries Represented", value: "15+" },
  ];

  return (
    <section id="profile" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">About Nuun Wal Qalam</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A prestigious Islamic boarding school dedicated to providing comprehensive education 
            that balances Islamic teachings with modern academic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop"
              alt="School campus"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl mb-6 text-primary">Our Mission</h3>
            <p className="text-foreground mb-6 leading-relaxed">
              To develop well-rounded Muslim individuals who excel in both Islamic knowledge and contemporary 
              sciences, equipped with strong moral values and leadership skills to contribute positively to society.
            </p>
            <h3 className="text-2xl mb-6 text-primary">Our Vision</h3>
            <p className="text-foreground leading-relaxed">
              To be a leading Islamic educational institution that produces graduates who are knowledgeable, 
              pious, and capable of addressing the challenges of the modern world while maintaining their 
              Islamic identity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <IconComponent className="h-8 w-8 text-amber-700 mx-auto mb-4" />
                  <div className="text-2xl mb-2 text-primary">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}