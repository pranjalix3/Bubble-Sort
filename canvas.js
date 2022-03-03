var canvas = document.querySelector("canvas");
//canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var ctx = canvas.getContext("2d");

var i=0;
var size=0;
var array_=[];
var r=0;
var co=0;
var rc=0;
var coc=0;
var dx=0.5;
var search=0;
var x=50;
var y=250;
var t=0;
var array1 = [];
var flag=0;
var max=1000;
var members=[];

// class data{
//   constructor(value,index,x,y){
//       this.value=value;
//       this.index=index;
//       this.x=x;
//       this.y=y;
//   }
// }
function createArray()
{
   size=document.querySelector(".in01").value;
  array_=[size];
  console.log(size);
  if(size>100){
    alert("Can't exceed the range 100!")
  }else
  {
  if(size>0)
  {document.querySelector(".divin01").classList.remove('invs');
  document.querySelector(".divin01").style.visibility="visible";
  }
  else
  alert("Error:Please enter a positive integer greater than 0 and less than 101!");
  if(size>0)
  document.querySelector(".inb01").disabled = true;
  else
  document.querySelector(".inb01").disabled = false;
  r=Math.floor(size/10);
  if(size%10!=0)
  r++;
} 

}

console.log(size);
function complexity(){
  document.querySelector(".timeComplexity").innerHTML="O( "+size+"^2 )";

}
function user_choice(){
  var choice=document.querySelector(".ddc01").value;
  if(choice=="User-Defined")
  {
      document.querySelector(".divin02").classList.remove('invs'); 
      document.querySelector(".inb04").classList.remove('invs'); 
      document.querySelector(".divin02").style.visibility = "visible";
      document.querySelector(".inb04").style.visibility = "visible";
  }
  
  else
  {while(i<size)
      {
          if(rc<r)
          {
              if(coc<=9)
              {
                  array_[i]=(Math.round(Math.random()*1001));
                  array1[i]=array_[i];
                  i++;
                  coc++;
              }
              else{
                  coc=0;
                  rc++;
              }
          }
          document.querySelector(".inb04").style.visibility = "visible";
          //document.querySelector(".btns").style.visibility = "visible";
      }

      max=array_[0];
  for(var j=0;j<size;j++)
  {
    if(array_[j]>max)
     max=array_[j];

  }
  console.log(max);
  canvas.width=((size*20))+700;
  canvas.height=((max+50)*4)+200;


      console.log(array_);
      console.log(size);
     
      document.querySelector(".inb04").classList.remove('invs');
  }
  document.querySelector(".inb02").disabled = true;
  i=0;
  coc=0;
  rc=0;
}

function add_ele()
{
    if(i<=size-1)
    {   if((document.querySelector(".in02").value<=0||document.querySelector(".in02").value>=0||document.querySelector(".in02").value>0!=""||document.querySelector(".in02").value===0)&&(document.querySelector(".in02").value<10000)&&(document.querySelector(".in02").value.match(/\S/))
    ){
           
           
        if(coc<=9)
        {
            array_[i]=parseInt(document.querySelector(".in02").value);
            array1[i]=parseInt(document.querySelector(".in02").value);
            document.querySelector(".p001").innerHTML = "["+(i+1)+"]";
            coc++;
        }
        else{
             coc=0;
            rc++;
        }
           document.querySelector(".in02").value="";      
        
        console.log(array_);
        console.log(array1);
    }
    

    else {
        alert("Error:\n1) Input is not a number  \n2) Greater than 9,999 \n3) Input is null ");i--;
    }

    
    i++;

}
else{
    document.querySelector(".inb04").classList.remove('invs');
    alert("can enter only "+(i)+ " elements");
    i=0;
}
if(i===(0))
  document.querySelector(".inb03").disabled = true;
console.log(array_);

max=array_[0];
  for(var j=0;j<size;j++)
  {
    if(array_[j]>max)
     max=array_[j];

  }
  console.log(max);
  canvas.width=((size*20))+700;
  canvas.height=((max+50)*4)+200;
}
x=10;
y=10;
function draw_arr()
{
  
  document.querySelector(".btns").style.visibility = "visible";
document.querySelector("canvas").style.visibility =('visible');
i=0;
while(i<size){
  
  ctx.fillStyle="#d8d3cd";
  ctx.fillRect(x,y,50,50);
  ctx.fillStyle="black";
  ctx.font = "15px Arial";
  ctx.fillText(array1[i].valueOf(),x+10,y+20);
  if((x+50)>((size*20)+700))
   { x=10;
    flag = 1;
    y=70;}

  x=x+50;
  i++;
}
x=10;
y=10;
// function create_arr(x,y)
// {
//     ctx.beginPath();
//     ctx.rect(x,y, 100, 100);
//     ctx.stroke();
// }

// function fill_text(a,x,y)
// {
//     ctx.font = "20px Arial";
// ctx.fillText(a, x, y);

// }


// function fill_index(a,x,y)
// {
//     ctx.font = "10px Arial";
// ctx.fillText(a, x, y);

// }
    
//     while(i<size)
//     {
//         create_arr=(array_[i].x,array_[i].y);
//         fill_text(array_[i].value,array_[i].x+34,array_[i].y+54);
//         fill_index(array_[i].index,array_[i].x+50,array_[i].y+110);
//         i++;
//     }
}

const ACTIONS = {
  SORT: "SORT",
  COMPARE: "COMPARE",
  SWAP: "SWAP",
};

function max_ele()
{ max=array_[0];
  for(var j=0;j<size;j++)
  {
    if(array_[j]>max)
     max=array_[j];

  }
  console.log(max);
  canvas.width=((size*30))+50;
  canvas.height=((max+50)*4)+200;
}




function start(l)
{

const actionsMap = {
  [ACTIONS.SORT]: (action, members) => members[action.data].sorted(),
  [ACTIONS.SWAP]: (action, members) => {
    const [i, j] = action.data;
    let tmp = members[i].getValue();
    members[i].setValue(members[j].getValue(), "#a8df65");//red
    members[j].setValue(tmp, "#f0a500");// musterd
  },
  [ACTIONS.COMPARE]: (action, members) => {
    const [i, j] = action.data;
    
    members[i].setColor("#3c2946");//purple
    members[j].setColor("#3c2946");//purple#3c2946
  },
};

const shuffledArrayInRange = (bottom , top) => {
  const arr = [];console.log(array_);
  
  return array_;
};





const bubbleSort = (array, onAction) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-i+1; j++) {
      onAction({ type: ACTIONS.COMPARE, data: [j, j + 1] });
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        onAction({ type: ACTIONS.SWAP, data: [j, j + 1] });
        
      }
    }
    onAction({ type: ACTIONS.SORT, data: array.length - i - 1 });
  }
  
  return array;
  
};

// const bubble_Sort = (array, onAction) => {
//   for (let i = 0; i < array.text; i++) {
//     for (let j = 0; j < array.text-i+1; j++) {
//       onAction({ type: ACTIONS.COMPARE, data: [j, j + 1] });
//       if (array[j] > array[j + 1]) {
//         let tmp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = tmp;
//         onAction({ type: ACTIONS.SWAP, data: [j, j + 1] });
//       }
//     }
//     onAction({ type: ACTIONS.SORT, data: array.text - i - 1 });
//   }
//   return array;
// };



function ArrayMember(x, y, width,height, value, color = "gray") {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.text = value;
  console.log(size);

  this.draw = () => {
    draw_arr();
    ctx.fillStyle = this.color;
    {if(flag===0)
    { 
      ctx.fillRect(this.x+50, this.y+50, this.width, (this.height/max*100).toFixed());
      ctx.fillStyle = "black";
    ctx.font="10px Ariel";
    ctx.fillText(this.height/5, this.x+55, 100, 25);
    }
    else if(flag===1)
    {
      ctx.fillRect(this.x+50, this.y+100, this.width, (this.height/max*100).toFixed());
    ctx.fillStyle = "black";
    ctx.font="10px Ariel";
    ctx.fillText(this.height/5, this.x+55, 150, 25);
    }}
    };



  this.resetColor = () => this.setColor("gray");

  this.setColor = (color) => {
    if (!this.isSorted()) {
      this.color = color;
    }
  };

  this.isSorted = () => this.color === "black";

  this.sorted = () => (this.color = "black");

  this.setValue = (v, color) => {
    if (!this.isSorted()) {
      canvas.height=((max+50)*4)+200;
      this.height = v;
      
      this.setColor(color);
    }
  };
  
  this.getValue = (v) => this.height;
}

const randomArray = shuffledArrayInRange(0,size);
const arrayMembers = randomArray.map((v, i) => {
  console.log(max);
  return new ArrayMember(25 * i + i, 100, 25, v.toFixed() * 5, v.toFixed());

  // if(max<100)
  // return new ArrayMember(25 * i + i, 100, 25, v.toFixed() * 5, v.toFixed());
  // else if(max<300)
  // return new ArrayMember(25 * i + i, 100, 25, v.toFixed() * 3, v.toFixed());
  // else if(max<=500)
  // return new ArrayMember(25 * i + i, 100, 25, v.toFixed() * 1, v.toFixed());
  
});


const drawAll = () => arrayMembers.forEach((m) => m.draw());
  
  drawAll();
  draw_arr();

let ticks = 0;
var speed;
if(l===1){
  speed=1500;
  document.getElementById("1").disabled = true;document.getElementById("1").style.color = "black";
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
}
else if(l===2){
  speed=1000;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
}
else if(l===3){
  speed=750;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
}else if(l===4){
  speed=500;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
}else if(l===5){
  speed=350;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
}else if(l===6){
  speed=200;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
}

bubbleSort(randomArray, (action) => {
  ticks++;
  setTimeout(() => {
    actionsMap[action.type](action, arrayMembers);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    drawAll(arrayMembers);
    arrayMembers.forEach((m) => m.resetColor());
  }, ticks * speed);
});
}

function reset(){
  location.reload();
}
