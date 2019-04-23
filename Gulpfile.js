gulp.task('modules', function() {
    sources = [
      './node_modules/prismjs/prism.js',
      './node_modules/prismjs/themes/prism-dark.css',
    ]
    gulp.src( sources ).pipe(gulp.dest('./public/modules/'));
});

gulp.task('copy-modules', ['modules']);
