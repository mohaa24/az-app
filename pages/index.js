import Head from 'next/head';
import * as Dropdown from '../design/filterDropdown/index';
import logo from '../public/logo.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className='home'>
        <header className='header'>
          <div className="header__inner"><a aria-current="page" title="Kollosche" className="header__logo active" href="/">
            <img className='logo-img' src='http://shifaza21.sg-host.com/wp-content/uploads/2022/07/0263_ANTONZHOUK_DEVICE.png'>
            </img>
          </a>
            <nav className="header__nav">
              <ul>
                <li><a href="/buy/">Buy</a>
                  <ul className="header__sub-nav">
                    <li><a href="/buy/">Residential</a></li>
                    <li><a href="/buy-commercial/">Commercial</a></li>
                    <li><a href="/projects/">New Projects</a></li>
                    <li><a href="/off-market/">Off Market</a></li>
                    <li><a href="/suburb-guides/">Suburb Profiles</a></li>
                    <li><a href="/appraisal/">Appraisal</a></li>
                  </ul>
                </li>
            
                <li><a href="/sold/">Sell</a>
                  <ul className="header__sub-nav menu-sold">
                    <li><a href="/sold/">Residential</a></li>
                    <li><a href="/sold-commercial/">Commercial</a></li>
                  </ul>
                </li>
                <li><a href="/lease/">Rent</a>
                  <ul className="header__sub-nav menu-lease">
                    <li><a href="/lease/">Residential</a></li>
                    <li><a href="/lease-commercial/">Commercial</a></li>
                  </ul>
                </li>
                <li><a href="/about-us/">About</a>
                  <ul className="header__sub-nav menu-about">
                    <li><a href="/our-team/">Our Team</a></li>
                    <li><a href="/news/">News</a></li>
                    <li><a href="/kollosche-tv/">Kollosche TV</a></li>
                    <li><a href="/careers/">Careers</a></li>
                    <li><a href="/contact-us/">Contact Us</a></li>
                  </ul>
                </li>
                <li><a href="/blog/">Blog</a>
                  
                </li>
                <li><a href="/contactt-us/">Contact</a>
                  
                  </li>
                  <li><a className="header__search-icon" href="/buy/"><svg width="19px" height="18px" viewBox="0 0 19 18"
                    version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-1289.000000, -46.000000)">
                        <g transform="translate(1289.000000, 46.000000)">
                          <g>
                            <g>
                              <path
                                d="M18.6635459,17.284253 L11.6362006,10.9253654 C13.1367102,9.17733337 13.6202361,6.77412093 12.9112432,4.58183552 C12.2032082,2.38959923 10.405318,0.724091073 8.16612176,0.184001938 C5.92591848,-0.355178451 3.56664508,0.308723477 1.93778144,1.93778114 C0.308721319,3.56684127 -0.355178153,5.92594275 0.184002237,8.16612146 C0.724140492,10.4053669 2.38967321,12.2034044 4.58183582,12.9112429 C6.7740721,13.6202358 9.17738279,13.1367025 10.9253657,11.6362003 L17.9477988,18 L18.6635459,17.284253 Z M2.65141627,10.5820072 C1.59032164,9.52857551 0.991655311,8.09720422 0.987813382,6.60145942 C0.984945581,5.1067216 1.57592909,3.67137148 2.63223439,2.61329781 C3.68758182,1.55411892 5.12194951,0.959284049 6.61671189,0.959284049 C8.11147427,0.959284049 9.5458174,1.55411892 10.6011894,2.61329781 C11.6574947,3.67151884 12.2484735,5.10669704 12.2456104,6.60145942 C12.2417623,8.0971551 11.6431021,9.52860007 10.5820075,10.5820072 C9.5362633,11.6440597 8.10776561,12.2417682 6.61668733,12.2417682 C5.12560905,12.2417682 3.69716048,11.6440597 2.65136715,10.5820072 L2.65141627,10.5820072 Z"
                                fill="#FFFFFF" fill-rule="nonzero"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg></a></li>
     
                {/* <li><button className="header__hamburger" type="button"><span className="lines"></span></button></li> */}
              </ul>
            </nav>
          </div>
        </header>

        <main>

          <section className='hero-banner'>
          <video src="http://shifaza21.sg-host.com/wp-content/uploads/2022/07/WEB3-2.mp4" autoplay="" loop="" playsinline=""></video>

             <div className='hero-banner__inner'>
              <div className='hero-banner__content'>
                <div className='hero-banner__menu'>
                  <ul className="react-reveal" >
                    <li className="active"><button type="button">Request Appraisal</button></li>
                    </ul>
                </div>
                <div className="react-reveal hero-banner__heading"><h1>Luxury begins here</h1></div>
                {/* <div className="react-reveal hero-banner__search false">
                  <section className="search">
                    <div className="search__inner">
                      <form className="search__form form" action="/buy/">
                        <div className="form__row form__row--search">
                          <div className="form__select form__select--category">

                            <div className="react-select-container css-b62m3t-container" id="category"><span id="react-select-37-live-region" className="css-7pg0cj-a11yText">
                            </span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText">
                              </span><div className="react-select__control css-1s2u09g-control"><div className="react-select__value-container react-select__value-container--has-value css-1d8n9bt">
                                <div className="react-select__single-value css-qc6sy-singleValue">Buy</div><div className="react-select__input-container css-ackcql" data-value=""><input className="react-select__input" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-37-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" value="" />
                                </div></div><div className="react-select__indicators css-1wy0on6"><span className="react-select__indicator-separator css-1okebmr-indicatorSeparator"></span><div className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div>
                              <input name="category" type="hidden" value="buy" /></div>

                          </div>
                          <input className="form__input" type="text" name="search" placeholder="Search by suburb" /><button type="submit"><svg width="19px" height="18px" viewBox="0 0 19 18" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-1289.000000, -46.000000)"><g transform="translate(1289.000000, 46.000000)"><g><g><path d="M18.6635459,17.284253 L11.6362006,10.9253654 C13.1367102,9.17733337 13.6202361,6.77412093 12.9112432,4.58183552 C12.2032082,2.38959923 10.405318,0.724091073 8.16612176,0.184001938 C5.92591848,-0.355178451 3.56664508,0.308723477 1.93778144,1.93778114 C0.308721319,3.56684127 -0.355178153,5.92594275 0.184002237,8.16612146 C0.724140492,10.4053669 2.38967321,12.2034044 4.58183582,12.9112429 C6.7740721,13.6202358 9.17738279,13.1367025 10.9253657,11.6362003 L17.9477988,18 L18.6635459,17.284253 Z M2.65141627,10.5820072 C1.59032164,9.52857551 0.991655311,8.09720422 0.987813382,6.60145942 C0.984945581,5.1067216 1.57592909,3.67137148 2.63223439,2.61329781 C3.68758182,1.55411892 5.12194951,0.959284049 6.61671189,0.959284049 C8.11147427,0.959284049 9.5458174,1.55411892 10.6011894,2.61329781 C11.6574947,3.67151884 12.2484735,5.10669704 12.2456104,6.60145942 C12.2417623,8.0971551 11.6431021,9.52860007 10.5820075,10.5820072 C9.5362633,11.6440597 8.10776561,12.2417682 6.61668733,12.2417682 C5.12560905,12.2417682 3.69716048,11.6440597 2.65136715,10.5820072 L2.65141627,10.5820072 Z" fill="#233356" fill-rule="nonzero"></path></g></g></g></g></g></svg></button></div><div className="form__row form__row--dropdowns"><div className="form__select form__select--min"><div className="react-select-container css-b62m3t-container" id="price_min"><span id="react-select-38-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span><div className="react-select__control css-1s2u09g-control"><div className="react-select__value-container css-1d8n9bt"><div className="react-select__placeholder css-14el2xx-placeholder" id="react-select-38-placeholder">Min Price</div><div className="react-select__input-container css-ackcql" data-value="">
                              <input className="react-select__input" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-38-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-38-placeholder" value="" /></div></div><div className="react-select__indicators css-1wy0on6">
                                <span className="react-select__indicator-separator css-1okebmr-indicatorSeparator"></span><div className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div><input name="price_min" type="hidden" value="" /></div></div><div className="form__select form__select--max"><div className="react-select-container css-b62m3t-container" id="price_max"><span id="react-select-39-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span><div className="react-select__control css-1s2u09g-control">
                                  <div className="react-select__value-container css-1d8n9bt"><div className="react-select__placeholder css-14el2xx-placeholder" id="react-select-39-placeholder">Max Price</div><div className="react-select__input-container css-ackcql" data-value="">
                                    <input className="react-select__input" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-39-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-39-placeholder" value="" /></div></div><div className="react-select__indicators css-1wy0on6">
                                    <span className="react-select__indicator-separator css-1okebmr-indicatorSeparator"></span><div className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div><input name="price_max" type="hidden" value="" /></div></div><div className="form__select form__select--bed">
                            <div className="react-select-container css-b62m3t-container" id="bedrooms"><span id="react-select-40-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span><div className="react-select__control css-1s2u09g-control"><div className="react-select__value-container css-1d8n9bt"><div className="react-select__placeholder css-14el2xx-placeholder" id="react-select-40-placeholder">Bed</div><div className="react-select__input-container css-ackcql" data-value=""><input className="react-select__input" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-40-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-40-placeholder" value="" /></div></div><div className="react-select__indicators css-1wy0on6"><span className="react-select__indicator-separator css-1okebmr-indicatorSeparator"></span><div className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div><input name="bedrooms" type="hidden" value="" /></div></div><div className="form__select form__select--bath"><div className="react-select-container css-b62m3t-container" id="bathrooms"><span id="react-select-41-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span><div className="react-select__control css-1s2u09g-control"><div className="react-select__value-container css-1d8n9bt">
                              <div className="react-select__placeholder css-14el2xx-placeholder" id="react-select-41-placeholder">Bath</div>
                              <div className="react-select__input-container css-ackcql" data-value="">
                                <input className="react-select__input" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-41-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-41-placeholder" value="" /></div></div><div className="react-select__indicators css-1wy0on6"><span className="react-select__indicator-separator css-1okebmr-indicatorSeparator"></span><div className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div><input name="bathrooms" type="hidden" value="" /></div></div><div className="form__select form__select--car"><div className="react-select-container css-b62m3t-container" id="carparks"><span id="react-select-42-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span><div className="react-select__control css-1s2u09g-control"><div className="react-select__value-container css-1d8n9bt"><div className="react-select__placeholder css-14el2xx-placeholder" id="react-select-42-placeholder">Car</div><div className="react-select__input-container css-ackcql" data-value="">
                                  <input className="react-select__input" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-42-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-42-placeholder" value="" /></div></div><div className="react-select__indicators css-1wy0on6"><span className="react-select__indicator-separator css-1okebmr-indicatorSeparator"></span>
                                    <div className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true">
                                      <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div><input name="carparks" type="hidden" value="" /></div></div></div></form></div>
                  </section><button type="button" className="hero-banner__mobile-toggle false">Advanced Search<svg width="8px" height="4px" viewBox="0 0 8 4" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-505.000000, -432.000000)" fill="#FFFFFF">
                    <g transform="translate(300.000000, 346.000000)"><g transform="translate(205.000000, 86.000000)"><polygon transform="translate(4.000000, 2.000000) scale(1, -1) translate(-4.000000, -2.000000) " points="4 0 8 4 0 4"></polygon></g></g></g></g></svg></button>
                </div> */}
                <div className='searchBar'>
                  <div className='optionMenu'>BUY</div>
                  <div className='searchArea'></div>
                </div>
                <div className='dropDownArea'>
                  <div className='dropDown'>Min Price <div className='tick'></div></div>
                  <div className='dropDown'>Max Price</div>
                  <div className='dropDown'>Bed</div>
                  <div className='dropDown'>Bath</div>
         

                </div>

                <div className="react-reveal hero-banner__weather hero-banner__weather--desktop">
                  <section className="weather">
                    <div className="weather__inner">
                      <div className="weather__content">
                        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-622.000000, -644.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(622.000000, 644.000000)">
                          <path d="M5.57894737,6.31578947 L2.52631579,3.26315789 L3.26315789,2.52631579 L6.31578947,5.57894737 L5.57894737,6.31578947 Z M4.21052632,9.47368421 L0,9.47368421 L0,10.5263158 L4.21052632,10.5263158 L4.21052632,9.47368421 Z M17.4736842,3.26315789 L16.7368421,2.52631579 L13.6842105,5.57894737 L14.4210526,6.31578947 L17.4736842,3.26315789 Z M10.5263158,0 L9.47368421,0 L9.47368421,4.21052632 L10.5263158,4.21052632 L10.5263158,0 Z M14.7368421,10 C14.7368421,12.6315789 12.6315789,14.7368421 10,14.7368421 C7.36842105,14.7368421 5.26315789,12.6315789 5.26315789,10 C5.26315789,7.36842105 7.36842105,5.26315789 10,5.26315789 C12.6315789,5.26315789 14.7368421,7.36842105 14.7368421,10 Z M13.6842105,10 C13.6842105,8 12,6.31578947 10,6.31578947 C8,6.31578947 6.31578947,8 6.31578947,10 C6.31578947,12 8,13.6842105 10,13.6842105 C12,13.6842105 13.6842105,12 13.6842105,10 Z M15.7894737,9.47368421 L15.7894737,10.5263158 L20,10.5263158 L20,9.47368421 L15.7894737,9.47368421 Z M13.6842105,14.4210526 L16.6315789,17.3684211 L17.3684211,16.6315789 L14.4210526,13.6842105 L13.6842105,14.4210526 Z M9.47368421,20 L10.5263158,20 L10.5263158,15.7894737 L9.47368421,15.7894737 L9.47368421,20 Z M2.52631579,16.7368421 L3.26315789,17.4736842 L6.31578947,14.4210526 L5.57894737,13.6842105 L2.52631579,16.7368421 Z">
                          </path></g></g></g></svg>
                        <p>Hawthorn VIC 3122<span> 9° C</span>
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

              </div>

            </div>
          </section>
          <section className="property-options light-theme">
          <div className="property-options__heading">
            <h2>
            The A - Z agency was born out of simple, yet radical idea: real estate should be exclusively focussed on the customer, providing a more personal and tailored aproach for every client.

            </h2>
          </div>
          <div className="property-options__content">
            <div className="property-options__menu">
              <ul>
                <li className="active"><a href="/property/">Property</a></li>
              </ul>
            </div>
            <div className="property-options__slides">
              <div className="property-options__slider">
                <div className="property-option"><img className="property-option__image" loading="lazy"
                    src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/MicrosoftTeams-image-4.jpg"
                    alt=""/><span className="property-option__view">View</span>
                  <div className="property-option__details">
                    <p className="title">Residential for sale</p>
                    <div className="copy">Discover the most luxurious residential real estate from Sovereign Islands to
                      Byron Bay.</div>
                  </div><a className="property-option__link" href="/buy/"></a>
                </div>
{/* 

                <div className="property-option"><img className="property-option__image" loading="lazy"
                    src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/Untitled-design-2.png"
                    alt=""/><span className="property-option__view">View</span>
                  <div className="property-option__details">
                    <p className="title">New Projects</p>
                    <div className="copy">Choose from a top shelf range of off-the-plan apartments to call home, holiday
                      haven or investment. </div>
                  </div><a className="property-option__link" href="/projects/"></a>
                </div> */}

                {/* <div className="property-option"><img className="property-option__image" loading="lazy"
                    src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/Untitled-design-9.png"
                    alt=""/><span className="property-option__view">View</span>
                  <div className="property-option__details">
                    <p className="title">Commercial</p>
                    <div className="copy">Our Commercial team can open up a range of opportunities across retail, industrial
                      and development.</div>
                  </div><a className="property-option__link" href="/commercial/"></a>
                </div> */}

                <div className="property-option"><img className="property-option__image" loading="lazy"
                    src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2021/12/home-lease.jpg" alt=""/><span
                    className="property-option__view">View</span>
                  <div className="property-option__details">
                    <p className="title">For lease</p>
                    <div className="copy">Explore our exciting range of prestige properties for lease across the Gold Coast.
                    </div>
                  </div><a className="property-option__link" href="/lease/"></a>
                </div>
{/* 
                <div className="property-option"><img className="property-option__image" loading="lazy"
                    src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/Website-Home-Page-Banners-.png"
                    alt=""/><span className="property-option__view">View</span>
                  <div className="property-option__details">
                    <p className="title">Recently sold</p>
                    <div className="copy">See the latest residential real estate sales results in your Gold Coast suburb.
                    </div>
                  </div><a className="property-option__link" href="/sold/"></a>
                </div> */}

              </div>
            </div>
          </div>
        </section>

        <section className="business-data">
          <div className="business-data__inner">
            <div className="business-data__content">
              <div className="business-data__heading">
                <h5 className="react-reveal">By the <br/>
                  numbers</h5>
              </div>
              <div className="react-reveal business-data__items">
                <div className="business-data__item">
                  <p className="value">93%</p>
                  <p className="label">Highest list to<br/>
                    sell rate in Hawthorn</p>
                </div>
                <div className="business-data__item">
                  <p className="value">$304M</p>
                  <p className="label">Total value<br/>
                    of property sold</p>
                </div>
                <div className="business-data__item">
                  <p className="value">$3.16M</p>
                  <p className="label">Average<br/>
                    Sale Price</p>
                </div>
                {/* <div className="business-data__item">
                  <p className="value">$42M</p>
                  <p className="label">Highest<br/>
                    Record Sale</p>
                </div>
                <div className="business-data__item">
                  <p className="value">5.0</p>
                  <p className="label">Average<br/>
                    Client Rating</p>
                </div> */}
                <div className="business-data__disclaimer">
                  <div>
                    <h6><em>Statistics based on 2021 calendar year</em></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>

      </body>

      <footer>
        'Footer'
      </footer>


      <style jsx global>{`
       
         @charset "UTF-8";
         @arrowColor: #ffcc00;
         @arrow: escape('@{arrowColor}');
         
         select {  
           background-color:#1F99CD;
           background-image: url(~"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20448%22%20enable-background%3D%22new%200%200%20256%20448%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.arrow%7Bfill%3A@{arrow}%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22arrow%22%20d%3D%22M255.9%20168c0-4.2-1.6-7.9-4.8-11.2-3.2-3.2-6.9-4.8-11.2-4.8H16c-4.2%200-7.9%201.6-11.2%204.8S0%20163.8%200%20168c0%204.4%201.6%208.2%204.8%2011.4l112%20112c3.1%203.1%206.8%204.6%2011.2%204.6%204.4%200%208.2-1.5%2011.4-4.6l112-112c3-3.2%204.5-7%204.5-11.4z%22%2F%3E%3C%2Fsvg%3E%0A");
           background-position: right 10px center;
           background-repeat: no-repeat;
           background-size: auto 50%;
           border-radius:2px;
           border:none;
           color: #ffffff;
           padding: 10px 30px 10px 10px;
           // disable default appearance
           outline: none;
           -moz-appearance: none;
           -webkit-appearance: none;
           appearance: none;
           &::-ms-expand { display: none };
         }
         
        
   

         .dropDownArea {
          display: grid;
          gap: 10px;
          grid-auto-flow: column;
      }
      
      .dropDown {
      
          background: #13213c;
          padding: 14px 20px;
          margin: 10px 0;
          font-family:Montserrat,sans-serif;
          font-size: 13px !important;
          font-weight: 500;
          line-height: 1.2;
          color:white
      }

         .optionMenu {
          width: 124px;
          font-size: 13px;
          font-weight: 600;
          background: #91a1c1;
          padding: 16px 0;
          font-family: Montserrat,sans-serif;

      }
      
      .searchArea {
          background: white;
          width: inherit;
      }
      
      .searchBar {
          display: flex;
          width: 100%;
          flex-direction: row;
      }

         .logo-img{
           margin:0;
           filter: invert(1);
         }

         body{
           background:grey
         }
     
         .slick-slider {
           -webkit-touch-callout: none;
           -webkit-tap-highlight-color: transparent;
           box-sizing: border-box;
           -ms-touch-action: pan-y;
           touch-action: pan-y;
           -webkit-user-select: none;
           -moz-user-select: none;
           -ms-user-select: none;
           user-select: none;
           -khtml-user-select: none
         }
     
         .slick-list,
         .slick-slider {
           display: block;
           position: relative
         }
     
         .slick-list {
           margin: 0;
           overflow: hidden;
           padding: 0
         }
     
         .slick-list:focus {
           outline: none
         }
     
         .slick-list.dragging {
           cursor: pointer;
           cursor: hand
         }
     
         .slick-slider .slick-list,
         .slick-slider .slick-track {
           -webkit-transform: translateZ(0);
           -moz-transform: translateZ(0);
           -ms-transform: translateZ(0);
           -o-transform: translateZ(0);
           transform: translateZ(0)
         }
     
         .slick-track {
           display: block;
           left: 0;
           margin-left: auto;
           margin-right: auto;
           position: relative;
           top: 0
         }
     
         .slick-track:after,
         .slick-track:before {
           content: "";
           display: table
         }
     
         .slick-track:after {
           clear: both
         }
     
         .slick-loading .slick-track {
           visibility: hidden
         }
     
         .slick-slide {
           display: none;
           float: left;
           height: 100%;
           min-height: 1px
         }
     
         [dir=rtl] .slick-slide {
           float: right
         }
     
         .slick-slide img {
           display: block
         }
     
         .slick-slide.slick-loading img {
           display: none
         }
     
         .slick-slide.dragging img {
           pointer-events: none
         }
     
         .slick-initialized .slick-slide {
           display: block
         }
     
         .slick-loading .slick-slide {
           visibility: hidden
         }
     
         .slick-vertical .slick-slide {
           border: 1px solid transparent;
           display: block;
           height: auto
         }
     
         .slick-arrow.slick-hidden {
           display: none
         }
     
         .slick-loading .slick-list {
           background: #fff url(data:image/gif;base64,R0lGODlhIAAgAPUAAP///wAAAPr6+sTExOjo6PDw8NDQ0H5+fpqamvb29ubm5vz8/JKSkoaGhuLi4ri4uKCgoOzs7K6urtzc3D4+PlZWVmBgYHx8fKioqO7u7kpKSmxsbAwMDAAAAM7OzsjIyNjY2CwsLF5eXh4eHkxMTLCwsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAIAAgAAAG/0CAcEgkFjgcR3HJJE4SxEGnMygKmkwJxRKdVocFBRRLfFAoj6GUOhQoFAVysULRjNdfQFghLxrODEJ4Qm5ifUUXZwQAgwBvEXIGBkUEZxuMXgAJb1dECWMABAcHDEpDEGcTBQMDBQtvcW0RbwuECKMHELEJF5NFCxm1AAt7cH4NuAOdcsURy0QCD7gYfcWgTQUQB6Zkr66HoeDCSwIF5ucFz3IC7O0CC6zx8YuHhW/3CvLyfPX4+OXozKnDssBdu3G/xIHTpGAgOUPrZimAJCfDPYfDin2TQ+xeBnWbHi37SC4YIYkQhdy7FvLdpwWvjA0JyU/ISyIx4xS6sgfkNS4me2rtVKkgw0JCb8YMZdjwqMQ2nIY8BbcUQNVCP7G4MQq1KRivR7tiDEuEFrggACH5BAAKAAEALAAAAAAgACAAAAb/QIBwSCQmNBpCcckkEgREA4ViKA6azM8BEZ1Wh6LOBls0HA5fgJQ6HHQ6InKRcWhA1d5hqMMpyIkOZw9Ca18Qbwd/RRhnfoUABRwdI3IESkQFZxB4bAdvV0YJQwkDAx9+bWcECQYGCQ5vFEQCEQoKC0ILHqUDBncCGA5LBiHCAAsFtgqoQwS8Aw64f8m2EXdFCxO8INPKomQCBgPMWAvL0n/ff+jYAu7vAuxy8O/myvfX8/f7/Arq+v0W0HMnr9zAeE0KJlQkJIGCfE0E+PtDq9qfDMogDkGmrIBCbNQUZIDosNq1kUsEZJBW0dY/b0ZsLViQIMFMW+RKKgjFzp4fNokPIdki+Y8JNVxA79jKwHAI0G9JGw5tCqDWTiFRhVhtmhVA16cMJTJ1OnVIMo1cy1KVI5NhEAAh+QQACgACACwAAAAAIAAgAAAG/0CAcEgkChqNQnHJJCYWRMfh4CgamkzFwBOdVocNCgNbJAwGhKGUOjRQKA1y8XOGAtZfgIWiSciJBWcTQnhCD28Qf0UgZwJ3XgAJGhQVcgKORmdXhRBvV0QMY0ILCgoRmIRnCQIODgIEbxtEJSMdHZ8AGaUKBXYLIEpFExZpAG62HRRFArsKfn8FIsgjiUwJu8FkJLYcB9lMCwUKqFgGHSJ5cnZ/uEULl/CX63/x8KTNu+RkzPj9zc/0/Cl4V0/APDIE6x0csrBJwybX9DFhBhCLgAilIvzRVUriKHGlev0JtyuDvmsZUZlcIiCDnYu7KsZ0UmrBggRP7n1DqcDJEzciOgHwcwTyZEUmIKEMFVIqgyIjpZ4tjdTxqRCMPYVMBYDV6tavUZ8yczpkKwBxHsVWtaqo5tMgACH5BAAKAAMALAAAAAAgACAAAAb/QIBwSCQuBgNBcck0FgvIQtHRZCYUGSJ0IB2WDo9qUaBQKIXbLsBxOJTExUh5mB4iDo0zXEhWJNBRQgZtA3tPZQsAdQINBwxwAnpCC2VSdQNtVEQSEkOUChGSVwoLCwUFpm0QRAMVFBQTQxllCqh0kkIECF0TG68UG2O0foYJDb8VYVa0alUXrxoQf1WmZnsTFA0EhgCJhrFMC5Hjkd57W0jpDsPDuFUDHfHyHRzstNN78PPxHOLk5dwcpBuoaYk5OAfhXHG3hAy+KgLkgNozqwzDbgWYJQyXsUwGXKNA6fnYMIO3iPeIpBwyqlSCBKUqEQk5E6YRmX2UdAT5kEnHKkQ5hXjkNqTPtKAARl1sIrGoxSFNuSEFMNWoVCxEpiqyRlQY165wEHELAgAh+QQACgAEACwAAAAAIAAgAAAG/0CAcEgsKhSLonJJTBIFR0GxwFwmFJlnlAgaTKpFqEIqFJMBhcEABC5GjkPz0KN2tsvHBH4sJKgdd1NHSXILah9tAmdCC0dUcg5qVEQfiIxHEYtXSACKnWoGXAwHBwRDGUcKBXYFi0IJHmQEEKQHEGGpCnp3AiW1DKFWqZNgGKQNA65FCwV8bQQHJcRtds9MC4rZitVgCQbf4AYEubnKTAYU6eoUGuSpu3fo6+ka2NrbgQAE4eCmS9xVAOW7Yq7IgA4Hpi0R8EZBhDshOnTgcOtfM0cAlTigILFDiAFFNjk8k0GZgAxOBozouIHIOyKbFixIkECmIyIHOEiEWbPJTTQ5FxcVOMCgzUVCWwAcyZJvzy45ADYVZNIwTlIAVfNB7XRVDLxEWLQ4E9JsKq+rTdsMyhcEACH5BAAKAAUALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RagJmQgtHaX5XZUYKQ4YKEYSKfVKPaUMZHwMDeQBxh04ABYSFGU4JBpsDBmFHdXMLIKofBEyKCpdgspsOoUsLXaRLCQMgwky+YJ1FC4POg8lVAg7U1Q5drtnHSw4H3t8HDdnZy2Dd4N4Nzc/QeqLW1bnM7rXuV9tEBhQQ5UoCbJDmWKBAQcMDZNhwRVNCYANBChZYEbkVCZOwASEcCDFQ4SEDIq6WTVqQIMECBx06iCACQQPBiSabHDqzRUTKARMhSFCDrc+WNQIcOoRw5+ZIHj8ADqSEQBQAwKKLhIzowEEeGKQ0owIYkPKjHihZoBKi0KFE01b4zg7h4y4IACH5BAAKAAYALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RagJmQgtHaX5XZUUJeQCGChGEin1SkGlubEhDcYdOAAWEhRlOC12HYUd1eqeRokOKCphgrY5MpotqhgWfunqPt4PCg71gpgXIyWSqqq9MBQPR0tHMzM5L0NPSC8PCxVUCyeLX38+/AFfXRA4HA+pjmoFqCAcHDQa3rbxzBRD1BwgcMFIlidMrAxYICHHA4N8DIqpsUWJ3wAEBChQaEBnQoB6RRr0uARjQocMAAA0w4nMz4IOaU0lImkSngYKFc3ZWyTwJAALGK4fnNA3ZOaQCBQ22wPgRQlSIAYwSfkHJMrQkTyEbKFzFydQq15ccOAjUEwQAIfkEAAoABwAsAAAAACAAIAAABv9AgHBILCoUi6JySUwSBUdBUcpUJhSZZ5RYUCSq060QqqACyAVwMXIcks2ZtlrrHYvJ3zn3mHwLjxFqAmZCC0dpfldlRQl5AIYKEYSKfVKQaW5sSENxh04ABYSFGU4LXYdhR3V6p5GiQ4oKmGCtjkymi2qGBZ+6eo+3g8KDvYLDxKrJuXNkys6qr0zNygvHxL/V1sVD29K/AFfRRQUDDt1PmoFqHgPtBLetvMwG7QMes0KxkkIFIQNKDhBgKvCh3gQiqmxt6NDBAAEIEAgUOHCgBBEH9Yg06uWAIQUABihQMACgBEUHTRwoUEOBIcqQI880OIDgm5ABDA8IgUkSwAAyij1/jejAARPPIQwONBCnBAJDCEOOCnFA8cOvEh1CEJEqBMIBEDaLcA3LJIEGDe/0BAEAIfkEAAoACAAsAAAAACAAIAAABv9AgHBILCoUi6JySUwSBUdBUcpUJhSZZ5RYUCSq060QqqACyAVwMXIcks2ZtlrrHYvJ3zn3mHwLjxFqAmZCC0dpfldlRQl5AIYKEYSKfVKQaW5sSENxh04ABYSFGU4LXYdhR3V6p5GiQ4oKmGCtjkymi2qGBZ+6eo+3g8KDvYLDxKrJuXNkys6qr0zNygvHxL/V1sVDDti/BQccA8yrYBAjHR0jc53LRQYU6R0UBnO4RxmiG/IjJUIJFuoVKeCBigBN5QCk43BgFgMKFCYUGDAgFEUQRGIRYbCh2xACEDcAcHDgQDcQFGf9s7VkA0QCI0t2W0DRw68h8ChAEELSJE8xijBvVqCgIU9PjwA+UNzG5AHEB9xkDpk4QMGvARQsEDlKxMCALDeLcA0rqEEDlWCCAAAh+QQACgAJACwAAAAAIAAgAAAG/0CAcEgsKhSLonJJTBIFR0FRylQmFJlnlFhQJKrTrRCqoALIBXAxchySzZm2Wusdi8nfOfeYfAuPEWoCZkILR2l+V2VFCXkAhgoRhIp9UpBpbmxIQ3GHTgAFhIUZTgtdh2FHdXqnkaJDigqYYK2OTKaLaoYFn7p6j0wOA8PEAw6/Z4PKUhwdzs8dEL9kqqrN0M7SetTVCsLFw8d6C8vKvUQEv+dVCRAaBnNQtkwPFRQUFXOduUoTG/cUNkyYg+tIBlEMAFYYMAaBuCekxmhaJeSeBgiOHhw4QECAAwcCLhGJRUQCg3RDCmyUVmBYmlOiGqmBsPGlyz9YkAlxsJEhqCubABS9AsPgQAMqLQfM0oTMwEZ4QpLOwvMLxAEEXIBG5aczqtaut4YNXRIEACH5BAAKAAoALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RahAQRQtHaX5XZUUJeQAGHR0jA0SKfVKGCmlubEhCBSGRHSQOQwVmQwsZTgtdh0UQHKIHm2quChGophuiJHO3jkwOFB2UaoYFTnMGegDKRQQG0tMGBM1nAtnaABoU3t8UD81kR+UK3eDe4nrk5grR1NLWegva9s9czfhVAgMNpWqgBGNigMGBAwzmxBGjhACEgwcgzAPTqlwGXQ8gMgAhZIGHWm5WjelUZ8jBBgPMTBgwIMGCRgsygVSkgMiHByD7DWDmx5WuMkZqDLCU4gfAq2sACrAEWFSRLjUfWDopCqDTNQIsJ1LF0yzDAA90UHV5eo0qUjB8mgUBACH5BAAKAAsALAAAAAAgACAAAAb/QIBwSCwqFIuickk0FIiCo6A4ZSoZnRBUSiwoEtYipNOBDKOKKgD9DBNHHU4brc4c3cUBeSOk949geEQUZA5rXABHEW4PD0UOZBSHaQAJiEMJgQATFBQVBkQHZKACUwtHbX0RR0mVFp0UFwRCBSQDSgsZrQteqEUPGrAQmmG9ChFqRAkMsBd4xsRLBBsUoG6nBa14E4IA2kUFDuLjDql4peilAA0H7e4H1udH8/Ps7+3xbmj0qOTj5mEWpEP3DUq3glYWOBgAcEmUaNI+DBjwAY+dS0USGJg4wABEXMYyJNvE8UOGISKVCNClah4xjg60WUKyINOCUwrMzVRARMGENWQ4n/jpNTKTm15J/CTK2e0MoD+UKmHEs4onVDVVmyqdpAbNR4cKTjqNSots07EjzzJh1S0IADsAAAAAAAAAAAA=) 50% no-repeat
         }
     
         @font-face {
           font-family: slick;
           font-style: normal;
           font-weight: 400;
           src: url(data:application/vnd.ms-fontobject;base64,AAgAAGQHAAABAAIAAAAAAAIABQkAAAAAAAABAJABAAAAAExQAQAAgCAAAAAAAAAAAAAAAAEAAAAAAAAATxDE8AAAAAAAAAAAAAAAAAAAAAAAAAoAcwBsAGkAYwBrAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAKAHMAbABpAGMAawAAAAAAAAEAAAANAIAAAwBQRkZUTW3RyK8AAAdIAAAAHEdERUYANAAGAAAHKAAAACBPUy8yT/b9sgAAAVgAAABWY21hcCIPRb0AAAHIAAABYmdhc3D//wADAAAHIAAAAAhnbHlmP5u2YAAAAzwAAAIsaGVhZAABMfsAAADcAAAANmhoZWED5QIFAAABFAAAACRobXR4BkoASgAAAbAAAAAWbG9jYQD2AaIAAAMsAAAAEG1heHAASwBHAAABOAAAACBuYW1lBSeBwgAABWgAAAFucG9zdC+zMgMAAAbYAAAARQABAAAAAQAA8MQQT18PPPUACwIAAAAAAM9xeH8AAAAAz3F4fwAlACUB2wHbAAAACAACAAAAAAAAAAEAAAHbAAAALgIAAAAAAAHbAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAHAEQAAgAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAACAAAABAAAAIAAAAAAAAAAAUGZFZABAAGEhkgHg/+AALgHb/9sAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAJQAlACUAJQAAAAAAAwAAAAMAAAAcAAEAAAAAAFwAAwABAAAAHAAEAEAAAAAMAAgAAgAEAAAAYSAiIZAhkv//AAAAAABhICIhkCGS//8AAP+l3+PedN5xAAEAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAIwAsAEWAAIAJQAlAdsB2wAYACwAAD8BNjQvASYjIg8BBhUUHwEHBhUUHwEWMzI2FAcGBwYiJyYnJjQ3Njc2MhcWF/GCBgaCBQcIBR0GBldXBgYdBQgH7x0eMjB8MDIeHR0eMjB8MDIecYIGDgaCBQUeBQcJBFhYBAkHBR4F0nwwMh4dHR4yMHwwMh4dHR4yAAAAAgAlACUB2wHbABgALAAAJTc2NTQvATc2NTQvASYjIg8BBhQfARYzMjYUBwYHBiInJicmNDc2NzYyFxYXASgdBgZXVwYGHQUIBwWCBgaCBQcIuB0eMjB8MDIeHR0eMjB8MDIecR4FBwkEWFgECQcFHgUFggYOBoIF0nwwMh4dHR4yMHwwMh4dHR4yAAABACUAJQHbAdsAEwAAABQHBgcGIicmJyY0NzY3NjIXFhcB2x0eMjB8MDIeHR0eMjB8MDIeAT58MDIeHR0eMjB8MDIeHR0eMgABACUAJQHbAdsAQwAAARUUBisBIicmPwEmIyIHBgcGBwYUFxYXFhcWMzI3Njc2MzIfARYVFAcGBwYjIicmJyYnJjQ3Njc2NzYzMhcWFzc2FxYB2woIgAsGBQkoKjodHBwSFAwLCwwUEhwcHSIeIBMGAQQDJwMCISspNC8mLBobFBERFBsaLCYvKicpHSUIDAsBt4AICgsLCScnCwwUEhwcOhwcEhQMCw8OHAMDJwMDAgQnFBQRFBsaLCZeJiwaGxQRDxEcJQgEBgAAAAAAAAwAlgABAAAAAAABAAUADAABAAAAAAACAAcAIgABAAAAAAADACEAbgABAAAAAAAEAAUAnAABAAAAAAAFAAsAugABAAAAAAAGAAUA0gADAAEECQABAAoAAAADAAEECQACAA4AEgADAAEECQADAEIAKgADAAEECQAEAAoAkAADAAEECQAFABYAogADAAEECQAGAAoAxgBzAGwAaQBjAGsAAHNsaWNrAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHMAbABpAGMAawAgADoAIAAxADQALQA0AC0AMgAwADEANAAARm9udEZvcmdlIDIuMCA6IHNsaWNrIDogMTQtNC0yMDE0AABzAGwAaQBjAGsAAHNsaWNrAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABzAGwAaQBjAGsAAHNsaWNrAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAgECAQMAhwBECmFycm93cmlnaHQJYXJyb3dsZWZ0AAAAAAAAAf//AAIAAQAAAA4AAAAYAAAAAAACAAEAAwAGAAEABAAAAAIAAAAAAAEAAAAAzu7XsAAAAADPcXh/AAAAAM9xeH8=);
           src: url(data:application/vnd.ms-fontobject;base64,AAgAAGQHAAABAAIAAAAAAAIABQkAAAAAAAABAJABAAAAAExQAQAAgCAAAAAAAAAAAAAAAAEAAAAAAAAATxDE8AAAAAAAAAAAAAAAAAAAAAAAAAoAcwBsAGkAYwBrAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAKAHMAbABpAGMAawAAAAAAAAEAAAANAIAAAwBQRkZUTW3RyK8AAAdIAAAAHEdERUYANAAGAAAHKAAAACBPUy8yT/b9sgAAAVgAAABWY21hcCIPRb0AAAHIAAABYmdhc3D//wADAAAHIAAAAAhnbHlmP5u2YAAAAzwAAAIsaGVhZAABMfsAAADcAAAANmhoZWED5QIFAAABFAAAACRobXR4BkoASgAAAbAAAAAWbG9jYQD2AaIAAAMsAAAAEG1heHAASwBHAAABOAAAACBuYW1lBSeBwgAABWgAAAFucG9zdC+zMgMAAAbYAAAARQABAAAAAQAA8MQQT18PPPUACwIAAAAAAM9xeH8AAAAAz3F4fwAlACUB2wHbAAAACAACAAAAAAAAAAEAAAHbAAAALgIAAAAAAAHbAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAHAEQAAgAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAACAAAABAAAAIAAAAAAAAAAAUGZFZABAAGEhkgHg/+AALgHb/9sAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAJQAlACUAJQAAAAAAAwAAAAMAAAAcAAEAAAAAAFwAAwABAAAAHAAEAEAAAAAMAAgAAgAEAAAAYSAiIZAhkv//AAAAAABhICIhkCGS//8AAP+l3+PedN5xAAEAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAIwAsAEWAAIAJQAlAdsB2wAYACwAAD8BNjQvASYjIg8BBhUUHwEHBhUUHwEWMzI2FAcGBwYiJyYnJjQ3Njc2MhcWF/GCBgaCBQcIBR0GBldXBgYdBQgH7x0eMjB8MDIeHR0eMjB8MDIecYIGDgaCBQUeBQcJBFhYBAkHBR4F0nwwMh4dHR4yMHwwMh4dHR4yAAAAAgAlACUB2wHbABgALAAAJTc2NTQvATc2NTQvASYjIg8BBhQfARYzMjYUBwYHBiInJicmNDc2NzYyFxYXASgdBgZXVwYGHQUIBwWCBgaCBQcIuB0eMjB8MDIeHR0eMjB8MDIecR4FBwkEWFgECQcFHgUFggYOBoIF0nwwMh4dHR4yMHwwMh4dHR4yAAABACUAJQHbAdsAEwAAABQHBgcGIicmJyY0NzY3NjIXFhcB2x0eMjB8MDIeHR0eMjB8MDIeAT58MDIeHR0eMjB8MDIeHR0eMgABACUAJQHbAdsAQwAAARUUBisBIicmPwEmIyIHBgcGBwYUFxYXFhcWMzI3Njc2MzIfARYVFAcGBwYjIicmJyYnJjQ3Njc2NzYzMhcWFzc2FxYB2woIgAsGBQkoKjodHBwSFAwLCwwUEhwcHSIeIBMGAQQDJwMCISspNC8mLBobFBERFBsaLCYvKicpHSUIDAsBt4AICgsLCScnCwwUEhwcOhwcEhQMCw8OHAMDJwMDAgQnFBQRFBsaLCZeJiwaGxQRDxEcJQgEBgAAAAAAAAwAlgABAAAAAAABAAUADAABAAAAAAACAAcAIgABAAAAAAADACEAbgABAAAAAAAEAAUAnAABAAAAAAAFAAsAugABAAAAAAAGAAUA0gADAAEECQABAAoAAAADAAEECQACAA4AEgADAAEECQADAEIAKgADAAEECQAEAAoAkAADAAEECQAFABYAogADAAEECQAGAAoAxgBzAGwAaQBjAGsAAHNsaWNrAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHMAbABpAGMAawAgADoAIAAxADQALQA0AC0AMgAwADEANAAARm9udEZvcmdlIDIuMCA6IHNsaWNrIDogMTQtNC0yMDE0AABzAGwAaQBjAGsAAHNsaWNrAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABzAGwAaQBjAGsAAHNsaWNrAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAgECAQMAhwBECmFycm93cmlnaHQJYXJyb3dsZWZ0AAAAAAAAAf//AAIAAQAAAA4AAAAYAAAAAAACAAEAAwAGAAEABAAAAAIAAAAAAAEAAAAAzu7XsAAAAADPcXh/AAAAAM9xeH8=?#iefix) format("embedded-opentype"), url(data:font/woff;base64,d09GRk9UVE8AAAVkAAsAAAAAB1wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABCAAAAi4AAAKbH/pWDkZGVE0AAAM4AAAAGgAAABxt0civR0RFRgAAA1QAAAAcAAAAIAAyAARPUy8yAAADcAAAAFIAAABgUBj/rmNtYXAAAAPEAAAAUAAAAWIiC0SwaGVhZAAABBQAAAAuAAAANgABMftoaGVhAAAERAAAABwAAAAkA+UCA2htdHgAAARgAAAADgAAAA4ESgBKbWF4cAAABHAAAAAGAAAABgAFUABuYW1lAAAEeAAAANwAAAFuBSeBwnBvc3QAAAVUAAAAEAAAACAAAwABeJw9ks9vEkEUx2cpWyeUoFYgNkHi2Wt7N3rVm3cTs3UVLC4LxIWEQvi1P3i7O1tYLJDAmlgKGEhQrsajf0j7J3jYTXrQWUrMJG+++b55n5e8NwwKBhHDMLv5kxT3ATEBxKBn3qOAl9zxHgb1MAPhHQgHkyF08Gr/L8B/Eb6zWnmCJ7AJVLubQOheArXvJ1A4EXi6j4I+Zg9F0QFKvsnlBCmXeve+sFEnb/nCptdtQ4QYhVFRAT1HrF8UQK/RL/SbmUbclsvGVFXRZKDHUE38cc4qpkbAAsuwiImvro+ufcfaOIQ6szlrmjRJDaKZKnbjN3GWKIbiIzRFUfCffuxxKOL+3LDlDVvx2TdxN84qZEsnhNBa6pgm2dAsnzbLsETdsmRFxUeHV4e+I2/ptN8TyqV8T3Dt29t7EYOuajVIw2y1Wy3M86w0zg/Fz2IvawmQAUHOVrPVfLkoScVynsqsTG0MGUs4z55nh3mnOJa+li+rl9WpPIcFfDubDeaDC+fLBdYN3QADzLauGfj4B6sZmq6CCpqmtSvF0qlUl2qf5AJIUCSlTqlb7lUG+LRfGzZGzZEyBgccMu6MuqPecNDvD4Y9Kjtj4gD+DsvKVMTcMdtqtZtmkzQstQvYje7Syep0PDSAhSOeHYXYWThEF//A/0YvYV1fSQtpKU5STtrhbQ444OtpKSWJIg3pOg8cBs7maTY1EZf07aq+hjWs7IWzdCYTGhb2CtZ47x+Uhx28AAB4nGNgYGBkAIJz765vANHnCyvqYTQAWnkHswAAeJxjYGRgYOADYgkGEGBiYARCFjAG8RgABHYAN3icY2BmYmCcwMDKwMHow5jGwMDgDqW/MkgytDAwMDGwcjKAQQMDAyOQUmCAgoA01xQGB4ZExUmMD/4/YNBjvP3/NgNEDQPjbbBKBQZGADfLDgsAAHicY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQzMCQqKClOUJz0/z9YHRLv/+L7D+8V3cuHmgAHjGwM6ELUByxUMIOZCmbgAAA5LQ8XeJxjYGRgYABiO68w73h+m68M3EwMIHC+sKIeTqsyqDLeZrwN5HIwgKUB/aYJUgAAeJxjYGRgYLzNwMCgx8QAAkA2IwMqYAIAMGIB7QIAAAACAAAlACUAJQAlAAAAAFAAAAUAAHicbY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV4nGNgZkAGjAxoAAAAjgAF) format("woff"), url(data:font/ttf;base64,AAEAAAANAIAAAwBQRkZUTW3RyK8AAAdIAAAAHEdERUYANAAGAAAHKAAAACBPUy8yT/b9sgAAAVgAAABWY21hcCIPRb0AAAHIAAABYmdhc3D//wADAAAHIAAAAAhnbHlmP5u2YAAAAzwAAAIsaGVhZAABMfsAAADcAAAANmhoZWED5QIFAAABFAAAACRobXR4BkoASgAAAbAAAAAWbG9jYQD2AaIAAAMsAAAAEG1heHAASwBHAAABOAAAACBuYW1lBSeBwgAABWgAAAFucG9zdC+zMgMAAAbYAAAARQABAAAAAQAA8MQQT18PPPUACwIAAAAAAM9xeH8AAAAAz3F4fwAlACUB2wHbAAAACAACAAAAAAAAAAEAAAHbAAAALgIAAAAAAAHbAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAHAEQAAgAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAACAAAABAAAAIAAAAAAAAAAAUGZFZABAAGEhkgHg/+AALgHb/9sAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAJQAlACUAJQAAAAAAAwAAAAMAAAAcAAEAAAAAAFwAAwABAAAAHAAEAEAAAAAMAAgAAgAEAAAAYSAiIZAhkv//AAAAAABhICIhkCGS//8AAP+l3+PedN5xAAEAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAIwAsAEWAAIAJQAlAdsB2wAYACwAAD8BNjQvASYjIg8BBhUUHwEHBhUUHwEWMzI2FAcGBwYiJyYnJjQ3Njc2MhcWF/GCBgaCBQcIBR0GBldXBgYdBQgH7x0eMjB8MDIeHR0eMjB8MDIecYIGDgaCBQUeBQcJBFhYBAkHBR4F0nwwMh4dHR4yMHwwMh4dHR4yAAAAAgAlACUB2wHbABgALAAAJTc2NTQvATc2NTQvASYjIg8BBhQfARYzMjYUBwYHBiInJicmNDc2NzYyFxYXASgdBgZXVwYGHQUIBwWCBgaCBQcIuB0eMjB8MDIeHR0eMjB8MDIecR4FBwkEWFgECQcFHgUFggYOBoIF0nwwMh4dHR4yMHwwMh4dHR4yAAABACUAJQHbAdsAEwAAABQHBgcGIicmJyY0NzY3NjIXFhcB2x0eMjB8MDIeHR0eMjB8MDIeAT58MDIeHR0eMjB8MDIeHR0eMgABACUAJQHbAdsAQwAAARUUBisBIicmPwEmIyIHBgcGBwYUFxYXFhcWMzI3Njc2MzIfARYVFAcGBwYjIicmJyYnJjQ3Njc2NzYzMhcWFzc2FxYB2woIgAsGBQkoKjodHBwSFAwLCwwUEhwcHSIeIBMGAQQDJwMCISspNC8mLBobFBERFBsaLCYvKicpHSUIDAsBt4AICgsLCScnCwwUEhwcOhwcEhQMCw8OHAMDJwMDAgQnFBQRFBsaLCZeJiwaGxQRDxEcJQgEBgAAAAAAAAwAlgABAAAAAAABAAUADAABAAAAAAACAAcAIgABAAAAAAADACEAbgABAAAAAAAEAAUAnAABAAAAAAAFAAsAugABAAAAAAAGAAUA0gADAAEECQABAAoAAAADAAEECQACAA4AEgADAAEECQADAEIAKgADAAEECQAEAAoAkAADAAEECQAFABYAogADAAEECQAGAAoAxgBzAGwAaQBjAGsAAHNsaWNrAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHMAbABpAGMAawAgADoAIAAxADQALQA0AC0AMgAwADEANAAARm9udEZvcmdlIDIuMCA6IHNsaWNrIDogMTQtNC0yMDE0AABzAGwAaQBjAGsAAHNsaWNrAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABzAGwAaQBjAGsAAHNsaWNrAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAgECAQMAhwBECmFycm93cmlnaHQJYXJyb3dsZWZ0AAAAAAAAAf//AAIAAQAAAA4AAAAYAAAAAAACAAEAAwAGAAEABAAAAAIAAAAAAAEAAAAAzu7XsAAAAADPcXh/AAAAAM9xeH8=) format("truetype"), url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=#slick) format("svg")
         }
     
         .slick-next,
         .slick-prev {
           border: none;
           cursor: pointer;
           display: block;
           font-size: 0;
           height: 20px;
           line-height: 0;
           padding: 0;
           position: absolute;
           top: 50%;
           -webkit-transform: translateY(-50%);
           -ms-transform: translateY(-50%);
           transform: translateY(-50%);
           width: 20px
         }
     
         .slick-next,
         .slick-next:focus,
         .slick-next:hover,
         .slick-prev,
         .slick-prev:focus,
         .slick-prev:hover {
           background: transparent;
           color: transparent;
           outline: none
         }
     
         .slick-next:focus:before,
         .slick-next:hover:before,
         .slick-prev:focus:before,
         .slick-prev:hover:before {
           opacity: 1
         }
     
         .slick-next.slick-disabled:before,
         .slick-prev.slick-disabled:before {
           opacity: .25
         }
     
         .slick-next:before,
         .slick-prev:before {
           -webkit-font-smoothing: antialiased;
           -moz-osx-font-smoothing: grayscale;
           color: #fff;
           font-family: slick;
           font-size: 20px;
           line-height: 1;
           opacity: .75
         }
     
         .slick-prev {
           left: -25px
         }
     
         [dir=rtl] .slick-prev {
           left: auto;
           right: -25px
         }
     
         .slick-prev:before {
           content: "←"
         }
     
         [dir=rtl] .slick-prev:before {
           content: "→"
         }
     
         .slick-next {
           right: -25px
         }
     
         [dir=rtl] .slick-next {
           left: -25px;
           right: auto
         }
     
         .slick-next:before {
           content: "→"
         }
     
         [dir=rtl] .slick-next:before {
           content: "←"
         }
     
         .slick-dotted.slick-slider {
           margin-bottom: 30px
         }
     
         .slick-dots {
           bottom: -25px;
           display: block;
           list-style: none;
           margin: 0;
           padding: 0;
           position: absolute;
           text-align: center;
           width: 100%
         }
     
         .slick-dots li {
           display: inline-block;
           margin: 0 5px;
           padding: 0;
           position: relative
         }
     
         .slick-dots li,
         .slick-dots li button {
           cursor: pointer;
           height: 20px;
           width: 20px
         }
     
         .slick-dots li button {
           background: transparent;
           border: 0;
           color: transparent;
           display: block;
           font-size: 0;
           line-height: 0;
           outline: none;
           padding: 5px
         }
     
         .slick-dots li button:focus,
         .slick-dots li button:hover {
           outline: none
         }
     
         .slick-dots li button:focus:before,
         .slick-dots li button:hover:before {
           opacity: 1
         }
     
         .slick-dots li button:before {
           -webkit-font-smoothing: antialiased;
           -moz-osx-font-smoothing: grayscale;
           color: #000;
           content: "•";
           font-family: slick;
           font-size: 6px;
           height: 20px;
           left: 0;
           line-height: 20px;
           opacity: .25;
           position: absolute;
           text-align: center;
           top: 0;
           width: 20px
         }
     
         .slick-dots li.slick-active button:before {
           color: #000;
           opacity: .75
         }
     
         @font-face {
           font-family: Montserrat;
           font-style: normal;
           font-weight: 300;
           src: url(/static/MontserratLight-24db90c8183a6307866eb45d09fe6e7e.woff) format("woff"), url(/static/MontserratLight-02afb26fe72fcc05298817491c044b7b.ttf) format("truetype")
         }
     
         @font-face {
           font-family: Montserrat;
           font-style: normal;
           font-weight: 400;
           src: url(/static/MontserratRegular-3730291f0721709ff078c06dde9d3967.woff) format("woff"), url(/static/MontserratRegular-5f824f6103e6e7c198cbfccfca67d9e7.ttf) format("truetype")
         }
     
         @font-face {
           font-family: Montserrat;
           font-style: normal;
           font-weight: 500;
           src: url(/static/MontserratMedium-9dd9d5e2f509fc334b92e04ae42185a0.woff) format("woff"), url(/static/MontserratMedium-a89d1b584132ea0faaf863a2b6fbed61.ttf) format("truetype")
         }
     
         @font-face {
           font-family: Montserrat;
           font-style: normal;
           font-weight: 600;
           src: url(/static/MontserratSemiBold-0e5ae2206ec71e5a42ac67d6f3d9b956.woff) format("woff"), url(/static/MontserratSemiBold-2e77b70e2b6e88a464ce52f925bf0342.ttf) format("truetype")
         }
     
         @font-face {
           font-family: Montserrat;
           font-style: normal;
           font-weight: 700;
           src: url(/static/MontserratBold-acaf4a774ba7865a08fddf89baa1c493.woff) format("woff"), url(/static/MontserratBold-0f9d93783b1d59900089de414278a984.ttf) format("truetype")
         }
     
         :root {
           --theme-dark: #000;
           --theme-light: #fff
         }
     
         html {
           -ms-text-size-adjust: 100%;
           -webkit-text-size-adjust: 100%;
           -webkit-font-smoothing: antialiased;
           font-family: sans-serif
         }
     
         body {
           margin: 0
         }
     
         article,
         aside,
         details,
         figcaption,
         figure,
         footer,
         header,
         main,
         menu,
         nav,
         section,
         summary {
           display: block
         }
     
         audio,
         canvas,
         progress,
         video {
           display: inline-block
         }
     
         audio:not([controls]) {
           display: none;
           height: 0
         }
     
         progress {
           vertical-align: baseline
         }
     
         [hidden],
         template {
           display: none
         }
     
         a {
           -webkit-text-decoration-skip: objects;
           background-color: transparent
         }
     
         a:active,
         a:hover {
           outline-width: 0
         }
     
         abbr[title] {
           border-bottom: none;
           text-decoration: underline;
           -webkit-text-decoration: underline dotted;
           text-decoration: underline dotted
         }
     
         b,
         strong {
           font-weight: inherit;
           font-weight: bolder
         }
     
         dfn {
           font-style: italic
         }
     
         h1 {
           font-size: 2em;
           margin: .67em 0
         }
     
         mark {
           background-color: #ff0;
           color: #000
         }
     
         small {
           font-size: 80%
         }
     
         sub,
         sup {
           font-size: 75%;
           line-height: 0;
           position: relative;
           vertical-align: baseline
         }
     
         sub {
           bottom: -.25em
         }
     
         sup {
           top: -.5em
         }
     
         img {
           border-style: none
         }
     
         svg:not(:root) {
           overflow: hidden
         }
     
         code,
         kbd,
         pre,
         samp {
           font-family: monospace, monospace;
           font-size: 1em
         }
     
         figure {
           margin: 1em 40px
         }
     
         hr {
           box-sizing: content-box;
           height: 0;
           overflow: visible
         }
     
         button,
         input,
         optgroup,
         select,
         textarea {
           font: inherit;
           margin: 0
         }
     
         optgroup {
           font-weight: 700
         }
     
         button,
         input {
           overflow: visible
         }
     
         button,
         select {
           text-transform: none
         }
     
         [type=reset],
         [type=submit],
         button,
         html [type=button] {
           -webkit-appearance: button
         }
     
         [type=button]::-moz-focus-inner,
         [type=reset]::-moz-focus-inner,
         [type=submit]::-moz-focus-inner,
         button::-moz-focus-inner {
           border-style: none;
           padding: 0
         }
     
         [type=button]:-moz-focusring,
         [type=reset]:-moz-focusring,
         [type=submit]:-moz-focusring,
         button:-moz-focusring {
           outline: 1px dotted ButtonText
         }
     
         fieldset {
           border: 1px solid silver;
           margin: 0 2px;
           padding: .35em .625em .75em
         }
     
         legend {
           box-sizing: border-box;
           color: inherit;
           display: table;
           max-width: 100%;
           padding: 0;
           white-space: normal
         }
     
         textarea {
           overflow: auto
         }
     
         [type=checkbox],
         [type=radio] {
           box-sizing: border-box;
           padding: 0
         }
     
         [type=number]::-webkit-inner-spin-button,
         [type=number]::-webkit-outer-spin-button {
           height: auto
         }
     
         [type=search] {
           -webkit-appearance: textfield;
           outline-offset: -2px
         }
     
         [type=search]::-webkit-search-cancel-button,
         [type=search]::-webkit-search-decoration {
           -webkit-appearance: none
         }
     
         ::-webkit-input-placeholder {
           color: inherit;
           opacity: .54
         }
     
         ::-webkit-file-upload-button {
           -webkit-appearance: button;
           font: inherit
         }
     
         html {
           box-sizing: border-box;
           font: 112.5%/1.45em georgia, serif
         }
     
         *,
         :after,
         :before {
           box-sizing: inherit
         }
     
         body {
           word-wrap: break-word;
           -ms-font-feature-settings: "kern", "liga", "clig", "calt";
           -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
           font-feature-settings: "kern", "liga", "clig", "calt";
           color: rgba(0, 0, 0, .8);
           font-family: georgia, serif;
           font-kerning: normal;
           font-weight: 400
         }
     
         img {
           margin: 0 0 1.45rem;
           max-width: 100%;
           padding: 0
         }
     
         h1 {
           font-size: 2.25rem
         }
     
         h1,
         h2 {
           text-rendering: optimizeLegibility;
           color: inherit;
           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
           font-weight: 700;
           line-height: 1.1;
           margin: 0 0 1.45rem;
           padding: 0
         }
     
         h2 {
           font-size: 1.62671rem
         }
     
         h3 {
           font-size: 1.38316rem
         }
     
         h3,
         h4 {
           text-rendering: optimizeLegibility;
           color: inherit;
           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
           font-weight: 700;
           line-height: 1.1;
           margin: 0 0 1.45rem;
           padding: 0
         }
     
         h4 {
           font-size: 1rem
         }
     
         h5 {
           font-size: .85028rem
         }
     
         h5,
         h6 {
           text-rendering: optimizeLegibility;
           color: inherit;
           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
           font-weight: 700;
           line-height: 1.1;
           margin: 0 0 1.45rem;
           padding: 0
         }
     
         h6 {
           font-size: .78405rem
         }
     
         hgroup {
           margin: 0 0 1.45rem;
           padding: 0
         }
     
         ol,
         ul {
           list-style-image: none;
           list-style-position: outside;
           margin: 0 0 1.45rem 1.45rem;
           padding: 0
         }
     
         dd,
         dl,
         figure,
         p {
           margin: 0 0 1.45rem;
           padding: 0
         }
     
         pre {
           word-wrap: normal;
           background: rgba(0, 0, 0, .04);
           border-radius: 3px;
           font-size: .85rem;
           line-height: 1.42;
           margin: 0 0 1.45rem;
           overflow: auto;
           padding: 1.45rem
         }
     
         table {
           border-collapse: collapse;
           font-size: 1rem;
           line-height: 1.45rem;
           width: 100%
         }
     
         fieldset,
         table {
           margin: 0 0 1.45rem;
           padding: 0
         }
     
         blockquote {
           margin: 0 1.45rem 1.45rem;
           padding: 0
         }
     
         form,
         iframe,
         noscript {
           margin: 0 0 1.45rem;
           padding: 0
         }
     
         hr {
           background: rgba(0, 0, 0, .2);
           border: none;
           height: 1px;
           margin: 0 0 calc(1.45rem - 1px);
           padding: 0
         }
     
         address {
           margin: 0 0 1.45rem;
           padding: 0
         }
     
         b,
         dt,
         strong,
         th {
           font-weight: 700
         }
     
         li {
           margin-bottom: .725rem
         }
     
         ol li,
         ul li {
           padding-left: 0
         }
     
         li>ol,
         li>ul {
           margin-bottom: .725rem;
           margin-left: 1.45rem;
           margin-top: .725rem
         }
     
         blockquote :last-child,
         li :last-child,
         p :last-child {
           margin-bottom: 0
         }
     
         li>p {
           margin-bottom: .725rem
         }
     
         code,
         kbd,
         samp {
           font-size: .85rem;
           line-height: 1.45rem
         }
     
         abbr,
         abbr[title],
         acronym {
           border-bottom: 1px dotted rgba(0, 0, 0, .5);
           cursor: help
         }
     
         abbr[title] {
           text-decoration: none
         }
     
         td,
         th,
         thead {
           text-align: left
         }
     
         td,
         th {
           font-feature-settings: "tnum";
           -moz-font-feature-settings: "tnum";
           -ms-font-feature-settings: "tnum";
           -webkit-font-feature-settings: "tnum";
           border-bottom: 1px solid rgba(0, 0, 0, .12);
           padding: .725rem .96667rem calc(.725rem - 1px)
         }
     
         td:first-child,
         th:first-child {
           padding-left: 0
         }
     
         td:last-child,
         th:last-child {
           padding-right: 0
         }
     
         code,
         tt {
           background-color: rgba(0, 0, 0, .04);
           border-radius: 3px;
           font-family: SFMono-Regular, Consolas, Roboto Mono, Droid Sans Mono, Liberation Mono, Menlo, Courier, monospace;
           padding: .2em 0
         }
     
         pre code {
           background: none;
           line-height: 1.42
         }
     
         code:after,
         code:before,
         tt:after,
         tt:before {
           content: " ";
           letter-spacing: -.2em
         }
     
         pre code:after,
         pre code:before,
         pre tt:after,
         pre tt:before {
           content: ""
         }
     
         @media only screen and (max-width:480px) {
           html {
             font-size: 100%
           }
         }
     
         form .error {
           margin: 0 0 24px
         }
     
         .form__row {
           margin-bottom: 28px
         }
     
         @media(min-width:900px) {
           .form__row {
             margin-bottom: 28px
           }
     
           .form__row:last-child {
             margin-bottom: 0
           }
         }
     
         .form__row--double {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between
         }
     
         .form__row--double>div {
           width: 50%
         }
     
         .form__row--double>div:first-child {
           width: calc(50% - 28px)
         }
     
         @media(min-width:900px) {
           .form__row--double>div:first-child {
             margin-right: 28px
           }
         }
     
         .form__row--triple {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between
         }
     
         .form__row--triple>div {
           margin-right: 25.2px;
           width: calc(33.333% - 16.8px)
         }
     
         .form__row--triple>div:last-child {
           margin-right: 0
         }
     
         .form__row-buttons {
           display: flex
         }
     
         .form__row-buttons button:first-child {
           background: #91a0c1;
           border: 1px solid #91a0c1;
           margin-right: 23px;
           min-width: 90px;
           width: auto
         }
     
         .form__row-buttons button:last-of-type {
           min-width: 120px
         }
     
         .form__radio-group {
           display: flex;
           flex-wrap: wrap;
           margin-top: 0
         }
     
         .form__lower {
           margin-top: 30px
         }
     
         .form__select .react-select__control {
           background: transparent;
           border: 0 !important;
           border-radius: 0;
           box-shadow: none;
           font-size: 14px
         }
     
         @media(min-width:900px) {
           .form__select .react-select__control {
             font-size: 15px
           }
         }
     
         .form__select .react-select__control--is-focused {
           outline: 0
         }
     
         .form__select .react-select__input {
           cursor: pointer
         }
     
         .form__select .react-select__value-container {
           border: 0;
           padding: 0;
           width: 100%
         }
     
         .form__select .react-select__input-container {
           border-radius: 0;
           display: flex;
           flex: unset;
           margin: 0;
           padding: 14px 20px;
           text-align: left
         }
     
         .form__select .react-select__placeholder,
         .form__select .react-select__single-value {
           color: #fff;
           font-size: 13px;
           font-weight: 500;
           letter-spacing: .2px;
           text-align: left;
           text-indent: 0
         }
     
         .form__select .react-select__indicators {
           position: absolute;
           right: 0;
           top: 0
         }
     
         .form__select .react-select__indicator:before {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIHZpZXdCb3g9IjAgMCA4IDQiPjxwb2x5Z29uIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcG9pbnRzPSI0IDAgOCA0IDAgNCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA0KSIvPjwvc3ZnPg==);
           background-size: cover;
           content: "";
           height: 4px;
           position: absolute;
           right: 0;
           top: 20px;
           width: 8px
         }
     
         .form__select .react-select__indicator svg,
         .form__select .react-select__indicator-separator {
           display: none
         }
     
         .form__select .react-select__menu {
           border-radius: 0;
           margin: 0
         }
     
         .form__select .react-select__menu-list {
           padding: 0;
           text-align: left
         }
     
         .form__select .react-select__option {
           background: #fff;
           color: #0b152c;
           font-size: 13px;
           padding: 14px 20px
         }
     
         .form__select .react-select__option--is-focused {
           background: #91a0c1;
           color: #0b152c
         }
     
         .form__select--blue .react-select__input-container {
           border-bottom: 1px solid #0b152c;
           padding: 0 20px 12px
         }
     
         .form__select--blue .react-select__placeholder,
         .form__select--blue .react-select__single-value {
           color: #0b152c
         }
     
         .form__select--blue .react-select__indicator:before {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTAgNSI+PHBvbHlnb24gZmlsbD0iIzBCMTUyQyIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjUgMCAxMCA1IDAgNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1KSIvPjwvc3ZnPg==)
         }
     
         .form__radio {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           margin-right: 37px;
           margin-top: 28px
         }
     
         .form__radio:last-of-type {
           margin-right: 0
         }
     
         .form__radio a {
           color: #233356
         }
     
         .form__radio input[type=radio] {
           opacity: 0;
           position: fixed;
           width: 0
         }
     
         .form__radio input[type=radio]+label {
           color: #233356;
           cursor: pointer;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           line-height: 24px;
           padding-left: 38px;
           position: relative;
           width: 100%
         }
     
         .form__radio input[type=radio]+label:before {
           background: transparent;
           border: 1px solid #0b152c;
           border-radius: 50%;
           content: "";
           height: 22px;
           left: 0;
           position: absolute;
           top: 0;
           width: 22px
         }
     
         .form__radio input[type=radio]+label:after {
           background-size: cover;
           background: #233356;
           border-radius: 50%;
           content: "";
           display: block;
           height: 14px;
           left: 4px;
           opacity: 0;
           position: absolute;
           top: 4px;
           width: 14px
         }
     
         .form__radio input[type=radio]:checked+label:after {
           opacity: 1
         }
     
         .form__checkbox {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           margin-bottom: 40px;
           margin-top: 0
         }
     
         @media(min-width:900px) {
           .form__checkbox {
             margin-bottom: 0
           }
         }
     
         .form__checkbox a {
           color: #13203c;
           text-decoration: none
         }
     
         .form__checkbox input[type=checkbox] {
           opacity: 0;
           position: fixed;
           width: 0
         }
     
         .form__checkbox input[type=checkbox]+label {
           color: #233356;
           cursor: pointer;
           font-size: 13px;
           font-weight: 500;
           letter-spacing: .2px;
           line-height: 26px;
           max-width: calc(100% - 47px);
           padding-left: 47px;
           position: relative;
           text-transform: none;
           width: 100%
         }
     
         @media(min-width:900px) {
           .form__checkbox input[type=checkbox]+label {
             max-width: 260px
           }
         }
     
         .form__checkbox input[type=checkbox]+label:before {
           background: transparent;
           border: 1px solid #0b152c;
           content: "";
           height: 28px;
           left: 0;
           position: absolute;
           top: 0;
           width: 28px
         }
     
         .form__checkbox input[type=checkbox]+label:after {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE3IDE0Ij48cG9seWdvbiBmaWxsPSIjMjMzMzU2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHBvaW50cz0iNi42MDcgMTQgMTYuMTk3IDEuMzM4IDE0LjQzIDAgNi4xNzEgMTAuOTA1IDEuMjg0IDcuNDI5IDAgOS4yMzUiLz48L3N2Zz4=);
           background-size: cover;
           content: "";
           display: block;
           height: 14px;
           left: 6px;
           opacity: 0;
           position: absolute;
           top: 7px;
           width: 16px
         }
     
         .form__checkbox input[type=checkbox]:checked+label:after {
           opacity: 1
         }
     
         .form__checkbox-group {
           display: flex;
           flex-wrap: wrap;
           margin-top: 0
         }
     
         .form__checkbox-group .form__checkbox {
           margin-top: 20px !important;
           width: 175px
         }
     
         .form__checkbox-group .form__checkbox input[type=checkbox]+label {
           line-height: 21px;
           max-width: calc(100% - 47px);
           padding-left: 37px
         }
     
         @media(min-width:900px) {
           .form__checkbox-group .form__checkbox input[type=checkbox]+label {
             max-width: 260px
           }
         }
     
         .form__checkbox-group .form__checkbox input[type=checkbox]+label:before {
           height: 20px;
           width: 20px
         }
     
         .form__checkbox-group .form__checkbox input[type=checkbox]+label:after {
           height: 11px;
           left: 4px;
           top: 4px;
           width: 13px
         }
     
         .form .hide-field {
           display: none
         }
     
         .form__input {
           background: transparent;
           border: 0;
           border-bottom: 1px solid #233356;
           border-radius: 0;
           box-shadow: none;
           color: #233356;
           font-size: 14px;
           font-weight: 500;
           height: 33px;
           line-height: 33px;
           margin-bottom: 0;
           padding: 10px 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .form__input {
             font-size: 12px;
             margin-bottom: 0
           }
         }
     
         .form__input::-webkit-input-placeholder {
           color: #233356;
           opacity: 1
         }
     
         .form__input:-ms-input-placeholder {
           color: #233356;
           opacity: 1
         }
     
         .form__input::placeholder {
           color: #233356;
           opacity: 1
         }
     
         .form__input:focus {
           outline: 0
         }
     
         .form__file input {
           line-height: 1
         }
     
         .form__file .dropzone {
           border: 1px dashed #13203c;
           border-radius: 3px;
           cursor: pointer;
           height: 128px;
           margin-top: 10px;
           padding-top: 13px;
           text-align: center;
           width: 100%
         }
     
         .form__file .dropzone p {
           width: 100%
         }
     
         .form__textarea {
           border: 1px solid #233356;
           color: #233356;
           font-size: 16px;
           height: 121px;
           line-height: 1.3;
           padding: 16px
         }
     
         @media(min-width:900px) {
           .form__textarea {
             font-size: 12px
           }
         }
     
         .form__textarea::-webkit-input-placeholder {
           color: #233356;
           opacity: 1
         }
     
         .form__textarea:-ms-input-placeholder {
           color: #233356;
           opacity: 1
         }
     
         .form__textarea::placeholder {
           color: #233356;
           opacity: 1
         }
     
         .form__textarea:focus {
           outline: 0
         }
     
         .form label {
           color: #233356;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           text-transform: uppercase
         }
     
         .form__row--check label {
           max-width: 280px !important
         }
     
         .form__row--submit {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           width: 100%
         }
     
         .form__row--submit .btn {
           align-items: center;
           align-self: flex-start;
           background: #233356;
           border: 1px solid #233356;
           cursor: pointer;
           display: flex;
           font-weight: 600;
           height: 36px;
           justify-content: center;
           justify-self: center;
           letter-spacing: 2px;
           padding: 0;
           text-align: center;
           text-transform: uppercase;
           width: 100%
         }
     
         @media(min-width:900px) {
           .form__row--submit .btn {
             width: 163px
           }
         }
     
         .form--community .form__row {
           margin-bottom: 48px
         }
     
         .form--community .form__row label {
           font-size: 14px;
           font-weight: 500;
           letter-spacing: .2px;
           text-transform: none
         }
     
         ::selection {
           background: #13203c;
           color: #fff
         }
     
         .react-reveal {
           opacity: 1
         }
     
         body {
           font-weight: 500;
           min-height: 100vh
         }
     
         #___gatsby,
         body {
           overflow-x: hidden;
           width: 100vw
         }
     
         h1,
         h2,
         h3,
         h4,
         h5,
         h6 {
           font-weight: 700
         }
     
         div,
         h1,
         h2,
         h3,
         h4,
         h5,
         h6,
         li,
         ol,
         p,
         span,
         table,
         ul {
           color: #233356;
           font-family: Montserrat, sans-serif
         }
     
         div,
         li,
         ol,
         p,
         span,
         table,
         ul {
           font-size: 13px;
           font-weight: 500;
           line-height: 1.2
         }
     
         p {
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px
         }
     
         a {
           color: #13203c;
           font-family: Montserrat, sans-serif
         }
     
         .btn {
           background: #13203c;
           border: 0;
           border-radius: 0;
           box-shadow: none;
           color: #fff;
           cursor: pointer;
           display: inline-block;
           font-size: 13px;
           font-size: 12px;
           font-weight: 500;
           font-weight: 600;
           letter-spacing: 2px;
           line-height: 1;
           padding: 13px 18px;
           text-decoration: none;
           text-transform: uppercase;
           transition: .3s ease
         }
     
         @media(min-width:900px) {
           .btn:hover {
             background: #13203c
           }
         }
     
         .btn--outline {
           background: transparent;
           border: 1px solid #13203c;
           color: #13203c;
           cursor: pointer;
           padding: 10px 14px
         }
     
         @media(min-width:900px) {
           .btn--outline:hover {
             color: #fff
           }
         }
     
         .error404__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .error404__inner {
             padding: 0 30px
           }
         }
     
         .error404__content {
           padding: 0 0 48px
         }
     
         .fslightbox-container {
           background: rgba(19, 32, 60, .8)
         }
     
         .fslightbox-toolbar {
           background: #0b152c
         }
     
         .fslightbox-slide-number-container span {
           color: #fff
         }
     
         .header {
           background: #13223c;
           border-bottom: 1px solid hsla(0, 0%, 100%, .2);
           padding: 20px 0;
           position: fixed;
           top: 0;
           transition: background-color .3s ease-in-out;
           width: 100vw;
           z-index: 10
         }
     
         @media(min-width:900px) {
           .header {
             padding: 34px 0
           }
         }
     
         .header__inner {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .header__inner {
             padding: 0 30px
           }
         }
     
         .header__logo {
           text-decoration: none;
           width: 124px
         }
     
         @media(min-width:900px) {
           .header__logo {
             width: 158px
           }
         }
     
         .header__logo span {
           margin-left: 12px
         }
     
         .header__logo svg {
           display: block;
           width: 124px
         }
     
         @media(min-width:900px) {
           .header__logo svg {
             width: 158px
           }
         }
     
         .header__nav {
           display: block
         }
     
         .header__nav ul {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           list-style: none;
           margin: 0;
           padding: 0
         }
     
         .header__nav ul li {
           display: none;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 1.72px;
           margin-bottom: 0;
           padding: 10px 0;
           position: relative;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .header__nav ul li {
             display: block;
             margin-left: 40px
           }
         }
     
         @media(min-width:1240px) {
           .header__nav ul li {
             margin-left: 95px
           }
         }
     
         .header__nav ul li a {
           color: #fff;
           cursor: pointer;
           display: block;
           margin-bottom: -2px;
           overflow: hidden;
           padding-bottom: 2px;
           position: relative;
           text-decoration: none
         }
     
         .header__nav ul li a:before {
           background: #fff;
           bottom: 0;
           content: "";
           height: 1px;
           left: 0;
           position: absolute;
           -webkit-transform: translateX(-101%);
           transform: translateX(-101%);
           transition: -webkit-transform .3s ease-in-out;
           transition: transform .3s ease-in-out;
           transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
           width: 100%;
           z-index: -1
         }
     
         .header__nav ul li a.active:before,
         .header__nav ul li a:hover:before {
           -webkit-transform: translateX(0);
           transform: translateX(0)
         }
     
         .header__nav ul li a.active:before {
           width: calc(100% - 2px)
         }
     
         .header__nav ul li a.header__search-icon {
           margin-bottom: -5px;
           padding-bottom: 0
         }
     
         .header__nav ul li a.header__search-icon:before {
           display: none
         }
     
         .header__nav ul li:first-of-type {
           margin-left: 0
         }
     
         .header__nav ul li:nth-last-child(2) {
           display: block
         }
     
         .header__nav ul li:last-of-type {
           display: block;
         //  margin-left: 24px
         }
     
         .header__nav ul li button {
           align-items: center;
           background: transparent;
           border: 0;
           box-shadow: none;
           color: #fff;
           cursor: pointer;
           display: flex;
           flex-wrap: wrap;
           padding: 0
         }
     
         @media(min-width:900px) {
           .header__nav ul li:hover ul {
             opacity: 1;
             visibility: visible
           }
         }
     
         .header__nav ul ul {
           background: #13203c;
           left: -20px;
           opacity: 0;
           padding: 15px 20px;
           position: absolute;
           text-align: left;
           top: 100%;
           transition: all .5s ease;
           visibility: hidden;
           width: 190px
         }
     
         .header__nav ul ul.menu-lease {
           width: 240px
         }
     
         .header__nav ul ul.menu-about,
         .header__nav ul ul.menu-sold {
           width: 170px
         }
     
         .header__nav ul ul li {
           font-size: 12px;
           font-weight: 500;
           line-height: 20px;
           margin: 0 0 4px;
           padding: 0;
           width: 100%
         }
     
         .header__nav ul ul li:last-of-type {
           margin-bottom: 0;
           margin-left: 0
         }
     
         .header__nav ul ul li a {
           color: #fff;
           cursor: pointer;
           display: inline-block;
           margin-bottom: -2px;
           overflow: hidden;
           padding-bottom: 0;
           position: relative
         }
     
         .header__nav ul ul li a:before {
           background: #fff;
           bottom: 0;
           content: "";
           height: 1px;
           left: 0;
           position: absolute;
           -webkit-transform: translateX(-101%);
           transform: translateX(-101%);
           transition: -webkit-transform .3s ease-in-out;
           transition: transform .3s ease-in-out;
           transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
           width: 100%;
           z-index: -1
         }
     
         .header__nav ul ul li a:hover:before {
           -webkit-transform: translateX(0);
           transform: translateX(0)
         }
     
         .header__nav ul ul li a:before {
           z-index: 1
         }
     
         .header__hamburger {
           background: none;
           border: 0;
           border-radius: 0;
           box-shadow: none;
           cursor: pointer;
           display: block;
           height: 20px;
           padding: 0;
           width: 26px
         }
     
         .header__hamburger:focus {
           outline: none
         }
     
         .header__hamburger .lines {
           background: #fff;
           display: block;
           height: 1px;
           position: relative;
           transition: all .3s linear;
           width: 100%
         }
     
         .header__hamburger .lines:after,
         .header__hamburger .lines:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           left: 0;
           position: absolute;
           top: 0;
           -webkit-transform-origin: top left;
           transform-origin: top left;
           transition: all .3s ease;
           width: 100%
         }
     
         .header__hamburger .lines:before {
           top: -8px
         }
     
         .header__hamburger .lines:after {
           top: 8px
         }
     
         .header__hamburger.active .lines {
           background: transparent
         }
     
         .header__hamburger.active .lines:before {
           left: 50%;
           top: 50%;
           -webkit-transform: rotate(45deg) translate(-50%, -50%);
           transform: rotate(45deg) translate(-50%, -50%)
         }
     
         .header__hamburger.active .lines:after {
           left: 50%;
           top: 50%;
           -webkit-transform: rotate(-45deg) translate(-50%, -50%);
           transform: rotate(-45deg) translate(-50%, -50%)
         }
     
         .header--scrolled {
           background: #13203c !important
         }
     
         .header--open {
           background: #0b152c
         }
     
         .header--open .header__nav ul li {
           display: none
         }
     
         .header--open .header__nav ul li:last-of-type,
         .header--open .header__nav ul li:nth-last-child(2) {
           display: block
         }
     
         .header__off-canvas-close {
           background: transparent;
           border: 0;
           box-shadow: none;
           display: none;
           height: 100vh;
           left: 0;
           position: fixed;
           top: 0;
           width: 100vw;
           z-index: 1
         }
     
         .header__off-canvas-close.active {
           display: block
         }
     
         .header__off-canvas-close:focus {
           outline: 0
         }
     
         .buying .header,
         .error404 .header,
         .kollosche-tv .header,
         .privacy-policy .header,
         .terms-conditions .header {
           background: #13203c
         }
     
         .home .header {
           background: #13203c
         }
     
         .home .header--scrolled {
           background: #13203c
         }
     
         .home main {
           padding-top: 0
         }
     
         .kollosche-tv main {
           padding-top: 81px
         }
     
         @media(min-width:900px) {
           .kollosche-tv main {
             padding-top: 109px
           }
         }
     
         .agent-template .header {
           display: none
         }
     
         .agent-template .header--agent {
           background: #0b152c;
           display: block
         }
     
         .agent-template .header .btn {
           line-height: 15px;
           padding: 10px 15px
         }
     
         .agent-template .header .btn:before {
           display: none
         }
     
         .agent-template .header .btn--white {
           align-items: center;
           background: transparent;
           border: 1px solid #fff;
           display: flex;
           flex-wrap: wrap
         }
     
         .agent-template .header .btn--white svg {
           margin-right: 10px
         }
     
         .agent-template .header .btn--tertiary {
           background: #91a0c1;
           border: 1px solid #91a0c1;
           color: #0b152c
         }
     
         .off-canvas {
           background: transparent;
           height: 100vh;
           left: 0;
           opacity: 0;
           padding: 0;
           position: fixed;
           top: 0;
           -webkit-transform: translateX(-100%);
           transform: translateX(-100%);
           transition: all .3s ease;
           visibility: hidden;
           width: 100vw;
           z-index: 9
         }
     
         .off-canvas--active {
           opacity: 1;
           -webkit-transform: translateX(0);
           transform: translateX(0);
           visibility: visible
         }
     
         .off-canvas__inner {
           height: 100%;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           position: relative
         }
     
         @media(min-width:900px) {
           .off-canvas__inner {
             padding: 0 30px
           }
         }
     
         .off-canvas__nav {
           background: #0b152c;
           height: 100%;
           padding: 124px 0 80px;
           position: relative;
           width: 100%;
           z-index: 8
         }
     
         @media(min-width:900px) {
           .off-canvas__nav {
             padding: 208px 0 80px;
             width: 240px
           }
         }
     
         .off-canvas__nav:before {
           background: #0b152c;
           content: "";
           height: 100vh;
           position: absolute;
           right: -20px;
           top: 0;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .off-canvas__nav:before {
             right: 0;
             width: 50vw
           }
         }
     
         .off-canvas__nav ul {
           margin: 0;
           padding: 0
         }
     
         .off-canvas__nav ul li {
           display: block;
           font-size: 12px;
           letter-spacing: 2.7px;
           line-height: 20px;
           margin-bottom: 34px
         }
     
         .off-canvas__nav ul li,
         .off-canvas__nav ul li button {
           cursor: pointer;
           font-weight: 600;
           position: relative;
           text-transform: uppercase
         }
     
         .off-canvas__nav ul li button {
           background: transparent;
           border: 0;
           box-shadow: none;
           color: #fff;
           font-size: 11px;
           letter-spacing: 2.4px;
           opacity: 1;
           padding: 0
         }
     
         @media(min-width:900px) {
           .off-canvas__nav ul li button {
             font-size: 12px;
             letter-spacing: 2.7px;
             opacity: .4
           }
     
           .off-canvas__nav ul li button:hover {
             opacity: 1
           }
         }
     
         .off-canvas__nav ul li button:before {
           background: #fff;
           content: "";
           height: 1px;
           opacity: 0;
           position: absolute;
           right: calc(100% + 88px);
           top: 50%;
           -webkit-transform: translateY(-50%);
           transform: translateY(-50%);
           transition: all .3s ease;
           width: 50vw
         }
     
         .off-canvas__nav ul li button.active {
           opacity: 1
         }
     
         .off-canvas__nav ul li button.active:before {
           opacity: 1;
           right: calc(100% + 8px)
         }
     
         @media(min-width:900px) {
           .off-canvas__nav ul li button.active:before {
             right: calc(100% + 18px)
           }
         }
     
         .off-canvas__nav ul li a {
           font-size: 11px;
           letter-spacing: 2.4px;
           opacity: 1
         }
     
         @media(min-width:900px) {
           .off-canvas__nav ul li a {
             font-size: 12px;
             letter-spacing: 2.7px;
             opacity: .4
           }
     
           .off-canvas__nav ul li a:hover {
             opacity: 1
           }
         }
     
         .off-canvas__nav ul li a.active {
           opacity: 1
         }
     
         .off-canvas__nav ul li ul {
           display: none
         }
     
         .off-canvas__nav ul li ul li {
           font-family: Montserrat, sans-serif;
           font-size: 18px;
           font-weight: 500;
           margin-bottom: 10px;
           width: 100%
         }
     
         .off-canvas__nav ul li ul li a {
           color: #fff
         }
     
         .off-canvas__nav ul li ul li a[aria-current=page] {
           color: #fff;
           font-weight: 700
         }
     
         .off-canvas__nav ul li ul li a[aria-current=page]:before {
           display: none
         }
     
         @media(min-width:900px) {
           .off-canvas__nav ul li ul li a:hover {
             color: #fff
           }
         }
     
         .off-canvas__nav ul li ul li:first-of-type {
           margin-top: 20px
         }
     
         .off-canvas__nav ul li ul li:last-of-type {
           margin-bottom: 20px;
           padding: 0
         }
     
         @media(min-width:900px) {
           .off-canvas__nav ul li ul li {
             margin-left: 0;
             padding: 0
           }
         }
     
         .off-canvas__nav ul li ul li:first-of-type:after {
           display: none
         }
     
         .off-canvas__nav ul li ul.active {
           display: block
         }
     
         .off-canvas__nav ul li a {
           color: #fff;
           text-decoration: none
         }
     
         .off-canvas__nav ul span:after {
           display: none
         }
     
         .off-canvas__social {
           margin-top: 100px
         }
     
         .off-canvas__social p {
           margin: 0;
           position: relative
         }
     
         .off-canvas__social p .phone {
           color: #fff;
           display: block;
           font-size: 14px;
           font-weight: 600;
           letter-spacing: 2.7px;
           line-height: 20px;
           margin-bottom: 20px;
           text-decoration: none;
           text-transform: uppercase
         }
     
         .off-canvas__social ul {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           list-style: none;
           width: 155px
         }
     
         .off-canvas__social ul li {
           margin: 0
         }
     
         .off-canvas__sub-nav {
           -ms-overflow-style: none;
           background: #13203c;
           height: 100%;
           left: 0;
           opacity: 0;
           overflow-y: scroll;
           padding: 110px 0 80px;
           position: absolute;
           scrollbar-width: none;
           top: 0;
           -webkit-transform: translateX(-100%);
           transform: translateX(-100%);
           transition: all .3s ease;
           visibility: hidden;
           width: 100vw;
           z-index: 9
         }
     
         .off-canvas__sub-nav::-webkit-scrollbar {
           display: none
         }
     
         @media(min-width:900px) {
           .off-canvas__sub-nav {
             background: rgba(19, 32, 60, .8);
             left: 270px;
             mix-blend-mode: multiply;
             padding: 208px 45px 80px;
             width: 520px;
             z-index: 2
           }
         }
     
         .off-canvas__sub-nav.active {
           opacity: 1;
           -webkit-transform: translateX(0);
           transform: translateX(0);
           visibility: visible
         }
     
         .off-canvas__sub-nav ul {
           list-style: none
         }
     
         .off-canvas__sub-nav ul li {
           font-size: 16px;
           font-weight: 500;
           letter-spacing: 2.5px;
           line-height: 24px;
           margin-bottom: 20px;
           text-transform: uppercase
         }
     
         .off-canvas__sub-nav ul li.heading {
           color: #fff;
           font-size: 11px;
           font-weight: 600;
           margin-bottom: 20px
         }
     
         @media(min-width:900px) {
           .off-canvas__sub-nav ul li.heading {
             display: none
           }
         }
     
         .off-canvas__sub-nav ul li span {
           color: #fff;
           display: inline-block;
           font-size: 16px;
           line-height: 1.2;
           text-decoration: none
         }
     
         .off-canvas__sub-nav ul li ul {
           margin: 20px
         }
     
         @media(min-width:900px) {
           .off-canvas__sub-nav ul li ul {
             margin: 30px
           }
         }
     
         .off-canvas__sub-nav ul li ul li {
           font-size: 13px;
           line-height: 20px;
           margin-bottom: 10px
         }
     
         @media(min-width:900px) {
           .off-canvas__sub-nav ul li ul li {
             font-size: 14px;
             line-height: 26px;
             margin-bottom: 16px
           }
         }
     
         .off-canvas__sub-nav ul li.back {
           margin-top: 60px;
           position: relative
         }
     
         @media(min-width:900px) {
           .off-canvas__sub-nav ul li.back {
             display: none
           }
         }
     
         .off-canvas__sub-nav ul li.back:before {
           background: #fff;
           content: "";
           height: 1px;
           position: absolute;
           right: calc(100% + 10px);
           top: 50%;
           transition: all .3s ease;
           width: 50vw
         }
     
         .off-canvas__sub-nav ul li.back button {
           background: transparent;
           border: 0;
           box-shadow: none;
           color: #fff;
           font-size: 11px;
           font-weight: 500;
           letter-spacing: 2.4px;
           line-height: 1;
           margin-bottom: 0;
           padding: 0;
           text-transform: uppercase
         }
     
         .off-canvas__sub-nav ul li a {
           color: #fff;
           cursor: pointer;
           display: inline-block;
           line-height: 1.2;
           margin-bottom: -2px;
           overflow: hidden;
           padding-bottom: 2px;
           position: relative;
           text-decoration: none
         }
     
         .off-canvas__sub-nav ul li a:before {
           background: #fff;
           bottom: 0;
           content: "";
           height: 1px;
           left: 0;
           position: absolute;
           -webkit-transform: translateX(-101%);
           transform: translateX(-101%);
           transition: -webkit-transform .3s ease-in-out;
           transition: transform .3s ease-in-out;
           transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
           width: 100%;
           z-index: -1
         }
     
         .off-canvas__sub-nav ul li a:hover:before {
           -webkit-transform: translateX(0);
           transform: translateX(0)
         }
     
         .hero-banner {
           height: calc(100vh - 90px);
           position: relative;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .hero-banner {
             height: 100vh
           }
         }
     
         .hero-banner:before {
           background: rgba(35, 51, 86, .7);
           content: "";
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 1
         }
     
         .hero-banner__inner {
           height: 100%;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           position: relative;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .hero-banner__inner {
             padding: 0 30px
           }
         }
     
         .hero-banner video,
         .hero-banner__bg {
           height: 100%;
           left: 0;
           margin: 0;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .hero-banner video--mobile,
         .hero-banner__bg--mobile {
           display: block
         }
     
         @media(min-width:900px) {
     
           .hero-banner video--mobile,
           .hero-banner__bg--mobile {
             display: none
           }
         }
     
         .hero-banner video--desktop,
         .hero-banner__bg--desktop {
           display: none
         }
     
         @media(min-width:900px) {
     
           .hero-banner video--desktop,
           .hero-banner__bg--desktop {
             display: block
           }
         }
     
         .hero-banner__content {
           left: 50%;
           position: absolute;
           text-align: center;
           top: 55%;
           -webkit-transform: translate(-50%, -50%);
           transform: translate(-50%, -50%);
           width: calc(100% - 40px)
         }
     
         @media(min-width:900px) {
           .hero-banner__content {
             left: 50%;
             position: absolute;
             top: 55%;
             -webkit-transform: translate(-50%, -50%);
             transform: translate(-50%, -50%);
             width: 842px
           }
         }
     
         .hero-banner__menu {
           margin: 0 0 32px
         }
     
         .hero-banner__menu ul {
           display: flex;
           justify-content: space-between;
           margin: 0;
           padding: 0
         }
     
         .hero-banner__menu ul li {
           font-size: 12px;
           font-weight: 500;
           letter-spacing: 2.6px;
           list-style-type: none;
           margin: 0;
           opacity: .5;
           padding: 0;
           text-transform: uppercase;
           transition: opacity .3s ease
         }
     
         .hero-banner__menu ul li:last-of-type {
           display: none
         }
     
         @media(min-width:900px) {
           .hero-banner__menu ul li:last-of-type {
             display: block
           }
         }
     
         .hero-banner__menu ul li.active {
           opacity: 1
         }
     
         .hero-banner__menu ul li a,
         .hero-banner__menu ul li button {
           background: transparent;
           border: 0;
           border-radius: 0;
           box-shadow: none;
           color: #fff;
           cursor: pointer;
           font-size: 12px;
           font-weight: 500;
           letter-spacing: 2.6px;
           padding: 0;
           position: relative;
           text-decoration: none;
           text-transform: uppercase
         }
     
         .hero-banner__menu ul li a:before,
         .hero-banner__menu ul li button:before {
           background: hsla(0, 0%, 100%, .4);
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           vertical-align: middle;
           width: 15px
         }
     
         @media(min-width:900px) {
     
           .hero-banner__menu ul li a:before,
           .hero-banner__menu ul li button:before {
             margin-right: 20px;
             width: 63px
           }
         }
     
         .hero-banner__menu ul:last-child {
           margin-left: 0
         }
     
         .hero-banner__menu--mobile {
           display: block
         }
     
         @media(min-width:900px) {
           .hero-banner__menu--mobile {
             display: none
           }
         }
     
         .hero-banner__menu--mobile ul {
           margin-top: 40px
         }
     
         .hero-banner__menu--mobile ul li:last-of-type {
           display: flex;
           justify-content: center;
           text-align: center;
           width: 100%
         }
     
         .hero-banner__heading {
           margin: 0 0 32px;
           text-align: center
         }
     
         .hero-banner__heading h1 {
           color: #fff;
           font-size: 22px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 30px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .hero-banner__heading h1 {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px
           }
         }
     
         .hero-banner .search {
           display: block
         }
     
         .hero-banner__search.active .form__row--dropdowns {
           display: flex
         }
     
         .hero-banner__mobile-toggle {
           background: #13203c;
           border: none;
           border-radius: 0;
           box-shadow: none;
           color: #fff;
           cursor: pointer;
           display: block;
           margin: 10px 0 0;
           padding: 14px 20px;
           position: relative;
           text-align: left;
           width: 100%
         }
     
         .hero-banner__mobile-toggle.active {
           display: none
         }
     
         .hero-banner__mobile-toggle svg {
           position: absolute;
           right: 20px;
           top: 20px
         }
     
         @media(min-width:900px) {
           .hero-banner__mobile-toggle {
             display: none
           }
         }
     
         .hero-banner__weather {
           color: #fff;
           display: flex;
           justify-content: center
         }
     
         .hero-banner__weather--mobile {
           bottom: 50px;
           display: flex;
           left: 50%;
           position: absolute;
           -webkit-transform: translateX(-50%);
           transform: translateX(-50%);
           width: 100%
         }
     
         @media(min-width:900px) {
           .hero-banner__weather--mobile {
             display: none
           }
         }
     
         .hero-banner__weather--desktop {
           display: none
         }
     
         @media(min-width:900px) {
           .hero-banner__weather--desktop {
             display: flex;
             margin-top: 40px
           }
     
           .hero-banner__weather {
             margin-top: 120px
           }
         }
     
         .hero-banner__weather p {
           color: #fff;
           font-size: 10px;
           letter-spacing: 2.5px;
           line-height: 22px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .hero-banner__weather p {
             font-size: 12px
           }
         }
     
         .hero-banner__weather p span {
           color: #fff;
           font-size: 10px;
           letter-spacing: 2.5px;
           line-height: 22px;
           margin-left: 12px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .hero-banner__weather p span {
             font-size: 12px
           }
         }
     
         .hero-banner__weather svg {
           margin-right: 12px
         }
     
         @media(min-width:900px) {
           .hero-banner__weather svg {
             margin-right: 13px
           }
         }
     
         .search {
           position: relative;
           z-index: 6
         }
     
         .search.active .search__form .form__row--dropdowns {
           display: flex
         }
     
         .search .form {
           margin-bottom: 0;
           padding-bottom: 0;
           width: 100%
         }
     
         .search .form__row--search {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-bottom: 12px;
           position: relative
         }
     
         .search .form__row--search .form__select {
           width: 124px
         }
     
         .search .form__row--search .form__select .react-select__control {
           background: #91a0c1;
           border: 0 !important;
           border-radius: 0;
           cursor: pointer;
           font-size: 14px;
           height: 51px;
           overflow: hidden
         }
     
         @media(min-width:900px) {
           .search .form__row--search .form__select .react-select__control {
             font-size: 15px;
             height: 55px
           }
         }
     
         .search .form__row--search .form__select .react-select__control--is-focused {
           outline: 0
         }
     
         .search .form__row--search .form__select .react-select__value-container {
           border: 0;
           padding: 0
         }
     
         .search .form__row--search .form__select .react-select__input-container {
           border-radius: 0;
           cursor: pointer;
           display: flex;
           flex: unset;
           margin: 0;
           padding: 18px 20px;
           text-align: left
         }
     
         @media(min-width:900px) {
           .search .form__row--search .form__select .react-select__input-container {
             padding: 20px
           }
         }
     
         .search .form__row--search .form__select .react-select__input {
           cursor: pointer
         }
     
         .search .form__row--search .form__select .react-select__placeholder,
         .search .form__row--search .form__select .react-select__single-value {
           color: #13203c;
           cursor: pointer;
           font-size: 14px;
           font-weight: 600;
           letter-spacing: 3px;
           text-align: left;
           text-indent: 20px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
     
           .search .form__row--search .form__select .react-select__placeholder,
           .search .form__row--search .form__select .react-select__single-value {
             font-size: 15px;
             letter-spacing: 3.2px
           }
         }
     
         .search .form__row--search .form__select .react-select__indicator:before {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTAgNSI+PHBvbHlnb24gZmlsbD0iIzBCMTUyQyIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjUgMCAxMCA1IDAgNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1KSIvPjwvc3ZnPg==);
           background-size: cover;
           content: "";
           height: 5px;
           position: absolute;
           right: 20px;
           top: 23px;
           width: 10px
         }
     
         @media(min-width:900px) {
           .search .form__row--search .form__select .react-select__indicator:before {
             top: 25px
           }
         }
     
         .search .form__row--search .form__select .react-select__indicator svg,
         .search .form__row--search .form__select .react-select__indicator-separator {
           display: none
         }
     
         .search .form__row--search .form__select .react-select__menu {
           border-radius: 0;
           margin: 0
         }
     
         .search .form__row--search .form__select .react-select__menu-list {
           padding: 0;
           text-align: left
         }
     
         .search .form__row--search .form__select .react-select__option {
           font-size: 13px;
           padding: 14px 20px
         }
     
         .search .form__row--search .form__select .react-select__option--is-focused {
           background: #13203c;
           color: #fff
         }
     
         .search .form__row--search .form__input {
           background: #fff;
           border: 0;
           border-radius: 0;
           box-shadow: none;
           color: #13203c;
           font-size: 15px;
           height: 51px;
           letter-spacing: .2px;
           line-height: 51px;
           padding: 20px;
           width: calc(100% - 124px)
         }
     
         @media(min-width:900px) {
           .search .form__row--search .form__input {
             height: 55px;
             line-height: 55px
           }
         }
     
         .search .form__row--search .form__input::-webkit-input-placeholder {
           color: #13203c;
           opacity: 1
         }
     
         .search .form__row--search .form__input:-ms-input-placeholder {
           color: #13203c;
           opacity: 1
         }
     
         .search .form__row--search .form__input::placeholder {
           color: #13203c;
           opacity: 1
         }
     
         .search .form__row--search button {
           background: transparent;
           border: 0;
           border-radius: 0;
           box-shadow: none;
           margin: 0;
           padding: 0;
           position: absolute;
           right: 20px;
           top: 16px
         }
     
         @media(min-width:900px) {
           .search .form__row--search button {
             top: 18px
           }
         }
     
         .search .form__row--dropdowns {
           display: none;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 12px
         }
     
         .search .form__row--dropdowns.active {
           display: flex
         }
     
         @media(min-width:900px) {
           .search .form__row--dropdowns {
             display: flex
           }
         }
     
         .search .form__row--dropdowns .form__select--max,
         .search .form__row--dropdowns .form__select--min {
           margin-bottom: 4px;
           width: calc(50% - 2px)
         }
     
         @media(min-width:900px) {
     
           .search .form__row--dropdowns .form__select--max,
           .search .form__row--dropdowns .form__select--min {
             margin-bottom: 0;
             width: 25%
           }
         }
     
         .search .form__row--dropdowns .form__select--bath,
         .search .form__row--dropdowns .form__select--bed,
         .search .form__row--dropdowns .form__select--car {
           width: calc(33% - 2px)
         }
     
         @media(min-width:900px) {
     
           .search .form__row--dropdowns .form__select--bath,
           .search .form__row--dropdowns .form__select--bed,
           .search .form__row--dropdowns .form__select--car {
             width: 16%
           }
         }
     
         .search .form__row--dropdowns .form__select--min-price {
           margin-bottom: 4px;
           order: 1;
           width: calc(50% - 2px)
         }
     
         @media(min-width:900px) {
           .search .form__row--dropdowns .form__select--min-price {
             margin-bottom: 0;
             order: 2;
             width: 25%
           }
         }
     
         .search .form__row--dropdowns .form__select--max-price {
           margin-bottom: 4px;
           order: 2;
           width: calc(50% - 2px)
         }
     
         @media(min-width:900px) {
           .search .form__row--dropdowns .form__select--max-price {
             margin-bottom: 0;
             order: 3;
             width: 25%
           }
         }
     
         .search .form__row--dropdowns .form__select--max-area {
           order: 5;
           width: calc(33% - 2px)
         }
     
         @media(min-width:900px) {
           .search .form__row--dropdowns .form__select--max-area {
             width: 16%
           }
         }
     
         .search .form__row--dropdowns .form__select--min-area {
           order: 4;
           width: calc(33% - 2px)
         }
     
         @media(min-width:900px) {
           .search .form__row--dropdowns .form__select--min-area {
             width: 16%
           }
         }
     
         .search .form__row--dropdowns .form__select--type {
           order: 3;
           width: calc(33% - 2px)
         }
     
         @media(min-width:900px) {
           .search .form__row--dropdowns .form__select--type {
             margin-bottom: 0;
             order: 1;
             width: 16%
           }
         }
     
         .search .form__row--dropdowns .form__select .react-select__control {
           background: #13203c;
           border: 0 !important;
           border-radius: 0;
           box-shadow: none;
           font-size: 14px
         }
     
         @media(min-width:900px) {
           .search .form__row--dropdowns .form__select .react-select__control {
             font-size: 15px
           }
         }
     
         .search .form__row--dropdowns .form__select .react-select__control--is-focused {
           outline: 0
         }
     
         .search .form__row--dropdowns .form__select .react-select__value-container {
           border: 0;
           padding: 0
         }
     
         .search .form__row--dropdowns .form__select .react-select__input-container {
           border-radius: 0;
           display: flex;
           flex: unset;
           margin: 0;
           padding: 14px 20px;
           text-align: left
         }
     
         .search .form__row--dropdowns .form__select .react-select__placeholder,
         .search .form__row--dropdowns .form__select .react-select__single-value {
           color: #fff;
           font-size: 13px;
           font-weight: 500;
           letter-spacing: .2px;
           text-align: left;
           text-indent: 20px
         }
     
         .search .form__row--dropdowns .form__select .react-select__indicator:before {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIHZpZXdCb3g9IjAgMCA4IDQiPjxwb2x5Z29uIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcG9pbnRzPSI0IDAgOCA0IDAgNCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA0KSIvPjwvc3ZnPg==);
           background-size: cover;
           content: "";
           height: 4px;
           position: absolute;
           right: 20px;
           top: 20px;
           width: 8px
         }
     
         .search .form__row--dropdowns .form__select .react-select__indicator svg,
         .search .form__row--dropdowns .form__select .react-select__indicator-separator {
           display: none
         }
     
         .search .form__row--dropdowns .form__select .react-select__menu {
           border-radius: 0;
           margin: 0
         }
     
         .search .form__row--dropdowns .form__select .react-select__menu-list {
           padding: 0;
           text-align: left
         }
     
         .search .form__row--dropdowns .form__select .react-select__option {
           font-size: 13px;
           padding: 14px 20px
         }
     
         .search .form__row--dropdowns .form__select .react-select__option--is-focused {
           background: #13203c;
           color: #fff
         }
     
         .search-team .form {
           margin-bottom: 0;
           padding-bottom: 0;
           width: 100%
         }
     
         .search-team .form__row {
           margin-bottom: 10px
         }
     
         .search-team .form__row--search {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           position: relative
         }
     
         .search-team .form__row--search .form__select {
           width: 124px
         }
     
         .search-team .form__row--search .form__select .react-select__control {
           background: #91a0c1;
           border: 0 !important;
           border-radius: 0;
           font-size: 14px
         }
     
         @media(min-width:900px) {
           .search-team .form__row--search .form__select .react-select__control {
             font-size: 15px
           }
         }
     
         .search-team .form__row--search .form__select .react-select__control--is-focused {
           outline: 0
         }
     
         .search-team .form__row--search .form__select .react-select__value-container {
           border: 0;
           padding: 0
         }
     
         .search-team .form__row--search .form__select .react-select__single-value {
           color: #13203c;
           padding-left: 20px
         }
     
         .search-team .form__row--search .form__select .react-select__input-container {
           border-radius: 0;
           display: flex;
           flex: unset;
           margin: 0;
           padding: 18px 20px;
           text-align: left
         }
     
         @media(min-width:900px) {
           .search-team .form__row--search .form__select .react-select__input-container {
             padding: 20px
           }
         }
     
         .search-team .form__row--search .form__select .react-select__placeholder {
           color: #13203c;
           font-size: 14px;
           font-weight: 600;
           letter-spacing: 3px;
           text-align: left;
           text-indent: 20px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .search-team .form__row--search .form__select .react-select__placeholder {
             font-size: 15px;
             letter-spacing: 3.2px
           }
         }
     
         .search-team .form__row--search .form__select .react-select__indicator:before {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTAgNSI+PHBvbHlnb24gZmlsbD0iIzBCMTUyQyIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjUgMCAxMCA1IDAgNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1KSIvPjwvc3ZnPg==);
           background-size: cover;
           content: "";
           height: 5px;
           position: absolute;
           right: 20px;
           top: 23px;
           width: 10px
         }
     
         @media(min-width:900px) {
           .search-team .form__row--search .form__select .react-select__indicator:before {
             top: 25px
           }
         }
     
         .search-team .form__row--search .form__select .react-select__indicator svg,
         .search-team .form__row--search .form__select .react-select__indicator-separator {
           display: none
         }
     
         .search-team .form__row--search .form__select .react-select__menu {
           border-radius: 0;
           margin: 0
         }
     
         .search-team .form__row--search .form__select .react-select__menu-list {
           padding: 0;
           text-align: left
         }
     
         .search-team .form__row--search .form__select .react-select__option {
           font-size: 13px;
           padding: 10px 20px
         }
     
         .search-team .form__row--search .form__select .react-select__option--is-focused {
           background: #13203c;
           color: #fff
         }
     
         .search-team .form__row--search .form__input {
           background: #fff;
           border: 0;
           border-radius: 0;
           box-shadow: none;
           color: #13203c;
           font-size: 15px;
           height: 51px;
           letter-spacing: .2px;
           line-height: 51px;
           padding: 20px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .search-team .form__row--search .form__input {
             height: 55px;
             line-height: 55px
           }
         }
     
         .search-team .form__row--search .form__input::-webkit-input-placeholder {
           color: #13203c;
           opacity: 1
         }
     
         .search-team .form__row--search .form__input:-ms-input-placeholder {
           color: #13203c;
           opacity: 1
         }
     
         .search-team .form__row--search .form__input::placeholder {
           color: #13203c;
           opacity: 1
         }
     
         .search-team .form__row--search button {
           background: transparent;
           border: 0;
           border-radius: 0;
           box-shadow: none;
           margin: 0;
           padding: 0;
           position: absolute;
           right: 20px;
           top: 16px
         }
     
         @media(min-width:900px) {
           .search-team .form__row--search button {
             top: 18px
           }
         }
     
         .search-team .form__row--dropdowns {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 12px
         }
     
         .search-team .form__row--dropdowns .form__select .react-select {
           cursor: pointer
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__control {
           background: #91a0c1;
           border: 0 !important;
           border-radius: 0;
           box-shadow: none;
           font-size: 14px
         }
     
         @media(min-width:900px) {
           .search-team .form__row--dropdowns .form__select .react-select__control {
             font-size: 15px
           }
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__control--is-focused {
           outline: 0
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__value-container {
           border: 0;
           padding: 0
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__single-value {
           color: #13203c;
           cursor: pointer;
           padding-left: 20px
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__input {
           cursor: pointer
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__input-container {
           border-radius: 0;
           cursor: pointer;
           display: flex;
           flex: unset;
           margin: 0;
           padding: 14px 20px;
           text-align: left
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__placeholder {
           color: #0b152c;
           cursor: pointer;
           font-size: 13px;
           font-weight: 500;
           letter-spacing: .2px;
           text-align: left;
           text-indent: 20px
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__indicator:before {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTAgNSI+PHBvbHlnb24gZmlsbD0iIzBCMTUyQyIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjUgMCAxMCA1IDAgNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1KSIvPjwvc3ZnPg==);
           background-size: cover;
           content: "";
           height: 4px;
           position: absolute;
           right: 20px;
           top: 20px;
           width: 8px
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__indicator svg,
         .search-team .form__row--dropdowns .form__select .react-select__indicator-separator {
           display: none
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__menu {
           border-radius: 0;
           margin: 0
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__menu-list {
           padding: 0;
           text-align: left
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__option {
           font-size: 13px;
           padding: 14px 20px
         }
     
         .search-team .form__row--dropdowns .form__select .react-select__option--is-focused {
           background: #13203c;
           color: #fff
         }
     
         .search-team .form__row--dropdowns .form__select--office {
           margin-bottom: 10px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .search-team .form__row--dropdowns .form__select--office {
             margin: 0 3.5px 0 0;
             width: calc(50% - 57px)
           }
         }
     
         .search-team .form__row--dropdowns .form__select--state {
           width: 107px
         }
     
         .search-team .form__row--dropdowns .form__select--area {
           margin-right: 10px;
           width: calc(100% - 117px)
         }
     
         @media(min-width:900px) {
           .search-team .form__row--dropdowns .form__select--area {
             margin-right: 3.5px;
             width: calc(50% - 57px)
           }
         }
     
         .property-options {
           background: #fff;
           overflow: hidden;
           padding: 60px 0 0;
           position: relative;
           width: 100vw
         }
     
         .property-options:before {
           background: #0b152c;
           bottom: 0;
           content: "";
           height: 200px;
           left: 0;
           position: absolute;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .property-options:before {
             height: 169px
           }
     
           .property-options {
             padding: 100px 0 0
           }
         }
     
         .property-options__heading {
           margin: 0 auto 48px;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .property-options__heading {
             margin-bottom: 80px;
             padding: 0 30px
           }
         }
     
         .property-options__heading h2 {
           color: #233356;
           font-size: 20px;
           font-weight: 500;
           letter-spacing: 1.6px;
           line-height: 30px;
           margin: 0;
           max-width: 951px
         }
     
         @media(min-width:900px) {
           .property-options__heading h2 {
             font-size: 32px;
             line-height: 48px
           }
         }
     
         .property-options__content {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           padding-left: 20px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .property-options__content {
             padding-left: 20px
           }
         }
     
         @media(min-width:1375px) {
           .property-options__content {
             padding-left: calc(50vw - 687.5px)
           }
         }
     
         .property-options__menu {
           align-items: center;
           background: transparent;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-bottom: 20px;
           margin-left: -20px;
           position: relative;
           width: 100%;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .property-options__menu {
             background: #fff;
             display: block;
             margin-bottom: 0;
             margin-left: 0;
             width: 300px
           }
         }
     
         .property-options__menu:before {
           background: #fff;
           content: "";
           display: none;
           height: 100%;
           position: absolute;
           right: 0;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .property-options__menu:before {
             display: block
           }
         }
     
         .property-options__menu:after {
           background: #0b152c;
           bottom: 0;
           content: "";
           display: none;
           height: 160px;
           position: absolute;
           right: 0;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .property-options__menu:after {
             display: block;
             height: 169px
           }
         }
     
         .property-options__menu .btn {
           background: #13203c;
           color: #fff;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.3px;
           margin-top: -30px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .property-options__menu .btn {
             margin-top: 0
           }
         }
     
         .property-options__menu ul {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           list-style-type: none;
           margin: 0;
           padding: 0;
           position: relative;
           width: auto
         }
     
         @media(min-width:900px) {
           .property-options__menu ul {
             display: block;
             margin-left: -54px;
             width: 100%
           }
         }
     
         .property-options__menu ul li {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           margin-bottom: 30px;
           text-transform: uppercase;
           width: 100%
         }
     
         @media(min-width:900px) {
           .property-options__menu ul li {
             margin-bottom: 50px
           }
         }
     
         .property-options__menu ul li a,
         .property-options__menu ul li button {
           background: transparent;
           border: 0;
           box-shadow: none;
           color: #233356;
           cursor: pointer;
           font-size: 12px;
           letter-spacing: 2.6px;
           opacity: .5;
           padding: 0;
           position: relative;
           text-decoration: none;
           text-transform: uppercase
         }
     
         .property-options__menu ul li a:before,
         .property-options__menu ul li button:before {
           background: rgba(35, 51, 86, .4);
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           vertical-align: middle;
           width: 15px
         }
     
         @media(min-width:900px) {
     
           .property-options__menu ul li a:before,
           .property-options__menu ul li button:before {
             margin-right: 20px;
             width: 63px
           }
         }
     
         .property-options__menu ul li.active a,
         .property-options__menu ul li.active button {
           opacity: 1
         }
     
         .property-options__slides {
           display: block;
           padding-bottom: 60px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .property-options__slides {
             padding-bottom: 0;
             width: calc(100% - 300px)
           }
         }
     
         .property-options__slides .property-options__slider {
           -ms-overflow-style: none;
           cursor: pointer;
           display: flex;
           flex-wrap: nowrap;
           overflow-x: scroll;
           overflow-y: hidden;
           padding-bottom: 35px;
           position: relative;
           scrollbar-width: none;
           transition: all .3s;
           will-change: transform
         }
     
         @media(min-width:900px) {
           .property-options__slides .property-options__slider {
             padding-bottom: 60px
           }
         }
     
         .property-options__slides .property-options__slider::-webkit-scrollbar {
           display: block;
           height: 5px;
           width: 100%
         }
     
         .property-options__slides .property-options__slider::-webkit-scrollbar-track {
           background: #0b152c;
           height: 1px;
           width: 100%
         }
     
         .property-options__slides .property-options__slider::-webkit-scrollbar-thumb {
           background-color: #fff;
           height: 5px
         }
     
         .property-options__slides .property__meta {
           display: none
         }
     
         @media(min-width:900px) {
           .property-options__slides .property__meta {
             align-items: flex-end;
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             max-height: 0;
             overflow: hidden
           }
         }
     
         .property-options.dark-theme,
         .property-options.dark-theme:before {
           background: #0b152c
         }
     
         .property-options.dark-theme .property-options__heading h2 {
           color: #fff
         }
     
         .property-options.dark-theme .property-options__menu:after,
         .property-options.dark-theme .property-options__menu:before {
           background: #0b152c
         }
     
         .property-options.dark-theme .property-options__menu ul li a {
           color: #fff
         }
     
         .property-options.dark-theme .property-options__menu ul li a:before {
           background: hsla(0, 0%, 100%, .4)
         }
     
         .property-options.dark-theme .property-options__slider::-webkit-scrollbar-track {
           background: #0b152c
         }
     
         .property-options.dark-theme .property-options__slider::-webkit-scrollbar-thumb {
           background-color: #fff
         }
     
         .property-option {
           display: inline-block;
           flex: 1 0 252px;
           height: 365px;
           margin-right: 24px;
           position: relative;
           width: 252px
         }
     
         @media(min-width:900px) {
           .property-option {
             flex: 1 0 325px;
             height: 625px;
             margin-right: 29px;
             width: 325px
           }
     
           .property-option:hover:before {
             opacity: 1
           }
     
           .property-option:hover .property-option__details {
             background: transparent
           }
     
           .property-option:hover .property-option__details .title {
             height: auto
           }
     
           .property-option:hover .property-option__details .copy {
             max-height: 625px;
             padding-top: 25px
           }
     
           .property-option:hover .property-option__main-stat,
           .property-option:hover .property-option__view {
             opacity: 1
           }
         }
     
         .property-option:before {
           background: rgba(11, 21, 44, .7);
           content: "";
           height: 100%;
           left: 0;
           top: 0;
           width: 100%;
           z-index: 1
         }
     
         .property-option:before,
         .property-option__view {
           opacity: 0;
           position: absolute;
           transition: all .3s ease
         }
     
         .property-option__view {
           color: #fff;
           display: block;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           right: 62px;
           text-transform: uppercase;
           top: 72px;
           z-index: 2
         }
     
         .property-option__view:after {
           background: #fff;
           content: "";
           height: 1px;
           left: calc(100% + 12px);
           position: absolute;
           top: calc(50% - 1px);
           width: 50px
         }
     
         .property-option__main-stat {
           left: 20px;
           opacity: 0;
           position: absolute;
           top: 44px;
           transition: all .3s ease;
           z-index: 2
         }
     
         .property-option__main-stat .value {
           color: #fff;
           display: block;
           font-size: 30px;
           font-weight: 500;
           letter-spacing: 3.75px;
           text-transform: uppercase
         }
     
         .property-option__main-stat .label {
           color: #91a0c1;
           display: block;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.5px;
           line-height: 22px;
           margin-top: 10px;
           max-width: 150px;
           text-transform: uppercase
         }
     
         .property-option__link {
           display: block;
           z-index: 3
         }
     
         .property-option__image,
         .property-option__link {
           height: 100%;
           left: 0;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .property-option__image {
           -o-object-fit: cover;
           object-fit: cover
         }
     
         .property-option__details {
           background: rgba(11, 21, 44, .7);
           bottom: 0;
           padding: 24px 20px;
           position: absolute;
           transition: all .3s ease;
           width: 100%;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .property-option__details {
             padding: 30px 26px
           }
         }
     
         .property-option__details .title {
           color: #fff;
           font-size: 18px;
           height: 52px;
           letter-spacing: 2px;
           line-height: 26px;
           margin-bottom: 0;
           max-width: 196px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .property-option__details .title {
             font-size: 18px;
             height: 44px;
             line-height: 24px;
             max-width: 100%
           }
         }
     
         .property-option__details .copy {
           color: #fff;
           display: none;
           max-height: 0;
           overflow: hidden
         }
     
         @media(min-width:900px) {
           .property-option__details .copy {
             display: block;
             font-size: 14px;
             line-height: 26px
           }
     
           .why-us-showcase {
             height: 724px
           }
         }
     
         .why-us-showcase__inner {
           height: 100%;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0
         }
     
         @media(min-width:900px) {
           .why-us-showcase__inner {
             padding: 0 30px;
             padding-left: 30px;
             padding-right: 30px
           }
         }
     
         .why-us-showcase__content {
           height: 100%;
           position: relative
         }
     
         .why-us-showcase__image {
           height: 308px;
           position: relative;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .why-us-showcase__image {
             height: 100%;
             position: absolute;
             right: 376px;
             top: 0;
             width: calc(100vw - 376px)
           }
         }
     
         .why-us-showcase__image .gatsby-image-wrapper,
         .why-us-showcase__image img {
           left: 0;
           position: absolute !important;
           top: 0
         }
     
         .why-us-showcase__image div,
         .why-us-showcase__image img {
           height: 100%;
           -o-object-fit: cover;
           object-fit: cover;
           width: 100%
         }
     
         @media(min-width:900px) {
     
           .why-us-showcase__image div,
           .why-us-showcase__image img {
             height: 100%;
             max-width: calc(100vw - 376px);
             width: calc(100vw - 376px)
           }
         }
     
         .why-us-showcase__slides {
           padding: 48px 20px 40px;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .why-us-showcase__slides {
             bottom: 116px;
             padding: 48px 20px 0;
             position: absolute;
             right: 0;
             width: 340px;
             z-index: 3
           }
         }
     
         .why-us-showcase__slide {
           color: #13203c
         }
     
         .why-us-showcase__slide a {
           display: block;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           margin-bottom: 32px;
           position: relative;
           text-align: left;
           text-decoration: none;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .why-us-showcase__slide a {
             font-size: 14px;
             text-align: left
           }
         }
     
         .why-us-showcase__slide a:before {
           background: rgba(35, 51, 86, .4);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 11px;
           width: 50vw;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .why-us-showcase__slide a:before {
             left: calc(100% + 20px);
             right: auto
           }
         }
     
         .why-us-showcase__slide .title {
           font-size: 20px;
           font-weight: 600;
           letter-spacing: 3px;
           line-height: 24px;
           margin: 0 0 16px;
           padding: 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .why-us-showcase__slide .title {
             font-size: 26px;
             letter-spacing: 3.5px;
             line-height: 39px;
             margin-bottom: 28px
           }
         }
     
         .why-us-showcase__slide .copy {
           font-size: 14px;
           line-height: 26px;
           margin: 0;
           padding: 0;
           width: 344px
         }
     
         @media(min-width:900px) {
           .why-us-showcase__slide .copy {
             font-size: 15px;
             width: 300px
           }
         }
     
         .why-us-showcase .slick-dots {
           text-align: right;
           top: -5px
         }
     
         @media(min-width:900px) {
           .why-us-showcase .slick-dots {
             bottom: -40px;
             top: auto
           }
         }
     
         .why-us-showcase .slick-dots li {
           margin: 0
         }
     
         .why-us-showcase .slick-dots button:before {
           font-size: 10px
         }
     
         .why-us-showcase__buttons {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           position: absolute;
           top: 248px;
           width: 100vw;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .why-us-showcase__buttons {
             justify-content: flex-start;
             margin-left: -20px;
             margin-right: -20px;
             position: relative;
             top: 0;
             width: auto
           }
         }
     
         .why-us-showcase__buttons:before {
           background: rgba(19, 32, 60, .8);
           content: "";
           display: block;
           height: 100%;
           position: absolute;
           right: 100%;
           top: 0;
           width: 50vw
         }
     
         .why-us-showcase__button {
           align-items: center;
           align-self: center;
           background: rgba(19, 32, 60, .8);
           display: flex;
           justify-content: space-between;
           padding: 14px 20px;
           text-decoration: none;
           transition: all .3s ease;
           width: calc(50% - 2px)
         }
     
         @media(min-width:900px) {
           .why-us-showcase__button {
             padding: 20px 35px;
             width: auto
           }
     
           .why-us-showcase__button:hover {
             background: #233356
           }
     
           .why-us-showcase__button:hover svg {
             -webkit-transform: translateX(5px);
             transform: translateX(5px)
           }
     
           .why-us-showcase__button:last-of-type {
             margin-left: 4px
           }
         }
     
         .why-us-showcase__button span {
           color: #fff;
           font-size: 10px;
           letter-spacing: 2px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .why-us-showcase__button span {
             font-size: 12px;
             letter-spacing: 2.6px
           }
         }
     
         .why-us-showcase__button svg {
           height: 32px;
           margin-left: 15px;
           transition: all .3s ease;
           width: 32px
         }
     
         @media(min-width:900px) {
           .why-us-showcase__button svg {
             height: 40px;
             margin-left: 35px;
             width: 40px
           }
         }
     
         .media-outlets__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .media-outlets__inner {
             padding: 0 30px
           }
         }
     
         .media-outlets__heading {
           width: 100%
         }
     
         @media(min-width:900px) {
           .media-outlets__heading {
             width: 300px
           }
         }
     
         .media-outlets__heading h3 {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           line-height: 24px;
           margin-bottom: 30px;
           position: relative;
           text-transform: uppercase
         }
     
         .media-outlets__heading h3:before {
           background: rgba(35, 51, 86, .5);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 11px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .media-outlets__heading h3:before {
             right: calc(100% + 20px)
           }
         }
     
         .media-outlets__content {
           padding: 48px 0 60px
         }
     
         @media(min-width:900px) {
           .media-outlets__content {
             display: flex;
             padding: 100px 0
           }
         }
     
         .media-outlets__items {
           align-items: center;
           align-self: center;
           display: flex;
           flex-wrap: wrap;
           justify-content: center;
           width: 100%
         }
     
         @media(min-width:900px) {
           .media-outlets__items {
             justify-content: space-between;
             width: calc(100% - 300px)
           }
         }
     
         .media-outlets__item {
           margin: 10px 15px;
           width: auto
         }
     
         .media-outlets__item .gatsby-image-wrapper,
         .media-outlets__item img {
           max-width: 200px
         }
     
         @media(min-width:900px) {
           .media-outlets__item {
             margin: 0
           }
         }
     
         .featured-news {
           background: #0b152c;
           margin-top: -1px;
           padding: 0 0 35px;
           position: relative
         }
     
         @media(min-width:900px) {
           .featured-news {
             margin-top: 0;
             padding: 100px 0 80px
           }
         }
     
         .featured-news:before {
           background: #fff;
           bottom: 0;
           content: "";
           height: 115px;
           left: 0;
           position: absolute;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .featured-news:before {
             height: 200px
           }
         }
     
         .featured-news__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .featured-news__inner {
             padding: 0 30px
           }
         }
     
         .featured-news__heading {
           align-items: flex-end;
           display: flex;
           justify-content: space-between;
           margin-bottom: 44px
         }
     
         @media(min-width:900px) {
           .featured-news__heading {
             margin-bottom: 64px
           }
         }
     
         .featured-news__heading h4 {
           color: #fff;
           font-size: 18px;
           font-weight: 600;
           letter-spacing: 2px;
           line-height: 24px;
           margin: 0;
           max-width: 170px;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .featured-news__heading h4 {
             max-width: 270px
           }
         }
     
         .featured-news__heading h4:before {
           background: hsla(0, 0%, 100%, .4);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 20px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .featured-news__heading h4:before {
             right: calc(100% + 20px)
           }
     
           .featured-news__heading h4 {
             font-size: 30px;
             letter-spacing: 3.75px;
             line-height: 42px
           }
         }
     
         .featured-news .tv-grid__items {
           margin: 32px 0 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .featured-news .tv-grid__items {
             margin: 64px 0 0
           }
         }
     
         .featured-news .tv-grid__items .tv-grid__item:nth-child(2),
         .featured-news .tv-grid__items .tv-grid__item:nth-child(3) {
           display: none
         }
     
         @media(min-width:900px) {
     
           .featured-news .tv-grid__items .tv-grid__item:nth-child(2),
           .featured-news .tv-grid__items .tv-grid__item:nth-child(3) {
             display: block
           }
         }
     
         .featured-news__button {
           align-items: center;
           align-self: center;
           background: #13203c;
           display: flex;
           justify-content: space-between;
           margin-right: -20px;
           padding: 14px 20px;
           text-decoration: none;
           transition: all .3s ease;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .featured-news__button {
             margin-right: 0;
             padding: 20px 35px;
             width: auto
           }
     
           .featured-news__button:hover {
             background: #233356
           }
     
           .featured-news__button:hover svg {
             -webkit-transform: translateX(5px);
             transform: translateX(5px)
           }
     
           .featured-news__button:last-of-type {
             margin-left: 4px
           }
         }
     
         .featured-news__button span {
           color: #fff;
           font-size: 10px;
           letter-spacing: 2px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .featured-news__button span {
             font-size: 12px;
             letter-spacing: 2.6px
           }
         }
     
         .featured-news__button svg {
           height: 32px;
           margin-left: 15px;
           transition: all .3s ease;
           width: 32px
         }
     
         @media(min-width:900px) {
           .featured-news__button svg {
             height: 40px;
             margin-left: 35px;
             width: 40px
           }
         }
     
         .featured-news__items {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between
         }
     
         .sign-off {
           background: transparent;
           margin-top: 0;
           position: relative
         }
     
         .sign-off:before {
           background: rgba(35, 51, 86, .7);
           content: "";
           mix-blend-mode: multiply;
           position: absolute;
           z-index: 1
         }
     
         .sign-off:before,
         .sign-off__bg {
           height: 100%;
           left: 0;
           top: 0;
           width: 100%
         }
     
         .sign-off__bg {
           margin: 0;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute !important
         }
     
         .sign-off__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           position: relative;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .sign-off__inner {
             padding: 0 30px
           }
         }
     
         .sign-off__icon {
           align-items: center;
           align-self: center;
           background: #233356;
           display: flex;
           height: 48px;
           justify-content: center;
           position: absolute;
           right: 20px;
           top: -24px;
           width: 48px;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .sign-off__icon {
             height: 54px;
             right: 30px;
             top: -27px;
             width: 54px
           }
         }
     
         .sign-off__title {
           padding: 60px 0 50px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .sign-off__title {
             padding: 100px 0;
             width: 45%
           }
         }
     
         .sign-off__title h4 {
           color: #fff;
           font-size: 15px;
           font-weight: 500;
           letter-spacing: 1.9px;
           line-height: 26px;
           margin: 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .sign-off__title h4 {
             font-size: 28px;
             letter-spacing: 3.5px;
             line-height: 44px;
             text-transform: uppercase
           }
         }
     
         .sign-off__content {
           align-items: flex-end;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           width: 100%
         }
     
         @media(min-width:900px) {
           .sign-off__content {
             padding: 100px 0 0;
             width: 50%
           }
         }
     
         .sign-off__content p {
           color: #fff;
           font-size: 14px;
           font-weight: 500;
           letter-spacing: .2px;
           line-height: 26px
         }
     
         .sign-off__text {
           display: none;
           max-width: 434px;
           text-align: left
         }
     
         @media(min-width:900px) {
           .sign-off__text {
             display: block;
             padding-bottom: 90px;
             text-align: right
           }
         }
     
         .sign-off__buttons {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-left: -20px;
           margin-right: -20px
         }
     
         @media(min-width:900px) {
           .sign-off__buttons {
             justify-content: flex-end;
             margin-left: 0;
             margin-right: 0
           }
         }
     
         .sign-off__button {
           align-items: center;
           align-self: center;
           background: #13203c;
           border: 0;
           border-radius: 0;
           box-shadow: none;
           cursor: pointer;
           display: flex;
           justify-content: space-between;
           padding: 14px 20px;
           text-decoration: none;
           transition: all .3s ease;
           width: calc(50% - 2px)
         }
     
         @media(min-width:900px) {
           .sign-off__button {
             padding: 20px 35px;
             width: auto
           }
     
           .sign-off__button:hover {
             background: #233356
           }
     
           .sign-off__button:hover svg {
             -webkit-transform: translateX(5px);
             transform: translateX(5px)
           }
     
           .sign-off__button:last-of-type {
             margin-left: 4px
           }
         }
     
         .sign-off__button span {
           color: #fff;
           font-size: 10px;
           letter-spacing: 2px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .sign-off__button span {
             font-size: 12px;
             letter-spacing: 2.6px
           }
         }
     
         .sign-off__button svg {
           height: 32px;
           margin-left: 15px;
           min-width: 32px;
           transition: all .3s ease;
           width: 32px
         }
     
         @media(min-width:900px) {
           .sign-off__button svg {
             height: 40px;
             margin-left: 35px;
             min-width: 40px;
             width: 40px
           }
         }
     
         .sign-off__subscribe {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .sign-off__subscribe {
             padding-top: 40px;
             padding: 0 30px
           }
         }
     
         .sign-off__subscribe .subscribe {
           margin-bottom: 40px;
           margin-top: 40px
         }
     
         .thank-you {
           width: 100vw
         }
     
         @media(min-width:900px) {
           .thank-you {
             height: 100vh
           }
         }
     
         .thank-you:before {
           background: rgba(35, 51, 86, .51);
           content: "";
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 1
         }
     
         .thank-you__inner {
           height: 100%;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           position: relative;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .thank-you__inner {
             align-items: center;
             display: flex;
             flex-wrap: wrap;
             padding: 0 30px
           }
         }
     
         .thank-you__image {
           width: 100%
         }
     
         .thank-you__bg {
           height: 100%;
           left: 0;
           margin: 0;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .thank-you__bg--mobile {
           display: block
         }
     
         @media(min-width:900px) {
           .thank-you__bg--mobile {
             display: none
           }
         }
     
         .thank-you__bg--desktop {
           display: none
         }
     
         @media(min-width:900px) {
           .thank-you__bg--desktop {
             display: block
           }
         }
     
         .thank-you__content {
           width: 100%
         }
     
         .thank-you__heading {
           position: relative
         }
     
         .thank-you__details {
           color: #fff;
           display: flex;
           flex-direction: column;
           height: 100%;
           justify-content: space-between;
           padding: 179px 0 127px
         }
     
         @media(min-width:900px) {
           .thank-you__details {
             padding: 0
           }
         }
     
         .thank-you__details .heading {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 30px;
           margin: 0 0 28px;
           padding: 0;
           text-transform: uppercase;
           width: 250px
         }
     
         .thank-you__details .heading:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 10px);
           top: 14px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .thank-you__details .heading:before {
             right: calc(100% + 18px);
             top: 52px
           }
     
           .thank-you__details .heading {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px;
             margin-bottom: 40px;
             width: 491px
           }
         }
     
         .thank-you__details .copy p {
           color: #fff;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px
         }
     
         @media(min-width:900px) {
           .thank-you__details .copy {
             width: 409px
           }
         }
     
         .thank-you__details a {
           color: #fff
         }
     
         .thank-you__details a:first-child {
           margin-right: 24px
         }
     
         .thank-you__footer {
           align-items: flex-end;
           align-self: center;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           width: 100%
         }
     
         .thank-you__footer .weather {
           margin-top: 140px
         }
     
         @media(min-width:900px) {
           .thank-you__footer .weather {
             margin-bottom: 0
           }
         }
     
         .thank-you__footer .weather p,
         .thank-you__footer .weather span {
           color: #fff;
           font-size: 11px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
     
           .thank-you__footer .weather p,
           .thank-you__footer .weather span {
             font-size: 12px
           }
         }
     
         .thank-you__footer .weather span {
           margin-left: 12px
         }
     
         .thank-you__footer .weather__inner {
           padding: 0
         }
     
         .thank-you__buttons {
           display: flex;
           flex-wrap: wrap;
           margin-top: 80px;
           max-width: 344px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .thank-you__buttons {
             margin-top: 125px;
             max-width: none;
             width: auto
           }
         }
     
         .thank-you__button {
           align-items: center;
           align-self: center;
           display: flex;
           justify-content: space-between;
           margin-bottom: 15px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .thank-you__button {
             margin-bottom: 0;
             width: auto
           }
         }
     
         .thank-you__button a {
           background: transparent;
           border: 1px solid #fff;
           display: block;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           text-align: center;
           text-transform: uppercase;
           width: 100%
         }
     
         .thank-you__button a:hover,
         .thank-you__button:first-child a {
           background: #13203c;
           border: 1px solid #13203c
         }
     
         @media(min-width:900px) {
           body.thank-you .header {
             background: transparent
           }
         }
     
         body.thank-you .footer {
           display: none
         }
     
         .basic-content {
           padding: 100px 0 60px
         }
     
         @media(min-width:900px) {
           .basic-content {
             padding: 160px 0 80px
           }
         }
     
         .basic-content__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .basic-content__inner {
             padding: 0 30px
           }
         }
     
         .basic-content h1 {
           font-size: 22px;
           font-weight: 500;
           letter-spacing: 2px;
           line-height: 30px;
           margin-bottom: 30px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .basic-content h1 {
             font-size: 40px;
             letter-spacing: 4px;
             line-height: 52px
           }
         }
     
         .basic-content .btn {
           background: #13203c
         }
     
         .tv-filters {
           background: #efefef;
           padding: 48px 0
         }
     
         .tv-filters__inner {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .tv-filters__inner {
             padding: 0 30px
           }
         }
     
         .tv-filters h4 {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.5px;
           margin: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .tv-filters h4:before {
           background: #0b152c;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 20px);
           top: 6px;
           width: 50vw
         }
     
         .tv-filters .form__radio-group .form__radio {
           margin-left: 0;
           margin-right: 15px;
           margin-top: 15px
         }
     
         @media(min-width:900px) {
           .tv-filters .form__radio-group .form__radio {
             margin-left: 30px;
             margin-right: 0;
             margin-top: 0
           }
         }
     
         .tv-filters .form__radio-group label {
           text-transform: uppercase
         }
     
         .tv-grid {
           padding: 60px 0
         }
     
         .tv-grid__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .tv-grid__inner {
             padding: 0 30px
           }
         }
     
         .tv-grid__items {
           display: flex;
           flex-wrap: wrap;
           width: 100%
         }
     
         .tv-grid__item {
           margin-bottom: 30px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .tv-grid__item {
             margin-right: 2%;
             width: 32%
           }
     
           .tv-grid__item:nth-child(3n) {
             margin-right: 0
           }
     
           .tv-grid__item:hover img {
             -webkit-transform: scale(1.04);
             transform: scale(1.04)
           }
         }
     
         .tv-grid__header {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           padding-bottom: 48px
         }
     
         .tv-grid__header h4 {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.5px;
           line-height: 22px;
           margin-bottom: 0;
           text-transform: uppercase
         }
     
         .tv-grid__header h4 strong {
           font-weight: 700
         }
     
         .video-card__image {
           cursor: pointer;
           height: 230px;
           position: relative;
           width: 100%
         }
     
         .video-card__image .gatsby-image-wrapper,
         .video-card__image img {
           height: 100%;
           width: 100%
         }
     
         .video-card__image:before {
           background: rgba(35, 51, 86, .34);
           content: "";
           mix-blend-mode: multiply
         }
     
         .video-card__image img,
         .video-card__image:before {
           height: 100%;
           left: 0;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .video-card__image img {
           margin: 0;
           -o-object-fit: cover;
           object-fit: cover;
           transition: all .3s ease !important
         }
     
         .video-card__image .play {
           background: transparent;
           border: 0;
           bottom: 15px;
           box-shadow: none;
           padding: 0;
           position: absolute;
           right: 15px
         }
     
         .video-card__image .play svg {
           display: block
         }
     
         .video-card__tag {
           background: #233356;
           color: #fff;
           font-size: 11px;
           font-weight: 700;
           letter-spacing: 2.4px;
           padding: 7px 9px;
           position: absolute;
           right: 10px;
           text-transform: uppercase;
           top: 10px
         }
     
         .video-card__title {
           cursor: pointer;
           margin-top: 14px
         }
     
         @media(min-width:900px) {
           .video-card__title {
             margin-top: 20px
           }
         }
     
         .video-card__title h4 {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 1.4px;
           line-height: 22px;
           margin: 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .video-card__title h4 {
             font-size: 14px;
             line-height: 24px
           }
         }
     
         .weather {
           color: #efefef
         }
     
         .weather__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .weather__inner {
             padding: 0 30px
           }
         }
     
         .weather__content {
           align-items: center;
           align-self: center;
           display: flex;
           justify-content: space-between
         }
     
         .weather__content svg {
           margin-right: 16px
         }
     
         .weather__content p {
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.36px;
           line-height: 22px;
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .weather__content p {
             font-size: 12px;
             letter-spacing: 2.57px;
             line-height: 22px
           }
         }
     
         .team-block {
           background: #0b152c;
           min-height: 400px
         }
     
         .team-block__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .team-block__inner {
             padding: 0 30px
           }
     
           .team-block__content {
             display: flex;
             padding-top: 30px
           }
         }
     
         .team-block__menu {
           margin: 0;
           padding: 0 0 96px
         }
     
         .team-block__menu ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .team-block__menu ul li {
           color: #91a0c1;
           font-size: 11px;
           letter-spacing: 2.3px;
           line-height: 20px;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .team-block__menu ul li {
             display: inline-block;
             font-size: 12px;
             letter-spacing: 2.6px;
             line-height: 22px;
             width: 99px
           }
         }
     
         .team-block__menu ul li span {
           color: #fff;
           display: block;
           font-size: 11px;
           letter-spacing: 2.3px;
           line-height: 20px
         }
     
         @media(min-width:900px) {
           .team-block__menu ul li span {
             display: inline-block;
             font-size: 12px;
             letter-spacing: 2.6px;
             line-height: 22px
           }
     
           .team-block__menu {
             margin: 0;
             padding: 0;
             width: 215px
           }
         }
     
         .team-block__members {
           display: flex;
           flex-direction: column;
           padding-bottom: 60px;
           position: relative;
           width: 100%;
           z-index: 4
         }
     
         @media(min-width:900px) {
           .team-block__members {
             flex-direction: row;
             flex-wrap: wrap;
             padding-bottom: 0;
             width: calc(100% - 215px)
           }
         }
     
         .team-block__member {
           margin: 0 0 40px;
           padding: 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .team-block__member {
             margin: 0 44px 72px 0;
             padding: 0 0 25px
           }
         }
     
         .team-block__member:last-child {
           margin-bottom: 0
         }
     
         @media(min-width:900px) {
           .team-block__member:last-child {
             margin-bottom: 72px
           }
     
           .team {
             min-height: 427px;
             width: 173px
           }
         }
     
         .team__content {
           display: flex;
           flex-direction: row;
           height: 100%;
           width: 100%
         }
     
         @media(min-width:900px) {
           .team__content {
             flex-direction: column;
             justify-content: flex-start
           }
         }
     
         .team__details {
           display: flex;
           flex-direction: column;
           flex-wrap: wrap;
           justify-content: space-between;
           width: calc(100% - 184px)
         }
     
         .team__details h4 {
           font-size: 13px;
           font-weight: 700;
           line-height: 22px;
           margin: 0 0 12px;
           text-transform: uppercase
         }
     
         .team__details h4,
         .team__details p {
           color: #fff;
           letter-spacing: 2px;
           padding: 0
         }
     
         .team__details p {
           font-size: 12px;
           line-height: 12px;
           margin: 0
         }
     
         @media(min-width:900px) {
           .team__details p {
             margin-bottom: 12px
           }
         }
     
         .team__details p.email {
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .team__details p.email {
             margin-bottom: 20px
           }
         }
     
         .team__details a {
           color: #fff;
           font-size: 12px;
           font-weight: 700;
           letter-spacing: 2px;
           line-height: 12px
         }
     
         .team__details .general-detail p {
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 24px
         }
     
         .team__details .general-detail p:last-child {
           margin-bottom: 0;
           max-height: 47px;
           overflow: hidden
         }
     
         @media(min-width:900px) {
           .team__details .general-detail {
             border-bottom: 1px solid #efefef;
             margin-bottom: 19px;
             min-height: 124px;
             padding-bottom: 19px
           }
         }
     
         .team__details .contact-detail {
           display: none
         }
     
         @media(min-width:900px) {
           .team__details .contact-detail {
             display: block
           }
     
           .team__details {
             width: 100%
           }
         }
     
         .team__image {
           margin: 0 24px 0 0;
           overflow: hidden;
           padding: 0
         }
     
         .team__image img {
           display: block;
           height: 160px;
           margin-bottom: 0;
           -o-object-fit: cover;
           object-fit: cover;
           transition: all .3s ease;
           width: 160px
         }
     
         @media(min-width:900px) {
           .team__image img {
             height: 173px;
             width: 173px
           }
     
           .team__image {
             margin: 0 0 25px;
             padding: 0
           }
     
           .team__image:hover img {
             -webkit-transform: scale(1.04);
             transform: scale(1.04)
           }
         }
     
         .team__link {
           width: 100%
         }
     
         @media(min-width:900px) {
           .team__link {
             bottom: 0;
             left: 0;
             position: absolute
           }
         }
     
         .team__link a.btn {
           background: #233356;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           text-transform: uppercase;
           width: 100%
         }
     
         @media(min-width:900px) {
           .team__link a.btn:hover {
             background: #13203c
           }
         }
     
         .profile {
           background: #0b152c
         }
     
         .profile__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           position: relative
         }
     
         @media(min-width:900px) {
           .profile__inner {
             padding: 0 30px
           }
         }
     
         .profile__hero-banner {
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .profile__hero-banner {
             margin: 0;
             padding: 0 0 84px
           }
         }
     
         .profile__appraisal-form {
           background: #fff;
           position: fixed;
           right: 0;
           top: 0;
           -webkit-transform: translateX(100%);
           transform: translateX(100%);
           z-index: 5
         }
     
         .profile__appraisal-form h4 {
           color: #233356;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .profile__appraisal-form h4 {
             font-size: 20px;
             letter-spacing: 2.5px;
             line-height: 30px;
             margin-bottom: 76px;
             padding-right: 88px
           }
         }
     
         .profile__appraisal-form .profile__team {
           border-bottom: 1px solid #000;
           display: flex
         }
     
         @media(min-width:900px) {
           .profile__appraisal-form .profile__team {
             margin-bottom: 40px;
             padding-bottom: 28.25px
           }
         }
     
         .profile__appraisal-form .profile__thumbnail .gatsby-image-wrapper,
         .profile__appraisal-form .profile__thumbnail img {
           height: 80px;
           width: 80px
         }
     
         @media(min-width:900px) {
           .profile__appraisal-form .profile__thumbnail {
             margin-right: 26px
           }
         }
     
         .profile__appraisal-form .profile__position ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .profile__appraisal-form .profile__position ul li {
           margin: 0;
           padding: 0
         }
     
         .profile__appraisal-form .profile__position ul li.author {
           font-size: 14px;
           font-weight: 700;
           letter-spacing: 2px;
           line-height: 22px;
           margin-bottom: 10px
         }
     
         @media(min-width:900px) {
           .profile__appraisal-form .profile__position {
             width: calc(100% - 106px)
           }
     
           .profile__appraisal-form .form__upper {
             margin-bottom: 62.5px
           }
         }
     
         .profile__appraisal-form .form__row--submit {
           flex-direction: row
         }
     
         .profile__appraisal-form .form__row--submit .register-message {
           display: flex
         }
     
         .profile__appraisal-form .form__row--submit .register-message .form__checkbox {
           margin-right: 25px
         }
     
         @media(min-width:900px) {
           .profile__appraisal-form .form__row--submit .register-message {
             margin-right: 51px;
             width: calc(100% - 243px)
           }
     
           .profile__appraisal-form {
             margin-right: -83px;
             margin-top: 190px;
             padding: 103px 83px 144.5px 84px;
             width: 624px
           }
         }
     
         .profile__details {
           display: flex;
           flex-direction: column;
           height: 630px;
           margin: 0;
           padding: 204px 0 62px;
           position: relative
         }
     
         @media(min-width:900px) {
           .profile__details {
             height: auto;
             margin: 0;
             padding: 290px 0 50px
           }
         }
     
         .profile__heading {
           position: relative;
           z-index: 3
         }
     
         .profile__heading .heading {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 30px;
           margin: 0 0 28px;
           padding: 0;
           text-transform: uppercase
         }
     
         .profile__heading .heading:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 15px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .profile__heading .heading:before {
             right: calc(100% + 18.5px);
             top: 52px
           }
     
           .profile__heading .heading {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px;
             margin: 0 0 37px;
             padding: 0
           }
         }
     
         .profile__position {
           display: flex;
           flex-direction: column;
           flex-wrap: wrap;
           height: 100%;
           justify-content: space-between
         }
     
         .profile__position p {
           color: #fff;
           font-size: 14px;
           letter-spacing: 2.8px;
           line-height: 24px;
           margin: 0;
           padding: 0;
           text-transform: uppercase;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .profile__position p {
             font-size: 16px;
             letter-spacing: 3.2px;
             line-height: 22px
           }
         }
     
         .profile__position p:first-child {
           width: calc(100% - 208px)
         }
     
         @media(min-width:900px) {
           .profile__position p:first-child {
             margin: 0;
             padding: 0 88px 0 0;
             width: 344px
           }
         }
     
         .profile__position .label {
           color: #91a0c1;
           width: 100%
         }
     
         @media(min-width:900px) {
           .profile__position .label {
             line-height: 26px;
             width: calc(100% - 344px)
           }
     
           .profile__position {
             flex-direction: row
           }
         }
     
         .profile__image {
           height: 500px;
           position: absolute;
           right: -20px;
           top: 130px;
           width: calc(100vw - 91px);
           z-index: 1
         }
     
         .profile__image .gatsby-image-wrapper,
         .profile__image img {
           height: 500px;
           -o-object-fit: cover;
           object-fit: cover;
           width: 100%
         }
     
         @media(min-width:900px) {
     
           .profile__image .gatsby-image-wrapper,
           .profile__image img {
             height: 724px;
             width: 100%
           }
     
           .profile__image {
             position: absolute;
             right: 30px;
             top: 190px;
             width: 42%
           }
         }
     
         .profile__appraisals-label {
           background: #91a0c1;
           border: 0;
           box-shadow: none;
           color: #13203c;
           cursor: pointer;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.4px;
           line-height: 22px;
           padding: 9px 0;
           position: fixed;
           right: 20px;
           text-align: center;
           text-transform: uppercase;
           top: 268px;
           -webkit-transform: rotate(-90deg);
           transform: rotate(-90deg);
           -webkit-transform-origin: right;
           transform-origin: right;
           width: 176px;
           z-index: 4
         }
     
         .profile__appraisals-label svg {
           margin-left: 16px;
           -webkit-transform: rotate(90deg);
           transform: rotate(90deg)
         }
     
         @media(min-width:900px) {
           .profile__appraisals-label {
             font-size: 14px;
             letter-spacing: 2.8px;
             margin: 0;
             padding: 11px 0;
             width: 330px
           }
         }
     
         .profile__social {
           background: #13203c;
           position: relative;
           width: 100%
         }
     
         .profile__social .social-icons li a,
         .profile__social .social-icons li a svg {
           display: block
         }
     
         .profile__connect-video {
           display: flex;
           justify-content: space-between;
           width: 40%;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .profile__connect-video {
             width: 100%
           }
         }
     
         .profile__video {
           align-content: center;
           align-items: center;
           background: transparent;
           border: 0;
           box-shadow: none;
           color: #fff;
           cursor: pointer;
           display: flex;
           font-size: 12px;
           justify-items: center;
           letter-spacing: 2.57px;
           line-height: 22px;
           padding: 0;
           text-transform: uppercase
         }
     
         .profile__video svg {
           margin-right: 15px
         }
     
         .profile__container {
           display: flex;
           flex-wrap: wrap;
           margin: 0;
           padding: 56px 0 57px
         }
     
         @media(min-width:900px) {
           .profile__container {
             flex-direction: column;
             padding: 50px 0 44px 216px
           }
         }
     
         .profile__contact-details {
           width: 60%
         }
     
         @media(min-width:900px) {
           .profile__contact-details {
             margin-bottom: 32px;
             width: 50%
           }
         }
     
         .profile__contact-details .connect p {
           color: #fff;
           font-size: 12px;
           letter-spacing: 2.57px;
           line-height: 24px;
           margin: 0;
           padding: 0
         }
     
         .profile__contact-details .connect p a {
           color: #fff
         }
     
         @media(min-width:900px) {
           .profile__contact-details .connect p {
             font-size: 13px;
             letter-spacing: 2.79px;
             line-height: 26px
           }
         }
     
         .profile__contact-details .connect p span {
           color: #91a0c1
         }
     
         .profile__contact-details .email {
           text-transform: uppercase
         }
     
         .profile__contact-details .email span {
           margin-right: 3px
         }
     
         .profile__contact-details .email a {
           color: #fff
         }
     
         .profile__contact-details .vcard {
           text-transform: uppercase
         }
     
         .profile__contact-details .vcard span {
           margin-right: 3px
         }
     
         .profile__contact-details .vcard a {
           color: #fff
         }
     
         @media(min-width:900px) {
           .profile__contact-details .vcard {
             display: none
           }
         }
     
         .profile__connect {
           align-items: flex-start;
           display: flex;
           flex-direction: column;
           width: 100%
         }
     
         .profile__connect .label {
           color: #91a0c1;
           font-weight: 600;
           margin: 0 0 24px;
           padding: 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .profile__connect .label {
             font-size: 13px;
             letter-spacing: 2.79px;
             line-height: 26px;
             margin: 0;
             padding: 0;
             width: 218px
           }
     
           .profile__connect {
             align-items: center;
             flex-direction: row;
             width: 50%
           }
         }
     
         .profile__body {
           display: flex;
           flex-direction: column;
           margin: 0;
           padding: 60px 0 48px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .profile__body {
             flex-direction: row;
             margin: 0;
             padding: 0
           }
     
           .profile__body .profile__menu ul {
             margin-top: -10px
           }
         }
     
         .profile__menu {
           align-items: flex-end;
           display: flex;
           justify-content: space-between;
           padding-bottom: 36px;
           width: 100%;
           width: calc(100% - 20px)
         }
     
         @media(min-width:900px) {
           .profile__menu {
             align-items: flex-start;
             flex-direction: column;
             width: 300px
           }
         }
     
         .profile__menu ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .profile__menu ul li {
           color: #efefef;
           letter-spacing: 2.57px;
           line-height: 12px;
           margin: 0 0 20px
         }
     
         .profile__menu ul li,
         .profile__menu ul li button {
           cursor: pointer;
           font-size: 12px;
           opacity: .5;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .profile__menu ul li button {
           background: transparent;
           border: 0;
           color: #fff;
           font-weight: 600;
           letter-spacing: 2.6px;
           text-decoration: none
         }
     
         .profile__menu ul li:before {
           background: hsla(0, 0%, 100%, .5);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 6px;
           width: 15px
         }
     
         @media(min-width:900px) {
           .profile__menu ul li:before {
             right: calc(100% + 20px);
             top: 31px;
             width: 50vw
           }
     
           .profile__menu ul li {
             line-height: 62px;
             margin-bottom: 0
           }
         }
     
         .profile__menu ul li.active {
           opacity: 1
         }
     
         .profile__menu ul li.active button {
           color: #fff;
           opacity: 1
         }
     
         .profile__menu ul li.active:before {
           background: #fff
         }
     
         @media(min-width:900px) {
           .profile__menu {
             margin: 0;
             padding: 0;
             width: 215px
           }
         }
     
         .profile__bio-stats {
           width: 100%;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .profile__bio-stats {
             width: calc(100% - 215px)
           }
         }
     
         .profile__bio {
           display: flex;
           flex-direction: column;
           margin: 0;
           padding: 0 0 48px;
           width: 100%
         }
     
         .profile__bio h2,
         .profile__bio h3,
         .profile__bio h4,
         .profile__bio h5,
         .profile__bio h6 {
           color: #fff
         }
     
         .profile__bio li,
         .profile__bio p {
           color: #fff;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px
         }
     
         .profile__bio li a,
         .profile__bio p a {
           color: #fff
         }
     
         .profile__bio .bio {
           width: 100%
         }
     
         .profile__bio .bio p,
         .profile__bio .bio span {
           color: #fff;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px
         }
     
         @media(min-width:900px) {
           .profile__bio .bio:first-child {
             margin-right: 84px;
             width: 441px
           }
     
           .profile__bio .bio:nth-child(2) {
             padding-top: 170px
           }
     
           .profile__bio .bio {
             width: calc(100% - 518px)
           }
     
           .profile__bio {
             display: flex;
             flex-direction: row;
             margin: 0;
             padding: 9px 0 90px
           }
         }
     
         .profile__stats {
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           margin: 0;
           padding: 0 0 60px
         }
     
         @media(min-width:900px) {
           .profile__stats {
             flex-direction: row;
             margin: 0;
             padding: 0 0 64px
           }
         }
     
         .profile__disclaimer {
           color: #b7b7b7;
           margin: -20px 0 0;
           max-width: 624px
         }
     
         @media(min-width:900px) {
           .profile__disclaimer {
             margin: -20px 0 40px
           }
         }
     
         .profile__disclaimer h6,
         .profile__disclaimer p {
           color: #b7b7b7;
           font-size: 11px;
           font-style: italic;
           font-weight: 500;
           line-height: 20px
         }
     
         .profile__disclaimer h6 span,
         .profile__disclaimer p span {
           color: #b7b7b7;
           font-size: 11px;
           line-height: 20px
         }
     
         .profile__stat {
           color: #fff;
           display: flex;
           margin-bottom: 24px;
           max-width: 100%
         }
     
         .profile__stat:last-of-type {
           margin-bottom: 0
         }
     
         @media(min-width:900px) {
           .profile__stat {
             margin-bottom: 0;
             max-width: 190px
           }
         }
     
         .profile__stat p {
           margin: 0;
           padding: 0;
           text-transform: uppercase;
           width: 50%
         }
     
         .profile__stat p:first-of-type {
           width: 125px
         }
     
         .profile__stat p:last-of-type {
           width: calc(100% - 140px)
         }
     
         @media(min-width:900px) {
     
           .profile__stat p,
           .profile__stat p:first-of-type,
           .profile__stat p:last-of-type {
             width: 100%
           }
         }
     
         .profile__stat .value {
           color: #fff;
           font-size: 24px;
           letter-spacing: 3px;
           line-height: 30px
         }
     
         @media(min-width:900px) {
           .profile__stat .value {
             font-size: 30px;
             letter-spacing: 3.75px
           }
         }
     
         .profile__stat .label {
           color: #91a0c1;
           font-size: 13px;
           font-weight: 600;
           letter-spacing: 2.8px;
           line-height: 24px;
           margin-top: 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .profile__stat .label {
             margin-top: 17px
           }
     
           .profile__stat {
             display: block;
             width: 20%
           }
         }
     
         .profile__team {
           background: #0b152c;
           border-top: 1px solid hsla(0, 0%, 100%, .3)
         }
     
         .profile__team-body {
           display: flex;
           flex-direction: column;
           margin: 0;
           padding: 60px 0 80px
         }
     
         @media(min-width:900px) {
           .profile__team-body {
             flex-direction: row;
             margin: 0;
             padding: 100px 0
           }
         }
     
         .profile__members {
           display: flex;
           flex-wrap: wrap;
           margin: 0;
           padding: 0;
           padding-bottom: 0 !important;
           width: 100%
         }
     
         @media(min-width:900px) {
           .profile__members {
             padding-bottom: 0
           }
         }
     
         .profile__members .team {
           margin-bottom: 38px;
           position: relative;
           width: 100%
         }
     
         .profile__members .team:last-child {
           margin-bottom: 0
         }
     
         @media(min-width:900px) {
           .profile__members .team {
             margin: 0 44px 38px 0;
             padding: 0 0 45px;
             width: 173px
           }
     
           .profile__members .team:last-child {
             margin-bottom: 38px
           }
     
           .profile__members {
             margin: 0;
             padding: 26px 0;
             width: calc(100% - 215px)
           }
         }
     
         .profile__contact {
           background: #fff;
           margin: 0;
           padding: 80px 0 0
         }
     
         @media(min-width:900px) {
           .profile__contact {
             margin: 0;
             padding: 288px 0 112px
           }
     
           .profile__contact .profile__menu ul {
             margin-top: -20px
           }
         }
     
         .profile__contact-form {
           display: flex;
           flex-direction: column
         }
     
         .profile__contact-form ul li {
           color: #233356
         }
     
         .profile__contact-form ul li:before {
           background: rgba(35, 51, 86, .5)
         }
     
         .profile__contact-form ul li.active {
           opacity: 1
         }
     
         .profile__contact-form ul li.active:before {
           background: #233356
         }
     
         @media(min-width:900px) {
           .profile__contact-form {
             flex-direction: row
           }
         }
     
         .profile__form p {
           margin-bottom: 40px
         }
     
         .profile__form form {
           display: flex;
           flex-wrap: wrap
         }
     
         .profile__form .react-select__input-container {
           border-bottom: 1px solid #0b152c
         }
     
         .profile__form .react-select__placeholder,
         .profile__form .react-select__single-value {
           color: #0b152c;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           text-transform: uppercase
         }
     
         .profile__form .react-select__indicator:before {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTAgNSI+PHBvbHlnb24gZmlsbD0iIzBCMTUyQyIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjUgMCAxMCA1IDAgNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1KSIvPjwvc3ZnPg==)
         }
     
         .profile__form .react-select__option {
           background: #0b152c;
           color: #fff;
           font-size: 13px;
           padding: 14px 20px
         }
     
         .profile__form .react-select__option--is-focused {
           background: #fff;
           color: #0b152c
         }
     
         .profile__form h4 {
           color: #233356;
           font-size: 18px;
           font-weight: 600;
           letter-spacing: 2.25px;
           line-height: 24px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .profile__form h4 {
             color: #233356;
             font-size: 24px;
             letter-spacing: 3px;
             line-height: 22px;
             margin-bottom: 20px
           }
         }
     
         .profile__form .column_left {
           margin-bottom: 27px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .profile__form .column_left {
             margin-bottom: 0;
             margin-right: 85px;
             width: calc(50% - 85px)
           }
         }
     
         .profile__form .column_right {
           width: 100%
         }
     
         @media(min-width:900px) {
           .profile__form .column_right {
             width: 50%
           }
     
           .profile__form {
             width: calc(100% - 215px)
           }
         }
     
         .profile__form .register-message {
           display: flex
         }
     
         @media(min-width:900px) {
           .profile__form .register-message label {
             color: #233356;
             font-size: 13px;
             letter-spacing: .2px;
             line-height: 26px;
             margin-left: 25px;
             margin-right: 55px;
             width: 162px
           }
         }
     
         .profile__properties {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0;
           max-width: 100%;
           padding-left: 20px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .profile__properties {
             margin-bottom: -186px;
             min-height: 460px;
             padding-left: 20px
           }
         }
     
         @media(min-width:1375px) {
           .profile__properties {
             padding-left: calc(50vw - 657.5px)
           }
         }
     
         .profile__properties .property .sold {
           height: 48px;
           left: auto;
           position: absolute;
           right: 0;
           top: 0;
           width: 156px;
           z-index: 3
         }
     
         @media(min-width:1375px) {
           .profile__properties .property .sold {
             right: 0
           }
         }
     
         .profile__properties-body {
           display: flex;
           flex-wrap: wrap
         }
     
         .profile__list {
           margin-bottom: 30px;
           width: 100vw
         }
     
         .profile__list .profile__slider {
           -ms-overflow-style: none;
           cursor: pointer;
           display: flex;
           flex-wrap: nowrap;
           overflow-x: scroll;
           overflow-y: hidden;
           padding-bottom: 60px;
           position: relative;
           scrollbar-width: none;
           transition: all .3s;
           will-change: transform
         }
     
         .profile__list .profile__slider::-webkit-scrollbar {
           display: block;
           height: 5px;
           width: 100%
         }
     
         .profile__list .profile__slider::-webkit-scrollbar-track {
           background: #fff;
           height: 1px;
           width: 100%
         }
     
         .profile__list .profile__slider::-webkit-scrollbar-thumb {
           background-color: #0b152c;
           height: 5px
         }
     
         @media(max-width:900px) {
           .profile__list .profile__slider .property__specs {
             overflow: hidden
           }
     
           .profile__list .profile__slider .property__specs li {
             color: #fff
           }
     
           .profile__list .profile__slider .property__specs li svg path {
             fill: #fff
           }
     
           .profile__list .profile__slider .property__specs:after {
             background: #fff
           }
         }
     
         .profile__list .article {
           flex: 1 0 302px;
           margin-right: 25px;
           width: 302px
         }
     
         @media(min-width:900px) {
           .profile__list .article {
             flex: 1 0 626px;
             margin-right: 25px;
             width: 626px
           }
     
           .profile__list {
             margin-bottom: 0;
             width: calc(100% - 215px)
           }
         }
     
         .profile__testimonials {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0;
           max-width: 100%;
           padding: 60px 0 60px 20px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .profile__testimonials {
             padding: 76px 0 71px 20px
           }
         }
     
         @media(min-width:1375px) {
           .profile__testimonials {
             padding-left: calc(50vw - 657.5px)
           }
         }
     
         .profile__testimonials-content {
           display: flex;
           flex-wrap: wrap
         }
     
         .profile__testimonial-list {
           display: none;
           width: calc(100vw - 40px)
         }
     
         .profile__testimonial-list.active {
           display: block
         }
     
         @media(min-width:900px) {
           .profile__testimonial-list {
             width: calc(100% - 215px)
           }
         }
     
         .profile__awards-list {
           display: none
         }
     
         @media(min-width:900px) {
           .profile__awards-list {
             width: calc(100% - 270px)
           }
         }
     
         .profile__awards-list .achievements-block__content {
           padding-top: 0
         }
     
         .profile__awards-list .achievements-block__items {
           flex-wrap: wrap;
           padding-top: 26px
         }
     
         .profile__awards-list .achievements-block__items .achievements-block__item {
           margin-bottom: 30px;
           width: 300px
         }
     
         .profile__awards-list.active {
           display: block
         }
     
         .contact {
           background: #f9f9f9;
           padding: 96px 0 20px
         }
     
         @media(min-width:900px) {
           .contact {
             padding: 120px 0 80px
           }
         }
     
         .contact--contact {
           padding: 60px 0 20px
         }
     
         @media(min-width:900px) {
           .contact--contact {
             padding: 100px 0 70px
           }
         }
     
         .contact__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .contact__inner {
             padding: 0 30px
           }
         }
     
         .contact form {
           display: flex
         }
     
         .contact__content {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between
         }
     
         .contact__menu {
           width: 100%
         }
     
         @media(min-width:900px) {
           .contact__menu {
             width: 216px
           }
         }
     
         .contact__menu ul {
           margin: 0;
           padding: 0
         }
     
         .contact__menu ul li {
           color: #233356;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           list-style-type: none;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .contact__menu ul li:before {
           background: #13203c;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 6px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .contact__menu ul li:before {
             right: calc(100% + 20px)
           }
         }
     
         .contact__form {
           margin-top: 40px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .contact__form {
             margin-top: 0;
             width: calc(100% - 216px)
           }
         }
     
         .contact__form h2 {
           color: #233356;
           font-size: 18px;
           font-weight: 600;
           letter-spacing: 2.25px;
           line-height: 24px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .contact__form h2 {
             font-size: 24px;
             letter-spacing: 3px;
             line-height: 32px
           }
         }
     
         .contact__form p {
           width: 100%
         }
     
         @media(min-width:900px) {
           .contact__form p {
             width: calc(50% - 85px)
           }
         }
     
         .contact__form form {
           flex-wrap: wrap;
           margin-top: 45px
         }
     
         .contact__form .form__checkbox input[type=checkbox]+label {
           line-height: 18px
         }
     
         @media(min-width:900px) {
           .contact__form .form__checkbox input[type=checkbox]+label {
             line-height: 22px
           }
         }
     
         .contact__form .form__checkbox input[type=checkbox]+label:before {
           top: 4px
         }
     
         .contact__form .form__checkbox input[type=checkbox]+label:after {
           top: 11px
         }
     
         .contact .column_left {
           margin-bottom: 27px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .contact .column_left {
             margin-bottom: 0;
             margin-right: 85px;
             width: calc(50% - 85px)
           }
         }
     
         .contact .column_right {
           width: 100%
         }
     
         @media(min-width:900px) {
           .contact .column_right {
             width: 50%
           }
         }
     
         .contact .register-message {
           display: flex
         }
     
         @media(min-width:900px) {
           .contact .register-message label {
             color: #233356;
             font-size: 13px;
             letter-spacing: .2px;
             line-height: 26px;
             margin-left: 25px;
             margin-right: 55px;
             width: 162px
           }
         }
     
         .news-article {
           background: #0b152c
         }
     
         .news-article__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .news-article__inner {
             padding: 0 30px
           }
         }
     
         .news-article__content {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           padding: 164px 0 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .news-article__content {
             margin: 0;
             padding: 247px 0 0
           }
         }
     
         .news-article__heading {
           margin-bottom: 70px;
           position: relative;
           z-index: 4
         }
     
         .news-article__heading h3 {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 1.8px;
           line-height: 36px;
           position: relative
         }
     
         .news-article__heading h3:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 16px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .news-article__heading h3:before {
             right: calc(100% + 18.5px);
             top: 26px
           }
     
           .news-article__heading h3 {
             color: #fff;
             font-size: 32px;
             letter-spacing: 2.13px;
             line-height: 48px
           }
         }
     
         .news-article__heading .article-feature__date {
           margin-bottom: 264px
         }
     
         @media(min-width:900px) {
           .news-article__heading .article-feature__date {
             margin-bottom: 20px
           }
     
           .news-article__details {
             width: 52%
           }
         }
     
         .news-article__excerpt {
           background: #efefef;
           color: #233356;
           margin-left: -20px;
           margin-right: -20px;
           padding: 30px 0;
           position: relative;
           width: 100vw;
           z-index: 4
         }
     
         @media(min-width:900px) {
           .news-article__excerpt {
             font-size: 22px;
             letter-spacing: .92px;
             line-height: 34px;
             margin-left: -30px;
             margin-right: 0;
             padding: 53px 0 55px;
             position: static
           }
         }
     
         @media(min-width:1375px) {
           .news-article__excerpt {
             margin-left: calc(-50vw - -657.5px);
             margin-right: calc(-50vw - -657.5px)
           }
         }
     
         .news-article__excerpt-copy {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .news-article__excerpt-copy {
             padding: 0 30px
           }
         }
     
         .news-article__excerpt-copy .copy {
           color: #233356;
           font-size: 18px;
           letter-spacing: 1.3px;
           line-height: 30px;
           margin: 0;
           padding: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__excerpt-copy .copy {
             font-size: 22px;
             letter-spacing: .9px;
             line-height: 34px
           }
         }
     
         .news-article__excerpt-copy .copy p {
           color: #233356;
           font-size: 22px;
           letter-spacing: .92px;
           line-height: 34px;
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .news-article__excerpt-copy .copy {
             width: 52%
           }
         }
     
         .news-article__share {
           align-items: center;
           cursor: pointer;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           position: absolute;
           right: 0;
           top: 480px;
           width: 215px;
           z-index: 4
         }
     
         @media(min-width:900px) {
           .news-article__share {
             bottom: 80px;
             top: auto;
             width: 245px
           }
         }
     
         .news-article__share:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           left: calc(100% + 10px);
           position: absolute;
           top: 16px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .news-article__share:before {
             left: calc(100% + 20px);
             top: 22px
           }
         }
     
         .news-article__share ul {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           justify-content: flex-end;
           list-style: none;
           margin: 0;
           opacity: 0;
           padding: 0;
           transition: all .3s ease;
           visibility: hidden
         }
     
         .news-article__share ul.active {
           opacity: 1;
           visibility: visible
         }
     
         .news-article__share ul li {
           margin-bottom: 0;
           padding-left: 10px
         }
     
         .news-article__share ul li a {
           display: block
         }
     
         .news-article__share ul li a svg {
           display: block;
           height: 16px;
           width: 16px
         }
     
         .news-article__share ul li:first-child svg {
           height: 17px;
           width: 17px
         }
     
         .news-article__share ul li:nth-child(2) svg {
           height: 14px;
           margin-top: -2px;
           width: 18px
         }
     
         .news-article__share ul li:nth-child(3) svg {
           height: 14px
         }
     
         .news-article__share ul li:nth-child(4) svg {
           height: 15px
         }
     
         .news-article__share button {
           background: transparent;
           border: none;
           box-shadow: none;
           cursor: pointer;
           padding: 0
         }
     
         .news-article__share svg {
           height: 33px;
           width: 33px
         }
     
         @media(min-width:900px) {
           .news-article__share svg {
             height: 46px;
             width: 46px
           }
         }
     
         .news-article__share p {
           color: #fff;
           font-size: 11px;
           letter-spacing: 2.36px;
           line-height: 22px;
           margin: 0;
           padding: 0;
           text-align: right;
           text-transform: uppercase
         }
     
         .news-article__image {
           height: 100%;
           position: absolute;
           right: -20px;
           top: 0;
           width: 100%;
           width: calc(100vw - 92px)
         }
     
         @media(min-width:900px) {
           .news-article__image {
             height: auto;
             margin-top: -57px;
             position: relative;
             width: 42%
           }
         }
     
         .news-article__image:before {
           background: rgba(87, 97, 119, .5);
           content: "";
           display: block;
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: calc(100vw - 72px);
           z-index: 3
         }
     
         @media(min-width:900px) {
           .news-article__image:before {
             width: calc(100vw - 246px)
           }
         }
     
         .news-article__image .gatsby-image-wrapper,
         .news-article__image img {
           height: 100%;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           width: 100%
         }
     
         @media(min-width:900px) {
     
           .news-article__image .gatsby-image-wrapper,
           .news-article__image img {
             height: 100%;
             width: 50vw
           }
         }
     
         .news-article__body {
           background: #fff;
           padding-bottom: 210px;
           position: relative
         }
     
         @media(min-width:900px) {
           .news-article__body {
             padding-bottom: 0;
             padding-top: 117px
           }
         }
     
         .news-article__body-content {
           display: flex;
           flex-wrap: wrap
         }
     
         .news-article__body-details {
           display: flex;
           flex-direction: column
         }
     
         @media(min-width:900px) {
           .news-article__body-details {
             margin-bottom: 420px;
             margin-right: 67px;
             width: calc(100% - 433px)
           }
         }
     
         .news-article__body-details .copy {
           color: #233356;
           font-size: 14px;
           letter-spacing: 0;
           line-height: 26px;
           padding-top: 40px;
           width: 100%
         }
     
         .news-article__body-details .copy .issuuembed {
           max-width: calc(100vw - 40px)
         }
     
         .news-article__body-details .copy iframe {
           margin-top: 30px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__body-details .copy iframe {
             height: 370px
           }
     
           .news-article__body-details .copy {
             padding-top: 0;
             width: calc(100% - 215px)
           }
         }
     
         .news-article__body-details .copy img {
           height: auto;
           width: 100%
         }
     
         .news-article__body-details .copy p,
         .news-article__body-details .copy span {
           color: #233356;
           font-size: 14px;
           letter-spacing: 0;
           line-height: 26px
         }
     
         .news-article__body-details .copy figure {
           padding: 30px 0;
           width: 100% !important
         }
     
         @media(min-width:900px) {
           .news-article__body-details .copy figure {
             padding: 40px 0
           }
         }
     
         .news-article__body-details .copy figure figcaption {
           font-size: 12px;
           font-style: italic;
           margin-top: 16px
         }
     
         .news-article__main {
           display: flex;
           flex-wrap: wrap;
           padding: 60px 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__main {
             padding: 0 0 80px
           }
         }
     
         .news-article__authors {
           display: flex;
           flex-wrap: wrap;
           padding-bottom: 40px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__authors {
             padding-bottom: 60px
           }
         }
     
         .news-article__author {
           display: flex;
           margin-top: 20px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__author {
             margin-top: 0;
             width: calc(100% - 215px)
           }
         }
     
         .news-article__tags {
           display: flex;
           flex-wrap: wrap;
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__tags {
             padding-bottom: 36px
           }
         }
     
         .news-article__tags .news-article__menu {
           width: 92px
         }
     
         @media(min-width:900px) {
           .news-article__tags .news-article__menu {
             width: 215px
           }
         }
     
         .news-article__tag {
           align-items: center;
           border-bottom: 1px solid #000;
           display: flex;
           width: calc(100% - 92px)
         }
     
         @media(min-width:900px) {
           .news-article__tag {
             width: calc(100% - 215px)
           }
         }
     
         .news-article__tag ul {
           display: flex;
           flex-wrap: wrap;
           list-style-type: none;
           margin: 0 0 10px;
           padding: 0
         }
     
         @media(min-width:900px) {
           .news-article__tag ul {
             margin: 0 0 20px
           }
         }
     
         .news-article__tag ul li {
           margin: 0 14px 14px 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .news-article__tag ul li {
             margin-bottom: 16px;
             margin-right: 16px
           }
         }
     
         .news-article__tag ul li span {
           background: #91a0c1;
           color: #fff;
           display: block;
           font-size: 11px;
           letter-spacing: 2.3px;
           line-height: 11px;
           padding: 7px 9px 6px;
           text-align: center;
           text-transform: uppercase
         }
     
         .news-article__thumbnail {
           display: none;
           margin-right: 30px
         }
     
         .news-article__thumbnail img {
           display: block;
           height: 92px;
           margin: 0;
           -o-object-fit: cover;
           object-fit: cover;
           width: 92px
         }
     
         @media(min-width:900px) {
           .news-article__thumbnail img {
             height: 110px;
             width: 110px
           }
     
           .news-article__thumbnail {
             display: block;
             margin-right: 30px
           }
         }
     
         .news-article__position {
           display: flex;
           flex-direction: column;
           height: 100%;
           justify-content: space-between;
           min-height: 80px
         }
     
         .news-article__position ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .news-article__position ul li {
           color: #fff;
           color: #233356;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 14px;
           margin: 0;
           padding: 0
         }
     
         .news-article__position ul li.author {
           color: #233356;
           font-size: 13px;
           font-weight: 600;
           letter-spacing: 1.8px;
           line-height: 14px;
           margin-bottom: 12px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .news-article__position {
             width: calc(100% - 109px)
           }
         }
     
         .news-article__link a {
           background: #233356;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 1.8px;
           text-transform: uppercase
         }
     
         .news-article__menu {
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__menu {
             width: 215px
           }
         }
     
         .news-article__menu ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .news-article__menu ul {
             position: -webkit-sticky;
             position: sticky;
             top: 180px
           }
         }
     
         .news-article__menu ul li {
           color: #233356;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.5px;
           line-height: 26px;
           margin: 0;
           padding: 0;
           text-transform: uppercase
         }
     
         .news-article__side-menu {
           display: flex;
           flex-direction: column;
           justify-content: flex-start;
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__side-menu {
             width: 366px
           }
         }
     
         .news-article__related-tv {
           margin-bottom: 40px;
           margin-top: 60px;
           place-self: end;
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__related-tv {
             margin-bottom: 70px;
             width: 324px
           }
         }
     
         .news-article__related-tv h4 {
           color: #233356;
           font-size: 12px;
           letter-spacing: 2.57px;
           line-height: 11px;
           margin: 0 0 28px;
           padding: 0;
           text-transform: uppercase
         }
     
         .news-article__related-tv .tv-grid__item {
           margin-right: 0;
           width: 100%
         }
     
         .news-article__related-tv .tv-grid__item .video-card__title {
           margin-top: 10px
         }
     
         .news-article__related-tv .tv-grid__item h4 {
           color: #13203c;
           font-size: 12px;
           font-weight: 500;
           letter-spacing: 0;
           line-height: 16px;
           text-transform: none
         }
     
         @media(min-width:900px) {
           .news-article__related-tv .tv-grid__item {
             width: 100%
           }
         }
     
         .news-article__body-form {
           background: #efefef;
           margin-left: -20px;
           margin-right: -20px;
           padding: 50px 20px;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .news-article__body-form {
             margin: 0 -84px 0 0;
             padding: 63px 84px 64px 48px;
             position: -webkit-sticky;
             position: sticky;
             top: 180px
           }
         }
     
         .news-article__body-form form {
           margin: 0;
           padding: 0
         }
     
         .news-article__body-form form .form__row--submit {
           display: flex;
           justify-content: flex-end;
           margin-bottom: 0
         }
     
         .news-article__body-form h4 {
           color: #233356;
           font-size: 12px;
           letter-spacing: 2.57px;
           line-height: 11px;
           margin: 0 0 25px;
           padding: 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .news-article__body-form h4 {
             margin-bottom: 28px
           }
         }
     
         .news-article__body-form .subscribe-news {
           color: #233356;
           font-size: 14px;
           letter-spacing: .22px;
           line-height: 26px;
           margin-bottom: 30px
         }
     
         @media(min-width:900px) {
           .news-article__body-form .subscribe-news {
             margin-bottom: 30px
           }
         }
     
         .news-article__articles {
           display: flex;
           flex-wrap: wrap;
           margin-top: -139px
         }
     
         @media(min-width:900px) {
           .news-article__articles {
             margin-top: -280px
           }
         }
     
         .news-article__articles .article {
           margin-bottom: 32px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .news-article__articles .article {
             margin-bottom: 0;
             margin-right: 26px;
             width: 49%
           }
         }
     
         .news-article__articles .article:last-child {
           display: block
         }
     
         @media(min-width:900px) {
           .news-article__articles .article:last-child {
             margin-right: 0
           }
         }
     
         .news-article__articles-buttons {
           padding: 10px 0 40px
         }
     
         @media(min-width:900px) {
           .news-article__articles-buttons {
             padding: 64px 0
           }
         }
     
         .news-article__articles-buttons ul {
           display: flex;
           justify-content: space-between;
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .news-article__articles-buttons ul li {
           margin: 0;
           padding: 0
         }
     
         .news-article__articles-buttons ul li a {
           align-items: center;
           color: #fff;
           display: flex;
           flex-direction: row-reverse;
           font-size: 11px;
           letter-spacing: 2px;
           line-height: 12px;
           text-decoration: none;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .news-article__articles-buttons ul li a {
             flex-direction: row;
             font-size: 12px;
             letter-spacing: 2.57px;
             line-height: 12px
           }
         }
     
         .news-article__articles-buttons ul li.prev-list svg {
           margin-right: 20px;
           -webkit-transform: rotate(180deg);
           transform: rotate(180deg)
         }
     
         @media(min-width:900px) {
           .news-article__articles-buttons ul li.prev-list svg {
             margin-left: 20px;
             margin-right: 0
           }
         }
     
         .news-article__articles-buttons ul li.next-list svg {
           margin-left: 20px
         }
     
         @media(min-width:900px) {
           .news-article__articles-buttons ul li.next-list svg {
             margin-left: 0;
             margin-right: 20px
           }
         }
     
         .location-block__map {
           width: 100%
         }
     
         @media(min-width:1375px) {
           .location-block__map {
             margin-left: calc(50vw - 441.5px);
             width: calc(100% - 50vw + 441.5px)
           }
         }
     
         .map__map {
           width: 100%
         }
     
         .map__container {
           height: 406px;
           margin: 0;
           padding: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .map__container {
             height: 420px;
             margin: 0;
             padding: 0;
             width: 100%
           }
         }
     
         .achievements-block__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 0 0 20px
         }
     
         @media(min-width:900px) {
           .achievements-block__inner {
             padding: 0 30px
           }
         }
     
         .achievements-block__content {
           padding: 60px 0 64px
         }
     
         @media(min-width:900px) {
           .achievements-block__content {
             padding: 0 0 60px
           }
         }
     
         .achievements-block__heading {
           margin: 0 0 38px;
           padding: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .achievements-block__heading {
             margin-bottom: 71px;
             padding-top: 100px
           }
         }
     
         .achievements-block__heading h4 {
           color: #233356;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.57px;
           line-height: 12px;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .achievements-block__heading h4:before {
           background: #13203c;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 6px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .achievements-block__heading h4:before {
             right: calc(100% + 20px)
           }
         }
     
         .achievements-block__items {
           cursor: pointer;
           display: flex;
           flex-wrap: wrap;
           padding-bottom: 0;
           position: relative;
           transition: all .3s;
           will-change: transform
         }
     
         @media(min-width:900px) {
           .achievements-block__items {
             flex-wrap: wrap;
             padding-bottom: 0
           }
         }
     
         .achievements-block__items::-webkit-scrollbar {
           display: none
         }
     
         .achievements-block__items:last-child {
           margin-right: 0
         }
     
         .achievements-block__item {
           margin-right: 8.3px
         }
     
         .achievements-block__item span {
           color: #fff;
           font-weight: 400;
           letter-spacing: 2px;
           text-transform: uppercase
         }
     
         .achievements-block__item .gatsby-image-wrapper,
         .achievements-block__item img {
           margin-bottom: 15px;
           width: 150px
         }
     
         @media(min-width:900px) {
           .achievements-block__item {
             margin-right: 52px
           }
         }
     
         .business-data {
           background: #13203c
         }
     
         .business-data__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .business-data__inner {
             padding: 0 30px
           }
         }
     
         .business-data__content {
           display: flex;
           flex-wrap: wrap;
           margin: 0;
           padding: 60px 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .business-data__content {
             padding: 100px 0
           }
         }
     
         .business-data__heading {
           color: #fff;
           width: 100%
         }
     
         @media(min-width:900px) {
           .business-data__heading {
             width: 300px
           }
         }
     
         .business-data__heading h5 {
           color: #fff;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           line-height: 24px;
           margin: 0 0 30px;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           z-index: 2
         }
     
         .business-data__heading h5:before {
           background: hsla(0, 0%, 100%, .4);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 11px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .business-data__heading h5:before {
             right: calc(100% + 20px)
           }
         }
     
         .business-data__items {
           margin: 0;
           padding: 0;
           width: 100%;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .business-data__items {
             display: flex;
             flex-wrap: wrap;
             width: calc(100% - 300px)
           }
         }
     
         .business-data__disclaimer {
           margin: 40px 0 -30px;
           width: 100%
         }
     
         .business-data__disclaimer div {
           color: #b7b7b7;
           font-size: 11px;
           font-style: italic;
           line-height: 20px;
           max-width: 676px
         }
     
         .business-data__disclaimer div h6,
         .business-data__disclaimer div p,
         .business-data__disclaimer div span {
           color: #b7b7b7;
           font-size: 11px;
           font-weight: 500;
           line-height: 20px;
           margin-bottom: 0
         }
     
         .business-data__item {
           color: #fff;
           display: flex;
           margin-bottom: 24px
         }
     
         .business-data__item:last-of-type {
           margin-bottom: 0
         }
     
         @media(min-width:900px) {
           .business-data__item {
             margin-bottom: 0
           }
         }
     
         .business-data__item p {
           margin: 0;
           padding: 0;
           text-transform: uppercase;
           width: 50%
         }
     
         @media(min-width:900px) {
           .business-data__item p {
             width: 100%
           }
         }
     
         .business-data__item .value {
           color: #fff;
           font-size: 24px;
           letter-spacing: 3px;
           line-height: 30px
         }
     
         @media(min-width:900px) {
           .business-data__item .value {
             font-size: 28px;
             letter-spacing: 3.75px
           }
         }
     
         .business-data__item .label {
           color: #91a0c1;
           font-size: 13px;
           font-weight: 600;
           letter-spacing: 2.8px;
           line-height: 24px;
           margin-top: 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .business-data__item .label {
             margin-top: 17px
           }
     
           .business-data__item {
             display: block;
             width: 20%
           }
         }
     
         .single-suburb .business-data {
           padding: 0 0 60px
         }
     
         @media(min-width:900px) {
           .single-suburb .business-data {
             padding: 100px 0
           }
         }
     
         .why-us-list {
           padding: 40px 0 20px
         }
     
         @media(min-width:900px) {
           .why-us-list {
             padding: 120px 0 90px
           }
         }
     
         .why-us-list__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           position: relative
         }
     
         @media(min-width:900px) {
           .why-us-list__inner {
             padding: 0 30px
           }
         }
     
         .why-us-list__list {
           width: 100%
         }
     
         .why-us-list__heading {
           margin-bottom: 40px;
           max-width: 344px;
           z-index: 2
         }
     
         .why-us-list__heading h3 {
           color: #13203c;
           font-size: 18px;
           font-weight: 500;
           letter-spacing: 2.25px;
           line-height: 28px;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .why-us-list__heading h3:before {
           background: #13203c;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 28px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .why-us-list__heading h3:before {
             right: calc(100% + 20px)
           }
     
           .why-us-list__heading h3 {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px
           }
     
           .why-us-list__heading {
             margin: 0 0 80px;
             max-width: 944px;
             padding: 0
           }
         }
     
         .why-us-list__details,
         .why-us-list__details ol {
           display: flex;
           justify-content: space-between
         }
     
         .why-us-list__details ol {
           flex-wrap: wrap;
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .why-us-list__details ol li {
           margin-bottom: 36px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .why-us-list__details ol li .content {
             width: 352px
           }
     
           .why-us-list__details ol li {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-bottom: 44px;
             width: 48%
           }
         }
     
         .why-us-list__details ol:last-child {
           margin-bottom: 0
         }
     
         @media(min-width:900px) {
           .why-us-list__details {
             width: 100%
           }
         }
     
         .why-us-list__details .title-container {
           display: flex;
           text-transform: uppercase;
           width: 100%
         }
     
         .why-us-list__details .title-container .number {
           color: #233356;
           display: flex;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.57px;
           line-height: 24px;
           margin: 0 12px 0 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .why-us-list__details .title-container .number {
             font-size: 12px;
             letter-spacing: 2.57px;
             line-height: 14px;
             margin-right: 15px;
             margin-top: 9px
           }
         }
     
         .why-us-list__details .title-container .title {
           color: #233356;
           display: flex;
           font-size: 14px;
           font-weight: 600;
           letter-spacing: 1.75px;
           line-height: 24px;
           margin-bottom: 10px
         }
     
         @media(min-width:900px) {
           .why-us-list__details .title-container .title {
             font-size: 20px;
             letter-spacing: 2.5px;
             line-height: 32px
           }
     
           .why-us-list__details .title-container {
             padding: 0;
             width: 260px
           }
         }
     
         .why-us-list__details .content {
           color: #13203c;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px;
           padding-left: 30px
         }
     
         @media(min-width:900px) {
           .why-us-list__details .content {
             padding-left: 0;
             width: 340px
           }
         }
     
         .full-image {
           overflow: hidden;
           position: relative;
           width: 100vw
         }
     
         .full-image__bg {
           margin: 0;
           -o-object-fit: cover;
           object-fit: cover;
           padding: 0;
           width: 100%
         }
     
         .full-image__bg--mobile {
           display: block
         }
     
         @media(min-width:900px) {
           .full-image__bg--mobile {
             display: none
           }
         }
     
         .full-image__bg--desktop {
           display: none
         }
     
         @media(min-width:900px) {
           .full-image__bg--desktop {
             display: block
           }
         }
     
         .about-the-area__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .about-the-area__inner {
             padding: 0 30px
           }
         }
     
         .about-the-area__items {
           width: 100%
         }
     
         .about-the-area__menu {
           display: flex;
           flex-direction: column;
           height: 374px;
           justify-content: space-between;
           margin-bottom: 60px;
           position: relative;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .about-the-area__menu {
             height: auto;
             margin: 0;
             padding: 0;
             width: 370px
           }
         }
     
         .about-the-area__menu ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .about-the-area__menu ul li {
           color: #233356;
           font-size: 11px;
           letter-spacing: 2.36px;
           line-height: 12px;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .about-the-area__menu ul li:before {
           background: rgba(35, 51, 86, .5);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 6px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .about-the-area__menu ul li:before {
             right: calc(100% + 16px);
             top: 31px
           }
     
           .about-the-area__menu ul li {
             font-size: 12px;
             letter-spacing: 2.5px;
             line-height: 62px
           }
         }
     
         .about-the-area__caption--mobile {
           font-size: 13px;
           line-height: 26px;
           padding-left: 92px;
           position: absolute;
           top: 100%
         }
     
         @media(min-width:900px) {
           .about-the-area__caption--mobile {
             display: none
           }
         }
     
         .about-the-area__caption--desktop {
           display: none
         }
     
         @media(min-width:900px) {
           .about-the-area__caption--desktop {
             background: #fff;
             bottom: 0;
             display: block;
             font-size: 13px;
             line-height: 26px;
             padding: 20px;
             position: static;
             position: absolute;
             right: 0;
             width: 300px
           }
         }
     
         .about-the-area__item {
           display: flex;
           flex-direction: column;
           padding: 40px 0 60px 23px
         }
     
         @media(min-width:900px) {
           .about-the-area__item {
             flex-direction: row;
             padding: 80px 0 80px 82px
           }
         }
     
         .about-the-area__heading {
           position: relative;
           z-index: 5
         }
     
         .about-the-area__heading h3 {
           font-size: 18px;
           font-weight: 500;
           letter-spacing: 2.25px;
           line-height: 28px;
           position: relative;
           text-transform: uppercase;
           z-index: 5
         }
     
         @media(min-width:900px) {
           .about-the-area__heading h3 {
             color: #13203c;
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px
           }
     
           .about-the-area__heading {
             margin-bottom: 80px;
             padding-left: 215px
           }
     
           .about-the-area__content {
             min-height: 480px;
             width: calc(100% - 370px)
           }
         }
     
         .about-the-area__details {
           position: relative;
           z-index: 3
         }
     
         .about-the-area__image {
           left: 0;
           max-height: 100%;
           overflow: hidden;
           position: absolute;
           top: 0
         }
     
         .about-the-area__image .gatsby-image-wrapper,
         .about-the-area__image img {
           height: 406px;
           -o-object-fit: cover;
           object-fit: cover;
           width: 299px
         }
     
         @media(min-width:900px) {
     
           .about-the-area__image .gatsby-image-wrapper,
           .about-the-area__image img {
             height: 724px;
             width: 542px
           }
         }
     
         .about-the-area__image-wrapper {
           position: relative
         }
     
         .about-the-area .slick-dots {
           left: 23px;
           text-align: left;
           top: 434px
         }
     
         @media(min-width:900px) {
           .about-the-area .slick-dots {
             bottom: 40px;
             left: auto;
             right: 0;
             text-align: right;
             top: auto;
             width: 300px
           }
         }
     
         .about-the-area .slick-dots li {
           height: 10px;
           margin-left: 0;
           margin-right: 10px;
           width: 10px
         }
     
         @media(min-width:900px) {
           .about-the-area .slick-dots li {
             margin-left: 10px;
             margin-right: 0
           }
         }
     
         .about-the-area .slick-dots li button:before {
           font-size: 10px
         }
     
         .about-the-area .slick-slider {
           margin-top: 40px
         }
     
         @media(min-width:900px) {
           .about-the-area .slick-slider {
             margin-top: 80px
           }
         }
     
         .about-the-area .slick-slider .slick-list {
           overflow: visible
         }
     
         .about-the-area .slick-slide {
           margin-top: 0;
           position: relative
         }
     
         .about-the-area__copy {
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .about-the-area__copy {
             -webkit-columns: 2;
             column-count: 2;
             padding-left: 215px
           }
         }
     
         .commercial-sales-leasing .about-the-area__item,
         .new-projects-sales .about-the-area__item {
           padding: 40px 0 60px 23px
         }
     
         @media(min-width:900px) {
     
           .commercial-sales-leasing .about-the-area__item,
           .new-projects-sales .about-the-area__item {
             padding: 80px 0 140px 82px
           }
         }
     
         .about-us section:nth-child(7) .slick-slider,
         .about-us-2 section:nth-child(7) .slick-slider {
           margin-top: 0
         }
     
         .about-us section:nth-child(7) .about-the-area__image img,
         .about-us-2 section:nth-child(7) .about-the-area__image img {
           height: 234px
         }
     
         .about-us section:nth-child(7) .about-the-area__content,
         .about-us-2 section:nth-child(7) .about-the-area__content {
           min-height: 180px
         }
     
         .about-us section:nth-child(7) .about-the-area__menu,
         .about-us-2 section:nth-child(7) .about-the-area__menu {
           height: 174px
         }
     
         @media(min-width:900px) {
     
           .about-us section:nth-child(7) .about-the-area__content,
           .about-us-2 section:nth-child(7) .about-the-area__content {
             min-height: 400px
           }
     
           .about-us section:nth-child(7) .about-the-area__image img,
           .about-us-2 section:nth-child(7) .about-the-area__image img {
             height: 464px
           }
         }
     
         .testimonials-block {
           background: #13203c
         }
     
         .testimonials-block__inner {
           padding-left: 20px
         }
     
         @media(min-width:900px) {
           .testimonials-block__inner {
             padding-left: 20px
           }
         }
     
         @media(min-width:1375px) {
           .testimonials-block__inner {
             padding-left: calc(50vw - 687.5px)
           }
         }
     
         .testimonials-block__content {
           padding: 60px 0 36px
         }
     
         @media(min-width:900px) {
           .testimonials-block__content {
             display: flex;
             flex-wrap: wrap;
             padding: 103px 0 128px;
             width: 100%
           }
         }
     
         .testimonials-block__testimonials {
           color: #fff;
           width: 100%
         }
     
         @media(min-width:900px) {
           .testimonials-block__testimonials {
             width: calc(100% - 215px)
           }
         }
     
         .testimonials-block__menu {
           margin: 0 0 40px;
           padding: 0;
           position: relative;
           width: 100%
         }
     
         .testimonials-block__menu ul {
           list-style-type: none;
           margin: 0;
           padding: 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .testimonials-block__menu ul {
             display: block
           }
         }
     
         .testimonials-block__menu ul li {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           line-height: 12px;
           margin-bottom: 30px;
           position: relative;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .testimonials-block__menu ul li {
             margin-bottom: 50px
           }
         }
     
         .testimonials-block__menu ul li:before {
           background: hsla(0, 0%, 100%, .4);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 6px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .testimonials-block__menu ul li:before {
             right: calc(100% + 20px)
           }
         }
     
         .testimonials-block__menu ul li a {
           color: #fff;
           opacity: .5;
           position: relative;
           text-decoration: none
         }
     
         .testimonials-block__menu ul li.active a {
           opacity: 1
         }
     
         .testimonials-block__menu ul li:last-child {
           margin-bottom: 0
         }
     
         @media(min-width:900px) {
           .testimonials-block__menu ul {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between
           }
     
           .testimonials-block__menu {
             margin: 0;
             padding: 0 0 0 30px;
             width: 215px
           }
         }
     
         .testimonials__items {
           display: block;
           width: 100%
         }
     
         .testimonials__item {
           display: block;
           height: 100%
         }
     
         .testimonials__slider {
           -ms-overflow-style: none;
           cursor: pointer;
           display: flex;
           flex-wrap: nowrap;
           overflow-x: scroll;
           overflow-y: hidden;
           padding-bottom: 60px;
           position: relative;
           scrollbar-width: none;
           transition: all .3s;
           will-change: transform
         }
     
         .testimonials__slider::-webkit-scrollbar {
           display: block;
           height: 5px;
           width: 100%
         }
     
         .testimonials__slider::-webkit-scrollbar-track {
           background: #0b152c;
           height: 1px;
           width: 100%
         }
     
         .testimonials__slider::-webkit-scrollbar-thumb {
           background-color: #fff;
           height: 5px
         }
     
         .testimonials__slide:last-child .testimonial {
           margin: 0;
           padding: 0
         }
     
         .testimonial {
           border: 1px solid #91a0c1;
           display: block;
           margin-right: 24px;
           width: 302px
         }
     
         @media(min-width:900px) {
           .testimonial {
             margin-right: 32px;
             width: 302px
           }
         }
     
         .testimonial__details {
           display: block;
           padding: 30px 20px
         }
     
         @media(min-width:900px) {
           .testimonial__details {
             padding: 31px 21px 37px
           }
         }
     
         .testimonial__details svg {
           margin: 0 0 20px;
           padding: 0
         }
     
         .testimonial__details .copy {
           color: #fff;
           font-size: 13px;
           height: 182px;
           letter-spacing: .2px;
           line-height: 26px;
           margin: 0 0 21px;
           overflow: hidden;
           padding: 0
         }
     
         @media(min-width:900px) {
           .testimonial__details .copy {
             margin-bottom: 21px
           }
         }
     
         .testimonial__details .location,
         .testimonial__details .name {
           color: #91a0c1;
           font-size: 12px;
           height: 20px;
           letter-spacing: 2.5px;
           line-height: 20px;
           margin: 0;
           overflow: hidden;
           padding: 0;
           text-transform: uppercase
         }
     
         .testimonial__details .read-more {
           color: #fff;
           cursor: pointer;
           display: inline-block;
           font-size: 12px;
           letter-spacing: 2.5px;
           margin-bottom: -2px;
           margin-top: 20px;
           overflow: hidden;
           padding-bottom: 2px;
           position: relative;
           text-transform: uppercase
         }
     
         .testimonial__details .read-more:before {
           background: #fff;
           bottom: 0;
           content: "";
           height: 1px;
           left: 0;
           position: absolute;
           -webkit-transform: translateX(-101%);
           transform: translateX(-101%);
           transition: -webkit-transform .3s ease-in-out;
           transition: transform .3s ease-in-out;
           transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
           width: 100%;
           z-index: -1
         }
     
         .testimonial__details .read-more:hover:before {
           -webkit-transform: translateX(0);
           transform: translateX(0)
         }
     
         .testimonial-popup {
           background: #13203c;
           border: 1px solid #91a0c1;
           display: block;
           left: 0;
           margin-right: 0;
           max-height: 100vh;
           overflow: auto;
           position: fixed;
           top: 0;
           width: 100%;
           z-index: 20
         }
     
         @media(min-width:900px) {
           .testimonial-popup {
             left: 50%;
             overflow: hidden;
             top: 50%;
             -webkit-transform: translate(-50%, -50%);
             transform: translate(-50%, -50%)
           }
         }
     
         .testimonial-popup__overlay {
           background: rgba(23, 29, 42, .96);
           height: 100vh;
           left: 0;
           position: fixed;
           top: 0;
           width: 100vw;
           z-index: 19
         }
     
         .testimonial-popup button {
           background: transparent;
           border: 0;
           box-shadow: none;
           cursor: pointer;
           padding: 0;
           position: absolute;
           right: 15px;
           top: 15px
         }
     
         .testimonial-popup button:focus {
           outline: 0
         }
     
         @media(min-width:900px) {
           .testimonial-popup {
             margin-right: 0;
             width: 890px
           }
         }
     
         .testimonial-popup__details {
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           padding: 30px 20px
         }
     
         @media(min-width:900px) {
           .testimonial-popup__details {
             padding: 31px 21px 37px
           }
         }
     
         .testimonial-popup__details svg {
           margin: 0 0 20px;
           padding: 0
         }
     
         .testimonial-popup__details .copy {
           color: #fff;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px;
           margin: 0 0 21px;
           padding: 0
         }
     
         @media(min-width:900px) {
           .testimonial-popup__details .copy {
             margin-bottom: 21px
           }
         }
     
         .testimonial-popup__details .location,
         .testimonial-popup__details .name {
           color: #91a0c1;
           font-size: 12px;
           letter-spacing: 2.5px;
           line-height: 20px;
           margin: 0;
           padding: 0;
           text-transform: uppercase
         }
     
         .featured-team-members {
           background: #0b152c
         }
     
         @media(min-width:900px) {
           .featured-team-members {
             padding: 80px 0 120px
           }
         }
     
         .featured-team-members__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           position: relative
         }
     
         @media(min-width:900px) {
           .featured-team-members__inner {
             padding: 0 30px
           }
         }
     
         .featured-team-members__menu {
           order: 2;
           padding: 48px 0 42px;
           width: 100%
         }
     
         .featured-team-members__menu ul {
           display: flex;
           flex-wrap: wrap;
           list-style-type: none;
           margin: 0;
           padding: 0;
           width: 100%
         }
     
         .featured-team-members__menu ul li {
           color: #fff;
           font-size: 11px;
           letter-spacing: 1.75px;
           line-height: 12px;
           margin: 0 0 32px;
           opacity: .5;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           width: 50%
         }
     
         @media(min-width:900px) {
           .featured-team-members__menu ul li {
             font-size: 12px;
             letter-spacing: 2.57px;
             line-height: 12px;
             margin-bottom: 50px;
             width: 100%
           }
         }
     
         .featured-team-members__menu ul li:before {
           background: hsla(0, 0%, 100%, .5);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 6px;
           width: 15px
         }
     
         @media(min-width:900px) {
           .featured-team-members__menu ul li:before {
             right: calc(100% + 20px);
             width: 50vw
           }
         }
     
         .featured-team-members__menu ul li:last-child {
           margin-bottom: 0
         }
     
         .featured-team-members__menu ul li.active {
           opacity: 1
         }
     
         .featured-team-members__menu ul li.active:before {
           background: #fff
         }
     
         @media(min-width:900px) {
           .featured-team-members__menu ul {
             display: block;
             margin: 0;
             padding: 0
           }
     
           .featured-team-members__menu {
             order: 1;
             padding: 9px 0 60px;
             width: 327px
           }
         }
     
         .featured-team-members__content {
           display: flex;
           flex-direction: column
         }
     
         @media(min-width:900px) {
           .featured-team-members__content {
             flex-direction: row
           }
         }
     
         .featured-team-members__link {
           background: #233356;
           height: 36px;
           position: relative;
           position: absolute;
           right: 0;
           top: 0;
           width: 155px;
           z-index: 2
         }
     
         .featured-team-members__link .btn {
           background: #233356;
           color: #fff;
           display: block;
           font-size: 12px;
           letter-spacing: 2px;
           line-height: 12px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .featured-team-members__link {
             right: 30px;
             top: 507px;
             width: 325px
           }
         }
     
         .featured-team-members__quote {
           margin: 0 0 40px;
           order: 3;
           padding: 1px 0 0;
           position: relative;
           z-index: 2
         }
     
         .featured-team-members__quote--mobile {
           display: block
         }
     
         @media(min-width:900px) {
           .featured-team-members__quote--mobile {
             display: none
           }
         }
     
         .featured-team-members__quote--desktop {
           display: none
         }
     
         @media(min-width:900px) {
           .featured-team-members__quote--desktop {
             display: block
           }
         }
     
         .featured-team-members__quote svg {
           height: 20px;
           margin: 0 16px 0 0;
           padding: 0;
           width: 24.1px
         }
     
         @media(min-width:900px) {
           .featured-team-members__quote svg {
             height: 40px;
             margin: 0;
             padding: 0;
             width: 48.3px
           }
         }
     
         .featured-team-members__quote h4 {
           color: #fff;
           font-size: 18px;
           font-weight: 500;
           letter-spacing: 1.35px;
           line-height: 30px;
           margin: 0;
           padding: 0;
           width: 343px
         }
     
         @media(min-width:900px) {
           .featured-team-members__quote h4 {
             font-size: 32px;
             letter-spacing: 1.6px;
             line-height: 48px;
             width: 951px
           }
     
           .featured-team-members__quote {
             margin: 0 0 100px;
             min-height: 210px;
             padding: 0;
             width: 951px
           }
         }
     
         .featured-team-members__bio {
           margin: 0 0 40px;
           order: 4;
           padding: 0;
           width: 100%
         }
     
         .featured-team-members__bio .bio {
           display: flex;
           flex-direction: column;
           justify-content: flex-start;
           margin: 0;
           padding: 0
         }
     
         .featured-team-members__bio .bio p,
         .featured-team-members__bio .bio span {
           color: #fff;
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
     
           .featured-team-members__bio .bio p,
           .featured-team-members__bio .bio span {
             font-size: 13px;
             letter-spacing: .2px;
             line-height: 26px
           }
         }
     
         .featured-team-members__bio .bio p {
           margin: 0 0 16px
         }
     
         .featured-team-members__bio .bio:first-child {
           margin-bottom: 0
         }
     
         @media(min-width:900px) {
           .featured-team-members__bio .bio:first-child {
             margin: 0 66px 0 0;
             padding: 0;
             width: 407px
           }
     
           .featured-team-members__bio .bio {
             margin: 0 0 48px;
             min-height: 416px;
             padding: 290px 0 0;
             width: calc(100% - 407px)
           }
     
           .featured-team-members__bio {
             display: flex;
             margin: 0;
             order: 3;
             padding: 0;
             width: calc(100% - 327px)
           }
         }
     
         .featured-team-members__image {
           margin-left: -20px;
           order: 1
         }
     
         .featured-team-members__image .gatsby-image-wrapper,
         .featured-team-members__image img {
           height: 500px;
           -o-object-position: top;
           object-position: top;
           width: 100vw
         }
     
         .featured-team-members__image .gatsby-image-wrapper img,
         .featured-team-members__image img img {
           -o-object-position: top;
           object-position: top
         }
     
         @media(min-width:900px) {
     
           .featured-team-members__image .gatsby-image-wrapper,
           .featured-team-members__image img {
             display: none
           }
         }
     
         @media(min-width:1240px) {
     
           .featured-team-members__image .gatsby-image-wrapper,
           .featured-team-members__image img {
             display: block;
             height: 695px;
             width: 542px
           }
         }
     
         @media(min-width:900px) {
           .featured-team-members__image {
             left: auto;
             margin-left: 0;
             order: 3;
             position: absolute;
             right: 30px;
             top: -150px
           }
         }
     
         .hero-banner-contact {
           background: #0b152c;
           position: relative
         }
     
         @media(min-width:900px) {
           .hero-banner-contact {
             padding-bottom: 103px
           }
         }
     
         .hero-banner-contact__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__inner {
             padding: 0 30px
           }
         }
     
         .hero-banner-contact__content {
           color: #fff;
           display: flex;
           flex-wrap: wrap;
           margin: 0;
           padding: 0;
           position: relative
         }
     
         .hero-banner-contact__heading {
           position: relative
         }
     
         .hero-banner-contact__details {
           display: flex;
           flex-direction: column;
           flex-wrap: wrap;
           height: 630px;
           justify-content: space-between;
           margin: 0;
           padding: 204px 0 62px;
           position: relative;
           width: 300px;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__details {
             height: auto;
             width: 58%
           }
         }
     
         .hero-banner-contact__details .heading {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 30px;
           margin: 0 0 28px;
           padding: 0;
           text-transform: uppercase
         }
     
         .hero-banner-contact__details .heading:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 15px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__details .heading:before {
             right: calc(100% + 18px);
             top: 26px
           }
     
           .hero-banner-contact__details .heading {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px
           }
         }
     
         .hero-banner-contact__details .copy {
           color: #fff;
           font-size: 13px;
           letter-spacing: 0;
           line-height: 26px;
           width: 301px
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__details .copy {
             letter-spacing: .2px;
             margin-right: 23px;
             width: 409px
           }
         }
     
         .hero-banner-contact__details .label {
           color: #91a0c1;
           font-size: 12px;
           letter-spacing: 2.4px;
           line-height: 20px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__details .label {
             align-self: flex-end;
             font-size: 16px;
             letter-spacing: 3.2px;
             line-height: 26px
           }
     
           .hero-banner-contact__details {
             align-items: flex-start;
             flex-direction: row;
             justify-content: flex-start;
             padding: 270px 0 50px;
             width: 55%
           }
         }
     
         .hero-banner-contact__image {
           height: 500px;
           position: absolute;
           right: -20px;
           top: 130px;
           width: calc(100vw - 91px);
           z-index: 1
         }
     
         .hero-banner-contact__image .gatsby-image-wrapper,
         .hero-banner-contact__image img {
           height: 500px;
           max-width: unset;
           width: 100%
         }
     
         @media(min-width:900px) {
     
           .hero-banner-contact__image .gatsby-image-wrapper,
           .hero-banner-contact__image img {
             height: 724px;
             width: 100%
           }
     
           .hero-banner-contact__image {
             position: absolute;
             right: 0;
             top: 190px;
             width: 42%
           }
         }
     
         .hero-banner-contact__link {
           position: absolute;
           right: 0;
           top: 0;
           z-index: 3
         }
     
         .hero-banner-contact__footer {
           background: #13203c;
           color: #fff;
           padding: 60px 0;
           width: 100%
         }
     
         .hero-banner-contact__footer p {
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__footer {
             padding: 50px 0 44px
           }
     
           .hero-banner-contact__container {
             xpadding-left: 216px
           }
         }
     
         .hero-banner-contact__address {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 0 28px;
           padding: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__address {
             justify-content: flex-end;
             width: 58%
           }
         }
     
         .hero-banner-contact__address p {
           color: #fff;
           font-size: 12px;
           line-height: 24px;
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__address p {
             font-size: 13px;
             letter-spacing: .8px;
             line-height: 26px;
             margin: 0;
             padding: 0
           }
         }
     
         .hero-banner-contact__address .address {
           width: 50%
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__address .address {
             width: calc(50% - 51px)
           }
         }
     
         .hero-banner-contact__address .connect {
           text-transform: uppercase;
           width: 50%
         }
     
         .hero-banner-contact__address .connect p {
           color: #91a0c1;
           font-size: 13px;
           letter-spacing: 2.79px;
           line-height: 26px
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__address .connect {
             width: 210px
           }
         }
     
         .hero-banner-contact__connect {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0;
           padding: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__connect {
             justify-content: flex-end;
             width: 58%
           }
         }
     
         .hero-banner-contact__connect p {
           color: #91a0c1;
           font-size: 12px;
           letter-spacing: 2.6px;
           line-height: 24px;
           margin: 0;
           padding: 0;
           text-transform: uppercase;
           width: 50%
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__connect p {
             font-size: 13px;
             letter-spacing: 2.8px;
             line-height: 26px;
             margin: 0;
             padding: 0;
             width: 210px
           }
         }
     
         .hero-banner-contact__connect .social-icons {
           width: 50%
         }
     
         @media(min-width:900px) {
           .hero-banner-contact__connect .social-icons {
             width: calc(50% - 51px)
           }
         }
     
         .hero-banner-about {
           background: #13203c;
           height: 586px
         }
     
         .hero-banner-about--extra-padding {
           height: 630px
         }
     
         @media(min-width:900px) {
           .hero-banner-about--extra-padding {
             height: 940px
           }
         }
     
         .hero-banner-about--extra-padding .hero-banner-about__details {
           padding-top: 200px
         }
     
         @media(min-width:900px) {
           .hero-banner-about--extra-padding .hero-banner-about__details {
             padding-top: 300px
           }
         }
     
         .hero-banner-about--extra-padding-no-stats {
           height: 600px
         }
     
         @media(min-width:900px) {
           .hero-banner-about--extra-padding-no-stats {
             height: 806px
           }
         }
     
         .hero-banner-about--extra-padding-no-stats .hero-banner-about__details {
           padding-top: 200px
         }
     
         @media(min-width:900px) {
           .hero-banner-about--extra-padding-no-stats .hero-banner-about__details {
             padding-top: 300px
           }
         }
     
         .hero-banner-about__inner {
           height: 100%;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .hero-banner-about__inner {
             padding: 0 30px
           }
         }
     
         .hero-banner-about__content {
           display: flex;
           height: 100%;
           margin: 0;
           padding: 0;
           position: relative;
           width: 100%
         }
     
         .hero-banner-about__heading {
           position: relative
         }
     
         .hero-banner-about__details {
           color: #fff;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           padding: 164px 0 96px;
           text-transform: uppercase;
           width: 100%;
           z-index: 3
         }
     
         .hero-banner-about__details .heading {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 32px;
           margin: 0 0 28px;
           padding: 0;
           text-transform: uppercase;
           width: 258px
         }
     
         .hero-banner-about__details .heading:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 32px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .hero-banner-about__details .heading:before {
             right: calc(100% + 18px);
             top: 52px
           }
     
           .hero-banner-about__details .heading {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px;
             margin-bottom: 40px;
             width: 391px
           }
         }
     
         .hero-banner-about__details .copy p {
           color: #fff;
           font-size: 14px;
           letter-spacing: 2.8px;
           line-height: 24px;
           margin: 0;
           padding: 0;
           width: 284px
         }
     
         @media(min-width:900px) {
           .hero-banner-about__details .copy p {
             font-size: 16px;
             letter-spacing: 3.2px;
             line-height: 28px;
             width: 343px
           }
         }
     
         .hero-banner-about__details .play-button {
           align-items: center;
           align-self: center;
           display: flex;
           justify-content: flex-end;
           width: 100%
         }
     
         .hero-banner-about__details .play-button a {
           color: #fff;
           font-size: 12px;
           letter-spacing: 2.5px;
           text-decoration: none;
           text-transform: uppercase
         }
     
         .hero-banner-about__details .play-button a:first-child {
           margin-right: 15px
         }
     
         .hero-banner-about__details .play-button:after {
           background: hsla(0, 0%, 100%, .4);
           content: "";
           display: inline-block;
           height: 1px;
           margin-left: 8.5px;
           vertical-align: middle;
           width: 15px
         }
     
         @media(min-width:900px) {
           .hero-banner-about__details .play-button:after {
             margin-left: 31.5px;
             width: 147px
           }
     
           .hero-banner-about__details {
             padding: 179px 0 36px
           }
         }
     
         .hero-banner-about__image {
           background: #13203c;
           display: flex;
           height: 554px;
           justify-content: flex-end;
           position: absolute;
           right: 0;
           top: 0;
           width: 100%;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .hero-banner-about__image {
             display: flex;
             height: 724px
           }
         }
     
         .hero-banner-about__image:before {
           background: rgba(87, 97, 119, .5);
           content: "";
           display: block;
           height: 100%;
           left: 91px;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: calc(100vw - 91px);
           z-index: 3
         }
     
         @media(min-width:900px) {
           .hero-banner-about__image:before {
             left: 216px;
             width: calc(100vw - 216px)
           }
         }
     
         .hero-banner-about__image .gatsby-image-wrapper,
         .hero-banner-about__image img,
         .hero-banner-about__image video {
           height: 100%;
           left: 91px;
           max-width: unset;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           top: 0;
           width: calc(100vw - 91px)
         }
     
         @media(min-width:900px) {
     
           .hero-banner-about__image .gatsby-image-wrapper,
           .hero-banner-about__image img,
           .hero-banner-about__image video {
             left: 216px;
             width: calc(100vw - 216px)
           }
     
           body.about-us .header {
             background: transparent
           }
         }
     
         .hero-banner-team {
           background: #0b152c;
           position: relative
         }
     
         .hero-banner-team__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .hero-banner-team__inner {
             padding: 0 30px
           }
         }
     
         .hero-banner-team__content {
           display: flex;
           padding: 204px 0 126px;
           position: relative
         }
     
         @media(min-width:900px) {
           .hero-banner-team__content {
             padding: 290px 0 140px
           }
         }
     
         .hero-banner-team__details {
           display: flex;
           flex-direction: column;
           position: relative;
           width: 100%;
           z-index: 4
         }
     
         .hero-banner-team__details .heading {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 30px;
           margin: 0 0 32px;
           padding: 0;
           text-transform: uppercase
         }
     
         .hero-banner-team__details .heading:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 15px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .hero-banner-team__details .heading:before {
             right: calc(100% + 18.5px);
             top: 26px
           }
     
           .hero-banner-team__details .heading {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px;
             margin: 0 0 48px;
             padding: 0
           }
         }
     
         .hero-banner-team__form {
           align-content: center;
           display: flex;
           justify-content: center;
           justify-items: center
         }
     
         .hero-banner-team__form .form-container {
           background: transparent;
           margin: 0;
           padding: 0;
           position: relative;
           width: 100%;
           z-index: 5
         }
     
         @media(min-width:900px) {
           .hero-banner-team__form .form-container .form__row {
             margin-bottom: 12px
           }
         }
     
         .hero-banner-team__form .form-container .form__row--dropdowns {
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .hero-banner-team__form .form-container {
             background: #13203c;
             margin: 0 84px 0 -160px;
             min-width: 600px;
             padding: 50px 84px 50px 82px;
             width: calc(100% - 541px)
           }
         }
     
         .hero-banner-team__form .copy {
           align-self: center;
           color: #fff;
           display: none
         }
     
         @media(min-width:900px) {
           .hero-banner-team__form .copy {
             display: block;
             font-size: 13px;
             letter-spacing: .2px;
             line-height: 26px;
             width: 457px
           }
     
           .hero-banner-team__form {
             margin: 0;
             padding: 0
           }
         }
     
         .hero-banner-team__image {
           position: absolute;
           right: 0;
           top: 130px;
           width: calc(100% - 92px)
         }
     
         .hero-banner-team__image:before {
           background: rgba(87, 97, 119, .5);
           content: "";
           display: block;
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: calc(100vw - 72px);
           z-index: 3
         }
     
         @media(min-width:900px) {
           .hero-banner-team__image:before {
             width: calc(100vw - 246px)
           }
         }
     
         .hero-banner-team__image .gatsby-image-wrapper,
         .hero-banner-team__image img {
           display: block;
           height: 440px;
           margin: 0;
           max-width: 100vw;
           -o-object-fit: cover;
           object-fit: cover;
           width: calc(100vw - 72px)
         }
     
         @media(min-width:900px) {
     
           .hero-banner-team__image .gatsby-image-wrapper,
           .hero-banner-team__image img {
             height: 753px;
             width: calc(100vw - 246px)
           }
     
           .hero-banner-team__image {
             top: 190px;
             width: calc(100% - 215px)
           }
         }
     
         .hero-banner-team__link {
           align-items: center;
           align-self: center;
           background: #91a0c1;
           display: none;
           font-size: 12px;
           height: 44px;
           justify-content: center;
           letter-spacing: 2.4px;
           position: fixed;
           right: 22px;
           text-align: center;
           text-decoration: none;
           text-transform: uppercase;
           top: 360px;
           -webkit-transform: rotate(-90deg);
           transform: rotate(-90deg);
           -webkit-transform-origin: right;
           transform-origin: right;
           width: 176px;
           z-index: 3
         }
     
         .hero-banner-team__link span {
           font-weight: 600;
           margin-right: 20px
         }
     
         @media(min-width:900px) {
           .hero-banner-team__link {
             display: flex;
             width: 322px
           }
         }
     
         .hero-banner-team__link svg {
           -webkit-transform: translateX(0) translateY(0) rotate(90deg);
           transform: translateX(0) translateY(0) rotate(90deg)
         }
     
         .hero-banner-appraisal {
           height: 582px;
           position: relative;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal {
             height: 834px
           }
         }
     
         .hero-banner-appraisal:before {
           background: rgba(11, 21, 44, .88);
           content: "";
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 2
         }
     
         .hero-banner-appraisal__inner {
           height: 100%;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           position: relative
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__inner {
             padding: 0 30px
           }
         }
     
         .hero-banner-appraisal__bg {
           height: 100%;
           left: 0;
           margin: 0;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .hero-banner-appraisal__bg--mobile {
           display: block
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__bg--mobile {
             display: none
           }
         }
     
         .hero-banner-appraisal__bg--desktop {
           display: none
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__bg--desktop {
             display: block
           }
         }
     
         .hero-banner-appraisal__content {
           display: flex;
           height: 100%;
           margin: 0;
           padding: 0;
           width: 100%
         }
     
         .hero-banner-appraisal__heading {
           position: relative
         }
     
         .hero-banner-appraisal__details {
           color: #fff;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           padding: 200.5px 0 96px;
           text-transform: uppercase;
           width: 100%;
           z-index: 4
         }
     
         .hero-banner-appraisal__details .heading {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 32px;
           margin: 0 0 28px;
           padding: 0;
           text-transform: uppercase;
           width: 258px
         }
     
         .hero-banner-appraisal__details .heading:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 15px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__details .heading:before {
             right: calc(100% + 18px);
             top: 26px
           }
     
           .hero-banner-appraisal__details .heading {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px;
             margin-bottom: 40px;
             width: 391px
           }
         }
     
         .hero-banner-appraisal__details .copy p {
           color: #fff;
           font-size: 14px;
           letter-spacing: 2.8px;
           line-height: 24px;
           margin: 0;
           padding: 0;
           width: 284px
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__details .copy p {
             font-size: 16px;
             letter-spacing: 3.2px;
             line-height: 28px;
             width: 343px
           }
         }
     
         .hero-banner-appraisal__details .play-button {
           align-items: center;
           align-self: center;
           display: flex;
           justify-content: flex-end;
           margin-right: -40px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__details .play-button {
             margin-right: 0
           }
         }
     
         .hero-banner-appraisal__details .play-button a {
           color: #fff;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.6px;
           text-decoration: none;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__details .play-button a {
             font-size: 12px
           }
         }
     
         .hero-banner-appraisal__details .play-button a:first-child {
           margin-right: 15px
         }
     
         .hero-banner-appraisal__details .play-button svg {
           height: 33px;
           width: 33px
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__details .play-button svg {
             height: 46px;
             width: 46px
           }
         }
     
         .hero-banner-appraisal__details .play-button:after {
           background: hsla(0, 0%, 100%, .4);
           content: "";
           display: inline-block;
           height: 1px;
           margin-left: 8.5px;
           vertical-align: middle;
           width: 15px
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__details .play-button:after {
             margin-left: 31.5px;
             width: 147px
           }
     
           .hero-banner-appraisal__details {
             padding: 316px 0 100px
           }
         }
     
         .hero-banner-appraisal__image {
           left: 72px;
           position: absolute;
           top: 130px;
           width: 100%;
           z-index: 2
         }
     
         .hero-banner-appraisal__image:before {
           background: rgba(87, 97, 119, .5);
           content: "";
           display: block;
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .hero-banner-appraisal__image {
             left: 246px;
             right: auto;
             top: 0
           }
         }
     
         .hero-banner-appraisal__image .gatsby-image-wrapper,
         .hero-banner-appraisal__image img {
           height: 500px;
           max-width: unset;
           width: calc(100vw - 72px)
         }
     
         @media(min-width:900px) {
     
           .hero-banner-appraisal__image .gatsby-image-wrapper,
           .hero-banner-appraisal__image img {
             height: 724px;
             width: calc(100vw - 246px)
           }
     
           .hero-banner-appraisal__image {
             display: flex;
             top: 190px
           }
         }
     
         .hero-banner-off-market {
           background: #0b152c
         }
     
         .hero-banner-off-market__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__inner {
             padding: 0 30px
           }
         }
     
         .hero-banner-off-market__content {
           margin: 0;
           padding: 204px 0 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__content {
             display: flex;
             padding: 190px 0 128px
           }
         }
     
         .hero-banner-off-market__heading {
           position: relative
         }
     
         .hero-banner-off-market__details {
           color: #fff;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           width: 100%;
           z-index: 3;
           z-index: 4
         }
     
         .hero-banner-off-market__details .heading {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 32px;
           margin: 0 0 28px;
           padding: 0;
           text-transform: uppercase;
           width: 258px
         }
     
         .hero-banner-off-market__details .heading:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 16px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__details .heading:before {
             right: calc(100% + 18.5px);
             top: 26px
           }
     
           .hero-banner-off-market__details .heading {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px;
             margin-bottom: 33px;
             width: 100%
           }
         }
     
         .hero-banner-off-market__details .subtitle {
           color: #fff;
           font-size: 14px;
           letter-spacing: 2.8px;
           line-height: 24px;
           margin: 0;
           padding: 0;
           width: 284px
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__details .subtitle {
             font-size: 16px;
             letter-spacing: 3.2px;
             line-height: 28px;
             width: 343px
           }
     
           .hero-banner-off-market__details {
             padding: 179px 0 0;
             width: calc(100% - 624px)
           }
         }
     
         .hero-banner-off-market__copy {
           display: flex;
           flex-wrap: wrap;
           padding-bottom: 50px;
           padding-top: 375px
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__copy {
             padding-bottom: 0;
             padding-top: 0
           }
         }
     
         .hero-banner-off-market__copy .copy {
           color: #fff;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px;
           margin-top: 20px;
           text-transform: none
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__copy .copy {
             margin-top: 0;
             width: calc(100% - 299px)
           }
         }
     
         .hero-banner-off-market__menu ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .hero-banner-off-market__menu ul li {
           color: #fff;
           font-size: 12px;
           letter-spacing: 2.57px;
           line-height: 24px;
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__menu {
             width: 215px
           }
         }
     
         .hero-banner-off-market__image {
           position: absolute;
           right: 0;
           top: 130px;
           width: calc(100% - 92px)
         }
     
         .hero-banner-off-market__image:before {
           background: rgba(87, 97, 119, .5);
           content: "";
           display: block;
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: calc(100vw - 72px);
           z-index: 3
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__image:before {
             width: calc(100vw - 246px)
           }
         }
     
         .hero-banner-off-market__image .gatsby-image-wrapper,
         .hero-banner-off-market__image img {
           height: 500px;
           max-width: unset;
           width: calc(100vw - 72px)
         }
     
         @media(min-width:900px) {
     
           .hero-banner-off-market__image .gatsby-image-wrapper,
           .hero-banner-off-market__image img {
             height: 724px;
             width: calc(100vw - 246px)
           }
     
           .hero-banner-off-market__image {
             top: 0;
             width: calc(100% - 215px)
           }
         }
     
         .hero-banner-off-market__form {
           background: #fff;
           display: flex;
           flex-direction: column;
           margin: 0 0 0 -20px;
           padding: 50px 20px;
           width: calc(100% + 40px);
           z-index: 4
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__form {
             margin-left: 0;
             margin-right: -84px;
             padding: 103px 83px 111px 84px;
             width: 624px
           }
         }
     
         .hero-banner-off-market__form form {
           margin: 0;
           padding: 0
         }
     
         .hero-banner-off-market__form h4 {
           color: #233356;
           font-size: 20px;
           font-weight: 600;
           letter-spacing: 2.25px;
           line-height: 30px;
           margin: 0 0 20px;
           padding: 0;
           text-transform: uppercase
         }
     
         .hero-banner-off-market__form .instructions {
           color: #13203c;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px;
           margin-bottom: 40px
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__form .instructions {
             margin-bottom: 52px
           }
         }
     
         .hero-banner-off-market__form .form__checkbox {
           margin: 40px 0 0
         }
     
         .hero-banner-off-market__form .form__row--submit {
           margin-top: 50px
         }
     
         .hero-banner-off-market__form .form__row--submit .btn:last-of-type {
           min-width: 120px;
           width: auto
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__form .form__row--submit .btn:last-of-type {
             min-width: 190px
           }
         }
     
         .hero-banner-off-market__form .form__checkbox input[type=checkbox]+label {
           max-width: calc(100% - 47px)
         }
     
         .hero-banner-off-market__form .react-select__control {
           background: #fff;
           border: 0 !important;
           border-radius: 0;
           font-size: 12px
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__form .react-select__control {
             font-size: 12px
           }
         }
     
         .hero-banner-off-market__form .react-select__control--is-focused {
           outline: 0
         }
     
         .hero-banner-off-market__form .react-select__value-container {
           border: 0;
           padding: 0
         }
     
         .hero-banner-off-market__form .react-select__input-container {
           border-bottom: 1px solid #13203c;
           border-radius: 0;
           display: flex;
           flex: unset;
           margin: 0;
           padding: 18px 0;
           text-align: left
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__form .react-select__input-container {
             padding: 20px 0
           }
         }
     
         .hero-banner-off-market__form .react-select__placeholder,
         .hero-banner-off-market__form .react-select__single-value {
           color: #13203c;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           text-align: left;
           text-indent: 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
     
           .hero-banner-off-market__form .react-select__placeholder,
           .hero-banner-off-market__form .react-select__single-value {
             font-size: 12px;
             letter-spacing: 2px
           }
         }
     
         .hero-banner-off-market__form .react-select__indicator:before {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTAgNSI+PHBvbHlnb24gZmlsbD0iIzBCMTUyQyIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjUgMCAxMCA1IDAgNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1KSIvPjwvc3ZnPg==);
           background-size: cover;
           content: "";
           height: 5px;
           position: absolute;
           right: 0;
           top: 23px;
           width: 10px
         }
     
         @media(min-width:900px) {
           .hero-banner-off-market__form .react-select__indicator:before {
             top: 25px
           }
         }
     
         .hero-banner-off-market__form .react-select__indicator svg,
         .hero-banner-off-market__form .react-select__indicator-separator {
           display: none
         }
     
         .hero-banner-off-market__form .react-select__menu {
           border-radius: 0;
           margin: 0
         }
     
         .hero-banner-off-market__form .react-select__menu-list {
           padding: 0;
           text-align: left
         }
     
         .hero-banner-off-market__form .react-select__option {
           font-size: 13px;
           padding: 14px 20px
         }
     
         .hero-banner-off-market__form .react-select__option--is-focused {
           background: #13203c;
           color: #fff
         }
     
         .hero-banner-off-market__form .form-fields {
           display: none
         }
     
         .hero-banner-off-market__form .form-fields.active {
           display: block
         }
     
         @media(min-width:900px) {
           body.off-market .header {
             background: transparent
           }
         }
     
         .our-partnerships-block.support {
           padding: 48px 0 64px
         }
     
         @media(min-width:900px) {
           .our-partnerships-block.support {
             padding: 100px 0 90px
           }
         }
     
         .our-partnerships-block.support .support__form {
           display: none;
           flex-wrap: wrap;
           width: 100%
         }
     
         .our-partnerships-block.support .support__form.active {
           display: flex
         }
     
         .our-partnerships-block.support .support__form h4 {
           letter-spacing: 3px;
           margin: 0;
           padding: 120px 0 40px;
           text-transform: uppercase;
           width: 100%
         }
     
         .our-partnerships-block.support .support__form .form__file input {
           line-height: 1
         }
     
         @media(min-width:900px) {
           .our-partnerships-block.support .support__form {
             justify-content: flex-end
           }
     
           .our-partnerships-block.support .support__form .form {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             width: calc(100% - 327px)
           }
     
           .our-partnerships-block.support .support__form .column_left,
           .our-partnerships-block.support .support__form .column_right {
             width: 46%
           }
         }
     
         .our-partnerships-block.support .our-partnerships-block__content {
           padding: 0
         }
     
         .our-partnerships-block.support .our-partnerships-block__menu ul li {
           margin-bottom: 20px;
           opacity: 1
         }
     
         .our-partnerships-block.support .our-partnerships-block__menu ul li:before {
           display: none
         }
     
         .our-partnerships-block.support .our-partnerships-block__menu ul li button {
           background: none;
           border: 0;
           box-shadow: none;
           color: #233356;
           cursor: pointer;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           line-height: 19px;
           outline: 0;
           padding: 0 0 0 32px;
           position: relative;
           text-transform: uppercase
         }
     
         .our-partnerships-block.support .our-partnerships-block__menu ul li button:before {
           border: 1px solid #0b152c;
           border-radius: 50%;
           content: "";
           height: 20px;
           left: 0;
           position: absolute;
           top: 0;
           width: 20px
         }
     
         .our-partnerships-block.support .our-partnerships-block__menu ul li.active button:after {
           background: #0b152c;
           border-radius: 50%;
           content: "";
           height: 12px;
           left: 4px;
           position: absolute;
           top: 4px;
           width: 12px
         }
     
         .our-partnerships-block.support .none {
           width: 100%
         }
     
         .our-partnerships-block.support .community-efforts__items.show-more .community-efforts__item.active {
           display: block
         }
     
         .our-partnerships-block.support .community-efforts__item {
           display: none;
           position: relative
         }
     
         @media(min-width:900px) {
           .our-partnerships-block.support .community-efforts__item {
             padding-bottom: 20px
           }
         }
     
         .our-partnerships-block.support .community-efforts__item:first-child.active,
         .our-partnerships-block.support .community-efforts__item:nth-child(2).active,
         .our-partnerships-block.support .community-efforts__item:nth-child(3).active,
         .our-partnerships-block.support .community-efforts__item:nth-child(4).active,
         .our-partnerships-block.support .community-efforts__item:nth-child(5).active,
         .our-partnerships-block.support .community-efforts__item:nth-child(6).active {
           display: block
         }
     
         .our-partnerships-block.support .community-efforts__item button {
           background: none;
           border: 0;
           box-shadow: none;
           color: #233356;
           cursor: pointer;
           display: inline-block;
           font-size: 11px;
           font-weight: 700;
           letter-spacing: 1.5px;
           margin-bottom: -2px;
           overflow: hidden;
           padding: 0 0 3px;
           position: relative;
           text-decoration: none;
           text-transform: uppercase
         }
     
         .our-partnerships-block.support .community-efforts__item button:before {
           background: #233356;
           bottom: 0;
           content: "";
           height: 1px;
           left: 0;
           position: absolute;
           -webkit-transform: translateX(-101%);
           transform: translateX(-101%);
           transition: -webkit-transform .3s ease-in-out;
           transition: transform .3s ease-in-out;
           transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
           width: 100%;
           z-index: -1
         }
     
         .our-partnerships-block.support .community-efforts__item button:hover:before {
           -webkit-transform: translateX(0);
           transform: translateX(0)
         }
     
         @media(min-width:900px) {
           .our-partnerships-block.support .community-efforts__item button {
             bottom: 0;
             font-size: 11px;
             letter-spacing: 1.8px;
             line-height: 11px;
             position: absolute
           }
         }
     
         .our-partnerships-block.support .support__title {
           align-items: flex-start;
           color: #233356;
           display: flex;
           flex-wrap: wrap;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 32px;
           margin: 0 0 50px;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .our-partnerships-block.support .support__title:before {
           background: #233356;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 16px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .our-partnerships-block.support .support__title:before {
             right: calc(100% + 18px);
             top: 26px
           }
     
           .our-partnerships-block.support .support__title {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px;
             margin-bottom: 80px
           }
         }
     
         .our-partnerships-block__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .our-partnerships-block__inner {
             padding: 0 30px
           }
         }
     
         .our-partnerships-block__content {
           margin: 0;
           padding: 48px 0 64px
         }
     
         @media(min-width:900px) {
           .our-partnerships-block__content {
             display: flex;
             flex-wrap: wrap;
             margin: 0;
             padding: 140px 0 90px;
             width: 100%
           }
         }
     
         .our-partnerships-block__menu {
           margin-bottom: 40px
         }
     
         @media(min-width:900px) {
           .our-partnerships-block__menu {
             margin-bottom: 0;
             width: 327px
           }
         }
     
         .our-partnerships-block__menu ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .our-partnerships-block__menu ul li {
           color: #233356;
           cursor: pointer;
           font-size: 11px;
           letter-spacing: 2.5px;
           margin-bottom: 25px;
           opacity: .5;
           position: relative;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .our-partnerships-block__menu ul li {
             font-size: 12px;
             letter-spacing: 2.57px;
             line-height: 12px;
             margin-bottom: 50px
           }
         }
     
         .our-partnerships-block__menu ul li:before {
           background: rgba(35, 51, 86, .5);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 6px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .our-partnerships-block__menu ul li:before {
             right: calc(100% + 20px)
           }
         }
     
         .our-partnerships-block__menu ul li.active {
           opacity: 1
         }
     
         .our-partnerships-block__menu ul li.active:before {
           background: #233356
         }
     
         .our-partnerships-block__menu ul lilast-child {
           margin-bottom: 0
         }
     
         .our-partnerships-block__components {
           display: flex;
           flex-direction: column
         }
     
         @media(min-width:900px) {
           .our-partnerships-block__components {
             width: calc(100% - 327px)
           }
         }
     
         .our-partnerships-block__partnerships {
           display: none
         }
     
         .our-partnerships-block__partnerships.active {
           display: flex
         }
     
         .our-partnerships-block__community-efforts {
           display: none
         }
     
         .our-partnerships-block__community-efforts.active {
           display: flex
         }
     
         .careers .our-partnerships-block.support,
         .careers-2 .our-partnerships-block.support {
           padding: 10px 0 64px
         }
     
         @media(min-width:900px) {
     
           .careers .our-partnerships-block.support,
           .careers-2 .our-partnerships-block.support {
             padding: 2px 0 90px
           }
         }
     
         .partnerships.active {
           display: flex
         }
     
         .partnerships__items {
           display: flex;
           flex-wrap: wrap
         }
     
         .partnerships__item {
           margin: 0 0 44px;
           padding: 0;
           position: relative
         }
     
         .partnerships__item .link {
           height: 100%;
           left: 0;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .partnerships__item .heading {
           color: #233356;
           font-size: 14px;
           font-weight: 600;
           letter-spacing: 1.75px;
           margin: 0 0 16px;
           padding: 0 20px 0 0;
           text-transform: uppercase;
           width: 100%
         }
     
         @media(min-width:900px) {
           .partnerships__item .heading {
             font-size: 14px;
             letter-spacing: 1.6px;
             line-height: 22px;
             margin: 0 0 16px;
             min-height: 44px;
             padding: 0 20px 0 0;
             width: 254px
           }
         }
     
         .partnerships__item .copy {
           margin-bottom: 14px
         }
     
         @media(min-width:900px) {
           .partnerships__item .copy {
             margin-bottom: 24px;
             padding-bottom: 16px
           }
         }
     
         .partnerships__item .copy p,
         .partnerships__item .copy span {
           color: #13203c;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px;
           margin: 0;
           padding: 0
         }
     
         .partnerships__item .copy p {
           margin-bottom: 16px
         }
     
         .partnerships__item .copy p:last-of-type {
           margin-bottom: 0
         }
     
         .partnerships__item .website {
           color: #233356;
           cursor: pointer;
           display: inline-block;
           font-size: 11px;
           font-weight: 700;
           letter-spacing: 1.5px;
           margin-bottom: -2px;
           overflow: hidden;
           padding-bottom: 2px;
           position: relative;
           text-decoration: none;
           text-transform: uppercase
         }
     
         .partnerships__item .website:before {
           background: #233356;
           bottom: 0;
           content: "";
           height: 1px;
           left: 0;
           position: absolute;
           -webkit-transform: translateX(-101%);
           transform: translateX(-101%);
           transition: -webkit-transform .3s ease-in-out;
           transition: transform .3s ease-in-out;
           transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
           width: 100%;
           z-index: -1
         }
     
         .partnerships__item .website:hover:before {
           -webkit-transform: translateX(0);
           transform: translateX(0)
         }
     
         @media(min-width:900px) {
           .partnerships__item .website {
             bottom: 0;
             font-size: 11px;
             letter-spacing: 1.83px;
             line-height: 11px;
             position: absolute
           }
     
           .partnerships__item {
             margin: 0 25px 60px 0;
             padding: 0;
             width: 300px
           }
     
           .partnerships__item :nth-child(3n) {
             margin-right: 0
           }
     
           .partnerships__item:hover .website:before {
             -webkit-transform: translateX(0);
             transform: translateX(0)
           }
         }
     
         .community-efforts.active {
           display: flex
         }
     
         .community-efforts__items {
           display: flex;
           flex-wrap: wrap
         }
     
         .community-efforts__item {
           margin: 0 0 44px;
           padding: 0
         }
     
         .community-efforts__item .heading {
           margin: 0 0 22px;
           padding: 0 20px 0 0;
           text-transform: uppercase;
           width: 100%
         }
     
         @media(min-width:900px) {
           .community-efforts__item .heading {
             color: #233356;
             font-size: 16px;
             letter-spacing: 2px;
             line-height: 22px;
             margin: 0 0 24px;
             padding: 0 20px 0 0;
             width: 254px
           }
         }
     
         .community-efforts__item .copy {
           margin-bottom: 24px
         }
     
         .community-efforts__item .copy p,
         .community-efforts__item .copy span {
           color: #13203c;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px;
           margin: 0;
           padding: 0
         }
     
         .community-efforts__item .copy p {
           margin-bottom: 16px
         }
     
         .community-efforts__item .copy p:last-of-type {
           margin-bottom: 0
         }
     
         .community-efforts__item a {
           font-weight: 700;
           text-decoration: none;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .community-efforts__item a {
             color: #233356;
             font-size: 11px;
             letter-spacing: 1.83px;
             line-height: 11px
           }
     
           .community-efforts__item {
             margin: 0 25px 60px 0;
             padding: 0;
             width: 300px
           }
     
           .community-efforts__item :nth-child(3n) {
             margin-right: 0
           }
         }
     
         .social-icons ul {
           align-items: center;
           align-self: center;
           display: flex;
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .social-icons ul li {
           margin: 0 24px 0 0;
           padding: 0
         }
     
         .social-icons ul li.linkedin svg {
           height: 19px;
           width: 18px
         }
     
         .social-icons ul li:last-child {
           margin-right: 0
         }
     
         .property {
           display: block;
           flex: 1 0 344px;
           height: 220px;
           margin-right: 24px;
           position: relative;
           width: 344px
         }
     
         @media(min-width:900px) {
           .property {
             flex: 1 0 626px;
             height: 400px;
             margin-right: 29px;
             width: 626px
           }
     
           .property:hover:before {
             opacity: 1
           }
     
           .property:hover .property__rollover {
             background: transparent
           }
     
           .property:hover .property__title {
             height: 288px;
             padding-bottom: 0
           }
     
           .property:hover .property__title h4 {
             bottom: 0
           }
     
           .property:hover .property__meta {
             height: 112px;
             padding: 0 30px 30px
           }
     
           .property:hover .property__meta span {
             opacity: 1
           }
         }
     
         .property:before {
           background: rgba(11, 21, 44, .7);
           content: "";
           height: 100%;
           left: 0;
           opacity: 0;
           position: absolute;
           top: 0;
           transition: all .3s ease;
           width: 100%;
           z-index: 1
         }
     
         .property__image {
           background: #fff;
           height: 220px;
           position: relative
         }
     
         @media(min-width:900px) {
           .property__image {
             height: 400px
           }
         }
     
         .property__image img {
           display: block;
           height: 100%;
           left: 0;
           margin: 0;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           top: 0;
           transition: all .3s ease;
           width: 100%
         }
     
         .property__image .sold {
           height: 48px;
           left: auto;
           position: absolute;
           right: 0;
           top: 0;
           width: 156px;
           z-index: 3
         }
     
         .property__rollover {
           background: rgba(35, 51, 86, .7);
           bottom: 0;
           left: 0;
           position: absolute;
           width: 100%;
           z-index: 1
         }
     
         .property__rollover .property__specs--commercial li {
           line-height: 1;
           margin-top: 0
         }
     
         .property__rollover .property__specs--commercial li:first-of-type {
           margin-top: 0
         }
     
         .property__title {
           height: 80px;
           overflow: hidden;
           padding: 20px;
           position: relative;
           transition: .6s ease;
           width: 100%
         }
     
         @media(min-width:900px) {
           .property__title {
             height: 120px;
             padding: 30px
           }
         }
     
         .property__title h4 {
           bottom: 20px;
           box-sizing: border-box;
           color: #fff;
           font-size: 14px;
           font-weight: 500;
           letter-spacing: 1.4px;
           line-height: 20px;
           margin: 0;
           position: absolute;
           text-transform: uppercase;
           transition: .3s ease
         }
     
         @media(min-width:900px) {
           .property__title h4 {
             bottom: 30px;
             font-size: 20px;
             letter-spacing: 1.6px;
             line-height: 30px
           }
         }
     
         .property__meta {
           align-items: flex-end;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           overflow: hidden;
           transition: .3s ease
         }
     
         @media(min-width:900px) {
           .property__meta {
             height: 0;
             overflow: hidden
           }
         }
     
         .property__meta span {
           color: #fff;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.2px;
           line-height: 16px;
           padding: 0 20px 20px;
           text-transform: uppercase;
           width: calc(100% - 40px)
         }
     
         @media(min-width:900px) {
           .property__meta span {
             font-size: 13px;
             letter-spacing: 2.6px;
             line-height: 19px;
             opacity: 0;
             padding: 0;
             width: calc(100% - 220px)
           }
         }
     
         .property__specs {
           margin: 0
         }
     
         .property__specs--mobile {
           display: flex;
           flex-wrap: wrap;
           padding: 5px 0 0;
           position: relative;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .property__specs--mobile {
             display: none
           }
         }
     
         .property__specs--desktop {
           display: none
         }
     
         @media(min-width:900px) {
           .property__specs--desktop {
             display: block
           }
         }
     
         .property__specs--commercial li {
           line-height: 32px
         }
     
         .property__specs:after {
           background: #233356;
           content: "";
           height: 1px;
           position: absolute;
           right: -20px;
           top: 20px;
           width: 100px
         }
     
         @media(min-width:900px) {
           .property__specs:after {
             display: none
           }
         }
     
         .property__specs li {
           align-items: center;
           color: #233356;
           display: block;
           display: flex;
           flex-wrap: wrap;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.2px;
           margin: -3px 20px 0 0;
           text-transform: uppercase
         }
     
         .property__specs li:last-of-type {
           margin-right: 0
         }
     
         .property__specs li svg {
           margin-bottom: 0;
           margin-right: 8px;
           width: 32px
         }
     
         .property__specs li svg path {
           fill: #233356
         }
     
         @media(min-width:900px) {
           .property__specs li svg path {
             fill: #fff
           }
     
           .property__specs li {
             color: #fff;
             font-size: 14px;
             letter-spacing: 2.6px;
             margin-right: 0
           }
         }
     
         .property__link {
           height: 100%;
           left: 0;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 2
         }
     
         .latest-properties {
           background: #0b152c;
           padding: 60px 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .latest-properties {
             padding: 140px 0 90px
           }
         }
     
         .latest-properties .property-feature {
           border-bottom: 1px solid hsla(0, 0%, 100%, .2);
           margin-bottom: 40px;
           padding: 0 0 40px
         }
     
         @media(min-width:900px) {
           .latest-properties .property-feature {
             border-bottom: 0;
             margin-bottom: 0;
             padding: 140px 0 270px
           }
         }
     
         .latest-properties:before {
           background: #fff;
           bottom: 0;
           content: "";
           height: 205px;
           left: 0;
           position: absolute;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .latest-properties:before {
             height: 275px
           }
         }
     
         .latest-properties .property-options__menu:before {
           background: #0b152c
         }
     
         .latest-properties .property-options__menu:after {
           background: #fff;
           height: 185px
         }
     
         .latest-properties .property-options__menu ul li a,
         .latest-properties .property-options__menu ul li button {
           color: #fff
         }
     
         .latest-properties .property-options__menu ul li a:before,
         .latest-properties .property-options__menu ul li button:before {
           background: hsla(0, 0%, 100%, .4)
         }
     
         .latest-properties .property-options__slider {
           padding-bottom: 60px
         }
     
         @media(min-width:900px) {
           .latest-properties .property-options__slider {
             padding-bottom: 60px
           }
         }
     
         .latest-properties .property-options__slider::-webkit-scrollbar-track {
           background: #fff
         }
     
         .latest-properties .property-options__slider::-webkit-scrollbar-thumb {
           background-color: #0b152c
         }
     
         .latest-properties .property-options__slides {
           padding-bottom: 0
         }
     
         .latest-properties .property-options__slides .property__specs:after {
           right: 0
         }
     
         .latest-properties .property-options__slides .property__meta,
         .latest-properties .property-options__slides .property__meta h4,
         .latest-properties .property-options__slides .property__title,
         .latest-properties .property-options__slides .property__title h4 {
           transition: none
         }
     
         @media(min-width:900px) {
           .latest-properties .property-options__slides .property:hover .property__meta {
             height: 100%;
             max-height: unset
           }
         }
     
         .property-feature {
           background: #0b152c;
           padding: 40px 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .property-feature {
             min-height: 840px;
             padding: 140px 0 270px
           }
         }
     
         .property-feature__inner {
           display: flex;
           flex-wrap: wrap;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px;
           position: relative
         }
     
         @media(min-width:900px) {
           .property-feature__inner {
             padding: 0 30px
           }
         }
     
         .property-feature__details {
           position: relative;
           width: 100%;
           z-index: 4
         }
     
         @media(min-width:900px) {
           .property-feature__details {
             padding: 0;
             width: 70%
           }
         }
     
         .property-feature__details .property-feature__tag {
           background: #233356;
           color: #fff;
           display: inline-block;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.36px;
           line-height: 11px;
           margin: 0 0 15px;
           padding: 7px 9px;
           text-align: center;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .property-feature__details .property-feature__tag {
             margin: 0 0 20px
           }
         }
     
         .property-feature__details h1,
         .property-feature__details h4 {
           color: #fff;
           font-size: 18px;
           font-weight: 500;
           letter-spacing: 2.2px;
           line-height: 28px;
           margin: 0 0 28px;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           width: 100%
         }
     
         @media(min-width:900px) {
     
           .property-feature__details h1,
           .property-feature__details h4 {
             font-size: 24px;
             letter-spacing: 3px;
             line-height: 32px;
             margin-bottom: 28px
           }
         }
     
         .property-feature__details h1:before,
         .property-feature__details h4:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 15px;
           width: 50vw
         }
     
         @media(min-width:900px) {
     
           .property-feature__details h1:before,
           .property-feature__details h4:before {
             right: calc(100% + 18px);
             top: 26px
           }
     
           .property-feature__details h1,
           .property-feature__details h4 {
             font-size: 36px;
             letter-spacing: 5px;
             line-height: 48px;
             margin-bottom: 40px;
             width: 100%
           }
         }
     
         .property-feature__specs--mobile {
           display: block;
           padding: 36px 20px 0;
           position: relative;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .property-feature__specs--mobile {
             display: none
           }
         }
     
         .property-feature__specs--desktop {
           display: none
         }
     
         @media(min-width:900px) {
           .property-feature__specs--desktop {
             display: block
           }
         }
     
         .property-feature__specs span {
           color: #fff;
           display: block;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.4px;
           line-height: 14px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .property-feature__specs span {
             font-size: 16px;
             letter-spacing: 3.2px;
             line-height: 22px;
             margin-bottom: 120px
           }
         }
     
         .property-feature__specs ul {
           display: flex;
           flex-wrap: wrap;
           margin: 5px 0 0
         }
     
         @media(min-width:900px) {
           .property-feature__specs ul {
             display: block;
             margin: 0
           }
         }
     
         .property-feature__specs ul li {
           align-items: center;
           color: #fff;
           display: block;
           display: flex;
           flex-wrap: wrap;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.2px;
           margin: 0 20px 0 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .property-feature__specs ul li {
             font-size: 14px;
             letter-spacing: 2.57px;
             margin-right: 0;
             margin-top: 18px
           }
         }
     
         .property-feature__specs ul li svg {
           margin-bottom: 0;
           margin-right: 8px;
           width: 32px
         }
     
         .property-feature__specs ul li span {
           color: #fff;
           display: inline-block;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.2px;
           margin: 0;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .property-feature__specs ul li span {
             font-size: 12px;
             letter-spacing: 2.57px;
             margin-right: 25px
           }
         }
     
         .property-feature__image {
           height: 233px;
           margin-left: 20px;
           overflow: hidden;
           position: relative;
           width: calc(100% - 20px)
         }
     
         @media(min-width:900px) {
           .property-feature__image {
             height: 724px;
             position: absolute;
             right: 0;
             top: 0;
             width: 100vw
           }
         }
     
         .property-feature__image img {
           height: 100%;
           left: 0;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .property-feature__image {
             width: calc(100% - 320px)
           }
         }
     
         @media(min-width:1375px) {
           .property-feature__image {
             width: calc(100% - 50vw + 387.5px)
           }
         }
     
         .property-feature__image:before {
           background: rgba(87, 97, 119, .5);
           content: "";
           display: block;
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 3
         }
     
         .property-feature__link {
           height: 100%;
           left: 0;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 4
         }
     
         .property-feature__view {
           bottom: -50px;
           color: #fff;
           display: none;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.2px;
           position: absolute;
           right: 20px;
           text-transform: uppercase;
           z-index: 4
         }
     
         @media(min-width:900px) {
           .property-feature__view {
             bottom: 0;
             display: block;
             font-size: 12px;
             letter-spacing: 2.6px;
             right: 30px
           }
         }
     
         .property-feature__view:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           left: calc(100% + 8px);
           position: absolute;
           top: 7px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .property-feature__view:before {
             left: calc(100% + 18px);
             top: 7px
           }
         }
     
         .property-feature__play-video {
           align-items: center;
           cursor: pointer;
           display: flex;
           flex-wrap: wrap
         }
     
         .property-feature__play-video svg {
           margin-right: 16px
         }
     
         .property-feature__play-video:before {
           top: 22px
         }
     
         .property-feature--feature {
           background: #0b152c;
           padding: 150px 0 40px;
           position: relative
         }
     
         @media(min-width:900px) {
           .property-feature--feature {
             padding: 246px 0 140px
           }
     
           .property-feature--feature .property-feature__image {
             top: 190px
           }
         }
     
         .property-feature--feature:before {
           background: rgba(11, 21, 44, .88);
           content: "";
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 1
         }
     
         .property-feature--feature .sold {
           height: 48px;
           left: auto;
           position: absolute;
           right: 0;
           top: 0;
           width: 156px;
           z-index: 3
         }
     
         @media(min-width:1375px) {
           .property-feature--feature .sold {
             right: calc(50vw - 657.5px)
           }
         }
     
         .property-feature__bg {
           height: 100%;
           left: 0;
           margin: 0;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .properties {
           background: #efefef;
           padding-bottom: 60px
         }
     
         @media(min-width:900px) {
           .properties {
             padding-bottom: 70px
           }
         }
     
         .properties--projects {
           background: #0b152c;
           padding-bottom: 150px;
           padding-top: 86px
         }
     
         @media(min-width:900px) {
           .properties--projects {
             padding-bottom: 200px;
             padding-top: 0
           }
         }
     
         .properties--projects .properties__feature {
           margin-bottom: 0;
           margin-top: 0
         }
     
         .properties--projects .properties__feature .property-feature {
           padding-bottom: 20px
         }
     
         @media(min-width:900px) {
           .properties--projects .properties__feature .property-feature {
             padding-bottom: 113px
           }
         }
     
         .properties--projects .properties__feature:nth-child(2n) {
           text-align: right
         }
     
         .properties--projects .properties__feature:nth-child(2n) .property-feature__inner {
           justify-content: flex-end
         }
     
         .properties--projects .properties__feature:nth-child(2n) .property-feature__image {
           left: 0;
           margin-left: 0;
           right: auto
         }
     
         .properties--projects .properties__feature:nth-child(2n) .property-feature__details h4:before {
           left: calc(100% + 8px);
           right: auto
         }
     
         @media(min-width:900px) {
           .properties--projects .properties__feature:nth-child(2n) .property-feature__details h4:before {
             left: calc(100% + 18px);
             right: auto
           }
         }
     
         .properties--projects .properties__feature:nth-child(2n) .property-feature__specs ul {
           justify-content: flex-end
         }
     
         .properties--projects .properties__feature:nth-child(2n) .property-feature__specs ul li {
           justify-content: flex-end;
           margin-right: 0;
           text-align: right
         }
     
         .properties--projects .properties__feature:nth-child(2n) .property-feature__view {
           left: 20px;
           right: auto
         }
     
         @media(min-width:900px) {
           .properties--projects .properties__feature:nth-child(2n) .property-feature__view {
             left: 30px;
             right: auto
           }
         }
     
         .properties--projects .properties__feature:nth-child(2n) .property-feature__view:before {
           left: auto;
           right: calc(100% + 8px)
         }
     
         @media(min-width:900px) {
           .properties--projects .properties__feature:nth-child(2n) .property-feature__view:before {
             left: auto;
             right: calc(100% + 18px)
           }
         }
     
         .properties__search {
           margin: 0 auto;
           max-width: 882px;
           padding: 113px 20px 48px
         }
     
         @media(min-width:900px) {
           .properties__search {
             padding: 200px 20px 80px
           }
         }
     
         .properties__search .form__row {
           margin-bottom: 12px
         }
     
         .properties__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .properties__inner {
             padding: 0 30px
           }
         }
     
         .properties .property {
           flex: unset;
           height: unset;
           margin-bottom: 36px;
           margin-right: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .properties .property {
             height: 400px;
             margin-bottom: 25px;
             width: 49%
           }
         }
     
         .properties .sold {
           height: 48px;
           left: auto;
           position: absolute;
           right: 0;
           top: 0;
           width: 156px;
           z-index: 3
         }
     
         .properties__feature {
           margin: 0 -20px 36px;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .properties__feature {
             margin: -145px -30px 176px
           }
         }
     
         @media(min-width:1375px) {
           .properties__feature {
             margin: -145px calc(-50vw - -657.5px) 176px
           }
         }
     
         .properties__feature .property-feature {
           background: #0b152c;
           padding: 50px 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .properties__feature .property-feature {
             padding: 318px 0 113px
           }
     
           .properties__feature .property-feature .property-feature__image {
             top: 218px
           }
         }
     
         .single-property {
           background: #efefef
         }
     
         .single-property__important-dates p,
         .single-property__more-info p {
           font-size: 14px
         }
     
         .single-property__important-dates .btn,
         .single-property__more-info .btn {
           margin: 0 0 12px
         }
     
         .single-property .profile__appraisals-label {
           display: none
         }
     
         @media(min-width:900px) {
           .single-property .profile__appraisals-label {
             display: block;
             width: 204px
           }
         }
     
         .single-property__close {
           background: transparent;
           border: 0;
           box-shadow: none;
           cursor: pointer;
           padding: 0;
           position: absolute;
           right: 15px;
           top: 15px
         }
     
         .single-property__main {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           padding-top: 48px
         }
     
         @media(min-width:900px) {
           .single-property__main {
             padding-top: 183px
           }
         }
     
         @media(min-width:1375px) {
           .single-property__main {
             padding-left: calc(50vw - 687.5px)
           }
         }
     
         .single-property .property-feature__play-video {
           bottom: -189px
         }
     
         @media(min-width:900px) {
           .single-property .property-feature__play-video {
             bottom: 0
           }
         }
     
         .single-property__sidebar {
           width: 300px
         }
     
         .single-property__features-outgoings {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 40px 0 80px
         }
     
         @media(min-width:1375px) {
           .single-property__features-outgoings {
             padding-right: calc(50vw - 687.5px)
           }
         }
     
         .single-property__features {
           margin: 0 0 60px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .single-property__features {
             width: 58%
           }
         }
     
         .single-property__features h4 {
           font-size: 12px;
           font-weight: 700;
           letter-spacing: 2.57px;
           text-transform: uppercase
         }
     
         .single-property__features ul {
           display: flex;
           flex-wrap: wrap;
           list-style: none;
           margin: 0;
           padding: 0
         }
     
         .single-property__features ul li {
           align-items: center;
           border-bottom: 1px solid #91a0c1;
           display: flex;
           flex-wrap: wrap;
           margin-bottom: 0;
           padding: 16px 0;
           width: 50%
         }
     
         .single-property__features ul li svg {
           margin-right: 10px
         }
     
         .single-property__features ul li span {
           font-size: 13px
         }
     
         .single-property__outgoings {
           margin: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .single-property__outgoings {
             width: 35%
           }
         }
     
         .single-property__outgoings h4 {
           font-size: 12px;
           font-weight: 700;
           letter-spacing: 2.57px;
           text-transform: uppercase
         }
     
         .single-property__outgoings ul {
           list-style: none;
           margin: 0;
           padding: 20px 0 0
         }
     
         .single-property__outgoings ul li {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           margin-bottom: 10px
         }
     
         .single-property__outgoings ul li svg {
           margin-right: 10px
         }
     
         .single-property__outgoings ul li span {
           font-size: 13px
         }
     
         .single-property__floorplan-image,
         .single-property__lightbox-image {
           height: 100vh !important;
           max-width: 100vw;
           -o-object-fit: contain;
           object-fit: contain;
           width: auto !important
         }
     
         .single-property__menu {
           background: transparent;
           position: relative;
           position: -webkit-sticky;
           position: sticky;
           top: 180px;
           width: 100%;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .single-property__menu {
             background: #fff;
             margin-top: 9px
           }
     
           .single-property__menu:before {
             background: #efefef;
             content: "";
             display: none;
             height: 100%;
             position: absolute;
             right: 0;
             width: 50vw
           }
         }
     
         @media(min-width:900px)and (min-width:900px) {
           .single-property__menu:before {
             display: block
           }
         }
     
         .single-property__menu ul {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           list-style-type: none;
           margin: 0;
           padding: 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .single-property__menu ul {
             display: block;
             margin-left: -54px
           }
         }
     
         .single-property__menu ul li {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           margin-bottom: 30px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .single-property__menu ul li {
             margin-bottom: 50px
           }
         }
     
         .single-property__menu ul li a,
         .single-property__menu ul li button {
           background: transparent;
           border: 0;
           box-shadow: none;
           color: #233356;
           cursor: pointer;
           font-size: 12px;
           letter-spacing: 2.6px;
           opacity: .5;
           padding: 0;
           position: relative;
           text-decoration: none;
           text-transform: uppercase
         }
     
         .single-property__menu ul li a:before,
         .single-property__menu ul li button:before {
           background: rgba(35, 51, 86, .4);
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           vertical-align: middle;
           width: 15px
         }
     
         @media(min-width:900px) {
     
           .single-property__menu ul li a:before,
           .single-property__menu ul li button:before {
             margin-right: 20px;
             width: 63px
           }
         }
     
         .single-property__menu ul li.active a,
         .single-property__menu ul li.active button {
           opacity: 1
         }
     
         @media(min-width:900px) {
     
           .single-property__menu ul li:hover a,
           .single-property__menu ul li:hover button {
             opacity: 1
           }
         }
     
         .single-property__enquire-close {
           background: transparent;
           border: 0;
           box-shadow: none;
           display: none;
           height: 100vh;
           left: 0;
           position: fixed;
           top: 0;
           width: 100vw;
           z-index: 11
         }
     
         .single-property__enquire-close.active {
           display: block
         }
     
         .single-property__enquire-close:focus {
           outline: 0
         }
     
         .single-property__enquire {
           -ms-overflow-style: none;
           background: #13203c;
           color: #fff;
           max-height: calc(100vh - 180px);
           overflow-x: hidden;
           overflow-y: auto;
           position: fixed;
           right: 0;
           scrollbar-width: none;
           top: 70px;
           -webkit-transform: translateX(100%);
           transform: translateX(100%);
           transition: all .3s ease;
           width: calc(100% - 60px);
           z-index: 12
         }
     
         .single-property__enquire::-webkit-scrollbar {
           display: none
         }
     
         .single-property__enquire.active {
           -webkit-transform: translateX(0);
           transform: translateX(0)
         }
     
         @media(min-width:900px) {
           .single-property__enquire {
             top: 180px;
             width: 624px
           }
         }
     
         .single-property__form {
           padding: 40px 30px
         }
     
         @media(min-width:900px) {
           .single-property__form {
             padding: 100px 80px
           }
         }
     
         .single-property__form h3 {
           color: #fff;
           font-size: 20px;
           font-weight: 600;
           letter-spacing: 2.5px;
           margin-bottom: 40px;
           text-transform: uppercase
         }
     
         .single-property__form label {
           color: #fff
         }
     
         .single-property__form input {
           border-bottom: 1px solid #fff;
           color: #fff
         }
     
         .single-property__form textarea {
           border: 1px solid #fff;
           color: #fff
         }
     
         .single-property__form textarea::-webkit-input-placeholder {
           color: #fff
         }
     
         .single-property__form textarea:-ms-input-placeholder {
           color: #fff
         }
     
         .single-property__form textarea::placeholder {
           color: #fff
         }
     
         .single-property__form .react-select__input-container {
           border-bottom: 1px solid #fff;
           padding: 10px 0
         }
     
         .single-property__form .form__radio a,
         .single-property__form .form__radio input[type=radio]+label {
           color: #fff
         }
     
         .single-property__form .form__radio input[type=radio]+label:before {
           border: 1px solid #fff
         }
     
         .single-property__form .form__radio input[type=radio]+label:after {
           background: #fff
         }
     
         .single-property__form .form__checkbox a,
         .single-property__form .form__checkbox input[type=checkbox]+label {
           color: #fff
         }
     
         .single-property__form .form__checkbox input[type=checkbox]+label:before {
           border: 1px solid #fff
         }
     
         .single-property__form .form__checkbox input[type=checkbox]+label:after {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE3IDE0Ij48cG9seWdvbiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHBvaW50cz0iNi42MDcgMTQgMTYuMTk3IDEuMzM4IDE0LjQzIDAgNi4xNzEgMTAuOTA1IDEuMjg0IDcuNDI5IDAgOS4yMzUiLz48L3N2Zz4=)
         }
     
         .single-property__form-head {
           border-bottom: 1px solid hsla(0, 0%, 94%, .5);
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-bottom: 30px;
           padding-bottom: 30px
         }
     
         .single-property__form-head img {
           height: 80px;
           margin: 0;
           width: 126px
         }
     
         .single-property__form-head p {
           color: #fff;
           font-size: 14px;
           font-weight: 500;
           letter-spacing: 2px;
           line-height: 22px;
           margin-left: 20px;
           text-transform: uppercase;
           width: calc(100% - 160px)
         }
     
         .single-property__body {
           display: block;
           padding: 0 0 0 20px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .single-property__body {
             padding: 0;
             width: calc(100% - 300px)
           }
         }
     
         .single-property__body .single-property__slider {
           -ms-overflow-style: none;
           cursor: pointer;
           display: flex;
           flex-wrap: nowrap;
           margin-bottom: 60px;
           overflow-x: scroll;
           overflow-y: hidden;
           padding-bottom: 30px;
           position: relative;
           scrollbar-width: none;
           transition: all .3s;
           will-change: transform
         }
     
         @media(min-width:900px) {
           .single-property__body .single-property__slider {
             margin-bottom: 90px;
             padding-bottom: 60px
           }
         }
     
         .single-property__body .single-property__slider::-webkit-scrollbar {
           display: block;
           height: 5px;
           width: 100%
         }
     
         .single-property__body .single-property__slider::-webkit-scrollbar-track {
           background: #0b152c;
           height: 1px;
           width: 100%
         }
     
         .single-property__body .single-property__slider::-webkit-scrollbar-thumb {
           background-color: #fff;
           height: 5px
         }
     
         .single-property__body .single-property__image {
           display: inline-block;
           flex: 1 0 275px;
           height: 164px;
           margin-right: 16px;
           position: relative;
           width: 275px
         }
     
         @media(min-width:900px) {
           .single-property__body .single-property__image {
             flex: 1 0 681px;
             height: 406px;
             margin-right: 25px;
             width: 681px
           }
         }
     
         .single-property__body .single-property__image img {
           display: block;
           height: 100%;
           left: 0;
           margin: 0;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .single-property__title {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           padding-bottom: 60px;
           padding-right: 20px
         }
     
         @media(min-width:900px) {
           .single-property__title {
             padding-bottom: 80px
           }
         }
     
         @media(min-width:1375px) {
           .single-property__title {
             padding-right: calc(50vw - 687.5px)
           }
         }
     
         .single-property__title h2 {
           font-size: 18px;
           font-weight: 500;
           letter-spacing: 2.2px;
           line-height: 28px;
           text-transform: uppercase;
           width: 100%
         }
     
         @media(min-width:900px) {
           .single-property__title h2 {
             font-size: 30px;
             letter-spacing: 2.5px;
             line-height: 42px;
             width: 55%
           }
         }
     
         .single-property__title h4 {
           font-size: 11px;
           font-weight: 700;
           letter-spacing: 1.8px;
           margin-bottom: 15px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .single-property__title h4 {
             font-size: 12px;
             letter-spacing: 2.6px
           }
         }
     
         .single-property__title button {
           background: #13203c;
           border: 0;
           cursor: pointer;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           padding: 13px;
           text-transform: uppercase
         }
     
         .single-property__important-dates {
           width: 48%
         }
     
         @media(min-width:900px) {
           .single-property__important-dates {
             width: 20%
           }
         }
     
         .single-property__more-info {
           width: 48%
         }
     
         @media(min-width:900px) {
           .single-property__more-info {
             width: 20%
           }
         }
     
         .single-property__agent-wrap {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           padding-bottom: 20px;
           padding-right: 20px
         }
     
         @media(min-width:900px) {
           .single-property__agent-wrap {
             padding-bottom: 40px
           }
         }
     
         @media(min-width:1375px) {
           .single-property__agent-wrap {
             padding-right: calc(50vw - 687.5px)
           }
         }
     
         .single-property__location h4 {
           font-size: 13px;
           font-weight: 600;
           letter-spacing: 2.8px;
           text-transform: uppercase
         }
     
         .single-property__location .map__map {
           margin-left: -20px;
           width: calc(100% + 20px)
         }
     
         @media(min-width:900px) {
           .single-property__location .map__map {
             margin-left: 0;
             width: 100%
           }
         }
     
         .single-property__content-wrap {
           width: 100%
         }
     
         @media(min-width:900px) {
           .single-property__content-wrap {
             width: 60%
           }
         }
     
         .single-property__content-wrap button {
           background: #13203c;
           border: 0;
           cursor: pointer;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           margin-top: 25px;
           padding: 13px;
           text-transform: uppercase
         }
     
         .single-property__content {
           max-height: 676px;
           overflow: hidden;
           transition: max-height .3s ease;
           width: 100%
         }
     
         .single-property__content.active {
           max-height: 4000px
         }
     
         @media(min-width:900px) {
           .single-property__content.active {
             max-height: 3000px
           }
         }
     
         .single-property__content p {
           margin-bottom: 15px
         }
     
         .single-property__content h4 {
           margin-top: 30px
         }
     
         .single-property__agents {
           align-content: flex-start;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 40px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .single-property__agents {
             margin-top: 0;
             width: 35%
           }
         }
     
         .single-property__agents .team__details .general-detail {
           border-bottom: 1px solid rgba(35, 51, 86, .5);
           margin-bottom: 19px;
           padding-bottom: 18px
         }
     
         .single-property__agents .team {
           margin-bottom: 40px;
           min-height: auto;
           padding-bottom: 55px;
           position: relative;
           width: 47%
         }
     
         @media(min-width:900px) {
           .single-property__agents .team {
             margin-bottom: 40px;
             width: 45%
           }
         }
     
         .single-property__agents .team__image {
           margin-bottom: 25px;
           margin-right: 0
         }
     
         .single-property__agents .team__image .gatsby-image-wrapper,
         .single-property__agents .team__image img {
           margin-bottom: 0;
           max-width: 100%;
           -o-object-fit: cover;
           object-fit: cover;
           width: 100%
         }
     
         .single-property__agents .team__image .gatsby-image-wrapper img,
         .single-property__agents .team__image img img {
           max-width: 100% !important;
           width: 100% !important
         }
     
         .single-property__agents .team__content {
           display: block
         }
     
         .single-property__agents .team__content a,
         .single-property__agents .team__content h4,
         .single-property__agents .team__content p {
           color: #233356
         }
     
         .single-property__agents .team__details {
           display: block;
           width: 100%
         }
     
         .single-property__agents .team__details .contact-detail {
           display: block
         }
     
         .single-property__agents .team p {
           margin-bottom: 12px
         }
     
         .single-property__agents .team .team__link {
           bottom: 0;
           left: 0;
           position: absolute
         }
     
         .single-property__agents .team .team__link a {
           color: #fff
         }
     
         .single-property__image .gatsby-image-wrapper,
         .single-property__image img {
           height: 100%;
           left: 0;
           position: absolute !important;
           top: 0;
           width: 100%;
           z-index: 2
         }
     
         .single-property__listings {
           background: #0b152c;
           padding: 80px 0 60px
         }
     
         @media(min-width:900px) {
           .single-property__listings {
             padding: 140px 0 80px
           }
         }
     
         .single-property__listings .properties__inner,
         .single-property__listings h4 {
           width: 100%
         }
     
         @media(max-width:900px) {
           .single-property__listings .property__specs li svg path {
             fill: #fff
           }
         }
     
         .single-property__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .single-property__inner {
             padding: 0 30px
           }
         }
     
         .single-property__listings {
           margin-top: -40px
         }
     
         @media(min-width:900px) {
           .single-property__listings {
             margin-top: -100px
           }
         }
     
         .single-property__listings h3 {
           color: #fff;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           line-height: 24px;
           margin: 0 0 30px;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           z-index: 2
         }
     
         .single-property__listings h3:before {
           background: hsla(0, 0%, 100%, .4);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 11px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .single-property__listings h3:before {
             right: calc(100% + 20px)
           }
         }
     
         .single-property__listings .property {
           flex: unset;
           margin-bottom: 70px;
           margin-right: 0;
           width: 100%
         }
     
         .single-property__listings .property .property__specs--mobile li {
           color: #fff
         }
     
         .single-property__listings .property .property__specs--mobile:after {
           background: #fff
         }
     
         @media(min-width:900px) {
           .single-property__listings .property {
             margin-bottom: 25px;
             margin-right: 2%;
             width: 49%
           }
     
           .single-property__listings .property:nth-child(2n) {
             margin-right: 0
           }
         }
     
         .suggested {
           background: #0b152c
         }
     
         .suggested h4 {
           color: #fff;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           line-height: 24px;
           margin-bottom: 30px;
           max-width: 150px;
           text-transform: uppercase
         }
     
         .suggested .single-property__sidebar {
           padding-left: 20px;
           position: relative
         }
     
         @media(min-width:900px) {
           .suggested .single-property__sidebar {
             padding-left: 30px
           }
         }
     
         .suggested .single-property__sidebar ul {
           display: none
         }
     
         @media(min-width:900px) {
           .suggested .single-property__sidebar ul {
             display: block
           }
         }
     
         @media(max-width:900px) {
           .suggested .single-property__body {
             -ms-overflow-style: none;
             cursor: pointer;
             display: flex;
             flex-wrap: nowrap;
             margin-bottom: 60px;
             overflow-x: scroll;
             overflow-y: hidden;
             padding-bottom: 30px;
             position: relative;
             scrollbar-width: none;
             transition: all .3s;
             will-change: transform
           }
         }
     
         @media(max-width:900px)and (min-width:900px) {
           .suggested .single-property__body {
             margin-bottom: 90px;
             padding-bottom: 60px
           }
         }
     
         @media(max-width:900px) {
           .suggested .single-property__body::-webkit-scrollbar {
             display: block;
             height: 5px;
             width: 100%
           }
     
           .suggested .single-property__body::-webkit-scrollbar-track {
             background: #0b152c;
             height: 1px;
             width: 100%
           }
     
           .suggested .single-property__body::-webkit-scrollbar-thumb {
             background-color: #fff;
             height: 5px
           }
         }
     
         @media(max-width:900px) {
           .suggested .suggested__property {
             flex: 1 0 344px;
             margin-right: 20px;
             width: 344px
           }
         }
     
         .suggested__link {
           height: 100%;
           left: 0;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .suggested__link {
             display: none
           }
         }
     
         .suggested__property {
           position: relative
         }
     
         @media(min-width:900px) {
           .suggested__property {
             display: none
           }
     
           .suggested__property:before {
             background: rgba(87, 97, 119, .5);
             content: "";
             display: block;
             height: 100%;
             left: 0;
             mix-blend-mode: multiply;
             position: absolute;
             top: 0;
             width: 100%;
             z-index: 3
           }
     
           .suggested__property.active {
             display: block
           }
         }
     
         .suggested__property h5 {
           color: #fff;
           font-size: 18px;
           font-weight: 500;
           letter-spacing: 2.2px;
           line-height: 28px;
           margin: 0 0 28px;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           width: 100%
         }
     
         @media(min-width:900px) {
           .suggested__property h5 {
             display: none
           }
         }
     
         .suggested__property span {
           color: #fff;
           display: block;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.4px;
           line-height: 14px;
           margin-top: 25px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .suggested__property span {
             display: none
           }
         }
     
         .suggested ul {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           left: 30px;
           list-style-type: none;
           margin: 0;
           padding: 0;
           position: relative;
           position: absolute;
           top: 86px;
           width: 600px;
           z-index: 4
         }
     
         @media(min-width:900px) {
           .suggested ul {
             display: block
           }
         }
     
         .suggested ul li {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           margin-bottom: 30px;
           position: relative;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .suggested ul li {
             margin-bottom: 50px
           }
         }
     
         .suggested ul li .btn {
           background: #233356;
           color: #fff;
           font-weight: 600;
           left: -1px;
           opacity: 0;
           padding: 10px 20px;
           position: absolute;
           top: 7px;
           transition: all .3s ease;
           visibility: hidden;
           z-index: 2
         }
     
         .suggested ul li a,
         .suggested ul li button {
           background: transparent;
           border: 0;
           box-shadow: none;
           cursor: pointer;
           font-size: 12px;
           letter-spacing: 2.6px;
           opacity: .5;
           padding: 0;
           position: relative;
           text-align: left;
           text-decoration: none;
           text-transform: uppercase
         }
     
         .suggested ul li a h5,
         .suggested ul li button h5 {
           color: #fff;
           font-size: 30px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 38px;
           position: relative
         }
     
         .suggested ul li a h5:before,
         .suggested ul li button h5:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 15px;
           width: 50vw
         }
     
         @media(min-width:900px) {
     
           .suggested ul li a h5:before,
           .suggested ul li button h5:before {
             right: calc(100% + 18px);
             top: 23px
           }
         }
     
         .suggested ul li a span,
         .suggested ul li button span {
           color: #fff
         }
     
         .suggested ul li.active .btn {
           opacity: 1;
           visibility: visible
         }
     
         .suggested ul li.active button {
           padding-left: 100px
         }
     
         .suggested ul li.active a,
         .suggested ul li.active button {
           opacity: 1
         }
     
         @media(min-width:900px) {
     
           .suggested ul li:hover a,
           .suggested ul li:hover button {
             opacity: 1
           }
         }
     
         .suggested__image {
           display: block;
           margin: 0
         }
     
         .mobile-buttons {
           background: #fff;
           bottom: 0;
           display: flex;
           flex-wrap: wrap;
           left: 0;
           padding: 20px 10px;
           position: fixed;
           width: 100vw;
           z-index: 11
         }
     
         @media(min-width:900px) {
           .mobile-buttons {
             display: none
           }
         }
     
         .mobile-buttons__button {
           background: #13203c;
           border: 0;
           color: #fff;
           font-size: 12px;
           letter-spacing: 2px;
           margin: 0 10px;
           padding: 9px 10px 7px;
           text-align: left;
           text-transform: uppercase;
           width: calc(50% - 20px)
         }
     
         .chq-atc {
           display: inline-block;
           position: relative
         }
     
         .chq-atc--button {
           align-content: flex-start;
           background: transparent;
           border: 0;
           border-radius: 0;
           box-sizing: border-box;
           color: #13203c;
           cursor: pointer;
           display: block;
           flex-wrap: wrap;
           font-family: inherit;
           font-size: inherit;
           line-height: inherit;
           margin: 0;
           outline: none;
           padding: 0
         }
     
         .chq-atc--button span {
           color: rgba(0, 0, 0, .8);
           text-align: left
         }
     
         .chq-atc--button>svg[width="20px"] {
           display: none
         }
     
         .chq-atc--dropdown {
           background-color: #fff;
           border: 1px solid #eaeaea;
           border-radius: 5px;
           box-shadow: .5px .5px 3px rgba(0, 0, 0, .2);
           box-sizing: border-box;
           position: absolute;
           text-align: left;
           white-space: nowrap;
           width: 160px;
           z-index: 1
         }
     
         .chq-atc--dropdown a {
           color: #6a89af;
           display: block;
           padding: 8px 15px;
           text-decoration: none
         }
     
         .chq-atc--dropdown a:hover {
           background-color: #eaeaea
         }
     
         .chq-atc button {
           background: transparent;
           font-size: 13px;
           font-weight: 500;
           letter-spacing: 0;
           line-height: 20px;
           padding: 0;
           text-align: left;
           text-transform: none
         }
     
         .chq-atc button svg {
           display: none
         }
     
         .suburbs {
           background: #0b152c;
           padding: 60px 0 20px
         }
     
         @media(min-width:900px) {
           .suburbs {
             padding: 190px 0 70px
           }
         }
     
         .suburbs__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .suburbs__inner {
             padding: 0 30px
           }
         }
     
         .suburbs__sidebar {
           width: 100%
         }
     
         @media(min-width:900px) {
           .suburbs__sidebar {
             width: 258px
           }
         }
     
         .suburbs__title {
           padding-top: 100px
         }
     
         .suburbs__title h1 {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 30px;
           margin: 0 0 28px;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .suburbs__title h1:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 15px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .suburbs__title h1:before {
             right: calc(100% + 18px);
             top: 26px
           }
     
           .suburbs__title h1 {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px
           }
         }
     
         .suburbs__title p {
           color: #fff;
           margin-bottom: 0
         }
     
         .suburbs__title ul {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           list-style-type: none;
           margin: 60px 0 0;
           padding: 0;
           position: relative
         }
     
         @media(min-width:900px) {
           .suburbs__title ul {
             display: block;
             margin: 80px 0 0 -84px
           }
         }
     
         .suburbs__title ul li {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           margin-bottom: 40px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .suburbs__title ul li {
             margin-bottom: 50px
           }
         }
     
         .suburbs__title ul li a,
         .suburbs__title ul li button {
           background: transparent;
           border: 0;
           box-shadow: none;
           color: #fff;
           cursor: pointer;
           font-size: 11px;
           letter-spacing: 2px;
           opacity: .5;
           padding: 0;
           position: relative;
           text-decoration: none;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
     
           .suburbs__title ul li a,
           .suburbs__title ul li button {
             font-size: 12px;
             letter-spacing: 2.6px
           }
         }
     
         .suburbs__title ul li a:before,
         .suburbs__title ul li button:before {
           background: hsla(0, 0%, 100%, .4);
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           vertical-align: middle;
           width: 15px
         }
     
         @media(min-width:900px) {
     
           .suburbs__title ul li a:before,
           .suburbs__title ul li button:before {
             margin-right: 20px;
             width: 63px
           }
         }
     
         .suburbs__title ul li.active a,
         .suburbs__title ul li.active button {
           opacity: 1
         }
     
         .suburbs__body {
           width: 100%
         }
     
         @media(min-width:900px) {
           .suburbs__body {
             width: calc(100% - 320px)
           }
         }
     
         .suburbs__items {
           display: none;
           flex-wrap: wrap
         }
     
         .suburbs__items.active {
           display: flex
         }
     
         .suburbs__items .property-option {
           flex: unset;
           height: 213px;
           margin-bottom: 28px;
           margin-right: 6%;
           width: 47%
         }
     
         .suburbs__items .property-option:nth-child(2n) {
           margin-right: 0
         }
     
         .suburbs__items .property-option__details {
           padding: 16px 20px
         }
     
         @media(min-width:900px) {
           .suburbs__items .property-option__details {
             padding: 24px 20px
           }
         }
     
         .suburbs__items .property-option .title {
           font-size: 13px;
           height: 44px;
           letter-spacing: 1.3px;
           line-height: 22px
         }
     
         @media(min-width:900px) {
           .suburbs__items .property-option .title {
             font-size: 18px;
             height: 52px;
             letter-spacing: 2px;
             line-height: 26px
           }
     
           .suburbs__items .property-option {
             height: 400px;
             margin-bottom: 48px;
             margin-right: 2%;
             width: 32%
           }
     
           .suburbs__items .property-option:nth-child(2n) {
             margin-right: 2%
           }
     
           .suburbs__items .property-option:nth-child(3n) {
             margin-right: 0
           }
         }
     
         .article {
           height: 220px;
           position: relative;
           width: 100%;
           z-index: 1
         }
     
         .article:last-of-type {
           display: none
         }
     
         @media(min-width:900px) {
           .article {
             height: 400px;
             width: 49%
           }
     
           .article:hover img {
             -webkit-transform: scale(1.04);
             transform: scale(1.04)
           }
     
           .article:last-of-type {
             display: block
           }
         }
     
         .article__image {
           height: 300px;
           overflow: hidden;
           position: relative;
           width: 100%
         }
     
         @media(min-width:900px) {
           .article__image {
             height: 400px
           }
         }
     
         .article__image .gatsby-image-wrapper,
         .article__image img {
           height: 100%;
           left: 0;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           top: 0;
           transition: all .3s ease;
           width: 100%
         }
     
         .article__link {
           height: 100%;
           top: 0
         }
     
         .article__link,
         .article__title {
           left: 0;
           position: absolute;
           width: 100%
         }
     
         .article__title {
           background: rgba(35, 51, 86, .7);
           bottom: 0;
           padding: 20px
         }
     
         @media(min-width:900px) {
           .article__title {
             padding: 30px
           }
         }
     
         .article__title h4 {
           color: #fff;
           font-size: 14px;
           font-weight: 500;
           height: 40px;
           letter-spacing: 1.4px;
           line-height: 20px;
           margin: 0;
           overflow: hidden
         }
     
         @media(min-width:900px) {
           .article__title h4 {
             font-size: 20px;
             height: 60px;
             letter-spacing: 1.6px;
             line-height: 30px
           }
         }
     
         .article__tag {
           background: #0b152c;
           color: #fff;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.4px;
           padding: 8px 10px 7px;
           position: absolute;
           right: 20px;
           text-transform: uppercase;
           top: 20px
         }
     
         .article__videos {
           display: flex
         }
     
         .article__videos video {
           height: 100%;
           left: 0;
           -o-object-fit: cover;
           object-fit: cover;
           top: 0;
           width: 100%
         }
     
         .article-feature {
           background: #0b152c;
           height: 780px;
           padding-bottom: 60px;
           position: relative;
           width: 100vw
         }
     
         @media(min-width:900px) {
           .article-feature {
             height: 842px;
             margin-bottom: 200px;
             margin-top: -145px;
             padding-bottom: 0
           }
         }
     
         .article-feature__inner {
           height: 100%;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .article-feature__inner {
             padding: 0 30px
           }
         }
     
         .article-feature__content {
           display: flex;
           flex-shrink: 0;
           height: 100%;
           margin: 0;
           padding: 0;
           position: relative;
           width: 100%
         }
     
         @media(min-width:900px) {
           .article-feature__content {
             padding: 311px 0 98px
           }
         }
     
         .article-feature__content.reverse {
           flex-direction: row-reverse
         }
     
         .article-feature__bg {
           height: 100%;
           left: 0;
           margin: 0;
           position: absolute !important;
           top: 0;
           width: 100%
         }
     
         .article-feature__bg--mobile {
           display: block
         }
     
         @media(min-width:900px) {
           .article-feature__bg--mobile {
             display: none
           }
         }
     
         .article-feature__bg--desktop {
           display: none
         }
     
         @media(min-width:900px) {
           .article-feature__bg--desktop {
             display: block
           }
         }
     
         .article-feature__details {
           display: flex;
           flex-direction: column;
           height: 465px;
           justify-content: space-between;
           padding-top: 164px;
           position: relative;
           text-align: left;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .article-feature__details {
             height: auto;
             padding-top: 0;
             width: calc(100% - 364px)
           }
         }
     
         .article-feature__details.reverse {
           text-align: right
         }
     
         .article-feature__details.reverse .article-feature__heading {
           align-items: flex-end
         }
     
         .article-feature__details.reverse .article-feature__heading h3 {
           margin-left: auto;
           text-align: right
         }
     
         .article-feature__details.reverse .article-feature__heading h3:before {
           left: calc(100% + 8px);
           right: auto
         }
     
         @media(min-width:900px) {
           .article-feature__details.reverse .article-feature__heading h3:before {
             left: calc(100% + 18.5px);
             right: auto
           }
         }
     
         .article-feature__tag {
           background: #233356;
           color: #fff;
           display: inline-block;
           font-size: 11px;
           font-weight: 600;
           letter-spacing: 2.36px;
           line-height: 11px;
           margin: 0 0 20px;
           padding: 7px 9px;
           text-align: center;
           text-transform: uppercase
         }
     
         .article-feature__heading {
           width: 100%
         }
     
         .article-feature__heading a {
           text-decoration: none
         }
     
         .article-feature__heading h3 {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 1.8px;
           line-height: 32px;
           margin: 20px 0;
           max-height: 64px;
           overflow: hidden;
           position: relative
         }
     
         @media(min-width:900px) {
           .article-feature__heading h3 {
             color: #fff;
             font-size: 32px;
             letter-spacing: 2.1px;
             line-height: 48px;
             margin: 20px 0 42px;
             max-height: 100%;
             max-width: 52%;
             overflow: visible
           }
         }
     
         .article-feature__heading h3:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 16px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .article-feature__heading h3:before {
             right: calc(100% + 18.5px);
             top: 26px
           }
         }
     
         .article-feature__heading p {
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .article-feature__heading {
             margin: 0;
             padding: 0
           }
         }
     
         .article-feature__excerpt {
           margin-top: 30px;
           max-height: 76px;
           max-width: 400px;
           overflow: hidden
         }
     
         @media(min-width:900px) {
           .article-feature__excerpt {
             margin-top: 50px;
             max-height: 100%;
             overflow: visible
           }
         }
     
         .article-feature__excerpt p {
           color: #fff;
           font-size: 14px;
           line-height: 26px
         }
     
         .article-feature__date {
           color: #fff;
           font-size: 14px;
           letter-spacing: 2.8px;
           line-height: 22px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .article-feature__date {
             font-size: 16px;
             letter-spacing: 3.2px;
             line-height: 22px
           }
         }
     
         .article-feature__agent {
           align-items: center;
           display: flex;
           flex-direction: row
         }
     
         .article-feature__agent.reverse {
           flex-direction: row-reverse
         }
     
         .article-feature__thumbnail {
           display: none;
           margin-right: 23px
         }
     
         .article-feature__thumbnail img {
           display: block;
           height: 68px;
           margin-bottom: 0;
           -o-object-fit: cover;
           object-fit: cover;
           width: 68px
         }
     
         @media(min-width:900px) {
           .article-feature__thumbnail img {
             height: 84px;
             width: 84px
           }
     
           .article-feature__thumbnail {
             display: block;
             margin-left: 0;
             margin-right: 25px
           }
         }
     
         .article-feature__thumbnail.reverse {
           margin-left: 24px;
           margin-right: 0
         }
     
         .article-feature__position ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .article-feature__position ul li {
           color: #fff;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 24px;
           margin: 0;
           padding: 0
         }
     
         .article-feature__position ul li.author {
           font-size: 12px;
           font-weight: 700;
           letter-spacing: 2px;
           line-height: 22px;
           margin-bottom: 10px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .article-feature__position ul li.author {
             font-size: 14px
           }
     
           .article-feature__position {
             width: calc(100% - 109px)
           }
         }
     
         .article-feature__position {
           max-width: 135px
         }
     
         @media(min-width:900px) {
           .article-feature__position {
             max-width: inherit
           }
         }
     
         .article-feature__link {
           align-items: flex-end;
           bottom: 60px;
           display: flex;
           justify-content: flex-end;
           position: relative;
           position: absolute;
           right: 0;
           width: 364px;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .article-feature__link {
             position: static
           }
         }
     
         .article-feature__link a {
           color: #fff;
           font-size: 11px;
           letter-spacing: 2.57px;
           line-height: 22px;
           position: relative;
           text-align: right;
           text-decoration: none;
           text-transform: uppercase;
           z-index: 3
         }
     
         @media(min-width:900px) {
           .article-feature__link a {
             font-size: 12px
           }
         }
     
         .article-feature__link a:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           left: calc(100% + 8px);
           position: absolute;
           top: 10px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .article-feature__link a:before {
             left: calc(100% + 18.5px);
             top: 10px
           }
         }
     
         .article-feature__link.reverse {
           justify-content: flex-start;
           left: 0;
           right: 0
         }
     
         .article-feature__link.reverse a:before {
           left: auto;
           right: calc(100% + 8px)
         }
     
         @media(min-width:900px) {
           .article-feature__link.reverse a:before {
             left: auto;
             right: calc(100% + 18.5px)
           }
         }
     
         .article-feature__link button {
           align-items: center;
           background: transparent;
           border: 0;
           box-shadow: none;
           cursor: pointer;
           display: flex;
           justify-content: flex-end;
           padding: 0;
           width: 100%
         }
     
         .article-feature__link button span {
           color: #fff;
           font-size: 12px;
           letter-spacing: 2.5px;
           margin-left: 15px;
           text-transform: uppercase
         }
     
         .article-feature__link button span:first-child {
           margin-right: 15px
         }
     
         .article-feature__link button:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 16px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .article-feature__link button:before {
             right: calc(100% + 18.5px);
             top: 26px
           }
         }
     
         .article-feature__inner {
           position: relative
         }
     
         .article-feature__image {
           display: flex;
           height: 554px;
           justify-content: flex-end;
           left: 72px;
           position: absolute;
           top: 110px;
           width: 100%;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .article-feature__image {
             display: flex;
             height: 724px;
             left: 215px;
             top: 219px
           }
         }
     
         .article-feature__image:before {
           background: rgba(87, 97, 119, .5);
           content: "";
           display: block;
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: calc(100vw - 72px);
           z-index: 3
         }
     
         @media(min-width:900px) {
           .article-feature__image:before {
             width: calc(100vw - 246px)
           }
         }
     
         .article-feature__image .gatsby-image-wrapper,
         .article-feature__image img {
           height: 100%;
           left: 0;
           max-width: 100%;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           top: 0;
           width: calc(100vw - 91px)
         }
     
         @media(min-width:900px) {
     
           .article-feature__image .gatsby-image-wrapper,
           .article-feature__image img {
             height: 100%;
             width: calc(100vw - 215px)
           }
         }
     
         .article-feature__image.reverse {
           justify-content: flex-start;
           left: auto;
           right: 68px;
           top: 116px
         }
     
         @media(min-width:900px) {
           .article-feature__image.reverse {
             right: 215px;
             top: 218px
           }
         }
     
         .article-feature__image.reverse .gatsby-image-wrapper,
         .article-feature__image.reverse img,
         .article-feature__image.reverse:before {
           left: auto;
           right: 0
         }
     
         .article-feature--feature {
           background: transparent;
           height: 626px;
           margin-bottom: 60px
         }
     
         @media(min-width:900px) {
           .article-feature--feature {
             height: 842px;
             margin-bottom: 100px !important;
             margin-top: 0 !important
           }
         }
     
         .article-feature--feature:before {
           background: rgba(11, 21, 44, .88);
           content: "";
           height: 100%;
           left: 0;
           mix-blend-mode: multiply;
           position: absolute;
           top: 0;
           width: 100%;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .article-feature--feature .article-feature__content {
             padding: 247px 0 167px
           }
         }
     
         .article-feature--feature .article-feature__image {
           top: 0 !important
         }
     
         @media(min-width:900px) {
           body.news .header {
             background: transparent
           }
         }
     
         .news__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .news__inner {
             padding: 0 30px
           }
         }
     
         .news .article {
           margin-bottom: 32px
         }
     
         @media(min-width:900px) {
           .news .article {
             margin-bottom: 25px;
             width: 49%
           }
         }
     
         .news__feature {
           margin-left: -20px;
           margin-right: -20px;
           width: 100vw
         }
     
         @media(min-width:1375px) {
           .news__feature {
             margin-left: calc(-50vw - -657.5px);
             margin-right: calc(-50vw - -657.5px)
           }
         }
     
         .news__tags {
           display: flex;
           margin: 0;
           padding: 0;
           position: relative;
           z-index: 3
         }
     
         .news__tags ul {
           list-style-type: none
         }
     
         .news__tags ul,
         .news__tags ul li {
           margin: 0;
           padding: 0
         }
     
         @media(min-width:900px) {
           .news__tags {
             margin-bottom: 100px;
             padding-left: 300px;
             width: 100%
           }
         }
     
         .subscribe {
           background: #0b152c;
           margin: 60px 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .subscribe {
             margin-bottom: 100px;
             margin-top: 0
           }
         }
     
         .subscribe__content {
           display: flex;
           flex-wrap: wrap;
           margin: 0;
           padding: 0
         }
     
         .subscribe__content p {
           color: #fff;
           margin: 0;
           padding: 0
         }
     
         .subscribe__details {
           align-items: center;
           display: flex;
           flex-direction: column;
           height: 192px;
           justify-content: center;
           margin: 0;
           padding: 0;
           position: relative;
           width: 100%
         }
     
         @media(min-width:900px) {
           .subscribe__details {
             height: auto;
             width: 433px
           }
         }
     
         .subscribe__details .icon {
           position: relative;
           width: 240px;
           z-index: 2;
           z-index: 4
         }
     
         .subscribe__details .icon p {
           color: #fff;
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3.2px;
           line-height: 26px;
           margin: 10px 0 0;
           padding: 0;
           text-transform: uppercase
         }
     
         .subscribe__details svg {
           place-self: start
         }
     
         @media(min-width:900px) {
           .subscribe__details svg {
             height: 60px;
             width: 66.5px
           }
         }
     
         .subscribe__image {
           margin: 0;
           overflow: hidden;
           padding: 0
         }
     
         .subscribe__image,
         .subscribe__image:before {
           height: 100%;
           left: 0;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .subscribe__image:before {
           background: rgba(87, 97, 119, .5);
           content: "";
           display: block;
           mix-blend-mode: multiply;
           z-index: 3
         }
     
         .subscribe__image img {
           height: calc(100% + 5px);
           margin: -5px 0 0;
           padding: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .subscribe__image {
             height: 100%;
             width: 433px
           }
         }
     
         .subscribe__social-form {
           width: 100%
         }
     
         @media(min-width:900px) {
           .subscribe__social-form {
             padding: 64px 85px 64px 83px;
             width: calc(100% - 433px)
           }
         }
     
         .subscribe__social {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0;
           padding: 30px 30px 10px
         }
     
         @media(min-width:900px) {
           .subscribe__social {
             margin-bottom: 43px;
             padding: 0
           }
         }
     
         .subscribe__social p {
           color: #fff;
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 24px;
           margin: 0 0 20px;
           padding: 0;
           width: 412px
         }
     
         @media(min-width:900px) {
           .subscribe__social p {
             margin: 0
           }
         }
     
         .subscribe__form {
           padding: 30px
         }
     
         @media(min-width:900px) {
           .subscribe__form {
             padding: 0
           }
         }
     
         .subscribe__form form {
           align-items: flex-end;
           display: flex;
           flex-wrap: wrap;
           margin: 0;
           padding: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .subscribe__form form {
             flex-wrap: nowrap
           }
         }
     
         .subscribe__form form label {
           color: #fff
         }
     
         .subscribe__form form .form__input {
           border-bottom: 1px solid #fff;
           color: #fff;
           flex-grow: 1;
           font-size: 16px
         }
     
         @media(min-width:900px) {
           .subscribe__form form .form__input {
             font-size: 12px
           }
         }
     
         .subscribe__form form .form__row {
           width: 100%
         }
     
         @media(min-width:900px) {
           .subscribe__form form .form__row {
             margin: 0 20px 0 0;
             padding: 0;
             width: 50%
           }
         }
     
         .subscribe__form form .form__row--submit {
           margin-bottom: 0;
           margin-right: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .subscribe__form form .form__row--submit {
             width: 163px
           }
         }
     
         .single-suburb .hero-banner-about {
           height: 554px
         }
     
         @media(min-width:900px) {
           .single-suburb .hero-banner-about {
             height: unset
           }
         }
     
         .single-suburb .hero-banner-about__heading .tag {
           background: #233356;
           color: #fff;
           display: inline-block;
           font-size: 11px;
           font-weight: 700;
           letter-spacing: 2.36px;
           line-height: 11px;
           margin-bottom: 20px;
           padding: 7px 9px 6px;
           text-align: center
         }
     
         @media(min-width:900px) {
           .single-suburb .hero-banner-about__heading .tag {
             margin-bottom: 20px
           }
         }
     
         .single-suburb .hero-banner-about__heading .heading {
           position: relative
         }
     
         .single-suburb .hero-banner-about__heading .heading:before {
           top: 16px
         }
     
         @media(min-width:900px) {
           .single-suburb .hero-banner-about__heading .heading:before {
             top: 26px
           }
         }
     
         .single-suburb .hero-banner-about__heading .subtitle {
           color: #fff;
           font-size: 14px;
           letter-spacing: 2.8px;
           line-height: 24px
         }
     
         @media(min-width:900px) {
           .single-suburb .hero-banner-about__heading .subtitle {
             font-size: 16px;
             letter-spacing: 3.2px;
             line-height: 22px
           }
         }
     
         .single-suburb .hero-banner-about__heading .copy {
           color: #fff;
           font-size: 13px;
           letter-spacing: 0;
           line-height: 26px;
           text-transform: none
         }
     
         @media(min-width:900px) {
           .single-suburb .hero-banner-about__heading .copy {
             font-size: 14px;
             width: 301px
           }
         }
     
         @media(min-width:1375px) {
           .single-suburb .map {
             margin-bottom: -100px;
             padding-left: calc(50vw - 357.5px)
           }
         }
     
         .single-suburb .latest-listings {
           background: #0b152c;
           padding: 60px 0
         }
     
         @media(min-width:900px) {
           .single-suburb .latest-listings {
             padding: 165px 0 64px
           }
         }
     
         .single-suburb .latest-listings__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .single-suburb .latest-listings__inner {
             padding: 0 30px
           }
         }
     
         .single-suburb .latest-listings__filters {
           align-items: flex-start;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           justify-self: center
         }
     
         .single-suburb .latest-listings__menu {
           margin-bottom: 40px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .single-suburb .latest-listings__menu {
             margin-bottom: 0;
             width: auto
           }
         }
     
         .single-suburb .latest-listings__menu ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .single-suburb .latest-listings__menu ul li {
           color: #fff;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.5px;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .single-suburb .latest-listings__menu ul li:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 6px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .single-suburb .latest-listings__menu ul li:before {
             right: calc(100% + 18px);
             top: 6px
           }
         }
     
         .single-suburb .latest-listings__filter {
           margin-bottom: 24px
         }
     
         @media(min-width:900px) {
           .single-suburb .latest-listings__filter {
             margin-bottom: 0
           }
         }
     
         .single-suburb .latest-listings__filter .form__radio {
           margin: 0 30px 16px 0;
           padding: 0
         }
     
         .single-suburb .latest-listings__filter .form__radio input[type=radio]+label {
           color: #fff;
           text-transform: uppercase
         }
     
         .single-suburb .latest-listings__filter .form__radio input[type=radio]+label:before {
           border: 1px solid #fff
         }
     
         .single-suburb .latest-listings__filter .form__radio input[type=radio]+label:after {
           background: #fff
         }
     
         @media(min-width:900px) {
           .single-suburb .latest-listings__filter .form__radio {
             margin-bottom: 0;
             margin-right: 46px
           }
         }
     
         .single-suburb .latest-listings__filter .form__radio:last-child {
           margin-right: 0
         }
     
         @media(min-width:900px) {
           .single-suburb .latest-listings__filter {
             padding-bottom: 52px
           }
         }
     
         .single-suburb .latest-listings__details {
           display: flex;
           flex-direction: column
         }
     
         .single-suburb .latest-listings__properties {
           display: flex;
           flex-wrap: wrap
         }
     
         .single-suburb .latest-listings__properties p {
           color: #fff
         }
     
         .single-suburb .latest-listings__properties .property {
           margin-bottom: 56px
         }
     
         @media(min-width:900px) {
           .single-suburb .latest-listings__properties .property {
             flex: unset;
             margin-bottom: 25px;
             margin-right: 25px;
             width: 49%
           }
         }
     
         .single-suburb .latest-listings__properties .property:nth-child(2n) {
           margin-right: 0
         }
     
         .single-suburb .latest-listings__properties .property__specs:after {
           background: #fff
         }
     
         .single-suburb .latest-listings__properties .property__specs li {
           color: #fff
         }
     
         .single-suburb .latest-listings__link {
           margin-top: 25px;
           text-align: center;
           width: 100%
         }
     
         .single-suburb .latest-listings__link a {
           background: #233356;
           color: #fff;
           display: block;
           font-size: 12px;
           letter-spacing: 2px;
           line-height: 12px;
           margin: 0;
           padding: 12px 0 11px;
           text-align: center;
           text-decoration: none;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .single-suburb .latest-listings__link a {
             display: block;
             margin: 0
           }
     
           .single-suburb .latest-listings__link {
             margin: 39px 0 0
           }
         }
     
         .single-suburb .suburb-property-options {
           padding: 60px 0
         }
     
         .single-suburb .suburb-property-options__inner {
           margin: 0 auto;
           max-width: 1375px;
           max-width: 100%;
           padding: 0 0 0 20px
         }
     
         @media(min-width:900px) {
           .single-suburb .suburb-property-options__inner {
             padding: 0 30px;
             padding-left: 20px;
             padding-right: 0
           }
         }
     
         @media(min-width:1375px) {
           .single-suburb .suburb-property-options__inner {
             padding-left: calc(50vw - 687.5px)
           }
         }
     
         .single-suburb .suburb-property-options__content {
           display: flex;
           flex-wrap: wrap
         }
     
         @media(min-width:900px) {
           .single-suburb .suburb-property-options__content {
             margin: 0;
             padding: 100px 0 92px
           }
         }
     
         .single-suburb .suburb-property-options__menu {
           width: 100%
         }
     
         @media(min-width:900px) {
           .single-suburb .suburb-property-options__menu {
             width: 216px
           }
         }
     
         .single-suburb .suburb-property-options__menu ul {
           list-style-type: none;
           margin: 0;
           padding: 0
         }
     
         .single-suburb .suburb-property-options__menu ul li {
           color: #233356;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.6px;
           line-height: 24px;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .single-suburb .suburb-property-options__menu ul li {
             margin-bottom: 30px;
             max-width: 95px
           }
         }
     
         .single-suburb .suburb-property-options__menu ul li:before {
           background: rgba(35, 51, 86, .4);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 11px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .single-suburb .suburb-property-options__menu ul li:before {
             right: calc(100% + 20px)
           }
         }
     
         .single-suburb .suburb-property-options__details {
           width: 100%
         }
     
         @media(min-width:900px) {
           .single-suburb .suburb-property-options__details {
             width: calc(100% - 216px)
           }
         }
     
         .single-suburb .suburb-property-options__details {
           -ms-overflow-style: none;
           cursor: pointer;
           display: flex;
           flex-wrap: nowrap;
           overflow-x: scroll;
           overflow-y: hidden;
           padding-bottom: 35px;
           position: relative;
           scrollbar-width: none;
           transition: all .3s;
           will-change: transform
         }
     
         @media(min-width:900px) {
           .single-suburb .suburb-property-options__details {
             padding-bottom: 60px
           }
         }
     
         .single-suburb .suburb-property-options__details::-webkit-scrollbar {
           display: block;
           height: 5px;
           width: 100%
         }
     
         .single-suburb .suburb-property-options__details::-webkit-scrollbar-track {
           background: #fff;
           height: 1px;
           width: 100%
         }
     
         .single-suburb .suburb-property-options__details::-webkit-scrollbar-thumb {
           background-color: #0b152c;
           height: 5px
         }
     
         @media(min-width:900px) {
           .single-suburb .suburb-property-options__details .property-option {
             flex: 1 0 345px;
             max-width: 345px;
             width: 345px
           }
         }
     
         .upcoming {
           padding: 0 0 40px
         }
     
         .upcoming:before {
           background: #0b152c;
           content: "";
           display: block;
           height: 81px;
           margin: 0 0 24px
         }
     
         @media(min-width:900px) {
           .upcoming:before {
             height: 109px
           }
     
           .upcoming {
             padding: 0 0 120px
           }
         }
     
         .upcoming__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .upcoming__inner {
             padding: 0 30px
           }
         }
     
         .upcoming__header h2 {
           font-size: 18px
         }
     
         @media(min-width:900px) {
           .upcoming__header h2 {
             font-size: 24px
           }
         }
     
         .upcoming__header h2 span {
           color: #0b152c;
           font-size: 18px;
           font-weight: 600
         }
     
         @media(min-width:900px) {
           .upcoming__header h2 span {
             font-size: 24px
           }
         }
     
         .upcoming__filter {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           margin: 30px 0 20px
         }
     
         .upcoming__filter ul {
           display: flex;
           flex-wrap: wrap;
           list-style: none;
           margin: 0;
           padding: 0 5px 0 0
         }
     
         .upcoming__filter ul li {
           margin-bottom: 0;
           margin-right: 20px
         }
     
         .upcoming__filter ul li a {
           color: #000;
           text-decoration: none
         }
     
         .upcoming__filter ul li a[aria-current=page] {
           text-decoration: underline
         }
     
         .upcoming__filter .form__row--select {
           margin: 0 20px 0 0
         }
     
         .upcoming__specs {
           align-items: flex-end;
           display: flex;
           flex-wrap: wrap;
           list-style: none;
           margin: 0;
           padding: 0
         }
     
         .upcoming__specs li {
           align-items: center;
           display: flex;
           margin-bottom: 0;
           margin-right: 10px
         }
     
         .upcoming__specs li:last-of-type {
           margin-right: 0
         }
     
         .upcoming__specs li svg path {
           fill: #0b152c
         }
     
         .table .tr {
           border-bottom: 1px solid #dddcd9;
           color: #000;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           padding: 20px 0;
           text-decoration: none;
           transition: .3s ease
         }
     
         .table .tr:hover {
           background: rgba(11, 21, 44, .2)
         }
     
         @media(min-width:900px) {
           .table .tr {
             padding: 10px
           }
         }
     
         .table .tr .td {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           padding: 10px 0;
           position: relative
         }
     
         .table .tr .td .atc-item {
           color: #13203c;
           cursor: pointer;
           display: inline-block;
           margin-bottom: -2px;
           overflow: hidden;
           padding-bottom: 2px;
           position: relative
         }
     
         .table .tr .td .atc-item:before {
           background: #13203c;
           bottom: 0;
           content: "";
           height: 1px;
           left: 0;
           position: absolute;
           -webkit-transform: translateX(-101%);
           transform: translateX(-101%);
           transition: -webkit-transform .3s ease-in-out;
           transition: transform .3s ease-in-out;
           transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
           width: 100%;
           z-index: -1
         }
     
         .table .tr .td .atc-item:hover:before {
           -webkit-transform: translateX(0);
           transform: translateX(0)
         }
     
         .table .tr .td .atc-dropdown {
           background: #3f3f40;
           left: 0;
           list-style: none;
           padding: 5px 15px;
           position: absolute;
           top: calc(100% + 10px);
           width: 150px;
           z-index: 3
         }
     
         .table .tr .td .atc-dropdown li {
           margin-bottom: 0;
           padding: 5px 0
         }
     
         .table .tr .td .atc-dropdown li a {
           color: #fff;
           text-decoration: none
         }
     
         .table .tr .td:first-child {
           order: 1;
           width: 100%
         }
     
         @media(min-width:900px) {
           .table .tr .td:first-child {
             order: 1;
             width: 25%
           }
         }
     
         .table .tr .td:nth-child(2) {
           order: 3;
           width: 100%
         }
     
         @media(min-width:900px) {
           .table .tr .td:nth-child(2) {
             order: 2;
             width: 25%
           }
         }
     
         .table .tr .td:nth-child(3) {
           order: 4;
           width: 50%
         }
     
         .table .tr .td:nth-child(3) img {
           margin-right: 8px
         }
     
         @media(min-width:900px) {
           .table .tr .td:nth-child(3) {
             order: 3;
             width: 15%
           }
         }
     
         .table .tr .td:nth-child(4) {
           font-weight: 600;
           order: 5;
           text-transform: uppercase;
           width: 50%
         }
     
         @media(min-width:900px) {
           .table .tr .td:nth-child(4) {
             order: 4;
             width: 15%
           }
         }
     
         .table .tr .td:nth-child(5) {
           order: 2;
           width: 100%
         }
     
         @media(min-width:900px) {
           .table .tr .td:nth-child(5) {
             order: 5;
             width: 15%
           }
         }
     
         .table a {
           color: #000;
           text-decoration: none
         }
     
         .table img {
           margin: 0
         }
     
         .timeline {
           background: #0b152c;
           padding: 60px 0 0
         }
     
         @media(min-width:900px) {
           .timeline {
             padding: 120px 0 62px
           }
         }
     
         .timeline__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .timeline__inner {
             padding: 0 30px
           }
         }
     
         .timeline__title {
           align-items: flex-start;
           color: #fff;
           display: flex;
           flex-wrap: wrap;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 32px;
           margin: 0 0 50px;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           width: 258px
         }
     
         .timeline__title:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 32px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .timeline__title:before {
             right: calc(100% + 18px);
             top: 52px
           }
     
           .timeline__title {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px;
             margin-bottom: 58px;
             width: 391px
           }
         }
     
         .timeline__items {
           display: flex;
           flex-wrap: wrap;
           justify-content: flex-start;
           position: relative
         }
     
         @media(min-width:900px) {
           .timeline__items:after {
             background: #91a0c1;
             content: "";
             height: 121px;
             left: 32px;
             position: absolute;
             top: calc(100% - 59px);
             width: 4px;
             z-index: 1
           }
         }
     
         .timeline .curved-line {
           height: 100%;
           left: 0;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .timeline__item {
           display: flex;
           flex-direction: column;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-bottom: 40px;
           position: relative;
           width: 100%
         }
     
         .timeline__item:before {
           background: #fff;
           bottom: -40px;
           content: "";
           height: calc(100% - 68px);
           left: 34px;
           position: absolute;
           width: 1px;
           z-index: 0
         }
     
         @media(min-width:900px) {
           .timeline__item:before {
             bottom: 34px
           }
     
           .timeline__item:after {
             background: #91a0c1;
             bottom: 32px;
             content: "";
             height: 4px;
             left: 0;
             position: absolute;
             width: calc(100% + 40px);
             z-index: 0
           }
     
           .timeline__item {
             margin-bottom: 58px;
             margin-right: 3%;
             width: 22.5%
           }
     
           .timeline__item:nth-child(4n) {
             margin-right: 0
           }
     
           .timeline__item:nth-child(4n):after {
             width: calc(100% - 100px)
           }
     
           .timeline__item:nth-child(8) .curved-line:before {
             background: #0b152c;
             content: "";
             height: calc(100% + 54px);
             position: absolute;
             right: 200px;
             top: -90px;
             width: 50%;
             z-index: 1
           }
     
           .timeline__item:nth-child(8) .curved-line:after {
             border: 4px solid #91a0c1;
             border-left: 0;
             border-radius: 50px;
             content: "";
             height: calc(100% + 62px);
             position: absolute;
             right: 40px;
             top: -94px;
             width: 100%
           }
         }
     
         .timeline__item h4 {
           background: #233356;
           color: #fff;
           font-size: 14px;
           font-weight: 600;
           letter-spacing: 3.2px;
           margin: 0;
           padding: 16px 20px;
           text-transform: uppercase
         }
     
         .timeline__content {
           background: #fff;
           position: relative;
           z-index: 2
         }
     
         .timeline__content ul {
           list-style: none;
           margin: 0;
           padding: 20px 20px 1px
         }
     
         .timeline__content ul li {
           display: flex;
           flex-wrap: wrap;
           margin: 0 0 20px;
           padding: 0
         }
     
         .timeline__tick {
           align-items: center;
           background: #233356;
           border-radius: 50%;
           display: flex;
           flex-wrap: wrap;
           height: 28px;
           justify-content: center;
           margin-right: 20px;
           width: 28px
         }
     
         .timeline__tick img {
           display: block;
           margin: 0;
           width: 14px
         }
     
         .timeline__list-item {
           font-size: 13px;
           line-height: 26px;
           max-width: calc(100% - 48px)
         }
     
         .timeline__year {
           align-items: center;
           background: #233356;
           border-radius: 50%;
           display: flex;
           flex-wrap: wrap;
           height: 68px;
           justify-content: center;
           margin-bottom: 25px;
           margin-top: 25px;
           position: relative;
           width: 68px;
           z-index: 2
         }
     
         @media(min-width:900px) {
           .timeline__year {
             margin-bottom: 0;
             margin-top: 70px
           }
         }
     
         .timeline__year span {
           color: #fff;
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3.2px;
           text-transform: uppercase
         }
     
         .divisions {
           padding: 60px 0 10px
         }
     
         @media(min-width:900px) {
           .divisions {
             padding: 120px 0 62px
           }
         }
     
         .divisions--extra-padding {
           padding: 60px 0
         }
     
         @media(min-width:900px) {
           .divisions--extra-padding {
             padding: 120px 0
           }
         }
     
         .divisions__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .divisions__inner {
             padding: 0 30px
           }
         }
     
         .divisions__title {
           align-items: flex-start;
           color: #233356;
           display: flex;
           flex-wrap: wrap;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 32px;
           margin: 0 0 50px;
           padding: 0;
           position: relative;
           text-transform: uppercase;
           width: 258px
         }
     
         .divisions__title:before {
           background: #233356;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 16px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .divisions__title:before {
             right: calc(100% + 18px);
             top: 26px
           }
     
           .divisions__title {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px;
             margin-bottom: 80px;
             width: 391px
           }
         }
     
         .divisions__items {
           display: flex;
           flex-wrap: wrap
         }
     
         .divisions__item {
           margin-bottom: 40px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .divisions__item {
             margin-bottom: 58px;
             margin-right: 3%;
             width: 22.5%
           }
     
           .divisions__item:nth-child(4n) {
             margin-right: 0
           }
         }
     
         .divisions__item h4 {
           font-size: 16px;
           font-weight: 700;
           letter-spacing: 3.2px;
           line-height: 22px;
           text-transform: uppercase
         }
     
         .about-us .divisions--extra-padding,
         .about-us-2 .divisions--extra-padding {
           padding: 0 0 60px
         }
     
         @media(min-width:900px) {
     
           .about-us .divisions--extra-padding,
           .about-us-2 .divisions--extra-padding {
             padding: 20px 0 120px
           }
         }
     
         .video {
           background: #e2e4e9;
           padding: 0 0 45px;
           position: relative
         }
     
         @media(min-width:900px) {
           .video {
             padding: 0 0 80px
           }
         }
     
         .video__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .video__inner {
             padding: 0 30px
           }
         }
     
         .video__wrapper {
           margin: 0 auto;
           max-width: 1054px;
           text-align: center;
           width: 100%
         }
     
         .video__image {
           display: inline-block;
           height: 0;
           margin-bottom: 0;
           margin-top: 50px;
           padding-bottom: 56.65%;
           position: relative;
           width: 100%
         }
     
         @media(min-width:900px) {
           .video__image {
             margin-bottom: 0;
             margin-top: 80px
           }
         }
     
         .video__image img {
           display: block;
           height: 100%;
           left: 0;
           margin: 0;
           -o-object-fit: cover;
           object-fit: cover;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .video__image .play {
           cursor: pointer;
           left: 50%;
           position: absolute;
           top: 50%;
           -webkit-transform: translate(-50%, -50%);
           transform: translate(-50%, -50%)
         }
     
         .video__image .play svg {
           height: 64px;
           margin: 0;
           width: 64px
         }
     
         .video__text {
           margin-top: 50px
         }
     
         @media(min-width:900px) {
           .video__text {
             margin-top: 60px
           }
         }
     
         .video__text span {
           font-size: 12px;
           letter-spacing: 2px;
           position: relative;
           text-transform: uppercase
         }
     
         .video__text span:before {
           background: rgba(35, 51, 86, .5);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 6px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .video__text span:before {
             right: calc(100% + 20px)
           }
         }
     
         .video__text-wrap {
           margin: 30px auto 0;
           max-width: 732px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .video__text-wrap {
             margin: -20px auto 0
           }
         }
     
         .video__text-wrap h4 {
           font-size: 24px;
           font-weight: 600;
           letter-spacing: 3px;
           line-height: 32px;
           margin: 0 0 30px;
           text-transform: uppercase
         }
     
         .stats {
           background: #0b152c;
           padding: 60px 0
         }
     
         @media(min-width:900px) {
           .stats {
             padding: 100px 0
           }
         }
     
         .stats__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .stats__inner {
             padding: 0 30px
           }
         }
     
         .stats h4 {
           color: #fff;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 3.2px;
           margin-bottom: 40px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .stats h4 {
             font-size: 13px
           }
         }
     
         .stats__content {
           width: 100%
         }
     
         @media(min-width:900px) {
           .stats__content {
             width: 52%
           }
         }
     
         .stats__main p {
           color: #fff;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 32px;
           margin: 0 0 12px;
           position: relative;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .stats__main p {
             font-size: 48px;
             letter-spacing: 5px;
             line-height: 52px;
             margin: 0 0 12px
           }
         }
     
         .stats__main p:before {
           background: #fff;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 16px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .stats__main p:before {
             right: calc(100% + 18px);
             top: 26px
           }
         }
     
         .stats__main span {
           color: #fff;
           font-size: 10px;
           font-weight: 600;
           letter-spacing: 2.8px;
           line-height: 26px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .stats__main span {
             font-size: 12px
           }
         }
     
         .stats__items {
           border-top: 1px solid #91a0c1;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 40px;
           padding-top: 40px
         }
     
         .stats__item {
           margin-bottom: 30px;
           text-align: left;
           width: 100%
         }
     
         .stats__item:last-of-type {
           margin-bottom: 0
         }
     
         @media(min-width:900px) {
           .stats__item {
             margin-bottom: 0;
             width: 30%
           }
         }
     
         .stats__item p {
           color: #fff;
           font-size: 20px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 26px;
           margin: 0 0 10px;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .stats__item p {
             font-size: 24px;
             line-height: 32px
           }
         }
     
         .stats__item span {
           color: #fff;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           line-height: 20px;
           text-transform: uppercase
         }
     
         .stats__disclaimer {
           color: #b7b7b7;
           font-size: 11px;
           font-style: italic;
           font-weight: 500;
           letter-spacing: 0;
           line-height: 20px;
           margin-bottom: 0;
           margin-top: 40px
         }
     
         .stats__image {
           display: none
         }
     
         @media(min-width:900px) {
           .stats__image {
             display: block;
             width: 40%
           }
         }
     
         .stats__image img {
           margin: -180px 0 -160px;
           max-height: 700px;
           -o-object-fit: cover;
           object-fit: cover;
           width: 100%
         }
     
         .faqs {
           background: #efefef;
           padding: 60px 0
         }
     
         @media(min-width:900px) {
           .faqs {
             padding: 120px 0
           }
         }
     
         .faqs__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .faqs__inner {
             padding: 0 30px
           }
         }
     
         .faqs__disclaimer {
           margin-top: 50px
         }
     
         .faqs__disclaimer p {
           font-size: 11px;
           font-style: italic;
           line-height: 18px
         }
     
         .faqs__title {
           width: 100%
         }
     
         @media(min-width:900px) {
           .faqs__title {
             width: 40%
           }
         }
     
         .faqs__title h3 {
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.5px;
           line-height: 20px;
           max-width: 180px;
           position: relative;
           text-transform: uppercase
         }
     
         .faqs__title h3:before {
           background: rgba(35, 51, 86, .5);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 20px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .faqs__title h3:before {
             right: calc(100% + 20px)
           }
         }
     
         .faqs__title ul {
           display: flex;
           flex-wrap: wrap;
           margin: 45px 0;
           padding: 0
         }
     
         .faqs__title ul li {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           margin-right: 28px
         }
     
         .faqs__title ul li button {
           background: none;
           border: 0;
           box-shadow: none;
           color: #233356;
           cursor: pointer;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           line-height: 19px;
           outline: 0;
           padding: 0 0 0 32px;
           position: relative;
           text-transform: uppercase
         }
     
         .faqs__title ul li button:before {
           border: 1px solid #0b152c;
           border-radius: 50%;
           content: "";
           height: 20px;
           left: 0;
           position: absolute;
           top: 0;
           width: 20px
         }
     
         .faqs__title ul li.active button:after {
           background: #0b152c;
           border-radius: 50%;
           content: "";
           height: 12px;
           left: 4px;
           position: absolute;
           top: 4px;
           width: 12px
         }
     
         .faqs__content {
           width: 100%
         }
     
         @media(min-width:900px) {
           .faqs__content {
             width: 52%
           }
         }
     
         .faqs__category {
           display: none
         }
     
         .faqs__category.active {
           display: block
         }
     
         .faqs .accordion__item {
           margin-bottom: 0
         }
     
         .faqs .accordion__item.active .accordion__title {
           border-color: #233356
         }
     
         .faqs .accordion__item.active .accordion__title .title {
           font-weight: 600
         }
     
         .faqs .accordion__item.active .accordion__title .arrow:before {
           -webkit-transform: rotate(90deg);
           transform: rotate(90deg)
         }
     
         .faqs .accordion__item.active .accordion__title .arrow:after {
           opacity: 0
         }
     
         .faqs .accordion__item.active .accordion__content {
           display: block
         }
     
         .faqs .accordion__title {
           align-items: flex-start;
           border-bottom: 1px solid #91a0c1;
           cursor: pointer;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 0 20px;
           padding: 10px 0 20px
         }
     
         .faqs .accordion__title .title {
           font-size: 13px;
           letter-spacing: .2px;
           line-height: 26px;
           transition: all .3s ease;
           width: calc(100% - 60px)
         }
     
         @media(min-width:900px) {
           .faqs .accordion__title .title {
             font-size: 16px
           }
         }
     
         .faqs .accordion__title .arrow {
           height: 15px;
           margin-top: 6px;
           position: relative;
           width: 15px
         }
     
         .faqs .accordion__title .arrow:before {
           height: 15px;
           left: 7px;
           top: 0;
           width: 1px
         }
     
         .faqs .accordion__title .arrow:after,
         .faqs .accordion__title .arrow:before {
           background: #233356;
           content: "";
           display: block;
           position: absolute;
           transition: all .3s ease
         }
     
         .faqs .accordion__title .arrow:after {
           height: 1px;
           left: 0;
           top: 7px;
           width: 15px
         }
     
         .faqs .accordion__content {
           display: none
         }
     
         .faqs .accordion__content div {
           margin-bottom: 40px
         }
     
         .guides {
           padding: 60px 0
         }
     
         @media(min-width:900px) {
           .guides {
             padding: 120px 0
           }
         }
     
         .guides__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .guides__inner {
             padding: 0 30px
           }
         }
     
         .guides__title {
           width: 100%
         }
     
         @media(min-width:900px) {
           .guides__title {
             margin-bottom: 25px
           }
         }
     
         .guides__title h3 {
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 32px;
           position: relative;
           text-transform: uppercase
         }
     
         .guides__title h3:before {
           background: rgba(35, 51, 86, .5);
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 16px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .guides__title h3:before {
             right: calc(100% + 20px);
             top: 26px
           }
     
           .guides__title h3 {
             font-size: 40px;
             letter-spacing: 5px;
             line-height: 52px
           }
         }
     
         .guides__title ul {
           display: flex;
           flex-wrap: wrap;
           margin: 45px 0;
           padding: 0
         }
     
         .guides__title ul li {
           align-items: center;
           display: flex;
           flex-wrap: wrap;
           margin-right: 28px
         }
     
         .guides__title ul li button {
           background: none;
           border: 0;
           box-shadow: none;
           color: #233356;
           cursor: pointer;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           line-height: 19px;
           outline: 0;
           padding: 0 0 0 32px;
           position: relative;
           text-transform: uppercase
         }
     
         .guides__title ul li button:before {
           border: 1px solid #0b152c;
           border-radius: 50%;
           content: "";
           height: 20px;
           left: 0;
           position: absolute;
           top: 0;
           width: 20px
         }
     
         .guides__title ul li.active button:after {
           background: #0b152c;
           border-radius: 50%;
           content: "";
           height: 12px;
           left: 4px;
           position: absolute;
           top: 4px;
           width: 12px
         }
     
         .guides__content {
           width: 100%
         }
     
         .guides__category {
           display: none
         }
     
         .guides__category.active {
           display: flex;
           flex-wrap: wrap
         }
     
         .guides__item {
           margin-bottom: 20px;
           margin-right: 4%;
           position: relative;
           width: 48%
         }
     
         .guides__item:nth-child(2n) {
           margin-right: 0
         }
     
         @media(min-width:900px) {
           .guides__item {
             margin-bottom: 30px;
             width: 23%
           }
     
           .guides__item,
           .guides__item:nth-child(2n) {
             margin-right: 2%
           }
     
           .guides__item:nth-child(4n) {
             margin-right: 0
           }
         }
     
         .guides__item img {
           display: block;
           margin: 0;
           width: 100%
         }
     
         .guides__item div {
           align-items: center;
           background: #fff;
           bottom: 30px;
           display: flex;
           flex-wrap: wrap;
           height: 120px;
           justify-content: center;
           left: 30px;
           position: absolute;
           width: calc(100% - 60px)
         }
     
         @media(min-width:900px) {
           .guides__item div {
             bottom: 50px;
             left: 50px;
             width: calc(100% - 100px)
           }
         }
     
         .guides__item div span {
           color: #233356;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           line-height: 18px;
           padding: 5px 15px;
           text-align: center;
           text-transform: uppercase
         }
     
         @media(min-width:900px) {
           .guides__item div span {
             font-size: 14px;
             line-height: 22px;
             padding: 10px 20px
           }
         }
     
         .guides__item a {
           height: 100%;
           left: 0;
           position: absolute;
           top: 0;
           width: 100%
         }
     
         .guides__item-category {
           background: #233356;
           color: #fff;
           font-size: 12px;
           font-weight: 600;
           left: 0;
           letter-spacing: 2px;
           padding: 12px 16px;
           position: absolute;
           text-transform: uppercase;
           top: 0
         }
     
         .agent-properties {
           background: #f2f2f2;
           padding: 50px 0 0
         }
     
         @media(min-width:900px) {
           .agent-properties {
             padding: 90px 0 0
           }
         }
     
         .agent-properties__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .agent-properties__inner {
             padding: 0 30px
           }
         }
     
         .agent-properties__title {
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3.2px;
           line-height: 22px;
           margin-bottom: 40px;
           position: relative;
           text-transform: uppercase
         }
     
         .agent-properties__title:before {
           background: #233356;
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           position: absolute;
           right: 100%;
           top: 10px;
           vertical-align: middle;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .agent-properties__title:before {
             margin-right: 20px
           }
         }
     
         .agent-properties__items {
           display: flex;
           flex-wrap: wrap
         }
     
         .agent-properties__items .property {
           cursor: pointer;
           flex: unset;
           height: auto;
           margin-bottom: 30px;
           width: 100%
         }
     
         .agent-properties__items .property:before {
           display: none
         }
     
         @media(min-width:900px) {
           .agent-properties__items .property {
             margin-right: 2.5%;
             width: 31.333%
           }
     
           .agent-properties__items .property:nth-child(3n) {
             margin-right: 0
           }
     
           .agent-properties__items .property:hover .property__title {
             height: auto
           }
         }
     
         .agent-properties__items .property__rollover {
           background: transparent;
           display: block;
           position: relative
         }
     
         .agent-properties__items .property__title {
           height: auto;
           padding: 20px 0
         }
     
         .agent-properties__items .property__title h4 {
           color: #233356;
           font-size: 14px;
           font-weight: 600;
           letter-spacing: 1.4px;
           line-height: 24px;
           position: static
         }
     
         .agent-properties__items .property__meta {
           display: none
         }
     
         .agent-properties__items .property__image {
           background: none;
           height: auto
         }
     
         .agent-properties__items .property__image img {
           height: 260px;
           position: relative
         }
     
         .agent-properties__items .property__image img.sold {
           height: auto;
           position: absolute;
           width: 120px
         }
     
         .agent-properties__more {
           background: #233356;
           border: 0;
           color: #fff;
           cursor: pointer;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2px;
           padding: 10px 0;
           text-align: center;
           text-transform: uppercase;
           transition: all .3s ease;
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-properties__more:hover {
             background: #0b152c
           }
         }
     
         .agent-insights {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 40px
         }
     
         .agent-insights h4 {
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3.2px;
           line-height: 22px;
           margin-bottom: 40px;
           position: relative;
           text-transform: uppercase;
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-insights h4 {
             width: 15%
           }
         }
     
         .agent-insights h4:before {
           background: #233356;
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           position: absolute;
           right: 100%;
           top: 10px;
           vertical-align: middle;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .agent-insights h4:before {
             margin-right: 20px
           }
         }
     
         .agent-insights__stats {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-insights__stats {
             width: 82%
           }
         }
     
         .agent-insights__stat {
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-insights__stat {
             width: 18.5%
           }
         }
     
         .agent-insights__stat .value {
           font-size: 30px;
           font-weight: 500;
           letter-spacing: 3.75px;
           text-transform: uppercase
         }
     
         .agent-insights__stat .label {
           color: #91a0c1;
           font-size: 13px;
           font-weight: 600;
           letter-spacing: 2.75px;
           line-height: 24px;
           text-transform: uppercase
         }
     
         .agent-about {
           background: #f2f2f2;
           padding: 50px 0
         }
     
         @media(min-width:900px) {
           .agent-about {
             padding: 90px 0
           }
         }
     
         .agent-about__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .agent-about__inner {
             padding: 0 30px
           }
         }
     
         .agent-about__title {
           margin-bottom: 50px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-about__title {
             width: 35%
           }
         }
     
         .agent-about__title h3 {
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3.2px;
           line-height: 22px;
           margin-bottom: 40px;
           position: relative;
           text-transform: uppercase
         }
     
         .agent-about__title h3:before {
           background: #233356;
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           position: absolute;
           right: 100%;
           top: 10px;
           vertical-align: middle;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .agent-about__title h3:before {
             margin-right: 20px
           }
         }
     
         .agent-about__image {
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-about__image {
             width: 55%
           }
         }
     
         .agent-awards {
           background: #13203c;
           padding: 80px 0 50px
         }
     
         @media(min-width:900px) {
           .agent-awards {
             padding: 170px 0 90px
           }
         }
     
         .agent-awards__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .agent-awards__inner {
             padding: 0 30px
           }
         }
     
         .agent-awards__achievements {
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-awards__achievements {
             width: 46%
           }
         }
     
         .agent-awards .agent-testimonials {
           position: relative;
           width: 100%
         }
     
         .agent-awards .agent-testimonials h3 {
           color: #fff;
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3.2px;
           line-height: 22px;
           margin-bottom: 40px;
           position: relative;
           text-transform: uppercase
         }
     
         .agent-awards .agent-testimonials h3:before {
           background: #fff;
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           position: absolute;
           right: 100%;
           top: 10px;
           vertical-align: middle;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .agent-awards .agent-testimonials h3:before {
             margin-right: 20px
           }
         }
     
         .agent-awards .agent-testimonials .slick-dots {
           position: absolute;
           right: -5px;
           text-align: right;
           top: -63px
         }
     
         .agent-awards .agent-testimonials .slick-dots li {
           margin: 0 0 0 2px
         }
     
         .agent-awards .agent-testimonials .slick-dots li button:before {
           color: #91a0c1;
           font-size: 10px;
           opacity: 1
         }
     
         .agent-awards .agent-testimonials .slick-dots li.slick-active button:before {
           color: #fff
         }
     
         @media(min-width:900px) {
           .agent-awards .agent-testimonials {
             width: 46%
           }
         }
     
         .agent-awards .agent-testimonials .testimonials__slide {
           width: 100%
         }
     
         .agent-awards .agent-testimonials .testimonials__slide .testimonial {
           margin-bottom: 28px;
           width: 100%
         }
     
         .agent-awards .agent-testimonials .testimonials__slide .testimonial .copy {
           height: unset
         }
     
         .agent-awards .agent-testimonials .testimonials__slide .testimonial .read-more {
           display: none
         }
     
         .agent-awards .agent-achievements {
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-awards .agent-achievements {
             width: 40%
           }
         }
     
         .agent-awards .agent-achievements h3 {
           color: #fff;
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3.2px;
           line-height: 22px;
           margin-bottom: 40px;
           position: relative;
           text-align: right;
           text-transform: uppercase
         }
     
         .agent-awards .agent-achievements h3:before {
           background: #fff;
           content: "";
           display: inline-block;
           height: 1px;
           left: 100%;
           margin-right: 10px;
           position: absolute;
           top: 10px;
           vertical-align: middle;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .agent-awards .agent-achievements h3:before {
             margin-left: 20px
           }
         }
     
         .agent-awards .agent-achievements__item {
           align-items: flex-start;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-bottom: 40px;
           max-width: 320px
         }
     
         .agent-awards .agent-achievements__item img {
           margin: 29px 0 0
         }
     
         .agent-awards .agent-achievements__item div {
           width: calc(100% - 50px)
         }
     
         .agent-awards .agent-achievements__item div span {
           color: #91a0c1;
           font-size: 12px;
           font-weight: 600;
           letter-spacing: 2.5px;
           text-transform: uppercase
         }
     
         .agent-awards .agent-achievements__item div h4 {
           color: #fff;
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3px;
           line-height: 24px;
           margin: 10px 0 0;
           text-transform: uppercase
         }
     
         .agent-awards .agent-achievements__item div p {
           color: #fff;
           margin: 0
         }
     
         .agent-image-content {
           background: #fff;
           padding: 50px 0 0
         }
     
         @media(min-width:900px) {
           .agent-image-content {
             padding: 90px 0 0
           }
         }
     
         .agent-image-content__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .agent-image-content__inner {
             padding: 0 30px
           }
         }
     
         .agent-image-content__image {
           margin-bottom: 40px;
           width: 100%
         }
     
         .agent-image-content__image img {
           display: block;
           margin-bottom: 0
         }
     
         @media(min-width:900px) {
           .agent-image-content__image {
             margin-bottom: 0;
             width: 55%
           }
     
           .agent-image-content__image img {
             margin-bottom: -80px
           }
         }
     
         .agent-image-content__content {
           margin-bottom: 0;
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-image-content__content {
             width: 36%
           }
         }
     
         .agent-image-content__content h3 {
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3.2px;
           line-height: 22px;
           margin-bottom: 40px;
           position: relative;
           text-transform: uppercase
         }
     
         .agent-image-content__content h3:before {
           background: #233356;
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           position: absolute;
           right: 100%;
           top: 10px;
           vertical-align: middle;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .agent-image-content__content h3:before {
             margin-right: 20px
           }
     
           .agent-template .profile__header {
             align-items: flex-end;
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             width: 58%
           }
         }
     
         .agent-template .profile__position {
           display: block
         }
     
         .agent-template .profile__position .job-title {
           font-size: 16px;
           font-weight: 600
         }
     
         .agent-template .profile__position .location {
           color: #91a0c1;
           font-size: 16px;
           font-weight: 600;
           margin-top: 8px
         }
     
         @media(min-width:900px) {
           .agent-template .profile__details {
             padding-bottom: 70px;
             padding-top: 210px
           }
     
           .agent-template .profile__contact-details {
             margin-bottom: 0;
             padding-bottom: 70px;
             padding-top: 210px;
             width: 200px
           }
     
           .agent-template .profile__contact-details ul {
             margin-bottom: 0;
             margin-top: 40px
           }
     
           .agent-template .profile__bio-stats {
             width: 100%
           }
     
           .agent-template .profile__stats {
             max-width: 54%;
             padding: 67px 0
           }
         }
     
         .agent-template .profile__stats p.label {
           font-size: 12px
         }
     
         @media(min-width:900px) {
           .agent-template .profile__stat {
             max-width: 150px;
             width: 25%
           }
     
           .agent-template .profile__image {
             top: 125px;
             width: 38%
           }
     
           .agent-template .profile__image .gatsby-image-wrapper,
           .agent-template .profile__image img {
             height: 661px
           }
         }
     
         .agent-template .profile__contact {
           background: #0b152c;
           padding: 50px 0 0
         }
     
         @media(min-width:900px) {
           .agent-template .profile__contact {
             padding: 90px 0 0
           }
         }
     
         .agent-template .profile__contact h4 {
           color: #fff;
           font-size: 16px;
           font-weight: 600;
           letter-spacing: 3.2px;
           line-height: 22px;
           margin-bottom: 40px;
           position: relative;
           text-transform: uppercase
         }
     
         .agent-template .profile__contact h4:before {
           background: #fff;
           content: "";
           display: inline-block;
           height: 1px;
           margin-right: 10px;
           position: absolute;
           right: 100%;
           top: 10px;
           vertical-align: middle;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .agent-template .profile__contact h4:before {
             margin-right: 20px
           }
         }
     
         .agent-template .profile__contact-form {
           display: block;
           width: 100%
         }
     
         .agent-template .profile__form {
           background: #efefef;
           padding: 40px 20px 30px;
           width: 100%
         }
     
         @media(min-width:900px) {
           .agent-template .profile__form {
             padding: 70px 54px 40px
           }
         }
     
         .agent-template .profile__form .form__checkbox input[type=checkbox]+label {
           max-width: 360px
         }
     
         .agent-template .full-image {
           height: auto
         }
     
         .agent-template .full-image__bg {
           position: relative
         }
     
         .agent-template .full-image__bg--mobile {
           height: 320px
         }
     
         .agent-template .full-image__bg--desktop {
           height: 400px
         }
     
         .agent-footer__inner {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .agent-footer__inner {
             padding: 0 30px
           }
         }
     
         .agent-footer__top {
           background: #efefef;
           color: #233356;
           padding: 40px 0
         }
     
         @media(min-width:900px) {
           .agent-footer__top {
             padding: 45px 0
           }
         }
     
         .agent-footer__top .agent-footer__inner {
           align-items: flex-end
         }
     
         .agent-footer__top .agent-footer__col h4 {
           color: #233356;
           font-size: 24px;
           font-weight: 600;
           letter-spacing: 3px;
           line-height: 30px;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .agent-footer__top .agent-footer__col h4:before {
           background: #233356;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 15px;
           width: 50vw
         }
     
         @media(min-width:900px) {
           .agent-footer__top .agent-footer__col h4:before {
             right: calc(100% + 18.5px);
             top: 40px
           }
     
           .agent-footer__top .agent-footer__col h4 {
             font-size: 28px;
             letter-spacing: 3.6px;
             line-height: 42px;
             margin: 0;
             padding: 0
           }
         }
     
         .agent-footer__top .agent-footer__col p {
           font-size: 13px;
           font-weight: 600;
           letter-spacing: 2.4px;
           line-height: 26px;
           margin: 0;
           text-transform: uppercase
         }
     
         .agent-footer__bottom {
           background: #13203c;
           padding: 14px 0 9px
         }
     
         .agent-footer__bottom svg {
           width: 112px
         }
     
         .agent-footer__bottom .agent-footer__inner {
           align-items: center
         }
     
         .agent-footer__bottom p {
           color: #fff;
           margin: -5px 0 0
         }
     
         .property-popup {
           background: #0b152c;
           height: 100vh;
           left: 0;
           opacity: 0;
           position: fixed;
           top: 0;
           transition: all .3s ease;
           visibility: hidden;
           width: 100vw;
           z-index: 15
         }
     
         .property-popup.active {
           opacity: 1;
           visibility: visible
         }
     
         .property-popup__wrapper {
           background: #fff;
           left: 50%;
           max-width: 750px;
           position: absolute;
           top: 50%;
           -webkit-transform: translate(-50%, -50%);
           transform: translate(-50%, -50%);
           width: 100%
         }
     
         .property-popup__inner {
           padding: 50px
         }
     
         .property-popup__tag {
           background: #233356;
           color: #fff;
           display: inline-block;
           font-size: 11px;
           font-weight: 700;
           letter-spacing: 2px;
           margin-bottom: 20px;
           padding: 5px 10px;
           text-transform: uppercase
         }
     
         .property-popup__title h4 {
           color: #233356;
           font-size: 24px;
           font-weight: 500;
           letter-spacing: 3px;
           line-height: 30px;
           margin: 0;
           padding: 0;
           position: relative;
           text-transform: uppercase
         }
     
         .property-popup__title h4:before {
           background: #233356;
           content: "";
           display: block;
           height: 1px;
           position: absolute;
           right: calc(100% + 8px);
           top: 15px;
           width: 42px
         }
     
         @media(min-width:900px) {
           .property-popup__title h4:before {
             right: calc(100% + 18.5px);
             top: 40px
           }
     
           .property-popup__title h4 {
             font-size: 28px;
             letter-spacing: 3.6px;
             line-height: 42px;
             margin: 0;
             padding: 0
           }
         }
     
         .property-popup__price {
           display: block;
           font-size: 14px;
           font-weight: 600;
           letter-spacing: 3px;
           margin: 20px 0 40px;
           text-transform: uppercase
         }
     
         .property-popup__meta {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-bottom: 30px
         }
     
         .property-popup__meta img {
           margin: 0;
           width: calc(100% - 150px)
         }
     
         .property-popup__close {
           background: none;
           border: none;
           border-bottom: 1px solid #fff;
           bottom: calc(100% + 40px);
           box-shadow: none;
           color: #fff;
           cursor: pointer;
           font-size: 12px;
           letter-spacing: 2px;
           padding: 0;
           position: absolute;
           right: 0;
           text-transform: uppercase
         }
     
         .property-popup__specs {
           list-style: none;
           margin: 0;
           padding: 0;
           width: 75px
         }
     
         .property-popup__specs li {
           align-items: center;
           display: flex;
           flex-wrap: wrap
         }
     
         .property-popup__specs li svg {
           margin: 0 10px 0 0;
           width: 30px
         }
     
         .property-popup__button {
           background: #233356;
           color: #fff;
           display: block;
           padding: 12px 0;
           text-align: center;
           width: 100%
         }
     
         .footer {
           background: #efefef;
           overflow: hidden
         }
     
         .footer__inner {
           margin: 0 auto;
           max-width: 1375px;
           padding: 0 20px
         }
     
         @media(min-width:900px) {
           .footer__inner {
             padding: 0 30px
           }
         }
     
         .footer__top {
           padding: 50px 0 20px
         }
     
         @media(min-width:900px) {
           .footer__top {
             padding: 80px 0
           }
         }
     
         .footer__cols {
           align-items: flex-start;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between
         }
     
         .footer__logo {
           position: relative;
           width: 48%
         }
     
         @media(min-width:900px) {
           .footer__logo {
             width: 100%
           }
         }
     
         .footer__logo svg {
           height: 24px;
           margin-bottom: 5px;
           width: 124px
         }
     
         @media(min-width:900px) {
           .footer__logo svg {
             height: 28px;
             width: 158px
           }
         }
     
         .footer__logo svg path {
           fill: #233356
         }
     
         @media(min-width:900px) {
           .footer__logo svg path {
             fill: #fff
           }
         }
     
         .footer__logo a {
           font-size: 13px;
           font-weight: 600;
           letter-spacing: 1.8px;
           text-decoration: none
         }
     
         .footer__address {
           margin-top: -5px;
           width: 48%
         }
     
         @media(min-width:900px) {
           .footer__address {
             margin-top: 0;
             width: 100%
           }
         }
     
         .footer__col {
           width: 100%
         }
     
         .footer__col:first-child {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           order: 6
         }
     
         @media(min-width:900px) {
           .footer__col:first-child {
             display: block;
             margin-bottom: 20px;
             margin-top: 0;
             order: unset
           }
         }
     
         .footer__col--mobile {
           display: block
         }
     
         .footer__col--mobile ul {
           display: block !important;
           margin-top: 15px !important
         }
     
         .footer__col--mobile ul li {
           font-size: 10px !important;
           font-weight: 300;
           letter-spacing: 1.3px !important;
           line-height: 20px;
           margin: 0;
           text-transform: uppercase
         }
     
         .footer__col--mobile ul li a,
         .footer__col--mobile ul li a:before {
           color: #233356
         }
     
         @media(min-width:900px) {
           .footer__col--mobile {
             display: none
           }
     
           .footer__col {
             width: 88px
           }
     
           .footer__col:first-child {
             position: relative;
             width: 270px
           }
     
           .footer__col:first-child:before {
             background: #13203c;
             content: "";
             display: block;
             height: 100vh;
             position: absolute;
             right: 0;
             top: -80px;
             width: 50vw
           }
     
           .footer__col:first-child p {
             color: #fff;
             font-size: 13px;
             letter-spacing: .4px;
             line-height: 26px;
             margin: 30px 0 0;
             position: relative
           }
     
           .footer__col:first-child p a {
             color: #fff;
             text-decoration: none
           }
     
           .footer__col:first-child p a.phone {
             color: #fff;
             cursor: pointer;
             display: inline-block;
             font-size: 16px;
             font-weight: 700;
             letter-spacing: 2.3px;
             margin-bottom: -2px;
             overflow: hidden;
             padding-bottom: 2px;
             position: relative;
             text-transform: uppercase
           }
     
           .footer__col:first-child p a.phone:before {
             background: #fff;
             bottom: 0;
             content: "";
             height: 1px;
             left: 0;
             position: absolute;
             -webkit-transform: translateX(-101%);
             transform: translateX(-101%);
             transition: -webkit-transform .3s ease-in-out;
             transition: transform .3s ease-in-out;
             transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
             width: 100%;
             z-index: -1
           }
     
           .footer__col:first-child p a.phone:hover:before {
             -webkit-transform: translateX(0);
             transform: translateX(0)
           }
     
           .footer__col:first-child p a.phone:before {
             z-index: 1
           }
     
           .footer__col:nth-child(2) {
             width: 105px
           }
     
           .footer__col:nth-child(3) {
             width: 100px
           }
     
           .footer__col:nth-child(4) {
             width: 165px
           }
     
           .footer__col:nth-child(5) {
             width: 100px
           }
     
           .footer__col:nth-child(6) {
             width: 94px
           }
         }
     
         .footer__col h4 {
           color: #233356;
           font-size: 12px;
           font-weight: 700;
           letter-spacing: 1.8px;
           position: relative;
           text-transform: uppercase
         }
     
         .footer__col h4:after {
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTAgNSI+PHBvbHlnb24gZmlsbD0iIzBCMTUyQyIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjUgMCAxMCA1IDAgNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1KSIvPjwvc3ZnPg==);
           background-size: cover;
           content: "";
           height: 4px;
           position: absolute;
           right: 10px;
           top: 5px;
           transition: all .2s ease;
           width: 8px
         }
     
         @media(min-width:900px) {
           .footer__col h4 {
             font-size: 12px;
             letter-spacing: 1.8px
           }
     
           .footer__col h4:after {
             display: none
           }
         }
     
         .footer__col h4.active:after {
           -webkit-transform: rotate(-180deg);
           transform: rotate(-180deg)
         }
     
         .footer__col ul {
           display: none;
           list-style: none;
           margin: -5px 0 25px;
           padding: 0
         }
     
         @media(min-width:900px) {
           .footer__col ul {
             display: block;
             margin: 0
           }
         }
     
         .footer__col ul li {
           font-size: 13px;
           font-weight: 500;
           letter-spacing: .4px
         }
     
         .footer__col ul li a {
           color: #233356;
           cursor: pointer;
           display: inline-block;
           margin-bottom: -2px;
           overflow: hidden;
           padding-bottom: 2px;
           position: relative;
           text-decoration: none
         }
     
         .footer__col ul li a:before {
           background: #233356;
           bottom: 0;
           content: "";
           height: 1px;
           left: 0;
           position: absolute;
           -webkit-transform: translateX(-101%);
           transform: translateX(-101%);
           transition: -webkit-transform .3s ease-in-out;
           transition: transform .3s ease-in-out;
           transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
           width: 100%;
           z-index: -1
         }
     
         .footer__col ul li a:hover:before {
           -webkit-transform: translateX(0);
           transform: translateX(0)
         }
     
         .footer__col ul li a:before {
           z-index: 1
         }
     
         .footer__col ul li a.active:before {
           -webkit-transform: translateX(0);
           transform: translateX(0);
           width: calc(100% - 2px)
         }
     
         .footer__col ul.active {
           display: block
         }
     
         .footer__bottom {
           padding: 20px 0 40px
         }
     
         @media(min-width:900px) {
           .footer__bottom {
             padding: 30px 0 90px
           }
         }
     
         .footer__bottom .footer__cols {
           flex-direction: column-reverse
         }
     
         @media(min-width:900px) {
           .footer__bottom .footer__cols {
             flex-direction: row
           }
         }
     
         .footer__bottom .footer__col {
           width: 100%
         }
     
         .footer__bottom .footer__col:before {
           display: none
         }
     
         @media(min-width:900px) {
           .footer__bottom .footer__col {
             width: 32%
           }
         }
     
         .footer__bottom .footer__col:first-of-type {
           order: 2
         }
     
         @media(min-width:900px) {
           .footer__bottom .footer__col:first-of-type {
             order: 1
           }
         }
     
         .footer__bottom .footer__col:first-of-type ul {
           display: none;
           position: relative
         }
     
         @media(min-width:900px) {
           .footer__bottom .footer__col:first-of-type ul {
             display: block
           }
     
           .footer__bottom .footer__col:first-of-type ul li a {
             color: #fff
           }
     
           .footer__bottom .footer__col:first-of-type ul li a:before {
             background: #fff;
             color: #fff
           }
     
           .footer__bottom .footer__col:first-of-type {
             margin-bottom: 0
           }
         }
     
         .footer__bottom .footer__col:last-of-type {
           order: 1
         }
     
         @media(min-width:900px) {
           .footer__bottom .footer__col:last-of-type {
             order: 2
           }
         }
     
         .footer__bottom .footer__col:last-of-type p {
           text-align: left
         }
     
         @media(min-width:900px) {
           .footer__bottom .footer__col:last-of-type p {
             text-align: right
           }
         }
     
         .footer__bottom .footer__col ul li {
           font-size: 10px;
           letter-spacing: 1.3px;
           line-height: 20px;
           margin: 0;
           text-transform: uppercase
         }
     
         .footer__bottom .footer__col ul li a,
         .footer__bottom .footer__col ul li a:before {
           color: #fff
         }
     
         .footer__bottom .footer__col p {
           font-size: 11px;
           letter-spacing: .4px;
           line-height: 25px
         }
     
         @media(min-width:900px) {
           .footer__bottom .footer__col p {
             margin-bottom: 0
           }
         }
     
         .agent-template .footer {
           display: none
         }
       
      `}</style>


    </div>
  )
}
