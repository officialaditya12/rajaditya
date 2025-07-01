const gsap = window.gsap
const ScrollTrigger = window.ScrollTrigger
//theme management
const themeToggle = document.getElementById("themeToggle")
const body = document.body;
const currentTheme = localStorage.getItem("theme")|| "dark"
body.setAttribute("data-theme",currentTheme)

themeToggle.addEventListener("click",() => {
    const currentTheme = body.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    body.setAttribute("data-theme",newTheme)
    localStorage.setItem("theme",newTheme)

    //Animate theme toggle
    gsap.to(themeToggle,{
        scale:0.9,
        duration:0.3,
        yoyo:true,
        repeat:1,
        ease:"power2.inOut"
    })
})
//mobile menu  management
const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")


menuToggle.addEventListener("click",()=>{
    menuToggle.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    //prevent body scroll when menu is open
    if (mobileMenu.classList.contains("active")){
        body.style.overflow = "hidden"
    }
    else{
        body.style.overflow = ""
    }
})

//loading function
function initLoader(){
    const loader = document.querySelector(".loader")
    const loaderText = document.querySelector(".loader-text")
    const loaderProgress = document.querySelector(".loader-progress")

    //animation loader text
    gsap.to(loaderText,{
        opacity:1,
        duration:0.7,
        ease:"power2.out"
    })

    //animation progress bar
    gsap.to(loaderProgress,{
        width:"100%",
        duration:2,
        ease:"power2.inOut",
        onComplete:()=> {
            gsap.to(loader,{
                opacity:0,
                duration:0.7,
                onComplete: () => {
                    loader.style.display = "none"
                    initAnimations()
                }
            })
        }
    })
}
//initialize loader on page load
window.addEventListener("load",initLoader)

//custom cursor(only on desktop)
if (window.innerWidth > 768){
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")

    document.addEventListener("mousemove",(e)=> {
        gsap.to(cursor,{
            x:e.clientX - 10,
            y:e.clientY - 10,
            duration:0.1,
        })
        gsap.to(cursorFollower,{
            x:e.clientX - 20,
            y:e.clientY - 20,
            duration:0.2,
        })
    })
}



//initialize all animations
function initAnimations(){
    //Navigation animation
    gsap.to("nav",{
        y:0,
        duration:1,
        ease:"power3.out",
    })
    //Hero Animation
    const heroTl = gsap.timeline()
    heroTl
        .to(".hero-title",{
            opacity:1,
            filter:'blur(0px)',
            y:0,
            duration:1.2,
            ease: "power3.out"
        })
        .to(".hero-subtitle",{
            opacity:1,
            filter:'blur(0px)',
            y:0,
            duration:0.8,
            ease:"power3.out"
        }, "-=0.5")
        .to(".hero-description",{
            opacity:1,
            filter:'blur(0px)',
            y:0,
            duration:0.8,
            ease:"power3.out"
        },"-=0.3")
        // .to(".cta-button",{
        //     opacity:1,
        //     filter:"blur(0px)"
        //     y:0,
        //     duration:0.8,
            // ease:"power3.out"   
        // },"-=0.3")

}
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        // UPDATE CSS VARIABLES FOR THE SPOTLIGHT EFFECT
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y',`${e.clientY - rect.top}px`);
    })
})
// mobile view for about

