var section=document.getElementById("head");
var div=document.createElement("div")
section.appendChild(div)

var heading=document.createElement("h1")
heading.innerHTML="Lion"
heading.classList.add("mainheading")
div.appendChild(heading)


var para=document.createElement("p")
para.innerHTML="The lion is a wild terrestrial animal called the king of the forest. The lion is a strong animal with a strong body, a big head, a majestic mane, and two fierce eyes.<br> Lions are predatory animals and eat only after hunting. They have strong claws and sharp teeth, which help them hunt their prey and eat the flesh."
para.classList.add("content")
div.appendChild(para)


var divimage=document.createElement("div")
divimage.classList.add("div1")
div.appendChild(divimage)

var image=document.createElement("img")
image.setAttribute("src","images/Lion.jpg")
image.classList.add("pic")
divimage.appendChild(image)



