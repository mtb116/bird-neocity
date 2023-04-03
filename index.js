window.onload = function () {


    fetch('./userData.json')
        .then((reponse) => reponse.json())
        .then((json) => {
            
          document.querySelector("#profileImage").setAttribute("src", json.profileImage.path)

          document.getElementById("name").innerHTML = json.about.name
          document.getElementById("blurb").innerHTML = json.about.blurb
          
          json.socials.forEach(social => {
            const btn = document.createElement("button")
            let textNode = document.createTextNode(social.siteName)

            btn.setAttribute("type", "button")
            btn.setAttribute("onclick", "location.href='" + social.siteUrl + "';")
            btn.setAttribute("value", "Go to " + social.siteName)
            btn.appendChild(textNode)

            document.getElementById("socials").appendChild(btn)
          });

          const mailList = document.querySelector("#mailList form")
          if(mailList !== null) {
            mailList.setAttribute("action", json.mailList)
          }
          
            
         })

 };