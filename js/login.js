var login = document.getElementById("submit");
login.onclick = function(){
    var username = document.getElementById("id").value;
    var password = document.getElementById("pw").value;
    if(username == "id" && password == "pw"){
        var link = "/html/form2.html"
        window.location.href(link); // 이거 이제 됨. // form 안에 action에 위 link 주소를 넣어야 값을 넘겨주기 때문에 명시해야함.
        // window.open(link); // 새 창으로 떠서 이동은 됨.
    } else {
        alert("그대로 쓰세요.");
    }
}