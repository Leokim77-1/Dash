   
const splash = document.querySelector(".splash");
const logform = document.querySelector(".loginform");
const signform = document.querySelector(".signupform");



setInterval(function(){
   splash.remove();
   logform.style.opacity = '1';
}, 5000)


function switcher(){
    logform.style.left = '-50%';
    signform.style.left = '40%';
}


function switcher2(){
    logform.style.left = '40%';
    signform.style.left = '-50%';
}




//dashboard canvas gridbox 1
/*const grid1 = document.getElementById('grid1');
const ctx = grid1.getContext('2d');
const subusers = new Image();
subusers.src = './imgs/subusers.png';
subusers.onload = function() {
ctx.drawImage(subusers, 80, 10, 120,40);

}

const grid2 = document.getElementById('grid2');
const ctx2 = grid2.getContext('2d');
const payed = new Image();
payed.src = './imgs/payed.png';
payed.onload = function() {
ctx2.drawImage(payed, 80, 10, 120,30);

}



const grid3 = document.getElementById('grid3');
const ctx3 = grid3.getContext('2d');
const unpaid = new Image();
unpaid.src = './imgs/unpaid.png';
unpaid.onload = function() {
ctx3.drawImage(unpaid, 80, 10, 120,30);

}



const grid4 = document.getElementById('grid4');
const ctx4 = grid4.getContext('2d');
const total = new Image();
total.src = './imgs/incomes.png';
total.onload = function() {
ctx4.drawImage(total, 80, 10, 120,30);

}


ctx.fillStyle = 'blue';
ctx.fillRect(200,50,100,120);





/*const x = 240;
const y = 20;

const width = 15;
const height = 40;


const color = 'red';


//draw red box
ctx.fillStyle = color;
ctx.fillRect(x,y,width,height);




ctx.fillStyle = 'blue';
ctx.fillRect(200,y,width,60);



ctx.fillStyle = 'green';
ctx.fillRect(160,y,width,85);

ctx.fillStyle = 'black';
ctx.fillRect(120,y,width,20);



ctx.fillStyle = 'orange';
ctx.fillRect(80,y,width,72);



ctx.fillStyle = 'violet';
ctx.fillRect(40,y,width,120);



ctx.font = '15px Tahoma';
ctx.fillStyle = 'black';
ctx.translate(100,100);
ctx.rotate(180 * Math.PI / 180);
ctx.fillText('60',-150,90);
*/
