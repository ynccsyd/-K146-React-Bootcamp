## `CUSTOM EVENT`
### Javascript Custom Event çalışması
<div>
   <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="Git" **alt="Git" width="40" height="40"/> ve <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="Git" **alt="Git" width="40" height="40"/> kullanıldı.
</div>

---
Web tarayıcılar ile birlikte gelen birçok event var ve birçoğunu zaten kullanıyoruz. Click, input, change vb.. fakat bunların dışında kendi eventimizi CustomEvent() oluşturabiliriz. Örneğin aşağıdaki örnekteki gibi bir bir count state i iki buton ile değiştirip ve dinleyerek değişikliğin yansımasını sağlıyoruz.

1. Öncelikle aşağıdaki gibi `id= counter` olan bir span ve iki adet onclick eventinde `counterChange` fonksiyon ekliyoruz, parametre olarak da increment ve decrement yazıyoruz  🚀.

```  My Counter: <span id="counter">0</span>
      <button onclick="counterChange('increment')">+</button>
      <button onclick="counterChange('decrement')">-</button> 
```
2. Her iki type için seçtiğimiz counterEl elementi için adı ‘counter-change’ olan bir CustomEvent dispatch ediyoruz
---
 ![cstm](https://user-images.githubusercontent.com/109158340/194672614-45ef0665-873e-4f4e-a4d7-fb19c70a49f8.png) 
---
 3.Her iki type için seçtiğimiz counterEl elementi için adı ‘counter-change’ olan bir CustomEvent dispatch ediyoruz
 
### `Counter'ın ekran çıktısı:` 
 ![image](https://user-images.githubusercontent.com/109158340/194673562-c8edcbf0-e9d3-4c25-8654-d6204639ad5b.png)
