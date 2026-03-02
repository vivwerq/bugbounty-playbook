// Progress bar
window.addEventListener('scroll', () => {
  const el = document.documentElement;
  const pct = el.scrollTop / (el.scrollHeight - el.clientHeight) * 100;
  document.getElementById('progress').style.width = pct + '%';
});

// Sidebar active link
const links = document.querySelectorAll('#sb-nav-links a');
const sections = document.querySelectorAll('section[id], .section[id]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`#sb-nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

// Expand/collapse vuln cards
function toggle(head) {
  const body = head.nextElementSibling;
  const btn = head.querySelector('.expand-btn');
  body.classList.toggle('open');
  btn.textContent = body.classList.contains('open') ? 'COLLAPSE ↑' : 'EXPAND ↓';
}

// Sidebar toggle 
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Nav search filter
function filterNav(query) {
  query = query.toLowerCase();
  links.forEach(link => {
    const show = !query || link.textContent.toLowerCase().includes(query);
    link.style.display = show ? '' : 'none';
  });
  document.querySelectorAll('.sb-section-label').forEach(label => {
    label.style.display = query ? 'none' : '';
  });
}

// Close sidebar on link click 
links.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 900) {
      document.getElementById('sidebar').classList.remove('open');
    }
  });
});

// Open all cards by default for the first 2
document.querySelectorAll('.vuln-card-body').forEach((body, i) => {
  if (i < 2) {
    body.classList.add('open');
    body.previousElementSibling.querySelector('.expand-btn').textContent = 'COLLAPSE ↑';
  }
});
