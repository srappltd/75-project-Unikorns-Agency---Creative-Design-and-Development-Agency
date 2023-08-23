Loader();
function Loader(){
    let tl = gsap.timeline();
    tl.from("#loader path",{
        opacity:0,
        stagger:-.2,
        delay:1
    }).to("#loader",{
        opacity:0,
        duration:2,
        onStart:()=>{
            setTimeout(()=>{
                document.querySelector("#loader").style.display = "none"
                document.querySelector("#main").style.position = "relative"
            },1500)
        }
    }).from(".page1-top-left h1 span",{
        top:"100px",
        duration:.5,
        stagger:.3
    })
}


function Page1(){
    
    document.addEventListener("wheel",dets=>{
        if(dets.pageY>700){
            if(dets.deltaY > 0){
                document.querySelector("#nav").style.top = "-11vh"
            }else{
                document.querySelector("#nav").style.top = "0%"
            }
        }
    })
}

Page1()

Canvas();
function Canvas(){
        const canvas = document.querySelector("#page2 canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
    var data = `
    https://a.storyblok.com/f/206664/1920x1080/7df376e3b6/us0000.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/92243ced59/us0001.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/b1a4ea69f0/us0002.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/3f5ec54cdd/us0003.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/6e7901017e/us0004.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/0437a06424/us0005.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/46e6692860/us0006.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/559f664442/us0007.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/88dc40b449/us0008.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/5118c7cf9e/us0009.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/96672cf353/us0010.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/4e56363f69/us0011.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/cbb092cb83/us0012.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/a4dfe3d961/us0013.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/5cb6f4c146/us0014.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/456d40005a/us0015.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/fb15497cb1/us0016.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/27f0599509/us0017.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/1d7b84fecc/us0018.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/f39fba4991/us0019.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/975444047c/us0020.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/5fc15bf575/us0021.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/265b7971aa/us0022.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/ae60c6839d/us0023.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/1d767eedc4/us0024.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/1fac98e42f/us0025.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/c259ab91fd/us0026.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/d7ab0b3b9e/us0027.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/edf5f75d27/us0028.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/2fe965e51d/us0029.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/5a32f1685e/us0030.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/d5f25aaaac/us0031.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/0f6d9d9dd9/us0032.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/78c2a2be38/us0033.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/9d8d79194c/us0034.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/3e3fcece39/us0035.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/9a8256f75f/us0036.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/ebb19bb5b3/us0037.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/0d1dfd91e2/us0038.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/9be427bbeb/us0039.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/88d269c32c/us0040.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/c8c1a5eb0e/us0041.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/78a91959e6/us0042.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/a8313c2ae1/us0043.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/8bf1a29a71/us0044.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/2bc7b8a93d/us0045.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/8cb8bed65c/us0046.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/41c58600b3/us0047.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/d9b5d06e3f/us0048.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/215f036138/us0049.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/b6247011a5/us0050.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/ab531d0482/us0051.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/880562795e/us0052.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/8d2996475e/us0053.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/2cab44dcbf/us0054.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/ca4c9b05b8/us0055.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/dbce1e68af/us0056.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/f6f3ddac27/us0057.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/620b1c29db/us0058.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/8f2377fcec/us0059.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/a24aa692a3/us0060.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/306201a6d9/us0061.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/b338e0924e/us0062.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/e7880a8054/us0063.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/7fa7dc2ab6/us0064.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/7106b69c2c/us0065.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/375c9b2f36/us0066.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/7bae32e544/us0067.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/da5d8d6750/us0068.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/3130ab1255/us0069.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/b3c1f5a929/us0070.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/bb23ab75db/us0071.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/2731e71344/us0072.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/9b51deabf6/us0073.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/932b3449d1/us0074.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/0281f800e6/us0075.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/cd665d2bf9/us0076.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/1649ee5edd/us0077.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/56facfeef8/us0078.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/c535f60a3a/us0079.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/c546f98769/us0080.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/2995fd1ed4/us0081.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/a46b4a5195/us0082.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/ac4109dd0a/us0083.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/09c1ad08a9/us0084.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/398c4b5af8/us0085.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/96f5c6d93f/us0086.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/eab022f837/us0087.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/ef60d3d667/us0088.jpg/m/
    https://a.storyblok.com/f/206664/1920x1080/f7dc9821df/us0089.jpg/m/
    `;
    return data.split("\n")[index];
    }

    const frameCount = 89;

    const images = [];
    const imageSeq = {
    frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }

    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page2>canvas`,
        //   set start end according to preference
        start: `top 0%`,
        end: `top -300%`,
        scroll: `#main`,
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({

    trigger: "#page2",
    pin: true,
    // markers:true,
    scroll: `#main`,
    //   set start end according to preference
    start: `top 0%`,
    end: `top -300%`,
    });
}

Page4();
function Page4(){
    gsap.to(".page4-item",{
        x:"-220%",
        scrollTrigger:{
            trigger:"#page4",
            scroll:"#main",
            scrub:true,
            pin:true,
            start:"top 0",
            end:"top -400%",
            // markers:true
        }
    })
}

Page6();
function Page6(){
    gsap.to(".page6-bottom img",{
        x:"-50%",
        scrollTrigger:{
            trigger:".page6-bottom img",
            scroll:"#main",
            scrub:true,
            start:"top 100%",
            end:"top 0%",
        }
    })
}

Page8();
function Page8(){
    gsap.from(".page8-card",{
        width:"0%",
        height:"0%",
        scale:0,
        scrollTrigger:{
            trigger:".page8-card",
            scroll:"#main",
            start:"top 90%",
            end:"top 50%",
            // markers:true,
            scrub:true
        }
    });
    gsap.from(".page8-card h1,.page8-card p,.page8-card span,.page8-card a,.page8-card img",{
        opacity:0,
        scrollTrigger:{
            trigger:".page8-card",
            scroll:"#main",
            start:"top 55%",
            end:"top 45%",
            // markers:true,
            scrub:true
        }
    })
}

Page5();
function Page5(){
    var count = 0;
    document.querySelector(".page5-circle-right").addEventListener("click",(dets)=>{
        if(count<4){
            document.querySelectorAll(".page5-center").forEach(elem=>{
                elem.style.left = `-${count*30}%`
            })
        }
        count++
    });
}

page9();
function page9() {
    let circleWidth = "300vh";
    let circleHeight = "300vh";

    gsap.to("#page9",{
        scrollTrigger:{
            trigger:"#page9",
            scroll:"#main",
            // markers:true,
            start:"top 0%",
            end:"top -270%",
            pin:true,
            scrub:true
        }
    })

    gsap.to(".page9-circle1",{
        width:circleWidth,
        height:circleHeight,
        scrollTrigger:{
            trigger:".page9-circle1",
            scroll:"#main",
            // markers:true,
            start:"top 40%",
            end:"top -100%",
            scrub:true
        }
    });
    gsap.to(".page9-circle2",{
        width:circleWidth,
        height:circleHeight,
        scrollTrigger:{
            trigger:".page9-circle2",
            scroll:"#main",
            // markers:true,
            start:"top 10%",
            end:"top -140%",
            scrub:true
        }
    });
    gsap.to(".page9-circle3",{
        width:circleWidth,
        height:circleHeight,
        scrollTrigger:{
            trigger:".page9-circle3",
            scroll:"#main",
            // markers:true,
            start:"top -30%",
            end:"top -200%",
            scrub:true
        }
    });
    gsap.to(".page9-circle4",{
        width:circleWidth,
        height:circleHeight,
        scrollTrigger:{
            trigger:".page9-circle4",
            scroll:"#main",
            // markers:true,
            start:"top -70%",
            end:"top -250%",
            scrub:true
        }
    });
    
}

page11();
function page11(){
    gsap.from("#page11",{
        scale:.97,
        borderRadius:"60px",
        scrollTrigger:{
            trigger:"#page11",
            scroll:"#main",
            start:"top -25%",
            end:"top -50%",
            // markers:true,
            scrub:true
        }
    })

    document.querySelectorAll("#page11 h1 span").forEach(elem=>{
        gsap.from(elem,{
            top:"16vh",
            scrollTrigger:{
                trigger:elem,
                scroll:"#main",
                start:"top 95%",
                end:"top 80%",
                scrub:.5,
            }
        })
    })
}