import React, { useState, useContext, useEffect, useRef } from 'react';
import "./Header.scss";
// import { IoDiamondSharp } from "react-icons/io5";
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { Context } from '../Context.js';
import { NavLink } from 'react-router-dom';
import { BsGlobe } from "react-icons/bs";

function Header() {
	const [show, setShow] = useState(false);
	const [active, setActive] = useState(true);
	const { lang, setLang } = useContext(Context);
	const [showLanguages, setShowLanguages] = useState(false);
	const [showWorks, setShowWorks] = useState(false);

	function toggleMenu() {
		setShow(!show);
		setActive(!active);
	}

	function scrollToTheTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function toggleLanguages() {
		setShowLanguages(!showLanguages);
	}

	function toggleWorks() {
		setShowWorks(!showWorks);
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

	const languageRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event) {
			if (languageRef.current && !languageRef.current.contains(event.target)) {
				setShowLanguages(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [languageRef]);

	const workRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event) {
			if (workRef.current && !workRef.current.contains(event.target)) {
				setShowWorks(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [workRef]);

	return (
		<div className='header' id='header'>
			<ul className="header__smart-cont" ref={menuRef}>
				<li className='header__smart-cont--logo-box'>
					<NavLink to="*" onClick={scrollToTheTop}>	TISSEN</NavLink>
				</li>
				<li className='header__smart-cont--hamburger-box' onClick={toggleMenu}>
					{active ? <RxHamburgerMenu /> : <RxCross1 />}
				</li>
				{show && <ul className="header__smart-cont--humb-cont" onClick={toggleMenu}>
					<li className='humb-link'><NavLink to='*' onClick={scrollToTheTop}>Home</NavLink> </li>
					<li className='humb-link'><NavLink to="*" onClick={scrollToTheTop}>About</NavLink> </li>
					<li className='humb-link'><NavLink to="*" onClick={scrollToTheTop}>My works</NavLink> </li>
					<li className='humb-link'><NavLink to="*" onClick={scrollToTheTop}>Contact</NavLink> </li>
					<li className='humb-link humb-link--lang'>
						<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ES</button>
						<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}>EN</button>
					</li>
				</ul>}
			</ul>

			<div className='header__pc-cont'>
				<div className="header__pc-cont--ul-cont">
					<ul className='ul-self'>
						<li className='li-self li1'>
							<NavLink to="*" onClick={scrollToTheTop}>
								{/* <span>R</span> */}
								TISSEN</NavLink>
						</li>
					</ul>

					<ul className="second-ul">
						<li className='li-self li1'><NavLink to='*' onClick={scrollToTheTop}>Home</NavLink></li>
						<li className='li-self li2'><NavLink to="*" onClick={scrollToTheTop}>About</NavLink> </li>
						<li className="dropdown" ref={workRef} data-dropdown onClick={toggleWorks}>
							<button className='drpdw-works--button' data-dropdown-button>My works</button>
							{showWorks && <div className='drpdwn-works'>
								<NavLink className="prt-work1" to="*">Project-1</NavLink>
								<NavLink className="prt-work2" to="*">Project-2</NavLink>
								<NavLink className="prt-work3" to="*">Project-3</NavLink>
								<NavLink className="prt-work4" to="*">Project-4</NavLink>
							</div>}
						</li>
						<li className='li-self li4'><a to="*" onClick={scrollToTheTop}>Contact</a> </li>
						<li className="dropdown" ref={languageRef} data-dropdown onClick={toggleLanguages}>
							<button className='link' data-dropdown-button><BsGlobe /></button>
							{showLanguages && <div className='drpdwn-lang'>
								<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ES</button>
								<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}>EN</button>
							</div>}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
