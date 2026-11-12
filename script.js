const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const navLinks = [...navigation.querySelectorAll('a')];
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting);
  if (!visible.length) return;
  const id = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target.id;
  navLinks.forEach(link => {
    const active = link.hash === `#${id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}, {rootMargin: '-12% 0px -55% 0px', threshold: 0});
document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));

const filters = [...document.querySelectorAll('[data-filter]')];
const papers = [...document.querySelectorAll('.paper')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    filter.classList.toggle('selected', filter === button);
    filter.setAttribute('aria-pressed', String(filter === button));
  });
  papers.forEach(paper => { paper.hidden = button.dataset.filter !== 'all' && paper.dataset.category !== button.dataset.filter; });
  const count = papers.filter(paper => !paper.hidden).length;
  document.querySelector('#filter-status').textContent = `${count} research ${count === 1 ? 'item' : 'items'} shown.`;
}));

document.querySelector('#copy-email').addEventListener('click', async event => {
  const button = event.currentTarget;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('dvdxu9620@gmail.com');
    button.textContent = 'Copied ✓';
    status.textContent = 'Email address copied to clipboard.';
    setTimeout(() => { button.textContent = 'Copy email'; }, 2500);
  } catch {
    button.textContent = 'Select email';
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.contact-actions a'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Email selected. Press Ctrl+C or Command+C to copy.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
