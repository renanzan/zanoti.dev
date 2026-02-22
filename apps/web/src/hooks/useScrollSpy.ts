"use client";

import { useEffect, useState } from "react";

type useScrollSpyHandler = () => {
	currentSection?: string;
	currentVisibles: Record<string, boolean>;
};

export const useScrollSpy: useScrollSpyHandler = () => {
	const [currentSection, setCurrentSection] = useState<string | undefined>();
	const [currentVisibles, setCurrentVisibles] = useState<
		Record<string, boolean>
	>({});

	useEffect(() => {
		const itemElements = document.querySelectorAll<HTMLElement>("[data-ss]");
		if (!itemElements.length) return () => {};

		const observerCallback: IntersectionObserverCallback = (entries) => {
			const entry = entries[0];
			if (!entry) return;
			
			const { target, isIntersecting } = entry;
			const slug = target.getAttribute("data-ss") as string;

			setCurrentVisibles((prev) => ({
				...prev,
				[slug]: isIntersecting
			}));

			if (isIntersecting) {
				setCurrentSection(slug);
			}
		};

		const observers: Array<IntersectionObserver> = [];

		itemElements.forEach((item) => {
			const threshold: number = Number(item.dataset.ssMt) || 0;

			const observer = new IntersectionObserver(observerCallback, {
				rootMargin: `-${threshold}px 0px 0px 0px`
			});

			observers.push(observer);
			observer.observe(item);
		});

		return () => {
			observers.forEach((observer) => observer.disconnect);
		};
	}, []);

	return {
		currentSection,
		currentVisibles
	};
};
