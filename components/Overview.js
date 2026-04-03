function Overview() {
    return (
        <section id="overview" className="section-padding bg-white" data-name="overview" data-file="components/Overview.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-[var(--secondary-color)]/20 rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                            alt="Building detail" 
                            className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
                        />
                        <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                                    <div className="icon-building text-xl"></div>
                                </div>
                                <span className="font-bold text-slate-800">Chủ Đầu Tư Uy Tín</span>
                            </div>
                            <p className="text-sm text-slate-500">
                                Công ty TNHH Phát Triển Căn Hộ Nam Long - thành viên của Tập đoàn Nam Long, đơn vị phát triển bất động sản hàng đầu Việt Nam.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[var(--secondary-color)] font-bold tracking-wider uppercase mb-2">Tổng Quan Dự Án</h4>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Biểu Tượng Sống Mới Tại Hải Phòng</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Lakeside Garden là dự án ven sông Lạch Tray có vị trí hiếm hoi và đắc địa bậc nhất tại Hải Phòng - một bên dòng sông xanh mát, một bên trục đường Nguyễn Văn Linh sầm uất. Nơi hội tụ sinh khí tài lộc, vị trí phong thuỷ, sinh tài, an cư bền vững.
                        </p>
                        
                        <div className="space-y-4 mb-8">
                            {[
                                { label: "Diện tích khu đất", value: "15.000 m2" },
                                { label: "Quy mô", value: "3 toà tháp cao 18 tầng" },
                                { label: "Mật độ xây dựng", value: "36.5%" },
                                { label: "Đơn vị thi công", value: "Tập đoàn Nam Long" },
                                { label: "Pháp lý", value: "Sổ hồng lâu dài" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center border-b border-gray-100 pb-2">
                                    <div className="w-1/3 font-semibold text-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[var(--secondary-color)]"></div>
                                        {item.label}
                                    </div>
                                    <div className="w-2/3 text-slate-600">{item.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="text-slate-800 italic font-medium">
                                "Thiết kế tinh tế theo phong cách Singapore tối ưu ánh sáng, gió tự nhiên, tầm nhìn rộng."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
