function Location() {
    return (
        <section id="location" className="section-padding bg-slate-50" data-name="location" data-file="components/Location.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h4 className="text-[var(--secondary-color)] font-bold tracking-wider uppercase mb-2">Vị Trí Vàng</h4>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Tâm Điểm Kết Nối Phồn Vinh</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Tọa lạc tại ven sông Lạch Tray, đường Nguyễn Văn Linh, quận An Dương, TP. Hải Phòng. Vị trí "Kế sông, cận thủy" mang lại vượng khí tài lộc cho gia chủ.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <div className="icon-map-pin text-blue-600 text-xl"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">Kết Nối Giao Thông</h4>
                                    <p className="text-sm text-slate-600">Nằm trên trục đường chính ra sân bay Cát Bi, kết nối dễ dàng đến trung tâm thành phố và các tỉnh lân cận.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <div className="icon-trees text-green-600 text-xl"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">Cảnh Quan Thiên Nhiên</h4>
                                    <p className="text-sm text-slate-600">Thừa hưởng không gian xanh mát và tầm nhìn thoáng đãng từ sông Lạch Tray rộng lớn.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                                    <div className="icon-school text-yellow-600 text-xl"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">Tiện Ích Ngoại Khu</h4>
                                    <p className="text-sm text-slate-600">Gần trường học các cấp, bệnh viện quốc tế, siêu thị Big C, trung tâm thương mại Aeon Mall, Vincom Plaza,...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg relative">
                        
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.623580872025!2d106.65096609999999!3d20.8469014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7bae587a0767%3A0x18f5840073eeb78f!2sAn%20Zen%20Residences!5e0!3m2!1svi!2s!4v1773221242990!5m2!1svi!2s" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
