import { Mail, Phone, Clock, Building2, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      toast.success('Your message is successfully send')
     setFormData({ name: "",
    email: "",
    subject: "",
    message: "",})
  }

  return (
    <div className="container mx-auto min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg">
            Get in touch with our expert team for comprehensive asset management solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Building2 className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Main Office</h3>
                    <p className="text-slate-600">123 Asset Street, Financial District</p>
                    <p className="text-slate-600">New York, NY 10004</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-slate-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">info@assetmanagement.com</p>
                    <p className="text-slate-600">support@assetmanagement.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Connect With Us</h2>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-900">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-900">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-900">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-900">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button  type="submit" className="w-full bg-slate-900 hover:bg-slate-800">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Our Location</h2>
          <div className="aspect-video rounded-lg overflow-hidden relative h-[400px]">
            <img src="/placeholder.svg" alt="Office location map" className="w-full h-full object-cover" />
          </div>
        </div> */}

        {/* Department Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Investment Advisory</h3>
            <p className="text-slate-600 mb-4">Get expert advice on investment strategies and portfolio management</p>
            {/* <Button variant="outline" className="w-full">
              Contact Department
            </Button> */}
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Client Relations</h3>
            <p className="text-slate-600 mb-4">Dedicated support for all your account-related inquiries</p>
            {/* <Button variant="outline" className="w-full">
              Contact Department
            </Button> */}
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Technical Support</h3>
            <p className="text-slate-600 mb-4">24/7 technical assistance for platform-related issues</p>
            {/* <Button variant="outline" className="w-full">
              Contact Department
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

