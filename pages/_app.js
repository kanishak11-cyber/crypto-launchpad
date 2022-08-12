import "../styles/globals.css";
import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import logo from "../Assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { FaTelegram, FaTelegramPlane, FaTrophy } from 'react-icons/fa';
import { BsFillMicFill, BsNewspaper, BsShieldLockFill, BsImages } from 'react-icons/bs';
import Welcome from "../Components/Welcome";
import {
  FaFacebookSquare,
  FaRedditSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { HiOutlineSpeakerphone } from 'react-icons/hi';

import Link from "next/link";

const style = {
  wrapper: `gradient-bg-services text-white`,
  listContainer: `flex flex-col mt-3 justify-between `,
  listItem: `p-3 mx-2 flex my-1 Justify-center  align-center`,
  listItemText: ` text-[12px] font-semibold  w-full ml-1`,
  listItemIcon: `text-xl font-semibold`,
  listDiv: `flex w-full`,
};

function MyApp({ Component, pageProps }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <nav>
        <div className="w-full  flex-initial md:justify-center justify-between items-center p-4">
          <div className="md:flex-[0.5] justify-between items-center">
            <div className="flex flex-1 flex-row">
              <Link href="/">
                <div className="flex-row flex cursor-pointer  ">
                  <div className=" mt-3 ml-5 items-center justify-between ">
                    <Image src={logo} alt="logo" width={70} height={70} />
                  </div>
                  <div className="m-4">
                    <h1 className="text-white text-xl  md:text-2xl font-bold ">
                      Crypto
                    </h1>
                    <h1 className="text-yellow-400 text-xl md:text-2xl font-bold ">
                      LaunchPad
                    </h1>
                  </div>
                </div>
              </Link>
              <div className="white-glassmorphism align-center items-center  p-2 text-left text-sm  ">
                <h1 className="text-yellow-400">
                  Crypto<span className="text-white ml-2">Launchpad</span>
                </h1>
                <h2 className="text-center">$0.0000</h2>
              </div>
              <div className="blue-glassmorphism h-12 mt-5 m-3 flex flex-1 items-center p-2 rounded-full">
                <div className="justify-between  items-center  ">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Coin, Symbol... "
                  className="bg-transparent  w-full rounded-full text-[#eee] p-3 font-medium "
                />
              </div>

              <div className="text-white md:flex hidden  flex-row justify-between items-center flex-initial mr-2">
                {/* <button className="ml-5" onClick={`${(<Promoted />)}`}>
                  Promote{" "}
                </button> */}
                <button className="ml-5">Add Coin </button>
                <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                  Login
                </button>
              </div>
              <button className="text-4xl">
                <CgProfile />
              </button>
            </div>

            <div className="flex relative">
              {toggleMenu ? (
                <AiOutlineClose
                  fontSize={28}
                  className="text-white md:hidden cursor-pointer"
                  onClick={() => setToggleMenu(false)}
                />
              ) : (
                <HiMenuAlt4
                  fontSize={28}
                  className="text-white md:hidden cursor-pointer"
                  onClick={() => setToggleMenu(true)}
                />
              )}
              {toggleMenu && (
                <div
                  className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                >
                  <div className="text-xl w-fdivl my-2">
                    <AiOutlineClose onClick={() => setToggleMenu(false)} />
                  </div>
                  <div>
                    <button className="text-4xl flex-row flex">
                      <CgProfile />
                      Crypto Master
                    </button>
                    <hr />
                    <div className={style.listDiv}>
                      <ul className={style.listContainer}>
                        <li>
                          <button
                            type="button"
                            onClick={() => router.push("/")}
                            className={style.listItem}
                          >
                            <h1 className={style.listItemIcon}>
                              <FaTrophy />
                            </h1>
                            <h2 className=" text-[12px] font-semibold md:w-full w-[16vw] ml-1 ">
                              {" "}
                              Today&apos;s best{" "}
                            </h2>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => router.push("/Audit")}
                            className={style.listItem}
                          >
                            <h1 className=" text-xl font-semibold ">
                              <BsShieldLockFill />
                            </h1>
                            <h2 className=" text-[12px]  font-semibold  ">
                              {" "}
                              Audit{" "}
                            </h2>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => router.push("/Promote")}
                            className={style.listItem}
                          >
                            <h1 className=" text-xl font-semibold ">
                              <HiOutlineSpeakerphone />
                            </h1>
                            <h2 className=" text-[12px]  font-semibold  ">
                              {" "}
                              Promote{" "}
                            </h2>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => router.push("/Ama")}
                            className={style.listItem}
                          >
                            <h1 className=" text-xl font-semibold ">
                              <BsFillMicFill />
                            </h1>
                            <h2 className=" text-[12px] font-semibold  ml-1">
                              {" "}
                              AMA{" "}
                            </h2>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => router.push("/Airdrop")}
                            className={style.listItem}
                          >
                            <h1 className=" text-xl font-semibold ">
                              <FaTelegramPlane />
                            </h1>
                            <h2 className=" text-[12px] font-semibold ml-1 ">
                              {" "}
                              Airdrop{" "}
                            </h2>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => router.push("/Nft")}
                            className={style.listItem}
                          >
                            <h1 className=" text-xl font-semibold ">
                              <BsImages />
                            </h1>
                            <h2 className=" text-[12px]  font-semibold ml-1 ">
                              {" "}
                              NFT{" "}
                            </h2>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => router.push("/Blog")}
                            className={style.listItem}
                          >
                            <h1 className={style.listItemIcon}>
                              <BsNewspaper />
                            </h1>
                            <h2 className={style.listItemText}> Blog </h2>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => router.push("/Launchpad")}
                            className={style.listItem}
                          >
                            <Image
                              src={logo}
                              width={25}
                              height={25}
                              alt="coin"
                            />
                            <h2 className=" text-[12px]  font-semibold text-yellow-400 w-[28vw] md:w-full ml-1">
                              {" "}
                              LaunchPad{" "}
                              <span className="text-white">Token</span>{" "}
                            </h2>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => router.push("/about")}
                            className={style.listItem}
                          >
                            <h1 className=" text-xl font-semibold ">
                              <FaTelegram className="text-blue-400" />
                            </h1>
                            <h2 className=" text-[12px] font-semibold  w-[20vw] md:w-full ml-1">
                              {" "}
                              Join Our Group{" "}
                            </h2>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <hr className='' /> */}
      <Welcome />
      {/* <hr className="w-full" /> */}
      <Component {...pageProps} />
      {/*  */}
      <footer className="text-white  justify-center">
        <div className=" flex flex-row flex-1 p-5">
          <div className="flex flex-col flex-1 p-2 text-center text-xl w-1/3 justify-between">
            <ul>
              <li>
                <a href="" className="m-1">
                  Promote
                </a>
              </li>
              <li>
                <a href="" className="m-1">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="" className="m-1">
                  Documentation
                </a>
              </li>
            </ul>

            <a href="" className="m-1">
              Terms
            </a>
            <a href="" className="m-1">
              Privacy
            </a>
            <a href="" className="m-1">
              Create Airdrop
            </a>
            <a href="" className="m-1">
              Careers
            </a>
          </div>
          <div className="flex flex-1 flex-col text-center text-xl w-1/3 justify-center ">
            <a href="" className="m-1">
              watchlist
            </a>
            <a href="" className="m-1">
              Protfolio
            </a>
            <a href="" className="m-1">
              Blog
            </a>
            <a href="" className="m-1">
              Badges
            </a>
            <a href="" className="m-1">
              Audit
            </a>
            <a href="" className="m-1">
              Airdrop
            </a>
            <a href="" className="m-1">
              About Us
            </a>
          </div>
          {/* social media */}
          <div className=" grid grid-cols-3 w-1/3 text-5xl text-center justify-center ">
            <a
              href="https://www.facebook.com/groups/cryptolaunchpadofficial"
              className="items-center justify-center"
            >
              <FaFacebookSquare className="items-center justify-center" />{" "}
            </a>
            <a href="https://twitter.com/CryptoLaunchPD">
              <FaTwitterSquare />{" "}
            </a>
            <a href="https://www.reddit.com/r/CryptoLaunchPadTokens">
              <FaRedditSquare />{" "}
            </a>
          </div>
        </div>
        <div className="justify-between text-center border-t-2 flex flex-row flex-1 border-separate h-12 ">
          <h2 className=" mt-2 "> © All Right Reserved</h2>
          <h2 className=" mt-2 ">
            Crypto{" "}
            <span className="text-yellow-500 text-bold">LaunchPad 2022</span>
          </h2>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
