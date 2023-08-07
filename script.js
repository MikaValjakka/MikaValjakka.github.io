function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=> {
     console.log(entry)
     if(entry.isIntersecting) {
        entry.target.classList.add('show');
     }
    });
});

const hiddenElementsl = document.querySelectorAll('.hiddenl');
hiddenElementsl.forEach((el)=> observer.observe(el));

const hiddenElementsr = document.querySelectorAll('.hiddenr');
hiddenElementsr.forEach((el)=> observer.observe(el));