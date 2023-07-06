export default function electricbike() {
  return (
    <>
  <meta charSet="UTF-8" />
  <title>Electric Bike - Electrium Mobility</title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="theme-color" content="#40B549" />
  <meta name="og:image" content="/assets/logos/favicon.png" />
  <meta
    name="description"
    content="Electrium Mobility is a design team in the Sedra Student Design Center in the University of Waterloo. Our goal is to create personal electric vehicles!"
  />
  <meta
    name="keywords"
    content="evehicle, sustainability, waterloo, design team, bike, scooter, skateboard, electric"
  />
  <meta name="author" content="Shreethemes" />
  <meta name="version" content="1.7.0" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* favicon */}
  <link rel="shortcut icon" href="assets/logos/favicon.png" sizes="32x32" />
  {/* Css */}
  <link href="assets/libs/tiny-slider/tiny-slider.css" rel="stylesheet" />
  {/* Main Css */}
  <link
    href="assets/libs/@iconscout/unicons/css/line.css"
    type="text/css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="assets/css/icons.css" />
  <link rel="stylesheet" href="assets/css/tailwind.css" />
  {/* Loader Start */}
  {/* <div id="preloader">
      <div id="status">
          <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
          </div>
      </div>
  </div> */}
  {/* Loader End */}
  {/* Start Navbar */}
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
            {/* <i data-feather="message-circle" class="h-4 w-4"></i> */}
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
          <li>
            <a href="index.html" className="sub-menu-item">
              Home
            </a>
          </li>
          <li>
            <a href="about.html" className="sub-menu-item">
              About
            </a>
          </li>
          <li>
            <a href="team.html" className="sub-menu-item">
              Team
            </a>
          </li>
          {/* <li><a href="index.html" class="sub-menu-item">FAQs</a></li> */}
          <li className="has-submenu parent-menu-item">
            <a href="javascript:void(0)">Projects</a>
            <span className="menu-arrow" />
            <ul className="submenu">
              <li>
                <a
                  href="documentation-electric-bike.html"
                  className="sub-menu-item"
                >
                  Electric Bike
                </a>
              </li>
              <li>
                <a
                  href="documentation-electric-skateboard.html"
                  className="sub-menu-item"
                >
                  Electric Skateboard
                </a>
              </li>
              <li>
                <a href="documentation-onewheel.html" className="sub-menu-item">
                  Onewheel
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="competitions.html" className="sub-menu-item">
              Competitions
            </a>
          </li>
          <li>
            <a href="contact.html" className="sub-menu-item">
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
  {/* Start Hero */}
  <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
    <div className="container">
      <div className="grid grid-cols-1 text-center mt-10">
        <h3 className="text-3xl leading-normal font-semibold">Electric Bike</h3>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
    <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
      <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block">
        <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out">
          Electrium Mobility
        </li>
        <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out">
          Projects
        </li>
        <li
          className="inline breadcrumb-item uppercase text-[13px] font-bold text-green-600"
          aria-current="page"
        >
          Electric Bike
        </li>
      </ul>
    </div>
  </section>
  {/*end section*/}
  <div className="relative">
    <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
      <svg
        className="w-full h-auto"
        viewBox="0 0 2880 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
  {/* End Hero */}
  {/* Start Section*/}
  <section className="relative md:py-24 py-16">
    <div className="container">
      <div className="grid grid-cols-1">
        <div className="tiny-single-item">
          <div className="tiny-slide">
            <div className="m-2">
              <img
                src="assets/images/portfolio/16.jpg"
                className="rounded-md shadow dark:shadow-gray-800"
                alt=""
              />
            </div>
          </div>
          <div className="tiny-slide">
            <div className="m-2">
              <img
                src="assets/images/portfolio/17.jpg"
                className="rounded-md shadow dark:shadow-gray-800"
                alt=""
              />
            </div>
          </div>
          <div className="tiny-slide">
            <div className="m-2">
              <img
                src="assets/images/portfolio/18.jpg"
                className="rounded-md shadow dark:shadow-gray-800"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container md:mt-24 mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div className="lg:col-span-4 md:col-span-5">
          <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md">
            <h5 className="text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">
              Project Info:
            </h5>
            <dl className="grid grid-cols-12 mb-0">
              <dt className="md:col-span-6 col-span-6 mt-2">Term:</dt>
              <dd className="md:col-span-6 col-span-6 mt-2 text-slate-400">
                Spring 2023
              </dd>
              <dt className="md:col-span-6 col-span-6 mt-2">
                Electrical Lead:
              </dt>
              <dd className="md:col-span-6 col-span-6 mt-2 text-slate-400">
                Sherwin Chiu
              </dd>
              <dt className="md:col-span-6 col-span-6 mt-2">Firmware Lead:</dt>
              <dd className="md:col-span-6 col-span-6 mt-2 text-slate-400">
                Sherwin Chiu
              </dd>
              <dt className="md:col-span-6 col-span-6 mt-2">
                Mechanical Lead:
              </dt>
              <dd className="md:col-span-6 col-span-6 mt-2 text-slate-400">
                Sherwin Chiu
              </dd>
            </dl>
          </div>
        </div>
        {/*end col*/}
        <div className="lg:col-span-8 md:col-span-7">
          <div className="ltr:lg:mr-5 rtl:lg:ml-5">
            <h4 className="text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">
              Project Description:
            </h4>
            <p className="text-slate-400">
              <i>Turbo</i> is far superior than your average bike, travelling at
              a max speed of 20 km/h. The bike can carry a maximum capacity of
              100 kg. It has a battery life of 5 hours but can function as a
              regular bike. No hill is too steep, no destination is too far. Our
              state-of-the-art battery and motor deliver incredible range and
              power, ensuring you'll reach your destination effortlessly, no
              matter the terrain.
            </p>
            <p className="text-slate-400 mt-2">
              And it's not just for commuters. With its ergonomic design and
              adjustable seating, the Zephyr electric bike is perfect for riders
              of all ages and fitness levels. Imagine creating unforgettable
              memories as you explore new trails, embark on family adventures,
              or simply enjoy a Sunday ride together.
            </p>
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*end grid*/}
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
  {/* Back to top */}
  <a
    href="#"
    onclick="topFunction()"
    id="back-to-top"
    className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 ltr:right-5 rtl:left-5 h-9 w-9 text-center bg-green-600 text-white leading-9"
  >
    <i className="uil uil-arrow-up" />
  </a>
  {/* Back to top */}
  {/* Switcher */}
  <div className="fixed top-[30%] -right-2 z-50">
    <span className="relative inline-block rotate-90">
      <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
      <label
        className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
        htmlFor="chk"
      >
        <i className="uil uil-moon text-[20px] text-yellow-500" />
        <i className="uil uil-sun text-[20px] text-yellow-500" />
        <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7" />
      </label>
    </span>
  </div>
  {/* Switcher */}
  {/* JAVASCRIPTS */}
  {/* JAVASCRIPTS */}
</>

  )
}
