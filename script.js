const url = 'https://rickandmortyapi.com/api/character'
const h4 = document.querySelector('h4')
fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res.results)
        let characters = res.results
        for (i = 0; i < characters.length; i++) {
            console.log(characters[i])
            let p =document.createElement('p')
            h4.innerText=characters[i].name
            h4.appendChild(p)
        }
    })
    .catch(err => {
        console.log('uh oh', err)
    })


    
    function openTab(evt, tabName) {
        evt.preventDefault()
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
      }












