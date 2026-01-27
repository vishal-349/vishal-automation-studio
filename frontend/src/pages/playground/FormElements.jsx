import { useState } from "react";

const FormElements = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-8 py-10">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Form Elements Playground
      </h1>
      <p className="text-slate-600 mb-8 max-w-2xl">
        Practice Cypress automation on different form inputs, validations,
        disabled and read-only fields.
      </p>

      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-sm">
        <form onSubmit={handleSubmit} autoComplete="off">
          {/* Text Input */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Text Input (Required)
            </label>
            <input
              data-testid="text-input"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Input (Validation)
            </label>
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password (Min 6 characters)
            </label>
            <input
              data-testid="password-input"
              type="password"
              name="password"
              minLength={6}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Textarea */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Textarea
            </label>
            <textarea
              data-testid="textarea-input"
              name="about"
              rows="3"
              value={formData.about}
              onChange={handleChange}
              placeholder="Write something..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Read Only */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Read-only Input
            </label>
            <input
              data-testid="readonly-input"
              type="text"
              value="You cannot edit this"
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-slate-100 cursor-not-allowed"
            />
          </div>

          {/* Disabled */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Disabled Input
            </label>
            <input
              data-testid="disabled-input"
              type="text"
              disabled
              placeholder="Disabled field"
              className="w-full px-4 py-2 border rounded-lg bg-slate-100 cursor-not-allowed"
            />
          </div>

          {/* Auto-filled */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Auto-filled Input
            </label>
            <input
              data-testid="autofill-input"
              type="text"
              defaultValue="Auto filled value"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Submit */}
          <button
            data-testid="submit-button"
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Submit Form
          </button>

          {/* Success Message */}
          {submitted && (
            <p
              data-testid="success-message"
              className="mt-4 text-green-600 font-medium"
            >
              Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormElements;
