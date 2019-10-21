//for characters tab

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

    //for locations tab
    const url2 = 'https://rickandmortyapi.com/api/location'
const h5 = document.querySelector('h5')
fetch(url2)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res.results)
        let locations = res.results
        for (i = 0; i < locations.length; i++) {
            console.log(locations[i])
            let p =document.createElement('p')
            h5.innerText=locations[i].name
            h5.appendChild(p)
        }
    })
    .catch(err => {
        console.log('uh oh', err)
    })

    const url3 = 'https://rickandmortyapi.com/api/episode'
const h6 = document.querySelector('h6')
fetch(url3)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res.results)
        let episodes = res.results
        for (i = 0; i < episodes.length; i++) {
            console.log(episodes[i])
            let p =document.createElement('p')
            h6.innerText=episodes[i].name
            h6.appendChild(p)
        }
    })
    .catch(err => {
        console.log('uh oh', err)
    })

    //code for the UI tabs
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












