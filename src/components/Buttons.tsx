import Image from "next/image";
import Link from "next/link";
import React from "react";


type ButtonProps = {
  text: string;
  icon?: string;
  type?: "primary" | "Dark" | "textonly" | "borderprimary" | "bordersecondary";
  custom?: string;
  textCustom?: string;
  size?: "small" | "medium" | "large" | "xlarge";
  shadow?: boolean;
  roundedfull? : boolean;
  href?: string;
};

function Buttons(props: ButtonProps) {
  const shadowClass = props.shadow ? "shadow-outline-primary" : "";
  const roudedfull = props.roundedfull ? "rounded-full" : "rounded-[6px]"; 
  const typeClass =
    props.type === "primary"
      ? "bg-primary-800 text-white"
      : props.type === "Dark"
      ? "bg-black"
      : props.type === "textonly"
      ? "text-primary-800"
      : props.type === "borderprimary"
      ? "border-2 border-primary-800 text-primary-800"
      : props.type === "bordersecondary"
      ? "border-2 border-[#E5E5E7] text-black bg-white"
      : "null"
  const sizeClass =
    props.size === "small"
      ? "h-small text-2XS px-[12px]"
      : props.size === "medium"
      ? "h-medium text-S px-[18px]"
      : props.size === "large"
      ? "h-large text-S px-[20px]"
      : props.size === "xlarge"
      ? "h-xlarge "
      : "null";

  return (
    <Link
      href={props.href ? props.href : ""}
      className={typeClass === "bg-black" ? `flex flex-row-reverse ${roudedfull} gap-[8px] items-center  justify-center cursor-pointer ${shadowClass} ${typeClass} ${sizeClass} ${props.custom}` : `flex gap-[8px] items-center ${roudedfull}  justify-center cursor-pointer ${shadowClass} ${typeClass} ${sizeClass} ${props.custom}`}
    >
      <p className={props.textCustom}>{props.text}</p>
      {props.icon && (
        <Image
          src={props.icon}
          width={20}
          height={20}
          alt={props.text}
          className="object-contain text-white"
        />
      )}
    </Link>
  );
}

export default Buttons;