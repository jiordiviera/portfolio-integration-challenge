import { Button } from "../ui/button";

interface CaseStudy {
  tag: string;
  title: string;
  description: string;
  image: string;
  buttonColor: "orange" | "blue" | "green";
}

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      tag: "Figma",
      title: "Work name here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/work/work1.svg",
      buttonColor: "orange"
    },
    {
      tag: "React",
      title: "Work name here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/work/work2.svg",
      buttonColor: "blue"
    },
    {
      tag: "Node",
      title: "Work name here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/work/work3.svg",
      buttonColor: "green"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4 py-8 lg:py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Getting your first job in tech can be hard. Here are some tips and tricks
          that helped me land my first role.
        </p>
      </div>

      <div className="space-y-16">
        {caseStudies.map((study, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-8 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}>
            <div className="flex-1 space-y-4">
              <span className={`
                  ${study.buttonColor === 'orange' && 'bg-orange-100 text-orange-500'}
                  ${study.buttonColor === 'blue' && 'bg-blue-100 text-blue-500'}
                  ${study.buttonColor === 'green' && 'bg-green-100 text-green-500'}
                text-sm font-medium p-2 rounded`}>{study.tag}</span>
              <h3 className="text-2xl font-bold mt-[10px]">{study.title}</h3>
              <p className="text-gray-400">{study.description}</p>
              <Button
                variant="none"
                className={`
                  ${study.buttonColor === 'orange' && 'bg-orange-500 border-orange-500'}
                  ${study.buttonColor === 'blue' && 'bg-blue-500 border-blue-500'}
                  ${study.buttonColor === 'green' && 'bg-green-500 border-green-500'}
                `}
              >
                View case study
              </Button>
            </div>
            <div className="flex-1">
              <img
                src={study.image}
                alt={study.title}
                className="rounded-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
