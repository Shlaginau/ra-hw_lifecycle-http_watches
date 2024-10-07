import adBannerImage from '../assets/ad_banner.jpg';

/**
 * Ad banner component displaying an advertisement.
 */
const AdBanner = () => {
    return (
      <div className="ad-banner">
        <img src={adBannerImage} alt="Ad banner" />
      </div>
    );
  };
  export default AdBanner;
  