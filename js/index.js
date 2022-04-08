function eternalize() {

    let inputVal = document.getElementById("nameinput").value;
    console.log(inputVal);
    if(inputVal) {
      let link = "pay.html?name=" + inputVal
      window.location.href = link;
      return
    }

    alert('Please enter a name.');
  }