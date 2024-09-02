let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  console.log("Current Image Source: " + mySrc);  // 输出当前图片路径
  
  if (mySrc === "image/microsoft-edge-logo.png") {
    myImage.setAttribute("src", "image/microsoft-edge-logo2.png");
  } else {
    myImage.setAttribute("src", "image/microsoft-edge-logo.png");
  }
  
  console.log("New Image Source: " + myImage.getAttribute("src"));  // 输出切换后的图片路径
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "酷毙了，" + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "酷毙了，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "酷毙了，" + myName;
    }
  }
  