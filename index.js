const path = require('path'); // Подключаем модуль path
const fs = require('fs'); // Подключаем модуль fs



   let filledFilePath = 'C:\\Для работы\\DECACODE\\test';
   let pathToFile = path.resolve(filledFilePath, 'index.html');
      console.log(pathToFile);

   let changeThis = "img/";
   let forThis = "https://www.decathlon.ru/ecru/static/";


   const fileContent = fs.readFileSync(pathToFile, 'utf8');
   console.log(fileContent);
   const finalResult = fileContent.replace('img/', forThis);


fs.writeFileSync(pathToFile,finalResult,'utf8');
