document.addEventListener('DOMContentLoaded', function() {
    // 1. 최근 수정 날짜 자동 업데이트 (홈 화면 인포박스용)
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        lastModifiedElement.innerText = `${year}-${month}-${day}`;
    }

    // 2. 검색창 나무위키 연동 시스템
    const searchInput = document.querySelector('.md-search__input');
    if (!searchInput) return;

    const resultList = document.querySelector('.md-search-result__list');
    const resultMeta = document.querySelector('.md-search-result__meta');

    const observer = new MutationObserver(function() {
        const query = searchInput.value;
        if (query.length > 0) {
            const noResults = resultMeta && (resultMeta.textContent.includes("없습니다") || 
                              resultMeta.textContent.includes("none")) ||
                              (resultList && resultList.children.length === 0);
            
            let externalLink = document.getElementById('namu-search-link');
            
            if (noResults && resultList) {
                if (!externalLink) {
                    externalLink = document.createElement('div');
                    externalLink.id = 'namu-search-link';
                    externalLink.style.padding = '20px';
                    externalLink.style.textAlign = 'center';
                    externalLink.style.borderTop = '1px solid #ddd';
                    resultList.appendChild(externalLink);
                }
                externalLink.innerHTML = `<a href="https://namu.wiki/w/${encodeURIComponent(query)}" target="_blank" style="color: #00a495; font-weight: bold; text-decoration: underline;">내 위키에 결과가 없나요? 나무위키에서 '${query}' 검색하기 ↗️</a>`;
            } else if (externalLink) {
                externalLink.remove();
            }
        }
    });

    if (resultMeta) {
        observer.observe(resultMeta, { childList: true, characterData: true, subtree: true });
    }
    if (resultList) {
        observer.observe(resultList, { childList: true });
    }
});
