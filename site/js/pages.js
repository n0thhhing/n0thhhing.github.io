import { projects, profile, music, anime, repositoryLink, projectStatus, hackathons, ossContributions } from './content.js';
import { projectPage } from './project-page.js';

export const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const e = escapeHTML;
const number = index => String(index + 1).padStart(2, '0');
const eyebrow = label => `<div class="page-eyebrow eyebrow">${label}</div>`;

function featuredProject(project, index) {
  return `<article class="featured-project"><a href="#projects/${e(project.id)}"><div class="featured-project-top"><span class="project-number">${number(index)}</span><span class="featured-name">${e(project.name)}</span><span class="featured-arrow" aria-hidden="true">↗</span></div><p>${e(project.description)}</p><div class="project-meta"><span>${e(project.tech.slice(0, 2).join(' / '))}</span>${repositoryLink(project) ? '' : '<span class="local">· local / in development</span>'}</div></a></article>`;
}

export function homePage() {
  return `<article class="page home-page">
    <div class="readme-label"><span class="file-icon" aria-hidden="true">M↓</span> README.md <span>— personal manifest & systems showcase</span></div>
    <header class="readme-intro">
      <h1>hey, i’m levi.</h1>
      <p class="readme-subtitle">levi.napz <span>/</span> github: n0thhhing <span>/</span> systems programmer · reverse engineer · artist</p>
      <p>I build low-level tools close to the machine, take binaries apart to understand how computers actually work, draw character illustrations in Clip Studio Paint, and spend an unreasonable amount of time getting my palettes, typography, and contrast right.</p>
      <p>This site is an interactive workspace modeled after Zed, running entirely in vanilla ES modules without a bundler or node_modules. Welcome to my little corner of the machine.</p>
      <div class="readme-links"><a href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub (@n0thhhing) ↗</a><a href="${profile.instagram}" target="_blank" rel="noopener noreferrer">Instagram (@levi.napz) ↗</a><a href="#about">About me →</a><a href="#projects">All projects →</a><a href="#achievements">Achievements & Hackathons →</a><a href="#art">Art & Color →</a></div>
    </header>
    <div class="profile-code" aria-label="The short version, in a little Zig-shaped profile">
      <div class="code-title"><span><span class="language-icon language-zig" aria-hidden="true">Z</span> profile.zig</span><span>the short version</span></div>
      <pre><code><span class="code-line"><span class="line-number" aria-hidden="true">1</span><span><b class="syntax-keyword">const</b> me = .{</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">2</span><span>    .name = <b class="syntax-string">"Levi Lynch"</b>,</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">3</span><span>    .handle = <b class="syntax-string">"levi.napz"</b>, <i class="syntax-comment">// Instagram & Discord</i></span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">4</span><span>    .github = <b class="syntax-string">"n0thhhing"</b>,</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">5</span><span>    .stack = .{ <b class="syntax-string">"Zig (0.16+)"</b>, <b class="syntax-string">"ARM64 Assembly"</b>, <b class="syntax-string">"Rust"</b>, <b class="syntax-string">"Swift"</b>, <b class="syntax-string">"TypeScript (Bun)"</b>, <b class="syntax-string">"Lua"</b> },</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">6</span><span>    .focus = .{ <b class="syntax-string">"NEON SIMD Vectorization"</b>, <b class="syntax-string">"Capstone 5.0 Disassembly"</b>, <b class="syntax-string">"Wasm Runtimes"</b>, <b class="syntax-string">"AppKit/Metal"</b> },</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">7</span><span>    .education = <b class="syntax-string">"Rowan-Cabarrus CC (AA) → UNC Charlotte (Cybersecurity)"</b>,</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">8</span><span>    .hackathons = <b class="syntax-string">"3-year podium streak at Catawba College (2024–2026)"</b>,</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">9</span><span>    .other_half = <b class="syntax-string">"Clip Studio Paint, palette design, and music on repeat"</b>,</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">10</span><span>    .favorite_theme = <b class="syntax-string">"Gruvbox Material"</b>,</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">11</span><span>    .editor = <b class="syntax-string">"Zed"</b>,</span></span>
<span class="code-line"><span class="line-number" aria-hidden="true">12</span><span>};</span></span></code></pre>
    </div>
    <section aria-labelledby="focus-title">
      <div class="section-title"><h2 id="focus-title">What I spend my time on</h2></div>
      <div class="ecosystem-cards">
        <div class="ecosystem-card">
          <span class="eco-tag">SYSTEMS & SIMD</span>
          <h3>Bare-Metal Vector Pipelines</h3>
          <p>Writing vectorized algorithms that saturate ARM NEON registers. With <strong>zeon</strong>, I implemented 2,806+ NEON intrinsics in pure Zig 0.16+ with pure <code>@Vector</code> fallbacks, Big-Endian QEMU emulation testing, and 7 real-time simulations.</p>
        </div>
        <div class="ecosystem-card">
          <span class="eco-tag">REVERSE ENGINEERING</span>
          <h3>Disassemblers & Architecture Analysis</h3>
          <p>Tired of fragile memory patchers, I built <strong>Offset-updater</strong> and <strong>ts-capstone</strong> to disassemble live AArch64 machine code with Capstone 5.0, dynamically growing wildcard masks across branch shifts and auto-anchoring via IL2CPP MethodInfo arrays.</p>
        </div>
        <div class="ecosystem-card">
          <span class="eco-tag">NATIVE APPS</span>
          <h3>Fluid macOS Tooling</h3>
          <p>Building <strong>Wallify</strong> on the active <code>combine</code> branch using Swift, AppKit windowing, and Metal shaders. It bridges system MediaRemote playback events, dynamic color extraction from album art, and interactive desktop pets.</p>
        </div>
        <div class="ecosystem-card">
          <span class="eco-tag">VISUAL ART</span>
          <h3>Character Illustration & Themes</h3>
          <p>Drawing figures and character art in Clip Studio Paint. An artist’s eye for rhythm, negative space, and chromatic contrast guides how I structure UI, select fonts like Monaspace Argon, and tune palettes.</p>
        </div>
      </div>
    </section>
    <section aria-labelledby="selected-title">
      <div class="section-title"><h2 id="selected-title">Selected projects</h2><a href="#projects">Browse all ${projects.length} →</a></div>
      <div class="featured-projects">${projects.filter(project => project.featured).map(featuredProject).join('')}</div>
    </section>
    <div class="home-postscript"><span aria-hidden="true">✳</span><p>Almost everything I use wears <strong>Gruvbox Material</strong>. Color is a big part of how I experience a tool.<br><button class="inline-command" data-open-palette>Try one of my favorite themes</button>, or type <button class="inline-command" data-command="theme panda">theme panda</button> in the terminal dock below.</p></div>
  </article>`;
}

export function aboutPage() {
  return `<article class="page prose">${eyebrow('README, BUT MAKE IT PERSONAL')}<h1 class="page-heading">A little about <span>the person.</span></h1>
    <p class="page-lead">I’m Levi, known online as <strong>levi.napz</strong> (and <strong>n0thhhing</strong> on GitHub). In the mobile game reverse engineering scene, I spent years operating under the handle <strong>Herx</strong>. I’m a systems programmer, reverse engineer, and character artist who loves taking apart the pieces underneath complex runtimes and building fast, sharp tools around them.</p>

    <h2>The Herx era: Rooted Android, GameGuardian & PG3D.</h2>
    <p>My journey into code didn't start with an AP computer science class or a web framework tutorial. It started on a rooted Android phone, diving headfirst into mobile game memory modification and reverse engineering under the handle <strong>Herx</strong>. My primary testbed was <em>Pixel Gun 3D</em> (PG3D)—a fast-updating Unity title compiled with IL2CPP.</p>
    <p>In Unity IL2CPP, managed C# code is compiled ahead-of-time into native C++ structures and stripped down to an ARM64 shared library (<code>libil2cpp.so</code>). There was no managed runtime reflection or friendly debugger attached. If you wanted to understand how the engine tracked state, you had to attach via GameGuardian, LADB, or an ADB shell and confront the raw memory space directly.</p>
    <p>I spent nights tracing multi-level pointer chains, identifying static class initialization pointers (<code>Type__cctor</code>), resolving virtual method tables (vtable dereferences), and calculating field offsets relative to class instance pointers in heap memory. Finding an integer in memory, calculating its parent structure offset, patching the instructions live, and watching the game state mutate in real time was the spark that shaped everything. It proved that software wasn't some untouchable monolith—it was just CPU registers, stack frames, and bytes in memory. Once you see that, you can't unsee it.</p>
    <div class="inline-note">The question that drives everything I build: <strong>“Okay, but what is the CPU actually doing right now?”</strong></div>

    <h2>JUDSN, Proplam-menu, and engineering rigor in Lua.</h2>
    <p>As Herx, I built the menu used by <strong>JUDSN</strong> in the Pixel Gun 3D scene. After someone scraped the menu, I stopped caring about trying to keep it behind a sale and published my own version openly as <a class="text-link" href="https://github.com/n0thhhing/Proplam-menu" target="_blank" rel="noopener noreferrer"><strong>Proplam-menu</strong> ↗</a>. The public repo preserves that era and my engineering approach, rather than pretending the work happened in isolation.</p>
    <p>The mobile modding scene was notoriously chaotic: most scripts were single monolithic 10,000-line Lua files riddled with copy-pasted snippets, global variable pollution, and fragile hardcoded magic numbers. I refused to write code like that. I treated game modding as serious software engineering:</p>
    <ul>
      <li><strong>Modular Architecture:</strong> Decoupled the UI rendering layer, memory search primitives, pointer dereferencing helpers, and feature modules into distinct, maintainable namespaces.</li>
      <li><strong>Modern Toolchains:</strong> Introduced strict static analysis with <code>.luacheckrc</code> to catch scope leaks, automated code formatting with <code>.prettierrc</code>, and bundled scripts using modern JS runtimes like <strong>Bun</strong>.</li>
      <li><strong>Defensive Memory Operations:</strong> Replaced naive single-address freezes with dynamic base-offset recalculations, validating memory regions (<code>CB</code>, <code>A: Anonymous</code>, <code>Jh: Java Heap</code>) before executing memory writes to prevent SIGSEGV crashes.</li>
    </ul>
    <p>By bringing clean architectural separation and linting to a scene that didn't know it needed it, my menus became known for rock-solid stability across game updates.</p>

    <h2>The pain of game updates: Automated disassembly pipelines.</h2>
    <p>Game developers don't sit still. Every patch pushed to Google Play shifted binary memory layouts, scrambled relative function addresses, and broke every hardcoded pointer offset overnight. Traditional modders reacted by opening an 80MB stripped <code>libil2cpp.so</code> in Ghidra or IDA Pro, manually searching for string literals, squinting at decompiled C++, and re-calculating hundreds of hex offsets by hand.</p>
    <p>Doing that once was interesting; doing it for every minor patch was intolerable. I hated repetitive manual labor, so I built tools to eliminate it entirely:</p>
    <p>I dove into the <strong>AArch64 (ARM64)</strong> instruction set architecture. I studied how compiler toolchains emit PC-relative page addressing (<code>ADRP</code> / <code>ADD</code> register pairs), how immediate operands are encoded, and how branch links (<code>BL</code>) encode relative target shifts. If you know how the compiler generates code, you can build algorithms to recognize that code regardless of where the linker places it.</p>
    <p>To put this into practice, I authored and published <a class="text-link" href="https://github.com/n0thhhing/ts-capstone" target="_blank" rel="noopener noreferrer"><strong>ts-capstone</strong> on NPM ↗</a>, compiling the C Capstone 5.0 disassembly engine to WebAssembly with zero-copy Emscripten heap struct deserialization. On top of that, I engineered <a class="text-link" href="https://github.com/n0thhhing/Offset-updater" target="_blank" rel="noopener noreferrer"><strong>Offset-updater</strong> ↗</a>:</p>
    <ul>
      <li><strong>Disassembler-Guided Wildcard Masking:</strong> Instead of naive byte matching, it disassembles instructions and masks out volatile fields—such as PC-relative address immediates and jump offsets—while preserving stable opcode and register patterns.</li>
      <li><strong>IL2CPP Auto-Anchoring:</strong> Scans <code>.rodata</code> for Unity MethodInfo pointer tables to triangulate short or ambiguous functions that would otherwise produce false-positive matches.</li>
      <li><strong>On-Device Mobile Reversing:</strong> Built to run natively under Bun inside Android Termux (<code>proot-distro</code>), allowing me to download updated APKs, extract <code>libil2cpp.so</code>, and regenerate all updated offsets directly on my phone in seconds.</li>
    </ul>

    <h2>From reverse engineering to systems programming: Zig & zeon.</h2>
    <p>Once you spend enough time looking at machine code emitted by C++ compilers, a natural question arises: <em>“Why let the compiler make all the decisions?”</em> Reverse engineering naturally inverted into low-level systems engineering.</p>
    <p>When high-level runtimes felt too distant from hardware execution, I chose <strong>Zig</strong>. Zig offered the precise memory layout control and pointer semantics of C, combined with the power of compile-time metaprogramming (<code>comptime</code>) and first-class SIMD primitives—without hidden control flow or runtime overhead.</p>
    <p>That obsession culminated in <a class="text-link" href="https://github.com/n0thhhing/zeon" target="_blank" rel="noopener noreferrer"><strong>zeon</strong> ↗</a>: implementing <strong>2,806+ ARM NEON SIMD intrinsics</strong> in pure Zig 0.16+ and inline assembly. I built automated C-oracle verification harnesses, verified vector operations across Big-Endian QEMU targets, and wrote real-time vector simulations (such as 2D wave equations and Mandelbrot set computations) that execute simultaneously across SIMD vector lanes.</p>
    <p>The arc from an Android phone poking memory as <strong>Herx</strong> to hand-crafting NEON vector instructions in <strong>Zig</strong> is one straight line: pulling back every layer of abstraction until only the raw silicon remains.</p>

    <h2>Academics, competitions, and mentorship.</h2>
    <p>I am currently studying at <strong>Rowan-Cabarrus Community College</strong>, completing my Associate in Arts degree, with plans to transfer to the <strong>University of North Carolina at Charlotte (UNC Charlotte)</strong> to major in Cybersecurity. To me, cybersecurity is the natural home for reverse engineering, binary analysis, memory exploitation mitigations, and defensive architecture.</p>
    <p>Throughout high school, I competed annually in the <strong>Ralph W. Ketner School of Business Hackathon at Catawba College</strong>, achieving a 3-year consecutive podium record:</p>
    <ul>
      <li><strong>2024 (Sophomore Year)</strong>: 2nd Place Finish — my first taste of timed, competitive problem-solving under pressure.</li>
      <li><strong>2025 (Junior Year)</strong>: 1st Place Overall Winner — leading our Carson High team to victory against 86 student competitors across Rowan-Salisbury Schools.</li>
      <li><strong>2026 (Senior Year)</strong>: 1st Place & Historic 1st/2nd/3rd Podium Sweep — winning first place while actively mentoring and troubleshooting algorithmic hurdles across all Carson High teams to achieve a clean sweep.</li>
    </ul>
    <p><a class="text-link" href="#achievements">Read the full hackathon, Bun open-source, and project milestones <span aria-hidden="true">→</span></a></p>

    <h2>The artist’s lens: Why the pixels matter.</h2>
    <p>When I’m away from the terminal, I’m at my drawing tablet in <strong>Clip Studio Paint</strong>, sketching characters, illustrations, and drapery studies. Being an artist completely changes how I view software engineering.</p>
    <p>An artist naturally thinks about negative space, balance, visual rhythm, and tonal hierarchy. When I design a terminal UI or desktop app, those exact same instincts take over: padding that breathes, typography with clean glyph metrics (like Monaspace Argon), and soft contrast that prevents eye strain over 12-hour coding sprints. Fast code and beautiful interfaces should never be mutually exclusive.</p>

    <h2>The philosophy of my workspace.</h2>
    <p>I care deeply about ergonomics. I daily-drive <strong>Zed</strong> because its Rust-based, GPU-accelerated editor engine respects my time and keyboard input latency. I theme my entire environment with <strong>Gruvbox Material</strong>: earthy woodland greens, warm terracottas, soft ochres, and muted charcoal. It feels like an artisan's workshop crafted from walnut, brass, and parchment.</p>

    <div class="journey">
      <span class="journey-year">the roots</span>
      <div class="journey-detail">
        <h3>Herx: Android Reversing & IL2CPP Modding</h3>
        <p>Pixel Gun 3D, GameGuardian, JUDSN, Proplam-menu, multi-level pointer chains, and live memory patching on rooted Android.</p>
      </div>
      <span class="journey-year">the automation</span>
      <div class="journey-detail">
        <h3>Disassembly Engines & ts-capstone</h3>
        <p>AArch64 opcodes, publishing ts-capstone on NPM, Offset-updater wildcard masking, and on-device Termux binary analysis.</p>
      </div>
      <span class="journey-year">the metal</span>
      <div class="journey-detail">
        <h3>ARM64 NEON SIMD & Zig Systems</h3>
        <p>zeon (2,806+ intrinsics), QEMU Big-Endian validation, lwasm WebAssembly runtime in Lua, and bare-metal vector compute.</p>
      </div>
      <span class="journey-year">the craft</span>
      <div class="journey-detail">
        <h3>Hackathon Sweeps, Bun OSS & Native Apps</h3>
        <p>3 consecutive Catawba College podiums, isolating upstream Bun runtime bugs, Wallify macOS widgets, and character art.</p>
      </div>
      <span class="journey-year">the horizon</span>
      <div class="journey-detail">
        <h3>Cybersecurity at UNC Charlotte</h3>
        <p>Transferring to UNCC to bring low-level binary analysis, hardware mechanics, and systems architecture to offensive and defensive security research.</p>
      </div>
    </div>

    <p>Some projects are public on GitHub. Some are ongoing experiments in folders on my SSD. They are all part of the same habit: following my curiosity wherever it leads.</p>
    <a class="text-link" href="#art">A deeper look at art, color & palettes <span aria-hidden="true">→</span></a>
  </article>`;
}

export function achievementsPage() {
  return `<article class="page prose">${eyebrow('COMPETITIONS, OPEN SOURCE & MILESTONES')}<h1 class="page-heading">Hackathons, <span>runtimes & craft.</span></h1>
    <p class="page-lead">A record of 3 consecutive hackathon podiums at Catawba College, isolating upstream runtime and transpiler bugs in Bun, and publishing low-level packages.</p>

    <h2>Catawba College Hackathon Series (2024–2026)</h2>
    <p>The annual Ralph W. Ketner School of Business Hackathon at Catawba College brings together student teams across the region to design, engineer, and pitch full-stack solutions under tight time constraints. It tests not just raw coding speed, but systems thinking, team cohesion, and the ability to explain complex ideas clearly.</p>
    <div class="hackathon-list">
      ${hackathons.map(h => `
        <div class="hackathon-card">
          <div class="hackathon-header">
            <span class="hackathon-year">${e(h.year)}</span>
            <span class="hackathon-badge">${e(h.placement)}</span>
          </div>
          <h3>${e(h.event)}</h3>
          <p class="hackathon-context">${e(h.context)} · ${e(h.host)}</p>
          <p>${e(h.summary)}</p>
          ${h.link ? `<p><a class="hackathon-link" href="${e(h.link)}" target="_blank" rel="noopener noreferrer">Official Catawba Announcement ↗</a></p>` : ''}
        </div>
      `).join('')}
    </div>

    <h2>Upstream Open-Source Diagnostics (Bun Runtime)</h2>
    <p>I frequently push novel toolchains to their limits. While running Emscripten-compiled WebAssembly and Capstone disassembly pipelines through Bun on Linux, I isolated two critical low-level crashes and provided detailed reproducers for the maintainers:</p>
    <div class="oss-list">
      ${ossContributions.map(oss => `
        <div class="oss-card">
          <div class="oss-header">
            <span class="oss-repo">${e(oss.project)}</span>
            <a class="oss-badge" href="${e(oss.url)}" target="_blank" rel="noopener noreferrer">${e(oss.issue)} ↗</a>
          </div>
          <h3>${e(oss.title)}</h3>
          <p>${e(oss.impact)}</p>
        </div>
      `).join('')}
    </div>

    <h2>Ecosystem & Package Releases</h2>
    <div class="ecosystem-cards">
      <div class="ecosystem-card">
        <span class="eco-tag">NPM PACKAGE</span>
        <h3>ts-capstone (v1.0.8)</h3>
        <p>Complete TypeScript bindings for Capstone 5.0 with zero-copy C struct deserialization over raw Wasm heap memory. Published on NPM: <code>npm i ts-capstone</code>.</p>
        <p><a class="primary-link" href="https://github.com/n0thhhing/ts-capstone" target="_blank" rel="noopener noreferrer">View repository ↗</a></p>
      </div>
      <div class="ecosystem-card">
        <span class="eco-tag">SIMD ARCHITECTURE</span>
        <h3>zeon</h3>
        <p>2,806+ ARM/ARM64 NEON intrinsics in pure Zig 0.16+ and inline assembly, validated through QEMU cross-architecture test suites including Big-Endian AArch64 and 7 real-time simulations.</p>
        <p><a class="primary-link" href="https://github.com/n0thhhing/zeon" target="_blank" rel="noopener noreferrer">View repository ↗</a></p>
      </div>
      <div class="ecosystem-card">
        <span class="eco-tag">RUNTIME ENGINE</span>
        <h3>lwasm</h3>
        <p>Full WebAssembly 2.0 bytecode execution engine and WAT decompiler in pure Lua. Executed 364,625 instructions in SQLite3 and passed 292 W3C specification tests.</p>
        <p><a class="primary-link" href="https://github.com/n0thhhing/lwasm" target="_blank" rel="noopener noreferrer">View repository ↗</a></p>
      </div>
      <div class="ecosystem-card">
        <span class="eco-tag">NATIVE DESKTOP</span>
        <h3>Wallify</h3>
        <p>macOS desktop music widget in Swift/AppKit/Metal on branch <code>combine</code>. Integrates system MediaRemote events, palette extraction from album art, and companion pets.</p>
        <p><a class="primary-link" href="https://github.com/n0thhhing/wallify" target="_blank" rel="noopener noreferrer">View repository ↗</a></p>
      </div>
    </div>

    <div class="inline-note">
      Real skill isn't about memorizing syntax. <strong>It’s about understanding the machine well enough to debug what hasn't been written yet.</strong>
    </div>
    <a class="text-link" href="#projects">Explore all projects <span aria-hidden="true">→</span></a>
  </article>`;
}

export function projectsPage(category = 'All') {
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filtered = projects.filter(project => category === 'All' || project.category === category);
  return `<section class="page prose">
    ${eyebrow('EXPERIMENTS THAT BECAME TOOLS')}
    <h1 class="page-heading">From bits <span>to little worlds.</span></h1>
    <p class="page-lead">Every project in this directory was born from a real need: a tool that didn't exist, an architecture I wanted to master by hand, or a curiosity about how an instruction executes in silicon. No tutorial clones.</p>
    <div class="filter-bar" aria-label="Filter projects">
      ${categories.map(name => `<button class="filter" data-filter="${e(name)}" aria-pressed="${category === name}">${e(name)}${name === 'All' ? ` (${projects.length})` : ''}</button>`).join('')}
    </div>
    <div class="projects-list">
      ${filtered.map((project, index) => `<a class="project-row" href="#projects/${e(project.id)}">
        <span class="project-number">${number(index)}</span>
        <div>
          <h2>${e(project.name)}</h2>
          <p>${e(project.description)}</p>
          <div class="project-meta">${e(project.tech.join(' / '))}</div>
        </div>
        <div class="project-status">${repositoryLink(project) ? '<span class="public-label">Public repository</span><br>' : ''}${e(projectStatus(project))}<br><span class="row-arrow" aria-hidden="true">Inspect project ↗</span></div>
      </a>`).join('')}
    </div>
  </section>`;
}

export function artPage() {
  return `<article class="page prose">${eyebrow('AWAY FROM THE COMPILER')}<h1 class="page-heading">I think in <span>color, too.</span></h1>
    <p class="page-lead">Character sketches, digital illustrations in Clip Studio Paint, and a deep obsession with how color temperatures and contrast shape how we experience software.</p>
    <div class="color-study" aria-label="Five colors from the active theme">
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
      <div>05</div>
    </div>
    <div class="color-study-caption">ONE PALETTE. A WHOLE DIFFERENT FEELING.</div>

    <h2>Art isn’t a separate part of me.</h2>
    <p>When I close my editor, I open <strong>Clip Studio Paint</strong> on my drawing tablet. I draw stylized characters, anatomy studies, expressive faces, and dynamic drapery. Drawing is analog and intuitive: it requires an eye for silhouette, weight, and emotional expression.</p>
    <p>Coding is strictly causal and logical—one missing semicolon or bad pointer offset breaks everything. Art is relational and perceptual—a line placed 2 millimeters to the left completely shifts the gesture of a figure. Shuttling between these two worlds keeps my mind balanced: the discipline of low-level systems grounds my art, and the sensitivity of art prevents my code from feeling sterile.</p>

    <h2>The science of palettes: Why soft contrast matters.</h2>
    <p>Color isn’t an afterthought or a cosmetic coating for me; it’s an ergonomic requirement. High-contrast pure black (<code>#000000</code>) against blinding white (<code>#ffffff</code>) creates intense optical halation and forces the eye’s ciliary muscles to work harder, leading to rapid eye strain during long programming sessions.</p>
    <p>I gravitate toward palettes with warm undertones, soft dark backgrounds, and carefully calibrated luminance curves. Warm charcoal bases (<code>#282828</code>) paired with sage greens, warm ochres, and muted corals mimic the spectral distribution of natural sunlight hitting matte paper.</p>

    <h2>And yes, I really like themes.</h2>
    <p><strong>Gruvbox Material</strong> is my favorite. Warm woodland colors, softer contrast, and a palette I can live in for hours. I’ve themed nearly everything I use with it. Gruvbox, Panda, Dracula, Monokai Pro, and Catppuccin Frappé are the rest of my favorites, in that order.</p>
    <ul>
      <li><strong>Gruvbox Material (Forest/Warm)</strong>: My absolute daily driver. It feels like an artisan's workshop crafted from wood, brass, and parchment. Every tool I can configure wears this theme.</li>
      <li><strong>Panda</strong>: Electric cyan and magenta accents on a slate backdrop. Punchy, modern, and energetic when I want high visual pop.</li>
      <li><strong>Dracula</strong>: Gothic purple, pastel pink, and cyan highlights. The classic night-owl palette.</li>
      <li><strong>Monokai Pro</strong>: Razor-sharp geometric precision with bright, clean semantic distinction across tokens.</li>
      <li><strong>Catppuccin Frappé</strong>: Gentle pastel comfort with velvety, soothing mid-tones.</li>
    </ul>
    <p>This workspace allows you to switch between all of them in real time. <button class="inline-command" data-open-palette>Open the theme palette</button> to see how the atmosphere shifts.</p>

    <div class="inline-note">Color isn’t the finishing touch. <strong>It’s part of how I experience the whole machine.</strong></div>
    <p>I share my sketches, WIPs, and illustrations over on Instagram. You can follow that side of my work here:</p>
    <a class="primary-link" href="${profile.instagram}" target="_blank" rel="noopener noreferrer">@levi.napz on Instagram <span aria-hidden="true">↗</span></a>
  </article>`;
}

export function interestsPage() {
  return `<article class="page">${eyebrow('THE OTHER OPEN TABS')}<h1 class="page-heading">Usually, there’s <span>music on.</span></h1>
    <p class="page-lead">Coding close to the machine, drawing character sketches, and getting immersed in stories that leave an impression. The music and media that accompany the craft.</p>
    <div class="interest-grid">
      <section class="interest-section">
        <span class="eyebrow">01 / HEAVY ROTATION</span>
        <h2>On repeat.</h2>
        ${music.map((artist, index) => `<div class="music-row"><span>${number(index)}</span><span>${e(artist)}</span><span class="equalizer" aria-hidden="true">${['▂▅▃', '▅▂▄', '▃▆▂'][index % 3]}</span></div>`).join('')}
        <p class="interest-footnote">Underground hyperpop, ambient trap, digital plugg, electronic melodies, and lo-fi breakcore.<br>High-tempo, textured soundscapes that induce flow during deep reversing or vector math sessions.</p>
      </section>
      <section class="interest-section">
        <span class="eyebrow">02 / STORIES & ATMOSPHERE</span>
        <h2>These stayed with me.</h2>
        ${anime.map((name, index) => `<div class="anime-row">${e(name)}<span>FAVORITE / ${number(index)}</span></div>`).join('')}
        <p class="interest-footnote">
          <strong>Tokyo Ghoul</strong>: Sui Ishida’s raw, watercolor-like ink work and tragic character psychology.<br><br>
          <strong>Steins;Gate</strong>: Hacker lab culture, retro computing (IBN 5100), and nostalgic Akihabara summer heat.<br><br>
          <strong>Terror in Resonance</strong>: Shinichiro Watanabe’s direction and Yoko Kanno’s post-rock ambient soundtrack.
        </p>
      </section>
    </div>
    <div class="inline-note">Music, art, and stories are as much a part of my workspace as the disassembler. <strong>The colors and rhythm give that away.</strong></div>
  </article>`;
}

export function renderPage(route, category = 'All') {
  const [page, id] = route.split('/');
  const project = projects.find(project => project.id === id);
  if (project) return projectPage(project);
  const views = { home: homePage, about: aboutPage, projects: () => projectsPage(category), achievements: achievementsPage, art: artPage, interests: interestsPage };
  return (views[page] ?? homePage)();
}
