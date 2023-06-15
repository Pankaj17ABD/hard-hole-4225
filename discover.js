window.addEventListener("load", function () {
  function slideshowFun(images) {
    let count = 0;
    let container = document.querySelector("#photo");
    let image = document.createElement("img");
    image.setAttribute("src", images[count]);
    function changeSlide() {
      count++;
      if (count > images.length - 1) {
        count = 0;
      }
      image.setAttribute("src", images[count]);
    }
    container.appendChild(image);
    setInterval(changeSlide, 2000);
  }
  slideshowFun(movieImages);
});
var movieImages = [
  "https://www.thrillophilia.com/blog/wp-content/uploads/2016/12/rishikesh-2.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZibi22qSUcFV_LPr-3ZeJITpwdlLEvZ_JyIsSslElmSfKT-b7QtvuDdERahdd5dQyH8&usqp=CAU://images.indianexpress.com/2022/06/major-movie-review-1200.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDIqn98xh7yx1OyTKi7w9XCMq5yAaxn7jtJiPWGYttI89s9dH979h6hOOfoYIbTgI4jg&usqp=CAU",
  "https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjstAp7GdemNCuOmDchCMh44xNkD6VLX03zmU5Oxj-xhI77-h039YETP3N_H3P-zk_TfY&usqp=CAU-a.akamaihd.net/v1/images/p_aladdin2019_17638_d53b09e6.jpeg",
  "https://ihplb.b-cdn.net/wp-content/uploads/2014/06/rock-climbing-badami-750x430.jpg",

 ];
