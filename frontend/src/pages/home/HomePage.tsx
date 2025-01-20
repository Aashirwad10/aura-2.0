import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect, useState } from "react";
import FeaturedSection from "./components/FeaturedSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "@/stores/usePlayerStore";

const HomePage = () => {
	const {
		fetchFeaturedSongs,
		fetchMadeForYouSongs,
		fetchTrendingSongs,
		fetchRandomSongs,
		isLoading,
		madeForYouSongs,
		featuredSongs,
		trendingSongs,
		randomSongs,
	} = useMusicStore();

	const { initializeQueue } = usePlayerStore();

	// State for greeting
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {
		const currentHour = new Date().getHours();

		if (currentHour < 12) {
			setGreeting("Good morning");
		} else if (currentHour < 18) {
			setGreeting("Good afternoon");
		} else {
			setGreeting("Good evening");
		}

		fetchFeaturedSongs();
		fetchMadeForYouSongs();
		fetchTrendingSongs();
		fetchRandomSongs();
	}, [fetchFeaturedSongs, fetchTrendingSongs, fetchRandomSongs]);

	useEffect(() => {
		if (madeForYouSongs.length > 0 && featuredSongs.length > 0 && trendingSongs.length > 0) {
			const allSongs = [...featuredSongs, ...madeForYouSongs, ...trendingSongs];
			initializeQueue(allSongs);
		}
	}, [initializeQueue, madeForYouSongs, trendingSongs, featuredSongs]);

	return (
		<main className='rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900'>
			<Topbar />
			<ScrollArea className='h-[calc(100vh-180px)]'>
				<div className='p-4 sm:p-6'>
					<h1 className='text-2xl sm:text-3xl font-bold mb-6'>{greeting}</h1>  {/* dynamic greeting */}
					<FeaturedSection />

					<div className='space-y-8'>
						<SectionGrid title="Random Recommendations" songs={randomSongs} isLoading={isLoading} />
						<SectionGrid title='Trending' songs={trendingSongs} isLoading={isLoading} />
					</div>
				</div>
			</ScrollArea>
		</main>
	);
};
export default HomePage;
