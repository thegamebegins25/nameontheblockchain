function eternalize() {

    let inputVal = document.getElementById("nameinput").value;

    let link = "pay.html?name=" + inputVal
    window.location.href = link;
  }