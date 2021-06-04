nameArray=[];
function submit()
{
    var name1=document.getElementById("student1").Value;

    var name2=document.getElementById("student2").Value;

    var name3=document.getElementById("student3").Value;

    var name4=document.getElementById("student4").Value;
    
    nameArray.push(name1);
    
    nameArray.push(name2);
    
    nameArray.push(name3);
    
    nameArray.push(name4);
    console.log(nameArray);
    
    document.getElementById("display").innerHTML=nameArray;
    document.getElementById(submitbutton).style.display="none";
    document.getElementById(sortbutton).style.display="inline-block";
}

function sort(){
    nameArray.sort();
    console.log(nameArray);
    document.getElementById(display);
}