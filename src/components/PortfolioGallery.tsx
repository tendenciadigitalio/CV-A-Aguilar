import { motion } from 'framer-motion';

const PortfolioGallery = () => {
    const items = [
        { img: "2fc6b2a5-39fc-4917-b025-be93fdf03f5a_3840w.webp", title: "IA_HOME_DESIGNER", role: "DEVELOPER", lic: "#0", edu: "M", exp: "IOS/ANDROID" },
        { img: "bacardimockup.png", title: "BACARDI_MUNDIALES 2026", role: "DEVELOPER", lic: "#0", edu: "M", exp: "IOS/ANDROID" },
        { img: "8b8dcf08-7b00-4eaf-964b-e37f40130289_3840w.webp", title: "NEO_CORE", role: "Interface DEVELOPER", lic: "#042-BETA", edu: "STANFORD", exp: "8 YEARS" },
        { img: "92d0c40f-f813-47fd-a53a-5def9c2ca85c_3840w.webp", title: "VOID_TRADING", role: "DEVELOPER UI/UX DESIGNER", lic: "#992-GAMMA", edu: "OXFORD", exp: "15 YEARS" },
        { img: "a7491ea5-1a7a-4f23-a5e0-d0f3c352111c_3840w.jpg", title: "IMGO APP", role: "UI/UX DESIGNER", lic: "#777-DELTA", edu: "CALTECH", exp: "5 YEARS" },
        { img: "c1696396-99ab-4e5f-abd0-3a963c1ff85d_3840w.webp", title: "AURA_VISION", role: "GRAPHIC DESIGNER", lic: "#101-EPSILON", edu: "HARVARD", exp: "20 YEARS" },
        { img: "c5de8f30-667f-4543-ba20-74a32c64273e_3840w.jpg", title: "CYBER_CHEETAH", role: "GRAPHIC DESIGNER", lic: "#555-ZETA", edu: "ETH ZÜRICH", exp: "25 YEARS" },
        { img: "d7f47507-efc2-4161-9420-12ce153bbe39_3840w.webp", title: "SEO CONCEPT", role: "WEB SEO OPTIMIZER", lic: "#222-ETA", edu: "NASA TECH", exp: "10 YEARS" },
        { img: "fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_3840w.jpg", title: "ZEN__DOMOTICA_HOUSE", role: "CONCEPT DESIGNER", lic: "#333-THETA", edu: "TOKYO UNI", exp: "30 YEARS" },
    ];

    return (
        <section className="p-12 md:p-12 bg-white border-b-2 border-black">
            <div className="mb-12">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">MI PORTAFOLIO</h2>
                <div className="w-24 h-1 bg-black" />
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group overflow-hidden break-inside-avoid"
                    >
                        <img
                            src={`/portafolio/${item.img}`}
                            alt={item.title}
                            className="w-full transition-all duration-500 transform group-hover:scale-105"
                        />

                        <div className="group-hover:opacity-100 transition-opacity duration-200 flex flex-col bg-[#ff0000]/90 opacity-0 px-6 py-6 absolute top-0 right-0 bottom-0 left-0 justify-end cursor-pointer">
                            <div className="font-tech text-white">
                                <p className="text-2xl font-bold uppercase mb-1">{item.title}</p>
                                <p className="text-sm uppercase mb-4">{item.role}</p>
                                <div className="text-xs space-y-1 opacity-80 border-t border-white pt-2">

                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioGallery;
