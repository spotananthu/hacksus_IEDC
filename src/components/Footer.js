import React from 'react';
import Image from 'next/image';

export default function Footer() {
	const imageNames = [
		'GDG.png',
		'iedc-logo.png',
		'iedc white logo.png',
		'ipl2022.png',
		'KSUM_White.png',
		'MakerGram.png',
		'STEAG.png',
		'TinkerHub Foundation (White).png',
		'rset white logo.png',
	];
	return (
		<div className="flex flex-col justify-evenly items-center md:h-[50vh] h-[100vh] font">
			<div className="flex flex-col justify-center items-center">
				<div className="md:text-6xl text-4xl text-center text-white  md:-mt-0 -mt-20">
					{' '}
					Our <span className="text-primary">Collaborators</span>
				</div>
				<div className="flex w-1/3 items-center mt-1 overflow-hidden rounded">
					<div className="flex-1 h-2 bg-tertiary"></div>
					<div className="flex-1 h-2 bg-primary"></div>
					<div className="flex-1 h-2 bg-secondary"></div>
				</div>
			</div>

			{/* <div className="grid md:grid-cols-9 grid-cols-2 gap-4 md:w-11/12 w-2/3 p-4 bg-tertiary">
				{imageNames.map((imageName, index) => (
					<div key={index} className="group overflow-hidden relative flex items-center justify-center">
						<Image
							src={`/images/${imageName}`}
							alt={`Image ${index + 1}`}
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
