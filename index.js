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
              btn.setAttribute("id", social.siteName)
              btn.appendChild(textNode)

            document.getElementById("socials").appendChild(btn)
          });

          //verification for mastodon
          document.getElementById("mastodon").setAttribute("ref", "me")

          const mailList = document.querySelector("#mailList form")
          if(mailList !== null) {
            mailList.setAttribute("action", json.mailList)
          }
          
            
         })
         
         const neoSlider = document.getElementById("myRange")
         neoSlider.setAttribute("value", 0)
         neoSlider.addEventListener("mouseup", function() {
          console.log(this.value)
          if (this.value < 100) {
            this.value = 0
          } else if (this.value >= 100) {
            alert("lady function")
          }
         })
 };