import { projects, profile, music, anime, repositoryLink, projectStatus } from './content.js';

export const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const e = escapeHTML;
const number = index => String(index + 1).padStart(2, '0');
const eyebrow = label => `<div class="page-eyebrow eyebrow">${label}</div>`;

function featuredProject(project, index) {
  return `<article class="featured-project"><a href="#projects/${e(project.id)}"><div class="featured-project-top"><span class="project-number">${number(index)}</span><span class="featured-name">${e(project.name)}</span><span class="featured-arrow" aria-hidden="true">↗</span></div><p>${e(project.description)}</p><div class="project-meta"><span>${e(project.tech.slice(0, 2).join(' / '))}</span>${repositoryLink(project) ? '' : '<span class="local">· local / in development</span>'}</div></a></article>`;
}

export function homePage() {
  return `<article class="page home-page">
    <div class="readme-label"><span class="file-icon" aria-hidden="true">M↓</span> README.md <span>— a small introduction</span></div>
    <header class="readme-intro">
      <h1>hey, i’m levi.</h1>
      <p class="readme-subtitle">levi.napz <span>/</span> github: n0thhhing <span>/</span> systems programmer · artist</p>
      <p>I like knowing what’s underneath. I build tools close to the machine, draw characters, and spend a probably unreasonable amount of time getting my colors right.</p>
      <div class="readme-links"><a href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub (n0thhhing) ↗</a><a href="${profile.instagram}" target="_blank" rel="noopener noreferrer">Instagram (@levi.napz) ↗</a><a href="#projects">Browse projects →</a><a href="#about">More about me →</a></div>
    </header>
    <div class="profile-code" aria-label="The short version, in a little Zig-shaped profile">
      <div class="code-title"><span><span class="language-icon language-zig" aria-hidden="true">Z</span> profile.zig</span><span>the short version</span></div>
      <pre><code><span class="code-line"><span class="line-number" aria-hidden="true">1</span><span><b class="syntax-keyword">const</b> me = .{</span></span><span class="code-line"><span class="line-number" aria-hidden="true">2</span><span>    .handle = <b class="syntax-string">"levi.napz"</b>,</span></span><span class="code-line"><span class="line-number" aria-hidden="true">3</span><span>    .github = <b class="syntax-string">"n0thhhing"</b>,</span></span><span class="code-line"><span class="line-number" aria-hidden="true">4</span><span>    .code = .{ <b class="syntax-string">"Zig"</b>, <b class="syntax-string">"Rust"</b>, <b class="syntax-string">"ARM64"</b> },</span></span><span class="code-line"><span class="line-number" aria-hidden="true">5</span><span>    .other_half = <b class="syntax-string">"art, music & color"</b>,</span></span><span class="code-line"><span class="line-number" aria-hidden="true">6</span><span>    .favorite_theme = <b class="syntax-string">"Gruvbox Material"</b>,</span></span><span class="code-line"><span class="line-number" aria-hidden="true">7</span><span>};</span></span></code></pre>
    </div>
    <section aria-labelledby="selected-title"><div class="section-title"><h2 id="selected-title">Selected projects</h2><a href="#projects">Browse all ${projects.length} →</a></div><div class="featured-projects">${projects.filter(project => project.featured).map(featuredProject).join('')}</div></section>
    <div class="home-postscript"><span aria-hidden="true">✳</span><p>Almost everything I use wears <strong>Gruvbox Material</strong>. Color is a big part of how I experience a tool.<br><button class="inline-command" data-open-palette>Try one of my favorite themes</button>, or type <button class="inline-command" data-command="theme panda">theme panda</button> below.</p></div>
  </article>`;
}

export function aboutPage() {
  return `<article class="page prose">${eyebrow('README, BUT MAKE IT PERSONAL')}<h1 class="page-heading">A little about <span>the person.</span></h1>
    <p class="page-lead">I’m Levi, usually <strong>levi.napz</strong> online (and <strong>n0thhhing</strong> on GitHub). I like understanding the pieces underneath things, then making the things around them feel a little better.</p>
    <h2>It started on an Android phone.</h2>
    <p>My way into programming was through mobile-game modding: Lua scripts, Game Guardian, ADB shells, and a lot of trial and error. Pointers and memory addresses became useful because there was something right in front of me I wanted to understand.</p>
    <p>That curiosity kept moving down the stack. Now I spend time with <strong>Zig, Rust, ARM64, binary formats, and disassemblers</strong>. If something turns into the same tedious sequence every time, I’ll probably end up trying to automate it.</p>
    <div class="inline-note">The interesting part is usually: <strong>“okay, but how does it actually work?”</strong></div>
    <h2>The pixels matter, too.</h2>
    <p>I’m also an artist. I sketch characters and doodles in Clip Studio Paint, and that changes how I look at software. Color, spacing, contrast, and motion all affect how a tool feels to use. I can care about an instruction’s behavior and still spend ages choosing the right shade of green.</p>
    <p><strong>I love themes.</strong> Not just a dark-mode toggle. A whole set of colors that makes an environment feel like mine. Gruvbox Material is my favorite, and nearly everything I can theme is wearing it.</p>
    <h2>Learning by following the rabbit hole.</h2>
    <p>I’m studying at Rowan-Cabarrus Community College, working toward an Associate in Arts, with plans to transfer to UNC Charlotte for cybersecurity. Outside class, projects are how I connect the theory to something I can take apart and test.</p>
    <div class="journey"><span class="journey-year">the roots</span><div class="journey-detail"><h3>Lua, Android & a lot of experimenting</h3><p>Scripts, memory tools, and learning by changing something and seeing what happens.</p>
    </div>
    <span class="journey-year">the pull</span><div class="journey-detail"><h3>Closer to the machine</h3><p>NEON intrinsics, instruction decoding, binary analysis, and tools that make repetitive work disappear.</p>
    </div>
    <span class="journey-year">the balance</span><div class="journey-detail"><h3>Something useful. Something considered.</h3><p>Native apps, little interfaces, character sketches, music, and making my workspace feel like home.</p>
    </div>
    </div><p>Some projects are public. Some are still just folders on my machine. They’re all part of the same habit of being curious enough to try.</p>
    <a class="text-link" href="#art">A little more on art & color <span aria-hidden="true">→</span></a>
    </article>`;
}

export function projectsPage(category = 'All') {
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filtered = projects.filter(project => category === 'All' || project.category === category);
  return `<section class="page">${eyebrow('EXPERIMENTS THAT BECAME PROJECTS')}<h1 class="page-heading">From bits <span>to little worlds.</span></h1><p class="page-lead">Systems, reverse engineering, runtimes, and tools I wanted to exist. Some live on GitHub. Some are still taking shape locally.</p><div class="filter-bar" aria-label="Filter projects">${categories.map(name => `<button class="filter" data-filter="${e(name)}" aria-pressed="${category === name}">${e(name)}${name === 'All' ? ` (${projects.length})` : ''}</button>`).join('')}</div><div class="projects-list">${filtered.map((project, index) => `<a class="project-row" href="#projects/${e(project.id)}"><span class="project-number">${number(index)}</span><div><h2>${e(project.name)}</h2><p>${e(project.description)}</p><div class="project-meta">${e(project.tech.join(' / '))}</div></div><div class="project-status">${repositoryLink(project) ? '<span class="public-label">Public repository</span><br>' : ''}${e(projectStatus(project))}<br><span class="row-arrow" aria-hidden="true">Inspect project ↗</span></div></a>`).join('')}</div></section>`;
}

export function projectPage(project) {
  const repo = repositoryLink(project);
  return `<article class="page prose"><a href="#projects" class="back-link">← All projects</a>${eyebrow(e(project.category.toUpperCase()) + ' / PROJECT INSPECTOR')}<h1 class="page-heading">${e(project.name)}</h1><p class="page-lead">${e(project.description)}</p><div class="project-detail-status">${e(projectStatus(project))}</div><div class="tech-tags">${project.tech.map(tech => `<span class="tech-tag">${e(tech)}</span>`).join('')}</div><h2>Under the hood</h2><ul class="detail-list">${project.details.map(detail => `<li>${e(detail)}</li>`).join('')}</ul>${project.snippet ? `<pre class="code-block"><code>${e(project.snippet)}</code></pre>` : ''}<div class="detail-footer">${repo ? `<a class="primary-link" href="${e(repo)}" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>` : '<span>Still in my local workspace. No public repository yet.</span>'}<a class="text-link" href="#projects">Keep exploring <span aria-hidden="true">→</span></a></div></article>`;
}

export function artPage() {
  return `<article class="page prose">${eyebrow('AWAY FROM THE COMPILER')}<h1 class="page-heading">I think in <span>color, too.</span></h1>
    <p class="page-lead">Character sketches, little doodles, and a lot of time noticing how a color changes when you put it next to another one.</p>
    <div class="color-study" aria-label="Five colors from the active theme"><div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    </div><div class="color-study-caption">ONE PALETTE. A WHOLE DIFFERENT FEELING.</div>
    <h2>Art isn’t a separate part of me.</h2>
    <p>I draw in <strong>Clip Studio Paint</strong>, mostly character illustrations and sketches. The patience for small details follows me back into code: a little spacing, a slightly warmer background, the way a transition lands.</p>
    <p>I don’t think something has to choose between being technically interesting and feeling good to use. I want both, even when the thing I’m building lives in a terminal.</p>
    <h2>And yes, I really like themes.</h2>
    <p><strong>Gruvbox Material</strong> is my favorite. Warm colors, softer contrast, and a palette I can live in for hours. I’ve themed nearly everything I use with it. Gruvbox, Panda, Dracula, Monokai Pro, and Catppuccin Frappé are the rest of my favorites, in that order.</p>
    <p>This workspace is a small way of sharing that. The same content can feel completely different with another set of colors. <button class="inline-command" data-open-palette>Try a different palette</button> and see what feels right to you.</p>
    <div class="inline-note">Color isn’t the finishing touch for me. <strong>It’s part of how I experience the whole thing.</strong></div>
    <p>I keep my art over on Instagram. Sketches and that side of my life live there.</p>
    <a class="primary-link" href="${profile.instagram}" target="_blank" rel="noopener noreferrer">@levi.napz on Instagram <span aria-hidden="true">↗</span></a>
    </article>`;
}

export function interestsPage() {
  return `<article class="page">${eyebrow('THE OTHER OPEN TABS')}<h1 class="page-heading">Usually, there’s <span>music on.</span></h1><p class="page-lead">Coding, drawing, getting distracted by a story. A few things that keep me company away from the technical details.</p><div class="interest-grid"><section class="interest-section"><span class="eyebrow">01 / HEAVY ROTATION</span><h2>On repeat.</h2>${music.map((artist, index) => `<div class="music-row"><span>${number(index)}</span><span>${e(artist)}</span><span class="equalizer" aria-hidden="true">${['▂▅▃', '▅▂▄', '▃▆▂'][index % 3]}</span></div>`).join('')}<p class="interest-footnote">A few favorites, in no particular order.<br>This is a curated list, not live playback.</p></section><section class="interest-section"><span class="eyebrow">02 / FAVORITE STORIES</span><h2>These stayed with me.</h2>${anime.map((name, index) => `<div class="anime-row">${e(name)}<span>FAVORITE / ${number(index)}</span></div>`).join('')}<p class="interest-footnote">Tokyo Ghoul. Steins;Gate.<br>Terror in Resonance.<br><br>The atmosphere is part of it.</p></section></div><div class="inline-note">Music and drawing are as much a part of my workspace as the editor. <strong>The colors probably give that away.</strong></div></article>`;
}

export function renderPage(route, category = 'All') {
  const [page, id] = route.split('/');
  const project = projects.find(project => project.id === id);
  if (project) return projectPage(project);
  const views = { home: homePage, about: aboutPage, projects: () => projectsPage(category), art: artPage, interests: interestsPage };
  return (views[page] ?? homePage)();
}
