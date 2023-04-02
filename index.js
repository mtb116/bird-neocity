window.onload = function () {

    const h1 = document.createElement("h1")

    fetch('./userData.json')
        .then((reponse) => reponse.json())
        .then((json) => {
            
          document.querySelector("#profileImage").setAttribute("src", json.profileImage.path)

          document.getElementById("name").innerHTML = json.about.name
          document.getElementById("blurb").innerHTML = json.about.blurb
          
          document.querySelector("#emailSignup").setAttribute("src", json.emailSignup.src)
            
         })

 };