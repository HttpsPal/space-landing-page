import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/shared/logo.svg";
import Hamburger from "../../public/shared/icon-hamburger.svg";
import Toggle from "../../public/shared/icon-close.svg";

import Styles from "../styles/Sudo.module.css";

interface NavProps {
	page: string;
}

const Navigation = ({ page }: NavProps): JSX.Element => {
	const [active, setActive] = useState<boolean>(false);

	const navMenuClass = `fixed lg:static lg:order-2 top-0 right-0 m-0 p-0 tracking-biggest h-screen md:h-24 lg:mt-10 lg:h-22 flex flex-col md:flex-row md:items-center bg-white bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-xl transition-all duration-150 ease-in transform-gpu md:transform-none`;
	const navItemsClass = `relative text-white text-md md:text-lg py-3 pl-6 pr-10 md:py-8 md:px-7 lg:px-8 lg:mr-5 font-thin uppercase block md:inline-block`;
	const navSpanClass = `font-bold mr-3 md:hidden lg:inline`;

	return (
		<nav
			className={`flex justify-between items-center lg:pt-5 h-24 lg:h-22 relative ${Styles.line}`}
		>
			<div className="ml-6 lg:mt-10 lg:mr-10">
				<Link href="/">
					<a>
						<Image src={Logo} alt="Logo" layout="fixed" />
					</a>
				</Link>
			</div>
			<div
				className="mr-6 md:hidden z-10 cursor-pointer"
				onClick={(): void => setActive(!active)}
			>
				{!active ? (
					<Image src={Hamburger} alt="Open navigation toggle icon" />
				) : (
					<Image src={Toggle} alt="Close navigation toggle icon" />
				)}
			</div>
			<ul
				className={
					!active
						? `${navMenuClass} translate-x-full`
						: `${navMenuClass} -translate-x-0`
				}
			>
				<li className="mt-24 md:m-0 lg:ml-20 md:ml-10">
					<Link href="/">
						<a
							className={
								page === "Home"
									? `${navItemsClass} ${Styles.underline}`
									: `${navItemsClass} ${Styles.underlineActive}`
							}
						>
							<span className={navSpanClass}>00</span>Home
						</a>
					</Link>
				</li>
				<li>
					<Link href="/destination">
						<a
							className={
								page === "Destination"
									? `${navItemsClass} ${Styles.underline}`
									: `${navItemsClass} ${Styles.underlineActive}`
							}
						>
							<span className={navSpanClass}>01</span>Destination
						</a>
					</Link>
				</li>
				<li>
					<Link href="/crew">
						<a
							className={
								page === "Crew"
									? `${navItemsClass} ${Styles.underline}`
									: `${navItemsClass} ${Styles.underlineActive}`
							}
						>
							<span className={navSpanClass}>02</span>Crew
						</a>
					</Link>
				</li>
				<li className="lg:mr-10 md:mr-10">
					<Link href="/technology">
						<a
							className={
								page === "Technology"
									? `${navItemsClass} ${Styles.underline}`
									: `${navItemsClass} ${Styles.underlineActive}`
							}
						>
							<span className={navSpanClass}>03</span>Technology
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
