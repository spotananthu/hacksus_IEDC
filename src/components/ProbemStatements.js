import React, {useState} from 'react';
import config from '../config/index.json';

export default function ProblemStatements() {
	const {problems} = config;
	const [ansDropdownStates, setAnsDropdownStates] = useState(
		problems.items.reduce((acc, _, index) => {
			acc[index] = false;
			return acc;
		}, {}),
	);
	const handleClick = id => {
		setAnsDropdownStates(prevStates => ({
			...prevStates,
			[id]: !prevStates[id],
		}));
	};

	return (
		<div id="problems" className="flex flex-col items-center">
			<div className="flex flex-row ">
				<div className="md:text-6xl text-4xl text-white text-center">
					Problem <span className="text-primary">Statements</span>
				</div>
			</div>

			<div className="flex w-1/6 mt-1 mb-10 overflow-hidden rounded">
				<div className="flex-1 h-2 bg-tertiary"></div>
				<div className="flex-1 h-2 bg-primary"></div>
				<div className="flex-1 h-2 bg-secondary"></div>
			</div>

			<div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-1 md:h-full mt-10 md:px-16 px-2">
				{problems.items.map((item, index) => (
					<div
						key={index}
						class={` bg-white hover:bg-primary hover:shadow-xl m-2 p-4 group ${
							index === 6 && 'col-start-2 col-end-3'
						}`}
					>
						<div class="bg-primary top-0 left-0 md:w-24 w-12 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
						<div class="py-2 md:px-9">
							<div class="mt-8 md:text-2xl text-sm  font-semibold text-black border-b-2 border-b-secondary">
								{item.title}
							</div>
							<p class="text-background hover:text-white mt-4 md:text-base text-xs">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

