import { Button } from "../ui/button";
import { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="bg-foreground py-16">
      <div className="container mx-auto px-4 lg:py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-background">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Please enter your email"
              className="w-full p-3 rounded-md bg-background text-foreground"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="mobile" className="block text-sm text-gray-400">Mobile</label>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter mobile"
              className="w-full p-3 rounded-md bg-background text-foreground"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm text-gray-400">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Enter your message"
              className="w-full p-3 rounded-md bg-background text-foreground resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            Submit
          </Button>
        </form>

        <div className="text-center mt-16 text-sm text-gray-400">
          Made with ❤️
        </div>
      </div>
    </section>
  );
}
