function homePageAnimation(){
    gsap.set(".slidesm",{scale:5})
var tl = gsap.timeline({
  scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:2,
        } 
})

tl.to(".vdodiv",{
    '--clip':"0%",
     ease:Power4.out,
},'a')



tl.to(".slidesm",{
    scale:1,
   ease:Power2,
},'a')

.to(".lft",{
    xPercent:-5,
    stagger:.02,
   ease:Power4,
},'b')

.to(".rgt",{
    xPercent:-20,
    stagger:.03,
   ease:Power4,
},'b')


}
homePageAnimation();

gsap.to(".slide",{
    scrollTrigger:{
        trigger:".real",
        start:"top top",
        end:"bottom bottom",
        markers:true,
        scrub:1
    },
    xPercent:-335,
    ease:Power4
})