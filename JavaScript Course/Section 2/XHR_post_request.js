let xhr = new XMLHttpRequest();

let json = JSON.stringify({
  name: "John",
  surname: "Smith"
});

xhr.open("POST", '/submit')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(json);


<form id="temp">
  <input type="text" value = "john" />
  <input type="text" value = "lever"/>

</form>

let formData = new FormData(document.forms.temp)
formData.append("ali","12")
let xhr2 = new XMLHttpRequest()

xhr2.open('POST',URL('https://www.example.com'),true)

xhr2.send(formData)


xhr2.onload(() => {console.log(xhr2.response)})

