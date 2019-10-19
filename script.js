const url = 'https://rickandmortyapi.com/api/'
fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log('it works!', res)
    })
    .catch(err => {
        console.log('uh oh', err)
    })












    
// const tab = document.getElementsByClassName('tabLinks');
// for (i = 0; i < tabLinks.length; i++) {
//     tab[i].addEventListeners(click, handleClickEvents);
//     function handleClickEvents(e) {
//         console.log('clicked');
//         console.log(e);
// }

// }



// function openTab (e, characters) {
//     var i, tabContent, tabLinks;
//     tabContent = document.getElementsByClassName ('tabContent');
//     for (i = 0; i < tabContent.length; i++){
//         tabContent[i].style.display = 'none';
//     }

// tablinks = document.getElementsByClassName('tablinks');
// for (i = 0; i <  tabLinks.length; i++) {
//     tabLinks[i].className = tabLinks[i].className.replace('active', " ");
// }

// document.getElementById(characters).style.display = 'block';
// e.currentTarget.className += 'active';
// }
