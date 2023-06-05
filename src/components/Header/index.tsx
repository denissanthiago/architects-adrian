'use client';
import React from "react";
import { FaBars } from "react-icons/fa";
import Link from 'next/link';
import './styles.css'
export default function Header () {
	let [ openMenuMobile, setOpenMenuMobile] = React.useState<boolean>(false)
	return <header>
		<nav>
			<div className="logo">
				<h1>Logo</h1>
			</div>
			<ul className="menu">
				<li><Link href="/">Inicio</Link></li>
				<li><Link href="/acerca">Acerca</Link></li>
				<li><Link href="/proyectos">Proyectos</Link></li>
				<li><Link href="/contacto">Contacto</Link></li>
			</ul>
			<div className="mobile-menu" onClick={() => setOpenMenuMobile(prevState => !prevState)}>
				<FaBars/>
			</div>
		</nav>
		<div className="mobile-menu-options" style={{ display: openMenuMobile ? 'flex' : 'none' }}>
			<ul>
				<li><Link href="/">Inicio</Link></li>
				<li><Link href="/acerca">Acerca</Link></li>
				<li><Link href="/proyectos">Proyectos</Link></li>
				<li><Link href="/contacto">Contacto</Link></li>
			</ul>
		</div>
	</header>
}