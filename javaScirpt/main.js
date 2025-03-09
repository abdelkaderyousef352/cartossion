// change back-ground images  

let intro = document.getElementById("intro");
let randomNumber = Math.floor(Math.random() * 6);
intro.style.backgroundImage = `url('image/intro${randomNumber}.jpg')`;

// =========================End=================================================


// filtur our-work
let switcherList = document.querySelectorAll(".switcher li"); // تحديد الأزرار
let allItems = document.querySelectorAll(".row .col-sm-6"); // جميع العناصر القابلة للفلترة

switcherList.forEach((li) => {
    li.addEventListener("click", function () {
        removeActive(this);
        manageVideos(this.dataset.cat);
    });
});


function removeActive(activeElement) {
    switcherList.forEach((li) => li.classList.remove("active"));
    activeElement.classList.add("active");
}


function manageVideos(category) {
    allItems.forEach((item) => {
        item.style.display = "none"; 
    });

    if (category === ".all") {
        allItems.forEach((item) => {
            item.style.display = "block";
        });
    } else {
        document.querySelectorAll(category).forEach((el) => {
            el.style.display = "block"; 
        });
    }
}
// =========================End=================================================




// ==============================Start Animation=================================
let prev = document.getElementById('prev'); 
let next = document.getElementById('next'); 
let box = document.getElementById('box'); 

let degress = 0;

prev.addEventListener('click', function(){

    degress += 45;
    box.style = `transform:perspective(1000px) rotateY(${degress}deg)`;
})
next.addEventListener('click', function(){

    degress -= 45;
    box.style = `transform:perspective(1000px) rotateY(${degress}deg)`;
})

setInterval(function(){

    degress -= 45;
    box.style = `transform:perspective(1000px) rotateY(${degress}deg)`;
},2000)

setInterval



// ==============================end Animation===================================