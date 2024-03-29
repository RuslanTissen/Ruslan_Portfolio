import React, { useState, useContext, useEffect, useRef } from 'react';
import "./Header.scss";
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { Context } from '../Context.js';
import trans from '../Translate.js';

function Header() {
	const [show, setShow] = useState(false);
	const [active, setActive] = useState(true);
	const { lang, setLang } = useContext(Context);

	function toggleMenu() {
		setShow(!show);
		setActive(!active);
	}

	const menuRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event) {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setShow(false);
				setActive(true);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuRef]);

	return (
		<div className='header' id='header'>
			<ul className="header__smart-cont" ref={menuRef}>
				<a className='logo' href='#'>	TISSEN</a>
				<li className='header__smart-cont--hamburger-box' onClick={toggleMenu}>
					{active ? <RxHamburgerMenu /> : <RxCross1 />}
				</li>
				{show && <ul className="header__smart-cont--humb-cont" onClick={toggleMenu}>
					<li className='humb-link'><a href='#'>{trans[lang].home}</a> </li>
					<li className='humb-link'><a href='#intro'>{trans[lang].about}</a> </li>
					<li className="humb-link" ><a href="#works">{trans[lang].projects}</a>	</li>
					<li className="humb-link" ><a href="#adverts">{trans[lang].promotion}</a>	</li>
					<li className='humb-link'><a href='#contact'>{trans[lang].contact}</a> </li>
					<li className='humb-link humb-link--lang'>
						<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}>EN</button>
						<button className="button-esp" value="gr" onClick={(e) => setLang(e.target.value)}>ES</button>
					</li>
				</ul>}
			</ul>

			<div className='header__pc'>
				<div className="header__pc-cont">
					<a className='logo-pc' href='#'>TISSEN</a>

					<ul className="nav">
						<li className='li-self li1'><a href='#'>{trans[lang].home}</a></li>
						<li className='li-self li2'><a href='#intro'>{trans[lang].about}</a> </li>
						<li className="li-self li3" ><a href="#works">{trans[lang].projects}</a>	</li>
						<li className="li-self li3" ><a href="#adverts">{trans[lang].promotion}</a>	</li>
						<li className='li-self li4'><a href='#contact'>{trans[lang].contact}</a> </li>
						<li className="dropdown" >
							<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}>EN</button>
							<span>/</span>
							<button className="button-esp" value="gr" onClick={(e) => setLang(e.target.value)}>GR</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
