/*FETCH API’ yi kullanmak için fetch metoduna istek yapacağımız url’ i parametre olarak vermek gerekiyor.
fetch() metodundan sonra, metodun sonuna then() promise metodunu ekleriz:

fetch(url)
.then(function() {

})

*/


//ÖRNEK: “https://jsonplaceholder.typicode.com/todos” adresine get isteğinde bulunalım.
//GET 

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())//parse json data
  .then(function(todos){
    todos.forEach(todo => {
        console.log(todo.title);//Başlıkları console' a yazdırma
    });
})


//POST İsteği Yapma
// POST isteği ile verimizi servera gönderelim  
let payload = {
    title: "Blog Title",
    body: "lorem ipsum", 
    userId:1
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));

//META Data Kullanımı Fetch API ile istek yaptığımızda istek yapılan adres bize META datalar 
//gönderir. Bu META dataları console’ a aşağıdaki gibi yazdırabiliriz.
//META VERİLER
fetch('https://jsonplaceholder.typicode.com/posts/1').then(function(response) {  
    console.log(response.headers.get('Content-Type'));  
    console.log(response.headers.get('Date'));
    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.type);  
    console.log(response.url);  
});