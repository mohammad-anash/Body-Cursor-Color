var x = document.getElementsByTagName("BODY")[0];

x.addEventListener("mousemove", function (event) {
    let xlocation = x.getBoundingClientRect();
    let innerlocation = event.clientX - xlocation.left;


    if (innerlocation < xlocation.width / 2) {
        let redcolor = gsap.utils.mapRange(0, xlocation.width / 2, 255, 0, innerlocation); // 150
        gsap.to(x, {
            backgroundColor: `rgb(${redcolor}, 34, 123)`,
            ease: Power4,
        });


    } else {
        let bluecolor = gsap.utils.mapRange(xlocation.width / 2, xlocation.width, 0, 255, innerlocation); // 150
        gsap.to(x, {
            backgroundColor: `rgb(156, ${bluecolor}, 90)`,
            ease: Power4,
        });
    };
});