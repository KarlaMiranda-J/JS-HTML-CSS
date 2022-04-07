/* alert("Hello World!!!"); */

let taReview=document.getElementById('taReview');

let radLT=document.getElementById('radLT');
let inputLT=document.getElementById('inputLT');
let allRad=document.getElementById('allRad');
let radRT=document.getElementById('radRT');
let inputRT=document.getElementById('inputRT');
let radLB=document.getElementById('radLB');
let inputLB=document.getElementById('inputLB');
let radRB=document.getElementById('radRB');
let inputRB=document.getElementById('inputRB');

let widthBorder=document.getElementById('widthBorder');
let widthB=document.getElementById('widthB');
let inputWidth=document.getElementById('inputWidth');
let resButton=document.getElementById('resButton');

let borderSolid=document.getElementById('borderSolid');
let borderDotted=document.getElementById('borderDotted');
let borderDashed=document.getElementById('borderDashed');
let borderDouble=document.getElementById('borderDouble');
let borderGroove=document.getElementById('borderGroove');
let borderRidge=document.getElementById('borderRidge');
let borderInset=document.getElementById('borderInset');
let borderOutset=document.getElementById('borderOutset');
let borderHidden=document.getElementById('borderHidden');
let borderNone=document.getElementById('borderNone');

let borderColor=document.getElementById('borderColor');
let alphaBorder=document.getElementById('alphaBorder');
let resButCol=document.getElementById('resButCol');

let borderAll=document.getElementById('borderAll');
let borderTop=document.getElementById('borderTop');
let borderRight=document.getElementById('borderRight');
let borderBottom=document.getElementById('borderBottom');
let borderLeft=document.getElementById('borderLeft');

radLT.oninput=function(e){
    inputLT.value=radLT.value;

    if(allRad.checked){
        taReview.style.borderRadius=radLT.value + 'px';
        inputRT.value=radLT.value;
        inputLB.value=radLT.value;
        inputRB.value=radLT.value;
        radRT.value=radLT.value;
        radLB.value=radLT.value;
        radRB.value=radLT.value;
    }else{
        taReview.style.borderTopLeftRadius=radLT.value+'px';
    }      
};

allRad.oninput=function(e){
    if(!allRad.checked){
        taReview.style.borderRadius= radLT.value + 'px 0px 0px 0px';
        inputRT.value=0;
        inputLB.value=0;
        inputRB.value=0;
        radRT.value=0;
        radLB.value=0;
        radRB.value=0;
    }else{
        taReview.style.borderRadius=radLT.value + 'px';
        inputRT.value=radLT.value;
        inputLB.value=radLT.value;
        inputRB.value=radLT.value;
        radRT.value=radLT.value;
        radLB.value=radLT.value;
        radRB.value=radLT.value;
    }
};

radRT.oninput=function(e){
    inputRT.value=radRT.value;
    taReview.style.borderTopRightRadius=radRT.value+'px';    
};

radLB.oninput=function(e){
    inputLB.value=radLB.value;
    taReview.style.borderBottomLeftRadius=radLB.value+'px';    
};

radRB.oninput=function(e){
    inputRB.value=radRB.value;
    taReview.style.borderBottomRightRadius=radRB.value+'px';    
};

widthBorder.oninput=function(e){
    inputWidth.value=widthBorder.value;
    taReview.style.borderWidth=widthBorder.value+'px';    
};

resButton.onclick=function(e){
    taReview.style.borderWidth='1px'; 
    widthBorder.value=1;
    inputWidth.value=widthBorder.value;   
};

borderSolid.onclick=function(e){
    taReview.style.borderStyle='solid'; 
};

borderDotted.onclick=function(e){
    taReview.style.borderStyle='dotted'; 
};

borderDashed.onclick=function(e){
    taReview.style.borderStyle='dashed'; 
};

borderDouble.onclick=function(e){
    taReview.style.borderStyle='double'; 
};

borderGroove.onclick=function(e){
    taReview.style.borderStyle='groove'; 
};

borderRidge.onclick=function(e){
    taReview.style.borderStyle='ridge'; 
};

borderInset.onclick=function(e){
    taReview.style.borderStyle='inset'; 
};

borderOutset.onclick=function(e){
    taReview.style.borderStyle='outset'; 
};

borderHidden.onclick=function(e){
    taReview.style.borderStyle='hidden'; 
};

borderNone.onclick=function(e){
    taReview.style.borderStyle='none'; 
};

borderColor.oninput = function(e){
    taReview.style.borderColor = borderColor.value; 
};

alphaBorder.oninput=function(e){
    inputAlpha.value=alphaBorder.value;
    taReview.style.borderColor = (borderColor.value+(alphaBorder.value.toString(16))).toUpperCase();
};

resButCol.onclick=function(e){
    alphaBorder.value=100;
    inputAlpha.value=100;
    taReview.style.borderColor = borderColor.value; 
};

borderAll.onclick = function(e){
    taReview.style.borderWidth=widthBorder.value+'px';  
};

borderTop.onclick = function(e){
    taReview.style.borderWidth=widthBorder.value+'px 0px 0px 0px'; 
};

borderRight.onclick = function(e){
    taReview.style.borderWidth='0px '+widthBorder.value+'px 0px 0px'; 
};

borderBottom.onclick = function(e){
    taReview.style.borderWidth='0px 0px '+widthBorder.value+'px 0px';     
};
 
borderLeft.onclick = function(e){
    taReview.style.borderWidth='0px 0px 0px '+widthBorder.value+'px'; 
};