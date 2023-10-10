import LogoLight from "../assets/logo-light.png";
import {
   EnvelopeIcon,
   GoogleLogo,
   YoutubeLogo,
   FaceBookLogo,
   LocationIcon,
   PhoneIcon,
   TwitterLogo
} from "../assets/index.js";



export default function Footer() {
    return (
        <>

            <section id="footers" className="py-16 bg-black z-10">
                <div className="container flex flex-col justify-center items-center mx-auto px-4">
                    <div className="flex flex-wrap  mb-4">
                        <div className="w-full md:w-1/2 px-5 mb-12 lg:mb-0">
                            <a className="inline-block mb-6 text-blue-800 text-lg font-semibold" href="#" data-config-id="brand">
                                <img className="h-12" src={LogoLight} alt="" width="auto" />
                            </a>
                            <p className="mb-6 max-w-sm text-base text-gray-500" data-config-id="desc">
                                Vestibulum varius, velit sit amet tempor efficitur,
                                lacinia libero, vehicula dui nisi eget purus. Nunc
                                rutrum sed purus eget sagittis. In eleifend</p>
                            <div>
                                <a className="inline-flex items-center w-12 h-12 mr-4" href="#">
                                    <img src={FaceBookLogo} alt="" className="h-6" />
                                </a>
                                <a className="inline-flex items-center w-12 h-12 mr-4" href="#">
                                    <img src={TwitterLogo} alt="" className="h-6" />
                                </a>
                                <a className="inline-flex items-center w-12 h-12 mr-4" href="#">
                                    <img src={YoutubeLogo} alt="" className="h-6" />
                                </a>
                                <a className="inline-flex items-center w-12 h-12 mr-4" href="#">
                                    <img src={GoogleLogo} alt="" className="h-6" />
                                </a>

                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-5">
                            <div className="flex flex-wrap justify-between -mx-4">
                                <div className="w-2/5 px-4 mb-8 lg:mb-0">
                                    <h3 className="mb-4 text-base text-white" data-config-id="01_header">Contact Us</h3>
                                    <ul className="text-sm">
                                        <li className="mb-4"><a className="text-base text-gray-500 text-sm" href="#" data-config-id="01_link1">SOLENT UNIVERSITY, UK</a></li>
                                        <li className="mb-4"><a className="text-base text-gray-500 text-sm     " href="#" data-config-id="01_link2">Email:  info@studentdeals.com</a></li>
                                        <li><a className="text-base text-gray-500 text-sm" href="#" data-config-id="01_link4">Phone:  + 44 222 12345</a></li>
                                    </ul>
                                </div>
                                <div className="w-3/5  px-4 mb-8 lg:mb-0">
                                    <h3 className="mb-4 text-base font-bold text-white" data-config-id="02_header">Help & Support</h3>
                                    <ul className="text-sm">
                                        <li className="mb-4"><a className="text-base text-gray-500 text-sm     " href="#" data-config-id="02_link1">Terms  & Conditions</a></li>
                                        <li className="mb-4"><a className="text-base text-gray-500 text-sm     " href="#" data-config-id="02_link2">My acount</a></li>
                                        <li className="mb-4"><a className="text-base text-gray-500 text-sm     " href="#" data-config-id="02_link3">Deals</a></li>
                                        <li><a className="text-base text-gray-500 text-sm" href="#" data-config-id="02_link4">Contact</a></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                    <p class="text-center text-sm text-gray-500 pt-8 px-4" data-config-id="copy">StudentDeals  ©Copyright 2023.All rights  reserved</p>
                </div>
            </section>



        </>


    )
}
