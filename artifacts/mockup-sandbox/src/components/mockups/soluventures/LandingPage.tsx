import React, { useState, useEffect, useRef } from 'react';
import { Building2, Code2, Handshake, CheckCircle2, Menu, X, ArrowRight, Send } from 'lucide-react';

const FadeInUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif] text-[#555555] overflow-x-hidden">
      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3' : 'py-4'
        }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          <div className="font-['DM_Sans',sans-serif] font-bold text-2xl text-[#0A0A0A] flex items-center">
            SoluVentures<span className="text-[#32BF50] w-2 h-2 rounded-full bg-[#32BF50] ml-1 mt-2 inline-block"></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#porque-nos" onClick={(e) => scrollToSection(e, 'porque-nos')} className="text-[#0A0A0A] hover:text-[#32BF50] font-medium transition-colors">Por que nós?</a>
            <a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')} className="text-[#0A0A0A] hover:text-[#32BF50] font-medium transition-colors">Serviços</a>
            <a href="#cases" onClick={(e) => scrollToSection(e, 'cases')} className="text-[#0A0A0A] hover:text-[#32BF50] font-medium transition-colors">Cases</a>
            <button className="bg-[#32BF50] hover:bg-[#259E40] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(50,191,80,0.4)]">
              Fale com a gente
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#0A0A0A] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div 
          className={`md:hidden absolute top-[72px] left-0 right-0 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 origin-top ${
            mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            <a href="#porque-nos" onClick={(e) => scrollToSection(e, 'porque-nos')} className="text-[#0A0A0A] font-medium text-lg pb-2 border-b border-gray-100">Por que nós?</a>
            <a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')} className="text-[#0A0A0A] font-medium text-lg pb-2 border-b border-gray-100">Serviços</a>
            <a href="#cases" onClick={(e) => scrollToSection(e, 'cases')} className="text-[#0A0A0A] font-medium text-lg pb-4">Cases</a>
            <button className="bg-[#32BF50] text-white px-6 py-3 rounded-full font-semibold w-full">
              Fale com a gente
            </button>
          </div>
        </div>
      </nav>
      {/* SECTION 1: HERO */}
      <section className="bg-[#FCF5EB] pt-[calc(72px+min(10vw,140px))] pb-[min(10vw,140px)] px-6" style={{ paddingTop: 'clamp(120px, 15vw, 180px)' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <FadeInUp>
            <div className="inline-block bg-[#E8F7EC] text-[#259E40] rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] mb-6">
              Venture Builder
            </div>
            <h1 className="font-['DM_Sans',sans-serif] text-[clamp(2.75rem,5.5vw,4.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] mb-6">
              Estrutura operacional e time sênior para os <span className="text-[#32BF50] underline decoration-[#32BF50] underline-offset-4">fundadores ousados</span> que moldam o futuro.
            </h1>
            <p className="text-[#555555] text-lg leading-[1.65] max-w-[480px] mb-10">
              Transformamos desafios reais de governos e grandes empresas em startups e soluções digitais com serviços de venture building e desenvolvimento de software sob demanda.
            </p>
            <button className="bg-[#32BF50] hover:bg-[#259E40] text-white px-9 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(50,191,80,0.4)] w-full sm:w-auto">
              Quero resolver meu desafio de inovação!
            </button>
          </FadeInUp>

          <FadeInUp delay={0.2} className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
            <div className="absolute inset-0 w-full h-full">
              {/* Large Image */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" 
                alt="Team meeting" 
                className="absolute top-0 right-0 w-[60%] sm:w-[65%] h-[55%] object-cover rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[3px] border-white z-[1] transform -rotate-2 hover:rotate-0 hover:z-10 transition-transform duration-500"
                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
              />
              {/* Medium Image */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&q=80" 
                alt="Collaboration" 
                className="absolute bottom-0 left-0 w-[55%] sm:w-[60%] h-[50%] object-cover rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[3px] border-white z-[2] transform rotate-3 hover:rotate-0 hover:z-10 transition-transform duration-500"
                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
              />
              {/* Small Image */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=250&q=80" 
                alt="Professional woman" 
                className="absolute top-[20%] left-[-5%] sm:left-[5%] w-[40%] h-[40%] object-cover rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[3px] border-white z-[3] transform -rotate-1 hover:rotate-0 hover:z-10 transition-transform duration-500"
                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
              />
            </div>
          </FadeInUp>
        </div>
      </section>
      {/* SECTION 2: POR QUE SOLUVENTURES? */}
      <section id="porque-nos" className="bg-white py-[clamp(80px,10vw,140px)] px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp>
            <h2 className="font-['DM_Sans',sans-serif] text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0A0A0A] text-center mb-4">
              Por que SoluVentures?
            </h2>
            <p className="text-center text-[#555555] text-lg max-w-[700px] mx-auto mb-16">
              Somos parceiros de execução, não consultores. Entregamos time e produto, não decks e relatórios.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0.08}>
              <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-black/5 hover:-translate-y-1 hover:border-[#32BF50] hover:shadow-[0_8px_32px_rgba(50,191,80,0.12)] transition-all duration-[0.35s] cubic-bezier(0.4,0,0.2,1) h-full flex flex-col">
                <div className="bg-[#E8F7EC] w-fit p-3.5 rounded-xl mb-6">
                  <Building2 size={32} color="#32BF50" />
                </div>
                <h3 className="font-['DM_Sans',sans-serif] text-[1.2rem] font-bold text-[#0A0A0A] mb-3">Venture builder</h3>
                <p className="text-[#555555] leading-[1.65]">Completamos seu time com C-Levels em até 7 dias</p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.16}>
              <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-black/5 hover:-translate-y-1 hover:border-[#32BF50] hover:shadow-[0_8px_32px_rgba(50,191,80,0.12)] transition-all duration-[0.35s] cubic-bezier(0.4,0,0.2,1) h-full flex flex-col">
                <div className="bg-[#E8F7EC] w-fit p-3.5 rounded-xl mb-6">
                  <Code2 size={32} color="#32BF50" />
                </div>
                <h3 className="font-['DM_Sans',sans-serif] text-[1.2rem] font-bold text-[#0A0A0A] mb-3">Software house inclusa</h3>
                <p className="text-[#555555] leading-[1.65]">Desenvolvemos apps que solucionam o desafio integralmente</p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.24}>
              <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-black/5 hover:-translate-y-1 hover:border-[#32BF50] hover:shadow-[0_8px_32px_rgba(50,191,80,0.12)] transition-all duration-[0.35s] cubic-bezier(0.4,0,0.2,1) h-full flex flex-col">
                <div className="bg-[#E8F7EC] w-fit p-3.5 rounded-xl mb-6">
                  <Handshake size={32} color="#32BF50" />
                </div>
                <h3 className="font-['DM_Sans',sans-serif] text-[1.2rem] font-bold text-[#0A0A0A] mb-3">Somos sócios operacionais</h3>
                <p className="text-[#555555] leading-[1.65]">Não somos incubadora. Entregamos time montado e código rodando.</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
      {/* SECTION 3: SOLUVENTURES ANSWERS */}
      <section id="servicos" className="bg-white py-[clamp(60px,8vw,100px)] px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp>
            <h2 className="font-['DM_Sans',sans-serif] text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0A0A0A] text-center mb-12 max-w-[800px] mx-auto">
              Você tem desafios, a SoluVentures tem as soluções
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="max-w-[640px] mx-auto bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-[#E5E5E5] overflow-hidden">
              <div className="px-6 py-5 border-b border-[#F0F0F0] flex items-center justify-between bg-gray-50/50">
                <span className="font-semibold text-[#0A0A0A]">Pergunte-me qualquer coisa sobre startups</span>
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#32BF50]"></div>
                </div>
              </div>
              
              <div className="flex flex-col py-2">
                {[
                  "Como atravessar o vale da morte das startups?",
                  "Por que tantas startups falham antes do primeiro cliente?",
                  "Como transformar um problema real em uma startup?",
                  "Quando uma ideia deve virar uma empresa?",
                  "Como reduzir o risco ao criar uma startup?"
                ].map((prompt, i) => (
                  <button 
                    key={i}
                    className="flex items-center justify-between px-5 py-3.5 text-left border-l-[3px] border-transparent hover:bg-[#F0FFF4] hover:text-[#32BF50] hover:border-[#32BF50] transition-colors duration-200 group"
                  >
                    <span className="text-[0.9375rem] font-medium text-inherit">{prompt}</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#32BF50]" />
                  </button>
                ))}
              </div>
              
              <div className="p-4 border-t border-[#F0F0F0] bg-white">
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
                  <input 
                    type="text" 
                    placeholder="Faça sua pergunta..." 
                    className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-400"
                    disabled
                  />
                  <button className="bg-[#32BF50] text-white p-1.5 rounded-full hover:bg-[#259E40] transition-colors cursor-default">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
      {/* SECTION 4: SAFETY / TIME DE EXECUTORES */}
      <section id="cases" className="relative py-[clamp(80px,10vw,140px)] px-6 overflow-hidden bg-[#FCF5EB]">
        {/* Subtle noise texture and gradient background */}
        <div className="absolute inset-0 bg-[#FCF5EB] z-[-2]"></div>
        <div className="absolute inset-0 opacity-[0.03] z-[-1]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_70%)] z-[-1]"></div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <FadeInUp>
            <div className="inline-block bg-[#E8F7EC] text-[#259E40] rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] mb-6">
              Nossa equipe
            </div>
            <h2 className="font-['DM_Sans',sans-serif] text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0A0A0A] mb-6">
              Time de executores, não teóricos.
            </h2>
            <p className="text-[#555555] text-lg leading-[1.65] max-w-[500px]">
              Cada contrato começa com execução imediata. Sem recrutamento, sem atraso — nosso time já está pronto para transformar suas ideias em produtos escaláveis e tracionar no mercado.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Times previamente montados",
                desc: "Após assinatura do contrato, ao invés de iniciar recrutamento, iniciamos execução."
              },
              {
                title: "Inteligência de Mercado",
                desc: "Aumentamos em 82% a taxa de sobrevivência de startups com nossas metodologias."
              },
              {
                title: "Living labs governamentais",
                desc: "Acesso direto a tomadores de decisão para solucionar problemas reais de Smart Cities."
              },
              {
                title: "Internacionalização",
                desc: "Canal aberto com Fundos Soberanos dos EAU e Capital Europeu para captação."
              }
            ].map((item, index) => (
              <FadeInUp key={index} delay={0.08 * (index + 1)}>
                <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#E8F7EC] flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md cursor-default">
                  <div className="mt-0.5 shrink-0">
                    <CheckCircle2 size={24} color="#32BF50" />
                  </div>
                  <div>
                    <h4 className="font-['DM_Sans',sans-serif] font-bold text-[#0A0A0A] text-lg mb-1">{item.title}</h4>
                    <p className="text-[#555555] text-[0.95rem] leading-[1.5]">{item.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION 5: CTA */}
      <section className="bg-[#32BF50] py-[clamp(80px,10vw,140px)] px-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1e8535] opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-[680px] mx-auto text-center relative z-10">
          <FadeInUp>
            <h2 className="font-['DM_Sans',sans-serif] text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] text-white mb-6">
              Suas Startups deixarão de ser esporte radical.
            </h2>
            <p className="text-white/90 text-xl mb-10 font-medium">
              Risco é controlável, pois inovação é engenharia.
            </p>

            <div className="flex flex-col gap-4 mb-12 text-left max-w-[500px] mx-auto bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-white shrink-0" />
                <span className="text-white font-medium">Projeções baseadas em modelagem fundamentalista</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-white shrink-0" />
                <span className="text-white font-medium">Metodologia Lean Startup/Scrum</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-white shrink-0" />
                <span className="text-white font-medium">Injetamos Shared Services (jurídica, contábil com análise tributária)</span>
              </div>
            </div>

            <button className="bg-white text-[#32BF50] hover:bg-[#F0FFF4] px-9 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl w-full sm:w-auto">
              Quero reduzir os riscos das minhas startups!
            </button>
          </FadeInUp>
        </div>
      </section>
      {/* SECTION 6: FOOTER */}
      <footer className="bg-[#0A0A0A] pt-[60px] pb-[32px] px-6 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Column 1 */}
            <div>
              <div className="font-['DM_Sans',sans-serif] font-bold text-2xl text-white flex items-center mb-4">
                SoluVentures<span className="text-[#32BF50] w-2 h-2 rounded-full bg-[#32BF50] ml-1 mt-2 inline-block"></span>
              </div>
              <p className="text-white/60 max-w-[280px]">
                Seu parceiro de execução em inovação. Transformando ideias em negócios reais.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#porque-nos" onClick={(e) => scrollToSection(e, 'porque-nos')} className="text-white/80 hover:text-[#32BF50] transition-colors">Por que nós?</a></li>
                <li><a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')} className="text-white/80 hover:text-[#32BF50] transition-colors">Serviços</a></li>
                <li><a href="#cases" onClick={(e) => scrollToSection(e, 'cases')} className="text-white/80 hover:text-[#32BF50] transition-colors">Cases</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#32BF50] transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-[0.8rem]">
              © 2025 SoluVentures. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders if needed */}
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
