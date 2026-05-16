
const section = document.querySelector(".atelier-horizontal-sec");
const track = document.querySelector(".atelier-track");

window.addEventListener("scroll", () => {

    const rect = section.getBoundingClientRect();
    const scrollProgress = Math.min(
        Math.max(-rect.top / (section.offsetHeight - window.innerHeight), 0),
        1
    );

    track.style.transform = `translateX(-${scrollProgress * 548}vw)`;

});




// Modal code Form

const modal = document.getElementById("contactModall");
const openBtn = document.getElementById("openModall");
openBtn.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.toggle("active");

    document.body.style.overflow = modal.classList.contains("active")
        ? "hidden"
        : "auto";
});
modal.addEventListener("click", (e) => {
    if (!e.target.closest(".contact-box")) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});
// Modal code Form



// About Modal
const aboutModal = document.getElementById("aboutModal");
const openAbout = document.getElementById("openAboutModal");

openAbout.addEventListener("click", (e) => {
    e.preventDefault();

    aboutModal.classList.add("active");
    document.body.style.overflow = "hidden";
});

aboutModal.addEventListener("click", (e) => {
    if (!e.target.closest(".about-box")) {
        aboutModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});
// About Modal

// Service
const serviceModal = document.getElementById("serviceModal");
const openService = document.getElementById("openServiceModal");

openService.addEventListener("click", (e) => {
    e.preventDefault();

    serviceModal.classList.add("active");
    document.body.style.overflow = "hidden";
});

serviceModal.addEventListener("click", (e) => {
    if (!e.target.closest(".service-box")) {
        serviceModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});
// Service

// Marketing
const marketingModal = document.getElementById("marketingModal");
const openMarketing = document.getElementById("openMarketingModal");

openMarketing.addEventListener("click", (e) => {
    e.preventDefault();

    marketingModal.classList.add("active");
    document.body.style.overflow = "hidden";
});

marketingModal.addEventListener("click", (e) => {
    if (!e.target.closest(".marketing-box")) {
        marketingModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});
// Marketing