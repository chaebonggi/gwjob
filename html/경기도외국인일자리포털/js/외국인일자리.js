document.addEventListener('DOMContentLoaded', () => {
  // 1. Lucide 아이콘 초기화
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. 언어 선택 드롭다운 토글 (PC 및 모바일 공통)
  const langSelectors = document.querySelectorAll('.lang-selector');
  langSelectors.forEach(selector => {
    const btn = selector.querySelector('.lang-btn');
    const menu = selector.querySelector('.lang-dropdown');

    if (btn && menu) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
          menu.classList.add('hidden');
        }
      });
    }
  });

  // 3. 모바일 햄버거 메뉴 및 슬라이드 드로어 토글
  const btnHamburger = document.getElementById('btn-hamburger');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');

  const openDrawer = () => {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (btnHamburger) btnHamburger.addEventListener('click', openDrawer);
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  // 4. 모바일 드로어 내부 아코디언 서브메뉴 토글
  const accordions = document.querySelectorAll('.drawer-accordion');
  accordions.forEach(acc => {
    const btn = acc.querySelector('.accordion-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        acc.classList.toggle('open');
      });
    }
  });
});