window.onload = function () {
  getUsers();
};
function submitUser() {
  var user = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    place: document.getElementById("place").value,
  };
  console.log(user);
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://dwin-ums.herokuapp.com/user");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(user));
  xhttp.onload = function () {
    if (xhttp.status == 200) {
      console.log("user data successfully posted");
      getUsers();
    }
  };
}
function getUsers() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var users = JSON.parse(this.responseText);
    var userBody = document.getElementById("userbody");
    userBody.innerHTML = null;
    users.forEach((user) => {
      var tr = document.createElement("tr");
      var firstName = document.createElement("td");
      var lastName = document.createElement("td");
      var place = document.createElement("td");
      var deleteCell = document.createElement("td");
      var deleteButton = document.createElement("button");
      firstName.innerText = user.firstname;
      lastName.innerText = user.lastname;
      place.innerText = user.place;
      deleteButton.value = user._id;
      deleteButton.innerText="\u274C";
      deleteButton.onclick = deleteUser.call(deleteButton.value);
      tr.appendChild(firstName);
      tr.appendChild(lastName);
      tr.appendChild(place);
      deleteCell.appendChild(deleteButton);
      tr.appendChild(deleteCell);
      userBody.appendChild(tr);
    });
  };
  xhttp.open("GET", "http://dwin-ums.herokuapp.com/user", true);
  xhttp.send();
}
function deleteUser(id){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (xhttp.status == 200) {
      console.log("user deleted successfully");
      getUsers();
    }
  };
  xhttp.open("DELETE", `http://dwin-ums.herokuapp.com/user/${id}`);
  xhttp.send();
}
// var id="626268d4c2abad001851a893";
// deleteUser("626268d4c2abad001851a893");