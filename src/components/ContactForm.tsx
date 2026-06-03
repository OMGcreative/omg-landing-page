import { useState, useEffect, type FormEvent, type FocusEvent, type ChangeEvent } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useForm } from "@formspree/react";
import { useNavigate } from "react-router-dom";

interface FieldConfig {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "select";
  required?: boolean;
  validationMessage?: string;
  pattern?: string;
  options?: string[];
  halfWidth?: boolean;
}

function FloatingInput({
  label,
  name,
  type = "text",
  id,
  options,
  required,
  validationMessage,
  pattern,
}: FieldConfig) {
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  function validate(value: string) {
    if (required && !value.trim()) {
      return validationMessage || `${label.replace("*", "")} is required`;
    }
    if (value.trim() && type === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Please enter a valid email address";
      }
      const domain = value.split("@")[1]?.toLowerCase().trim();
      const blockedDomains = [
        "gmail.com", "googlemail.com",
        "hotmail.com", "hotmail.co.uk", "hotmail.fr",
        "yahoo.com", "yahoo.com.au", "yahoo.co.uk",
        "outlook.com", "icloud.com", "aol.com", "zoho.com",
        "mail.com", "gmx.com", "yandex.com", "protonmail.com", "proton.me",
        "live.com", "live.com.au", "msn.com",
        "bigpond.com", "bigpond.net.au", "optusnet.com.au"
      ];
      if (blockedDomains.includes(domain)) {
        return "Please use your work email (generic/free domains are not allowed)";
      }
    }
    if (value.trim() && type === "url") {
      const urlRegex = /^[^!*'();:@&=+$,/?%#\[\]\s]{2,}\.[^!*'();:@&=+$,/?%#\[\]\s]{2,}$/;
      if (!urlRegex.test(value)) {
        return "Please enter a valid URL (e.g. example.com)";
      }
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
    setHasValue(!!e.target.value);
    if (touched) {
      setError(validate(e.target.value));
    }
  }

  const showError = touched && error;

  if (options) {
    return (
      <div className="w-full">
        <div className="relative">
          <select
            id={id}
            name={name}
            defaultValue=""
            required={required}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b text-black focus:outline-none focus:border-b-2 appearance-none transition-colors ${
              showError ? "border-red-600 focus:border-red-600" : "border-black/10 focus:border-black"
            }`}
          >
            <option value="" disabled hidden />
            {options.map((opt) => (
              <option key={opt} value={opt} className="bg-white text-black">
                {opt}
              </option>
            ))}
          </select>
          <label
            htmlFor={id}
            className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-black/70 ${
              hasValue ? "top-0 translate-y-0 scale-75 text-black/70" : ""
            }`}
          >
            {label}
          </label>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" />
        </div>
        {showError && (
          <p className="text-xs text-red-700 mt-1 ml-1 font-medium animate-[fadeIn_0.2s_ease-out]">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type === "url" ? "text" : type}
          required={required}
          pattern={pattern}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder=" "
          className={`peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b text-black focus:outline-none focus:border-b-2 placeholder-transparent transition-colors ${
            showError ? "border-red-600 focus:border-red-600" : "border-black/10 focus:border-black"
          }`}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-black/70 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-black/70"
        >
          {label}
        </label>
      </div>
      {showError && (
        <p className="text-xs text-red-700 mt-1 ml-1 font-medium animate-[fadeIn_0.2s_ease-out]">
          {error}
        </p>
      )}
    </div>
  );
}

const BRAND_FORM_FIELDS: FieldConfig[] = [
  { id: "name", name: "name", label: "Your Name", required: true, validationMessage: "Please enter your name" },
  { id: "email", name: "email", label: "Work Email", type: "email", required: true, validationMessage: "Please enter your work email" },
  { id: "phone", name: "phone", label: "Phone Number", type: "tel", required: true, pattern: "^[\\d\\s\\-+().]{7,}$" },
  { id: "website", name: "website", label: "Website URL", type: "url", required: true, pattern: "^[^!*'();:@&=+$,/?%#\\[\\]\\s]{2,}\\.[^!*'();:@&=+$,/?%#\\[\\]\\s]{2,}$" },
  { id: "pain-points", name: "pain_points", label: "What are your pain points?", type: "select", required: true, options: ["Brand", "Digital", "Connection"] }
];

const DIGITAL_FORM_FIELDS: FieldConfig[] = [
  { id: "ud-first-name", name: "first_name", label: "First Name*", required: true, halfWidth: true },
  { id: "ud-last-name", name: "last_name", label: "Last Name*", required: true, halfWidth: true },
  { id: "ud-email", name: "email", label: "Email*", type: "email", required: true },
  { id: "ud-phone", name: "phone", label: "Phone Number", type: "tel", required: true, pattern: "^[\\d\\s\\-+().]{7,}$" },
  { id: "ud-url", name: "website", label: "Business URL", type: "url", required: true, pattern: "^[^!*'();:@&=+$,/?%#\\[\\]\\s]{2,}\\.[^!*'();:@&=+$,/?%#\\[\\]\\s]{2,}$" },
  { id: "ud-company", name: "company", label: "Company Name*", required: true },
  { id: "ud-frustration", name: "frustration", label: "What is your biggest digital frustration?", type: "select", required: true, options: [
    "My website looks dated",
    "Poor mobile experience",
    "Low conversion rates",
    "Brand doesn't reflect our quality",
    "Not sure where to start"
  ]}
];

const FORM_CONFIGS = {
  brand: {
    formspreeId: "mnjbwnlw",
    storageKey: "omg_cta_form_data",
    redirectUrl: "/thank-you-brand",
    fields: BRAND_FORM_FIELDS,
    widthClass: "max-w-md",
    buttonText: "Get Free Brand Audit",
    submittingText: "Sending...",
    buttonClass: "group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-black/90 transition-colors text-lg mt-4 disabled:opacity-60 disabled:cursor-not-allowed",
    checkboxId: "cta-privacy",
  },
  digital: {
    formspreeId: "mbdawnrj",
    storageKey: "omg_uyd_form_data",
    redirectUrl: "/thank-you-digital",
    fields: DIGITAL_FORM_FIELDS,
    widthClass: "max-w-lg",
    buttonText: "Submit",
    submittingText: "Sending…",
    buttonClass: "group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-black/90 transition-colors text-lg mt-4 uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed",
    checkboxId: "ud-privacy",
  }
};

export type FormType = "brand" | "digital";

export function ContactForm({ formType }: { formType: FormType }) {
  const navigate = useNavigate();
  const config = FORM_CONFIGS[formType];
  const [state, submitForm] = useForm(config.formspreeId);

  useEffect(() => {
    if (state.succeeded) {
      navigate(config.redirectUrl);
    }
  }, [state.succeeded, navigate, config.redirectUrl]);

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
    localStorage.setItem(config.storageKey, JSON.stringify(dataObj));

    submitForm(e);
  }

  // Render fields grouping adjacent halfWidth fields
  const renderedFields: React.ReactNode[] = [];
  let i = 0;
  while (i < config.fields.length) {
    const current = config.fields[i];
    if (current.halfWidth && i + 1 < config.fields.length && config.fields[i + 1].halfWidth) {
      const next = config.fields[i + 1];
      renderedFields.push(
        <div key={`${current.id}-${next.id}`} className="grid grid-cols-2 gap-4">
          <FloatingInput {...current} />
          <FloatingInput {...next} />
        </div>
      );
      i += 2;
    } else {
      renderedFields.push(
        <FloatingInput key={current.id} {...current} />
      );
      i += 1;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${config.widthClass} mx-auto space-y-4 text-left`}
    >
      {renderedFields}

      {state.errors && (
        <p className="text-sm text-red-700 text-center">
          Something went wrong. Please check your inputs or try again.
        </p>
      )}

      <div className="flex items-start gap-3 pt-4">
        <input
          id={config.checkboxId}
          name="privacy_consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 accent-black"
        />
        <label htmlFor={config.checkboxId} className="text-xs text-black/60 leading-relaxed">
          By clicking this box, you agree to our{" "}
          <a
            href="https://omgcreative.com.au/privacy/"
            className="underline hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policies
          </a>
          . By clicking submit below, you consent to allow omgcreative.com.au to store and process the
          personal information submitted above to provide you the content requested.
        </label>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className={config.buttonClass}
      >
        {state.submitting ? config.submittingText : config.buttonText}
        <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-4" />
      </button>
    </form>
  );
}
