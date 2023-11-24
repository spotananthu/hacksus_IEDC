import React from 'react';
import config from '../config/index.json';

export default function Timeline() {
	const {timeline} = config;

	return (
		<section id="timeline" className="flex h-full flex-col w-full items-center  text-black">
			<div className="flex flex-col justify-center px-4 py-4 mx-auto lg:py-8 md:px-6">
				<div className="max-w-xl mx-auto">
					<div className="text-center ">
						<div className="relative flex flex-col items-center">
							<h1 className="md:text-6xl text-4xl  text-white">
								{' '}
								TIMELINE
							</h1>
							<div className="flex w-1/3 mt-1 mb-10 overflow-hidden rounded">
								<div className="flex-1 h-2 bg-tertiary"></div>
								<div className="flex-1 h-2 bg-primary"></div>
								<div className="flex-1 h-2 bg-secondary"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full lg:max-w-full">
					{timeline.map((item, index) => (
						<div key={index} className="flex justify-center">
							<div className={index % 2 === 0 ? 'invisible' : 'visible'}>
								<div className="flex flex-row-reverse">
									<h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium bg-primary text-black rounded-3xl">
										{item.time}
									</h2>
								</div>
								<div className="relative flex-1 border-b-4 border-blue-200 shadow text-black border-gray-700 rounded-3xl bg-white">
									<div className="relative z-20 p-6">
										<p className="text-right font-['Caveat'] text-xl">
											{item.subheading}
										</p>
										<p className="mb-2 md:text-xl text-lg font-bold text-black text-right">
											{item.heading}
										</p>
										<p className="md:text-base text-sm">{item.text}</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center w-10 md:w-24">
								<div>
									<div className="flex items-center container mx-auto justify-center w-5 h-5 rounded-full text-black bg-white">
										<div className="w-3 h-3 bg-primary rounded-full"></div>
									</div>
								</div>
								<div className="w-[1px] h-full bg-white"></div>
							</div>
							<div className={index % 2 === 1 ? 'invisible' : 'visible'}>
								<div>
									<h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium bg-primary text-black rounded-3xl">
										{item.time}
									</h2>
								</div>
								<div className="relative flex-1 border-b-4 border-blue-200 shadow text-black border-gray-700 rounded-3xl bg-white">
									<div className="relative z-20 p-6">
										<p className="font-['Caveat'] text-xl">{item.subheading}</p>
										<p className="mb-2 text-xl font-bold text-black">
											{item.heading}
										</p>
										<p className="md:text-base text-sm">{item.text}</p>
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="flex items-center container mx-auto justify-center w-5 h-5 rounded-full text-black bg-white">
						<div className="w-3 h-3 bg-primary rounded-full"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
