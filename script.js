/* =========================================================
   DADOS — edite aqui seu conteúdo
   ========================================================= */
const ROLES = ['Desenvolvedor Frontend | Fullstack', 'Especialista em React', 'Criador de Soluções'];

const SKILLS = {
    dev: [
        { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26', level: 95 },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6', level: 90 },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e', level: 88 },
        { name: 'TypeScript', icon: 'fas fa-code', color: '#3178c6', level: 80 },
        { name: 'React.js', icon: 'fab fa-react', color: '#61dafb', level: 88 },
        { name: 'Next.js', icon: 'fas fa-n', color: '#e8e8e8', level: 78 },
        { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38bdf8', level: 85 },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#68a063', level: 70 },
        { name: 'Supabase', icon: 'fas fa-bolt', color: '#3ecf8e', level: 75 },
    ],
    tools: [
        { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032', level: 88 },
        { name: 'GitHub', icon: 'fab fa-github', color: '#e8e8e8', level: 88 },
        { name: 'VS Code', icon: 'fas fa-code', color: '#007acc', level: 92 },
        { name: 'Figma', icon: 'fab fa-figma', color: '#a259ff', level: 70 },
        { name: 'Claude', icon: 'fas fa-asterisk', color: '#d97757', level: 92 },
        { name: 'ChatGPT', icon: 'fas fa-robot', color: '#10a37f', level: 88 },
        { name: 'Gemini', icon: 'fas fa-wand-magic-sparkles', color: '#8e75ff', level: 82 },
    ],
};

// image: 'assets/projetos/nome.jpg' (deixe vazio para usar o placeholder)
const PROJECTS = [
    {
        title: 'Ellev Mobility | Site Institucional',
        category: 'web',
        image: 'assets/projetos/ellev-logo.jpg',
        logo: true,
        logoGlow: 'rgba(255, 255, 255, 0.10)',
        icon: 'fas fa-motorcycle',
        desc: 'Desenvolvimento de site institucional e catálogo interativo de produtos priorizando alta usabilidade, arquitetura limpa e JavaScript moderno.',
        points: [
            ['Testes de Responsividade & Otimização', 'Execução de testes no código e testes cross-browser para assegurar compatibilidade mobile-first e rápido carregamento.'],
            ['Colaboração e Metodologia Ágil', 'Participação em reuniões de alinhamento e ciclos ágeis para levantamento de requisitos, refinamento e entrega de valor ao cliente.'],
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Mobile-First'],
        demo: '#', // coloque aqui o link do site
        code: '',
    },
    {
        title: 'BellasUp | Agendamento Inteligente',
        category: 'fullstack',
        image: 'assets/projetos/bellasup.svg',
        icon: 'fas fa-calendar-check',
        desc: '🚀 Aplicação de agendamento e gestão inteligente com validação real-time, integração via API do WhatsApp e checkout Pix com cronômetro reativo. Interface UX/UI fluida e otimizada para conversão. Repositório privado por segurança e propriedade intelectual.',
        note: 'Ao acessar o site, cadastre-se para testar as funcionalidades.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'API WhatsApp', 'Vite'],
        demo: '#', // coloque aqui o link do site
        code: '',  // vazio = repositório privado (esconde o botão do GitHub)
    },
    {
        title: 'Thunder Eletric Ce | Plataforma Web',
        category: 'web',
        image: 'assets/projetos/thunder.jpg',
        logo: true, // imagem é um logo: exibe inteiro e centralizado
        logoGlow: 'rgba(230, 70, 40, 0.16)',
        icon: 'fas fa-bolt',
        desc: 'Construção e evolução de plataforma web responsiva para apresentação de catálogo e conversão de leads via WhatsApp.',
        points: [
            ['Banco de Dados & Integração', 'Modelagem e manipulação de dados para catálogo de produtos e localização, garantindo alta velocidade e testes no código.'],
            ['Inovação com Inteligência Artificial', 'Aplicação de ferramentas e agentes de IA para otimização de performance, SEO e integração automatizada de prova social.'],
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Mobile-First', 'SEO'],
        demo: '#', // coloque aqui o link do site
        code: '',
    },
];

const EVENTS = [
    { title: 'Workshop de React', category: 'workshop', image: '', icon: 'fas fa-chalkboard-user', date: 'Mar 2026', desc: 'Workshop introdutório para iniciantes em React.' },
    { title: 'Hackathon Regional', category: 'hackathon', image: '', icon: 'fas fa-trophy', date: 'Mai 2026', desc: '48 horas construindo uma solução em equipe.' },
    { title: 'Palestra sobre Carreira', category: 'talk', image: '', icon: 'fas fa-microphone', date: 'Jul 2026', desc: 'Compartilhando a jornada na área de tecnologia.' },
    { title: 'Workshop de Git', category: 'workshop', image: '', icon: 'fab fa-git-alt', date: 'Ago 2026', desc: 'Versionamento na prática, do commit ao pull request.' },
    { title: 'Game Jam', category: 'hackathon', image: '', icon: 'fas fa-gamepad', date: 'Set 2026', desc: 'Criação de um jogo em um fim de semana.' },
    { title: 'Meetup de Devs', category: 'talk', image: '', icon: 'fas fa-users', date: 'Out 2026', desc: 'Encontro da comunidade local de desenvolvimento.' },
];

const CATEGORY_LABEL = { workshop: 'Workshop', hackathon: 'Hackathon', talk: 'Palestra' };

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================
   LOADER
   ========================================================= */
const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loader-fill');
const loaderPercent = document.getElementById('loader-percent');
document.body.classList.add('loading');

let progress = 0;
const loadTimer = setInterval(() => {
    progress = Math.min(100, progress + Math.random() * 18 + 6);
    loaderFill.style.transform = `scaleX(${progress / 100})`;
    loaderPercent.textContent = `${Math.round(progress)}%`;
    if (progress >= 100) {
        clearInterval(loadTimer);
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
            startHero();
        }, 300);
    }
}, 110);

function startHero() {
    document.querySelectorAll('.hero-anim').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), i * 140);
    });
    setTimeout(typeLoop, 600);
    setTimeout(() => document.querySelectorAll('.hero .counter').forEach(animateCounter), 900);
}

/* =========================================================
   CURSOR
   ========================================================= */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = -100, my = -100, rx = -100, ry = -100;

window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
});

(function followCursor() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(followCursor);
})();

document.addEventListener('mouseover', (e) => {
    ring.classList.toggle('hover', !!e.target.closest('a, button, .event-card, input, textarea'));
});

/* =========================================================
   PARTÍCULAS
   ========================================================= */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 16000));
    particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        a: Math.random() * 0.5 + 0.2,
    }));
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const light = document.body.classList.contains('light');
    const rgb = light ? '168, 138, 82' : '198, 167, 106';

    for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.a})`;
        ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d = Math.hypot(dx, dy);
            if (d < 120) {
                ctx.strokeStyle = `rgba(${rgb}, ${0.12 * (1 - d / 120)})`;
                ctx.lineWidth = 0.6;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
        // conexão com o mouse
        const dm = Math.hypot(particles[i].x - mx, particles[i].y - my);
        if (dm < 160) {
            ctx.strokeStyle = `rgba(${rgb}, ${0.25 * (1 - dm / 160)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mx, my);
            ctx.stroke();
        }
    }
    requestAnimationFrame(drawParticles);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
if (!reduceMotion) drawParticles();

/* =========================================================
   NAVBAR
   ========================================================= */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');
const backToTop = document.getElementById('back-to-top');

function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);
    backToTop.classList.toggle('show', y > 600);

    let current = 'home';
    sections.forEach((s) => {
        if (y >= s.offsetTop - window.innerHeight * 0.35) current = s.id;
    });
    navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
}));

/* =========================================================
   TEMA
   ========================================================= */
const themeToggle = document.getElementById('theme-toggle');
function setTheme(light) {
    document.body.classList.toggle('light', light);
    themeToggle.innerHTML = light ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch (e) { /* sem storage */ }
}
try { setTheme(localStorage.getItem('theme') === 'light'); } catch (e) { setTheme(false); }
themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('light')));

/* =========================================================
   TYPEWRITER
   ========================================================= */
const typeEl = document.getElementById('typewriter');
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
    const word = ROLES[roleIdx];
    charIdx += deleting ? -1 : 1;
    typeEl.textContent = word.slice(0, charIdx);

    let delay = deleting ? 45 : 95;
    if (!deleting && charIdx === word.length) { deleting = true; delay = 1800; }
    else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; delay = 400; }
    setTimeout(typeLoop, delay);
}

/* =========================================================
   CONTADORES
   ========================================================= */
function animateCounter(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const target = +el.dataset.target;
    const duration = 1800;
    const start = performance.now();
    (function tick(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased);
        if (t < 1) requestAnimationFrame(tick);
    })(start);
}

/* =========================================================
   REVEAL AO ROLAR
   ========================================================= */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('visible');
        el.querySelectorAll('.counter').forEach(animateCounter);
        if (el.classList.contains('counter')) animateCounter(el);
        if (el.querySelector('#donut')) animateDonut();
        revealObserver.unobserve(el);
    });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

function observeReveals(root = document) {
    root.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
        if (el.classList.contains('visible')) return;
        // atraso escalonado para itens irmãos
        const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
        const idx = siblings.indexOf(el);
        if (idx > 0) el.style.transitionDelay = `${Math.min(idx, 6) * 0.1}s`;
        revealObserver.observe(el);
    });
}

/* =========================================================
   SKILLS
   ========================================================= */
const skillsGrid = document.getElementById('skills-grid');
function renderSkills(cat) {
    skillsGrid.innerHTML = SKILLS[cat].map((s, i) => `
        <div class="skill-card" style="animation-delay:${i * 0.07}s">
            <div class="skill-top">
                <div class="skill-icon"><i class="${s.icon}" style="color:${s.color}"></i></div>
                <div><h4>${s.name}</h4><span>${s.level}%</span></div>
            </div>
            <div class="skill-bar"><i data-level="${s.level}"></i></div>
        </div>`).join('');
    requestAnimationFrame(() => requestAnimationFrame(() => {
        skillsGrid.querySelectorAll('.skill-bar i').forEach((b) => { b.style.transform = `scaleX(${b.dataset.level / 100})`; });
    }));
}
setupTabs('skill-tabs', 'cat', renderSkills);

/* =========================================================
   PROJETOS
   ========================================================= */
const projectsGrid = document.getElementById('projects-grid');
function renderProjects() {
    projectsGrid.innerHTML = PROJECTS.map((p, i) => `
        <article class="project-card" style="animation-delay:${i * 0.08}s">
            <div class="project-thumb${p.logo ? ' is-logo' : ''}"${p.logoGlow ? ` style="--glow:${p.logoGlow}"` : ''}>
                ${p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy"${p.imagePosition ? ` style="object-position:${p.imagePosition}"` : ''}>` : `<div class="thumb-ph"><i class="${p.icon}"></i></div>`}
                <div class="project-overlay">
                    <a href="${p.demo}" target="_blank" rel="noopener" aria-label="Ver demo"><i class="fas fa-arrow-up-right-from-square"></i></a>
                    ${p.code ? `<a href="${p.code}" target="_blank" rel="noopener" aria-label="Ver código"><i class="fab fa-github"></i></a>` : ''}
                </div>
            </div>
            <div class="project-info">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                ${p.points ? `<ul class="project-points">${p.points.map(([t, d]) => `<li><strong>${t}:</strong> ${d}</li>`).join('')}</ul>` : ''}
                ${p.note ? `<p class="project-note"><i class="fas fa-circle-info"></i> ${p.note}</p>` : ''}
                <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</div>
            </div>
        </article>`).join('');
}
renderProjects();

/* =========================================================
   GALERIA + LIGHTBOX
   ========================================================= */
const galleryGrid = document.getElementById('gallery-grid');
function mediaHTML(item) {
    return item.image
        ? `<img src="${item.image}" alt="${item.title}" loading="lazy">`
        : `<div class="thumb-ph"><i class="${item.icon}"></i></div>`;
}
function renderGallery(filter) {
    const list = EVENTS.filter((e) => filter === 'all' || e.category === filter);
    galleryGrid.innerHTML = list.map((e, i) => `
        <div class="event-card" data-index="${EVENTS.indexOf(e)}" style="animation-delay:${i * 0.08}s" tabindex="0">
            <div class="event-img">
                ${mediaHTML(e)}
                <span class="tag">${CATEGORY_LABEL[e.category]}</span>
                <div class="event-overlay"><span><i class="fas fa-expand"></i> Ver</span></div>
            </div>
            <div class="event-body">
                <h4>${e.title}</h4>
                <p>${e.desc}</p>
                <small><i class="far fa-calendar"></i> ${e.date}</small>
            </div>
        </div>`).join('');
}
setupTabs('gallery-filters', 'filter', renderGallery);

const lightbox = document.getElementById('lightbox');
function openLightbox(idx) {
    const e = EVENTS[idx];
    document.getElementById('lightbox-img').innerHTML = mediaHTML(e);
    document.getElementById('lightbox-tag').textContent = CATEGORY_LABEL[e.category];
    document.getElementById('lightbox-title').textContent = e.title;
    document.getElementById('lightbox-desc').textContent = `${e.date} · ${e.desc}`;
    lightbox.classList.add('open');
}
function closeLightbox() { lightbox.classList.remove('open'); }

galleryGrid.addEventListener('click', (ev) => {
    const card = ev.target.closest('.event-card');
    if (card) openLightbox(+card.dataset.index);
});
galleryGrid.addEventListener('keydown', (ev) => {
    const card = ev.target.closest('.event-card');
    if (card && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); openLightbox(+card.dataset.index); }
});
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (ev) => { if (ev.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') closeLightbox(); });

/* =========================================================
   TABS genéricas
   ========================================================= */
function setupTabs(containerId, attr, render) {
    const container = document.getElementById(containerId);
    const buttons = container.querySelectorAll('.tab-btn');
    buttons.forEach((btn) => btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        render(btn.dataset[attr]);
    }));
    render(container.querySelector('.tab-btn.active').dataset[attr]);
}

/* =========================================================
   GITHUB — dados ao vivo
   ========================================================= */
const GH_USER = 'kesleysantos-dev';
const LANG_COLORS = {
    JavaScript: '#f7df1e', TypeScript: '#3178c6', HTML: '#e34f26', CSS: '#663399',
    Python: '#3572a5', Vue: '#41b883', SCSS: '#c6538c', Shell: '#89e051',
};
const FALLBACK_COLORS = ['#c6a76a', '#e1c895', '#8e75ff', '#4ade80', '#f87171', '#38bdf8'];
let ghLangs = null;
let donutVisible = false;

// Usado só se nenhuma API responder. Ajuste os pesos como preferir.
const FALLBACK_LANGS = [['JavaScript', 45], ['TypeScript', 30], ['HTML', 15], ['CSS', 10]];
const CACHE_TTL = 60 * 60 * 1000; // 1 hora

const setText = (id, value) => { document.getElementById(id).textContent = value; };

function readCache(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
}
function writeCache(key, data) {
    try { localStorage.setItem(key, JSON.stringify({ time: Date.now(), data })); } catch (e) { /* sem storage */ }
}

// Busca com cache: usa o cache recente, senão a rede; se a rede falhar, usa cache antigo.
async function cachedJSON(url) {
    const key = `gh-cache:${url}`;
    const cached = readCache(key);
    if (cached && Date.now() - cached.time < CACHE_TTL) return cached.data;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        writeCache(key, data);
        return data;
    } catch (err) {
        console.warn('[GitHub]', url, err.message);
        if (cached) return cached.data;
        throw err;
    }
}

// Repositórios: API oficial; se falhar (limite de 60/h), usa o espelho ungh.cc
async function loadRepos() {
    try {
        return await cachedJSON(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=pushed`);
    } catch (e) {
        const data = await cachedJSON(`https://ungh.cc/users/${GH_USER}/repos`);
        return (data.repos || [])
            .map((r) => ({
                name: r.name, description: r.description, language: r.language || null, fork: false,
                html_url: `https://github.com/${r.repo || `${GH_USER}/${r.name}`}`,
                pushed_at: r.pushedAt || r.updatedAt,
            }))
            .sort((x, y) => new Date(y.pushed_at) - new Date(x.pushed_at));
    }
}

async function loadGitHub() {
    const sync = document.getElementById('gh-sync');
    const [profile, repos] = await Promise.allSettled([
        cachedJSON(`https://api.github.com/users/${GH_USER}`),
        loadRepos(),
    ]);

    if (profile.status === 'fulfilled') {
        const p = profile.value;
        if (p.name) setText('gh-name', p.name);
    }

    if (repos.status === 'fulfilled') {
        const own = repos.value.filter((r) => !r.fork);
        renderLanguages(own);
        renderRecentRepos(own.slice(0, 3));
    } else {
        document.getElementById('gh-repos-list').innerHTML =
            `<div class="focus-item"><i class="fab fa-github"></i><div><strong>Veja no GitHub</strong><p><a class="accent" href="https://github.com/${GH_USER}?tab=repositories" target="_blank" rel="noopener">Abrir lista de repositórios</a></p></div></div>`;
        renderLanguages([]);
    }

    sync.textContent = repos.status === 'fulfilled' ? 'Dados ao vivo' : 'Offline';
    sync.classList.toggle('live', sync.textContent === 'Dados ao vivo');
}

function renderLanguages(repos) {
    const counts = {};
    repos.forEach((r) => { if (r.language) counts[r.language] = (counts[r.language] || 0) + 1; });
    let entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    if (!entries.length) entries = FALLBACK_LANGS;
    const top = entries.slice(0, 4);
    const others = entries.slice(4).reduce((sum, [, n]) => sum + n, 0);
    if (others) top.push(['Outras', others]);
    const total = top.reduce((sum, [, n]) => sum + n, 0) || 1;

    ghLangs = top.map(([name, n], i) => ({
        name, n, pct: (n / total) * 100,
        color: LANG_COLORS[name] || FALLBACK_COLORS[i % FALLBACK_COLORS.length],
    }));

    document.getElementById('lang-list').innerHTML = ghLangs.map((l) => `
        <div class="diff-row"><span class="diff-dot" style="background:${l.color}"></span>${l.name}<b>${Math.round(l.pct)}%</b>
            <div class="diff-bar"><i style="--w:${(l.pct / 100).toFixed(3)};background:${l.color}"></i></div></div>`).join('');
    setText('donut-total', '0');
    if (donutVisible) animateDonut();
}

function animateDonut() {
    donutVisible = true;
    if (!ghLangs) return;
    const donut = document.getElementById('donut');
    const totalEl = document.getElementById('donut-total');
    const start = performance.now();
    (function tick(now) {
        const t = Math.min(1, (now - start) / 1400);
        const k = 1 - Math.pow(1 - t, 3);
        let acc = 0;
        const stops = ghLangs.map((l) => {
            const from = acc * k; acc += l.pct;
            return `${l.color} ${from}% ${acc * k}%`;
        });
        donut.style.background = `conic-gradient(${stops.join(', ')}, rgba(255,255,255,.06) 0 100%)`;
        totalEl.textContent = Math.round(ghLangs.filter((l) => l.name !== 'Outras').length * k);
        if (t < 1) requestAnimationFrame(tick);
    })(start);
    document.getElementById('lang-list').closest('.reveal')?.classList.add('visible');
}

function renderRecentRepos(repos) {
    const fmt = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
    document.getElementById('gh-repos-list').innerHTML = repos.map((r) => `
        <a class="focus-item repo-item" href="${r.html_url}" target="_blank" rel="noopener">
            <i class="fas fa-book-bookmark"></i>
            <div>
                <strong>${r.name}</strong>
                <p>${r.description ? r.description : 'Sem descrição.'}</p>
                <small>${r.language ? `<span class="diff-dot" style="background:${LANG_COLORS[r.language] || '#c6a76a'}"></span>${r.language} · ` : ''}Atualizado em ${fmt.format(new Date(r.pushed_at))}</small>
            </div>
        </a>`).join('') || '<p class="muted">Nenhum repositório público ainda.</p>';
}

// Grade ilustrativa (preenchimento fictício)
(function buildActivity() {
    const chart = document.getElementById('activity-chart');
    const cells = [];
    for (let i = 0; i < 52 * 7; i++) {
        const r = Math.random();
        const level = r < 0.45 ? 0 : r < 0.68 ? 1 : r < 0.84 ? 2 : r < 0.95 ? 3 : 4;
        cells.push(`<span data-l="${level}"></span>`);
    }
    chart.innerHTML = cells.join('');
})();

loadGitHub();

/* =========================================================
   SLIDER DE DEPOIMENTOS
   ========================================================= */
const track = document.getElementById('slider-track');
const slides = track.children;
const dotsWrap = document.getElementById('slider-dots');
let slide = 0, autoSlide;

[...slides].forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Depoimento ${i + 1}`);
    dot.addEventListener('click', () => { goTo(i); restartAuto(); });
    dotsWrap.appendChild(dot);
});

function goTo(i) {
    slide = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${slide * 100}%)`;
    [...dotsWrap.children].forEach((d, idx) => d.classList.toggle('active', idx === slide));
}
function restartAuto() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => goTo(slide + 1), 5000);
}
document.getElementById('prev').addEventListener('click', () => { goTo(slide - 1); restartAuto(); });
document.getElementById('next').addEventListener('click', () => { goTo(slide + 1); restartAuto(); });
goTo(0);
restartAuto();

/* =========================================================
   FORMULÁRIO
   Para envio real, use Formspree/EmailJS/Netlify Forms.
   ========================================================= */
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject'));
    const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`);
    window.location.href = `mailto:kesleysantos.dev@gmail.com?subject=${subject}&body=${body}`;
    status.className = 'form-status ok';
    status.textContent = 'Abrindo seu app de e-mail… Obrigado pela mensagem!';
    form.reset();
});

/* =========================================================
   INIT
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
observeReveals();
