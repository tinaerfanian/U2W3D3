// localStorage 
function displaySavedName() {
    const savedName = localStorage.getItem("username");
    const savedNameDisplay = document.getElementById("saved-name");
    if (savedName) {
      savedNameDisplay.innerHTML = `Nome salvato: <strong>${savedName}</strong>`;
    } else {
      savedNameDisplay.innerHTML = "Nessun nome salvato.";
    }
  }
  
  // salvare il nome in local storage
  function saveName() {
    const name = document.getElementById("username").value;
    if (name) {
      localStorage.setItem("username", name);
      displaySavedName();
      alert("Nome salvato con successo!");
    } else {
      alert("Per favore, inserisci un nome.");
    }
  }
  
  // elliminare il nome da local storage
  function removeName() {
    localStorage.removeItem("username");
    displaySavedName();
    alert("Nome rimosso con successo!");
  }
  
  // dimostrare il nome salvato
  window.onload = displaySavedName;
  