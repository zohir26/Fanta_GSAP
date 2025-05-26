var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
        markers:true,
    }
})
tl.to("#fanta1", {
   x: "-110%",
    y: "190%",
})