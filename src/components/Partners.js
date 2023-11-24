import React from 'react';
import Image from 'next/image';

export default function Partners() {
	const imageNames = [
		'aws.png',
		'celo.png',
		'devfolio.png',
		'filecoin.png',
		'polygon.png',
		'tezos.png',
		'Unixperts.png',
	];

	return (
		<div className="flex flex-col justify-evenly items-center h-full md:h-[70vh]">
			<div className="flex flex-col justify-center items-center">
				<div className="md:text-6xl text-4xl text-white ">
					{' '}
					Our <span className="text-primary">Partners</span>
				</div>
				<div className="flex w-1/3 items-center mt-1 overflow-hidden rounded">
					<div className="flex-1 h-2 bg-tertiary"></div>
					<div className="flex-1 h-2 bg-primary"></div>
					<div className="flex-1 h-2 bg-secondary"></div>
				</div>
			</div>

			{/* <div id="sponsors" className="grid grid-cols-1 md:grid-cols-7 gap-4 w-[60%] md:w-11/12 h-1/2 bg-[#F9F9F9] p-4 md:mt-0 mt-10">
				{imageNames.map((imageName, index) => (
					<div key={index} className="group overflow-hidden relative flex items-center justify-center">
						<Image
							src={`/partners/${imageName}`}
							alt={`Partner ${index + 1}`}
							className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
							width={500}
							height={500}
						/>
					</div>
				))}
			</div> */}
		</div>
	);
}
