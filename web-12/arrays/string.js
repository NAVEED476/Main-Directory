
matrix=["safer",
"amjad",
"babol",
"aaron",
"songs"];
var m=5;
var n=5;

var str="";
var count=0;
//horizontal 
//============================================================================================================
for(var r=0;r<n;r++){
str="";
for(var c=0;c<m;c++)
{
str+=matrix[r][c];
}

 console.log(str);
if(str.includes("saba")){
count=count+strcount(str,"saba");    
}

}

//vertical
//==============================================================================================================
str="";
for(var c=0;c<m;c++){
str="";
for(var r=0;r<n;r++)
{
str+=matrix[r][c];
}
//console.log(str);
if(str.includes("saba")){
count=count+strcount(str,"saba");

}
}
// console.log(count);
// all '/' diagonals
//=================================================================================================================

var a=0;
var b=0;
for(var i=0;i<m+n-1;i++)
{
var a1=a;
var b1=b;
str="";

while(a1>=0 &&b1<m)
{
str+=matrix[a1][b1];
a1--;
b1++;
}
// console.log(str);
if(str.includes("saba"))
{
//console.log("present");
count=count+strcount(str,"saba");
}

if(a===n-1)
b++;
else
a++;
}

//all '\' diagonals
//==========================================================================================================================
var e=0;
var f=m-1;

for(var i=0;i<m+n-1;i++)
{
var e1=e;
var f1=f;
str="";

while(e1<n &&f1<m)
{
  str+=matrix[e1][f1];
   e1++;
   f1++;
}
/// console.log(str);
if(str.includes("saba")){
//console.log("present");
count=count+strcount(str,"saba");
}
   

//console.log(ar1);
if(f!=0)
f--;
else
e++;

}
// var go="sabalolsabalol saba"
console.log(count);


//console.log(count-1);*/

function strcount(S,s){
var d=S;
// console.log(d.includes(s))
var cc=0;



while(d.includes(s))
{
 d=de(d,s);
cc++;
 //d.replace(d,"&&&&**^");
 //console.log(d);
}

return cc;
}
function de(S,s){
var str1="";
var onlyonce=0;
if(S.includes(s)){
for(var i=0;i<S.length;i++)
{
if(S[i]===s[0] && onlyonce===0)
{
var check=0;
for(var j=0;j<s.length;j++)
{
  if(S[i+j]!=s[j])
    check=1;
}
if(check===0)
{
  i+=s.length+i-1;
  onlyonce++;
}
}
else
str1+=S[i];
}

}
return str1;
}



 