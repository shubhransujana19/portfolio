hamburger = document.querySelector(".hamburger");
hamburger.onclick=function(){
    navBar= document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_iv6bekcjana";
    const templateID = "template_uycwxgx";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

var typed = new Typed(".multiple-text",{
    strings:[, "Full Stack Web Developer","Mobile App Developer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
})

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


// $("a").click(function(){
//   var pageId = $(this).attr("data-page");
//   $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
// });


function initializeSlider(sliderId) {
  console.log(sliderId);
  let currentIndex = 0;

  function showSlide() {
    const cards = document.querySelectorAll(`#${sliderId} .card`);
    const totalSlides = cards.length;

    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }

    const translateValue = -currentIndex * (300 + 20); // Width of card + margin
    const sliderContainer = document.querySelector(`#${sliderId} .card-slider`);

    if (sliderContainer) {
      sliderContainer.style.transform = `translateX(${translateValue}px)`;
    }
  }

  // Handle next button click
  document.querySelector(`#${sliderId} .next-btn`).addEventListener('click', function () {
    currentIndex += 1;
    showSlide();
  });

  // Handle previous button click
  document.querySelector(`#${sliderId} .prev-btn`).addEventListener('click', function () {
    currentIndex -= 1;
    showSlide();
  });

  // Initial slide
  showSlide();
}

// initializeSlider('slider1');
// initializeSlider('slider2');
