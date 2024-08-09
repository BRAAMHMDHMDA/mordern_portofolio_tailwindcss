const navigation = () => {
    const openMobileMenu = document.querySelector("#open-mobile-menu");
    const closeMobileMenu = document.querySelector("#close-mobile-menu");
    const mobileMenu = document.querySelector("#mobile-menu");
    const navItems = document.querySelectorAll("#mobile-menu > li")
    const nav = document.querySelector("nav");
    const navLinks = document.querySelector(".links");

    // open & close Mobile Menu
    openMobileMenu.addEventListener("click", () => { mobileMenu.classList.add("open") });
    closeMobileMenu.addEventListener("click", () => { mobileMenu.classList.remove("open") });

    navItems.forEach((li) => {
        li.addEventListener("click", () => {
            if (window.innerWidth <= 767) {
                mobileMenu.classList.remove("open");
            }
        })
    })

    // bg nav on scroll 
    window.addEventListener('scroll', () => {
        // if (scrollY > 50) {
        //     nav.classList.add('bg-white/50', 'backdrop-blur-xl', 'shadow-sm');
        //     navLinks.classList.remove('bg-white/50', 'shadow-sm')
        // } else {
        //     nav.classList.remove('bg-white/50', 'backdrop-blur-xl', 'shadow-sm');
        //     navLinks.classList.add('bg-white/50', 'shadow-sm')

        // }
        if (scrollY > 50) {
            nav.classList.add('dark:bg-darkTheme', 'dark:shadow-white/20', 'bg-white/50', 'backdrop-blur-xl', 'shadow-sm');
            navLinks.classList.remove('bg-white/50', 'shadow-sm', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent')
        } else {
            nav.classList.remove('dark:bg-darkTheme', 'dark:shadow-white/20', 'bg-white/50', 'backdrop-blur-xl', 'shadow-sm');
            navLinks.classList.add('bg-white/50', 'shadow-sm', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent');
        }
    })

}
navigation()

//  ------ Light & Dark Mode ------- //

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}
//  ------ Light & Dark Mode ------- //