function siteInfo(){
    const url = ('https://wordpress.org')
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}