document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       Members Slider
       ========================= */
    let currentIndex = 0;
    const members = document.querySelectorAll(".member");

    function showMember(index) {
        members.forEach(member => member.classList.remove("active"));
        members[index].classList.add("active");
    }

    window.nextMember = function () {
        currentIndex = (currentIndex + 1) % members.length;
        showMember(currentIndex);
    };

    window.prevMember = function () {
        currentIndex = (currentIndex - 1 + members.length) % members.length;
        showMember(currentIndex);
    };

    /* =========================
       Efficiency Scroll Animation
       ========================= */
   const boxes = document.querySelectorAll(".efficiency-box");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            const fill = entry.target.querySelector(".efficiency-fill");
            fill.style.width = fill.dataset.value;

            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

boxes.forEach(box => observer.observe(box));
});
