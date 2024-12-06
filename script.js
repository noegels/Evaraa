



document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

  window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});






// SPOTLIGHT
const spotlightSize = 400;

document.addEventListener('mousemove', function (event) {
    if (window.event) { // IE fix
        event = window.event;
    }
    // Get the coordinates of the title
    let titleRect = document.querySelector('.title').getBoundingClientRect();
   
    // Grab the mouse's X-position
    let mouseX = event.clientX;
  
  // Position spotlight x coordinate based on mouse x, center based on width of spotlight, take into account element x offset
    let spotlightX = mouseX - (spotlightSize / 2) - titleRect.left;
  
    // Grab the mouse's Y position
    let mouseY = event.clientY;
  
  // Position spotlight y coordinate based on mouse y, center based on width of spotlight, take into account element y offset
  let spotlightY = mouseY  - (spotlightSize / 2) - titleRect.top;
    
    // Set x and y position of spotlight
    const element = document.querySelector('.title');
    element.style.backgroundPosition = spotlightX + 'px ' + spotlightY + 'px';
}, false);

// BIBLE VERSES SCROLL TRIGGER
// gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".fixed-section", {
//   y: 1,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".fixed-section";
//   }
//   pin: true,

// });

gsap.set(".content", {
  opacity: 1,
});


gsap.fromTo(".content", { opacity: 1 }, {
  duration: 0.04, opacity: 0, ease: "linear",
  scrollTrigger: {
    trigger: ".title-wrapper",
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "play none none reverse",
  }


});

// gsap.fromTo(".fixed-section", { color: 0 }, { opacity: 1, duration: 1 });
// gsap.to(".glowing", {
//   scrollTrigger: ".verse-proverbs",
//   backgroundColor: 'red'
// });

// let smoother = ScrollSmoother.create({
//   wrapper: '.title-wrapper',
//   content: "title-background",
//   smooth: 2,
//   effects: true,
// });


gsap.to(".title-wrapper", {
  y: -200,
  duration: 4,
  scrollTrigger: {
    trigger: ".title-wrapper",
    
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart   none      none            none",
 
    // markers: {
    //   startColor: "yellow",
    //   endColor: "red",
    //   fontSize: "3rem",
    // }
  }
});



// gsap.from(".title-wrapper", {
//   y: 300,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".title-wrapper",
//     snap: 1,
//     start: "top 0%",
//     end: "top 100%",
//     scrub: 0.5,
//     toggleActions: "restart   none      none            none",
 
//     markers: {
//       startColor: "yellow",
//       endColor: "red",
//       fontSize: "3rem",
//     }
//   }
// });


// gsap.from(".title-wrapper", {
//   y: 400,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".title-wrapper",
//     // snap: 1,
//     start: "top 100%",
//     end: "top 70%",
//     scrub: 0.5,
//     toggleActions: "restart   none      none            none",
 
//     markers: {
//       startColor: "yellow",
//       endColor: "red",
//       fontSize: "3rem",
//     }
//   }
// });


// ScrollTrigger.create ({
// 	trigger: ".title-wrapper",
// 	pin: true,
// 	scrub:1,
// 	start: "top top",
// 	animation:tl1,
// 	end: "+=300%",
 
// });


// gsap.to(".glowing", {
//   xPercent: -100 * (".glowing".length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".glowing",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (".glowing".length - 1),
//     end: () => "+=" + document.querySelector(".container").offsetWidth
//   }
// });
gsap.set(".fixed-section", {
  backgroundColor: '#121112',
});

gsap.set(".h1-2", {
  color: '#484848',
  opacity: 1,
});

// gsap.set(".h1-2", {
//   textShadow: `   1px 1px 4px rgba(0, 0, 0, 0), 
//                     -1px -1px 8px rgba(0, 0, 0, 0), 
//                     -1px 1px 10px rgba(0, 0, 0, 0),
//                     1px -1px 10px rgba(0, 0, 0, 0)`;
// });

let glowShadow = `  1px 1px 10px rgba(255, 255, 255, 1), 
                    -1px -1px 20px rgba(255, 255, 255, 1), 
                    -1px 1px 40px rgba(255, 255, 255, 1),
                    1px -1px 1px rgba(255, 255, 255, 1)`;



let text = document.querySelector(".h1-2");

let animationGlow = gsap.to(".h1-2", {
  color: 'white',
  duration: 0.7,
  textShadow: glowShadow,
});
  
text.addEventListener("mouseenter", () => animationGlow.play());
text.addEventListener("mouseleave", () => animationGlow.reverse());


gsap.to(".fixed-section", {
  y: -500,
  duration: 2,
  scrollTrigger: {
    trigger: ".fixed-section",
    // pin: true,  
    start: "top 80%",
    end: "bottom 900%",
    scrub: 1.5,
    toggleActions: "restart   none      none            none",
    
 
    // markers: {
    //   startColor: "yellow",
    //   endColor: "red",
    //   fontSize: "3rem",
    // }
  }
});


// gsap.set(".fixed-section", {
//   backgroundColor: '#121112',
// })




 gsap.fromTo(".fixed-section", {backgroundColor: '#121112'}, {
      duration: 0.5, backgroundColor: '#FFF1E2', ease:"circ.out", 
        scrollTrigger: {
          trigger: ".verse-eph",
          // markers:true,
          start:"top 50%", //when top of herman passes 75% viewport height
          end:"top 100px", //when bottom of herman passes 25% viewport height
          
               //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions:"play complete none reverse"
              //options: play, pause, resume, reset, restart, complete, reverse,none
        }
 })
    
gsap.fromTo(".h1-2", { opacity: 1 }, {
  duration: 0.2, ease: "linear", opacity: 0,
  scrollTrigger: {
          trigger: ".verse-eph",
          // markers:true,
          start:"top 50%", //when top of herman passes 75% viewport height
          end:"top 0%", //when bottom of herman passes 25% viewport height
    // markers: true,
               //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions:"play none none reverse"
              //options: play, pause, resume, reset, restart, complete, reverse,none
        }
 })

 gsap.fromTo(".title-wrapper", { opacity: 1 }, {
  duration: 0.2, ease: "linear", opacity: 0,
  scrollTrigger: {
          trigger: ".fixed-section",
          // markers:true,
          start:"top 0%", //when top of herman passes 75% viewport height
          end:"top 0%", //when bottom of herman passes 25% viewport height
    // markers: true,
               //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions:"play none none reverse"
              //options: play, pause, resume, reset, restart, complete, reverse,none
        }
 })



// gsap.from(".fixed-section", {
//   y: 100,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".fixed-section",
//     start: "top 0%",
//     end: "top 100%",
//     scrub: 3,
//     toggleActions: "restart   none      none            none",
 
//     // markers: {
//     //   startColor: "yellow",
//     //   endColor: "red",
//     //   fontSize: "3rem",
//     // }
//   }
// });

// ScrollTrigger.create({
//   trigger:".title-wrapper",
//   start:"top top",
//   pin:true,
//   end:`+=${(cards.length * 200) + header.offsetHeight}`,
//   scrub:true,
//   animation:animation,
//   markers:true
    
// })

gsap.to(".verse-psalms", {
  y: -800,
  duration: 4,
  scrollTrigger: {
    trigger: ".fixed-section",
    start: "top 120%",
    end: "bottom 0%",
    scrub: 3,
    toggleActions: "restart   none      none            none",
 
    // markers: {
    //   startColor: "yellow",
    //   endColor: "red",
    //   fontSize: "3rem",
    // }
  }
});


gsap.to(".verse-john", {
  y: -1000,
  duration: 3,
  scrollTrigger: {
    trigger: ".verse-psalms",
    start: "top 190%",
    end: "top 10%",
    scrub: 4,
    toggleActions: "restart   none      none            none",
 
    // markers: {
    //   startColor: "yellow",
    //   endColor: "red",
    //   fontSize: "3rem",
    // }
  }
})

gsap.to(".verse-eph", {
  y: -600,
  duration: 4,
  scrollTrigger: {
    trigger: ".verse-proverbs",
    start: "top 100%",
    end: "top 30%",
    scrub: 4,
    toggleActions: "restart   none      none            none",
 
    // markers: {
    //   startColor: "yellow",
    //   endColor: "red",
    //   fontSize: "3rem",
    // }
  }
});

gsap.to(".verse-proverbs", {
  y: -1000,
  duration: 10,
  scrollTrigger: {
    trigger: ".verse-john",
    start: "top 140%",
    end: "top 10%",
    scrub: 4,
    toggleActions: "restart   none      none            none",
 
    // markers: {
    //   startColor: "yellow",
    //   endColor: "red",
    //   fontSize: "3rem",
    // }
  }
});

gsap.to("#bottom-gradient", {
  y: -700,
  duration: 2,
  scollTrigger: {
    trigger: ".fixed-section",
    start: "top 50%",
    end: "top 10%",
    scrub: 1,
    markers: true,
  }
})



// gsap.to(".h1-2", {
//   scrollTrigger: {
//     trigger: ".verse-proverbs",
//     start: () => "top 50%",
//     end: () => "+=",
//     scrub: 4,
//     duration: 1,
//   },
//   color: '#484848',
// })

// let textShadowDepth = 8; 
// let speed = 1;

// let color = `#fd5e53`

// let t = `0px 0px`;
// let TextShadowString = t + color;

// for (let i = 1; i <= textShadowDepth; i++)
// {
//   t = `, -${i}px ${i}px`;

// }

// MORPHING
// gsap.registerPlugin(ScrollTrigger);

//gsap.fromTo( ".wrap", {
//	backgroundColor: gsap.getProperty("html", "--dark")
//}, {
//	scrollTrigger: {
//		trigger: ".color-light",
//		scrub: true,
//		end: "bottom bottom",
//	},
//	backgroundColor: gsap.getProperty("html", "--light")
//});

const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

gsap.set(".white-section", {
  backgroundColor: 'FFDFB1',
});

// The strings to morph between. You can change these to anything you want!
const texts = [
	"light",
  "love",
  // "why",
  "joy",
  "peace",
  "patience",
  "kindness",
  "goodness",
  "faithfulness",
  "gentleness",
  "self-control",
  // "here",
	
	
];

// Controls the speed of morphing.
const morphTime = 0.7;
const cooldownTime = 0.3;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.
animate();

gsap.set(".white-section", {
  backgroundColor: '#FFF1E2',
  opacity: 0,
})

gsap.fromTo(".white-section", { opacity: 0 }, {
  duration: 0.005, ease: "linear", opacity: 1,
  scrollTrigger: {
          trigger: ".verse-eph",
          // markers:true,
          start:"top 50%", //when top of herman passes 75% viewport height
          end:"top 0%", //when bottom of herman passes 25% viewport height
    // markers: true,
               //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions:"play none none reverse"
              //options: play, pause, resume, reset, restart, complete, reverse,none
        }
 })

gsap.to(".white-section", {
  y: -1000,
  
  duration: 3,
  scrollTrigger: {
    trigger: ".verse-eph",
    start: "top 40%",
    end: "bottom 300%",
    scrub: 1.2,
    
    toggleActions: "restart   none      reverse           restart",
 
    // markers: {
    //   startColor: "yellow",
    //   endColor: "red",
    //   fontSize: "3rem",
    // }
  }
});

gsap.set(".white-section", {
  opacity: 1,
});

gsap.fromTo(".white-section", { opacity: 1 }, {
  duration: 0.1, opacity: 0, ease: "linear",
  scrollTrigger: {
    trigger: ".white-section",
    start: "top 100%",
    end: "top 300%",
    scrub: 1,
    
    toggleActions: "play none none reverse",
    
  }


});

gsap.to(".grid-container", {
  scrub: 1,
  y: -1000,
  trigger: ".grid-container",
    start: "top 100%",
  end: "bottom 100%",
    markers: true,
})

gsap.to(".product-wrapper", {
  scrub: 1,
  y: -500,
  trigger: ".product-wrapper",
    start: "top 100%",
  end: "bottom 50%",
  markers: true,
    
})


// gsap.registerPlugin(MotionPathPlugin);

// gsap.to(".morphContainer", duration: 5, motionPath: [{ x: 100, y: 50 }, { x: 200, y: 0 }, { x: 300, y: 100 }]);

// "use strict"

// // Adding scroll event listener
// document.addEventListener('scroll', horizontalScroll);

// //Selecting Elements
// let sticky = document.querySelector('.sticky');
// let stickyParent = document.querySelector('.sticky-parent');

// let scrollWidth = sticky.scrollWidth;
// let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

// //Scroll function
// function horizontalScroll(){

//     //Checking whether the sticky element has entered into view or not
//     let stickyPosition = sticky.getBoundingClientRect().top;
//     if(stickyPosition > 1){
//         return;
//     }else{
//         let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
//         sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
    
//     }
// }

// let container = document.querySelector(".white-container");

// gsap.to(container, {
//  /* xPercent: -100 * (sections.length - 1), */
//   ease: "none",
//   scrollTrigger: {
//     trigger: container,
//     pin: true,
//     scrub: 1,
//     invalidateOnRefresh: true,
//     onUpdate: self => {
//     console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//       let progress = self.progress.toFixed(3);
//       container.scrollTo((container.scrollWidth - window.innerWidth) * progress,0);
//   },
//     onScrubComplete: ({progress, direction, isActive}) => console.log(progress.toFixed(3), direction, isActive),
//     end: () => "+=" + (container.scrollWidth - window.innerWidth)
//   }
// });


// const hoverEffect = document.querySelectorAll(".hover-effect");

// const addHoverEffect = (items, effect, remove) => {
//   items.forEach((element) => {
//     element.addEventListener("mouseover", () => {
//       items.forEach((el) => {
//         if (el !== element) {
//           el.classList.add(remove);
//         }
//       });
//       element.classList.add(effect);
//     });

//     element.addEventListener("mouseout", () => {
//       items.forEach((el) => {
//         el.classList.remove(remove);
//       });
//       element.classList.remove(effect);
//     });
//   });
// };

// document.addEventListener("DOMContentLoaded", () => {
//   addHoverEffect(hoverEffect, "hovered", "other-hovered");
// });

