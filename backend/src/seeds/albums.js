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
		]);

		// Create albums with references to song IDs
		const albums = [
			{
				title: "खानी हो यामु",
				artist: "Trishna Gurung",
				imageUrl: "/albums/1.jpg",
				releaseYear: 2017,
				songs: createdSongs.slice(0, 4).map((song) => song._id),
			},
			{
				title: "सारङ्गी",
				artist: "Sushant KC",
				imageUrl: "/albums/2.jpg",
				releaseYear: 2023,
				songs: createdSongs.slice(4, 8).map((song) => song._id),
			},
			{
				title: "रेशम",
				artist: "Amrit Gurung",
				imageUrl: "/albums/3.jpg",
				releaseYear: 2015,
				songs: createdSongs.slice(8, 11).map((song) => song._id),
			},
			{
				title: "सस्तो मुटु",
				artist: "Sajjan Raj Vaidya",
				imageUrl: "/albums/4.jpg",
				releaseYear: 2022,
				songs: createdSongs.slice(11, 14).map((song) => song._id),
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