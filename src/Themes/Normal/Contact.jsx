import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("Submitting...");
    setStatusType("submitting");

    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.status === 200) {
        setStatus(result.message);
        setStatusType("success");
        reset();
      } else {
        setStatus("Something went wrong.");
        setStatusType("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again later.");
      setStatusType("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-blue-900 text-white px-6 md:px-16 py-12 flex items-center justify-center">

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">

        {/* LEFT SIDE (INFO) */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Let’s Connect
          </h1>

          <p className="text-gray-300 text-lg">
            Have a project, idea, or opportunity?
            I’d love to hear from you. Fill out the form and I’ll get back to you soon.
          </p>

          <div className="space-y-3 text-sm text-gray-400">
            <p>📧 Email: avinashchaurasiya901@gmail.com</p>
            <p>🌐 Portfolio: https://webdevavi96.netlify.app/</p>
            <p>💼 Open for freelance & full-time roles</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl">

          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>

          {/* STATUS */}
          {status && (
            <p
              className={`text-sm mb-4 font-medium ${statusType === "success"
                  ? "text-green-400"
                  : statusType === "error"
                    ? "text-red-400"
                    : "text-yellow-300"
                }`}
            >
              {status}
            </p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="John Doe"
                className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                placeholder="you@example.com"
                className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* SUBJECT */}
            <div>
              <label className="text-sm text-gray-300">Subject</label>
              <input
                type="text"
                {...register("subject", { required: "Subject is required" })}
                placeholder="Project discussion"
                className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
              />
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="4"
                {...register("message", { required: "Message is required" })}
                placeholder="Tell me about your idea..."
                className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg font-semibold bg-pink-500 hover:bg-pink-600 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;