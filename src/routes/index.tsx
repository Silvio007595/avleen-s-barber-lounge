import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Scissors, Sparkles, MapPin, Phone, Instagram, MessageCircle, Menu, X, Check, Armchair, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/salon-hero.jpg';
import logo from '@/assets/avleens-logo.png.asset.json';
import { serviceGroups } from '@/lib/barber-services';

const whatsapp = 'https://wa.me/258848962998?text=' + encodeURIComponent('Olá, Avleen’s Barber! Gostaria de fazer uma marcação.');
const instagram = 'https://www.instagram.com/avleens_barber/';
const maps = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('1 de Maio, paragem padaria, Khongolote, Maputo, Moçambique');

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'Avleen’s Barber | Barbearia em Khongolote' },
  { name: 'description', content: 'Barbearia premium em Khongolote. Cortes para adultos e crianças, barba, barber terapia, limpeza facial e cuidados masculinos. Consulte serviços e preços em MZN.' },
  { property: 'og:title', content: 'Avleen’s Barber | Barbearia em Khongolote' },
  { property: 'og:description', content: 'O seu estilo, ao detalhe. Cortes e barba em Khongolote. Marque pelo WhatsApp: 84 8962998.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Index,
});

const services = [
 { number: '01', icon: Scissors, title: 'Cortes & estilo', description: 'Fade, punk, escovinha ou careca. Cortes para adultos e crianças, pintura de cabelo e acabamentos de precisão.' },
 { number: '02', icon: Smile, title: 'Barba & terapia', description: 'Barba express, alinhamento, pintura e barber terapia. Um cuidado completo, pensado para o seu visual.' },
 { number: '03', icon: Sparkles, title: 'Cuidados completos', description: 'Limpeza facial, sobrancelhas, depilação à cera, pedicure e unhas. Porque a diferença está em cada detalhe.' },
];

function Brand() { return <div className="brand-lockup"><img src={logo.url} alt="Logótipo oficial da Avleen’s Barber" width={150} height={150} className="brand-logo" /><div className="brand">Avleen’s Barber<span>BARBEARIA · KHONGOLOTE</span></div></div>; }
function Index() {
 const [menuOpen, setMenuOpen] = useState(false);
 return <>
  <header className="site-header">
   <div className="site-width header-inner">
    <a href="#inicio" aria-label="Avleen’s Barber — início"><Brand /></a>
    <nav className="desktop-nav" aria-label="Navegação principal">
     <a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#precos">Preços</a><a href="#visite">Onde estamos</a>
     <Button asChild variant="booking" size="lg"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Marcar agora <ArrowUpRight /></a></Button>
    </nav>
    <Button className="mobile-menu" variant="ghost" size="icon" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
   </div>
   {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel"><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#precos" onClick={() => setMenuOpen(false)}>Preços</a><a href="#visite" onClick={() => setMenuOpen(false)}>Onde estamos</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">Marcar pelo WhatsApp <ArrowUpRight className="inline size-4" /></a></nav>}
  </header>
  <main>
   <section className="hero" id="inicio">
    <img src={heroImage} alt="Interior ilustrativo de uma barbearia de alto padrão, sem pessoas" className="hero-photo" width={1920} height={1024} fetchPriority="high" />
    <div className="site-width hero-content">
     <div className="eyebrow">Barbearia premium · Khongolote</div>
     <h1>Avleen’s<br /><span>Barber.</span></h1>
     <p className="hero-description">Um espaço de excelência. Um estilo à sua altura.<br />Serviços de ponta e cuidado masculino completo, com a atenção que merece.</p>
     <div className="hero-actions"><Button asChild variant="booking" size="hero"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Marcar pelo WhatsApp <ArrowUpRight /></a></Button><Button asChild variant="heroOutline" size="hero"><a href="#servicos">Os nossos serviços <ArrowRight /></a></Button></div>
     <a className="hero-location" href={maps} target="_blank" rel="noopener noreferrer"><MapPin className="size-3.5" /> 1 de Maio, paragem padaria · Khongolote</a>
    </div>
    <div className="hero-caption">Excelência em cada detalhe</div>
   </section>
   <div className="values-band"><div className="site-width values-inner"><div className="value"><Scissors /> Serviços de ponta</div><div className="value"><Check /> Atendimento profissional</div><div className="value"><Armchair /> Conforto & sofisticação</div><div className="value"><MessageCircle /> Marcações pelo WhatsApp</div></div></div>
   <section id="servicos" className="section site-width">
    <div className="section-heading"><div><div className="eyebrow">A experiência Avleen’s</div><h2>O cuidado que o seu<br />estilo merece.</h2></div><p className="section-intro">Um salão de ponta para quem valoriza qualidade.<br />Do corte aos cuidados pessoais, uma experiência completa de estética masculina.</p></div>
    <div className="services-grid">{services.map(service => <article className="service" key={service.number}><div className="service-top"><service.icon className="service-icon" /><span className="service-number">/{service.number}</span></div><h3>{service.title}</h3><p>{service.description}</p><a className="service-link" href={'https://wa.me/258848962998?text=' + encodeURIComponent(`Olá, Avleen’s Barber! Gostaria de marcar: ${service.title}.`)} target="_blank" rel="noopener noreferrer">Marcar este serviço <ArrowUpRight className="size-4" /></a></article>)}</div>
   </section>
   <section id="precos" className="section price-section"><div className="site-width">
    <div className="section-heading"><div><div className="eyebrow">Serviços & preços</div><h2>Escolha o seu cuidado.</h2></div><p className="section-intro">Preços em meticais (MZN).<br />Combine os seus serviços e marque directamente connosco.</p></div>
    <div className="price-groups">{serviceGroups.map(group => <div className="price-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item, index) => <li className="price-row" key={`${item.name}-${index}`}><a href={'https://wa.me/258848962998?text=' + encodeURIComponent(`Olá! Gostaria de saber mais sobre ${item.name} (${item.price} MZN) e fazer uma marcação.`)} target="_blank" rel="noopener noreferrer"><span>{item.name}</span><strong>{item.price.toLocaleString('pt-MZ')} <small>MZN</small></strong></a></li>)}</ul></div>)}</div>
    <p className="price-note">A tabela inclui diferentes valores para barba express (150 e 200 MZN). Confirme a opção pretendida pelo WhatsApp.</p>
   </div></section>
   <section id="visite" className="section visit"><div className="site-width visit-inner">
    <div><div className="eyebrow">À sua espera, em Khongolote</div><h2>O seu próximo corte<br />começa aqui.</h2><a href={maps} target="_blank" rel="noopener noreferrer" className="contact-row"><MapPin /><div><strong>1 de Maio, paragem padaria</strong><span>Khongolote · Moçambique</span></div><ArrowUpRight className="ml-auto" /></a><a href="tel:+258848962998" className="contact-row"><Phone /><div><strong>84 896 2998</strong><span>Chamadas e WhatsApp</span></div><ArrowUpRight className="ml-auto" /></a><a href={instagram} target="_blank" rel="noopener noreferrer" className="contact-row"><Instagram /><div><strong>@avleens_barber</strong><span>Acompanhe-nos no Instagram</span></div><ArrowUpRight className="ml-auto" /></a></div>
    <div className="appointment"><div className="eyebrow">Reserve o seu momento</div><h2>Pronto para renovar<br />o seu visual?</h2><p>Fale connosco pelo WhatsApp para escolher o seu serviço e combinar o melhor horário para si.</p><Button asChild variant="booking" size="hero"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Fazer uma marcação <ArrowUpRight /></a></Button></div>
   </div></section>
  </main>
  <footer className="site-footer"><div className="site-width footer-inner"><a href="#inicio"><Brand /></a><p>© {new Date().getFullYear()} Avleen’s Barber. Todos os direitos reservados.</p><div className="footer-links"><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight className="inline size-3" /></a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight className="inline size-3" /></a></div></div></footer>
 </>;
}
