function login(){
  
  var user_name= document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location= "glitter_room.html";
}