import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import AuraCube from './AuraCube';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
        <section ref={containerRef} className="min-h-screen relative flex flex-col justify-between p-4 md:p-12 border-b-2 border-black overflow-hidden">
            <AuraCube />
            <header className="flex justify-between items-start mt-[20vh] md:mt-0 relative z-20">
                <div className="font-mono text-xs md:text-sm tracking-tighter">
                    <p>[001] PROFILE_INIT</p>
                    <p>LOC: CDMX_MX</p>
                    <p>STAT: ONLINE</p>
                </div>
                <div className="text-right font-mono text-xs md:text-sm">
                    <br><br> <p>DISPONIBLE PARA</p>
                        <p>PROYECTOS 2026</p>
                    </div>
                    </header>

                    <div className="relative z-10">
                        <motion.div style={{ y }}>
                            <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter mix-blend-difference">
                                ANGEL<br />
                                AGUILAR
                            </h1>
                        </motion.div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-black pt-8">
                            <div className="md:col-span-8">
                                <p className="text-2xl md:text-4xl font-medium leading-tight max-w-4xl">
                                    Software Engineer & AI Architect. <br />
                                    Construyendo sistemas inteligentes que operan 24/7.
                                </p>
                            </div>
                            <div className="md:col-span-4 flex flex-col justify-between">
                                <p className="font-mono text-sm text-gray-500 mb-8">
                                    Transformando lógica de negocio en Autonomous Agents y Scalable Architectures.
                                </p>
                                <a href="mailto:angel@tendenciadigital.io" className="group flex items-center gap-2 font-bold hover:gap-4 transition-all">
                                    CONTACT_PROTOCOL <ArrowDownRight className="group-hover:rotate-45 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>


                </section>
                );
};

                export default Hero;
