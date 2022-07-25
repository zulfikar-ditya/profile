import React from "react";
import { Navbar } from "flowbite-react";

export default function MyNavbar() {
	return (
		<Navbar fluid={false} rounded={true} className="fixed">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Navbar.Brand href="https://flowbite.com/">
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Zulfikar Ditya
					</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link href="/navbars" active={true}>
						Home
					</Navbar.Link>
					<Navbar.Link href="/navbars">About</Navbar.Link>
					<Navbar.Link href="/navbars">Services</Navbar.Link>
					<Navbar.Link href="/navbars">Pricing</Navbar.Link>
					<Navbar.Link href="/navbars">Contact</Navbar.Link>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}
