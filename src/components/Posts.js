import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Posts() {

	const [posts, postsSet] = useState([])

	useEffect(() => {
		async function getAllPosts() {
			const res = await axios.post("https://cron-gybv.onrender.com/posts")
			postsSet(res.data)
		}
		getAllPosts()
	}, [])

	return (
		posts?.map(({ img }) => <img src={img} />)
	)
}
