import { useState, useEffect, type FormEvent, type FocusEvent, type ChangeEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";
import { useForm } from "@formspree/react";
import { useNavigate } from "react-router-dom";

function FloatingInput({
  label,
  name,
  type = "text",
  id,
  options,
  required,
  validationMessage,
  pattern,
}: {
  label: string;
  name: string;
  type?: string;
  id: string;
  options?: string[];
  required?: boolean;
  validationMessage?: string;
  pattern?: string;
}) {
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  function validate(value: string) {
    if (required && !value.trim()) {
      return validationMessage || `${label} is required`;
    }
    if (value.trim() && type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address";
    }
    if (value.trim() && type === "url" && !/^https?:\/\/.+\..+/.test(value)) {
      return "Please enter a valid URL (e.g. https://example.com)";
    }
    if (value.trim() && type === "tel" && !/^[\d\s\-+().]{7,}$/.test(value)) {
      return "Please enter a valid phone number";
    }
    return "";
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    setTouched(true);
    setError(validate(e.target.value));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (touched) {
      setError(validate(e.target.value));
    }
  }

  const showError = touched && error;

  if (options) {
    return (
      <div>
        <div className="relative">
          <select
            id={id}
            name={name}
            defaultValue=""
            required={required}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b-1 text-black text-size-20 focus:outline-none focus:border-b-2 focus:ring-black/20 appearance-none transition-colors ${
              showError
                ? "border-red-500 focus:border-red-500"
                : "border-black/10 focus:border-black"
            }`}
          >
            <option value="" disabled hidden />
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <label
            htmlFor={id}
            className="pointer-events-none w-full pr-10 absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left text-size-20 transition-all duration-300 ease-out peer-focus:top-0 left-0 peer-focus:-translate-y-1/2 peer-focus:text-black/70 peer-[:not([value=''])]:top-1/2 peer-[:not([value=''])]:-translate-y-1/2 peer-[:not([value=''])]:text-black/70"
          >
            {label}
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2" />
          </label>
        </div>
        {showError && (
          <p className="text-xs text-red-600 mt-1 ml-1 animate-[fadeIn_0.2s_ease-out]">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          pattern={pattern}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder=" "
          className={`peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b-1 text-black text-size-20 focus:outline-none focus:border-b-2 focus:ring-black/20 placeholder-transparent transition-colors ${
            showError
              ? "border-red-500 focus:border-red-500"
              : "border-black/10 focus:border-black"
          }`}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-0 left-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-black/70 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-black/70"
        >
          {label}
        </label>
      </div>
      {showError && (
        <p className="text-xs text-red-600 mt-1 ml-1 animate-[fadeIn_0.2s_ease-out]">
          {error}
        </p>
      )}
    </div>
  );
}

const FORMSPREE_ID = "mnjbwnlw";

export function CTA() {
  const navigate = useNavigate();
  const [state, submitForm] = useForm(FORMSPREE_ID);

  useEffect(() => {
    if (state.succeeded) {
      navigate('/thank-you');
    }
  }, [state.succeeded, navigate]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;

    // Trigger native constraint validation to check all fields
    if (!form.checkValidity()) {
      e.preventDefault();
      // Focus the first invalid field to trigger its onBlur validation
      const firstInvalid = form.querySelector(":invalid") as HTMLElement | null;
      firstInvalid?.focus();
      firstInvalid?.blur();
      // Also blur all other invalids so their errors show
      form.querySelectorAll(":invalid").forEach((el) => {
        (el as HTMLElement).focus();
        (el as HTMLElement).blur();
      });
      // Re-focus the first one
      firstInvalid?.focus();
      return;
    }

    // Save form data locally before submission
    const formData = new FormData(form);
    const dataObj = Object.fromEntries(formData.entries());
    localStorage.setItem("omg_cta_form_data", JSON.stringify(dataObj));

    submitForm(e);
  }

  return (
    <section id="contact" className="py-32 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
            Let's fix the friction.
          </h2>
          <p className="text-xl md:text-2xl text-black/80 mb-12 font-medium">
            Give us 30 seconds. We'll give you a clear roadmap to a digital
            presence that actually converts.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-md mx-auto space-y-4 text-left"
          >

              <FloatingInput id="name" name="name" label="Your Name" required validationMessage="Please enter your name" />
              <FloatingInput id="email" name="email" label="Work Email" type="email" required validationMessage="Please enter your work email" />
              <FloatingInput id="phone" name="phone" label="Phone Number" type="tel" pattern="^[\d\s\-+().]{7,}$" />
              <FloatingInput id="website" name="website" label="Website URL" type="url" pattern="^https?:\/\/.+\..+" />
              <FloatingInput id="pain-points" name="pain_points" label="What are your pain points?" type="select" options={["Brand", "Digital", "Connection"]} />

              {state.errors && (
                <p className="text-sm text-red-700 text-center">
                  Something went wrong. Please check your inputs or try again.
                </p>
              )}

              <div className="flex items-start gap-3 pt-4">
                <input
                  id="cta-privacy"
                  name="privacy_consent"
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 accent-black"
                />
                <label htmlFor="cta-privacy" className="text-xs text-black/60 leading-relaxed">
                  By clicking this box, you agree to our{" "}
                  <a href="https://omgcreative.com.au/privacy/" className="underline hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                    privacy policies
                  </a>.
                  By clicking submit below, you consent to allow omgcreative.com.au to store and process the personal information submitted above to provide you the content requested.
                </label>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-black/90 transition-colors text-lg mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending..." : "Get Free Brand Audit"}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-4" />
              </button>
            </form>
        </motion.div>
      </div>
    </section>
  );
}
