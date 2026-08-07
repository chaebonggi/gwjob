document.addEventListener('DOMContentLoaded', () => {
  // 1. Lucide 아이콘 일괄 생성
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. 헤더 언어 선택 드롭다운
  const btnLang = document.getElementById('btn-lang');
  const langMenu = document.getElementById('lang-menu');
  const langSelector = document.querySelector('.lang-selector');

  if (btnLang && langMenu) {
    btnLang.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('hidden');
    });
  }

  // 3. 푸터 상단 이동 버튼
  const btnTop = document.getElementById('btn-top');
  if (btnTop) {
    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. 북마크(좋아요) 토글 이벤트
  document.addEventListener('click', (e) => {
    const btnBookmark = e.target.closest('.btn-bookmark');
    if (btnBookmark) {
      e.preventDefault();
      e.stopPropagation();
      btnBookmark.classList.toggle('on');
    }
  });

  // 5. 커스텀 드롭다운 (필터 공통)
  document.querySelectorAll('.custom-select').forEach(select => {
    const btn = select.querySelector('.select-btn');
    const options = select.querySelectorAll('.select-options li');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // 다른 열려있는 드롭다운 및 언어 메뉴 닫기
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

  // 6. 외부 영역 클릭 시 모든 드롭다운 및 팝업 닫기
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.custom-select').forEach(s => s.classList.remove('active'));

    if (langMenu && langSelector && !langSelector.contains(e.target)) {
      langMenu.classList.add('hidden');
    }
  });
});