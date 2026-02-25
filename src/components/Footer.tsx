export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="text-3xl font-bold tracking-tighter mb-6">
              OMG<span className="text-accent">!</span>
            </div>
            <p className="text-secondary max-w-sm">
              We build digital assets that lead, perform, and drive growth. Stop
              losing customers to a dated digital presence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-secondary not-italic space-y-2 text-sm">
              <p>Level 2, 10 Queens Road*</p>
              <p>Melbourne Victoria 3004</p>
              <p className="text-xs opacity-50">*Entry via Queens Lane</p>
              <p className="pt-4">
                <a
                  href="tel:0396540532"
                  className="hover:text-primary transition-colors"
                >
                  03 9654 0532
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@omgcreative.com.au"
                  className="hover:text-primary transition-colors"
                >
                  hello@omgcreative.com.au
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="text-secondary space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  DesignRush
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-secondary">
          <p>
            &copy; {new Date().getFullYear()} OMG! Creative. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
