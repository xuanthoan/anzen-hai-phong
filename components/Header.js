function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigateToSection = (sectionId) => {
        setIsMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Trang Chủ', id: 'home' },
        { name: 'Tổng Quan', id: 'overview' },
        { name: 'Vị Trí', id: 'location' },
        { name: 'Tiện Ích', id: 'features' },
        { name: 'Căn Hộ', id: 'apartments' },
        { name: 'Liên Hệ', id: 'contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`} data-name="header" data-file="components/Header.js">
            <div className="container-custom flex justify-between items-center px-4">
                <div 
                    className="flex items-center gap-2 cursor-pointer" 
                    onClick={() => navigateToSection('home')}
                >
                    <div className="w-10 h-10 bg-[var(--secondary-color)] rounded-full flex items-center justify-center text-white font-bold text-xl">L</div>
                    <div className={`font-bold text-xl ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                        AN ZEN <span className="text-[var(--secondary-color)]">RESIDENCES</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => navigateToSection(link.id)}
                            className={`font-medium text-sm uppercase tracking-wider hover:text-[var(--secondary-color)] transition-colors ${scrolled ? 'text-slate-700' : 'text-white/90'}`}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-[var(--secondary-color)]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className={isMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => navigateToSection(link.id)}
                            className="py-3 text-left font-medium text-slate-700 border-b border-gray-50 last:border-0 hover:text-[var(--secondary-color)]"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button 
                        className="mt-4 btn btn-primary w-full"
                        onClick={() => navigateToSection('contact')}
                    >
                        Nhận Báo Giá
                    </button>
                </div>
            )}
        </header>
    );
}
