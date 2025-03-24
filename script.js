// disabling right click
document.addEventListener('contextmenu', event => event.preventDefault());

// topBtn 
let mybutton = document.getElementById("topBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    /*
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    */
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// mobile menu
var menu = "0";

function openNav() {
    document.getElementById("m").style.width = "200px";
    setTimeout(() => menu = "1", 500)
}


function closeNav() {
    document.getElementById("m").style.width = "0";
    menu = "0";
}

window.addEventListener("click", function(event) {
    if (!event.target.matches('.menu-m') && menu === "1") {
        closeNav();
    }
});

// table collapse
var table = "0";

function toggleTable() {
    if (table == "0") {
        /*const td = document.getElementById("mlist_t");
        const nodes = td.getElementsByTagName("td");
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.display = "table";
        }*/
        document.getElementById("mlist_t").style.display = "table";
        table = "1";
    } else {
        /*const td = document.getElementById("mlist_t");
        const nodes = td.getElementsByTagName("td");
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.display = "none";
        }*/
        document.getElementById("mlist_t").style.display = "none";
        table = "0";
    }
}

function toggleCont() {
    if (table == "0") {
        /*const td = document.getElementById("mlist_t");
        const nodes = td.getElementsByTagName("td");
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.display = "table";
        }*/
        document.getElementById("contact_spon").style.display = "block";
        table = "1";
    } else {
        /*const td = document.getElementById("mlist_t");
        const nodes = td.getElementsByTagName("td");
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.display = "none";
        }*/
        document.getElementById("contact_spon").style.display = "none";
        table = "0";
    }
}

// version

var version = "v2025.03"; //random lol, maybe cancel this in the future
//nvm i changed my mind, now its v[year].[month]
//var date = "2024/5/6"; //Official release date: idk, maybe change this to lastest updated date
var date = "";

async function ver() {
    await fetch('https://api.github.com/repos/ncku-formula-racing/ncku-formula-racing.github.io/commits')
        .then((response) => response.json())
        .then((json) => date = json[0].commit.committer.date);

    document.getElementById("version").innerHTML = version;
    document.getElementById("v_date").innerHTML = date;
}

// home page grid redirect
//<div> disappears after wrapping it in <a>
function redir(link, tgt) {
    window.open(link, tgt); //tgt: _parent, _blank
}

// language
function check_lang() {
    var lang = window.localStorage.getItem("lang");
    if (lang != "zh" && lang != "en") {
        window.localStorage.setItem("lang", "zh"); //default lang:zh
    }
    load_lang();
}

function lang_change() {
    var lang = window.localStorage.getItem("lang");
    if (lang == "zh") {
        window.localStorage.setItem("lang", "en");
        document.getElementById("lang_icn").src = "./img/en.png";
        load_lang()
    } else if (lang == "en") {
        window.localStorage.setItem("lang", "zh");
        document.getElementById("lang_icn").src = "./img/zh.png";
        load_lang()
    }
}

function load_lang() {
    var lang = window.localStorage.getItem("lang");
    if (lang == "zh") {
        //$('[lang="zh"]').show();
        //$('[lang="en"]').hide();
        document.getElementById("lang_icn").src = "./img/zh.png";
    } else if (lang == "en") {
        //$('[lang="zh"]').hide();
        //$('[lang="en"]').show();
        document.getElementById("lang_icn").src = "./img/en.png";
    }
}
$('[lang="zh"]').show();
$('[lang="en"]').hide();


// home page cover
/*
i = 0;
j = 1;

function cover() {
    document.getElementById("home_cover").src = '../img/cover_' + i + '.jpg';

    console.log(i)
    if (i < j && i != j) {
        i++;
    } else {
        i = 0;
    }
}

setInterval(cover, 5000); */

// loading animation
/*
setTimeout(function() { deactivateLoader(); }, 2500);
(function(loader) {

    window.addEventListener('beforeunload', function(e) {
        activateLoader();
    })

    window.addEventListener('load', function(e) {
        deactivateLoader();
    });

    function activateLoader() {
        loader.style.display = 'block';
        loader.style.opacity = 1;
        setTimeout(function() { deactivateLoader(); }, 2500);
    }

    function deactivateLoader() {
        setTimeout(function() {
            deactivate();
        }, 1000);

        function deactivate() {
            loader.style.opacity = 0;
            loader.addEventListener('transitionend', function() {
                loader.style.display = 'none';
            }, false);
        }
    }

})(document.querySelector('.o-page-loader'));*/

// easter egg
var egg = 0;

function easter() {
    if (egg < 7) {
        egg++;
        if (egg == 3) {
            document.getElementById("v_date").classList.add("obfuscated")
        }
    } else if (egg == 7) {
        console.log('activate')
        window.location.href = './shark1223.html';
    }
}

// obfuscated
setInterval(function() {
    $('.obfuscated').text(randomizer($('.obfuscated').text()));

}, 50);

function randomizer(rawr) {
    var length = rawr.length;
    var text = '';
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}