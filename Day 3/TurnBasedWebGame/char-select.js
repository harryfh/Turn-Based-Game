
// THIS UPDATES THE IMAGE THAT WHICH ID WILL BE USED FOR THE CHARACHTER
// CAN BE PLAYER1 OR PLAYER2
function selectCharacter(selected_char, ai_char) {
    // Store the selected character's data in session storage (you can use local storage as well)
    sessionStorage.setItem("selected_id", selected_char);
    sessionStorage.setItem("ai_id", ai_char);
  
    // Redirect to the next page after character selection
    window.location.href = "game.html";
  }
  
  