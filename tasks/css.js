import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import plumber from 'gulp-plumber';

// Defina os caminhos para os arquivos CSS
const sourcePath = 'src/styles/**/**.css';
const destinationPath = 'src/css_minificados'; // Ou outra pasta de destino para CSS minificado

const cssTask = () => (
  gulp.src(sourcePath)
    .pipe(plumber()) // Adiciona tratamento de erros
    .pipe(cleanCSS({ compatibility: 'ie8' })) // Minifica o CSS com opções de compatibilidade
    .pipe(gulp.dest(destinationPath))
);

export default cssTask;