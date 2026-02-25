import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // إذا كنتِ تستعملي Web3Forms حطي access_key ديالك هنا
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    // مثال بسيط (محاكاة نجاح الإرسال)
    const res = {
      success: true,
      message: "Message sent successfully",
    };

    if (res.success) {
      setResult(res.message);
      event.target.reset();
    } else {
      setResult("Something went wrong");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Connect with me
      </h4>

      <h2 className="text-center text-5xl font-Ovo">
        Get in touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! Please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6"
        ></textarea>

        <button
          type="submit"
          className="py-2 px-8 bg-black text-white rounded-full mx-auto block"
        >
          Submit now
        </button>

        <p className="mt-4 text-center">{result}</p>
      </form>
    </div>
  );
}