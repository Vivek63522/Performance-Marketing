import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { PhoneRing } from "reicon-react";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-brand-secondary overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-4 flex items-center ">
        {/* Left Side: Info */}
        <div className="flex items-center m-0 gap-12.5">
          <div className="flex items-center text-brand-text-gray text-[14px] font-semibold leading-[1.2857]">
            <FaMapMarkerAlt size={12} className="text-brand-base mr-2.25" />
            <span>Surat</span>
          </div>
          <div className="flex items-center text-brand-text-gray text-[14px] font-semibold leading-[1.2857]">
            <FaEnvelope size={12} className="text-brand-base mr-[9px]" />
            <a
              href="mailto:support@manishvermaconsulting.co.in"
              className="text-inherit bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] text-brand-text-gray! bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] hover:text-brand-white!"
            >
              support@manishvermaconsulting.co.in
            </a>
          </div>
        </div>

        {/* Right Side: Call & Social */}
        <div className="py-[12px] relative z-[1] flex items-center mt-0 ml-auto before:content-[''] before:bg-brand-base before:-z-10 before:w-[9999999px] before:h-full before:absolute before:top-0 before:left-[99%] after:content-[''] after:bg-brand-base after:-z-10 after:w-[95%] after:h-full after:absolute after:top-0 after:right-0">
          <div className="group flex items-center gap-[10px] pr-[20px] mr-[20px] border-r border-brand-secondary/40">
            <div className="w-[30px] h-[30px] rounded-full bg-brand-gray text-brand-secondary text-[15px] flex items-center justify-center transition-all duration-400 ease-in-out group-hover:bg-brand-white group-hover:text-brand-base">
              <PhoneRing weight="Filled" size={18} className="fill-current" />
            </div>
            <a
              href="tel:+917984473600"
              className="m-0 p-0 text-brand-text-dark! text-[16px] font-semibold leading-[1.875] bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px]"
            >
              +91 7984473600
            </a>
          </div>

          <div className="flex items-center leading-none gap-[18px]">
            <Link
              href="#"
              className="text-[14px] text-brand-text-dark! transition-all duration-500 hover:text-brand-white!"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="text-[14px] text-brand-text-dark! transition-all duration-500 hover:text-brand-white!"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-[14px] text-brand-text-dark! transition-all duration-500 hover:text-brand-white!"
            >
              <FaYoutube />
            </Link>
            <Link
              href="#"
              className="text-[14px] text-brand-text-dark! transition-all duration-500 hover:text-brand-white!"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
