'use client';
import React, { useEffect, useState, CSSProperties } from "react";
import { useSwipeable } from 'react-swipeable';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import "./styles.css";

interface ICarouselItem {
	children: React.ReactNode | React.ReactNode[]
	description: string
	width?:  CSSProperties['width']
}

export const CarouselItem = ({ children, width, description }: ICarouselItem) => {
	return (
		<>
			<div className="carousel-item" style={{ width: width }}>
				{children}
				<div className='carousel__text_description'>
					<h1>{description}</h1>
				</div>
			</div>
		</>
	);
};

interface ICarousel {
	children: React.ReactNode | React.ReactNode[]
	header?: React.ReactNode
}

const Carousel = ({ children, header }: ICarousel) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const updateIndex = (newIndex: number) => {
		if (newIndex < 0) newIndex = React.Children.count(children) - 1;
		else if (newIndex >= React.Children.count(children)) newIndex = 0;

		setActiveIndex(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!paused) updateIndex(activeIndex + 1);
		}, 7000);

		return () => {
			if (interval) clearInterval(interval);
		};
	});

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1)
	});

	return (
		<div
			{...handlers}
			className="carousel"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div
				className="inner"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{
					React.Children.map(children, (child) => React.cloneElement(child as  React.DetailedReactHTMLElement<any, HTMLElement>, { width: "100%" }))
				}
			</div>
			{
				header && <div className='container__header'>
					{header}
        </div>
			}
			<div className="indicators">
				<div className='indicators__arrows'>
					<div className='container__arrow' onClick={() => updateIndex(activeIndex - 1)}>
						<FaAngleLeft />
					</div>
					<div className='container__arrow' onClick={() => updateIndex(activeIndex + 1)}>
						<FaAngleRight />
					</div>
				</div>
				<div className='indicators__dots'>
					{React.Children.map(children, (child, index) => {
						return (
							<div
								className={`indicator__dot ${index === activeIndex ? "active" : ""}`}
								onClick={() => updateIndex(index)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
