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

var version = "v5.3"; //小版本放小數點後一位 大版本(屆數)為個位數
var date = "2024/3/26"; //Official release date: TBC

function ver() {
    document.getElementById("version").innerHTML = version;
    document.getElementById("v_date").innerHTML = date;
}
console.log("NCKU Formula Racing Website | " + version + ", " + date)

// home page grid redirect
//<div> disappears after wrapping it in <a>
function redir(link, tgt) {
    window.open(link, tgt); //tgt: _parent, _blank
}

// language
$('[lang="zh"]').show();
$('[lang="en"]').hide();
/* temporarily disabled
let lang = sessionStorage.getItem('lang');
if (typeof lang === "null" || lang == 0) {
    $('[lang="zh"]').show()
    $('[lang="en"]').hide()
} else {
    $('[lang="en"]').show()
    $('[lang="zh"]').hide()
}

function toggleLang() {
    let lang = sessionStorage.getItem('lang');
    if (typeof lang === "undefined" || lang == 0) {

        $('[lang="zh"]').show()
        $('[lang="en"]').hide()
        sessionStorage.setItem('lang', 0)
    } else {
        $('[lang="en"]').show()
        $('[lang="zh"]').hide()
        sessionStorage.setItem('lang', 1)
    }
}*/


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