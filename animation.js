const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = index => (
    `./ck05/${index.toString().padStart(2, '0')}.gif`
)


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
        document.getElementById("hero-lightpass").classList.add("fixed")
    } else {
        document.getElementById("hero-lightpass").classList.remove("fixed")
    }
}

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width = 1600;
canvas.height = 900;
img.onload = function() {
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    const footerheight = document.getElementsByTagName("footer");
    const herolightpass = document.getElementById("hero-lightpass")
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );

    requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()