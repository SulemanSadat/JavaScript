var names = new Array();

    

function addName() {
    var input1 = document.getElementById("name").value;
    if(input1 == " " || input1 == ""){
        alert("Spaces Or Empty box are not allowed!");
        showName();
        return false;
    }
     if (input1 == names[0]){
            alert("Deplicates are not allowed");
            return false;
        }
    
    names.push(input1);
    document.getElementById("name").value = "";
    document.getElementById("name").focus();
    
    showName();
}
function showName(){
    
    document.getElementById("list").innerHTML= "";
    
    for(y in names){ 
        
        document.getElementById("list").innerHTML += (parseInt(y)+1)+ " - "+ names[y] + "<br>";
        
    }

}
function checkEnter(){
    if(event.keyCode == 13){
            addName();
    }
}
function removeLastName(){
  	var check = document.getElementById("list").innerHTML;
    if(check == ""){
	alert("Not Found!");
	}
    names.pop();
    showName();
}
function sortName(){
	var check = document.getElementById("list").innerHTML;
	if(check == ""){
	alert("Not Found!");
	}
    
    names.sort();
    showName();
}
function unsortName(){
	var check = document.getElementById("list").innerHTML;
	if(check == ""){
	alert("Not Found!");
	}
    
    names.reverse();
    showName();
}
function removeName(){
    
    var index = parseInt(document.getElementById("index1").value);
    
    if(index <= 0){
        document.getElementById("index1").value = "";
        alert("Not Found!")
        return false;
        
    }
    else if(index <= names.length){
    names.splice(index-1 , 1);
    showName();
    }
    
    else{
         document.getElementById("index1").value = "";
         alert("incorrect Value!🤔"); 
         return false;
     }

}