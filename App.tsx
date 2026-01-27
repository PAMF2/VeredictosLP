
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
  HelpCircle
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
        overlayColor="bg-slate-950/75" 
        blurClass="backdrop-blur-[2px]"
      >
        <div className="max-w-5xl pt-12">
          <Badge variant="teal">VEREDICTOS VISION • PARCEIRO OFICIAL PREFEITURA RIO</Badge>
          <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[0.95] tracking-tighter mb-8">
            Como Economizar Mais de <span className="text-teal-400 italic">R$ 1 Milhão</span> por Ano em Tratamento de Retinopatia Diabética
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-slate-300 leading-tight mb-4 tracking-tight">
            E Garantir Que Nenhum Caso Grave Passe Despercebido
          </p>
          <p className="text-xl md:text-2xl font-black text-teal-400/80 uppercase tracking-tighter italic mb-12">
            Integrando IA aos Retinógrafos que Você Já Possui
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href={whatsappLink} className="px-10 py-5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-black rounded-full transition-all flex items-center gap-3 group shadow-xl shadow-teal-500/20 text-lg">
              Quero Ser Município Pioneiro
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </SectionBackground>

      {/* SEÇÃO 2: SUBHEADLINE */}
      <SectionBackground className="bg-slate-900/30">
        <div className="max-w-5xl">
          <Badge>A Realidade da Gestão de Saúde</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-12">
            Para Gestores de Saúde Que Sabem Que Tratamento Tardio de Retinopatia 
            Custa <span className="text-red-500">R$ 30 Mil por Paciente</span>
          </h2>
          <div className="border-l-4 border-teal-400 pl-8 mb-12">
            <p className="text-2xl md:text-3xl font-medium text-slate-400 leading-relaxed">
              Mas o sistema atual não consegue identificar quem precisa de atendimento urgente.
            </p>
          </div>
          <p className="text-6xl md:text-9xl font-black text-teal-400 italic uppercase tracking-tighter animate-pulse">
            Até Agora.
          </p>
        </div>
      </SectionBackground>

      {/* SEÇÃO 3: O PROBLEMA */}
      <SectionBackground imageUrl="https://images.unsplash.com/photo-1579154235828-4019828483be?auto=format&fit=crop&q=80&w=2000" overlayColor="bg-slate-950/90">
        <div className="mb-20">
          <Badge variant="red">O Ciclo da Ineficiência Mortal</Badge>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
            🚨 O FLUXO QUE ESTÁ DESPERDIÇANDO<br/>
            <span className="text-red-500">MILHÕES DO SEU ORÇAMENTO</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium italic">Assim funciona hoje no sistema público de oftalmologia:</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <GlassCard className="border-l-[16px] border-l-red-500">
            <h3 className="text-2xl font-black mb-10 uppercase flex items-center gap-4">
              <Clock className="w-8 h-8 text-red-500" />
              O Caminho Burocrático
            </h3>
            <div className="space-y-6 relative ml-4">
              <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-white/10"></div>
              {[
                "1️⃣ Paciente diabético vai na UBS",
                "2️⃣ Médico encaminha TODOS os diabéticos pro oftalmologista (sem critério de urgência)",
                "3️⃣ Paciente entra na fila única de 8-11 meses",
                "4️⃣ Quando chega no oftalmo, faz fundoscopia",
                "5️⃣ Volta pra fila pra aguardar resultado e retorno",
                "6️⃣ Mais 4-6 meses de espera"
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start group relative">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white/20 text-white flex items-center justify-center font-black group-hover:border-red-500 transition-all flex-shrink-0 z-10 text-xs">
                    {i + 1}
                  </div>
                  <p className="text-lg text-slate-300 font-bold leading-tight pt-1">{step.substring(4)}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-red-500/10 rounded-[2rem] border border-red-500/20">
              <p className="text-red-400 font-black text-xs uppercase mb-1 tracking-widest">⏱️ TEMPO TOTAL:</p>
              <p className="text-5xl font-black text-red-500 tracking-tighter">12-17 meses</p>
              <p className="text-sm text-red-400/80 font-medium mt-1 italic">entre primeiro sintoma e diagnóstico definitivo.</p>
            </div>
          </GlassCard>

          <div className="space-y-8">
            <GlassCard>
              <h3 className="text-2xl font-black text-red-500 mb-8 uppercase italic">💰 DINHEIRO SENDO JOGADO FORA</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-black text-white mb-4 border-b border-white/10 pb-2">Problema 1: Casos Leves Travam a Fila Inteira</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-lg text-slate-300">
                      <span className="font-black text-red-500">→ 60%</span> NÃO têm retinopatia
                    </li>
                    <li className="flex gap-3 text-lg text-slate-300">
                      <span className="font-black text-orange-400">→ 25%</span> têm retinopatia leve
                    </li>
                    <li className="p-6 bg-red-600 rounded-[1.5rem] text-white font-black text-center text-xl shadow-xl">
                      85% DA FILA OCUPADA POR QUEM PODE ESPERAR
                    </li>
                  </ul>
                  <p className="text-sm text-slate-500 mt-6 italic">Enquanto isso: 15% de casos graves esperam 11 meses na mesma fila.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="bg-red-500/5 border-red-500/10">
              <h4 className="font-black text-white mb-6">Problema 2: O Custo Explode no Diagnóstico Tardio</h4>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-6 rounded-[1.5rem] border border-white/10">
                  <p className="text-[10px] font-black text-green-400 uppercase mb-2 tracking-widest italic">TRATAMENTO PRECOCE</p>
                  <p className="text-2xl font-black text-white">R$ 800-1.500</p>
                  <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase">Taxa de sucesso: 85%</p>
                </div>
                <div className="bg-red-500/10 p-6 rounded-[1.5rem] border border-red-500/20">
                  <p className="text-[10px] font-black text-red-400 uppercase mb-2 tracking-widest italic">TRATAMENTO TARDIO</p>
                  <p className="text-2xl font-black text-white">R$ 15-30 MIL</p>
                  <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase">Taxa de sucesso: 60%</p>
                </div>
              </div>
              <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5 text-xs text-slate-400 space-y-3">
                <p className="font-bold text-slate-200">💉 POR QUE R$ 30.000?</p>
                <p>Pacientes com Retinopatia Proliferativa avançada precisam de 3-6 injeções intravítreas de Anti-VEGF (R$ 5.000 cada) durante 6 meses.</p>
                <p>Casos mais graves podem precisar de vitrectomia (cirurgia), elevando o custo para <span className="text-red-400 font-bold">R$ 40.000 - R$ 50.000</span>.</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Matemática do Desastre - Novo Layout Horizontal */}
        <GlassCard className="bg-slate-900 border-red-500/20 shadow-red-500/5">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <h3 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-4">
              <Calculator className="w-10 h-10 text-red-500" />
              📊 A MATEMÁTICA DO DESASTRE
            </h3>
            <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Município de 100 mil habitantes</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-left font-black text-slate-500 uppercase text-xs tracking-widest">Contexto</th>
                  <th className="py-6 px-4 text-left font-black text-red-500 uppercase text-xs tracking-widest italic">⚠️ Custo Atual</th>
                  <th className="py-6 px-4 text-left font-black text-teal-400 uppercase text-xs tracking-widest italic">✅ Custo Ideal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-8 px-4">
                    <p className="text-xl font-bold text-white mb-2">3.500 Diabéticos</p>
                    <p className="text-sm text-slate-400">280 triagens/ano (8%)</p>
                    <p className="text-sm font-black text-red-400 mt-2">42 CASOS TARDIOS</p>
                  </td>
                  <td className="py-8 px-4 bg-red-500/5">
                    <p className="text-lg font-bold text-slate-300 mb-1">42 pacientes com RD Proliferativa</p>
                    <p className="text-3xl font-black text-red-500">R$ 1.050.000</p>
                    <p className="text-[10px] text-red-700 font-black mt-2 uppercase">42 × R$ 25k (média)</p>
                  </td>
                  <td className="py-8 px-4 bg-teal-400/5">
                    <p className="text-lg font-bold text-slate-300 mb-1">42 detectados precocemente</p>
                    <p className="text-3xl font-black text-teal-400">R$ 42.000</p>
                    <p className="text-[10px] text-teal-700 font-black mt-2 uppercase">42 × R$ 1k (laser)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center pt-12 mt-12 border-t border-white/10">
            <p className="text-4xl md:text-6xl font-black uppercase text-red-500 mb-4 tracking-tighter">🚨 DESPERDÍCIO ANUAL: R$ 1.008.000</p>
            <p className="text-xl text-slate-400 italic">E isso é só 42 pacientes. Quantos você tem perdendo visão AGORA porque estão esperando na fila?</p>
          </div>
        </GlassCard>

        {/* Problema não é falta de médico */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 italic">📊 O PROBLEMA NÃO É "FALTA DE MÉDICO"</h3>
          <p className="text-2xl text-slate-300 font-medium leading-relaxed">
            É que o sistema não separa quem precisa de atendimento <strong>URGENTE</strong> de quem pode esperar. 
            O oftalmologista só descobre a gravidade DEPOIS de atender. Você está pagando R$ 180 por consulta (tabela SUS) pra descobrir que 85% nem precisavam estar ali.
          </p>
        </div>
      </SectionBackground>

      {/* SEÇÃO 4: A SOLUÇÃO */}
      <SectionBackground imageUrl="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000" overlayColor="bg-slate-950/95">
        <div className="mb-20">
          <Badge variant="teal">O Mecanismo Único</Badge>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
            🔬 COMO TRIPLICAR A CAPACIDADE DOS SEUS OFTALMOLOGISTAS<br/>
            <span className="text-teal-400 italic">Sem Contratar Novos Profissionais. Sem Aumentar Orçamento.</span>
          </h2>
        </div>

        <GlassCard className="mb-20 bg-slate-900/40">
          <h3 className="text-3xl font-black text-teal-400 mb-12 uppercase italic border-b border-white/10 pb-4 flex items-center gap-4">
            <Zap className="w-8 h-8" /> A SOLUÇÃO: Sistema de Priorização Inteligente
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: 1, title: "Triagem Universal", desc: "Enfermeiro treinado faz foto de fundo de olho na UBS em 2 min com o Retinógrafo da unidade. Nossa I.A capta o exame." },
              { num: 2, title: "Análise Inteligente", desc: "IA analisa imagem + dados clínicos (HbA1c, PA, tempo de DM). Detecta microaneurismas, hemorragias e edema em 30 seg." },
              { num: 3, title: "Fila de Priorização", desc: "Sistema cria fila estratificada em 4 níveis. Médico sabe exatamente quem precisa dele agora." },
              { num: 4, title: "Oftalmologista Potencializado", desc: <div className="space-y-2 mt-1"><p className="flex items-center gap-2">Antes: 70% com casos normais ❌</p><p className="flex items-center gap-2">Depois: 100% focado em casos críticos ✅</p><p className="flex items-center gap-2">3x mais impacto clínico 📈</p></div> }
            ].map((s, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-teal-400 text-slate-950 rounded-xl flex items-center justify-center font-black text-xl shadow-lg">{s.num}</div>
                <h4 className="text-lg font-black uppercase text-white">{s.title}</h4>
                <div className="text-sm text-slate-400 font-medium leading-relaxed italic">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-teal-400/5 rounded-2xl border border-teal-400/10 flex items-center gap-4">
            <Lock className="w-8 h-8 text-teal-400" />
            <p className="text-sm font-bold text-teal-400 uppercase tracking-widest">🔒 100% conforme LGPD • Dados criptografados (AES-256) • Servidores em território nacional</p>
          </div>
        </GlassCard>

        {/* Fila Estratificada Visualization */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { 
              color: "bg-green-500", 
              p: "60%", 
              label: "🟢 VERDE", 
              desc: "Sem retinopatia ou alterações mínimas.",
              action: "NÃO vai ao oftalmo agora. Orientação automática + retorno em 12 meses.",
              gain: "✅ Libera 60% das vagas da fila"
            },
            { 
              color: "bg-yellow-400", 
              p: "25%", 
              label: "🟡 AMARELO", 
              desc: "Retinopatia leve estável.",
              action: "Oftalmologista em 6 MESES (janela segura). Sem risco de progressão rápida.",
              gain: "📅 Pode esperar com segurança"
            },
            { 
              color: "bg-orange-500", 
              p: "12%", 
              label: "🟠 LARANJA", 
              desc: "Retinopatia moderada com risco de agravar.",
              action: "⚠️ PRIORIDADE ALTA: Oftalmo em 15-30 DIAS. Sinaliza necessidade de laser.",
              gain: "⏱️ Janela crítica de intervenção"
            },
            { 
              color: "bg-red-600", 
              p: "3%", 
              label: "🔴 VERMELHO", 
              desc: "Retinopatia proliferativa ou edema macular.",
              action: "🚨 URGÊNCIA MÁXIMA: Oftalmo em 7-14 DIAS. Risco iminente de perda de visão.",
              gain: "⚡ Atendimento imediato salva visão"
            }
          ].map((level, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-all group">
              <div>
                <div className={`${level.color} w-16 h-16 rounded-full flex items-center justify-center text-slate-950 font-black text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {level.p}
                </div>
                <h4 className="text-xl font-black mb-2">{level.label}</h4>
                <p className="text-sm text-slate-400 font-bold mb-4">{level.desc}</p>
                <p className="text-xs text-slate-300 leading-relaxed italic mb-6">{level.action}</p>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-teal-400 border-t border-white/10 pt-4">{level.gain}</p>
            </div>
          ))}
        </div>

        {/* --- NOVO CARD: A MATEMÁTICA DA EFICIÊNCIA --- */}
        <GlassCard className="bg-slate-900 border-teal-400/20 shadow-teal-500/5 mb-20 overflow-hidden">
          {/* 1. Cabeçalho (O Cenário) */}
          <div className="text-center mb-16 border-b border-white/10 pb-12">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
              📐 A Matemática da Eficiência: <span className="text-teal-400">Veredictos Vision</span>
            </h3>
            <p className="text-slate-400 font-bold tracking-widest uppercase text-sm">
              Município de 100 mil habitantes | <span className="text-white">3.200 Diabéticos em risco</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-white/10 rounded-[2rem] overflow-hidden border border-white/10">
            {/* 2. Lado A: Sistema Atual (O Caos) */}
            <div className="bg-slate-900/80 p-10 md:p-14">
               <div className="flex items-center gap-4 mb-8">
                 <AlertTriangle className="w-8 h-8 text-red-500" />
                 <h4 className="text-2xl font-black text-red-500 uppercase italic">⚠️ SISTEMA ATUAL (O CAOS)</h4>
               </div>
               
               <div className="space-y-8 mb-12">
                  <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/10">
                    <p className="text-xs font-black text-red-400 uppercase tracking-widest mb-1">STATUS</p>
                    <p className="text-xl font-bold text-white">Fila linear de 3.200 pacientes.</p>
                  </div>
                  <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/10">
                    <p className="text-xs font-black text-red-400 uppercase tracking-widest mb-1">GARGALO</p>
                    <p className="text-xl font-bold text-white">Oftalmologista leva 6 meses para atender a todos.</p>
                  </div>
                  <div className="p-6 bg-red-600/10 rounded-2xl border border-red-600/20">
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">🚨 O ERRO FATAL</p>
                    <p className="text-lg font-bold text-slate-300">Casos críticos (3%) esperam o mesmo tempo que casos saudáveis (60%).</p>
                  </div>
               </div>

               <div className="space-y-4 pt-8 border-t border-white/10">
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">CUSTOS DETALHADOS</p>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-400 font-bold">Consultas (Todos na fila):</span>
                    <span className="text-white font-black">R$ 576.000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-400 font-bold">Tratamentos Tardios (Sequelas):</span>
                    <span className="text-white font-black">R$ 1.000.000</span>
                  </div>
                  <div className="flex justify-between items-center py-4 text-3xl font-black text-red-500 tracking-tighter">
                    <span>TOTAL:</span>
                    <span>R$ 1.576.000</span>
                  </div>
               </div>
            </div>

            {/* 3. Lado B: Veredictos Vision (A Inteligência) */}
            <div className="bg-teal-400/5 p-10 md:p-14 relative">
               <div className="absolute top-10 right-10 opacity-10">
                 <Zap className="w-24 h-24 text-teal-400" />
               </div>
               <div className="flex items-center gap-4 mb-8">
                 <CheckCircle2 className="w-8 h-8 text-teal-400" />
                 <h4 className="text-2xl font-black text-teal-400 uppercase italic">✅ VEREDICTOS VISION (A INTELIGÊNCIA)</h4>
               </div>

               <div className="space-y-8 mb-12">
                  <div className="p-6 bg-teal-400/5 rounded-2xl border border-teal-400/10">
                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest mb-1">STATUS</p>
                    <p className="text-xl font-bold text-white">3.200 triados em 15 dias (Estratificação por IA).</p>
                  </div>
                  <div className="p-6 bg-teal-400/5 rounded-2xl border border-teal-400/10">
                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest mb-1">AÇÃO IMEDIATA</p>
                    <p className="text-xl font-bold text-white">96 casos críticos identificados e encaminhados no Dia 1.</p>
                  </div>
                  <div className="p-6 bg-teal-400/10 rounded-2xl border border-teal-400/20">
                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest mb-1">🎯 OTIMIZAÇÃO</p>
                    <p className="text-lg font-bold text-slate-300">1.920 casos (Verdes) liberados da fila (Não geram custo de consulta).</p>
                  </div>
               </div>

               <div className="space-y-4 pt-8 border-t border-white/10">
                  <p className="text-xs font-black text-teal-400 uppercase tracking-widest">CUSTOS DETALHADOS</p>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-400 font-bold">Triagem Inteligente (IA):</span>
                    <span className="text-white font-black">R$ 27.200</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-400 font-bold">Consultas (Foco Amarelos/Laranjas):</span>
                    <span className="text-white font-black">R$ 230.400</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-400 font-bold">Tratamento Precoce (Prevenção):</span>
                    <span className="text-white font-black">R$ 96.000</span>
                  </div>
                  <div className="flex justify-between items-center py-4 text-3xl font-black text-teal-400 tracking-tighter">
                    <span>TOTAL:</span>
                    <span>R$ 353.600</span>
                  </div>
               </div>
            </div>
          </div>

          {/* 4. Rodapé (O Valor Gerado) */}
          <div className="mt-12 bg-teal-400 p-10 md:p-14 rounded-[2.5rem] text-slate-950 text-center shadow-2xl shadow-teal-500/20 group">
             <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 mb-10">
                <div>
                   <p className="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-60">ECONOMIA ANUAL</p>
                   <p className="text-5xl md:text-7xl font-black tracking-tighter italic">R$ 1.222.400</p>
                </div>
                <div className="h-20 w-px bg-slate-950/20 hidden md:block"></div>
                <div>
                   <p className="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-60">RETORNO SOBRE INVESTIMENTO</p>
                   <p className="text-5xl md:text-7xl font-black tracking-tighter italic">ROI: 246%</p>
                </div>
             </div>
             
             <div className="max-w-3xl mx-auto border-t border-slate-950/10 pt-10">
                <p className="text-xl md:text-2xl font-black leading-tight italic uppercase tracking-tight group-hover:scale-105 transition-transform">
                  "Você não está comprando software. Está comprando a eliminação da fila de espera e R$ 1,2 milhão de eficiência operacional por ano."
                </p>
             </div>
          </div>
        </GlassCard>

        {/* Disclaimer Importante Final */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="p-8 border-2 border-dashed border-teal-400/30 rounded-[2rem] bg-teal-400/5">
            <h5 className="text-xl font-black text-teal-400 uppercase italic mb-6 flex items-center gap-3">
              <Scale className="w-6 h-6" /> ⚖️ IMPORTANTE SOBRE O PAPEL DO OFTALMOLOGISTA
            </h5>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">• O sistema NÃO dá diagnóstico definitivo</li>
                <li className="flex items-start gap-2">• O oftalmologista SEMPRE diagnostica e trata</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">• A IA apenas organiza a fila por urgência</li>
                <li className="flex items-start gap-2">• Médico recebe pacientes já estratificados por risco</li>
              </ul>
            </div>
            <p className="mt-6 font-bold text-teal-400/80 italic text-center text-lg">Objetivo: Potencializar o trabalho do especialista, não substituí-lo.</p>
          </div>
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
                 <p className="text-6xl font-black text-teal-400 mb-2">91,8%</p>
                 <p className="font-bold text-white uppercase tracking-widest text-xs">Especificidade</p>
                 <p className="text-sm text-slate-500 mt-2 italic">Evita 92 de cada 100 falsos alarmes.</p>
               </div>
            </div>
            <div className="mt-12 p-6 bg-white/5 rounded-[1.5rem] border border-white/10 text-slate-400 text-sm italic">
              "Sistema em processo de certificação ANVISA e validação em Termos de Cooperação Técnica com hospitais públicos de referência."
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col justify-between">
            <div>
               <h3 className="text-xl font-black uppercase mb-8 border-b border-white/10 pb-4 italic">🏅 Reconhecimento</h3>
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-yellow-500 text-slate-950 rounded-full flex items-center justify-center font-black">AI</div>
                 <div>
                    <p className="font-black text-white text-sm">Vencedor CrewAI Hackathon 2025</p>
                    <p className="text-[10px] text-slate-500 italic uppercase">Global AI Competition</p>
                 </div>
               </div>
               <div className="space-y-2">
                 <p className="text-xs text-teal-400 font-black uppercase tracking-widest">Projeto escolhido entre centenas de soluções de 40+ países</p>
                 <p className="text-sm text-slate-400 leading-relaxed font-bold italic">"Reconhecido pela arquitetura inovadora de análise médica."</p>
               </div>
            </div>
            <div className="mt-8 flex items-center gap-2">
               <ShieldCheck className="w-5 h-5 text-teal-400" />
               <span className="text-[10px] font-black uppercase tracking-widest text-teal-400">Excelência Global</span>
            </div>
          </GlassCard>
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
              {/* YouTube Embed */}
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
          
          <p className="mt-16 text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] italic">Veredictos Vision © 2025 | Limited Validation Partnership Phase</p>
        </div>
      </SectionBackground>

      {/* SEÇÃO 7: CONTATO E FOOTER */}
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
            <p className="text-slate-600 text-sm italic">Veredictos Vision Health Tech Labs. São Paulo - Rio de Janeiro, Brasil.</p>
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
