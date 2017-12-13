# Laboratory work 5 - 7 (angular 2+ application)

The goal of laboratorny work create angular application.


#### Laboratorny work 5
* Icon - будет отображать желаемую Font awesome иконку. Иконка должна передаваться через property icon icon. (пример: <Icon icon=”ball” />) 
* Компоненту, которая будет отображать информацию в виде *иконка* текст (как на изображении, в левом нижнем углу). Компонента должна быть способна отображать как обычный текст, так и ссылки. 
[Icon-text component](src/app/components/icon-text)
* Компоненту, которая отображает основную информацию о пользователе (фото, имя, никнейм, краткое описание, контакты). См. пример на изображении 1 (блок слева). 
[Image component](src/app/components/image) / 
[Info component](src/app/components/info) / 
[Contact-info component](src/app/components/contact-info)
* Компоненту, которая будет отображать табы (как на картинке справа). В каждый таб добавить кнопку Edit.
[Tab component](src/app/components/tab) / 
[Tabs component](src/app/components/tabs)
* Данные, которые будут отображаться на странице (имя, адреса, ссылки, данные) хранить в файле .json
[Json file with static data](src/assets/static/data.json) / 
[Service to work with static data](src/app/services/static-user.service.ts) / 
[Change to static service](src/app/app.module.ts)

#### Laboratorny work 6
* Изучить запрос к api gihub для получения информации о пользователе: https://developer.github.com/v3/users/#get-a-single-user
* Составить запрос используя fetch api https://developer.mozilla.org/ru/docs/Web/API/Fetch_API
* Разместить запрос к api в корневом компоненте
* Подключить разработанную страницу к полученным данным
[GitHub user service](src/app/services/git-hub-user.service.ts)

#### Laboratorny work 7
* Подключить redux в приложение GitHub viewer с прошлой лабораторной работы;
[Redux store](src/app/store/store.ts)
[Redux configuration](src/app/app.module.ts)
* Разместить логику запросов к api с лаб. раб. №6 в store (используя action и reducer)
[Head component which work with redux](src/app/components/header)

## Getting Started
Install npm (ubuntu):
```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```
Install angular-cli:
```
npm install -g @angular/cli
npm install
```
Start local development server:
```
ng serve
```
Goto http://localhost:4200
