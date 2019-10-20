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

    












