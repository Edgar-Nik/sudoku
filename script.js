const submit = document.querySelector('.check_button');
const reset = document.querySelector('.reset_button');
const playAgain = document.querySelector('.play_again');
const wrongCase =  document.querySelector('.wrong_solution');
document.querySelector('.win_case').style="display:none;"
const easy1=[[0,0,2,0,0,0,5,0,0],
				[0,1,0,7,0,5,0,2,0],
				[4,0,0,0,9,0,0,0,7],
				[0,4,9,0,0,0,7,3,0],
				[8,0,1,0,3,0,4,0,9],
				[0,3,6,0,0,0,2,1,0],
				[2,0,0,0,8,0,0,0,4],
				[0,8,0,9,0,2,0,6,0],
				[0,0,7,0,0,0,8,0,0]];

const easy2=[[0,5,0,0,1,0,0,4,0],
				[1,0,7,0,0,0,6,0,2],
				[0,0,0,9,0,5,0,0,0],
				[2,0,8,0,3,0,5,0,1],
				[0,4,0,0,7,0,0,2,0],
				[9,0,1,0,8,0,4,0,6],
				[0,0,0,4,0,1,0,0,0],
				[3,0,4,0,0,0,7,0,9],
				[0,2,0,0,6,0,0,1,0]];

const easy3=[[0,0,0,6,0,2,0,0,0],
				[4,0,0,0,5,0,0,0,1],
				[0,8,5,0,1,0,6,2,0],
				[0,3,8,2,0,6,7,1,0],
				[0,0,0,0,0,0,0,0,0],
				[0,1,9,4,0,7,3,5,0],
				[0,2,6,0,4,0,5,3,0],
				[9,0,0,0,2,0,0,0,7],
				[0,0,0,8,0,9,0,0,0]];

const medium1=[ [0,0,0,0,0,0,0,0,0],
				[0,7,9,0,5,0,1,8,0],
				[8,0,0,0,0,0,0,0,7],
				[0,0,7,3,0,6,8,0,0],
				[4,5,0,7,0,8,0,9,6],
				[0,0,3,5,0,2,7,0,0],
				[7,0,0,0,0,0,0,0,5],
				[0,1,6,0,3,0,4,2,0],
				[0,0,0,0,0,0,0,0,0]];

const medium2=[ [0,0,0,0,0,0,0,8,5],
				[0,0,0,2,1,0,0,0,9],
				[9,6,0,0,8,0,1,0,0],
				[5,0,0,8,0,0,0,1,6],
				[0,0,0,0,0,0,0,0,0],
				[8,9,0,0,0,6,0,0,7],
				[0,0,9,0,7,0,0,5,2],
				[3,0,0,0,5,4,0,0,0],
				[4,8,0,0,0,0,0,0,0]];

const examples=[easy1,easy2,easy3,medium1,medium2];

function randomaiser(arr){
	return arr[Math.floor(Math.random()*arr.length)]

}								
function gameStarter(example){
	let arr = [];

arr = arr.concat(...example)
console.log(arr)

for(let i = 1; i<arr.length+1;i++){
	let current = document.querySelector(`#inid${i}`);
	current.value = arr[i-1];
	if(arr[i-1]===0) {
		current.value ='';
	} else {
		current.style = "background: #B2B2B2;"
		// current.readOnly = true;
	}

}	
}			

	 
gameStarter(randomaiser(examples))

const resultBox = function(){
let cop =[]
for(let i = 1; i<=81;i++){
	let current = document.querySelector(`#inid${i}`);
	
	cop.push(current.value)
}

let finalresult=[]
for(let j = 0 ; j<81 ; j+=9){
  let mid = [];
  let cur = j
for(let i = cur;i<cur+9;i++){
	if(cop[i]===''){
		cop[i]=0;
	}
  mid.push(+(cop[i]))
}
  finalresult.push(mid)
}
return finalresult;
}




function validSolution(arr){
  let res1= [];
for(let x = 0;x<=6;x+=3){
    let first = x; 
for(let i=0; i< arr.length; i++){

  let a=[]
  for(let j = x;j<x+3;j++){
    a.push(arr[i][j])
  }
  res1.push(a)
}
}
let fin = [];
let cop=[];
cop = fin.concat(...res1)
console.log(cop.length)
let finalresult=[]
for(let j = 0 ; j<81 ; j+=9){
  let mid = [];
  let cur = j
for(let i = cur;i<cur+9;i++){
  mid.push(cop[i])
}
  finalresult.push(mid)
}
console.log(finalresult)

 for(let i = 0; i < finalresult.length; i++){
    let obj1 = {}
    for(let j = 0; j < finalresult[i].length; j++){
     if(obj1.hasOwnProperty(finalresult[i][j])){
       return false
     }
      else obj1[finalresult[i][j]] = finalresult[i][j]
     }
  }

  for(let i = 0; i < arr.length; i++){
    let obj = {}
    for(let j = 0; j < arr[i].length; j++){
     if(obj.hasOwnProperty(arr[i][j])){
       return false
     }
      else obj[arr[i][j]] = arr[i][j]
     }
  }
  
  let column = []
  
  for(let i = 0; i < arr.length; i++){
    let arrcol = []
    for(let j = 0; j < arr[i].length; j++){
     arrcol.push(arr[j][i])
  }
    column.push(arrcol)
  }
  console.log(column)
    for(let i = 0; i < column.length; i++){
    let obj = {}
    for(let j = 0; j < column[i].length; j++){
     if(obj.hasOwnProperty(column[i][j])){
       return false
     }
      else obj[column[i][j]] = column[i][j]
     }
  }

let res = [];
let a=[];
a = res.concat(...arr)


let str = a.join('')
if(str.match(/0/)){
  return false
}

  return true
}

playAgain.addEventListener('click',function(){
	let winner = document.querySelector('.win_case');


	setTimeout(()=>{winner.style="display:none;"},2000)
	winner.style="top: -100%; "
	let cur = document.querySelectorAll(`input`)
	for(let i=0;i<cur.length;i++){
		cur[i].style='background:none;'

	}

	gameStarter(randomaiser(examples))
})


reset.addEventListener('click',function(){
	let cur = document.querySelectorAll(`input`)
	for(let i=0;i<cur.length;i++){
		cur[i].style='background:none;'

	}
	gameStarter(randomaiser(examples))
})
submit.addEventListener('click', function(){
	
	if(validSolution(resultBox())){
	let winner = document.querySelector('.win_case');
	winner.style='display:flex;'
	setTimeout(()=>{winner.style="top: 0;"},1000)
	} else {

		wrongCase.style="display: flex"
		setTimeout(()=>{wrongCase.style="display: none"},2000)


		return;}

})