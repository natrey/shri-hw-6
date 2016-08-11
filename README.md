## Домашнее задание к лекции "Инфраструктура веб-проектов"

[![Build Status](https://travis-ci.org/iNata/shri-hw-6.svg?branch=master)](https://travis-ci.org/iNata/shri-hw-6)

Добавила приложение, которое в зависимости от рандомно генерируемого числа выводит разные фигуры в canvas;

Настроила ESLint; 
Исправила ошибки ESLint, но пришлось удалить проверку linebreak-style, так как работаю на windows, который переносит
строки CRLF, соот. локально ошибок не было, а на хостинге возникли ошибки переноса строк.

Выложила на хостинг Heroku:

![Скриншот deploy to heroku](img/prtScreen1.jpg)

Ссылка на приложение: https://pacific-island-21522.herokuapp.com/

Приложение сразу не загрузилось, потому что я в package.json зависимости указала как devDependencies, а не dependencies.
Узнала об ошибках через логи (не находился модуль express)

![Скриншот heroku logs ](img/prtScreen2.jpg)

Настроила travis CI, Настроить деплой ветки master в Heroku, добавила плашку build.

Ссылка на travis: https://travis-ci.org/iNata/shri-hw-6
