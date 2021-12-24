function reqListener () {
    var obj = JSON.parse(this.responseText);

    const username = document.getElementById('username')
    username.textContent = obj.data.first_name + " " + obj.data.last_name;

    const bio = document.getElementById('bio')
    bio.textContent = obj.data.email;

    const avatar = document.getElementById('avatar');
    avatar.src = obj.data.avatar;
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://reqres.in/api/users/2");
oReq.send();
