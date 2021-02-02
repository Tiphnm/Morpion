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



