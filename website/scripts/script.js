

var body = document.getElementsByTagName("BODY")[0];


//Zentropa

// Get the modal
var zentropa_modal = document.getElementById('zentropa_modal');

// Get the button that opens the modal
var zentropa_btn = document.getElementById("zentropa_act_modal");

// When the user clicks the button, open the modal
zentropa_btn.onclick = function() {
  zentropa_modal.style.display = "block";
}

//Østfyn

var ostfyn_modal = document.getElementById('ostfyn_modal');

var ostfyn_btn = document.getElementById("ostfyn_act_modal");

ostfyn_btn.onclick = function() {
  ostfyn_modal.style.display = "block";
}

//Den fynske spilfabrik

var spilfabrik_modal = document.getElementById('spilfabrik_modal');

var spilfabrik_btn = document.getElementById('spilfabrik_act_modal');

spilfabrik_btn.onclick = function() {
  spilfabrik_modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == zentropa_modal) {
    zentropa_modal.style.display = "none";
  }
  else if (event.target == ostfyn_modal) {
    ostfyn_modal.style.display = "none";
  }
  else if (event.target == spilfabrik_modal) {
    spilfabrik_modal.style.display = "none";
  }
}
