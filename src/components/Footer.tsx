/**
 * Footer component containing additional links and information.
 */
const Footer = () => {
    return (
      <div className="footer-content">
        <div className="footer-block">
          <h2>Посещаемое</h2>
          <a href="#">Недвижимость — о сталинках</a>
          <a href="#">Маркет — люстры и светильники</a>
          <a href="#">Авто.ру — привод 4x4 до 500 000</a>
        </div>
        <div className="footer-block">
          <h2>Карта Германии</h2>
          <p>Расписание</p>
          <p>Телепрограмма</p>
          <a href="#">02:00 ТНТ. Best</a>
          <a href="#">02:15 Джинглики</a>
          <a href="#">02:25 Наедине со всеми</a>
        </div>
        <div className="footer-block">
          <h2>Эфир</h2>
          <a href="#">Управление как искусство</a>
          <a href="#">Ночь. Мир в это время</a>
          <a href="#">Андрей Вознесенский. Совершенно секретно</a>
        </div>
      </div>
    );
  };
  export default Footer;
  