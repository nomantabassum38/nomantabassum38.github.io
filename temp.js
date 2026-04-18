




    // Nav scroll
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible'); observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .timeline-item, .exp-card, .project-card, .award-card, .ref-card').forEach(el => {
      observer.observe(el);
    });

    // Staggered animation for grid items
    document.querySelectorAll('.project-card').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.08) + 's';
    });
    document.querySelectorAll('.award-card').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.1) + 's';
    });
    document.querySelectorAll('.ref-card').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.1) + 's';
    });
    document.querySelectorAll('.timeline-item').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.15) + 's';
    });

    // Skills tabs
    function switchTab(event, id) {
      document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.skill-panel').forEach(p => p.classList.remove('active'));
      event.target.closest('.skill-tab').classList.add('active');
      document.getElementById('panel-' + id).classList.add('active');
    }

    // Mobile menu
    function toggleMenu() {
      const links = document.querySelector('.nav-links');
      if (links.style.display === 'flex') {
        links.style.display = '';
      } else {
        links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:72px;left:0;right:0;background:var(--nav-bg);padding:24px;gap:16px;border-bottom:1px solid var(--border);z-index:99;backdrop-filter:blur(20px)';
      }
    }





    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        document.querySelector('.nav-links').style.display = '';
      });
    });


    // Dark / Light Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
      currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
      updateThemeIcon(currentTheme);
    });

    function updateThemeIcon(theme) {
      if (theme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
      } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
      }
    }

    // Active nav link highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + 100;
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (link) {
          if (scrollY >= top && scrollY < top + height) {
            link.style.color = 'var(--accent)';
          } else {
            link.style.color = '';
          }
        }
      });
    });

    // Scroll Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    });

    // Cursor Glow
    const cursorGlow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  

    VanillaTilt.init(document.querySelectorAll(".project-card, .exp-card, .timeline-card, .hero-card, .award-card"), {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.05,
    });
  

    if(document.getElementById('typed-text')){
      new Typed('#typed-text', {
        strings: [
          'Applied Mathematician',
          'AI & Deep RL Researcher', 
          'Surrogate Modeling Expert',
          'Finite Element Analysis (FEM)',
          'Optimization & Control Systems',
          'High Performance Computing',
          'Mathematical Engineering'
        ],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
    }
  

    tsParticles.load("tsparticles", {
      fpsLimit: 60,
      particles: {
        number: {
          value: 40,
          density: { enable: true, value_area: 800 }
        },
        color: { value: "#2563eb" },
        links: {
          enable: true,
          color: "#2563eb",
          distance: 150,
          opacity: 0.2,
          width: 1
        },
        move: { enable: true, speed: 1.5, direction: "none", random: false, outModes: "bounce" },
        size: { value: 3 },
        opacity: { value: 0.3 }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" }
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 2 }
        }
      },
      detectRetina: true
    });
  

    document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
      });
    });
  

    /* CURSOR GLOW */
    const cursorGlow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', (e) => {
      if(cursorGlow) {
        cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    /* PROJECT MODALS */
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    document.querySelectorAll('.project-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        // Prevent clicking links inside card from opening modal
        if(e.target.closest('a')) return;
        
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // lock scroll
        
        // Grab content dynamically
        const title = card.querySelector('.proj-title').innerText;
        const desc = card.querySelector('.proj-desc').innerHTML;
        const tags = card.querySelector('.proj-tags').innerHTML;
        
        modalTitle.innerText = title;
        modalDesc.innerHTML = `<div style="font-size:1.1rem; color:var(--text2)">${desc}</div><br><div class="proj-tags">${tags}</div><br><p style="color:var(--text3); font-style:italic">This represents an expanded view showing deeper methodologies utilized during the research timeframe.</p>`;
      });
    });

    function closeModal() {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    /* TERMINAL TYPING LOGIC */
    let terminalStarted = false;
    const terminalBody = document.getElementById('terminal-body-ref');
    
    const termObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !terminalStarted) {
          terminalStarted = true;
          new Typed('#terminal-typed', {
            strings: [
              "<span style='color:#ff79c6'>import</span> torch\n<span style='color:#ff79c6'>import</span> torch.nn <span style='color:#ff79c6'>as</span> nn\n<span style='color:#ff79c6'>import</span> torch.optim <span style='color:#ff79c6'>as</span> optim\n<span style='color:#ff79c6'>from</span> torch.distributions.categorical <span style='color:#ff79c6'>import</span> Categorical\n\n<span style='color:#6272a4'># Architecture Definition</span>\n<span style='color:#ff79c6'>class</span> <span style='color:#50fa7b'>PPOAgent</span>(nn.Module):\n    <span style='color:#ff79c6'>def</span> <span style='color:#8be9fd'>__init__</span>(self, state_dim, action_dim):\n        <span style='color:#8be9fd'>super</span>().__init__()\n        self.actor = nn.Sequential(nn.Linear(state_dim, 64), nn.Tanh(), nn.Linear(64, action_dim))\n        self.critic = nn.Sequential(nn.Linear(state_dim, 64), nn.Tanh(), nn.Linear(64, 1))\n\n<span style='color:#6272a4'># Policy Update Phase</span>\n<span style='color:#ff79c6'>def</span> <span style='color:#8be9fd'>update</span>():\n    <span style='color:#ff79c6'>for</span> _ <span style='color:#ff79c6'>in</span> <span style='color:#8be9fd'>range</span>(K_epochs):\n        <span style='color:#6272a4'># Surrogate Objective Function</span>\n        ratios = torch.exp(logprobs - old_logprobs)\n        surr1 = ratios * advantages\n        surr2 = torch.clamp(ratios, 1 - eps_clip, 1 + eps_clip) * advantages\n        \n        <span style='color:#6272a4'># Actor-Critic Loss</span>\n        loss = -torch.min(surr1, surr2).mean() + MseLoss(state_values, rewards)\n        \n        optimizer.zero_grad()\n        loss.backward()\n        optimizer.step()\n\n<span style='color:#50fa7b'>[SUCCESS] Trajectory Simulation Loaded. Policy Error Delta &lt; 0.001</span>"
            ],
            typeSpeed: 2,
            showCursor: true,
            cursorChar: '█',
            onComplete: (self) => { setTimeout(() => self.cursor.style.animation = 'none', 3000) }
          });
        }
      });
    });
    if(terminalBody) termObserver.observe(terminalBody);
    
    /* SVG TIMELINE DRAWING */
    window.addEventListener('scroll', () => {
      const timeline = document.querySelector('.timeline');
      const timelineFill = document.querySelector('.timeline-path-fill');
      if(timeline && timelineFill) {
        // Calculate how far down the timeline parent block we have scrolled
        const rect = timeline.getBoundingClientRect();
        // If top of timeline is below middle of screen, 0%
        // If bottom of timeline is above middle of screen, 100%
        const windowHalf = window.innerHeight / 2;
        let percentage = (windowHalf - rect.top) / rect.height;
        percentage = Math.max(0, Math.min(1, percentage));
        timelineFill.style.height = `${percentage * 100}%`;
      }
    });



  
