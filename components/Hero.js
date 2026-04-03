function Hero() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" data-name="hero" data-file="components/Hero.js">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1920" 
                    alt="Lakeside Garden Overview" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
            </div>

            <div className="relative z-10 container-custom px-4 text-center md:text-left pt-20">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1 bg-[var(--secondary-color)] text-white text-sm font-bold tracking-widest uppercase mb-4 rounded-sm animate-pulse">
                        Mở Bán Đợt 1
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        SỐNG ĐẲNG CẤP TẠI <br/>
                        <span className="text-[var(--secondary-color)]">AN ZEN RESIDENCES</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
                        Căn hộ cao cấp trung tâm Hải Phòng với tầm nhìn ra sông Lạch Tray tuyệt đẹp. 
                        Bàn giao nội thất hiện đại. Chiết khấu lên đến 7%.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button onClick={scrollToContact} className="btn btn-primary text-lg">
                            <span className="icon-calendar-check mr-2"></span>
                            Đăng Ký Tham Quan
                        </button>
                        <button onClick={() => document.getElementById('overview').scrollIntoView({behavior:'smooth'})} className="btn bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[var(--primary-color)] text-lg">
                            <span className="icon-info mr-2"></span>
                            Tìm Hiểu Thêm
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 justify-center md:justify-start text-white/80">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-3xl font-bold text-white">33Tr</span>
                            <span className="text-sm">Giá từ / m2</span>
                        </div>
                        <div className="h-10 w-px bg-white/20"></div>
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-3xl font-bold text-white">887</span>
                            <span className="text-sm">Căn hộ</span>
                        </div>
                        <div className="h-10 w-px bg-white/20"></div>
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-3xl font-bold text-white">Q4/26</span>
                            <span className="text-sm">Bàn giao</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
