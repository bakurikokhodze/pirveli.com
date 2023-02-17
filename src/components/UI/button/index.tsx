interface IButton {
  text: string;
  textColor?: string;
  textSize?: number;
  bgColor?: string;
  height?: number;
  classes?: string;
}

function Button({text, classes, textColor = "#FFFFFF", textSize = 16, height = 48, bgColor = "#f5006b"}: IButton) {

  return (
      <div
          style={{
            height: height,
            transition: "0.2s linear all"
          }}
          className={`h-[${height}px] rounded-xl w-min px-4 flex justify-center items-center cursor-pointer ${classes}`}>
        <p style={{color: textColor, fontSize: textSize}}
           className={`text-[${textColor}] !text-[14px] md:!text-[${textSize}px] font-normal avenirMedium whitespace-nowrap`}
        >{text}</p>
      </div>
  );
}

export default Button;
