interface IHome {
  color?: string;
  classes?: string;
  width?: number;
  height?: number;
}

function search({color, classes, width = 13, height = 14}: IHome) {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3277_6317)">
          <path
              d="M21 21L16.3448 16.3448L21 21ZM3 10.7586C3 6.47365 6.47365 3 10.7586 3C15.0436 3 18.5172 6.47365 18.5172 10.7586C18.5172 15.0436 15.0436 18.5172 10.7586 18.5172C6.47365 18.5172 3 15.0436 3 10.7586Z"
              stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_3277_6317">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>


  );
}

export default search;