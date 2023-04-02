window.onload = function () {

    fetch('./userData.json')
        .then((reponse) => reponse.json())
        .then((json) => {
            
          document.querySelector("#profileImage").setAttribute("src", json.profileImage.path)
          
          document.querySelector("#emailSignup").setAttribute("src", json.emailSignup.src)
            
         })

 };