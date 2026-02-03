// ./shared/navbar.js
const navbarContent = `
    <header>
        <div class="menu">
            <a href="/index.html"><img class="logo" src="/logo/logo_w.png"></a>
            <div class="menu-r">
                <a href="/contact.html" style="font-weight: bold;" class="d">聯絡我們</a>
                <a href="/sponsors.html" style="font-weight: bold;" class="d">贊助</a>
                <a href="/vehicles.html" style="font-weight: bold;" class="d">車輛</a>
                <a href="/history.html" style="font-weight: bold;" class="d">歷史</a>
                <a href="/about.html" style="font-weight: bold;" class="d">團隊</a>
                <a href="/index.html" style="font-weight: bold;" class="d">首頁</a>
                <a href="javascript:void(0)" onclick="openNav()" class="open-m">
                    <i class="fa-solid fa-bars"></i>
                </a>
            </div>
        </div>
        <div class="lang">
            <a onclick="lang_change()"><img id="lang_icn" src="/img/lang_blank.png" width="17px"></a>
        </div>
    </header>

    <div class="menu-m" id="m">
        <a href="javascript:void(0)" onclick="closeNav()" class="close-m">
            <i class="fa-solid fa-xmark"></i>
        </a>
        <a href="/index.html" style="font-weight: bold;">首頁</a>
        <a href="/about.html" style="font-weight: bold;">團隊</a>
        <a href="/history.html" style="font-weight: bold;">歷史</a>
        <a href="/vehicles.html" style="font-weight: bold;">車輛</a>
        <a href="/sponsors.html" style="font-weight: bold;">贊助</a>
        <a href="/contact.html" style="font-weight: bold;">聯絡我們</a>
    </div>
`;

function injectNavbar() {
    // 我們改為將內容注入到 body 的最前面
    const body = document.body;
    const navwrapper = document.createElement('div');
    navwrapper.id = "nav-wrapper";
    navwrapper.innerHTML = navbarContent;
    
    // 確保它被放在 body 的開頭（或者是特定容器內）
    body.insertBefore(navwrapper, body.firstChild);
}

document.addEventListener('DOMContentLoaded', injectNavbar);