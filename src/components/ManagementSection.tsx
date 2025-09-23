import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback 
  // AvatarImage 
} from "./ui/avatar";
import { Mail, Phone } from "lucide-react";

export function ManagementSection() {
  const management = [
    {
      name: "Ustaz Shakirullah Ajishafe",
      position: "Teacher",
      // background: "Former Education Minister with 30+ years in educational leadership",
       email: "chairman@nuunwalqalam.edu",
      //  phone: "+60-12-345-6789",
      // image: ""
    },
    {
      name: "Ustaz Shakirullah Ajishafe",
      position: "Teacher",
      // background: "Leading educator with expertise in Islamic Studies and modern pedagogy",
       email: "principal@nuunwalqalam.edu",
      //  phone: "+60-12-345-6790",
      // image: ""
    },
    {
      name: "Ustaz Shakirullah Ajishafe",
      position: "Teacher",
      // background: "Curriculum specialist with 20 years in Islamic education development",
       email: "vpacademic@nuunwalqalam.edu",
      //  phone: "+60-12-345-6791",
      // image: ""
    },
    {
      name: "Ustaz Shakirullah Ajishafe",
      position: "Vice Principal (Student Affairs)",
      // background: "Student development expert focusing on character building and welfare",
       email: "vpstudent@nuunwalqalam.edu",
      //  phone: "+60-12-345-6792",
      // image: ""
    },
    {
      name: "Ustaz Shakirullah Ajishafe",
      position: "Teacher",
      // background: "Administrative professional with expertise in student records and admissions",
      email: "registrar@nuunwalqalam.edu",
      // phone: "+60-12-345-6793",
      // image: ""
    },
    {
      name: "Ustaz Shakirullah Ajishafe",
      position: "Teacher",
      // background: "Financial management specialist ensuring sustainable operations",
      email: "finance@nuunwalqalam.edu",
    //  phone: "+60-12-345-6794",
      // image: ""
    }
  ];

  return (
    <section id="management" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experienced management team provides strategic direction and ensures 
            the highest standards of Islamic education and institutional excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {management.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    {/* <AvatarImage src={member.image} alt={member.name} /> */}
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl mb-2 text-primary">{member.name}</h3>
                  <p className="text-amber-700 mb-4">{member.position}</p>
                </div>
                
                <div className="space-y-4">
                  {/* <p className="text-foreground text-sm leading-relaxed">{member.background}</p> */}
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      { <span>{member.email}</span> }
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      { <span>{member.phone}</span> }
                    </div>
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