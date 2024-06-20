const headerNavBtn = document.querySelector("#header__nav__btn");
const headerDopMenu = document.querySelector(".header__dopMenu");
const mobailHeaderMenuOpen = document.querySelector("#mobailHeader__menu-open");
const mobailMenu = document.querySelector(".mobailMenu");
const mobailMenuAccardion = document.querySelector(".mobailMenu__accardion");
const mobailMenuAccardionContent = document.querySelector(
  ".mobailMenu__accardion-content"
);
headerNavBtn.addEventListener("click", () => {
  headerDopMenu.classList.toggle("active");
});

mobailHeaderMenuOpen.addEventListener("click", () => {
  mobailHeaderMenuOpen.classList.toggle("menuActive");
  mobailMenu.classList.toggle("mobailMenuActive");
  document.querySelector("body").classList.toggle("overfHidden");
});
mobailMenuAccardion.addEventListener('click', ()=> {
    mobailMenuAccardionContent.classList.toggle('accardionOpen')
})
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const track = document.querySelector(".track");

const NUM_SLIDES = 3;

let currSlide = 0;

function slideTrack() {
  track.style.transform = `translateX(${-currSlide * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currSlide = (currSlide + 1) % NUM_SLIDES;
  slideTrack();
});

prevBtn.addEventListener("click", () => {
  currSlide = (currSlide - 1 + NUM_SLIDES) % NUM_SLIDES;
  slideTrack();
});

const productnextBtn = document.querySelector(".product__next");
const productprevBtn = document.querySelector(".product__prev");
const producttrack = document.querySelector(".product__track");
const productNavItem = document.querySelector(".product__nav-item");

const productNUM_SLIDES = 4;

let productcurrSlide = 0;


function productslideTrack() {
  producttrack.style.transform = `translateX(${-productcurrSlide * 100}%)`;
}
function productslideTrackSpan(step) {
  producttrack.style.transform = `translateX(${-step * 100}%)`;
}

productnextBtn.addEventListener("click", () => {
  productcurrSlide = (productcurrSlide + 1) % productNUM_SLIDES;
  productslideTrack();
});

productprevBtn.addEventListener("click", () => {
  productcurrSlide =
    (productcurrSlide - 1 + productNUM_SLIDES) % productNUM_SLIDES;
  productslideTrack();
});



 const btnModal = document.querySelectorAll('.btnModal');
 const modalClous = document.querySelector('.modal__clous');
 const modal  = document.querySelector('.modal');


 btnModal.forEach(btn => {
  btn.addEventListener("click", () =>  {
    console.dir(document.querySelector("body"));
    if (document.querySelector("body").classList) {
      document.querySelector("body").classList.add("overfHidden");
    }
    modal.classList.add("modalActive");
  })
});

document.querySelector('.modal').classList.remove("modalActive");





//
// for (let i = 0; i < productNUM_SLIDES; i++) {
//   // let doc = new Document();
//   const item = document.createElement(`span`);

//   item.setAttribute("id", `${i}`);
//   productNavItem.append(item);

//   item.innerHTML = `
//                      <div class="circular-progress">
//                        <span class="progress-value" value="0">0</span>
//                      </div>
//                   `;

//   productNavItem.children[i].addEventListener("click", (i) => {
//     producttrack.style.transform = `translateX(${-i.target.id * 100}%)`;
//   });
// }





// let circularProgress = document.querySelector(".circular-progress"),
//   progressValue = document.querySelector(".progress-value");
// let progressStartValue = 0,
//   // до куда идет загрузка
//   progressEndValue = 100,
//   speed = 20;

// document.querySelectorAll(".product__nav-item").forEach((item) => {
//   let step = 0;

//   let tt = () => {

//     const proc = () => {
      
//       progressStartValue++;
//       item.children[step].children[0].firstElementChild.attributes[1].value = `${progressStartValue}`;
//       item.children[step].children[0].style.background = `conic-gradient(#7d2ae8 ${
//         progressStartValue * 3.6
//       }deg, #ededed 0deg)`;
//     };

//     if (item.children[step].id == "0") {
//       proc();
//     } else if (item.children[step].id === "1") {
//       proc();
//     } else if (item.children[step].id === "2") {
//       proc();
//     } else if (item.children[step].id === "3") {
//       proc();
//     }else if (item.children[step].id === "4") {
//          return
//     }
//   };


//   if (item.children[step].id === "4")  {
//     console.log('stop');
//   } else {
//     setInterval(() => {
//       tt();
//       if (progressStartValue == progressEndValue) {
//         productslideTrackSpan(`${step++}`);
//         progressStartValue = 0;
//       }
//     }, speed);
//   }
    
  



// });

// const procces = ()  => {
//   // progressStartValue++;
//   progressValue.attributes.value.value = `${progressStartValue}`
//   circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
// }

// let progress = setInterval(() => {
//     procces()
//     if(progressStartValue == progressEndValue && progressValue.attributes.value.value == "100"){
//         clearInterval(progress);
//         productslideTrackSpan('1');
//     }
// }, speed);
//
