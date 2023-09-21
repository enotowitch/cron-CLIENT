import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../consts'

export default function Posts() {

	const [posts, postsSet] = useState([])

	useEffect(() => {
		async function getAllPosts() {
			const res = await axios.post(`${SERVER_URL}/posts`)
			postsSet(res.data)
		}
		getAllPosts()
	}, [])

	return (
		posts?.map(({ img }) => <img src={img} />)
	)
}
