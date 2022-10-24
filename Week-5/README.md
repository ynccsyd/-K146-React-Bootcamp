# `WEEK-5 React Using useCallback, React.memo`

-In this project you have to know:
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp; <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="Git" **alt="Git" width="40" height="40"/>
  
</div>
-This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

##  ` Projeyi nasıl çalıştırabilirim?`

proje repo'su açıldıktan sonra eklenmesi gerekenler:
```
npm install
npm start
```
- Ayrıca render işlemlerini görebilmek için [react dev tool](https://github.com/facebook/react/tree/main/packages/react-devtools#the-react-tab-doesnt-show-up) kurabilirsiniz.

### ` Bu Projede`;
- 3 tane ürünümüz var ürünleri state de tutuyoruz.
- Ürünleri render eden bir fonksiyonumuz var(products ve addtocart ı proplardan alıp ekrana yazdırıyor).
- addToCart fonksiyonu varsa sepet componenti çalıştırıyor.

- useCallback'i nerede kullanacağımıza karar vermek için programı çalıştıralım ve react dev tool Profile özelliğinden hangi fonksiyonlar kaç defa render edilmiş bakıp gereksiz render işlemleri inceleyelim
- Bu aşamada hangi component hangi aşamada neden yeniden render edildiğini görebiliriz.

- ``` bir fonksiyonu aşağıdaki şekilde çalıştırırsak```
```
const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };
  ```
- Her işlemde state değiştiği için tekrardan durumlar render edilir.
- Her bir render işleminde yeniden oluşturulur ve memory deki yeri değişir. yeri değişince de react bu fonksiyonun değiştiğini zanneder.

----

Bu haliyle componentlerden addToCart kaç defa render edildiğine bakalım. Sepete 5 defa ürün seçelim

[Video_2022_10_21-6.webm](https://user-images.githubusercontent.com/109158340/197275887-7bda9382-a316-4533-a9a2-2e014003d731.webm)

- Burada consolda 5 kere render edildiğini görebiliriz

![image](https://user-images.githubusercontent.com/109158340/197276661-403d10cf-4efa-4545-a14d-872d7e09bb26.png)

----

- Bu durumu nasıl engelleyebiliriz? yani yeniden render edilmesini nasıl engelleriz. yani sepete ürün eklemeye devam ettikçe tekrar tekrar render edilmeye devam eder.
- Eğer addToCart, emptyCart fonksiyonlarının değişmeyeceğini söylersek yani useCallback kullanırsak react bunu hatırlar ve useEffect de olduğu gibi dependency array oluştururuz ancak burada boş bir array oluştururuz.

- Her durumda parent render edildiğinde parent child da render edilir bunu engellemek için ise Product ve Products içinde proplar değişmediği sürece değişmesini istemediğmiz  için de React.memo kullanıyoruz. yani proplar değişmediği sürece hafızaya alındı.

```
 const addToCart = useCallback((product) => {
    setCart((cart) => [...cart, product]);
  }, [] )
  console.log("<addToCart> render edildi");;
const Product =React.memo( ({ name, price, addToCart }) => {
  return (
    <div className="product">
      <div>
        <h2>{name}</h2>
        <h3>{price.toLocaleString()} €</h3>
      </div>
      
      <div>
        {addToCart && (
          <button onClick={() => addToCart({ name, price })}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
});


```
----

* useCallback ve memo kullandıktan sonra;

[Video_2022_10_21-10.webm](https://user-images.githubusercontent.com/109158340/197275046-65a2ed7e-6c95-426b-b5bd-606714427cb5.webm)

- consolda bir kere çalıştırıldığı görülüyor:)












-----

















