import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Scissors, Sparkles, MapPin, Phone, Instagram, MessageCircle, Menu, X, Check, Armchair, Clock, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/barber-hero.jpg';

const whatsapp = 'https://wa.me/258848962998?text=' + encodeURIComponent('Olá, Avleen’s Barber! Gostaria de fazer uma marcação.');
const instagram = 'https://www.instagram.com/avleens_barber/';
const maps = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('1 de Maio, paragem padaria, Maputo, Moçambique');

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'Avleen’s Barber | Barbearia na Grande Maputo' },
  { name: 'description', content: 'Corte com fade, alinhamento de barba e acabamentos detalhados na Avleen’s Barber. Visite-nos em 1 de Maio, paragem padaria, Grande Maputo. Marcações: 84 8962998.' },
  { property: 'og:title', content: 'Avleen’s Barber | Barbearia na Grande Maputo' },
  { property: 'og:description', content: 'O seu estilo, ao detalhe. Cortes e barba na Grande Maputo. Marque pelo WhatsApp: 84 8962998.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Index,
});

const services = [
 { number: '01', icon: Scissors, title: 'Corte de cabelo', description: 'Do clássico ao fade. Um corte à sua medida, com degradê preciso e atenção a cada detalhe.' },
 { number: '02', icon: Smile, title: 'Barba alinhada', description: 'Alinhamento e tratamento para uma barba cuidada, com contornos definidos e um visual impecável.' },
 { number: '03', icon: Sparkles, title: 'Acabamentos', description: 'Os pequenos detalhes fazem a diferença. Linhas precisas e um acabamento que completa o seu estilo.' },
];

function Brand() { return <div className="brand">Avleen’s Barber<span>BARBEARIA · MAPUTO</span></div>; }
function Index() {
 const [menuOpen, setMenuOpen] = useState(false);
 return <>
  <header className="site-header">
   <div className="site-width header-inner">
    <a href="#inicio" aria-label="Avleen’s Barber — início"><Brand /></a>
    <nav className="desktop-nav" aria-label="Navegação principal">
     <a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#visite">Onde estamos</a>
     <Button asChild variant="booking" size="lg"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Marcar agora <ArrowUpRight /></a></Button>
    </nav>
    <Button className="mobile-menu" variant="ghost" size="icon" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
   </div>
   {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel"><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#visite" onClick={() => setMenuOpen(false)}>Onde estamos</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">Marcar pelo WhatsApp <ArrowUpRight className="inline size-4" /></a></nav>}
  </header>
  <main>
   <section className="hero" id="inicio">
    <img src={heroImage} alt="Imagem ilustrativa de um corte com fade e barba alinhada" className="hero-photo" width={1920} height={1024} fetchPriority="high" />
    <div className="site-width hero-content">
     <div className="eyebrow">Mais que um corte. O seu estilo.</div>
     <h1>Avleen’s<br /><span>Barber.</span></h1>
     <p className="hero-description">O seu estilo, ao detalhe.<br />Cortes precisos, barba alinhada e a confiança de sair no seu melhor.</p>
     <div className="hero-actions"><Button asChild variant="booking" size="hero"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Marcar pelo WhatsApp <ArrowUpRight /></a></Button><Button asChild variant="heroOutline" size="hero"><a href="#servicos">Os nossos serviços <ArrowRight /></a></Button></div>
     <a className="hero-location" href={maps} target="_blank" rel="noopener noreferrer"><MapPin className="size-3.5" /> 1 de Maio, paragem padaria · Grande Maputo</a>
    </div>
    <div className="hero-caption">Precisão em cada detalhe</div>
   </section>
   <div className="values-band"><div className="site-width values-inner"><div className="value"><Scissors /> Cortes à sua medida</div><div className="value"><Check /> Atendimento profissional</div><div className="value"><Armchair /> Ambiente confortável</div><div className="value"><MessageCircle /> Marcações pelo WhatsApp</div></div></div>
   <section id="servicos" className="section site-width">
    <div className="section-heading"><div><div className="eyebrow">O que fazemos</div><h2>O cuidado que o seu<br />estilo merece.</h2></div><p className="section-intro">Técnica, atenção e personalidade.<br />Do corte aos acabamentos, cuidamos de cada detalhe para valorizar o seu visual.</p></div>
    <div className="services-grid">{services.map(service => <article className="service" key={service.number}><div className="service-top"><service.icon className="service-icon" /><span className="service-number">/{service.number}</span></div><h3>{service.title}</h3><p>{service.description}</p><a className="service-link" href={'https://wa.me/258848962998?text=' + encodeURIComponent(`Olá, Avleen’s Barber! Gostaria de marcar: ${service.title}.`)} target="_blank" rel="noopener noreferrer">Marcar este serviço <ArrowUpRight className="size-4" /></a></article>)}</div>
   </section>
   <section id="visite" className="section visit"><div className="site-width visit-inner">
    <div><div className="eyebrow">À sua espera, em Maputo</div><h2>O seu próximo corte<br />começa aqui.</h2><a href={maps} target="_blank" rel="noopener noreferrer" className="contact-row"><MapPin /><div><strong>1 de Maio, paragem padaria</strong><span>Grande Maputo · Moçambique</span></div><ArrowUpRight className="ml-auto" /></a><a href="tel:+258848962998" className="contact-row"><Phone /><div><strong>84 896 2998</strong><span>Chamadas e WhatsApp</span></div><ArrowUpRight className="ml-auto" /></a><a href={instagram} target="_blank" rel="noopener noreferrer" className="contact-row"><Instagram /><div><strong>@avleens_barber</strong><span>Acompanhe-nos no Instagram</span></div><ArrowUpRight className="ml-auto" /></a></div>
    <div className="appointment"><div className="eyebrow">Reserve o seu momento</div><h2>Pronto para renovar<br />o seu visual?</h2><p>Fale connosco pelo WhatsApp para escolher o seu serviço e combinar o melhor horário para si.</p><Button asChild variant="booking" size="hero"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Fazer uma marcação <ArrowUpRight /></a></Button></div>
   </div></section>
  </main>
  <footer className="site-footer"><div className="site-width footer-inner"><a href="#inicio"><Brand /></a><p>© {new Date().getFullYear()} Avleen’s Barber. Todos os direitos reservados.</p><div className="footer-links"><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight className="inline size-3" /></a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight className="inline size-3" /></a></div></div></footer>
 </>;
}
