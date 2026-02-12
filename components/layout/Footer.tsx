import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="relative h-8 w-32 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=120&h=40&fit=crop"
                alt="Ricilix Logo"
                fill
                className="object-contain brightness-200"
              />
            </div>
            <p className="text-neutral-400 text-sm">
              Transforming businesses through intelligent automation and AI-driven solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition">Business Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition">CRM Optimization</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Website Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white transition">AI Integration</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/" className="hover:text-white transition">Case Studies</Link></li>
              <li><Link href="/" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400">© 2024 Ricilix. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-neutral-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-sm text-neutral-400 hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;