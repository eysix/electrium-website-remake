import Image from 'next/image'

import '../styles/about.scss'

export default function Home() {
    return (
      <div>
        <main>
            <section>
            <>
              <nav id="topnav" className="defaultscroll is-sticky">
                <div className="container">
                  {/* Logo container*/}
                  <a className="logo" href="index.html">
                    <img
                      src="assets/logos/logo-light-mode.png"
                      width={180}
                      className="inline-block dark:hidden"
                      alt=""
                    />
                    <img
                      src="assets/logos/logo-dark-mode.png"
                      width={180}
                      className="hidden dark:inline-block"
                      alt=""
                    />
                  </a>
                  {/* End Logo container*/}
                  <div className="menu-extras">
                    <div className="menu-item">
                      {/* Mobile menu toggle*/}
                      <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                        <div className="lines">
                          <span />
                          <span />
                          <span />
                        </div>
                      </a>
                      {/* End mobile menu toggle*/}
                    </div>
                  </div>
                  {/*Login button Start*/}
                  <ul className="buy-button list-none mb-0">
                    <li className="inline mb-0">
                      <a
                        href=""
                        className="btn btn-icon rounded-full bg-green-600/5 hover:bg-green-600 border-green-600/10 hover:border-green-600 text-green-600 hover:text-white"
                      >
                        <i data-feather="dollar-sign" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href="https://www.youtube.com/@electriummobility"
                        target="_blank"
                        className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
                      >
                        <i data-feather="youtube" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href="https://www.instagram.com/electriummobility/"
                        target="_blank"
                        className="btn btn-icon rounded-full bg-pink-600/5 hover:bg-pink-600 border-pink-600/10 hover:border-pink-600 text-pink-600 hover:text-white"
                      >
                        <i data-feather="instagram" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href="https://discord.gg/jggFVza4XR"
                        target="_blank"
                        className="btn btn-icon rounded-full bg-purple-500/5 hover:bg-purple-500 border-purple-500/10 hover:border-purple-500 text-purple-500 hover:text-white"
                      >
                        <svg
                          className="h-4 w-4"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Discord</title>
                          <path
                            fill="currentColor"
                            d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href="http://www.linkedin.com/company/electrium-mobility/"
                        target="_blank"
                        className="btn btn-icon rounded-full bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white"
                      >
                        <i data-feather="linkedin" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href="mailto:electriummobility@gmail.com"
                        target="_blank"
                        className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
                      >
                        <i data-feather="mail" className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                  {/*Login button End*/}
                  <div id="navigation">
                    {/* Navigation Menu*/}
                    <ul className="navigation-menu">
                      {/* <li><a href="index.html" class="sub-menu-item">Home</a></li> */}
                      <li>
                        <a href="about.html" className="">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="team.html" className="">
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="sponsors.html" className="">
                          Sponsors
                        </a>
                      </li>
                      {/* <li><a href="index.html" class="sub-menu-item">FAQs</a></li> */}
                      <li className="has-submenu parent-menu-item">
                        <a href="projects.html">Projects</a>
                        <span className="menu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="documentation-electric-bike.html" className="">
                              Electric Bike
                            </a>
                          </li>
                          <li>
                            <a href="documentation-electric-skateboard.html" className="">
                              Electric Skateboard
                            </a>
                          </li>
                          <li>
                            <a href="documentation-onewheel.html" className="">
                              Onewheel
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="competitions.html" className="">
                          Competitions
                        </a>
                      </li>
                      <li>
                        <a href="contact.html" className="">
                          Contact
                        </a>
                      </li>
                    </ul>
                    {/*end navigation menu*/}
                  </div>
                  {/*end navigation*/}
                </div>
                {/*end container*/}
              </nav>
              {/*end header*/}
              {/* End Navbar */}
              {/* Start Section*/}
              <section className="relative md:py-24 py-16">
                {/* ***************************************************************************************************************** */}
                {/*                                             CONTACT INFORMATION                                                   */}
                {/* ***************************************************************************************************************** */}
                <div className="container">
                  <div className="grid grid-cols-1 pt-16 pb-8 text-center">
                    <h3 className="pt-12 mb-4 md:leading-normal text-4xl leading-normal font-semibold">
                      Contact Us
                    </h3>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                      Have any questions? <br />
                      Interested in learning more about Electrium? <br />
                      Let's chat!
                    </p>
                  </div>
                  {/*end grid*/}
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    <div className="text-center px-6 mt-6">
                      <div className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                        <i className="uil uil-envelope" />
                      </div>
                      <div className="content mt-7">
                        <h5 className="title h5 text-xl font-medium">Email</h5>
                        <div className="mt-5">
                          <a
                            href="mailto:electriummobility@gmail.com"
                            className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                          >
                            electriummobility@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="text-center px-6 mt-6">
                      <div className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                        <i className="uil uil-discord" />
                      </div>
                      <div className="content mt-7">
                        <h5 className="title h5 text-xl font-medium">Discord</h5>
                        <div className="mt-5">
                          <a
                            href="https://discord.gg/jggFVza4XR"
                            target="_blank"
                            className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                          >
                            Join our discord server
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="text-center px-6 mt-6">
                      <div className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                        <i className="uil uil-instagram" />
                      </div>
                      <div className="content mt-7">
                        <h5 className="title h5 text-xl font-medium">Instagram</h5>
                        <div className="mt-5">
                          <a
                            href="https://www.instagram.com/electriummobility/"
                            target="_blank"
                            className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                          >
                            Message us on instagram
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end grid*/}
                  <br />
                  <br />
                </div>
                {/*end container*/}
              </section>
              {/* ***************************************************************************************************************** */}
              {/*                                             SEND A MESSAGE FORM                                                   */}
              {/* ***************************************************************************************************************** */}
              <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container">
                  <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-6 md:col-span-6">
                      <img src="assets/graphics/message.svg" alt="" />
                    </div>
                    <div className="lg:col-span-6 md:col-span-6 mt-8 md:mt-0">
                      <div className="ltr:lg:ml-5 rtl:lg:mr-5">
                        <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                          <h3 className="mb-6 text-2xl leading-normal font-medium">
                            Get in touch!
                          </h3>
                          <form
                            action="mailto:contact@electriummobility.com"
                            method="post"
                            name="myForm"
                            id="myForm"
                            onsubmit="return validateForm()"
                          >
                            <p className="mb-0" id="error-msg" />
                            <div id="simple-msg" />
                            <div className="grid lg:grid-cols-12 lg:gap-6">
                              <div className="lg:col-span-6 mb-5">
                                <div className="ltr:text-left rtl:text-right">
                                  <label htmlFor="name" className="font-semibold">
                                    Your Name:
                                  </label>
                                  <div className="form-icon relative mt-2">
                                    <i
                                      data-feather="user"
                                      className="w-4 h-4 absolute top-3 ltr:left-4 rtl:right-4"
                                    />
                                    <input
                                      name="name"
                                      id="name"
                                      type="text"
                                      className="form-input ltr:pl-11 rtl:pr-11"
                                      placeholder="Name:"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="lg:col-span-6 mb-5">
                                <div className="ltr:text-left rtl:text-right">
                                  <label htmlFor="email" className="font-semibold">
                                    Your Email:
                                  </label>
                                  <div className="form-icon relative mt-2">
                                    <i
                                      data-feather="mail"
                                      className="w-4 h-4 absolute top-3 ltr:left-4 rtl:right-4"
                                    />
                                    <input
                                      name="email"
                                      id="email"
                                      type="email"
                                      className="form-input ltr:pl-11 rtl:pr-11"
                                      placeholder="Email:"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-1">
                              <div className="mb-5">
                                <div className="ltr:text-left rtl:text-right">
                                  <label htmlFor="subject" className="font-semibold">
                                    Your Question:
                                  </label>
                                  <div className="form-icon relative mt-2">
                                    <i
                                      data-feather="book"
                                      className="w-4 h-4 absolute top-3 ltr:left-4 rtl:right-4"
                                    />
                                    <input
                                      name="subject"
                                      id="subject"
                                      className="form-input ltr:pl-11 rtl:pr-11"
                                      placeholder="Subject:"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="mb-5">
                                <div className="ltr:text-left rtl:text-right">
                                  <label htmlFor="comments" className="font-semibold">
                                    Your Comment:
                                  </label>
                                  <div className="form-icon relative mt-2">
                                    <i
                                      data-feather="message-circle"
                                      className="w-4 h-4 absolute top-3 ltr:left-4 rtl:right-4"
                                    />
                                    <textarea
                                      name="comments"
                                      id="comments"
                                      className="form-input ltr:pl-11 rtl:pr-11 h-28"
                                      placeholder="Message:"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="submit"
                              id="submit"
                              name="send"
                              className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md justify-center flex items-center"
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end container*/}
              </section>
              {/*end section*/}
              {/* End Section*/}
              {/* Footer Start */}
              <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
                <div className="container">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12">
                      <div className="py-[60px] px-0">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                          <div className="lg:col-span-4 md:col-span-12">
                            <a href="#" className="text-[22px] focus:outline-none">
                              <img
                                src="assets/logos/logo-dark-mode.png"
                                width={250}
                                alt=""
                              />
                            </a>
                            <p className="mt-6 text-gray-300">
                              Hi, we're Electrium Mobility! We're a student design team in
                              the Sedra Student Design Centre at the University of Waterloo.
                            </p>
                            <ul className="list-none mt-6">
                              {/* <li class="inline"><a href="https://www.instagram.com/electriummobility/" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-instagram align-middle" title="instagram"></i></a></li>
                                              <li class="inline"><a href="https://discord.gg/jggFVza4XR" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-discord align-middle" title="discord"></i></a></li>
                                              <li class="inline"><a href="http://www.linkedin.com/company/electrium-mobility/" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-linkedin" title="Linkedin"></i></a></li>
                                              <li class="inline"><a href="" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-youtube align-middle" title="youtube"></i></a></li>
                                              <li class="inline"><a href="mailto:electriummobility@gmail.com" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-envelope align-middle" title="email"></i></a></li> */}
                              <li className="inline mb-0">
                                <a
                                  href=""
                                  className="btn btn-icon rounded-full bg-green-600/5 hover:bg-green-600 border-green-600/10 hover:border-green-600 text-green-600 hover:text-white"
                                >
                                  <i data-feather="dollar-sign" className="h-4 w-4" />
                                </a>
                              </li>
                              <li className="inline mb-0">
                                <a
                                  href="https://www.youtube.com/@electriummobility"
                                  target="_blank"
                                  className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
                                >
                                  <i data-feather="youtube" className="h-4 w-4" />
                                </a>
                              </li>
                              <li className="inline mb-0">
                                <a
                                  href="https://www.instagram.com/electriummobility/"
                                  target="_blank"
                                  className="btn btn-icon rounded-full bg-pink-600/5 hover:bg-pink-600 border-pink-600/10 hover:border-pink-600 text-pink-600 hover:text-white"
                                >
                                  <i data-feather="instagram" className="h-4 w-4" />
                                </a>
                              </li>
                              <li className="inline mb-0">
                                <a
                                  href="https://discord.gg/jggFVza4XR"
                                  target="_blank"
                                  className="btn btn-icon rounded-full bg-purple-500/5 hover:bg-purple-500 border-purple-500/10 hover:border-purple-500 text-purple-500 hover:text-white"
                                >
                                  <svg
                                    className="h-4 w-4"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <title>Discord</title>
                                    <path
                                      fill="currentColor"
                                      d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                                    />
                                  </svg>
                                </a>
                              </li>
                              <li className="inline mb-0">
                                <a
                                  href="http://www.linkedin.com/company/electrium-mobility/"
                                  target="_blank"
                                  className="btn btn-icon rounded-full bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white"
                                >
                                  <i data-feather="linkedin" className="h-4 w-4" />
                                </a>
                              </li>
                              <li className="inline mb-0">
                                <a
                                  href="mailto:electriummobility@gmail.com"
                                  target="_blank"
                                  className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
                                >
                                  <i data-feather="mail" className="h-4 w-4" />
                                </a>
                              </li>
                            </ul>
                            {/*end icon*/}
                          </div>
                          {/*end col*/}
                          <div className="lg:col-span-2 md:col-span-4">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold">
                              Pages
                            </h5>
                            <ul className="list-none footer-list mt-6">
                              <li>
                                <a
                                  href="about.html"
                                  className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                >
                                  <i className="uil uil-angle-right-b" /> About
                                </a>
                              </li>
                              <li className="mt-[10px]">
                                <a
                                  href="team.html"
                                  className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                >
                                  <i className="uil uil-angle-right-b" /> Team
                                </a>
                              </li>
                              <li className="mt-[10px]">
                                <a
                                  href="contact.html"
                                  className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                >
                                  <i className="uil uil-angle-right-b" /> Contact
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/*end col*/}
                          <div className="lg:col-span-3 md:col-span-4">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold">
                              Recent Projects
                            </h5>
                            <ul className="list-none footer-list mt-6">
                              <li>
                                <a
                                  href="documentation-electric-bike.html"
                                  className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                >
                                  <i className="uil uil-angle-right-b" /> Electric Bike
                                </a>
                              </li>
                              <li className="mt-[10px]">
                                <a
                                  href="documentation-electric-skateboard.html"
                                  className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                >
                                  <i className="uil uil-angle-right-b" /> Electric
                                  Skateboard
                                </a>
                              </li>
                              <li className="mt-[10px]">
                                <a
                                  href="documentation-onewheel.html"
                                  className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                >
                                  <i className="uil uil-angle-right-b" /> Onewheel
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/*end col*/}
                          <div className="lg:col-span-3 md:col-span-4">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold">
                              Get involved
                            </h5>
                            <div className="grid grid-cols-1">
                              <a
                                href="join-our-team.html"
                                className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md mt-6"
                              >
                                <button type="submit" id="submitsubscribe" name="send">
                                  Join Our Team
                                </button>
                              </a>
                              <a
                                href="become-a-sponsor.html"
                                className="btn bg-transparent hover:bg-green-600 border-green-600 text-green-600 hover:text-white rounded-md mt-3"
                              >
                                <button type="submit" id="submitsubscribe" name="send">
                                  Become A Sponsor
                                </button>
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end grid*/}
                      </div>
                      {/*end col*/}
                    </div>
                  </div>
                  {/*end grid*/}
                </div>
                {/*end container*/}
                <div className="py-[30px] px-0 border-t border-slate-800">
                  <div className="container text-center">
                    <div className="grid md:grid-cols-2 items-center">
                      <div className="ltr:md:text-left rtl:md:text-right text-center">
                        <p className="mb-0">© Electrium Mobility. All Rights Reserved.</p>
                      </div>
                    </div>
                    {/*end grid*/}
                  </div>
                  {/*end container*/}
                </div>
              </footer>
              {/*end footer*/}
              {/* Footer End */}
            </>
              
            </section>
        </main>
      </div>
    )
}