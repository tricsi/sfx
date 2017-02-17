"use strict";

let gulp = require("gulp"),
    zip = require("gulp-zip"),
    size = require("gulp-size"),
    postcss = require("gulp-postcss"),
    rename = require("gulp-rename"),
    server = require("gulp-express"),
    concat = require("gulp-concat"),
    uglifyjs = require("uglify-js-harmony"),
    minifier = require("gulp-uglify/minifier"),
    sourcemaps = require("gulp-sourcemaps"),
    pump = require("pump"),
    del = require("del");

gulp.task("clean", function () {
    return del(["dist/*"]);
});

gulp.task("copy", ["clean"], function () {
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("postcss", ["clean"], function () {
    return gulp.src("src/style.pcss")
        .pipe(sourcemaps.init())
        .pipe(postcss())
        .pipe(rename({extname:".css"}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

gulp.task("uglify", ["clean"], function (cb) {
    pump([
        gulp.src(["src/js/**/*.js", "src/script.js"]),
        sourcemaps.init(),
        concat("script.js"),
        minifier({}, uglifyjs),
        sourcemaps.write("."),
        gulp.dest("dist")
    ], cb);
});

gulp.task("zip", ["clean", "postcss", "uglify", "copy"], function () {
    return gulp.src(["dist/index.html", "dist/script.js", "dist/style.css"])
        .pipe(zip("dist.zip"))
        .pipe(size({ title: "Build", pretty: false }))
        .pipe(gulp.dest("."));
});

gulp.task("server", ["default"], function () {
    server.stop();
    server.run(["index.js"]);
});

gulp.task("watch", ["server"], function () {
    gulp.watch("src/**/*.*", ["server"]);
});

gulp.task("default", ["clean", "postcss", "uglify", "copy", "zip"]);