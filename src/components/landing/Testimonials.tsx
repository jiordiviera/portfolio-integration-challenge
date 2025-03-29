interface Testimonial {
  content: string;
  clientName: string;
  clientImage: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientName: "Client Name",
      clientImage: "/testimonials/client1.svg"
    },
    {
      content: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientName: "Client Name",
      clientImage: "/testimonials/client2.svg"
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientName: "Client Name",
      clientImage: "/testimonials/client3.avg"
    },
    {
      content: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientName: "Client Name",
      clientImage: "/testimonials/client4.svg"
    }
  ];

  return (
    <section className="bg-foreground">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-background">Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative p-6 rounded-lg">
              {/* Gradient border container */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-foreground/80 to-foreground/70  border border-[#2D2D2D]" />

              {/* Quote mark on the border */}
              <div className="absolute -top-4 left-6 px-2 bg-foreground">
                <span className="text-4xl text-gray-600">"</span>
              </div>

              {/* Content container */}
              <div className="relative space-y-6 p-6 rounded-lg">
                <p className="text-gray-300">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.clientImage}
                    alt={testimonial.clientName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="font-medium text-background">{testimonial.clientName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
