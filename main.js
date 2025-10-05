let myText1=document.getElementById("MainText1")
let myText2=document.getElementById("MainText2")
output1=0
output2=0
function addOneHome(){
    output1+=1
    myText1.textContent=output1
}
function addTwoHome(){
    output1+=2
    myText1.textContent=output1
}
function addThreeHome(){
    output1+=3
    myText1.textContent=output1
}
function addOneGuest(){
    output2+=1
    myText2.textContent=output2
}
function addTwoGuest(){
    output2+=2
    myText2.textContent=output2
}
function addThreeGuest(){
    output2+=3
    myText2.textContent=output2
}
