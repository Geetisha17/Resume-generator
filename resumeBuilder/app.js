// alert('hello');

function addNewField1()
{
    let newNode =document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');


    let weAddButton = document.getElementById("weAddButton");

    let workEx = document.getElementById("workEx");

    workEx.insertBefore(newNode,weAddButton);
}

function addNewField2()
{
    let newNode =document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');


    let aqAddButton = document.getElementById("aqAddButton");

    let acquali = document.getElementById("acquali");

    acquali.insertBefore(newNode,aqAddButton);
}

//generating CV

function generateCV(){
 //   console.log("hello");
 let nameField = document.getElementById('nameField').value;
 let nameT1 = document.getElementById('nameT1');

 nameT1.innerHTML=nameField;

 document.getElementById('nameT2').innerHTML=nameField;

 //contact details
 document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

 //address details
 document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

 document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;


 //links
 document.getElementById('leetT').innerHTML=document.getElementById('leetField').value;

 document.getElementById('gitT').innerHTML=document.getElementById('gitField').value;

 document.getElementById('linkT').innerHTML=document.getElementById('LinkedField').value;

 //objective 
 document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

 //work experience
let wes = document.getElementsByClassName('weField');

let str1=''

for(let e of wes)
{
    str1 = str1 +`<li> ${e.value}</li>`
}
document.getElementById('weT').innerHTML=str1;

let aqs = document.getElementsByClassName('eqField');

let str2='';

for(let i of aqs)
{
    str2 = str2 + `<li> ${i.value} </li>`
}
document.getElementById('aqT').innerHTML=str2;

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}

function printCV()
{
    window.print();
}