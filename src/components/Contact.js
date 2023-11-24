import React from 'react';
import config from '../config/index.json';

export default function Contact() {
	const {contact} = config;
	const {email} = config;
	return (
		<div
			id="contact"
			className="text-black flex md:flex-row flex-col w-full justify-evenly w-full h-[30vh] md:mt-0 mt-12"
		>
			<div className="flex flex-col basis-1/2 justify-center items-center">
				<div className="md:text-6xl text-3xl text-center text-white  md:-mt-0 -mt-20">
					{' '}
					Contact <span className="text-primary">Us</span>
				</div>
				<div className="flex w-1/6 items-center mt-1 overflow-hidden rounded">
					<div className="flex-1 h-2 bg-tertiary"></div>
					<div className="flex-1 h-2 bg-primary"></div>
					<div className="flex-1 h-2 bg-secondary"></div>
				</div>
			</div>
			{/* <div className="flex flex-col basis-1/2 justify-around p-0 pr-4 md:ml-0 ml-4">
				<div className="md:text-3xl text-lg">
					Send us your queries -
					<a
						href={`mailto:${email}`}
						className="text-black border-b-2 border-secondary font-bold px-1 hover:text-primary"
					>
						{email}
					</a>
				</div>
				<div className="flex flex-col text-black justify-around ">
					<div className="md:text-3xl text-2xl md:mt-0 mt-4 font-['Caveat'] border-b-2 border-secondary w-fit">
						Event Coordinators:{' '}
					</div>
					<div className="flex justify-evenly">
						<ul className="md:text-2xl text-xl">
							{contact.people.map((person, index) => (
								<li key={index}>
									{person.name}{' '}
									<span className="md:pl-40 ml-0">
										<a
											href={`${person.link}`}
											target="_blank"
											rel="noopener noreferrer"
											title="Talk with a HackS'US Event Coordinator on Whatsapp"
										>
											{person.number}
										</a>
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div> */}
		</div>
	);
}
