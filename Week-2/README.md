## Sıralama ödevi algoritması
##### todos.js dosyası içerisinde düzenlenecek.
table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
event listener hangi kolon için tıklanıyorsa sort metodu kullanılarak sıralama yapılacak.
sıralanmış todos'todus içerisine atılacak.
renderTodos metodu çalıştırılacak.


## HTTP - Fetch Api Ödevi

##### README.md dosyası, txt, js dosyası açarak yapılabilir.

* HTTP Status'ün 
  * Görevleri nelerdir? Bu görevlerin anlamlarını açıklayınız.

HTTP durum kodları (HTTP yanıt kodları), bir web sayfasının barındırıldığı sunucuya, istemciden gönderilen HTTP isteğine yanıt olarak döndürülen kodlara verilen isimdir. 
Bir tarayıcı (istemci) web sayfasına bağlanmak istediğinde ilgili sayfayı barındıran sunucu, ilgili sayfanın durumu durumu ile alakalı bir cevap (yanıt) döndürür. Her tarayıcı server etkileşimi sırasında gerçekleşen bu işlemde sunucu yanıt olarak 3 (digit) rakamdan oluşan numaralandırılmış bir açıklama döndürür. Bu yanıt HTTP response (yanıt) başlığında yer alır ve sayfa içeriğinin doğrudan bir parçası değildir.
Bu kodlar, isteğin durumu hakkında bilgi vermektedir.Tamsayı değerlerin ilk basamakları cevap kodları sınıflara ayırmak için kullanılmaktadır. İlk basamağın alabileceği 1-5 arası beş farklı değer vardır

| Kod No| Kod Adı|Kod No| Kod Adı|
| :--- | :---: | :---: | ---: |
| 100 | Continue | 400 | Bad Request |
| 200 | OK | 401 | Unauthorized |
| 201 | Created | 403 | Forbiden |
| 202 | Accepted | 404 | Not Found |
| 301 | Moved Permanently | 410 | Gone |
| 303 | See Other | 414 | Request-URI Too Long |
| 304 | Not Modifier | 500 | Internal Server Error |
| 307 | Temporary Redirect | 503 | Service Unavaible |

Reponse içerisinde gelen Status Code bakarsak;
- **Informational responses (100–199)**:
- **Successful responses (200–299)**: 200 OK. …
- **Redirects (300–399)**: 301 — Permanent Redirect. 302 — Temporary Redirect, …,
- **Client errors (400–499)**: 404 — Not Found, 410 — Gone, …
- **Server errors (500–599)**:500 — Internal Server Error, 503 — Service Unavailable,…

***1XX: Bilgi amaçlı kodlar:***
- 100 Continue (Devam): İstemci tarafından yapılan isteğin sunucu tarafından başarılı bir şekilde alındığını ve işlemin devam edeceğini belirtir.

***2XX: Başarılı Cevap Kodları:***
- 200 OK (Tamam): İstemci tarafından yapılan isteğin başarılı bir şekilde alındığını ve  sunucudan cevabın başarılı bir şekilde geri döndüğünü belirtir.
- 201 Created (Oluşturuldu): İstemci tarafından yapılan isteğin başarılı olduğunu ve  sunucuda yeni bir kaynak oluşturulduğunu belirtir.
- 202 Accepted (Kabul Edildi): Yapılan isteğin işlenmek üzere kabul edildiğini fakat işlemin henüz tamamlanmadığını belirtir.

***3XX Yönlendirme Cevap Kodları:***
- 301 Moved Permanently (Kalıcı Olarak Taşındı): İstekte bulunulan kaynak veya web sayfasının kalıcı olarak başka bir yere taşındığını belirtir ve o adrese yönlendirir.
- 303 See Other (Diğerlerine Bak): İstekte bulunulan kaynağın farklı bir URL’de olduğu ve bu kaynağa GET isteğinin yapılması gerektiğini belirtir.
- 304 Not Modified (Değiştirilmedi): İstemci tarafından koşullu bir GET isteğinde bulunulmuş ve erişime izin verilmiş, fakat istekte bulunulan belgede değişiklik olmamışsa sunucu bu cevap kodunu dönmek zorundadır.
- 307 Temporary Redirect (Geçici Yönlendirme): İstekte bulunulan kaynağın geçici olarak farklı bir URL adreste bulunduğunu belirtir.

***4XX İstemci Hatası Cevap Kodları***
- 400 Bad Request (Kötü İstek): Yapılan isteğin hatalı URL yapısından dolayı sunucu tarafından anlaşılmadığını belirtir.
- 401 Unauthorized (Yetkisiz): İstek yapılan kaynağa erişim izni için kullanıcı doğrulamasının olması gerektiğini belirtir.
- 403 Forbidden (Yasak): Sunucunun isteği anladığını fakat isteği yerine getirmek istemediğini ve kullanıcı doğrulamasının yeterli olmadığını belirtir.
- 404 Not Found (Nesne Bulunamadı): Sunucunun yapılan istekte bulunan kaynak ile ilgili herhangi bir nesne bulamadığını belirtir. Dosya veya klasör yolunun hatalı girilmesi sebebiyle istemcilerin en çok karşılaştığı hata kodudur. Standart hata kodu mesajı yerine web sunucusunun yapılandırılmasıyla özelleştirilmiş hata sayfası görüntülenmesi de mümkün olmaktadır.
- 410 Gone (Kayıp): İstekte bulunulan kaynağın sunucuda artık bulunmadığını ve yönlendirilecek web adresinin de bilinmediğini belirtir.
- 414 Request-URI Too Long (İstek Tekdüzen Kaynak Tanımlayıcı Çok Uzun): İstekte bulunulan web adresinin sunucunun yorumlayabileceğinden uzun olduğu için isteği gerçekleştirmeyi reddettiğini belirtir.

***5XX: Sunucu Hatası Cevap Kodları***
- 500 Internal Server Error (Dâhili Sunucu Hatası): Sunucunun isteği yerine getirmesini engelleyen beklenmeyen bir durumla karşılaşıldığını belirtir.
- 503 Service Unavailable (Hizmet Kullanılamıyor): Sunucunun, geçici olarak aşırı yüklenmesi ya da bakım çalışmasından dolayı şu anda yapılan isteği işleyemediğini belirtir

   
#### HTTP Request'in metodlari  nelerdir? 
**HTTP Request / Response** :Request içerisinde ***Method, Path, Version Control ve Header*** kısmından oluşur. Metodları incelersek; 
1. GET metodu ile sorgu metinleri URL içinde gönderilebilir. Bunun en önemli faydası kullanıcıların bookmark edebilmeleri ve aynı sorguyu içeren istekleri daha sonra gönderebilmelerini sağlaması ve tarayıcıda önceki sorguların “geri” tuşu ile veya tarayıcı geçmişinden çağrılarak aynı sayfalara ulaşabilmeleridir. Güvenlik açısından URL’lerin ekranda görüntüleniyor olması ve URL’in hedefine ulaşıncaya kadar ve hedef sunucu üzerinde iz kayıtlarında görülebilmesi gönderilen parametrelerin gizlilik ihtiyacı varsa sıkıntı yaratabilir. Bu nedenlerle hassas isteklerin GET ile gönderilmemelidir.
2. POST: Bu metod ile sunucuya veri yazdırabilirsiniz. Bu metodla istek parametreleri hem URL içinde hem de mesaj gövdesinde gönderilebilir. Sadece mesaj gövdesinin kullanımı yukarıda sayılan riskleri engelleyecektir. Tarayıcılar geri butonuna basıldığında POST isteğinin mesaj gövdesinde yer alan parametreleri tekrar göndermek isteyip istemedimizi sorarlar. Bunun temel nedeni bir işlemi yanlışlıkla birden fazla yapmayı engellemektir. Bu özellik ve de güvenlik gerekçeleriyle bir işlem gerçekleştirileceğinde POST metodunun kullanılması önerilir.
3. PUT : Bu metod ile servis sağlayıcı üzerindeki bir kaynağı güncelleyebilirsiniz. Hangi kaynağı güncelleyecekseniz o kaynağın id’sini göndermek zorunludur.
4. HEAD: GET metoduyla benzer işleve sahiptir ancak geri dönen yanıtta mesaj gövdesi bulunmaz (yani başlıklar ve içerikleri GET metoduyla aynıdır). Bu nedenle GET mesajı gönderilmeden önce bir kaynağın var olup olmadığını kontrol etmek için kullanılabilir.
5. DELETE: Bu metod ile sunucudaki herhangi bir veriyi silebilirsiniz.
6. CONNECT: Bir proxy sunucu üzerinden başka bir sunucuya bağlanmak ve proxy sunucuyu bir tünel gibi kullanmak için kullanılır.
7. OPTIONS: Bu metod belli bir kaynak için kullanılabilecek HTTP metodlarını sunucudan sorgulamak için kullanılır.
8. TRACE:Teşhis amaçlı kullanılan bir metoddur. Sunucu bu metodla gelen istek mesajının içeriğini aynen yanıt gövdesinde geri göndermelidir. Bu yöntemle sunucu ile istemci arasında bir vekil sunucu varsa bu sunucunun ve yaptığı değişikliklerin tespiti mümkün olabilir.
9. PATCH: Bu metod bir kaynağa istediğiniz küçük çaplı değişimi yapmanızı sağlar.
10. SEARCH: Bir dizinin altındaki kaynakları sorgulamak için kullanılır.

  ###  Fetch API'nin metodlari ile örnekleri:

Javascript Fetch Api Kullanımı:Fetch API window objesinde bulunan web istekleri yapabileceğimiz ve cevaplarını kolaylıkla işleyebileceğimiz asenkron çalışan bir metoddur.

Fetch API’ nin yerine *jQuery.ajax()* ve *XMLHttpRequest* kullanılabilinir.. Fakat fetch api hem kullanımı daha kolay hem de window objesi ile birlikte geliyor. Eğer window objesini console’ da yazdırırsak bu window objesinin altında fetch metodunu görebilirsiniz.
- FETCH API’ yi kullanmak için fetch metoduna istek yapacağımız url’ i parametre olarak vermek gerekiyor.
- fetch() metodundan sonra, metodun sonuna then() promise metodunu ekleriz:
**ÖRNEK:** “https://jsonplaceholder.typicode.com/todos” adresine get isteğinde bulunalım. Bu örnek için ekte bulunan FETCH.js sayfasını inceleyebilirsiniz.