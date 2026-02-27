import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        "service_4ghqo3o",
        "template_i1kmzam",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
        },
        "hFfpBGuSnbA8lWpPh"
      )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto max-w-4xl px-4">

          <h1 className="text-4xl font-bold text-center mb-6">
            Get in Touch
          </h1>

          {status === "success" && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md text-center">
              Message sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md text-center">
              Failed to send message. Please try again.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-soft space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block mb-1.5 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2.5 text-sm rounded-md border focus:ring-2 focus:ring-primary-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1.5 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full px-4 py-2.5 text-sm rounded-md border focus:ring-2 focus:ring-primary-500 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1.5 text-sm font-medium">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-2.5 text-sm rounded-md border focus:ring-2 focus:ring-primary-500 transition"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block mb-1.5 text-sm font-medium">
                Course Interested
              </label>
              <select
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm rounded-md border focus:ring-2 focus:ring-primary-500 transition"
              >
                <option value="" disabled>
                  Select a course
                </option>
                <option value="CEH">CEH</option>
                <option value="CPENT">CPENT</option>
                <option value="CSA">CSA</option>
                <option value="ISO 27001">ISO 27001</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1.5 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 text-sm rounded-md border focus:ring-2 focus:ring-primary-500 transition"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md text-white font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary-600 hover:bg-primary-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div>
              <Phone className="mx-auto mb-2" />
              +91 8309729774
            </div>
            <div>
              <Mail className="mx-auto mb-2" />
              info@hackerplus.in
            </div>
            <div>
              <MapPin className="mx-auto mb-2" />
              Hyderabad, India
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;