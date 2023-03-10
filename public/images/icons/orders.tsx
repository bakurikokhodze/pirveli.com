import {memo} from "react";

interface IBasket {
  color?: string;
  classes?: string;
}

function Basket({color, classes}: IBasket) {
  return (
      <svg className={`${classes}`} width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.72414 6.54098L3.7931 3H1M4.72414 6.54098H19L16.9676 14.7538C16.7037 15.8201 15.703 16.5738 14.5509 16.5738H9.42834C8.30179 16.5738 7.31647 15.8526 7.02821 14.8172L4.72414 6.54098Z"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M7.5175 20.9998C8.2031 20.9998 8.75888 20.4714 8.75888 19.8195C8.75888 19.1676 8.2031 18.6392 7.5175 18.6392C6.83191 18.6392 6.27612 19.1676 6.27612 19.8195C6.27612 20.4714 6.83191 20.9998 7.5175 20.9998Z"
        />
        <path
            d="M16.2072 20.9998C16.8928 20.9998 17.4486 20.4714 17.4486 19.8195C17.4486 19.1676 16.8928 18.6392 16.2072 18.6392C15.5216 18.6392 14.9658 19.1676 14.9658 19.8195C14.9658 20.4714 15.5216 20.9998 16.2072 20.9998Z"
        />
      </svg>

  );
}

export default memo(Basket);