import React from 'react';
import config from '../config/index.json';

export default function Hero() {
	const {mainHero} = config;
	return (
		<div
			id="overview"
			className="flex md:basis-1/3 basis-[60%] flex-col space-y-16 mb-20 md:p-0 md:-mt-0 -mt-20 p-4"
		>
			<div>
				<div className="md:text-7xl text-5xl text-white font-extrabold">
					HackS&apos;US 3.0
				</div>
				<div className="text-3xl md:text-6xl  font-bold text-primary">
					{mainHero.subtitle}
				</div>
			</div>
			<div className="text-[#cfe9e9] md:text-lg md:max-w-full w-5/6 text-sm">
				{mainHero.description}
			</div>
			<div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:max-w-full w-5/6 lg:justify-start">
				<div className="rounded-md shadow hover:border hover:border-white hover:rounded-md">
					<a
						href={mainHero.primaryAction.href}
						className={`w-full rounded-md whitespace-nowrap flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-primary text-secondary hover:text-white text-black md:py-4 md:text-xl md:px-10`}
					>
						{mainHero.primaryAction.text}
					</a>
				</div>
				<div className="mt-3 sm:mt-0 sm:ml-3 hover:border hover:border-white hover:rounded-md">
					<a
						href={mainHero.secondaryAction.href}
						className={`w-full flex rounded-md whitespace-nowrap items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-white bg-background hover:bg-secondary md:py-4 md:text-xl md:px-10`}
					>
						{mainHero.secondaryAction.text}
					</a>
				</div>
			</div>
		</div>
	);
}
