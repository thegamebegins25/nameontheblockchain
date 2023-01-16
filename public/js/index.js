const inputVal = document.getElementById("nameinput");

const unallowedChars = ["{", "}", ":", ","];
inputVal.addEventListener("keypress", event => {
  if (unallowedChars.includes(event.key)) {
    event.preventDefault();
  }
});

function eternalize() {
    console.log(inputVal.value);
    if(inputVal.value) {
      let link = "pay.html?name=" + inputVal.value
      window.location.href = link;
      return
    }

    alert('Please enter a name.');
  }