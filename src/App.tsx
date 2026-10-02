import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Menu,
  MousePointer2,
  Play,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const features = [
  {
    icon: MousePointer2,
    title: 'Todo en un mismo lugar',
    text: 'Organiza proyectos, tareas y conversaciones sin cambiar de contexto.',
    color: 'purple',
  },
  {
    icon: Users,
    title: 'Equipos conectados',
    text: 'Comparte avances y mantén a todos alineados en tiempo real.',
    color: 'orange',
  },
  {
    icon: BarChart3,
    title: 'Decisiones con datos',
    text: 'Visualiza el progreso y detecta oportunidades antes que nadie.',
    color: 'blue',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#" aria-label="Nexa inicio">
          <span className="brand-mark"><Sparkles size={16} fill="currentColor" /></span>
          nexa
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#producto" onClick={() => setMenuOpen(false)}>Producto</a>
          <a href="#equipo" onClick={() => setMenuOpen(false)}>Para equipos</a>
          <a href="#precios" onClick={() => setMenuOpen(false)}>Precios</a>
          <a href="#recursos" onClick={() => setMenuOpen(false)}>Recursos</a>
          <div className="nav-actions">
            <a className="login" href="#login">Iniciar sesión</a>
            <a className="button button-small" href="#demo">Prueba gratis <ArrowRight size={15} /></a>
          </div>
        </div>
      </nav>

      <section className="hero container" id="producto">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> La nueva forma de trabajar</div>
          <h1>Haz que tus ideas <em>avancen.</em></h1>
          <p className="hero-text">
            Nexa reúne todo lo que tu equipo necesita para transformar grandes ideas en resultados extraordinarios.
          </p>
          <div className="hero-actions">
            <a className="button" href="#demo">Empieza ahora <ArrowRight size={17} /></a>
            <a className="watch-link" href="#video"><span className="play-icon"><Play size={13} fill="currentColor" /></span> Ver cómo funciona</a>
          </div>
          <div className="proof">
            <div className="avatars">
              <span>J</span><span>M</span><span>A</span><span>+</span>
            </div>
            <div><strong>+2.000 equipos</strong><small>ya trabajan con Nexa</small></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Vista previa del espacio de trabajo">
          <div className="glow" />
          <div className="dashboard-card">
            <div className="dash-top">
              <div className="mini-brand"><span className="brand-mark"><Sparkles size={10} fill="currentColor" /></span> nexa</div>
              <div className="dash-user"><span className="status" /> Hola, Alex <ChevronDown size={13} /></div>
            </div>
            <div className="dash-body">
              <aside>
                <span className="side-active">◈ <b>Resumen</b></span>
                <span>◫ Proyectos</span><span>♧ Equipo</span><span>⚙ Ajustes</span>
                <div className="side-bottom"><span>Tu espacio</span><strong>+</strong></div>
              </aside>
              <div className="dash-content">
                <div className="dash-heading"><div><small>MIÉRCOLES, 02 OCTUBRE</small><h3>Buenos días, Alex <span>✦</span></h3></div><button>Compartir <ArrowRight size={12} /></button></div>
                <div className="stats"><div><small>PROYECTOS ACTIVOS</small><strong>12</strong><span className="up">↑ 18%</span></div><div><small>TAREAS COMPLETADAS</small><strong>84</strong><span className="up">↑ 24%</span></div></div>
                <div className="progress-box"><div className="progress-title"><strong>Progreso del equipo</strong><small>Esta semana <ChevronDown size={11} /></small></div><div className="chart"><i style={{ height: '38%' }} /><i style={{ height: '54%' }} /><i style={{ height: '45%' }} /><i style={{ height: '72%' }} /><i className="highlight" style={{ height: '88%' }} /><i style={{ height: '65%' }} /><i style={{ height: '76%' }} /></div><div className="days"><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted container"><p>Equipos que ya están construyendo el futuro</p><div><b>vertex</b><b className="serif">Morrow</b><b className="wide">NORTH<span>★</span>STAR</b><b className="mono">LUMEN</b><b className="italic">aplós</b></div></section>

      <section className="features container" id="equipo">
        <div className="section-intro"><div className="eyebrow">MENOS RUIDO. MÁS IMPACTO.</div><h2>Todo lo que necesitas.<br /><em>Nada que te distraiga.</em></h2></div>
        <div className="feature-grid">{features.map(({ icon: Icon, title, text, color }) => <article className="feature-card" key={title}><span className={`feature-icon ${color}`}><Icon size={20} /></span><h3>{title}</h3><p>{text}</p><a href="#recursos">Saber más <ArrowRight size={15} /></a></article>)}</div>
      </section>

      <section className="bottom-cta container" id="demo"><div><span className="eyebrow">TU PRÓXIMO GRAN PROYECTO</span><h2>Empieza a crear<br /><em>algo increíble.</em></h2></div><a className="button button-light" href="#signup">Crear mi espacio <ArrowRight size={17} /></a></section>
      <footer className="footer container" id="recursos"><span>© 2024 Nexa, Inc.</span><span>Hecho para equipos con ambición.</span></footer>
    </main>
  )
}

export default App
