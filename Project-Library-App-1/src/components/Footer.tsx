const Footer = () => {
  return (
    <footer className="w-full border-t bg-white py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-500">
          © 2026 <strong>Library App</strong>. All rights reserved.
        </div>

        <div className="flex gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-primary transition-colors">
            Kebijakan Privasi
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Syarat & Ketentuan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
