const song = new Song(1.3).add(
    //sax
    "1,4," +
    "1,4," +
    "1,4," +
    "2,4,8b4,8e5,8g5,8a5," +
    "8bb5,8b5,8bb5,8a5,4e5,4b4,4d5," +
    "2e5,4,16gb5,16g5,16gb5,16e5,4d5," +
    "2e5,4,16d5,16e5,16d5,16b4,4a4," +
    "2b4,4,8b4,8e5,8g5,8a5," +
    "8bb5,8b5,8bb5,8a5,4e5,4b4,4d5," +
    "2e5,4,16d5,16e5,16d5,16b4,4a4," +
    "2b4,4,16gb5,16g5,16gb5,16e5,4d5," +
    "1e5,4," +
    "8e6,4g6,8e6,4c6,8a5,8b5,8c6,8db6," +
    "8d6,4gb6,8d6,4b5,8g5,8a5,8bb5,8b5," +
    "8c6,4e6,8c6,4a5,8gb5,8g5,8a5,8bb5," +
    "8b5,8bb5,8b5,8c6,4d6,8d6,8db6,8d6,8eb6," +
    "8e6,4g6,8e6,4c6,8a5,8b5,8c6,8db6," +
    "8d6,4gb6,8d6,4b5,8g5,8a5,8bb5,8b5," +
    "8c6,4e6,8c6,4a5,8gb5,8a5,8d6,8c6," +
    "2b5,4,8b4,8e5,8g5,8a5," +
    "8bb5,8b5,8bb5,8a5,4e5,4b4,4d5," +
    "2e5,4,16gb5,16g5,16gb5,16e5,4d5," +
    "2e5,4,16d5,16e5,16d5,16b4,4a4," +
    "2b4,4,8b4,8e5,8g5,8a5," +
    "8bb5,8b5,8bb5,8a5,4e5,4b4,4d5," +
    "2e5,4,16d5,16e5,16d5,16b4,4a4," +
    "2b4,4,16gb5,16g5,16gb5,16e5,4d5," +
    "1e5,4",
    "square", [.8, .5],
    .2
).add(
    //piano
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8c3,4g3b3e4,8e3,4e3,4gb3,4g3b3e4," +
    "8b2,4ab3a3d4,8d3,4d3,4e3,4gb3a3d4," +
    "8a2,4e3g3c4,8c3,4c3,4d3,4e3g3c4," +
    "8g2,4gb3b3d4,8g2,4g2,4b2,4gb3a3d4," +
    "8c3,4g3c4e4,8e3,4e3,4gb3,4g3c4e4," +
    "8b2,4ab3a3d4,8d3,4d3,4e3,4gb3a3d4," +
    "8a2,4e3g3c4,8c3,4c3,4d3,4e3g3c4," +
    "8gb2,4gb3a3e4,8gb2,4gb3a3e4,4b2,4gb3a3db4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4," +
    "8e2,4g3b3e4,8e2,4g3b3e4,4b3,4ab3a3d4",
    "sine", [.8, .5],
    .2
).add(
    //bass
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "4c2,1," +
    "4b1,1," +
    "4a1,1," +
    "4b1,2,4g1,4b1," +
    "4c2,1," +
    "4b1,1," +
    "4a1,1," +
    "4gb1,2,4b1,4," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1," +
    "2e2,4e2,4b2,4b1",
    "triangle", [.8, .5],
    .2
);

document.getElementById("play").addEventListener("click", function() {
    song.play();
}, false);
document.getElementById("stop").addEventListener("click", function() {
    song.stop();
}, false);
document.getElementById("master").addEventListener("change", function() {
    song.master.gain.value = parseInt(this.value) / 100;
}, false);
document.getElementById("mixer0").addEventListener("change", function() {
    song.mixer[0].gain.value = parseInt(this.value) / 100;
}, false);
document.getElementById("mixer1").addEventListener("change", function() {
    song.mixer[1].gain.value = parseInt(this.value) / 100;
}, false);
document.getElementById("mixer2").addEventListener("change", function() {
    song.mixer[2].gain.value = parseInt(this.value) / 100;
}, false);