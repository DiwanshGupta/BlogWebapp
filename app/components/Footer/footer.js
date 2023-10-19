import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <div
      id="footer"
      className=" rounded-t-3xl md:bg-opacity-60 items-center flex flex-col  justify-center "
    >
      <div className="flex md:flex-row text-red-600 p-5   border-b-4 w-3/4  justify-between flex-col">
        <div className="md:w-2/5 my-2">
          <div
            className="text-2xl font-semibold hover:text-yellow-200"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            DevBlogs
          </div>
          <div data-aos="fade-down" data-aos-delay="200">
            Thank you for visiting my Blog website.
          </div>
        </div>
        <div
          className="md:w-1/3 my-2 "
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div
            className=" font-semibold hover:text-yellow-200 text-2xl "
            data-aos="fade-down"
          >
            Contact
          </div>
          <div>
            <ul>
              <li className="flex-row flex items-center">
                {" "}
                <div>
                  <FontAwesomeIcon
                    className="text-yellow-600 text-sm mx-1"
                    icon={faPhone}
                  />
                </div>
                <Link href="mailto:dewanshgupta120@gmail.com">
                  <div>: dewanshgupta120@gmail.com</div>
                </Link>
              </li>
              <li className="flex-row flex items-center">
                {" "}
                <div>
                  {" "}
                  <FontAwesomeIcon
                    className="text-yellow-600 text-sm mx-1 "
                    icon={faEnvelope}
                  />
                </div>
                <div>
                  <Link href="tel:+918800782753">: +91 8800782753</Link>
                </div>
              </li>
              <li className="flex-row flex items-center">
                <div>
                  <FontAwesomeIcon
                    className="text-yellow-600 text-base mx-1  "
                    icon={faLocationDot}
                  />
                </div>
                <div>: Delhi-110033</div>
              </li>
              <li className="text-2xl">
                <div className="flex flex-row my-3">
                  {" "}
                  <div className="mx-5" data-aos-delay="100">
                    {" "}
                    <a
                      href="https://api.whatsapp.com/send?phone=918800782753"
                      target="_blank"
                    >
                      {/* <a target="_blank" rel="noopener noreferrer"> */}
                      <FontAwesomeIcon
                        className="hover:text-green-600  rounded-xl"
                        icon={faWhatsapp}
                      />{" "}
                      {/* </a> */}
                    </a>
                  </div>
                  <div className="mx-5" data-aos-delay="200">
                    {" "}
                    <a href="https://github.com/DiwanshGupta">
                      <FontAwesomeIcon
                        className="hover:bg-black rounded-full"
                        icon={faGithub}
                      />
                    </a>
                  </div>
                  <div className="mx-5 m-auto" data-aos-delay="300">
                    <a href="https://www.linkedin.com/in/diwansh-gupta-568027237">
                      <FontAwesomeIcon
                        className="hover:text-blue-900 hover:bg-transparent "
                        icon={faLinkedin}
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-yellow-400">
        © 2023 Copyright:Diwansh Gupta Devblogs
      </div>
    </div>
  );
}

export default Footer;
