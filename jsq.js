const startbutton=document.querySelector('.startbut');
const rulepage=document.querySelector('.rulespage');
const exitbut=document.querySelector('.exitbutton');
const mains=document.querySelector('.main');
const contbtn=document.querySelector('.continuebutton');
const quizsec=document.querySelector('.quiz-sec');
const optio=document.querySelector('.options');

startbutton.onclick = () => {
    rulepage.classList.add('active');
    mains.classList.add('active');
}
exitbut.onclick = () => {
    rulepage.classList.remove('active');
    mains.classList.remove('active');

}
contbtn.onclick = () => {
    quizsec.classList.add('active');
    rulepage.classList.remove('active');
    mains.classList.remove('active');
showq(0);
qcount(1);

}
let count=0;
let numb=1;
const nb=document.querySelector('.nextq');

nb.onclick = () => {
    count++;
    numb++;
showq(count);
qcount(numb);

}
const optionList=document.querySelector('.optionlist');
function showq(index){

    const ques1=document.querySelector('.qtext');
    ques1.textContent=`${q[index].numbe}. ${q[index].question}`;

let optiontag=`<div class="options"><span>${q[index].options[0]}</span></div>
<div class="options"><span>${q[index].options[1]}</span></div>
<div class="options"><span>${q[index].options[2]}</span></div>
<div class="options"><span>${q[index].options[3]}</span></div>`;
optionList.innerHTML=optiontag;

const option=document.querySelectorAll('.options');
for(let i=0; i<option.length;i++){
    option[i].setAttribute('onclick','optionSelected(this)');
}
    
}
function optionSelected(answer){
    let userans=answer.textContent;
    let corans=q[count].answer;
    if(userans==corans){
answer.classList.add('correct');
console.log("correct");

}
else{
        console.log("incorrect");
        answer.classList.add('wrong');
    }
}
function qcount(index){
    const qtot=document.querySelector('.qtotal');
    qtot.textContent=`${index} of ${q.length} Questions`;
}


