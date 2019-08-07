// Your code goes here
//create 10 unique event listeners to make this site more interactive.. some examples are as follows: mouseover, keydown, wheel, drag/drop, load, focus, resize, scroll, select and dblclick.. use to update DOM in creative ways. change colors, animate objects, remove objects, etc.

// nest two similar events somwhere in the site and prevent event propagation properly
//stop navigation from item from refreshing the page by using preventDefault()
//#1
const titlesColor = document.querySelectorAll('h2');
titlesColor.forEach(color => {
    color.addEventListener('mouseover', (e) => {
            console.log(`this will work`);
            e.target.style.color = "purple";
            e.target.style.background = "yellow";
        })
        //#2
    color.addEventListener('mouseleave', (e) => {
        console.log(`this is over`);
        e.target.style.color = "black";
        e.target.style.background = "white";
    })

})

//#3

const smallerTitlesC = document.querySelectorAll('h4');
smallerTitlesC.forEach(littleColor => {
    littleColor.addEventListener('mouseover', (e) => {
            console.log(`for the littles`);
            e.target.style.color = "purple";
            e.target.style.background = "lightseagreen";
        })
        //#4
    littleColor.addEventListener('mouseleave', (e) => {
        console.log(`this littles is complete`);
        e.target.style.color = "black";
        e.target.style.background = "white";
        e.target.stopPropagation()
    })

})

//#5
const btns = document.querySelectorAll('.btn');
btns.forEach(clickity => {
    clickity.addEventListener('click', (e) => {
        console.log(`here comes the alert`);
        alert `Come On In! Offers only available for a short time only!`;
    })
})

//#6 using USING GREENSOCK EXAMPLE FROM EARLIER
const pics = document.querySelectorAll('.img-content');
pics.forEach(getBig => {
        getBig.addEventListener('mouseover', (e) => {

                TweenMax.to(e.target, 1, {
                    scale: 1.3,
                    ease: Elastic.easeOut.config(1, 0.75)
                })
                console.log(`is it bigger yet?`);
            })
            //#7
        getBig.addEventListener('mouseleave', (e) => {
            TweenMax.to(e.target, 0.5, {
                scale: 0.8,
                ease: Power1.easeIn
            })
            console.log(`and now it's small again...lol!`);
        })
    })
    //#8
const theNav = document.querySelectorAll('a');
theNav.forEach(newLook => {
    newLook.addEventListener('mouseover', (e) => {
            console.log(`look at em go!!`);
            TweenMax.to(e.target, 1, { scale: 1.5, ease: Elastic.easeOut, yoyoEase: Power2.easeOut, repeat: 1, repeatDelay: 0.2 })
            e.target.style.background = "yellow";
        })
        //#9
    newLook.addEventListener('mouseleave', (e) => {
        e.target.style.background = "white";
    })
})


//#10
const logoSwirl = document.querySelector('.logo-heading');

window.addEventListener('load', () => {
    TweenMax.to(logoSwirl, 1, {
        rotation: 360,
        ease: Elastic.easeOut.config(1, 0.75)
    })
})

//using preventDefault()
const noReload = document.querySelectorAll('.nav-link');
noReload.forEach(stopReload => {
    stopReload.addEventListener('click', (e) => {
        // console.log(`should be working`);
        e.preventDefault()
        alert("Was preventDefault() called:" + e.defaultPrevented);
    });
});