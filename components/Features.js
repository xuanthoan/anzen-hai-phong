function Features() {
    const amenities = [
        { icon: "waves", title: "Bể Bơi Vô Cực", desc: "Bể bơi 4 mùa đẳng cấp view toàn cảnh thành phố." },
        { icon: "dumbbell", title: "Phòng Gym Hiện Đại", desc: "Trang thiết bị nhập khẩu tiêu chuẩn quốc tế." },
        { icon: "flower", title: "Kid Garden", desc: "Không gian học tập, vui chơi thoáng mát, an toàn cho trẻ em." },
        { icon: "shopping-bag", title: "Trung Tâm Thương Mại", desc: "Quy tụ các thương hiệu mua sắm hàng đầu." },
        { icon: "shield-check", title: "An Ninh 24/7", desc: "Hệ thống camera và bảo vệ đa lớp an toàn tuyệt đối." },
        { icon: "car", title: "SPA Cao Cấp", desc: "Nghỉ dưỡng, hồi phục và phát triển trí tuệ, cảm xúc cư dân." }
    ];

    return (
        <section id="features" className="section-padding bg-slate-50 relative" data-name="features" data-file="components/Features.js">
            <div className="container-custom">
                <h2 className="section-title">Tiện Ích Đẳng Cấp 5 Sao</h2>
                <p className="section-subtitle">
                    Tận hưởng cuộc sống tiện nghi trọn vẹn ngay tại ngưỡng cửa. An Zen Residences mang đến hệ thống tiện ích đồng bộ phục vụ mọi nhu cầu của cư dân.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--secondary-color)] transition-colors duration-300">
                                <div className={`icon-${item.icon} text-3xl text-[var(--accent-color)] group-hover:text-white transition-colors duration-300`}></div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl relative h-96">
                    <img 
                        src="https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Amenities Banner" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8 md:p-12">
                        <div className="text-white max-w-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Trải Nghiệm Sống Nghỉ Dưỡng</h3>
                            <p className="text-gray-200">Không chỉ là nhà, An Zen Residences còn là nơi tái tạo năng lượng sau những ngày làm việc căng thẳng.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
