function Contact() {
    const [status, setStatus] = React.useState('idle'); // idle, submitting, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding bg-[var(--primary-color)] text-white" data-name="contact" data-file="components/Contact.js">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                    <div className="md:w-5/12 bg-[var(--secondary-color)] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Liên Hệ Tư Vấn</h3>
                            <p className="text-white/80 mb-8 text-sm">Để lại thông tin để nhận bảng giá chi tiết và ưu đãi độc quyền 7%.</p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="icon-phone text-xl"></div>
                                    <span className="font-medium">0987 883 499</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="icon-mail text-xl"></div>
                                    <span className="font-medium">info@anzenresidences.org</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="icon-map-pin text-xl mt-1"></div>
                                    <span className="font-medium text-sm">Ven sông Lạch Tray, đường Nguyễn Văn Linh, Hải Phòng</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative circles */}
                        <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-white/10 rounded-full"></div>
                        <div className="absolute bottom-[-30px] left-[-30px] w-24 h-24 bg-white/10 rounded-full"></div>
                    </div>

                    <div className="md:w-7/12 p-8 md:p-10 bg-white">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <div className="icon-check text-green-600 text-3xl"></div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-2">Đăng Ký Thành Công!</h4>
                                <p className="text-slate-600">Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-transparent outline-none text-slate-800"
                                        placeholder="Nguyễn Văn A"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại</label>
                                    <input 
                                        type="tel" 
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-transparent outline-none text-slate-800"
                                        placeholder="0912 xxx xxx"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nhu cầu</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-transparent outline-none text-slate-800">
                                        <option>Quan tâm căn 1PN</option>
                                        <option>Quan tâm căn 2PN</option>
                                        <option>Quan tâm căn 3PN</option>
                                        <option>Tư vấn đầu tư</option>
                                    </select>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={status === 'submitting'}
                                    className="w-full btn btn-primary mt-4"
                                >
                                    {status === 'submitting' ? (
                                        <span className="flex items-center gap-2">
                                            <div className="icon-loader animate-spin"></div> Đang gửi...
                                        </span>
                                    ) : 'Gửi Thông Tin'}
                                </button>
                                <p className="text-xs text-center text-slate-500 mt-4">
                                    Thông tin của bạn được bảo mật tuyệt đối.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
