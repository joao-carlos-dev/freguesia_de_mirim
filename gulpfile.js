import gulp from 'gulp';
import imageminTask from './tasks/imagemin.js';
import cssTask from './tasks/css.js';

// Exporte a tarefa de minificação de imagens
export const imagemin = imageminTask;

// Exporte a tarefa de minificação de CSS
export const css = cssTask;

// Defina a tarefa padrão para executar ambas as tarefas (opcional)
export default gulp.series(imagemin, css);