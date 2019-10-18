function openTab (e, characters) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName ('tabContent');
    for (i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }

tablinks = document.getElementsByClassName('tablinks');
for (i = 0; i <  tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace('active', " ");
}

document.getElementById(characters).style.display = 'block';
e.currentTarget.className += 'active';
}