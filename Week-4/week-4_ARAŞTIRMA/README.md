# `Class Component Nedir?`
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="60" height="60"/>&nbsp; 
 Biz React 'ta çalışırken tek bir sayfa üzerinden sayfayı bölümlere ayırarak componentler halinde oluşturup birleştiriyoruz. Componentler ise uygulamanızı 
 tekrar kullanılabilir parçalara ayırmanıza ve her bir parçayı ayrı ayrı düşünmenize izin verir.
 
 2 tür component vardır:
 - Bunlar `fonksiyon component` ve `class componenttir`. 
 
 Componentler aslında fonksiyon gibi çalışır. Parametre gönderilebilir (bunları props diye adlandırıyoruz), yapacağı spesifik işlemi yapar ve ekranda neler
 görüneceğini açıklayan React elementleri return ile döndürürler.
 
 -Fonksiyon geçerli bir React componenti olduğundan, tek bir props parametresini obje olarak alır ve bir React componenti return eder.
 
 - `Class componentleri` ise React kütüphanesi içerisindeki “Component” class ‘ından extend olan javascript class ‘ları olarak tanımlayabiliriz. 
 * Bu class ‘lar React Component ‘ten extend olduğu için Component Lifecycle süreçlerini de barındırır.
 
 ## `Nasıl Çalışırlar?`
 
 # ` React Bileşeni Yaşam Döngüsü`
 
 * DOM’da oluşturulan (render) her React bileşeni, oluşturma işleminden önce ve sonra bir dizi adımdan geçer. Bir bileşen her oluşturma işleminde 
 `“Yaşam Döngüsü (lifecycle)” `olarak adlandırılan temel adımlardan geçer. 
 * Bir bileşenin yaşam döngüsünde metotlarımız için önemli olan` üç özel aşama`vardır.

 * ### Mounting – Bağlama
 * ### Updating – Güncelleme
 * ### Unmouting – Ayırma
## ` Mount`

React bir bileşenin örneği oluşturup, onu DOM’a eklediğinde (mount), aşağıdaki metotlar çağrılır:

* constructor() : Yapıcı metot bileşen oluşturulurken kullanılır.
* getDerivedStateFromProps(): render metodunu çağırmadan hemen önce hem ilk mount işleminde hem de sonraki güncellemelerde (updating) çağrılır. Durumu güncellemek için bir nesneyi, hiçbir şeyi güncellemek için ise null değerini döndürmelidir.
* render(): Görüntünün oluşturulduğu aşamadır. Reach elementleri (JSX), diziler, alt DOM ağaşları, DOM üzerindeki metinler ve sayılar bu aşamada görsel bir forma çevrilir. Hem mount hem de güncelleme aşamalarını içerir.
* componentDidMount(): Bileşen bağlanmıştır ve burada yaşam döngüsü devam eder. Çünkü bileşen güncellenebilir.

## `  Update`

Herhangi bir nedenden ötürü bir bileşenin props veya state değerleri değiştirilirse, bileşenin güncellenmesi gerçekleştirilir. Bununla birlikte, bu durum aşağıdaki metotların çağrılmasına neden olan bileşenin yeniden işlenmesi gerektiği anlamına gelir.:

* getDerivedStateFromProps()
* shouldComponentUpdate(): Bileşen güncellemesi
* getSnapshotBeforeUpdate(): Render aşamasındaki çıktıdan hemen sonraki kısımdır. Bileşenleriniz değimeden önce DOM’un bazı bilgiler almasını sağlar. Örneğin bir kaydırma işleminde kaydırma konumu bu aşamada alınır.
* render() : Tekrar görüntü oluşturulacak
* componentDidUpdate(): Bileşen güncellendi

 ## `Unmount`
Bir noktada bileşenimizin yaşam döngüsü sonlanacak ve bu aşamadan sonra render olmayacaktır. Bu aşamaya unmounting denir ve aşağıdaki metot kullanılabilir:

* componentWillUnmount: Bileşenin yaşam döngüsü bitmeden önceki son istekleri için bir metot

# `Yaşam Döngüsü Akış Şeması`

* Bu üç özel aşama kendi arasında bağımlıdır. 
* Bu bağımlılığı göstermenin en güzel yolu bir akış şemasıdır. Google görsellerde “react lifecycle” araması yaptığınızda çok güzel akış şemaları geliyor. 
Ancak bu akış şemasında güncellemeler oluyor. Güncellemelere göre kod yazarken bazı kısımlarda esneklikler kazanabiliyorsunuz. 
En son güncel yaşam döngüsü diyagramı için [tıklayın](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) .

![image](https://user-images.githubusercontent.com/109158340/195945638-3c3e5783-e2c0-477f-a45e-7f4201cab2a0.png)



