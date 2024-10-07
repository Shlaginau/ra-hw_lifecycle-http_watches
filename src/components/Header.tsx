/**
 * Header component contains navigation links and displays news and currency information.
 */
const Header = () => {
    const newsData = [
      { icon: 'icon1.png', text: 'Новость 1', link: '#' },
      { icon: 'icon2.png', text: 'Новость 2', link: '#' },
      { icon: 'icon3.png', text: 'Новость 3', link: '#' },
      { icon: 'icon4.png', text: 'Новость 4', link: '#' },
      { icon: 'icon5.png', text: 'Новость 5', link: '#' },
    ];
  
    return (
      <header>
        <div className="news-and-info">
          <div className="news-links">
            <a href="#">Сейчас в СМИ</a>
            <a href="#">в Германии</a>
            <a href="#">Рекомендуем</a>
          </div>
          
          <ul>
            {newsData.map((news, index) => (
              <li key={index}>
                <img src={news.icon} alt="icon" />
                <a href={news.link}>{news.text}</a>
              </li>
            ))}
          </ul>
  
          <div className="currency">
            USD MOEX 63,52 +0,09 | EUR MOEX 70,86 +0,14 | НЕФТЬ 64,90 +1,63%
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  