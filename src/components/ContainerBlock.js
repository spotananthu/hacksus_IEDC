import React, {useEffect, useRef, useState} from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Hero from './Hero';
import HeroImage from './HeroImage';
import ProblemStatements from './ProbemStatements';
import Tracks from './Tracks';
import Timeline from './Timeline';
import Contact from './Contact';
import Partners from './Partners';
import Footer from './Footer';
import Loader from './Loader';

export default function ContainerBlock({children, ...customMeta}) {
	const meta = {
		title: 'HacksUS 3.0',
		description: `HacksUS 3.0, hackathon, idk`,
		image: '', //image for indexing
		type: 'website',
		...customMeta,
	};
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadingTimer = setTimeout(() => {
			setLoading(false);
		}, 1700);

		return () => clearTimeout(loadingTimer);
	}, []);
	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta
					property="og:url"
					content={``} //website link
				/>
				<link rel="canonical" href={``} />
				{/* website link */}
				{/* Favicon for 32x32 size */}
				<link
					rel="icon"
					type="image/x-icon"
					sizes="32x32"
					href="/favicon-32x32.ico"
				/>

				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="HacksUs 3.0" />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
			</Head>
			{loading ? (
				<div className="flex bg-black md:h-screen w-1/2 h-1/2 md:mt-0 mt-40 justify-center md:pt-14 md:pl-0 pl-6 max-w-screen-sm mx-auto md:pt-20">
					<Loader />
				</div>
			) : (
				<main className="font-Rubik flex items-center bg-background flex-col">
					<Navbar />
					<div className="flex flex-row justify-around w-full items-center h-screen">
						<Hero />
						<HeroImage />
					</div>
					<ProblemStatements />
					<div className="h-px w-full mt-5 bg-secondary md:mt-10 md:mb-0 mb-10"></div>
					{/* <Tracks /> */}
					{/* <div className="h-px w-full mt-5 bg-secondary"></div> */}
					<Timeline />
					<div className="h-px w-full mt-5 bg-secondary"></div>
					<Partners />
					<div className="h-px w-full mt-5 bg-secondary"></div>
					<Contact />
					<div className="h-px w-full mt-5 bg-secondary"></div>
					<Footer />
				</main>
			)}
		</div>
	);
}
