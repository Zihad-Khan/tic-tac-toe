let sq11 = document.getElementById("sq11");
let sq12 = document.getElementById("sq12");
let sq13 = document.getElementById("sq13");
let sq21 = document.getElementById("sq21");
let sq22 = document.getElementById("sq22");
let sq23 = document.getElementById("sq23");
let sq31 = document.getElementById("sq31");
let sq32 = document.getElementById("sq32");
let sq33 = document.getElementById("sq33");
let win1 = document.getElementById('win1'); 
let win2 = document.getElementById('win2'); 
let lost1 = document.getElementById('lost1');
let lost2 = document.getElementById('lost2');
let draw1 = document.getElementById('draw1');
let draw2 = document.getElementById('draw2');

var wn1 = 0;
var wn2 = 0;
var ls1 = 0;
var ls2 = 0;
var dr1 = 0;
var dr2 = 0;

function removeAlert(){
    document.getElementById("alert").style.display = 'none';
    clearAll();
};

var count = 0;
var symbol;

var status11 = true;
var status12 = true;
var status13 = true;
var status21 = true;
var status22 = true;
var status23 = true;
var status31 = true;
var status32 = true;
var status33 = true;

var content11 =[];
var content12 =[];
var content13 =[];
var content21 =[];
var content22 =[];
var content23 =[];
var content31 =[];
var content32 =[];
var content33 =[];

var content1=[];
var content2=[];
var content3=[];

function clearAll(){
  sq11.textContent = "";
  sq12.textContent = "";
  sq13.textContent = "";
  sq21.textContent = "";
  sq22.textContent = "";
  sq23.textContent = "";
  sq31.textContent = "";
  sq32.textContent = "";
  sq33.textContent = "";
  count = 0;
  content11 =[];
  content12 =[];
  content13 =[];
  content21 =[];
  content22 =[];
  content23 =[];
  content31 =[];
  content32 =[];
  content33 =[];

  content1=[];
  content2=[];
  content3=[];
  
  status11 = true;
  status12 = true;
  status13 = true;
  status21 = true;
  status22 = true;
  status23 = true;
  status31 = true;
  status32 = true;
  status33 = true;
  document.getElementById('hr1').style.display ="none";
  document.getElementById('hr2').style.display ="none";
  document.getElementById('hr3').style.display ="none";
  document.getElementById('vr1').style.display ="none";
  document.getElementById('vr2').style.display ="none";
  document.getElementById('vr3').style.display ="none";
  document.getElementById('dl1').style.display ="none";
  document.getElementById('dl2').style.display ="none";
}

function gettingTics(status,sq,content){
  if(status){
    count ++;
    if(count%2==0&&count>0){
      sq.textContent = "o";
     content.push("o");
    }
    else{
      sq.textContent = "×";
      content.push("×");
    }
  }
}

sq11.addEventListener('click',function(){
  gettingTics(status11,sq11,content11);
  content1[0] = content11[0];
  status11 = false;
  selectWinner();
});
sq12.addEventListener('click',function(){
  gettingTics(status12,sq12,content12);
  content1[1] = content12[0];
  status12 = false;
  selectWinner();
});

sq13.addEventListener('click',function(){
  gettingTics(status13,sq13,content13);
  content1[2] = content13[0];
  status13 = false;
  selectWinner();
});

sq21.addEventListener('click',function(){
  gettingTics(status21,sq21,content21);
  content2[0] = content21[0];
  status21 = false;
  selectWinner();
});

sq22.addEventListener('click',function(){
  gettingTics(status22,sq22,content22);
  content2[1] = content22[0];
  status22 = false;
  selectWinner();
});

sq23.addEventListener('click',function(){
  gettingTics(status23,sq23,content23);
  content2[2] = content23[0];
  status23 = false;
  selectWinner();
});

sq31.addEventListener('click',function(){
  gettingTics(status31,sq31,content31);
  content3[0] = content31[0];
  status31 = false;
  selectWinner();
});

sq32.addEventListener('click',function(){
  gettingTics(status32,sq32,content32);
  content3[1] = content32[0];
  status32 = false;
  selectWinner();
});

sq33.addEventListener('click',function(){
  gettingTics(status33,sq33,content33);
  content3[2] = content33[0];
  status33 = false;
  selectWinner();
});

function selectWinner(){
    
  var winCase1 = content1.join("");
  var winCase2 = content2.join("");
  var winCase3 = content3.join("");
  var winCase4 = content1[0]+content2[0]+content3[0];
  var winCase5 = content1[1]+content2[1]+content3[1];
  var winCase6 = content1[2]+content2[2]+content3[2];
  var winCase7 = content1[0]+content2[1]+content3[2];
  var winCase8 = content1[2]+content2[1]+content3[0];
  
  function player1Wins(){
    wn1++;
    ls2++;
    win1.textContent = wn1;
    lost2.textContent = ls2;
    document.getElementById('alert').style.display= 'block';
    document.getElementById("alertText").textContent =`Player1 won this round!`;
  }
  function player2Wins(){
    
    wn2++;
    ls1++;
    win2.textContent = wn2;
    lost1.textContent = ls1;
    document.getElementById('alert').style.display= 'block';
    document.getElementById('alertText').innerHTML = `Player2 won this round!`;
  }
  function matchDraw(){
      dr1++;
      dr2++;
      draw1.textContent = dr1;
      draw2.textContent = dr2;
      document.getElementById('alert').style.display= 'block';
      document.getElementById('alertText').innerHTML = `Match is drawn.`;
  }
  
  if(winCase1=="×××"){
      document.getElementById('hr1').style.display="block" ;
      player1Wins();
  }
  else if(winCase1=="ooo"){
      document.getElementById('hr1').style.display="block" ;
      player2Wins();
  }
  else if(winCase2=="×××"){
      document.getElementById('hr2').style.display="block" ;
      player1Wins();
  }
  else if(winCase2=="ooo"){
      document.getElementById('hr2').style.display="block" ;
      player2Wins();
  }
  else if(winCase3=="×××"){
      document.getElementById('hr3').style.display="block" ;
      player1Wins();
  }
  else if(winCase3=="ooo"){
      document.getElementById('hr3').style.display="block" ;
      player2Wins();
  }
  else if(winCase4=="×××"){
      document.getElementById('vr1').style.display="block" ;
      player1Wins();
  }
  else if(winCase4=="ooo"){
      document.getElementById('vr1').style.display="block" ;
      player2Wins();
  }
  else if(winCase5=="×××"){
      document.getElementById('vr2').style.display="block" ;
      player1Wins();
  }
  else if(winCase5=="ooo"){
      document.getElementById('vr2').style.display="block" ;
      player2Wins();
  }
  else if(winCase6=="×××"){
      document.getElementById('vr3').style.display="block" ;
      player1Wins();
  }
  else if(winCase6=="ooo"){
      document.getElementById('vr3').style.display="block" ;
      player2Wins();
  }
  else if(winCase7=="×××"){
      document.getElementById('dl1').style.display="block" ;
      player1Wins();
  }
  else if(winCase7=="ooo"){
      document.getElementById('dl1').style.display="block" ;
      player2Wins();
  }
  else if(winCase8=="×××"){
      document.getElementById('dl2').style.display="block" ;
      player1Wins();
  }
  else if(winCase8=="ooo"){
      document.getElementById('dl2').style.display="block" ;
      player2Wins();
  }
  else if(count == 9){
      matchDraw();
  }
}
function botAlert(){
    alert("Sorry for your disappointment! This mode is under development. You can enjoy FRIEND mode. Thank you!");
}
function friendAlert(){
    alert("This mode is on. Enjoy your game!");
}