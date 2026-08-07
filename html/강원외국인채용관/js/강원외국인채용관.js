document.addEventListener('DOMContentLoaded', () => {
  // 1. Lucide 아이콘 일괄 생성
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. 헤더 언어 선택 드롭다운 (데스크톱)
  const btnLang = document.getElementById('btn-lang') || document.querySelector('.btn-lang-toggle');
  const langMenu = document.getElementById('lang-menu') || document.querySelector('.lang-menu');
  const langSelector = document.querySelector('.lang-selector');

  if (btnLang && langMenu) {
    btnLang.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.custom-select').forEach(s => s.classList.remove('active'));
      langMenu.classList.toggle('hidden');
    });
  }

  // 3. 모바일 드로어 메뉴 제어 (1200px 미만)
  const btnMOpen = document.getElementById('btn-m-open');
  const btnMClose = document.getElementById('btn-m-close');
  const mOverlay = document.getElementById('m-overlay');
  const mDrawer = document.getElementById('m-drawer');

  function openMobileMenu() {
    if (mOverlay && mDrawer) {
      mOverlay.classList.add('active');
      mDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mOverlay && mDrawer) {
      mOverlay.classList.remove('active');
      mDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (btnMOpen) btnMOpen.addEventListener('click', openMobileMenu);
  if (btnMClose) btnMClose.addEventListener('click', closeMobileMenu);
  if (mOverlay) mOverlay.addEventListener('click', closeMobileMenu);

  // 4. 모바일 언어 선택 (위로 열리는 드롭업 토글)
  const mLangSelect = document.getElementById('m-lang-select');
  if (mLangSelect) {
    const btn = mLangSelect.querySelector('.m-lang-select-btn');
    const optionsWrap = mLangSelect.querySelector('.m-lang-options');
    const label = document.getElementById('m-lang-label');
    const options = mLangSelect.querySelectorAll('.m-lang-options li');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      mLangSelect.classList.toggle('active');
      optionsWrap.classList.toggle('hidden');
    });

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        if (label) label.textContent = opt.textContent;
        mLangSelect.classList.remove('active');
        optionsWrap.classList.add('hidden');
      });
    });
  }

  // 5. 푸터 상단 이동 버튼
  const btnTop = document.getElementById('btn-top');
  if (btnTop) {
    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 6. 북마크(좋아요) 토글 이벤트
  document.addEventListener('click', (e) => {
    const btnBookmark = e.target.closest('.btn-bookmark');
    if (btnBookmark) {
      e.preventDefault();
      e.stopPropagation();
      btnBookmark.classList.toggle('on');
    }
  });

  // 7. 커스텀 드롭다운 (필터 공통)
  document.querySelectorAll('.custom-select').forEach(select => {
    const btn = select.querySelector('.select-btn');
    const options = select.querySelectorAll('.select-options li');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        document.querySelectorAll('.custom-select').forEach(s => {
          if (s !== select) s.classList.remove('active');
        });
        if (langMenu) langMenu.classList.add('hidden');

        select.classList.toggle('active');
      });
    }

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        const label = btn.querySelector('span');
        if (label) label.textContent = opt.textContent;
        select.classList.remove('active');
      });
    });
  });

  // 8. 외부 영역 클릭 시 모든 드롭다운 및 팝업 닫기
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.custom-select').forEach(s => s.classList.remove('active'));

    if (langMenu && langSelector && !langSelector.contains(e.target)) {
      langMenu.classList.add('hidden');
    }

    if (mLangSelect && !mLangSelect.contains(e.target)) {
      const optionsWrap = mLangSelect.querySelector('.m-lang-options');
      mLangSelect.classList.remove('active');
      if (optionsWrap) optionsWrap.classList.add('hidden');
    }
  });
});