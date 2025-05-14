import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

const sourcePath = 'srcOriginal/img/**/*.{jpg,jpeg,png,jfjf}';
const destinationPath = 'src/img_minificadas';

const imageminOptions = {
  progressive: true,
  svgoPlugins: [{ removeViewBox: false }],
  interlaced: true,
  optimizationLevel: 3 // Nível de otimização (0-7)
};

export default () => (
    gulp.src(sourcePath)
        .pipe(imagemin())
        .pipe(gulp.dest(destinationPath))
);