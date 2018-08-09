const gulp = require('gulp');
//const imagemin = require('gulp-imagemin');
//const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const paths = {
    'bower': './bower_components',
    'assets': './assets',
    'public': './public'
};

// Optimize Images
/*gulp.task('imageMin', () =>
gulp.src('src/img/!*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
);*/

// Compile Sass
gulp.task('sass', function(){
    gulp.src([
        paths.bower + '/bootstrap/dist/css/bootstrap.css',
        paths.bower + '/owl.carousel/dist/assets/owl.carousel.css',
        paths.bower + '/owl.carousel/dist/assets/owl.theme.default.css',
        paths.bower + '/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
        paths.assets + '/styles/*.scss'
    ])
    //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest( paths.public + '/css'));
});

// Scripts
gulp.task('scripts', function(){
    gulp.src([
        paths.bower + '/jquery/dist/jquery.js',
        paths.bower + '/bootstrap/dist/js/bootstrap.bundle.js',
        paths.bower + '/owl.carousel/dist/owl.carousel.js',
        paths.bower + '/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
        paths.assets + '/scripts/*.js'
    ])
        .pipe(concat('app.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest( paths.public + '/js'));

    gulp.src( paths.bower + '/modernizer/modernizr.js')
        .pipe(gulp.dest( paths.public + '/js'));
});

// Run All command
gulp.task('default',['sass', 'scripts']);

// Watch for file changes
gulp.task('watch', function(){
    gulp.watch( paths.assets + '/scripts/*.js', ['scripts']);
    //gulp.watch('src/images/*', ['imageMin']);
    gulp.watch( paths.assets + '/styles/*.scss', ['sass']);
});