var size=80;
var boxes=[];
var letters=['A','B','C','D','E','F'];
var main = document.getElementById('main3');
var letter1, letter2;
var counter=0;
var rememberbox;
var i=0

document.getElementById("Makeboxes").onclick = function() {
   for( var x=0;x<3;x++,size+=20,i++){
    boxes[i]= document.createElement("section");
    main.appendChild( boxes[i]);
    boxes[i].style.cssFloat = "Left";
    boxes[i].style.height   = size + "px";
    boxes[i].style.width    = size + "px";
    boxes[i].style.background = "black";
    boxes[i].style.margin   = "64px";
    boxes[i].style.color="black";
    boxes[i].style.fontSize = "64px";
    boxes[i].style.display  = "flex";
    boxes[i].style.alignItems = "center";
    boxes[i].style.textAlign = "center";
    boxes[i].id=i; // the index of the box
    document.getElementById(i).addEventListener("click",chois);
    document.getElementById(i).innerHTML=letters[Math.floor(Math.random() * 6)];
}

function chois() {
    this.style.color="white";
    if(counter == 0) {
        rememberbox=this.id;
        letter1 = this.innerHTML;
        counter++;
    }
    else {
      setTimeout( function(){this.style.color="white"}, 3000)
        counter = 0;
        letter2 = this.innerHTML;
        if(letter1 == letter2 && rememberbox!=this.id) {
           console.log("box is same: " );
           boxes[rememberbox].style.color = "black";
           this.style.color = "black";
           boxes[rememberbox].style.background = "rgba(18, 236, 29, 0.4)";
           this.style.background = "rgba(18, 236, 29, 0.4)";
           document.getElementById(rememberbox).removeEventListener("click",colorsign);
           document.getElementById(this.id).removeEventListener("click",colorsign);
           
        }
        else{
          
          console.log('before');
          console.log('after');
                  boxes[rememberbox].style.background = "rgb(192, 3, 3)";
                   this.style.background = "rgb(192, 3, 3)";
                   delay();
          boxes[rememberbox].style.color = "black";
           this.style.color = "black";
           boxes[rememberbox].style.background = "black";
           this.style.background = "black";
        }
    }
  }

  async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2000);
      }, delayInms);
    });
  }
}

 

