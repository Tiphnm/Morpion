////////////////////////////////////////////////HOMEPAGE/////////////////////////////////////////
document.querySelector("#enter").addEventListener("click", function(){ 
    let playerName = document.querySelector("#Player_1_name").value;
    console.log(playerName);
    document.getElementById("Player_1_info").innerText = "X Player " + playerName + " is ready!";
    document.getElementById("Player_1_form").style.display = "none";
})

document.querySelector("#enter_2").addEventListener("click", function(){ 
    let playerName = document.querySelector("#Player_2_name").value;
    console.log(playerName);
    document.getElementById("Player_2_info").innerText = "O Player " + playerName + " is ready!";
    document.getElementById("Player_2_form").style.display = "none";
})


////////////////////////////////////////////////GAME/////////////////////////////////////////////
const signX = "X"
const signO = "O"
var compteur = 0 

let cellList = document.querySelectorAll(".element"); //Je mets l'ensemble de mes éléments dans une liste 

function getArrayFromCell(){
    const cellValue = [...cellList].map(function(cell){ // je crée une copie de ma liste, qui aura la même longueur 
    return cell.innerText //je choisis ce qui va être retourner comme élément de ma liste
})
return cellValue
}

cellList.forEach(function (cellValue){ //Pour chaque élément de ma liste je lui associe une fonction clique 
    cellValue.addEventListener("click", function(){
        compteur ++ ;
        if (compteur % 2 == 1){  
        this.innerText = signX;  // j'utilise "this" pour pointer un certain élément
        }
        else{
        this.innerText = signO;  
    }
    const myList = getArrayFromCell();
    winner(myList);
    })
})

function winner(array){
    if (array[0]=="X" && array[1]=="X" && array[2]== "X"){
        alert("Player X is the winner")
    }
    else if (array[0]=="O" && array[1]=="O" && array[2]== "O"){
        alert("Player O is the winner")
    }
    else if (array[3]=="X" && array[4]=="X" && array[5]== "X"){
        alert("Player X is the winner")
    }
    else if (array[3]=="O" && array[4]=="O" && array[5]== "O"){
        alert("Player O is the winner")
    }
    else if (array[6]=="X" && array[7]=="X" && array[8]== "X"){
        alert("Player X is the winner")
    }
    else if (array[6]=="O" && array[7]=="O" && array[8]== "O"){
        alert("Player O is the winner")
    }
    else if (array[0]=="O" && array[4]=="O" && array[8]== "O"){
        alert("Player O is the winner")
    }
    else if (array[0]=="X" && array[4]=="X" && array[8]== "X"){
        alert("Player X is the winner")
    }
    else if (array[2]=="O" && array[4]=="O" && array[6]== "O"){
        alert("Player O is the winner")
    }
    else if (array[2]=="X" && array[4]=="X" && array[6]== "X"){
        alert("Player X is the winner")
    }
    else if (array[0]=="X" && array[3]=="X" && array[6]== "X"){
        alert("Player X is the winner")
    }
    else if (array[0]=="O" && array[3]=="O" && array[6]== "O"){
        alert("Player X is the winner")
    }
    else if (array[1]=="X" && array[4]=="X" && array[7]== "X"){
        alert("Player X is the winner")
    }
    else if (array[1]=="O" && array[4]=="O" && array[7]== "O"){
        alert("Player X is the winner")
    }
    else if (array[2]=="X" && array[5]=="X" && array[8]== "X"){
        alert("Player X is the winner")
    }
    else if (array[2]=="O" && array[5]=="O" && array[8]== "O"){
        alert("Player X is the winner")
    }

//J'appelle ma fonction winner dans ma fonction click 
}


