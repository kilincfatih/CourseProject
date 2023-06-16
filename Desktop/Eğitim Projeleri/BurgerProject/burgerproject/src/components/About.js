import React from 'react';
import BannerImage from '../assets/about.jpg';
import '../styles/About.css';
export const About = () => {
  return <div className='about'>
    <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}>
    </div>
    <div className='aboutTop'>
      <h1>Hakkimizda</h1>
      <p>Fatih Burger, 2023 yılında kurulan ve kısa sürede adından sıkça söz ettiren bir restoran zinciri olarak, lezzet severlere unutulmaz bir deneyim sunmaktadır. Misafirlerimize, hızlı ve kaliteli hizmet anlayışıyla hazırlanan lezzetli burgerler sunmanın gururunu yaşıyoruz.
Kaliteli malzemeler, özenle seçilmiş tarifler ve profesyonel ekibimiz ile Fatih Burger, müşteri memnuniyetine büyük önem vermektedir. Burgerlerimizin temelinde taze ve doğal malzemeler yer alırken, benzersiz soslar ve lezzet kombinasyonlarıyla damaklarda iz bırakmayı hedefliyoruz.
Restoranlarımız, sıcak ve samimi bir atmosfer sunarak müşterilerimizin rahat bir şekilde yemeklerinin tadını çıkarmalarını sağlıyor. Konuksever personelimiz, her ziyaretçimize güler yüzlü ve profesyonel bir hizmet sunmak için çalışırken, misafirlerimizin ihtiyaçlarını öncelikli olarak ele alıyoruz.
Fatih Burger olarak, çeşitlilik konusunda da iddialıyız. Menümüzde, et severlerden ve vejetaryenlere kadar herkes için seçenekler bulunmaktadır. Zengin bir burger çeşitliliği sunarken, aynı zamanda yanında sunulan lezzetli patates kızartmaları, salatalar ve içeceklerle tam bir ziyafet sunmaktayız.
Yüksek hijyen standartlarına uyan restoranlarımızda, temizlik ve hijyen konularında titizlikle çalışıyoruz. Müşterilerimizin sağlığını ve güvenliğini ön planda tutarak, tüm işletmelerimizde hijyen protokollerine sıkı sıkıya uyuyoruz.
Ayrıca, Fatih Burger olarak sadece restoranlarımızda lezzetlerimizi sunmanın yanı sıra, online sipariş ve paket servis hizmetleriyle de müşterilerimize ulaşıyoruz. Teknolojik altyapımızı kullanarak, müşterilerimize kolaylık sağlamak ve istedikleri yerden bizimle iletişime geçmelerini sağlamak için sürekli olarak yenilikler yapıyoruz.
Misyonumuz, müşterilerimize en iyi lezzet deneyimini sunmak ve onları her seferinde memnun etmektir. Fatih Burger olarak, sürekli gelişmeyi, yaratıcılığı teşvik etmeyi ve müşterilerimizin beklentilerini aşmayı hedefliyoruz.
Lezzetin yeni adresi olan Fatih Burger, müşterilerine kalite, lezzet ve keyifli bir ortam sunmak icin her gecen gun canla basla calismaya devam etmektedir.</p>
<p>Her şey sizin için ! </p>
    </div>
  </div>
}
export default About;