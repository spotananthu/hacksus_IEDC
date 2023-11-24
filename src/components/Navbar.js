import React, {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/outline';
import {Link} from 'react-scroll';
import Image from 'next/image';

import config from '../config/index.json';

const Menu = () => {
	const {navigation, hackathon, callToAction} = config;
	const {name: hackathonName, logo} = hackathon;

	return (
		<>
			<Popover>
				<div className="pt-6 px-4 sm:px-6 lg:px-8 md:w-full w-screen text-lg">
					<nav
						className="flex items-center justify-between sm:h-10 lg:justify-start "
						aria-label="Global"
					>
						<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
							<div className="flex items-center justify-between w-full md:w-auto">
								<a href="#">
									<span className="sr-only">{hackathonName}</span>
									<Image
										alt="logo"
										className="h-16 w-auto sm:h-16 md:pl-0 pl-4"
										src={logo}
										width={500}
										height={500}
									/>
								</a>
								<div className="-mr-2 flex items-center md:hidden">
									<Popover.Button
										className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
									>
										<span className="sr-only">Open main menu</span>
										{/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6 text-primary"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
												aria-hidden="true"
											/>
										</svg>
									</Popover.Button>
								</div>
							</div>
						</div>

						<div className="whitespace-nowrap  hidden md:block md:ml-10 md:pr-4 md:space-x-10">
							{navigation.map((item, index) => (
								<Link
									spy={true}
									active="active"
									smooth={true}
									duration={1000}
									key={item.name}
									to={item.href}
									className={`font-medium ${
										index === navigation.length - 1
											? 'text-secondary'
											: 'text-[#cfe9e9]'
									} hover:text-white`}
								>
									{item.name}
								</Link>
							))}
						</div>
					</nav>
				</div>

				<Transition
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel focus className="md:hidden">
						<div
							className={`rounded-lg shadow-md bg-secondary ring-1 ring-black ring-opacity-5 overflow-hidden`}
						>
							<div className="px-5 pt-4 flex items-center justify-between">
								<div>
									<Image
										className="h-8 pl-2 w-auto"
										src={logo}
										alt=""
										width={500}
										height={500}
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button
										className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-tertiary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black`}
									>
										<span className="sr-only">Close main menu</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.slice(0, -1).map(item => (
									<Link
										spy={true}
										active="active"
										smooth={true}
										duration={1000}
										key={item.name}
										to={item.href}
										className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-border hover:bg-gray-50"
									>
										{item.name}
									</Link>
								))}
							</div>
							<a
								href={callToAction.href}
								className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:text-black hover:bg-border`}
							>
								{callToAction.text}
							</a>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</>
	);
};

export default Menu;
