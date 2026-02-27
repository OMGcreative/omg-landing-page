{/* ---- litners ignore all errors in this file --- */}

{/* ─── CONTACT / FOOTER ─── */}
      <section className="py-16 md:py-24 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's chat</h2>
              <div className="space-y-2 text-secondary">
                <p className="font-semibold text-primary">OMG! Creative</p>
                <p>Level 2, 10 Queens Road*</p>
                <p>Melbourne Victoria 3004</p>
                <p className="pt-4">
                  <a href="tel:0396540532" className="hover:text-primary transition-colors">
                    03 9654 0532
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@omgcreative.com.au" className="hover:text-primary transition-colors">
                    hello@omgcreative.com.au
                  </a>
                </p>
                <p className="pt-2">
                  <a
                    href="https://www.google.com/maps/place/OMG!+Creative/@-37.8382331,144.9743713,19.44z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-orange-400 transition-colors text-sm"
                  >
                    *Entry via Queens Lane &rarr;
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <FloatingInput id="contact-email" name="contact_email" label="Email*" type="email" required validationMessage="Please enter your email" />
              <div className="grid grid-cols-2 gap-4">
                <FloatingInput id="contact-first" name="contact_first_name" label="First Name*" required validationMessage="Please enter your first name" />
                <FloatingInput id="contact-last" name="contact_last_name" label="Last Name*" required validationMessage="Please enter your last name" />
              </div>
              <FloatingInput id="contact-phone" name="contact_phone" label="Phone Number*" type="tel" required validationMessage="Please enter your phone number" />
              <FloatingInput id="contact-industry" name="contact_industry" label="Industry*" required validationMessage="Please enter your industry" />
              <FloatingInput id="contact-company" name="contact_company" label="Company Name*" required validationMessage="Please enter your company name" />

              <div className="relative">
                <textarea
                  id="contact-message"
                  name="contact_message"
                  rows={3}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 bg-white/5 border border-white/10 rounded-xl text-primary focus:outline-none focus:border-accent placeholder-transparent transition-colors resize-y"
                />
                <label
                  htmlFor="contact-message"
                  className="pointer-events-none absolute left-4 top-4 text-secondary/70 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-1 peer-focus:scale-75 peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-accent"
                >
                  Your message (optional)
                </label>
              </div>

              <button
                type="button"
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-orange-600 transition-colors text-lg mt-2 uppercase tracking-wider"
              >
                Submit
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-4" />
              </button>
            </div>
          </div>
        </div>
      </section>