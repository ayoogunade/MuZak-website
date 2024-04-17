function searchAlbums() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var albums = document.getElementById('albumList').getElementsByTagName('a');

    for (var i = 0; i < albums.length; i++) {
        var album = albums[i].textContent.toLowerCase();
        if (album.indexOf(input) > -1) {
            albums[i].style.display = '';
        } else {
            albums[i].style.display = 'none';
        }
    }
}
