import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
	return (
		<div className="bg-space-mb sm:bg-space-tb lg:bg-space-dt object-contain h-screen bg-cover w-full">
			<Head>
				<title>Space Tour | Home</title>
			</Head>
			<Navigation page="Home" />
			<main className="text-white flex flex-col justify-center items-center text-center">
				<div className="block">
					<h5 className="font-thin uppercase text-2xl tracking-bigger">
						So, you want to travel to
					</h5>
					<h1 className="uppercase text-9xl">Space</h1>
					<p className="text-3xl mx-16 mt-10">
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<div></div>
			</main>
		</div>
	);
};

export default Home;
