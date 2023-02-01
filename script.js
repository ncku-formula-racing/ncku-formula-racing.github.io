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

// version

document.getElementById("version").innerHTML = "Pre_v0.2"; //小版本放小數點後一位 大版本(一屆)為個位數 eg
document.getElementById("v_date").innerHTML = "2023/2/1"; //Official release date: TBC

// home page grid redirect
//<div> disappears after wrapping it in <a>
function redir(link, tgt) {
    window.open(link, tgt); //tgt: _parent, _blank
}

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