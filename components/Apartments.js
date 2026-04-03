function Apartments() {
    const apartments = [
        {
            type: "Căn 1 Phòng Ngủ",
            area: "48m2 - 55m2",
            price: "Từ 1.5 Tỷ",
            desc: "Thiết kế tối ưu công năng, phù hợp cho gia đình trẻ.",
            features: ["1 Phòng ngủ", "1 WC", "1 Logia"],
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
            highlight: false
        },
        {
            type: "Căn 2 Phòng Ngủ",
            area: "65m2",
            price: "Từ 1.9 Tỷ",
            desc: "Không gian rộng rãi, căn góc view sông thoáng mát.",
            features: ["2 Phòng ngủ", "2 WC", "Phòng khách lớn"],
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600",
            highlight: true
        },
        {
            type: "Căn 3 Phòng Ngủ",
            area: "75m2 - 80m2",
            price: "Từ 2.3 Tỷ",
            desc: "Không gian rộng rãi, view sông. Giải pháp đầu tư và an cư 2 trong 1 thông minh.",
            features: ["3 Phòng ngủ", "3 WC", "Phòng khách lớn"],
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600",
            highlight: false
        }
    ];

    return (
        <section id="apartments" className="section-padding bg-white" data-name="apartments" data-file="components/Apartments.js">
            <div className="container-custom">
                <h2 className="section-title">Các Loại Hình Căn Hộ</h2>
                <p className="section-subtitle">
                    Thiết kế đa dạng diện tích, đáp ứng mọi nhu cầu của khách hàng. Nội thất bàn giao cao cấp sẵn liền tường.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {apartments.map((apt, index) => (
                        <div key={index} className={`rounded-xl overflow-hidden border transition-all duration-300 flex flex-col ${apt.highlight ? 'border-[var(--secondary-color)] shadow-xl transform md:-translate-y-4' : 'border-gray-200 shadow-lg hover:shadow-xl'}`}>
                            {apt.highlight && (
                                <div className="bg-[var(--secondary-color)] text-white text-center py-2 font-bold text-sm uppercase tracking-wider">
                                    Được Quan Tâm Nhất
                                </div>
                            )}
                            <div className="h-56 overflow-hidden relative group">
                                <img 
                                    src={apt.image} 
                                    alt={apt.type} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-800 mb-1">{apt.type}</h3>
                                <div className="text-[var(--secondary-color)] font-bold text-2xl mb-4">{apt.price}</div>
                                
                                <p className="text-slate-600 mb-6 text-sm flex-1">{apt.desc}</p>
                                
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-2">
                                        <span className="text-slate-500">Diện tích</span>
                                        <span className="font-semibold text-slate-800">{apt.area}</span>
                                    </div>
                                    {apt.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                            <div className="icon-check text-green-500 text-base"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <button 
                                    onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}
                                    className={`w-full py-3 rounded font-medium transition-colors ${apt.highlight ? 'bg-[var(--primary-color)] text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
                                >
                                    Đăng Ký Tư Vấn
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
