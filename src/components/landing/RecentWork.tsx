import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Work {
  title: string;
  description: string;
  image: string;
}

export default function RecentWork() {
  const works: Work[] = [
    {
      title: "Work name here",
      description: "Labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/work/recent1.svg"
    },
    {
      title: "Work name here",
      description: "Tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt u",
      image: "/work/recent2.svg"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4 lg:py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Solving user & business problems since last 15+ years.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <div key={index} className="space-y-4">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold">{work.title}</h3>
              <p className="text-gray-400">{work.description}</p>
              <Button variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-none">
                Know more
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
