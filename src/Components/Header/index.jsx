import { Link } from 'react-router-dom'

import './headerStyle.css';

function Header() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="web-logo-link">
          <div className="web-logo">
              <svg className="logo-codebra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99 99">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_118" data-name="Rectangle 118" width="99" height="99" transform="translate(0)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                  </clipPath>
                </defs>
                <g id="Mask_Group_21" data-name="Mask Group 21" clipPath="url(#clip-path)">
                  <g id="snake-svgrepo-com" transform="translate(0 0.318)">
                    <path id="Path_293" data-name="Path 293" d="M49.4,0A49.4,49.4,0,1,1,0,49.4,49.4,49.4,0,0,1,49.4,0Z" transform="translate(0.318 0)" fill="#f15249"/>
                    <path id="Path_294" data-name="Path 294" d="M182.643,112.759a49.416,49.416,0,0,1-69.885,69.885" transform="translate(-97.988 -98.305)" fill="#c93131"/>
                    <rect id="Rectangle_117" data-name="Rectangle 117" width="22.236" height="46.06" transform="translate(38.595 44.631)" fill="#ffc114"/>
                    <path id="Path_295" data-name="Path 295" d="M294.628,343.126h22.236v46.06" transform="translate(-256.033 -298.495)" fill="#eaac0f"/>
                    <path id="Path_296" data-name="Path 296" d="M21.442,167.32,6.035,182.567,0,206.391l40.184,24.46V195.909L21.6,167.32" transform="translate(0 -145.719)" fill="#158442"/>
                    <path id="Path_297" data-name="Path 297" d="M130.125,167.32l18.583,28.589v34.942L124.883,216.4" transform="translate(-108.524 -145.719)" fill="#0b7536"/>
                    <path id="Path_298" data-name="Path 298" d="M470.989,167.32,486.4,182.567l6.035,23.824-40.184,24.46V195.909l18.583-28.589" transform="translate(-393.005 -145.719)" fill="#158442"/>
                    <path id="Path_299" data-name="Path 299" d="M470.831,167.32l-18.583,28.589v34.942L476.072,216.4" transform="translate(-393.005 -145.719)" fill="#0b7536"/>
                    <path id="Path_300" data-name="Path 300" d="M352.656,411.024l-4.765,1.112-4.765-1.112V430.4l4.765-4.765,4.765,4.765Z" transform="translate(-298.178 -357.499)" fill="#e28faf"/>
                    <path id="Path_301" data-name="Path 301" d="M347.891,425.636l4.765,4.765V411.024l-4.765,1.112-4.765-1.112" transform="translate(-298.178 -357.499)" fill="#c97396"/>
                    <path id="Path_302" data-name="Path 302" d="M164.895,76.707l28.113-13.659L221.12,76.707l-4.447,24.142-23.665,12.865-23.665-12.865Z" transform="translate(-143.294 -55.106)" fill="#51d687"/>
                    <path id="Path_303" data-name="Path 303" d="M164.895,167.32l28.113,5.241,28.113-5.241-4.447,24.142-23.665,12.865-23.665-12.865Z" transform="translate(-143.294 -145.719)" fill="#3cc676"/>
                    <path id="Path_304" data-name="Path 304" d="M379.5,63.048l28.113,13.659-4.447,24.142L379.5,113.714" transform="translate(-329.787 -55.106)" fill="#2caf61"/>
                    <path id="Path_305" data-name="Path 305" d="M241.946,231.294,234,228.752v-4.447l7.941,2.382Z" transform="translate(-203.351 -195.24)" fill="#5e6664"/>
                    <path id="Path_306" data-name="Path 306" d="M241.946,242.492V247.1L234,244.557" transform="translate(-203.351 -211.044)" fill="#2f423f"/>
                    <path id="Path_307" data-name="Path 307" d="M464.372,231.294l7.941-2.541v-4.447l-7.941,2.382Z" transform="translate(-403.541 -195.24)" fill="#5e6664"/>
                    <path id="Path_308" data-name="Path 308" d="M464.372,231.294l7.941-2.541v-4.447" transform="translate(-403.541 -195.24)" fill="#2f423f"/>
                  </g>
                </g>
              </svg>
            <h2 className="cobra-name">Codebra</h2>
          </div>
        </Link>
      </nav>
    </>
  )
}

export default Header;