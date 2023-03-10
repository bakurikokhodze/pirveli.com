interface IICON {
  color?: string;
  classes?: string;
}

function Vouchers({color, classes}: IICON) {
  return (

  <svg className={`${classes}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 6.12C21 5.50145 20.4442 5 19.7586 5H4.24138C3.55579 5 3 5.50144 3 6.12V7.57114C3 8.09052 3.40761 8.52591 3.91898 8.7644C5.21651 9.36952 6.10345 10.5913 6.10345 12C6.10345 13.4087 5.21651 14.6304 3.91898 15.2356C3.40761 15.4741 3 15.9095 3 16.4288V17.88C3 18.4986 3.55578 19 4.24138 19H19.7586C20.4442 19 21 18.4986 21 17.88V16.4288C21 15.9095 20.5923 15.4741 20.081 15.2356C18.7835 14.6304 17.8966 13.4087 17.8966 12C17.8966 10.5913 18.7835 9.36952 20.081 8.7644C20.5923 8.52591 21 8.09052 21 7.57114V6.12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

);
}

export default Vouchers;