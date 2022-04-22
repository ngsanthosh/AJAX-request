window.onload = function () {
  for (let i = 0; i < 8; i++) {
    var chessBody = document.getElementById("chessbody");
    var tr = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
      var td = document.createElement("td");
      if ((i + j) % 2 == 0) {
        td.setAttribute("class", "chesswhitebox");
      } else {
        td.setAttribute("class", "chessblackbox");
      }
      tr.appendChild(td);
    }
    chessBody.appendChild(tr);
  }
};
