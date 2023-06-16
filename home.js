let arr2 = [
  {
    head: "Memorable Trip",
    msg: "This is a realyy memorable trip for me. Utenim ad minimveniam,nosturd exercit tation ullamco laboris nisi ut aliquip exa    comando consequat aute irure sint.",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
    pro: "Jennifer Doe influencer<",
  },
  {
    head: "Memorable Trip",
    msg: "This is a realyy memorable trip for me. Utenim ad minimveniam,nosturd exercit tation ullamco laboris nisi ut aliquip exa    comando consequat aute irure sint.",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
    pro: "Jennifer Doe influencer<",
  },
  {
    head: "Memorable Trip",
    msg: "This is a realyy memorable trip for me. Utenim ad minimveniam,nosturd exercit tation ullamco laboris nisi ut aliquip exa    comando consequat aute irure sint.",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
    pro: "Jennifer Doe influencer<",
  },
  {
    head: "Memorable Trip",
    msg: "This is a realyy memorable trip for me. Utenim ad minimveniam,nosturd exercit tation ullamco laboris nisi ut aliquip exa    comando consequat aute irure sint.",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
    pro: "Jennifer Doe influencer<",
  },
  {
    head: "Memorable Trip",
    msg: "This is a realyy memorable trip for me. Utenim ad minimveniam,nosturd exercit tation ullamco laboris nisi ut aliquip exa    comando consequat aute irure sint.",
    img: "https://cdn.dribbble.com/users/8689057/avatars/small/ec04f5d4caa3824816339ece1bf074a3.png?1673421779",
    pro: "Jennifer Doe influencer<",
  },
];
<div>
  <div>
    <img src="kdsam0" />
    <p>Jennifer Doe influencer</p>
  </div>
</div>;
let photo2 = document.getElementById("photo");

let one = document.getElementById("one");
let two = document.getElementById("two");
let index = 0;

function display(data) {
  photo.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let cart3 = document.createElement("div");
    cart3.classList.add("photo-item");

    let img = document.createElement("img");
    img.setAttribute("src", data[i].img);

    let msg = document.createElement("p");
    msg.innerText = data[i].msg;

    let head = document.createElement("p");
    head.innerText = data[i].head;

    let pro = document.createElement("p");
    pro.innerText = data[i].pro;

    cart3.append(head, msg,img,pro);
    photo2.append(cart3);
  }
}

function text(n) {
  index += n;
  let slides = document.getElementsByClassName("photo-item");

  if (index > slides.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }

  photo2.scrollLeft = slides[index].offsetLeft;
}

zero.addEventListener("click", () => text(-1));
one.addEventListener("click", () => text(0));

display(arr2);
