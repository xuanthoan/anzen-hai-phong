function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800" data-name="footer" data-file="components/Footer.js">
            <div className="container-custom px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                             <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-full flex items-center justify-center text-white font-bold text-lg">L</div>
                            <span className="text-xl font-bold tracking-wide">LAKESIDE <span className="text-[var(--secondary-color)]">GARDEN</span></span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Biểu tượng sống mới tại trung tâm thành phố Hải Phòng. Nơi an cư lý tưởng và cơ hội đầu tư sinh lời bền vững.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors">
                                <div className="icon-facebook text-xl"></div>
                            </a>
                            <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors">
                                <div className="icon-youtube text-xl"></div>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Liên Kết Nhanh</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><a href="#home" className="hover:text-[var(--secondary-color)] transition-colors">Trang chủ</a></li>
                            <li><a href="#overview" className="hover:text-[var(--secondary-color)] transition-colors">Tổng quan dự án</a></li>
                            <li><a href="#apartments" className="hover:text-[var(--secondary-color)] transition-colors">Sản phẩm căn hộ</a></li>
                            <li><a href="#location" className="hover:text-[var(--secondary-color)] transition-colors">Vị trí & Tiện ích</a></li>
                            <li><a href="#contact" className="hover:text-[var(--secondary-color)] transition-colors">Liên hệ tư vấn</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Thông Tin Liên Hệ</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex gap-3">
                                <div className="icon-map-pin text-[var(--secondary-color)] shrink-0"></div>
                                <span>Ven sông Lạch Tray, đường Nguyễn Văn Linh, An Dương, TP. Hải Phòng</span>
                            </li>
                            <li className="flex gap-3">
                                <div className="icon-phone text-[var(--secondary-color)] shrink-0"></div>
                                <span>0987 883 499</span>
                            </li>
                            <li className="flex gap-3">
                                <div className="icon-mail text-[var(--secondary-color)] shrink-0"></div>
                                <span>info@anzenresidences.org</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Đăng Ký Nhận Tin</h4>
                        <p className="text-slate-400 text-sm mb-4">Nhận thông tin cập nhật mới nhất về dự án và bảng hàng.</p>
                        <div className="flex">
                            <input type="email" placeholder="Email của bạn" className="bg-slate-800 text-white px-4 py-2 rounded-l w-full outline-none focus:ring-1 focus:ring-[var(--secondary-color)]" />
                            <button className="bg-[var(--secondary-color)] px-4 py-2 rounded-r hover:bg-yellow-700 transition-colors">
                                <div className="icon-send text-white"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; 2026 An Zen Residences. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Designed with <div className="icon-heart text-red-500 text-xs"></div> by Trickle
                    </p>
                </div>
            </div>
        </footer>
    );
}
