// ./shared/sponsors_loader.js
async function renderSponsors() {
    const containers = document.querySelectorAll('.sponsors-inject');

    for (const container of containers) {
        // 從 HTML 標籤取得年份，預設為 2025
        const year = container.getAttribute('data-year') || '2025';
        const jsonPath = `/shared/sponsors_${year}.json`;

        try {
            const response = await fetch(jsonPath);
            const sponsorsData = await response.json();

            // const html = sponsorsData.map(s => {
            //     const imgTag = `<img src="/img/sponsors/${s.img}" loading="lazy">`;
            //     return s.link 
            //         ? `<a href="${s.link}" target="_blank">${imgTag}</a>` 
            //         : imgTag;
            // }).join('');

            const html = sponsorsData.map(s => {
                // 檢查是否有 class，有的話就加上，沒有就留空
                const className = s.class ? `class="${s.class}"` : '';
                
                // 把 className 塞進 img 標籤中
                const imgTag = `<img src="/img/sponsors/${s.img}" ${className} loading="lazy">`;
                
                return s.link 
                    ? `<a href="${s.link}" target="_blank">${imgTag}</a>` 
                    : imgTag;
            }).join('');

            container.innerHTML = html;
        } catch (error) {
            console.error(`無法載入 ${year} 的贊助商資料:`, error);
        }
    }
}

document.addEventListener('DOMContentLoaded', renderSponsors);