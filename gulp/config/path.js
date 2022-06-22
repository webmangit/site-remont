// Получаем имя папки проекта
import * as nodePath from 'path' // импортируем модуль path
const rootFolder = nodePath.basename(nodePath.resolve()) // получаем имя папки проекта project

const buildFolder = `./dist` // путь к папке с результатом
const srcFolder = `./src` // путь к папке с исходниками

export const path = { // Общий объект path, в которых хранитс вся информация о путях. Экспортируем объект. 
  build: { // объект путей к папке с результатом
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: { // объект путей к исходным файлам
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`, // pug
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: { // папка с путями за которыми должен следить gulp и при любых изменениях выполнять определенные действия
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`, // pug
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder, // clean будет равна папки с результатом
  buildFolder: buildFolder, // сама папка с результатом
  srcFolder: srcFolder, // папка с исходниками
  rootFolder: rootFolder, // название текущей папки с проектом
  ftp: `` // папка на удаленном ftp сервере
}