const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2 flex flex-col gap-3">
                        <h3 className="text-white font-bold text-sm">CS — Ticket System</h3>
                        <p className="text-xs leading-relaxed max-w-xs">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-3">Company</h4>
                        <ul className="flex flex-col gap-2">
                            {["About Us", "Our Mission", "Contact Salad"].map((item) => (
                                <li key={item}><a href="#" className="text-xs hover:text-white transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-3">Services</h4>
                        <ul className="flex flex-col gap-2">
                            {["Products & Services", "Customer Stories", "Download Apps"].map((item) => (
                                <li key={item}><a href="#" className="text-xs hover:text-white transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Information + Social */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h4 className="text-white text-sm font-semibold mb-3">Information</h4>
                            <ul className="flex flex-col gap-2">
                                {["Privacy Policy", "Terms & Conditions", "Join Us"].map((item) => (
                                    <li key={item}><a href="#" className="text-xs hover:text-white transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-semibold mb-3">Social Links</h4>
                            <ul className="flex flex-col gap-2">
                                {["@CS — Ticket System", "@CS — Ticket System", "@CS — Ticket System", "support@cat.com"].map((item, i) => (
                                    <li key={i}><a href="#" className="text-xs hover:text-white transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center">
                    <p className="text-xs text-gray-500">© 2025 CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
