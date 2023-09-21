import axios from 'axios';
import { useState } from 'react';

export default function PostCreate() {

	const [file, setFile] = useState(null);

	function postCreate(e) {
		e.preventDefault();
		console.log(file);

		const formData = new FormData();
		formData.append('img', file);

		axios.post("https://cron-gybv.onrender.com/create", formData, {
			headers: {
				'Content-Type': 'multipart/form-data', // Important for sending files
			},
		})
			.then(response => {
				// Handle the response here
				console.log(response);
			})
			.catch(error => {
				// Handle any errors here
				console.error(error);
			});
	}

	return (
		<form onSubmit={postCreate}>
			<input type="file" name="img" onChange={(e) => setFile(e.target.files[0])} />
			<button type="submit">Submit</button>
		</form>
	)
}
