import Image from 'next/image'

export default function Home() {
  return (
    <>
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
          className="inline-block dark:hidden"
          alt=""
          width={180}
        />
        <img
          src="assets/logos/logo-dark-mode.png"
          className="hidden dark:inline-block"
          alt=""
          width={180}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-dollar-sign h-4 w-4"
            >
              <line x1={12} y1={1} x2={12} y2={23} />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </a>
        </li>
        <li className="inline mb-0">
          <a
            href="https://www.youtube.com/@electriummobility"
            target="_blank"
            className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-youtube h-4 w-4"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
        </li>
        <li className="inline mb-0">
          <a
            href="https://www.instagram.com/electriummobility/"
            target="_blank"
            className="btn btn-icon rounded-full bg-pink-600/5 hover:bg-pink-600 border-pink-600/10 hover:border-pink-600 text-pink-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram h-4 w-4"
            >
              <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin h-4 w-4"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x={2} y={9} width={4} height={12} />
              <circle cx={4} cy={4} r={2} />
            </svg>
          </a>
        </li>
        <li className="inline mb-0">
          <a
            href="mailto:electriummobility@gmail.com"
            target="_blank"
            className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-mail h-4 w-4"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
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
  {/* ***************************************************************************************************************** */}
  {/*                                                        BANNER                                                     */}
  {/* ***************************************************************************************************************** */}
  {/* Start Hero */}
  <section className="relative table w-full py-36 lg:py-44">
    <div className="container">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
        <div className="md:col-span-7">
          <div className="ltr:md:mr-6 rtl:md:ml-6">
            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
              Building{" "}
              <span className="text-green-600">Sustainable, Affordable</span>{" "}
              Transportation
            </h4>
            <p className="text-slate-400 text-lg max-w-xl">
              Electrium Mobility is a student design team based at the
              University of Waterloo. Our goal is to create sustainable and
              affordable transportation in the form of Personal Electric
              Vehicles.
            </p>
            <div className="mt-6">
              <a
                href="join-our-team.html"
                className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md ltr:mr-2 rtl:ml-2 mt-2"
              >
                {" "}
                Join Our Team{" "}
              </a>
              <a
                href="sponsors.html"
                className="btn bg-transparent hover:bg-green-600 border-green-600 text-green-600 hover:text-white rounded-md mt-2"
              >
                {" "}
                Become A Sponsor
              </a>
            </div>
          </div>
        </div>
        {/*end col*/}
        <div className="md:col-span-5">
          <img src="assets/graphics/bike-graphic-2.svg" alt="" />
        </div>
        {/*end col*/}
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
  </section>
  {/*end section*/}
  {/* End Hero */}
  {/* ***************************************************************************************************************** */}
  {/*                                                        SPONSORS                                                   */}
  {/* ***************************************************************************************************************** */}
  {/* Business Partner */}
  {/* <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700">
      <div class="container">
          <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
              <div class="mx-auto py-4">
                  <img src="assets/images/client/amazon.svg" class="h-6" alt="">
              </div>

              <div class="mx-auto py-4">
                  <img src="assets/images/client/google.svg" class="h-6" alt="">
              </div>
              
              <div class="mx-auto py-4">
                  <img src="assets/images/client/lenovo.svg" class="h-6" alt="">
              </div>
              
              <div class="mx-auto py-4">
                  <img src="assets/images/client/paypal.svg" class="h-6" alt="">
              </div>
              
              <div class="mx-auto py-4">
                  <img src="assets/images/client/shopify.svg" class="h-6" alt="">
              </div>
              
              <div class="mx-auto py-4">
                  <img src="assets/images/client/spotify.svg" class="h-6" alt="">
              </div>
          </div>
      </div>
  </section> */}
  {/* Business Partner */}
  {/* ***************************************************************************************************************** */}
  {/*                                              WHO WE ARE + WHAT WE DO                                              */}
  {/* ***************************************************************************************************************** */}
  {/* Start */}
  <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
    <div className="container">
      <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
        <div className="lg:col-span-5">
          <img src="assets/graphics/skateboard-graphic.svg" alt="" />
        </div>
        <div className="lg:col-span-7 mt-8 md:mt-0">
          <div className="ltr:lg:ml-10 rtl:lg:mr-10">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              We're Electrium Mobility,
            </h3>
            <p className="text-slate-400 max-w-xl">
              Welcome to Electrium Mobility, a student-led design team located
              at the Sedra Student Design Center at the University of Waterloo.
              Comprised of passionate individuals, we are committed to shaping
              the future of transportation through the creation of electric
              vehicles. With a strong focus on sustainability and innovation,
              our mission is to increase awareness and promote the adoption of
              greener transportation options.{" "}
            </p>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2" />{" "}
                Innovative Design
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2" />{" "}
                Affordability and Accessibility
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2" />{" "}
                Collaborative Approach
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
    <br />
    <br />
    <br />
    <br />
    <div className="container md:mt-24 mt-16">
      <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
        <div className="lg:col-span-5 md:order-2 order-1">
          <img src="assets/graphics/what-we-do-graphic.svg" alt="" />
        </div>
        <div className="lg:col-span-7 md:order-1 order-2 mt-8 md:mt-0">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            What We Do
          </h3>
          <p className="text-slate-400 max-w-xl">
            At Electrium Mobility, we are driven by a shared vision of
            revolutionizing the automotive industry through the development of
            cutting-edge electric vehicles. Using our expertise in engineering,
            we aim to create affordable electric vehicles that deliver
            outstanding performance and efficiency. Through our various
            projects, collaborations, and educational initiatives, we are
            actively advocating for the economic benefits and positive
            environmental impact of electric vehicles. Our ultimate goal is to
            inspire and equip students with the knowledge and skills necessary
            to contribute to the future of electric mobility.
          </p>
          <ul className="list-none text-slate-400 mt-4">
            <li className="mb-1 flex">
              <i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2" />{" "}
              Design and Build
            </li>
            <li className="mb-1 flex">
              <i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2" />{" "}
              Awareness and Education
            </li>
            <li className="mb-1 flex">
              <i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2" />{" "}
              Sustainable and Affordable Transportation
            </li>
          </ul>
          <br />
          <div className="mt-4">
            <a
              href="about.html"
              className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
            >
              Read More <i className="uil uil-angle-right-b align-middle" />
            </a>
          </div>
        </div>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
  </section>
  {/*end section*/}
  {/* End */}
  {/* ***************************************************************************************************************** */}
  {/*                                                        PROJECTS                                                   */}
  {/* ***************************************************************************************************************** */}
  {/* Start */}
  <section className="relative md:py-24 py-16" id="ticket">
    <div className="container md:mt-24 mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center">
        <div className="md:col-span-6">
          <h6 className="text-green-600 text-sm font-bold uppercase mb-2">
            Projects
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Our Recent Projects
          </h3>
        </div>
        <div className="md:col-span-6">
          <p className="text-slate-400 max-w-xl">
            Check out what we've been working on, and read more about our
            project process and documentation.
          </p>
        </div>
      </div>
      {/*end grid*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img src="assets/images/projects/electric_bike.jpg" alt="" />
          <div className="content p-6">
            <a
              href="documentation-electric-bike.html"
              className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out"
            >
              Electric Bike
            </a>
            <p className="text-slate-400 mt-3">
              <i>Turbo</i> is our electric bike capable of reaching a maximum
              speed of 20 km/h, carrying up to 100 kg, and offering a 5-hour
              battery life for effortless journeys across any terrain{" "}
            </p>
            <div className="mt-4">
              <a
                href="documentation-electric-bike.html"
                className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
              >
                Read More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img src="assets/images/projects/electric_skateboard.jpg" alt="" />
          <div className="content p-6">
            <a
              href="documentation-electric-skateboard.html"
              className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out"
            >
              Electric Skateboard
            </a>
            <p className="text-slate-400 mt-3">
              <i>VoltSkate</i> is our custom-built electric skateboard, with
              intuitive handheld remote control, customizable riding modes, and
              a compact, portable design for effortless transportation and
              storage.
            </p>
            <div className="mt-4">
              <a
                href="documentation-electric-skateboard.html"
                className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
              >
                Read More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img src="assets/images/projects/electric_onewheel.jpg" alt="" />
          <div className="content p-6">
            <a
              href="documentation-onewheel.html"
              className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out"
            >
              OneWheel
            </a>
            <p className="text-slate-400 mt-3">
              Our Electric OneWheel is an exhilarating and eco-friendly
              single-wheel vehicle that combines sleek design, high performance,
              and user-centric features for a thrilling and comfortable ride.
            </p>
            <div className="mt-4">
              <a
                href="documentation-onewheel.html"
                className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
              >
                Read More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
  </section>
  {/*end section*/}
  {/* End */}
  {/* ***************************************************************************************************************** */}
  {/*                                                   CALL TO ACTION                                                  */}
  {/* ***************************************************************************************************************** */}
  {/* Start */}
  <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
    <div className="container">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          Get Involved
        </h3>
        <p className="max-w-xl mx-auto">
          {" "}
          Be a part of the green transportation revolution! We're looking for
          students passionate about sustainable mobility. Join our team to learn
          more about our projects and collaborate on cutting-edge electric
          vehicle projects.{" "}
        </p>
      </div>
      {/*end grid*/}
      <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
        <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6">
          <h5 className="text-2xl font-semibold mb-4">Join Our Team</h5>
          <p className="text-slate-400 mb-4">
            Join us and unleash your creativity and passion for sustainable
            transportation. As a member, you'll have the opportunity to gain
            hands-on experience in design and engineering.
          </p>
          <a
            href="join-our-team.html"
            className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
          >
            Learn How
            <i className="uil uil-arrow-right align-middle" />
          </a>
        </div>
        <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6">
          <h5 className="text-2xl font-semibold mb-4">Become A Sponsor</h5>
          <p className="text-slate-400 mb-4">
            Become a valued sponsor support our mission of advancing affordable
            and sustainable transportation solutions
          </p>
          <a
            href="sponsors.html"
            className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
          >
            Learn How
            <i className="uil uil-arrow-right align-middle" />
          </a>
        </div>
        <br />
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
  </section>
  {/*end section*/}
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
                    alt=""
                    width={250}
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-dollar-sign h-4 w-4"
                      >
                        <line x1={12} y1={1} x2={12} y2={23} />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </a>
                  </li>
                  <li className="inline mb-0">
                    <a
                      href="https://www.youtube.com/@electriummobility"
                      target="_blank"
                      className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-youtube h-4 w-4"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </a>
                  </li>
                  <li className="inline mb-0">
                    <a
                      href="https://www.instagram.com/electriummobility/"
                      target="_blank"
                      className="btn btn-icon rounded-full bg-pink-600/5 hover:bg-pink-600 border-pink-600/10 hover:border-pink-600 text-pink-600 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram h-4 w-4"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-linkedin h-4 w-4"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x={2} y={9} width={4} height={12} />
                        <circle cx={4} cy={4} r={2} />
                      </svg>
                    </a>
                  </li>
                  <li className="inline mb-0">
                    <a
                      href="mailto:electriummobility@gmail.com"
                      target="_blank"
                      className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-mail h-4 w-4"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
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
            <p className="mb-0">
              © 2023 Electrium Mobility. All Rights Reserved.
            </p>
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
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html: ".typewrite > .wrap { border-right: 0.08em solid transparent}"
    }}
  />
  {/* JAVASCRIPTS */}
</>

  )
}
