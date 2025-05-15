import { Link } from "react-router";
import LogoImage from "../../assets/images/logo.png";
import MobileLogoImage from "../../assets/images/mobile-logo.png";
import CheckoutLockIcon from "../../assets/images/icons/checkout-lock-icon.png";
import "./CheckoutHeader.css";

export function CheckoutHeader() {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/">
            <img className="logo" src={LogoImage} />
            <img className="mobile-logo" src={MobileLogoImage} />
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            3 items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src={CheckoutLockIcon} />
        </div>
      </div>
    </div>
  );
}
