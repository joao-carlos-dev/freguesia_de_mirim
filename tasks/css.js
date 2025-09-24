import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import plumber from 'gulp-plumber';
import rev from 'gulp-rev'; // Importa o plugin para adicionar hash
import revRewrite from 'gulp-rev-rewrite'; // Importa o plugin para reescrever caminhos

// Defina os caminhos para os arquivos CSS e HTML
const paths = {
  styles: {
    src: 'srcOriginal/styles/**/**.css',
    dest: 'dist/css' // Alterado para uma pasta de destino de build
  },
  html: {
    src: 'srcOriginal/**/*.html', // Caminho para seus arquivos HTML
    dest: 'dist' // Pasta de destino do seu build
  }
};

// Tarefa para minificar o CSS e adicionar cache busting
export const css = () => {
  return gulp.src(paths.styles.src)
    .pipe(plumber())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rev()) // Adiciona um hash no nome do arquivo
    .pipe(gulp.dest(paths.styles.dest)) // Salva o arquivo com o novo nome
    .pipe(rev.manifest({ base: paths.styles.dest, merge: true })) // Cria o arquivo manifest.json
    .pipe(gulp.dest(paths.styles.dest)); // Salva o manifest.json na pasta de destino
};

// Tarefa para reescrever os caminhos no HTML
export const rewriteHtml = () => {
  const manifest = gulp.src(`${paths.styles.dest}/rev-manifest.json`);

  return gulp.src(paths.html.src)
    .pipe(revRewrite({ manifest })) // Lê o manifest e atualiza os caminhos
    .pipe(gulp.dest(paths.html.dest)); // Salva o HTML na pasta de destino
};

// Tarefa padrão para o deploy
export default gulp.series(css, rewriteHtml);