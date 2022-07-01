var imgArray = new Array();
var count = 0;
var images = document.querySelector(".img-container")   
var leftbutton = document.getElementsByClassName("btn-left")
var rightbutton =  document.getElementsByClassName("btn-right")   
var imageslider1
var imageslider2
var imageslider3
var imageslider4
var imageslider5
var imageslider6


// SELECT IMAGES FROM PC
var loadFile1 = function(event) {
    imageslider1 =  URL.createObjectURL(event.target.files[0])
    };

    var loadFile2 = function(event) {
        imageslider2 =  URL.createObjectURL(event.target.files[0])
        };

        var loadFile3 = function(event) {
            imageslider3 =  URL.createObjectURL(event.target.files[0])
            };

            var loadFile4 = function(event) {
                imageslider4 =  URL.createObjectURL(event.target.files[0])
                };

                var loadFile5 = function(event) {
                    imageslider5 =  URL.createObjectURL(event.target.files[0])
                    };

                    var loadFile6 = function(event) {
                        imageslider6 =  URL.createObjectURL(event.target.files[0])
                        };

// SELECT IMAGES FROM PC

// ADD IMAGES TO SLIDER ARRAY
var Btn = document.querySelector("#Btn");
Btn.addEventListener("click", function(){
    console.log(localStorage.getItem('image1'))
    imgArray[0] = new Image();
    imgArray[0] =  imageslider1
    
    imgArray[1] = new Image();
    imgArray[1] = imageslider2
    
    imgArray[2] = new Image();
    imgArray[2] = imageslider3;
    
    imgArray[3] = new Image();
    imgArray[3] = imageslider4;
    
    imgArray[4] = new Image();
    imgArray[4] = imageslider5;
    
    imgArray[5] = new Image();
    imgArray[5] = imageslider6;

    document.getElementById("finalbox").style.display = "block";
    
})
// ADD IMAGES TO SLIDER ARRAY



function rightFunction(){
    count++;
    if(count > imgArray.length - 1){ count = 0;};
    images.style.backgroundImage = `url('${imgArray[count]}`
    // console.log (imgArray[count]);
    };
    
    function leftFunction(){
    count--;
    if (count < 0){ count = imgArray.length -1};
    console.log(count);
    images.style.backgroundImage = `url('${imgArray[count]}`
    console.log (imgArray[count]);
    };




   