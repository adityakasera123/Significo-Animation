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

function realPageAnimation(){
    gsap.to(".slide",{
    scrollTrigger:{
        trigger:".real",
        start:"top top",
        end:"bottom bottom",
 
        scrub:1
    },
    xPercent:-335,
    ease:Power4
})
}

function teamAnimation(){
    document.querySelectorAll(".listelem")
.forEach(function(el){
el.addEventListener("mousemove",function(dets){
   
    gsap.to(this.querySelector(".picture"), 
        {opacity:1, 
        x: gsap.utils.mapRange(0, window.innerWidth, -200,200, dets.clientX), 
        ease:Power4,
        duration:.5})

        gsap.to(this.querySelector(".bluelayer"),{
            height:"100%",
            duration:-3,
            ease:Power4.out,
             opacity: 1
            
        })
})



el.addEventListener("mouseleave", function(dets){
    gsap.to(this.querySelector(".picture"), 
         {opacity:0,
         ease:Power4, 
         duration:.5})

         gsap.to(this.querySelector(".bluelayer"),{
            height:"0%",
             opacity: -10,
             duration:1,
              ease:Power4
        })
})
})
}

function paraAnimation(){
    let clutter = "";

document.querySelector(".textpara").textContent.split("").forEach(function(e) {
    if (e === " ") {
        clutter += `<span>&nbsp;</span>`;
    } else {
        clutter += `<span>${e}</span>`;
    }
});

document.querySelector(".textpara").innerHTML = clutter;
gsap.set(".textpara span", {opacity:.1})
gsap.to(".textpara span", {
    scrollTrigger:{
        trigger:".para",
        start:"top 70%",
        end:"bottom 95%",

        scrub:1
    },
    opacity:1,
    stagger:.3,
    ease:Power2
})

let clutter1 = "";

document.querySelector(".textpara1").textContent.split("").forEach(function(e) {
    if (e === " ") {
        clutter1 += `<span>&nbsp;</span>`;
    } else {
        clutter1 += `<span>${e}</span>`;
    }
});

document.querySelector(".textpara1").innerHTML = clutter1;
gsap.set(".textpara1 span", {opacity:.1})
gsap.to(".textpara1 span", {
    scrollTrigger:{
        trigger:".para1",
        start:"top 90%",
        end:"bottom 95%",

        scrub:1
    },
    opacity:1,
    stagger:3,
    ease:Power2
})
}

function loco(){
    (function(){
const locomotiveScroll = new LocomotiveScroll();
})();

}

function capsulesAnimation(){``
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4
    })
}

function bodyColorAnimation(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start:"top 50%",
        end:"bottom 50%",
    
        onEnter:function(){
            document.body.setAttribute("theme",e.dataset.color);
        },
        onEnterBack(){
             document.body.setAttribute("theme",e.dataset.color);
        }
    })
})
}

function footerAnimation1(){
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".discovers .span", {
        y: 120,
        opacity: 0,

       stagger:0.3,
        scrollTrigger: {
            trigger: ".discover",
             scroller: "",
            start: "top 80%",
            end: "bottom 60%",
           
         scrub:2,
        }
    });
});
}

function significoAnimation(){
    gsap.from(".Signifco span",{
  y:120,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    trigger:".Signifco",
    start:"top 95%",
    end:"bottom 97%",
    scrub:2,
    markers:true
  }
});
}

significoAnimation();


loco();
homePageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation();
capsulesAnimation();
bodyColorAnimation();
footerAnimation1();