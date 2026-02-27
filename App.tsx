
import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  Calculator, 
  Activity, 
  AlertTriangle, 
  Zap, 
  DollarSign, 
  TrendingUp, 
  PlayCircle,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  Linkedin,
  Scale,
  Lock,
  HelpCircle,
  Quote,
  User,
  XCircle,
  ArrowDownNarrowWide,
  Stethoscope,
  Eye,
  FileBadge,
  ClipboardCheck,
  Thermometer,
  Microscope,
  History,
  Target,
  Camera,
  Cpu,
  ListOrdered
} from 'lucide-react';

// --- Theme Components ---

const Badge: React.FC<{ children: React.ReactNode; variant?: 'blue' | 'teal' | 'red' }> = ({ children, variant = 'blue' }) => {
  const styles = {
    blue: 'bg-blue-50/10 text-blue-200 border-blue-100/20',
    teal: 'bg-teal-50/10 text-teal-400 border-teal-100/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20'
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border backdrop-blur-md ${styles[variant]} mb-6 inline-block`}>
      {children}
    </span>
  );
};

const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ${className}`}>
    {children}
  </div>
);

const SectionBackground: React.FC<{ 
  imageUrl?: string; 
  overlayColor?: string; 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  blurClass?: string;
}> = ({ imageUrl, overlayColor = "bg-slate-950/90", children, className = "", id, blurClass = "backdrop-blur-sm" }) => (
  <section id={id} className={`relative py-32 overflow-hidden border-b border-white/5 ${className}`}>
    {imageUrl && (
      <div className="absolute inset-0 z-0">
        <img src={imageUrl} alt="Background" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 ${overlayColor} ${blurClass}`}></div>
      </div>
    )}
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      {children}
    </div>
  </section>
);

// --- Main Page ---

const App: React.FC = () => {
  const whatsappLink = "https://wa.me/5521995435384?text=Olá,%20Gabriel!%20Vi%20a%20página%20da%20Veredictos%20Vision%20e%20tenho%20interesse%20no%20programa%20de%20Municípios%20Pioneiros.%20Gostaria%20de%20entender%20como%20podemos%20implementar%20o%20piloto%20de%20triagem%20inteligente%20para%20reduzir%20nossa%20fila%20de%20espera%20e%20custos%20de%20tratamento";

  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-teal-400 selection:text-slate-950">
      
      {/* SEÇÃO 1: HEADLINE */}
      <SectionBackground 
        imageUrl="https://i.imgur.com/ubM0Jqo.jpeg" 
        overlayColor="bg-slate-950/80" 
        blurClass="backdrop-blur-[2px]"
      >
        <div className="max-w-6xl pt-12">
          <Badge variant="teal">VEREDICTOS VISION • PARCEIRO OFICIAL PREFEITURA RIO</Badge>
          <h1 className="text-3xl md:text-[4.5rem] font-extrabold leading-[1.1] tracking-tighter mb-4">
            Potencialize Oftalmologistas.<br/>
            <span className="text-teal-400 italic">Otimize Triagens. Salve Vidas.</span>
          </h1>
          <h2 className="text-xl md:text-3xl block text-slate-300 font-medium tracking-tight mb-10 leading-relaxed max-w-4xl">
            Sistema de IA que analisa retinopatia diabética, glaucoma e doenças vasculares em uma única imagem — priorizando automaticamente quem precisa de atenção urgente.
          </h2>
          
          <div className="p-6 bg-teal-400/10 border border-teal-400/20 rounded-2xl mb-12 inline-block">
            <p className="text-teal-400 font-black uppercase tracking-widest text-sm flex items-center gap-3">
              <Zap className="w-5 h-5 animate-pulse" /> Economize milhões com detecção e tratamento preventivo
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={whatsappLink} className="px-10 py-5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-black rounded-full transition-all flex items-center gap-3 group shadow-xl shadow-teal-500/20 text-lg">
              Quero Ser Município Pioneiro
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#como-funciona" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center gap-3 border border-white/10 text-lg">
              Ver como funciona
            </a>
          </div>
        </div>
      </SectionBackground>

      {/* SEÇÃO 2: DUAS EPIDEMIAS SILENCIOSAS */}
      <SectionBackground className="bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6 uppercase">
              Duas Epidemias Silenciosas.<br/>
              <span className="text-teal-400">Um Sistema Sobrecarregado.</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Retinopatia diabética e glaucoma são as principais causas de cegueira irreversível no Brasil. Juntas, ameaçam a visão de mais de 18 milhões de brasileiros.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <GlassCard className="bg-slate-900/50 border-white/5 p-8 text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-4xl font-black text-white mb-2">16M</h3>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Diabéticos em risco de Retinopatia Diabética</p>
            </GlassCard>
            <GlassCard className="bg-slate-900/50 border-white/5 p-8 text-center">
              <div className="w-16 h-16 bg-teal-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-4xl font-black text-white mb-2">2.5M</h3>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Brasileiros vivem com glaucoma</p>
            </GlassCard>
            <GlassCard className="bg-slate-900/50 border-white/5 p-8 text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-4xl font-black text-white mb-2">6-12m</h3>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">De espera média para um laudo</p>
            </GlassCard>
          </div>

          <GlassCard className="bg-slate-900/50 border-white/5 relative overflow-hidden">
            <div className="space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                Ambas as doenças não doem. Ambas começam pela visão periférica — o paciente literalmente não percebe que está perdendo a visão.
              </p>
              <div className="p-6 bg-teal-400/5 rounded-2xl border border-teal-400/10 relative mt-8">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-teal-400/20 rotate-180" />
                <p className="text-lg md:text-xl font-bold text-white italic mb-6">
                  "Quando o paciente percebe que tem alguma coisa errada, até 60% do nervo óptico já foi destruído."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                    <User className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <p className="font-black text-white text-base">Dr. Roberto Galvão Filho</p>
                    <p className="text-xs text-teal-400 uppercase font-bold leading-tight">
                      Presidente da Sociedade Brasileira de Glaucoma
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-3 gap-8 mt-16 mb-16">
            <div className="space-y-4">
              <h4 className="text-teal-400 font-black uppercase tracking-widest text-sm flex items-center gap-2">
                <User className="w-4 h-4" /> Para o Paciente
              </h4>
              <ul className="space-y-3">
                {[
                  "Perda irreversível de visão",
                  "Incapacidade para trabalho",
                  "Dependência de terceiros",
                  "Depressão e ansiedade (26,9% dos pacientes glaucoma)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-teal-400 font-black uppercase tracking-widest text-sm flex items-center gap-2">
                <Stethoscope className="w-4 h-4" /> Para o Sistema de Saúde
              </h4>
              <ul className="space-y-3">
                {[
                  "Tratamentos tardios custam 10x mais (laser, vitrectomia, cirurgia de glaucoma)",
                  "Benefícios por invalidez",
                  "Cuidadores e suporte social",
                  "Perda de produtividade econômica"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-[2rem] p-8">
              <h4 className="text-red-500 font-black uppercase tracking-widest text-sm flex items-center gap-2 mb-4">
                <DollarSign className="w-4 h-4" /> O Custo da Espera
              </h4>
              <p className="text-slate-300 font-medium mb-4">
                Cada caso de cegueira evitável custa ao sistema público <strong className="text-white">R$ 250 mil</strong> ao longo da vida (tratamentos + benefícios).
              </p>
              <div className="pt-4 border-t border-red-500/20">
                <p className="text-sm text-slate-400 font-medium">Com 2 milhões de casos não diagnosticados, o custo potencial é de</p>
                <p className="text-3xl font-black text-red-500 mt-1">R$ 500 BILHÕES</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden mb-16">
            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">O Gargalo Não É Tecnologia</h3>
                </div>
                
                <h4 className="text-xl text-yellow-500 font-black uppercase tracking-wider mb-6">É Escala:</h4>
                
                <div className="space-y-4 mb-8">
                  <p className="text-lg text-slate-300 font-medium flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    Um oftalmologista avalia 20-30 exames/dia.
                  </p>
                  <p className="text-lg text-slate-300 font-medium flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    18,5 milhões de pessoas precisam de triagem.
                  </p>
                </div>

                <p className="text-2xl font-black text-white uppercase tracking-tight">
                  É matematicamente impossível sem IA.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 h-full flex flex-col justify-center">
                <p className="text-sm text-teal-400 font-black uppercase tracking-widest mb-6">Precisamos de triagem inteligente que:</p>
                <ul className="space-y-5">
                  {[
                    "Detecte múltiplas patologias simultaneamente",
                    "Priorize quem realmente precisa de atenção",
                    "Libere o especialista para casos complexos"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-300 font-medium text-lg">
                      <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium text-slate-300 leading-relaxed mb-12">
              E se pudéssemos detectar <strong className="text-white">AMBAS as doenças em uma única imagem</strong>, 
              priorizar automaticamente os casos urgentes, e aumentar a 
              capacidade de triagem em 3x — <span className="text-teal-400 italic">sem custo adicional?</span>
            </p>
            
            <p className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-12">
              Isso é o que a Veredictos Vision faz.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#como-funciona" className="px-10 py-5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-black rounded-full transition-all flex items-center gap-3 group shadow-xl shadow-teal-500/20 text-lg">
                Conhecer a Solução
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={whatsappLink} className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center gap-3 border border-white/10 text-lg">
                Agendar Demonstração
              </a>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* SEÇÃO 3: TRIAGEM MULTI-PATOLOGIA */}
      <SectionBackground imageUrl="https://images.unsplash.com/photo-1579154235828-4019828483be?auto=format&fit=crop&q=80&w=2000" overlayColor="bg-slate-950/95">
        <div className="mb-20 text-center">
          <Badge variant="teal">Tecnologia de Ponta</Badge>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            Triagem Multi-Patologia em<br/>
            <span className="text-teal-400">Uma Única Imagem</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed">
            Retinopatia diabética, glaucoma e análise vascular — detectadas simultaneamente com precisão de nível especialista.
          </p>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl font-black uppercase text-white mb-12 text-center tracking-widest">
            COMO FUNCIONA <span className="text-teal-400">(Fluxo de 4 Etapas)</span>
          </h3>
          
          <div className="bg-slate-900/80 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500"></div>
            
            <div className="flex items-center justify-center gap-4 mb-16">
              <Zap className="w-8 h-8 text-teal-400" />
              <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">
                A Solução: Sistema de Priorização Inteligente
              </h4>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-white/10 z-0"></div>

              {[
                {
                  step: "1",
                  title: "TRIAGEM UNIVERSAL",
                  icon: <Camera className="w-8 h-8" />,
                  items: [
                    "Enfermeiro tira foto de fundo de olho",
                    "Equipamento: Retinógrafo local",
                    "Captura digital segura (LGPD compliant)"
                  ]
                },
                {
                  step: "2",
                  title: "ANÁLISE INTELIGENTE",
                  icon: <Cpu className="w-8 h-8" />,
                  items: [
                    "IA analisa imagem em 30s + dados clínicos",
                    "Detecta 3 patologias simultaneamente:",
                    { text: "Retinopatia Diabética (5 graus)", indent: true },
                    { text: "Glaucoma (CDR + 4 níveis de risco)", indent: true },
                    { text: "Saúde Vascular (densidade/rarefação)", indent: true },
                    "96.2% de precisão (nível especialista)",
                    "Laudo técnico automático"
                  ]
                },
                {
                  step: "3",
                  title: "FILA DE PRIORIZAÇÃO",
                  icon: <ListOrdered className="w-8 h-8" />,
                  items: [
                    "Sistema cria fila estratificada:",
                    { text: "🔴 VERMELHO - Imediato (7-14 dias)", indent: true },
                    { text: "🟠 LARANJA - Alta prioridade (15-30 dias)", indent: true },
                    { text: "🟡 AMARELO - Monitoramento (3-6 meses)", indent: true },
                    { text: "🟢 VERDE - Acompanhamento (6-12 meses)", indent: true },
                    "Médico sabe quem atender primeiro",
                    "60% dos casos saem direto da fila"
                  ]
                },
                {
                  step: "4",
                  title: "OFTALMO POTENCIALIZADO",
                  icon: <Stethoscope className="w-8 h-8" />,
                  items: [
                    "Laudo pré-processado pela IA",
                    "Foco apenas em casos que precisam de atenção",
                    "3x mais produtivo",
                    "Decisões clínicas assistidas por dados"
                  ]
                }
              ].map((phase, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-teal-400/30 flex items-center justify-center text-teal-400 mb-6 shadow-xl shadow-teal-900/50">
                    {phase.icon}
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full h-full">
                    <div className="text-center mb-6 border-b border-white/10 pb-4">
                      <span className="text-teal-400 font-black text-sm tracking-widest block mb-1">ETAPA {phase.step}</span>
                      <h5 className="text-white font-black uppercase">{phase.title}</h5>
                    </div>
                    <ul className="space-y-3">
                      {phase.items.map((item, j) => {
                        const isObject = typeof item === 'object';
                        const text = isObject ? item.text : item;
                        const indent = isObject && item.indent;
                        const isColorCoded = text.startsWith("🔴") || text.startsWith("🟠") || text.startsWith("🟡") || text.startsWith("🟢");
                        
                        return (
                          <li key={j} className={`text-sm text-slate-300 font-medium flex items-start gap-2 ${indent ? 'ml-4' : ''}`}>
                            {!indent && <span className="text-teal-400 mt-1">•</span>}
                            {indent && !isColorCoded && <span className="text-slate-500 mt-1">-</span>}
                            <span className={isColorCoded ? "font-bold" : ""}>
                              {text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black uppercase text-white mb-12 text-center tracking-widest">
            BENEFÍCIOS POR STAKEHOLDER
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <GlassCard className="bg-slate-900/80 border-white/10 hover:border-teal-400/30 transition-colors">
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-black text-white uppercase tracking-wider">Para Gestores Hospitalares</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Redução de 40% no tempo de triagem",
                  "Aumento de 3x na capacidade de atendimento",
                  "Zero custo adicional de infraestrutura",
                  "Compliance total com LGPD",
                  "Dashboard gerencial em tempo real"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="bg-slate-900/80 border-white/10 hover:border-teal-400/30 transition-colors">
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-400/20 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-teal-400" />
                </div>
                <h4 className="text-xl font-black text-white uppercase tracking-wider">Para Oftalmologistas</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Pré-análise automática confiável",
                  "Fila já priorizada por urgência",
                  "Laudo técnico como segunda opinião",
                  "Foco em casos complexos",
                  "Redução de burnout"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="bg-slate-900/80 border-white/10 hover:border-teal-400/30 transition-colors">
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-black text-white uppercase tracking-wider">Para Pacientes</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Atendimento mais rápido",
                  "Detecção precoce salva visão",
                  "Casos urgentes priorizados automaticamente",
                  "Menos tempo de espera em filas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </SectionBackground>

      {/* SEÇÃO 4: FOUNDERS */}
      <SectionBackground className="bg-slate-950">
        <div className="mb-20 text-center">
          <Badge variant="teal">Nossa História</Badge>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            Fundado por Quem<br/>
            <span className="text-teal-400">Viveu o Problema</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed">
            Combinamos experiência técnica de ponta com profundo entendimento do SUS brasileiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          {/* Gabriel Maia */}
          <GlassCard className="bg-slate-900/80 border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-400"></div>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-teal-400/30 overflow-hidden flex-shrink-0">
                  <img src="https://i.imgur.com/IwEAcpq_d.png?maxwidth=520&shape=thumb&fidelity=high" alt="Gabriel Maia" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wider">Gabriel Maia</h3>
                  <p className="text-teal-400 font-black uppercase tracking-widest text-sm">CEO & Co-Fundador</p>
                </div>
              </div>
              
              <div className="p-6 bg-teal-400/5 rounded-2xl border border-teal-400/10 relative mb-8 flex-grow">
                <Quote className="absolute -top-3 -left-3 w-6 h-6 text-teal-400/30 rotate-180" />
                <p className="text-slate-300 font-medium leading-relaxed italic relative z-10">
                  "Meu avô ficou cego por falta de triagem preventiva. Construí a Veredictos Vision para que isso não aconteça com milhões de brasileiros."
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Gestão e Estratégia de Produto",
                  "Google for Startups Bootcamp",
                  "1º Lugar Crew AI Challenge (global)",
                  "Especialista em produtos de I.A"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-medium">
                    <span className="text-teal-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          {/* Pedro Afonso */}
          <GlassCard className="bg-slate-900/80 border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-blue-500/30 overflow-hidden flex-shrink-0">
                  <img src="https://i.imgur.com/40DXd4t_d.png?maxwidth=520&shape=thumb&fidelity=high" alt="Pedro Afonso" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wider">Pedro Afonso</h3>
                  <p className="text-blue-400 font-black uppercase tracking-widest text-sm">CTO & Co-Fundador</p>
                </div>
              </div>
              
              <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10 relative mb-8 flex-grow">
                <Quote className="absolute -top-3 -left-3 w-6 h-6 text-blue-500/30 rotate-180" />
                <p className="text-slate-300 font-medium leading-relaxed italic relative z-10">
                  "Sistemas de IA precisam ser transparentes e auditáveis para serem confiáveis na medicina. Construímos isso desde o primeiro dia."
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Engenheiro de Machine Learning",
                  "Arquiteto de Sistemas Multi-Agente",
                  "Especialista em reprodutibilidade científica",
                  "Publicações em AI médica",
                  "1º Lugar Crew AI Challenge (global)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-medium">
                    <span className="text-blue-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>

        {/* Dr. João Batista */}
        <div className="max-w-3xl mx-auto">
          <GlassCard className="bg-slate-900/80 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-slate-800 border-2 border-purple-500/30 overflow-hidden flex-shrink-0">
                <img src="https://i.imgur.com/4DzxfYT_d.png?maxwidth=520&shape=thumb&fidelity=high" alt="Dr. João Batista" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-1">Dr. João Batista</h3>
                <p className="text-purple-400 font-black uppercase tracking-widest text-sm mb-6">Oftalmologista | Advisor Médico & Co-Fundador</p>
                
                <ul className="space-y-3 inline-block text-left">
                  {[
                    "6 anos de experiência em oftalmologia",
                    "Especialista em retina"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-medium">
                      <span className="text-purple-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionBackground>

      {/* SEÇÃO 5: VALIDAÇÃO */}
      <SectionBackground imageUrl="https://images.unsplash.com/photo-1576091160550-2173bdd9962a?auto=format&fit=crop&q=80&w=2000">
        <div className="mb-20">
          <Badge variant="blue">Evidência e Tração</Badge>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
            🏆 VALIDAÇÃO CIENTÍFICA<br/>
            <span className="text-blue-400 italic">E TRAÇÃO REAL</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <GlassCard className="lg:col-span-2">
            <h3 className="text-xl font-black uppercase mb-8 border-b border-white/10 pb-4 italic">🔬 Tecnologia Validada em Centros de Referência</h3>
            <div className="grid md:grid-cols-2 gap-12">
               <div>
                 <p className="text-6xl font-black text-blue-400 mb-2">96,2%</p>
                 <p className="font-bold text-white uppercase tracking-widest text-xs">Sensibilidade Técnica</p>
                 <p className="text-sm text-slate-500 mt-2 italic">Detecta 96 de cada 100 casos graves.</p>
               </div>
               <div>
                 <p className="text-6xl font-black text-teal-400 mb-2">94,6%</p>
                 <p className="font-bold text-white uppercase tracking-widest text-xs">Sensibilidade</p>
                 <p className="text-sm text-slate-500 mt-2 italic">Evita 94 de cada 100 falsos alarmes.</p>
               </div>
            </div>
            <div className="mt-12 p-6 bg-white/5 rounded-[1.5rem] border border-white/10 text-slate-400 text-sm italic">
              "Sistema em processo de certificação ANVISA e validação em Termos de Cooperação Técnica com Secretaria de Saúde da cidade do Rio."
            </div>
          </GlassCard>

          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7408966417108152321/" target="_blank" rel="noopener noreferrer" className="block group">
            <GlassCard className="flex flex-col justify-between h-full hover:border-teal-400/30 transition-colors">
              <div>
                 <h3 className="text-xl font-black uppercase mb-8 border-b border-white/10 pb-4 italic group-hover:text-teal-400 transition-colors">🏅 Reconhecimento</h3>
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-yellow-500 text-slate-950 rounded-full flex items-center justify-center font-black">AI</div>
                   <div>
                      <p className="font-black text-white text-sm">Vencedor Crew AI Challenge 2025</p>
                      <p className="text-[10px] text-slate-500 italic uppercase">Global AI Competition</p>
                   </div>
                 </div>
                 <div className="space-y-2">
                   <p className="text-xs text-teal-400 font-black uppercase tracking-widest">Projeto escolhido entre centenas de soluções de 40+ países</p>
                   <p className="text-sm text-slate-400 leading-relaxed font-bold italic">"Reconhecido pela arquitetura inovadora de análise médica."</p>
                 </div>
              </div>
              <div className="mt-8 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <ShieldCheck className="w-5 h-5 text-teal-400" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-teal-400">Excelência Global</span>
                 </div>
                 <ArrowRight className="w-5 h-5 text-teal-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </GlassCard>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
           <GlassCard>
              <h3 className="text-xl font-black uppercase mb-8 border-b border-white/10 pb-4 italic">🤝 Parcerias em Andamento</h3>
              <div className="space-y-6">
                 <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center font-black text-[10px] text-center border border-white/10 flex-shrink-0">PREF RIO</div>
                    <div>
                       <p className="font-bold text-white uppercase tracking-tight">Prefeitura da Cidade do Rio de Janeiro</p>
                       <p className="text-xs text-slate-500">Termo de Cooperação Técnica em fase final de aprovação. Piloto para atingir 15.000 diabéticos em 6 meses.</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center font-black text-[10px] text-center border border-white/10 flex-shrink-0">CCO</div>
                    <div>
                       <p className="font-bold text-white uppercase tracking-tight">Centro Carioca do Olho (CCO)</p>
                       <p className="text-xs text-slate-500">Referência nacional. Validação clínica em andamento e protocolos sendo refinados com especialistas do SUS.</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start border-t border-white/5 pt-6 group">
                    <div className="w-14 h-14 bg-teal-400/10 rounded-full flex items-center justify-center text-teal-400 flex-shrink-0 border border-teal-400/20 group-hover:bg-teal-400 group-hover:text-slate-950 transition-all">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="font-bold text-white uppercase tracking-tight">Próximo Município Pioneiro</p>
                       <p className="text-xs text-slate-500 mb-3">Seja o terceiro parceiro estratégico desta revolução em saúde pública.</p>
                       <a href={whatsappLink} className="text-[10px] font-black uppercase text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1">
                         → Candidatar-se
                       </a>
                    </div>
                 </div>
              </div>
           </GlassCard>

           <GlassCard className="relative group cursor-pointer overflow-hidden p-0 min-h-[400px]">
              <div className="absolute inset-0 bg-slate-950/20 z-10 pointer-events-none group-hover:bg-slate-950/0 transition-all"></div>
              <iframe 
                className="absolute inset-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/q1-cLnz5XrE?autoplay=0&controls=1&modestbranding=1" 
                title="Veredictos Vision na Mídia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-20">
                 <Badge variant="red">📺 Globo - Jornal Nacional</Badge>
                 <h4 className="text-lg font-black italic tracking-tighter text-white">"IA promete revolucionar diagnóstico de retinopatia diabética no SUS"</h4>
              </div>
           </GlassCard>
        </div>
      </SectionBackground>

      {/* SEÇÃO 6: CTA PIONEIROS */}
      <SectionBackground id="pioneiros" className="bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="teal">Oportunidade Exclusiva para Pioneiros</Badge>
          <h2 className="text-4xl md:text-[6rem] font-black tracking-tighter uppercase mb-12 italic leading-[0.9]">
            SEJA UM MUNICÍPIO<br/>
            <span className="text-teal-400">CO-FUNDADOR</span>
          </h2>
          <div className="p-10 border border-teal-400/20 rounded-[3rem] bg-teal-400/5 mb-16">
            <p className="text-xl md:text-3xl text-slate-300 font-bold mb-8 leading-relaxed italic">
              Veredictos Vision não está em venda livre ainda. Estamos em fase de Parceria Estratégica de Validação.
            </p>
            <div className="text-left space-y-8 max-w-2xl mx-auto">
              <h5 className="text-teal-400 font-black uppercase text-sm tracking-widest italic border-b border-teal-400/10 pb-2">🔬 POR QUE PRECISAMOS DE VOCÊ AGORA</h5>
              <div className="space-y-4 text-slate-400 font-medium">
                <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" /> Dados reais do SUS para aperfeiçoamento contínuo do algoritmo</p>
                <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" /> Feedback operacional de gestores e médicos em ambiente real</p>
                <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" /> Cases de impacto que comprovem economia e eficiência</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-20">
             <GlassCard className="bg-teal-400/10 border-teal-400/30">
                <div className="w-12 h-12 bg-teal-400 rounded-2xl flex items-center justify-center text-slate-950 mb-8 font-black text-2xl rotate-3">🎁</div>
                <h4 className="text-2xl font-black mb-4 uppercase text-white tracking-tight italic">6 MESES GRATUITOS</h4>
                <p className="text-slate-400 font-medium leading-relaxed italic">Licenciamento e suporte total sem custo para municípios selecionados como co-fundadores.</p>
             </GlassCard>
             <GlassCard className="bg-blue-400/10 border-blue-400/30">
                <div className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center text-slate-950 mb-8 font-black text-2xl -rotate-3">📊</div>
                <h4 className="text-2xl font-black mb-4 uppercase text-white tracking-tight italic">CO-CRIAÇÃO</h4>
                <p className="text-slate-400 font-medium leading-relaxed italic">Seu feedback operacional molda o produto final adaptado à sua realidade de gestão.</p>
             </GlassCard>
          </div>

          <a 
            href={whatsappLink}
            className="group inline-flex items-center gap-6 px-16 py-10 bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-3xl rounded-full shadow-[0_20px_100px_-10px_rgba(45,212,191,0.6)] transition-all transform hover:scale-105 active:scale-95 animate-pulse hover:animate-none"
          >
            Quero Ser Pioneiro
            <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform" />
          </a>
          
          <p className="mt-16 text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] italic">Veredictos Vision © 2026 | Limited Validation Partnership Phase</p>
        </div>
      </SectionBackground>

      {/* FOOTER */}
      <section className="py-24 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">
          <div>
            <h4 className="text-3xl font-black tracking-tighter text-white mb-10 italic">VEREDICTOS <span className="text-teal-400">VISION</span></h4>
            <div className="space-y-8">
              <a href={whatsappLink} className="flex items-center gap-4 text-slate-400 hover:text-teal-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold italic">+55 21 99543-5384</span>
              </a>
              <a href="mailto:contato@veredictos.com" className="flex items-center gap-4 text-slate-400 hover:text-teal-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold italic">contato@veredictos.com</span>
              </a>
              <a href="https://www.linkedin.com/in/gabrielmaiavarella/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-teal-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold italic underline decoration-teal-400/30">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="lg:text-right flex flex-col justify-end">
            <p className="text-slate-500 font-bold mb-4 uppercase tracking-widest text-xs">Informações Corporativas</p>
            <p className="text-slate-300 font-black text-xl mb-2">CNPJ: 62.358.893/0001-07</p>
            <p className="text-slate-600 text-sm italic">Veredictos Vision - Rio de Janeiro, Brasil.</p>
            <div className="mt-12 pt-8 border-t border-white/5 text-[10px] font-black text-slate-600 uppercase tracking-widest">
              A pergunta não é "se funciona". É: você vai implementar antes ou depois dos seus vizinhos?
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;
