let locoScroll;

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
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
       ./res/img/male0001.png
       ./res/img/male0002.png
       ./res/img/male0003.png
       ./res/img/male0004.png
       ./res/img/male0005.png
       ./res/img/male0006.png
       ./res/img/male0007.png
       ./res/img/male0008.png
       ./res/img/male0009.png
       ./res/img/male0010.png
       ./res/img/male0011.png
       ./res/img/male0012.png
       ./res/img/male0013.png
       ./res/img/male0014.png
       ./res/img/male0015.png
       ./res/img/male0016.png
       ./res/img/male0017.png
       ./res/img/male0018.png
       ./res/img/male0019.png
       ./res/img/male0020.png
       ./res/img/male0021.png
       ./res/img/male0022.png
       ./res/img/male0023.png
       ./res/img/male0024.png
       ./res/img/male0025.png
       ./res/img/male0026.png
       ./res/img/male0027.png
       ./res/img/male0028.png
       ./res/img/male0029.png
       ./res/img/male0030.png
       ./res/img/male0031.png
       ./res/img/male0032.png
       ./res/img/male0033.png
       ./res/img/male0034.png
       ./res/img/male0035.png
       ./res/img/male0036.png
       ./res/img/male0037.png
       ./res/img/male0038.png
       ./res/img/male0039.png
       ./res/img/male0040.png
       ./res/img/male0041.png
       ./res/img/male0042.png
       ./res/img/male0043.png
       ./res/img/male0044.png
       ./res/img/male0045.png
       ./res/img/male0046.png
       ./res/img/male0047.png
       ./res/img/male0048.png
       ./res/img/male0049.png
       ./res/img/male0050.png
       ./res/img/male0051.png
       ./res/img/male0052.png
       ./res/img/male0053.png
       ./res/img/male0054.png
       ./res/img/male0055.png
       ./res/img/male0056.png
       ./res/img/male0057.png
       ./res/img/male0058.png
       ./res/img/male0059.png
       ./res/img/male0060.png
       ./res/img/male0061.png
       ./res/img/male0062.png
       ./res/img/male0063.png
       ./res/img/male0064.png
       ./res/img/male0065.png
       ./res/img/male0066.png
       ./res/img/male0067.png
       ./res/img/male0068.png
       ./res/img/male0069.png
       ./res/img/male0070.png
       ./res/img/male0071.png
       ./res/img/male0072.png
       ./res/img/male0073.png
       ./res/img/male0074.png
       ./res/img/male0075.png
       ./res/img/male0076.png
       ./res/img/male0077.png
       ./res/img/male0078.png
       ./res/img/male0079.png
       ./res/img/male0080.png
       ./res/img/male0081.png
       ./res/img/male0082.png
       ./res/img/male0083.png
       ./res/img/male0084.png
       ./res/img/male0085.png
       ./res/img/male0086.png
       ./res/img/male0087.png
       ./res/img/male0088.png
       ./res/img/male0089.png
       ./res/img/male0090.png
       ./res/img/male0091.png
       ./res/img/male0092.png
       ./res/img/male0093.png
       ./res/img/male0094.png
       ./res/img/male0095.png
       ./res/img/male0096.png
       ./res/img/male0097.png
       ./res/img/male0098.png
       ./res/img/male0099.png
       ./res/img/male0100.png
       ./res/img/male0101.png
       ./res/img/male0102.png
       ./res/img/male0103.png
       ./res/img/male0104.png
       ./res/img/male0105.png
       ./res/img/male0106.png
       ./res/img/male0107.png
       ./res/img/male0108.png
       ./res/img/male0109.png
       ./res/img/male0110.png
       ./res/img/male0111.png
       ./res/img/male0112.png
       ./res/img/male0113.png
       ./res/img/male0114.png
       ./res/img/male0115.png
       ./res/img/male0116.png
       ./res/img/male0117.png
       ./res/img/male0118.png
       ./res/img/male0119.png
       ./res/img/male0120.png
       ./res/img/male0121.png
       ./res/img/male0122.png
       ./res/img/male0123.png
       ./res/img/male0124.png
       ./res/img/male0125.png
       ./res/img/male0126.png
       ./res/img/male0127.png
       ./res/img/male0128.png
       ./res/img/male0129.png
       ./res/img/male0130.png
       ./res/img/male0131.png
       ./res/img/male0132.png
       ./res/img/male0133.png
       ./res/img/male0134.png
       ./res/img/male0135.png
       ./res/img/male0136.png
       ./res/img/male0137.png
       ./res/img/male0138.png
       ./res/img/male0139.png
       ./res/img/male0140.png
       ./res/img/male0141.png
       ./res/img/male0142.png
       ./res/img/male0143.png
       ./res/img/male0144.png
       ./res/img/male0145.png
       ./res/img/male0146.png
       ./res/img/male0147.png
       ./res/img/male0148.png
       ./res/img/male0149.png
       ./res/img/male0150.png
       ./res/img/male0151.png
       ./res/img/male0152.png
       ./res/img/male0153.png
       ./res/img/male0154.png
       ./res/img/male0155.png
       ./res/img/male0156.png
       ./res/img/male0157.png
       ./res/img/male0158.png
       ./res/img/male0159.png
       ./res/img/male0160.png
       ./res/img/male0161.png
       ./res/img/male0162.png
       ./res/img/male0163.png
       ./res/img/male0164.png
       ./res/img/male0165.png
       ./res/img/male0166.png
       ./res/img/male0167.png
       ./res/img/male0168.png
       ./res/img/male0169.png
       ./res/img/male0170.png
       ./res/img/male0171.png
       ./res/img/male0172.png
       ./res/img/male0173.png
       ./res/img/male0174.png
       ./res/img/male0175.png
       ./res/img/male0176.png
       ./res/img/male0177.png
       ./res/img/male0178.png
       ./res/img/male0179.png
       ./res/img/male0180.png
       ./res/img/male0181.png
       ./res/img/male0182.png
       ./res/img/male0183.png
       ./res/img/male0184.png
       ./res/img/male0185.png
       ./res/img/male0186.png
       ./res/img/male0187.png
       ./res/img/male0188.png
       ./res/img/male0189.png
       ./res/img/male0190.png
       ./res/img/male0191.png
       ./res/img/male0192.png
       ./res/img/male0193.png
       ./res/img/male0194.png
       ./res/img/male0195.png
       ./res/img/male0196.png
       ./res/img/male0197.png
       ./res/img/male0198.png
       ./res/img/male0199.png
       ./res/img/male0200.png
       ./res/img/male0201.png
       ./res/img/male0202.png
       ./res/img/male0203.png
       ./res/img/male0204.png
       ./res/img/male0205.png
       ./res/img/male0206.png
       ./res/img/male0207.png
       ./res/img/male0208.png
       ./res/img/male0209.png
       ./res/img/male0210.png
       ./res/img/male0211.png
       ./res/img/male0212.png
       ./res/img/male0213.png
       ./res/img/male0214.png
       ./res/img/male0215.png
       ./res/img/male0216.png
       ./res/img/male0217.png
       ./res/img/male0218.png
       ./res/img/male0219.png
       ./res/img/male0220.png
       ./res/img/male0221.png
       ./res/img/male0222.png
       ./res/img/male0223.png
       ./res/img/male0224.png
       ./res/img/male0225.png
       ./res/img/male0226.png
       ./res/img/male0227.png
       ./res/img/male0228.png
       ./res/img/male0229.png
       ./res/img/male0230.png
       ./res/img/male0231.png
       ./res/img/male0232.png
       ./res/img/male0233.png
       ./res/img/male0234.png
       ./res/img/male0235.png
       ./res/img/male0236.png
       ./res/img/male0237.png
       ./res/img/male0238.png
       ./res/img/male0239.png
       ./res/img/male0240.png
       ./res/img/male0241.png
       ./res/img/male0242.png
       ./res/img/male0243.png
       ./res/img/male0244.png
       ./res/img/male0245.png
       ./res/img/male0246.png
       ./res/img/male0247.png
       ./res/img/male0248.png
       ./res/img/male0249.png
       ./res/img/male0250.png
       ./res/img/male0251.png
       ./res/img/male0252.png
       ./res/img/male0253.png
       ./res/img/male0254.png
       ./res/img/male0255.png
       ./res/img/male0256.png
       ./res/img/male0257.png
       ./res/img/male0258.png
       ./res/img/male0259.png
       ./res/img/male0260.png
       ./res/img/male0261.png
       ./res/img/male0262.png
       ./res/img/male0263.png
       ./res/img/male0264.png
       ./res/img/male0265.png
       ./res/img/male0266.png
       ./res/img/male0267.png
       ./res/img/male0268.png
       ./res/img/male0269.png
       ./res/img/male0270.png
       ./res/img/male0271.png
       ./res/img/male0272.png
       ./res/img/male0273.png
       ./res/img/male0274.png
       ./res/img/male0275.png
       ./res/img/male0276.png
       ./res/img/male0277.png
       ./res/img/male0278.png
       ./res/img/male0279.png
       ./res/img/male0280.png
       ./res/img/male0281.png
       ./res/img/male0282.png
       ./res/img/male0283.png
       ./res/img/male0284.png
       ./res/img/male0285.png
       ./res/img/male0286.png
       ./res/img/male0287.png
       ./res/img/male0288.png
       ./res/img/male0289.png
       ./res/img/male0290.png
       ./res/img/male0291.png
       ./res/img/male0292.png
       ./res/img/male0293.png
       ./res/img/male0294.png
       ./res/img/male0295.png
       ./res/img/male0296.png
       ./res/img/male0297.png
       ./res/img/male0298.png
       ./res/img/male0299.png
       ./res/img/male0300.png
   `;
  return data.split("\n")[index];
}

const frameCount = 300;

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
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
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
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});

gsap.from("#nav", {
  duration: 1.2,
  opacity: 0,
  y: -10,
  ease: "power2.out",
});

function initScrollAnimation() {
  if (window.innerWidth <= 768) {
    canvas.style.display = "none";
    const style = document.querySelector("#css");
    style.href = "./res/styles/style.css"
    document.querySelector("#scroll-info").style.display = "none";
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (locoScroll) {
      locoScroll.destroy();
      locoScroll = null;
    }

    return;
  }

  canvas.style.display = "block";
  locomotive();
}

initScrollAnimation()
window.addEventListener("resize", initScrollAnimation)