document.addEventListener("DOMContentLoaded", function () {

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

});

