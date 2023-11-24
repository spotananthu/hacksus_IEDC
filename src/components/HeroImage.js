import React from 'react';
import config from '../config/index.json';
import Image from 'next/image';

export default function Hero() {
    const { mainHero } = config;
	return (
		<div className="flex flex-col justify-center md:basis-1/5 basis-[40%] md:mb-10 mb-40 max-[362px]:-ml-8 w-full md:mr-10 mr-2 md:pr-0 pr-2">
			<Image
				className="md:w-full object-fill md:h-full max-[400px]:h-[10rem] h-[16rem]"
				src={mainHero.img}
				alt="image"
				width={500}
				height={500}
			></Image>
		</div>
	);
}
