import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"
import { siteConfig } from "@/data/config"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together"
        />

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-[#94a3b8] mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${siteConfig.email}`}>
                <Button size="lg">Send Email</Button>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-[#111111] rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#94a3b8] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] text-[#f8fafc] focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#94a3b8] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] text-[#f8fafc] focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#94a3b8] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] text-[#f8fafc] focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
