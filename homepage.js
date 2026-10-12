const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 900px)');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.dataset.collapsed = String(mobile.matches && !open);
}
menuButton.hidden = false;
setMenu(false);
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
mobile.addEventListener('change', () => setMenu(false));
