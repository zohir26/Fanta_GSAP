var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
        // markers:true,
    }
})

tl.to("#fanta1", {
   x: "-110%",
    y: "190%",
},'orange') //same class orange will start the both fanta and orange slice animation together. 
tl.to("#slice",{
    x:"-120%",
    y:"640%",
}, 'orange')
tl.to("#orange",{
    x:"300%",
    y:"425%",
},'orange')
tl.to("#leaf",{
    x:"500%",
    y:"290%",
    rotate:"150deg",
},'orange')

var tl1=gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
        // markers:true,
    }
})
tl1.to("#slice",{
    x:"65%",
    y:"860%",
    duration:4,
    pin: true,
    scrub:true,
    
},"second")
tl1.to("#fanta1",{
    x:"0%",
    y:"386%",
    height:"50vh",
    duration:4,
    pin:true,
    scrub: true,
},"second")
tl1.to(".card-img",{
    rotate:"360deg",
    duration: 2,
})
