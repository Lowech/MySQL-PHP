//парсинг данных со сторонних сайтов
let parser = document.querySelector('#parser');
let parserInput = document.querySelector('#parserInput');
let replyProcess = document.querySelector('.container-replyProcess');

parser.onclick = function() {
    document.querySelector('.container-text').innerHTML = "";
    replyProcess.style.display="flex";
    
    objectParser=[[parserInput.value],["parser"]];
let hotBoot=	fetch('script.php', {
    	method: 'POST',
    	headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
    },
    body: JSON.stringify(objectParser)
  })
  .then(response => response.json())
  .then(result => document.querySelector('.container-text').innerHTML = result );
 
  hotBoot.finally(()=>{
    replyProcess.style.display="none";
  })

  };

//создания таблицы mySql
let createTable = document.querySelector('#createTable');
let createTableInput = document.querySelector('#createTableInput');
let createStringInput1 = document.querySelector('#createStringInput1');
let createStringTypeOption1 = document.querySelector('#createStringTypeOption1');
let createStringInput2 = document.querySelector('#createStringInput2');
let createStringTypeOption2 = document.querySelector('#createStringTypeOption2');

createTable.onclick = function() {
    document.querySelector('.container-text').innerHTML = "";
    replyProcess.style.display="flex";

    objectParser=[[createTableInput.value,createStringInput1.value,createStringTypeOption1.value,createStringInput2.value,createStringTypeOption2.value],["createTable"]];
    
  let hotBoot=	fetch('script.php', {
    	method: 'POST',
    	headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
    },
    body: JSON.stringify(objectParser)
  })
  .then(response => response.text())
  .then(result => document.querySelector('.container-text').innerHTML = result );

  hotBoot.finally(()=>{
    replyProcess.style.display="none";
  })

  };

//удаление таблицы mySql
let deleteTable = document.querySelector('#deleteTable');
let deleteTableInput = document.querySelector('#deleteTableInput');

deleteTable.onclick = function() {
    document.querySelector('.container-text').innerHTML = "";
    replyProcess.style.display="flex";
    objectParser=[[deleteTableInput.value],["deleteTable"]];
    
  let hotBoot= fetch('script.php', {
    	method: 'POST',
    	headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
    },
    body: JSON.stringify(objectParser)
  })
  .then(response => response.text())
  .then(result => document.querySelector('.container-text').innerHTML = result );

  hotBoot.finally(()=>{
    replyProcess.style.display="none";
  })

  };

//получения данных таблицы mySql
let getTableInfo = document.querySelector('#getTableInfo');
let getColumnInfoInput = document.querySelector('#getColumnInfoInput');
let getTableInfoInput = document.querySelector('#getTableInfoInput');

getTableInfo.onclick = function() {
    document.querySelector('.container-text').innerHTML = "";
    replyProcess.style.display="flex";
    objectParser=[[getColumnInfoInput.value,getTableInfoInput.value],["getColumnTableInfoInput"]];

   
  let hotBoot= fetch('script.php', {
    	method: 'POST',
    	headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
    },
    body: JSON.stringify(objectParser)
  })
  .then(response => response.text())
  .then(result => document.querySelector('.container-text').innerHTML = result );

  hotBoot.finally(()=>{
    replyProcess.style.display="none";
  })

  };

//добавить столбц в таблицу mySql
let getColumnTable = document.querySelector('#getColumnTable');
let getTableInput = document.querySelector('#getTableInput');
let getColumnInput = document.querySelector('#getColumnInput');
let getStringTypeOption = document.querySelector('#getStringTypeOption');

getColumnTable.onclick = function() {
    document.querySelector('.container-text').innerHTML = "";
    replyProcess.style.display="flex";
    objectParser=[[getTableInput.value,getColumnInput.value,getStringTypeOption.value],["getColumnTable"]];
    
  let hotBoot= fetch('script.php', {
    	method: 'POST',
    	headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
    },
    body: JSON.stringify(objectParser)
  })
  .then(response => response.text())
  .then(result => document.querySelector('.container-text').innerHTML = result );

  hotBoot.finally(()=>{
    replyProcess.style.display="none";
  })

  };

//сортировка значений столбца в таблице mySql
let sortColumnTable = document.querySelector('#sortColumnTable');
let sortTableInput = document.querySelector('#sortTableInput');
let sortColumnInput = document.querySelector('#sortColumnInput');
let sortStringTypeOption = document.querySelector('#sortStringTypeOption');

sortColumnTable.onclick = function() {
    document.querySelector('.container-text').innerHTML = "";
    replyProcess.style.display="flex";
    objectParser=[[sortTableInput.value,sortColumnInput.value,sortStringTypeOption.value],["sortColumnTable"]];
   
  let hotBoot= fetch('script.php', {
    	method: 'POST',
    	headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
    },
    body: JSON.stringify(objectParser)
  })
  .then(response => response.text())
  .then(result => document.querySelector('.container-text').innerHTML = result );

  hotBoot.finally(()=>{
    replyProcess.style.display="none";
  })

  };
//сортировка значений столбца в таблице mySql
let setValueColumnTable = document.querySelector('#setValueColumnTable');
let setValueColumnTableInputTable = document.querySelector('#setValueColumnTableInputTable');
let setValueColumnTableInputColumn = document.querySelector('#setValueColumnTableInputColumn');
let setValueColumnTableInputColumnValue = document.querySelector('#setValueColumnTableInputColumnValue');
let setValueColumnTableInputColumn2 = document.querySelector('#setValueColumnTableInputColumn2');
let setValueColumnTableInputColumnValue2 = document.querySelector('#setValueColumnTableInputColumnValue2');

setValueColumnTable.onclick = function() {
    document.querySelector('.container-text').innerHTML = "";
    replyProcess.style.display="flex";
    objectParser=[[setValueColumnTableInputTable.value,setValueColumnTableInputColumn.value,setValueColumnTableInputColumn2.value,setValueColumnTableInputColumnValue.value,setValueColumnTableInputColumnValue2.value],["setValueColumnTable"]];

  let hotBoot= fetch('script.php', {
    	method: 'POST',
    	headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
    },
    body: JSON.stringify(objectParser)
  })
  .then(response => response.text())
  .then(result => document.querySelector('.container-text').innerHTML = result );

  hotBoot.finally(()=>{
    replyProcess.style.display="none";
  })

  };

//удаление таблицы mySql
let deleteColumn = document.querySelector('#deleteColumn');
let deleteColumnInput = document.querySelector('#deleteColumnInput');
let deleteColumnTableInput = document.querySelector('#deleteColumnTableInput');

deleteColumn.onclick = function() {
    document.querySelector('.container-text').innerHTML = "";
    replyProcess.style.display="flex";
    objectParser=[[deleteColumnTableInput.value,deleteColumnInput.value],["deleteColumn"]];
    
  let hotBoot= fetch('script.php', {
    	method: 'POST',
    	headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
    },
    body: JSON.stringify(objectParser)
  })
  .then(response => response.text())
  .then(result => document.querySelector('.container-text').innerHTML = result );

  hotBoot.finally(()=>{
    replyProcess.style.display="none";
  })

  };