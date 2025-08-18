import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function TeachersSection() {
  const teachers = [
    {
      name: "Dr. Ahmad Hassan",
      position: "Principal & Islamic Studies",
      education: "PhD in Islamic Theology, Al-Azhar University",
      experience: "25 years",
      specialties: ["Quran & Hadith", "Islamic Jurisprudence", "Leadership"],
      image: ""
    },
    {
      name: "Ustazah Fatimah Omar",
      position: "Arabic Language Department Head",
      education: "MA in Arabic Literature, University of Damascus",
      experience: "18 years",
      specialties: ["Classical Arabic", "Poetry", "Rhetoric"],
      image: ""
    },
    {
      name: "Prof. Ibrahim Malik",
      position: "Science Department Head",
      education: "PhD in Physics, University of Cambridge",
      experience: "20 years",
      specialties: ["Physics", "Mathematics", "Research Methods"],
      image: ""
    },
    {
      name: "Dr. Aisha Rahman",
      position: "Islamic History Teacher",
      education: "PhD in Islamic History, Oxford University",
      experience: "15 years",
      specialties: ["Early Islamic History", "Civilization Studies", "Research"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Ustaz Abdullah Yusuf",
      position: "Quran & Tajweed Instructor",
      education: "Ijazah in Quran Recitation, Madinah University",
      experience: "22 years",
      specialties: ["Quran Memorization", "Tajweed", "Spiritual Guidance"],
      image: ""
    },
    {
      name: "Ms. Sarah Ahmed",
      position: "English Literature Teacher",
      education: "MA in English Literature, Harvard University",
      experience: "12 years",
      specialties: ["Modern Literature", "Creative Writing", "Language Skills"],
      image: ""
    }
  ];

  return (
    <section id="teachers" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">Our Distinguished Faculty</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated educators who combine deep Islamic knowledge with academic excellence 
            to guide and inspire our students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={teacher.image} alt={teacher.name} />
                    <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl mb-2 text-primary">{teacher.name}</h3>
                  <p className="text-amber-700 mb-2">{teacher.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{teacher.education}</p>
                  <Badge variant="secondary" className="mb-4">
                    {teacher.experience} experience
                  </Badge>
                </div>
                <div>
                  <h4 className="mb-3 text-primary">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}