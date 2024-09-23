const express = require('express');
const app = express();
const path = require('path');
 const port = 3000
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
 
// Serve static files from the 'public' directory
app.use("/css",express.static(__dirname + "/css"));
app.use("/images",express.static(__dirname + "/images"));
app.use("/js",express.static(__dirname + "/js"));
 
// Route for rendering the index.ejs and all other related templates
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/facebook-to-mp4', (req, res) => {
    res.render('download facebook to mp4');
});
app.get('/facebook-to-mp3', (req, res) => {
    res.render('download facebook to mp3');
});
app.get('/facebook-reels-downloader', (req, res) => {
    res.render('facebook reels downloader');
});
app.get('/facebook-story-downloader', (req, res) => {
    res.render('facebook story downloader');
});
app.get('/blog', (req, res) => {
    res.render('blog');
});
app.get('/fbdown-for-downloading-facebook-reels', (req, res) => {
    res.render('fbdown-for-downloading-facebook-reels')
});
app.get('/download-story-videos-from-facebook', (req, res) => {
    res.render('download-story-videos-from-facebook');
});
app.get('/6-Best-facebook-hacks-in-2024', (req, res) => {
    res.render('6-Best-facebook-hacks-in-2024');
});
app.get('/terms-and-conditions', (req, res) => {
    res.render('terms and conditions');
});
app.get('/privacy-policy', (req, res) => {
    res.render('privacy policy');
});
app.get('/about-us', (req, res) => {
    res.render('about us');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
