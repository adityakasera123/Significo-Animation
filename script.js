gsap.set(".slidesm",{scale:5})
var tl = gsap.timeline({
  scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom top",
        pin:true,
        scrub:2,
        } 
})

tl.to(".vdodiv",{
    '--clip':"0%",
   ease:Power2,
},'a')
tl.to(".slidesm",{
    scale:1,
   ease:Power2,
},'a')
