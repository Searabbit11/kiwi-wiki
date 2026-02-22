document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.md-search__input');
    if (!searchInput) return;

    const resultList = document.querySelector('.md-search-result__list');
    const resultMeta = document.querySelector('.md-search-result__meta');

    // 검색 결과창을 감시하는 옵저버 설정
    const observer = new MutationObserver(function() {
        const query = searchInput.value;
        if (query.length > 0) {
            // "결과 없음" 텍스트가 포함되어 있는지 확인하거나 결과 리스트가 비어있는지 확인
            const noResults = resultMeta.textContent.includes("없습니다") || 
                              resultMeta.textContent.includes("none") ||
                              resultList.children.length === 0;
            
            let externalLink = document.getElementById('namu-search-link');
            
            if (noResults) {
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
                // 결과가 있으면 외부 링크 제거
                externalLink.remove();
            }
        }
    });

    // 검색 메타 정보나 리스트가 바뀔 때마다 실행
    if (resultMeta) {
        observer.observe(resultMeta, { childList: true, characterData: true, subtree: true });
    }
    if (resultList) {
        observer.observe(resultList, { childList: true });
    }
});
