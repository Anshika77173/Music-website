const music = new Audio('music/song3.mp3');

const songs = [
    {
        id: "1",
        songName: `on the way<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster: "poster/image1.jpg",
    },
    {
        id: "2",
        songName: `On My Way1<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster: "poster/image2.jpg",
    },
    {
        id:"3",
        songName:`On My Way 2<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster:"poster/image3.jpg",
    },
    {
        id:"4",
        songName:`On My Way 3<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster:"poster/image4.jpg",
    },
    {
        id:"5",
        songName:`On My Way 4<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster:"poster/image5.jpg",
    },
    {
        id:"6",
        songName:`On My Way 5<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster:"poster/image6.jpg",
    },
    {
        id:"7",
        songName:`On My Way 5<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster:"poster/image7.jpg",
    },
    {
        id:"8",
        songName:`On My Way 5<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster:"poster/image8.jpg",
    },
    {
        id:"9",
        songName:`On My Way 5<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster:"poster/image9.jpg",
    },
    {
        id:"10",
        songName:`On My Way 5<br>
        <div class ="subtitle">Alan Walker</div>`,
        poster:"poster/image10.jpg",
    },


];



Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    if (i < songs.length) {
        e.getElementsByTagName('img')[0].src = songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    }
});

let masterplay = document.getElementById('master_play');
let wave = document.getElementById('wave');

masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1'); // Pause the wave animation
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
});

music.addEventListener('pause', () => {
    wave.classList.remove('active1'); // Pause the wave animation when music is paused
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
        e.classList.add('bi-play-circle-fill');
        e.classList.remove('bi-pause-circle-fill');
    });
};

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (e1) => {
        index = e1.target.id;
        console.log("value of index: ", index);
        makeAllPlays();

        e1.target.classList.remove('bi-play-circle-fill');
        e1.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

        music.src = `music/song${index}.mp3`;
        console.log("this is the value of music: ", music.src);
        poster_master_play.src = `poster/image${index}.jpg`;

        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        songTitles.forEach((elss) => {
            let { songName } = elss;
            title.innerHTML = songName;
        });
    });
});

let currentStart = document.getElementById('currentstart');
let currentEnd = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot');

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    } else if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    } else if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol.value / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click' ,() =>{
    index -=1;
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `music/song${index}.mp3`;
    console.log("this is the value of music: ", music.src);
    poster_master_play.src = `poster/image${index}.jpg`;

    music.play();
    
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach((elss) => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
});
next.addEventListener('click' ,() =>{
    index ++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index =1;
    }
    music.src = `music/song${index}.mp3`;
    console.log("this is the value of music: ", music.src);
    poster_master_play.src = `poster/image${index}.jpg`;

    music.play();
    
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach((elss) => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
});
const search = () =>{
    const searchbox = document.getElementById("searchbar").value.toUpperCase();
    const storeitems = document.getElementById("pop_song");
    const product = document.querySelectorAll(".songItem");
    const img = document.getElementsByClassName("img_play");
    const pname = document.getElementsByTagName("h5");
    for(var i=0 ;i< pname.length;i++){
        let match = product[i].getElementsByTagName('h5')[0];
        if(match){
            let textvalue = match.textContent||match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});
