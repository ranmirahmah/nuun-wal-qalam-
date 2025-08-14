import { Card, CardContent } from "./ui/card";

export function HistorySection() {
  const milestones = [
    {
      year: "1985",
      title: "Foundation",
      description: "Nuun Wal Qalam Islamic Boarding School was established with 50 students and 5 teachers."
    },
    {
      year: "1990",
      title: "First Graduation",
      description: "Our first batch of 25 students graduated with excellent academic and Islamic credentials."
    },
    {
      year: "1995",
      title: "Campus Expansion",
      description: "New dormitories and classrooms were built to accommodate 200 students."
    },
    {
      year: "2000",
      title: "Accreditation",
      description: "Received full accreditation from the Ministry of Education and Islamic Affairs."
    },
    {
      year: "2005",
      title: "International Program",
      description: "Launched international student exchange programs with schools in Malaysia and Egypt."
    },
    {
      year: "2010",
      title: "Technology Integration",
      description: "Introduced modern technology and digital learning platforms across all departments."
    },
    {
      year: "2015",
      title: "Research Center",
      description: "Established the Islamic Studies Research Center for advanced scholarship."
    },
    {
      year: "2020",
      title: "Online Learning",
      description: "Successfully transitioned to hybrid learning model during global challenges."
    }
  ];

  return (
    <section id="history" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to becoming a leading Islamic educational institution, 
            discover the milestones that shaped our legacy.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-amber-200"></div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-amber-700 rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-2xl text-amber-700 mb-2">{milestone.year}</div>
                      <h3 className="text-xl mb-3 text-primary">{milestone.title}</h3>
                      <p className="text-foreground leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}