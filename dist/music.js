const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'River',
            artist: 'Trioduct',
            url: '/downloads/01River.mp3',
            cover: '01River.png',
        }
    ]
});