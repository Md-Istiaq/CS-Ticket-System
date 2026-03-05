import { useState } from "react";

const Navbar = ({ onNewTicket }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-14">
                    <span className="text-base font-bold text-gray-900">
                        CS — Ticket System
                    </span>

                    <div className="hidden md:flex items-center gap-6">
                        {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map((item) => (
                            <a key={item} href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                {item}
                            </a>
                        ))}
                        <button
                            onClick={onNewTicket}
                            className="px-6 py-3 text-sm font-semibold text-white rounded-xl 
  bg-gradient-to-r from-purple-700 to-purple-400 
  hover:opacity-90 transition-all"
                        >
                            + New Ticket
                        </button>
                    </div>

                    <button className="md:hidden text-gray-500" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            }
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-gray-100 pt-3">
                        {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map((item) => (
                            <a key={item} href="#" className="text-sm text-gray-600">{item}</a>
                        ))}
                        <button onClick={() => { onNewTicket(); setMenuOpen(false); }}
                            className="w-full px-4 py-2 text-sm font-semibold bg-violet-600 text-white rounded-md">
                            + New Ticket
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
