let arr = [
  {
    price: "$35/person",
    location: "Bali, Indonasia",
    time: "7 Days Bali and Gili Islands Epid Experience",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
  },
  {
    price: "$35/person",
    location: "Bali, Indonasia",
    time: "7 Days Bali and Gili Islands Epid Experience",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
  },
  {
    price: "$35/person",
    location: "Bali, Indonasia",
    time: "7 Days Bali and Gili Islands Epid Experience",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
  },
  {
    price: "$35/person",
    location: "Bali, Indonasia",
    time: "7 Days Bali and Gili Islands Epid Experience",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
  },
  {
    price: "$35/person",
    location: "Bali, Indonasia",
    time: "7 Days Bali and Gili Islands Epid Experience",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
  },
  {
    price: "$35/person",
    location: "Bali, Indonasia",
    time: "7 Days Bali and Gili Islands Epid Experience",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
  },
  {
    price: "$35/person",
    location: "Bali, Indonasia",
    time: "7 Days Bali and Gili Islands Epid Experience",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
  }
];
let LS = [];
let photo = document.getElementById("photo");
let cont = document.getElementById("cont");
function Display(data) {
  cont.innerHTML = ""; // null
  for (let i = 0; i < data.length; i++) {
    let cart2 = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", data[i].img);

    let time = document.createElement("p");
    time.innerText = data[i].time;

    let location = document.createElement("p");
    location.innerText = data[i].location;

    let price = document.createElement("p");
    price.innerText = data[i].price;
   

    cart2.append(image, time, location, price);

    photo.append(cart2);
    cont.append(photo);
  }
}

Display(arr);
