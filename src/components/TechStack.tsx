const TechStack = () => {
    const stack = [
        { category: "CORE", tools: ["React / Next.js", "TypeScript", "Node.js", "Python", "HTML/CSS", "javascript", "Dart", "Mysql, Mariadb, Postgresql", "Wordpress,Woocommerce"] },
        { category: "AI & AUTO", tools: ["n8n", "Vapi", "Zapier", "Make", "LangChain", "OpenAI API", "RAG Systems", "Supabase"] },
        { category: "INFRA", tools: ["Docker", "Portainer", "Linux", "CyberPanel", "Git"] },
        { category: "MOBILE", tools: ["Flutter", "React Native", "FlutterFlow"] },
        { category: "PRODUCER", tools: ["Logística y Planeación de Eventos"] }
    ];

    return (
        <section className="border-b-2 border-black bg-black text-white p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-1 border-r border-white/20 pr-8">
                    <h2 className="text-2xl font-black mb-4">ARSENAL_TECNICO</h2>
                    <p className="font-mono text-xs text-gray-400">
                        Tools y Frameworks para construir soluciones escalables de software a medida.
                    </p>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stack.map((group, idx) => (
                        <div key={idx}>
                            <h3 className="font-mono text-sm text-accent mb-6 border-b border-white/20 pb-2">{group.category}</h3>
                            <ul className="space-y-4">
                                {group.tools.map(tool => (
                                    <li key={tool} className="text-xl font-medium flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
