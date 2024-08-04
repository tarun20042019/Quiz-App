let q=[
    {
        numbe:1,
        question:"What does HTML stand for?",
        answer:"D) Hyper Text Markup Language",
        options:[
            "A) Home Tool Markup Language",
            "B) Hyperlinks and Text Markup Language",
            "C) Hyperlinking Text Mark Language",
            "D) Hyper Text Markup Language"

        ]
    },
    {
        numbe:2,
        question:"What does MERN stand for?",
        answer:"A) MongoDB, Express.js, React, Node.js",
        options:[
            "A) MongoDB, Express.js, React, Node.js",
            "B) MySQL, Express.js, React, Node.js",
            "C) MongoDB, Ember.js, React, Node.js",
            "D) MongoDB, Express.js, Redux, Node.js"

        ]


    },

    {
        numbe:3,
        question:"Which property is used to change the background color in CSS?",
        answer:"C) background-color",
        options:[
            "A) bg-color",
            "B) color",
            "C) background-color",
            "D) bgcolor"

        ]
    },
    {
        numbe:4,
        question:"What does CSS stand for?",
        answer:"C) Cascading Style Sheets",
        options:[
            "A) Computer Style Sheets",
            "B) Creative Style Sheets",
            "C) Cascading Style Sheets",
            "D) Colorful Style Sheets"

        ]

    },

    {
        numbe:5,
        question:" Which attribute is used to specify that an input field must be filled out before submitting the form?",
        answer:"C) required",
        options:[
            "A) placeholder",
            "B) validate",
            "C) required",
            "D) formvalidate"

        ]

    }

   
]

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


