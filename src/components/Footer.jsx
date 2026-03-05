import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-1 flex flex-col gap-4">
                        <h3 className="text-white font-semibold text-lg">
                            CS — Ticket System
                        </h3>

                        <p className="text-sm leading-relaxed max-w-xs">
                            CS — Ticket System is a simple support management platform designed to create, track, and manage tickets efficiently. It helps organize requests and improve communication between users and support teams.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>

                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white transition">About Us</a></li>
                            <li><a className="hover:text-white transition">Our Mission</a></li>
                            <li><a className="hover:text-white transition">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>

                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white transition">Products & Services</a></li>
                            <li><a className="hover:text-white transition">Customer Stories</a></li>
                            <li><a className="hover:text-white transition">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Information</h4>

                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a className="hover:text-white transition">Terms & Conditions</a></li>
                            <li><a className="hover:text-white transition">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Social Links</h4>

                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <FaXTwitter className="text-gray-400" />
                                <span>@CS — Ticket System</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaLinkedinIn className="text-gray-400" />
                                <span>@CS — Ticket System</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaFacebookF className="text-gray-400" />
                                <span>@CS — Ticket System</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-gray-400" />
                                <span>support@cst.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © 2026 CS — Ticket System. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;