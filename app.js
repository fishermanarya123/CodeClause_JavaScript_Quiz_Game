const  questions =[
    {
      'que':"What is the full form of html?",
      'a':"Hyper Text Markup Language",
      'b':"Hyper Text Marginal Language",
      'c':"High Talent Marks Language",
      'd':"Hyper Talent Marks Language",
      'correct':"a"
    },
    {
      'que':"What does CSS stands for?",
      'a':"Hyper Text Markup Language",
      'b':"Cascading Style Sheet",
      'c':"Jason Object Notation",
      'd':"Hyper Talent Marks Language",
      'correct':"b"
    } ,
    {
      'que':"How do you call a function named 'myfunction'",
      'a':"call function myfunction()",
      'b':"myfunciton()",
      'c':"call myfunction()",
      'd':"none",
      'correct':"b"
  },
  {
    'que':"Which choice is not a value of the type attribute of the <input> element?",
    'a':"Range",
    'b':"address ",
    'c':"date",
    'd':"password",
    'correct':"b"
  },
  {
    'que':"The new _____ element is supposed to represent some form of extra details, such as a tooltip or revealed region that may be shown to a user.",
    'a':" progress",
    'b':"meter",
    'c':"details",
    'd':"menu",
    'correct':"c"
  },
  {
    'que':"Which of the following allows the sandboxed iframe to run scripts from the same domain?",
    'a':"allow-same-origin",
    'b':"allow-forms",
    'c':"allow-scripts",
    'd':"allow-pointer-lock",
    'correct':"c"
  },
  {
    'que':"Which of the following is not a HTML5 added form element?",
    'a':"<datalist>",
    'b':"<keygen>",
    'c':"<output>",
    'd':"<password>",
    'correct':"d"
  },
  {
    'que':"Which element specifies a list of pre-defined options for an input element?  ",
    'a':"<datalist>",
    'b':"<keygen>",
    'c':"<output>",
    'd':"<password>",
    'correct':"a"
  },
  {
    'que':" Which of the following defines a group of related options in a drop-down list?",
    'a':"<form>",
    'b':"<optgroup>",
    'c':"<output>",
    'd':"<option>",
    'correct':"b"
  }

  ];
let index=0;
let lindex=0;
let total=questions.length;
let correct=0;
let incorrect=0;
const quesBox=document.getElementById("quesbox");
const optionInputs=document.querySelectorAll('.options');
const loadnextquestion = () => {
  if(index==total)
  {
   endQuiz();
  }
  if(index==total-1)
  {
    document.getElementById("nxt").innerText="Submit"
    lindex=1;
  }
 
  reset();
  const data = questions[index];
  
  quesBox.innerText = data.que;
   optionInputs[0].nextElementSibling.innerText=data.a;
   optionInputs[1].nextElementSibling.innerText=data.b;
   optionInputs[2].nextElementSibling.innerText=data.c;
   optionInputs[3].nextElementSibling.innerText=data.d;
  
}
const submitQuiz = () =>{
  const data=questions[index];
  const ans=getAnswer();
  if(ans===data.correct){
  correct++;
  }
  else{
  incorrect++;
  }
  index++;
  loadnextquestion();
  return;
}

const getAnswer =() =>{
  let answer;
  optionInputs.forEach(
    (input)=>{
        if(input.checked){
          answer= input.value;
        
          }
        
        
    }
  )
  return answer;
}
const reset= ()=>{
  optionInputs.forEach(
    (input)=>{
      input.checked=false;
    }
  )
}
const endQuiz = ()=>{
  document.getElementById("box").innerHTML=`
  <h3>THANK YOU FOR PLAYING THE QUIZ.</h3>
  <h2>${correct} out of ${total}answers are correct.
  
  `

}
const loadpreviousquestion =()=>{
  
  if(index==0)
  {
   alert("this is the first question.");
  }
 else{
  if(lindex==1)
  {
    document.getElementById("nxt").innerText="Next"
  }
  index--;
  const data = questions[index];
  
  quesBox.innerText = data.que;
   optionInputs[0].nextElementSibling.innerText=data.a;
   optionInputs[1].nextElementSibling.innerText=data.b;
   optionInputs[2].nextElementSibling.innerText=data.c;
   optionInputs[3].nextElementSibling.innerText=data.d;
 }
}
const replay= ()=>{
  index=0;
  correct=0;
  loadnextquestion();
  const Start=document.getElementById("start");
  Start.style.display="none";
  const Box=document.getElementById("box");
  Box.style.display="flex";
}
const quit=()=>{
  const Box=document.getElementById("box");
  Box.style.display="none";
  const Start=document.getElementById("start");
  Start.style.display="block";
}

const start=()=>{
  reset();
  const Box=document.getElementById("box");
  Box.style.display="block";
  loadnextquestion();
  const Start=document.getElementById("start");
  Start.style.display="none";
}


  
  
  
