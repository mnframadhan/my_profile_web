import { Hono } from "hono";


type Message = {
	id: number,
	message: string
}

const fake_message: Message = [
		{id: 1, message:"Yo man, great profile!"},
		{id: 2, message: "Hey dude, lets collab with me"},
		{id: 3, message: "What a great website, you rock it!"}
	];


const app = new Hono()
	.get('/', (c) => {

		const messages = fake_message;

		return c.json({messages});

	})


export default app;