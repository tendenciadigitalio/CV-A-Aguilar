import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "TENDENCIA DIGITAL",
            role: "FOUNDER & CTO",
            desc: "Agencia de AI Automation. Chatbots, RAG Systems y Flujos Enterprise.",
            stack: ["n8n", "Supabase", "React", "Docker"],
            link: "https://online.tendenciadigital.io/",
            year: "2005",
            color: "bg-[#7c3aed]", // Purple
            tagBg: "bg-white/20",
            tagText: "text-white"
        },
        {
            title: "FORWARD JS",
            role: "DJ-PRODUCER",
            desc: "Producción de Eventos Inmersivos. Audio, Iluminación y Tech Interactiva.",
            stack: ["Audio, Dj, Conceptual Producer", "3D Mapping & Liights", "Event Techn"],
            link: "https://forwardjs.com.mx/",
            year: "2000",
            color: "bg-[#3df23d]", // Green
            tagBg: "bg-black",
            tagText: "text-white"
        }
    ];

    return (
        <section className="border-b-2 border-black">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-between bg-white">
                    <div>
                        <h2 className="text-6xl font-black mb-12 tracking-tighter">VENTURES</h2>
                        <p className="font-mono text-sm max-w-xs text-gray-600">
                            Mi trayectoria emprendedora. Construyendo negocios tech sostenibles desde cero.
                        </p>
                    </div>
                    <div className="mt-24">
                        <span className="font-mono text-xs block mb-2 text-gray-400">[002] SELECTED_WORKS</span>
                        <div className="w-full h-[2px] bg-black opacity-10"></div>
                    </div>
                </div>

                <div className="flex flex-col">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block relative group border-b-2 border-black last:border-b-0 p-12 transition-all duration-300 overflow-hidden cursor-pointer bg-white 
                                ${idx === 0 ? 'lg:hover:bg-[#7c3aed]' : 'lg:hover:bg-[#3df23d]'}`}
                        >
                            {/* Grid background overlay - Only on Desktop Hover */}
                            <div className="absolute inset-0 grid-bg opacity-0 lg:group-hover:opacity-20 transition-opacity pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <span className={`font-mono text-xs border border-current px-4 py-1 rounded-full transition-colors
                                        ${idx === 0 ? 'lg:group-hover:text-white lg:group-hover:border-white' : 'lg:group-hover:text-black lg:group-hover:border-black'}`}>
                                        {project.year}
                                    </span>
                                    {/* Arrow: Always visible on mobile, hover-animated on desktop */}
                                    <ArrowUpRight className={`transition-all transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 ${idx === 0 ? 'lg:group-hover:text-white' : 'lg:group-hover:text-black'}`} />
                                </div>

                                <h3 className={`text-5xl font-black mb-4 tracking-tighter transition-colors ${idx === 0 ? 'lg:group-hover:text-white' : 'lg:group-hover:text-black'}`}>
                                    {project.title}
                                </h3>

                                <p className={`font-mono text-xs mb-8 uppercase tracking-widest transition-colors ${idx === 0 ? 'lg:group-hover:text-white/80' : 'lg:group-hover:text-black/70'}`}>
                                    {project.role}
                                </p>

                                <p className={`text-xl font-medium mb-10 max-w-md leading-tight transition-colors ${idx === 0 ? 'lg:group-hover:text-white' : 'lg:group-hover:text-black'}`}>
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <span
                                            key={tech}
                                            className={`font-mono text-[10px] px-3 py-1 uppercase tracking-wider transition-colors 
                                            ${idx === 0
                                                    ? 'bg-black text-white lg:group-hover:bg-white/20 lg:group-hover:text-white'
                                                    : 'bg-black text-white lg:group-hover:bg-black lg:group-hover:text-white'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

