/*  Local Storage ve Session Storage JavaScript ile tarayıcıda bilgi saklamak için kullanılan bir özelliktir */
/*  Aralarında sadece bir fark vardır.
Local Storage: Siz silene kadar ya da tarayıcı geçmişi silinene kadar bilgiyi saklar.
Session Storage: Adından da anlaşılacağı üzere session (oturum) yani sekme kapanana kadar bilgiyi saklar, 
sekme kapandıktan sonra silinir. Bir sekmeyi / pencereyi kapatmak, oturumu sonlandırır ve içindeki nesneleri temizler.
Depolanan veriler oturum süresince saklanır. 
Verileri kaybolmasını istemiyorsanız Local Storage kullanmanız gerekmektedir.

kullanımı:
1. Değer Tanımlama
sessionStorage.setItem('key', 'value') ;     --Yazma
sessionStorage.key = 'value ;
2. Değere Erişmek
sessionStorage.getItem('key');               --Okuma 
sessionStorage.key;     

3. Değerle ilgili silme işlemleri:
sessionStorage.removeItem('key'); --Kayıt Silme
sessionStorage.clear(); --Tüm verileri silme
delete sessionStorage.key
 */

//Aşağıdaki kod fonk. çalıştırıldığında isim kaydedildiğinde sekme açık olduğu sürece bilgi kayıtlı kalacaktır.

function Session_Storage_Depola() {
    var _isim = $("#isim_S").val();
    sessionStorage.setItem("İsim", _isim);

    refresh();
}

function Sil_Session() {
    sessionStorage.removeItem("İsim");

    refresh();
}

function refresh() {
    if (sessionStorage.getItem("İsim") !== null)
        $("#Session_Storage_Depola").text(sessionStorage.getItem("İsim"));
    else
        $("#Session_Storage_Depola").text('');
}

$(function() { refresh(); });

//
//
// aşağıdaki fonk. çalıştırıldığında  ve bir isim kaydedildiğinde sayfa kapatılıp yeniden açıldığında isim 
//sayfada kalmaya devam eder.
//

// function Local_Storage_Depola() {

//     var __isim = $("#isim_L").val();
//     localStorage.setItem("İsim", __isim);

//     refresh();
// }

// function Sil_Local() {
//     localStorage.removeItem("İsim");

//     refresh();
// }

// function refresh() {
//     if (localStorage.getItem("İsim") !== null)
//         $("#Local_Storage_Depola").text(localStorage.getItem("İsim"));
//     else
//         $("#Local_Storage_Depola").text('');
// }

// $(function() { refresh(); });




/* COOKIE 
Cookie (çerez), kullanıcının bilgisayarında web tarayıcılar aracılığıyla saklanan ve 
en fazla 4 KB boyutunda olan metin (txt) dosyalarıdır.
Üyelik sistemi, kullanıcı şifresinin hatırlanması,alışveriş sitelerindeki sepet mantığı,
kullanıcı hareketliliğinin ve tercihlerinin izlenmesi, sonrasında kullanıcıya daha alakalı sonuçların 
gösterilmesi gibi kullanıcı deneyimini arttıran faaliyetlerde sıklıkla kullanılır.*/

/*Başlarda sunucu tarafında çalışan PHP gibi web proğramlama dillerinin kullanması için oluşturulan eski 
bir tarayıcı (istemci) tabanlı depolama tekniğidir. Ancak günümüzde, sunucu tarafında kullanmaya kıyasla 
biraz daha zor gözükse de pratik hale getirilebilmekte ve sonuç olarak cookie oluşturma, silme ve güncelleme 
gibi cookie kullanımı süreci tarayıcı tarafından da yapılabilmekte*/

/*Javascript cookie oluşturma, okuma ve silme işlemi için “document.cookie” özelliği kullanılır. 
Bu özellik, açılan web sayfasında tanımlı bütün çerezleri temsil eder. Bu özelliğe javascript cookie oluşturma
 işlemi için name=value şeklinde değer girilmelidir;*/

// document.cookie = "name=isim"; //tarayıcı kapandığında silinir

/* Aşağıda yazılmış kodda: Yazılmış fonksiyonlardan setCookie çerez oluşturmak için çerez adı,
 çerez değeri ve kaç gün tarayıcıda duracağı bilgilerini parametre olarak alır getCookie fonksiyonu
  parametre olarak çerez adını alır ve o çereze ait bilgileri bize verir.*/

// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toGMTString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// setCookie("adi", "SY", 10);
// var deger = getCookie("adi");
// alert(deger);

// NOT: cookie ile yazdığım örneği internetten aldım, nasıl yapıldığını inceledim sadece.

