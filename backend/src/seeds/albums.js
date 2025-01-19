import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { config } from "dotenv";

config();

const seedDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);

		// Clear existing data
		await Album.deleteMany({});
		await Song.deleteMany({});

		// First, create all songs
		const createdSongs = await Song.insertMany([
			{
				title: "रेलै मा",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/7.png",
				audioUrl: "/songs/7.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 39, // 0:39
			},
			{
				title: "माया पीरती",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/5.png",
				audioUrl: "/songs/5.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 36, // 0:36
			},
			{
				title: "गाईने दाजै",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/15.png",
				audioUrl: "/songs/15.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 36, // 0:36
			},
			{
				title: "सुन कान्छा",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/13.png",
				audioUrl: "/songs/13.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 39, // 0:39
			},
			{
				title: "खानी हो यामु",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/101.png",
				audioUrl: "/songs/101.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "नाम के हो",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/102.png",
				audioUrl: "/songs/102.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 60, // 0:20
			},
			{
				title: "साझा को बेला",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/103.png",
				audioUrl: "/songs/103.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "माया मन भरी",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/104.png",
				audioUrl: "/songs/104.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "सोल्टी ज्यु",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/105.png",
				audioUrl: "/songs/105.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 60, // 0:20
			},
			{
				title: "गुरासै फुल्यो",
				artist: "Trishna Gurung",
				imageUrl: "/cover-images/106.png",
				audioUrl: "/songs/106.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "रीशउने भए",
				artist: "Sushant KC",
				imageUrl: "/cover-images/4.png",
				audioUrl: "/songs/4.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 24, // 0:24
			},
			{
				title: "माया मा",
				artist: "Sushant KC",
				imageUrl: "/cover-images/9.png",
				audioUrl: "/songs/9.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 28, // 0:28
			},
			{
				title: "गुलाबी",
				artist: "Sushant KC",
				imageUrl: "/cover-images/16.png",
				audioUrl: "/songs/16.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 39, // 0:39
			},
			{
				title: "झ्याल बाट",
				artist: "Sushant KC",
				imageUrl: "/cover-images/10.png",
				audioUrl: "/songs/10.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 30, // 0:30
			},
			{
				title: "शिरफूल शिरैमा",
				artist: "Amrit Gurung",
				imageUrl: "/cover-images/1.png",
				audioUrl: "/songs/1.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 46, // 0:46
			},
			{
				title: "लाम्पाते सुरती",
				artist: "Amrit Gurung",
				imageUrl: "/cover-images/2.png",
				audioUrl: "/songs/2.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 39, // 0:39
			},
			{
				title: "सिरानमा फोटो छ",
				artist: "Amrit Gurung",
				imageUrl: "/cover-images/14.png",
				audioUrl: "/songs/14.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 27, // 0:27
			},
			{
				title: "चिठी भित्र",
				artist: "Sajjan Raj Vaidya",
				imageUrl: "/cover-images/3.png",
				audioUrl: "/songs/3.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 24, // 0:24
			},
			{
				title: "हतारीदै बतासीदै",
				artist: "Sajjan Raj Vaidya",
				imageUrl: "/cover-images/17.png",
				audioUrl: "/songs/17.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 39, // 0:39
			},
			{
				title: "मुस्कान",
				artist: "Sajjan Raj Vaidya",
				imageUrl: "/cover-images/12.png",
				audioUrl: "/songs/12.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 17, // 0:17
			},
			{
				title: "चरिले त",
				artist: "Ram Krishna Dhakal",
				imageUrl: "/cover-images/801.png",
				audioUrl: "/songs/801.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "बाँचुन्जेलीलाई",
				artist: "Ram Krishna Dhakal",
				imageUrl: "/cover-images/802.png",
				audioUrl: "/songs/802.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "ओराली लागेको",
				artist: "Ram Krishna Dhakal",
				imageUrl: "/cover-images/803.png",
				audioUrl: "/songs/803.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "पाहाड को छूक छूके रेल",
				artist: "Ram Krishna Dhakal",
				imageUrl: "/cover-images/804.png",
				audioUrl: "/songs/804.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "माया रैछ र",
				artist: "Kali Prasad Baskota",
				imageUrl: "/cover-images/901.avif",
				audioUrl: "/songs/901.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "लप्पन चप्पन",
				artist: "Kali Prasad Baskota",
				imageUrl: "/cover-images/902.avif",
				audioUrl: "/songs/902.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "माया पिरती",
				artist: "Kali Prasad Baskota",
				imageUrl: "/cover-images/903.avif",
				audioUrl: "/songs/903.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "हेरी रहन देउ मलाई",
				artist: "Kali Prasad Baskota",
				imageUrl: "/cover-images/904.avif",
				audioUrl: "/songs/904.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "कया दामी भो",
				artist: "Shiva Pariyar",
				imageUrl: "/cover-images/1001.avif",
				audioUrl: "/songs/1001.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "हल्ला हल्लै मई",
				artist: "Shiva Pariyar",
				imageUrl: "/cover-images/1002.avif",
				audioUrl: "/songs/1002.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "पाकेर खाको फल मिठो",
				artist: "Shiva Pariyar",
				imageUrl: "/cover-images/1003.avif",
				audioUrl: "/songs/1003.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "पिलायो साथी ले",
				artist: "Shiva Pariyar",
				imageUrl: "/cover-images/1004.avif",
				audioUrl: "/songs/1004.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},

			{
				title: "बाचा भयो",
				artist: "Swoopna Suman",
				imageUrl: "/cover-images/501.avif",
				audioUrl: "/songs/501.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "तिम्रो बोलीमा",
				artist: "Swoopna Suman",
				imageUrl: "/cover-images/502.avif",
				audioUrl: "/songs/502.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "उपहार ",
				artist: "Swoopna Suman",
				imageUrl: "/cover-images/503.avif",
				audioUrl: "/songs/503.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
			{
				title: "जे छौ तिमी छौ",
				artist: "Swoopna Suman",
				imageUrl: "/cover-images/504.avif",
				audioUrl: "/songs/504.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 20, // 0:20
			},
		]);

		// Create albums with references to song IDs
		const albums = [
			{
				title: "खानी हो यामु",
				artist: "Trishna Gurung",
				imageUrl: "/albums/1.jpg",
				releaseYear: 2017,
				songs: createdSongs.slice(0, 10).map((song) => song._id),
			},
			{
				title: "सारङ्गी",
				artist: "Sushant KC",
				imageUrl: "/albums/2.jpg",
				releaseYear: 2023,
				songs: createdSongs.slice(10, 14).map((song) => song._id),
			},
			{
				title: "रेशम",
				artist: "Amrit Gurung",
				imageUrl: "/albums/3.jpg",
				releaseYear: 2015,
				songs: createdSongs.slice(14, 17).map((song) => song._id),
			},
			{
				title: "सस्तो मुटु",
				artist: "Sajjan Raj Vaidya",
				imageUrl: "/albums/4.jpg",
				releaseYear: 2022,
				songs: createdSongs.slice(17, 20).map((song) => song._id),
			},
			{
				title: "फुलको आफ्नै कथा छ",
				artist: "Ram Krishna Dhakal",
				imageUrl: "/albums/800.jpg",
				releaseYear: 2022,
				songs: createdSongs.slice(20, 24).map((song) => song._id),
			},
			{
				title: "हेरी रहन देउ मलाई",
				artist: "Kali Prasad Baskota",
				imageUrl: "/albums/600.jpg",
				releaseYear: 2022,
				songs: createdSongs.slice(24, 28).map((song) => song._id),
			},
			{
				title: "आँशुको अर्थ",
				artist: "Shiva Pariyar",
				imageUrl: "/albums/700.jpg",
				releaseYear: 2022,
				songs: createdSongs.slice(28, 32).map((song) => song._id),
			},
			{
				title: "ज छौ तिमी छौ",
				artist: "Swoopna Suman",
				imageUrl: "/albums/500.jpg",
				releaseYear: 2022,
				songs: createdSongs.slice(32, 36).map((song) => song._id),
			},

		];

		// Insert all albums
		const createdAlbums = await Album.insertMany(albums);

		// Update songs with their album references
		for (let i = 0; i < createdAlbums.length; i++) {
			const album = createdAlbums[i];
			const albumSongs = albums[i].songs;

			await Song.updateMany({ _id: { $in: albumSongs } }, { albumId: album._id });
		}

		console.log("Database seeded successfully!");
	} catch (error) {
		console.error("Error seeding database:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedDatabase();