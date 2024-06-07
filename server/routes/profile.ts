import { Hono } from "hono";


type Profile = {
	nama_lengkap: string,
	nama_panggilan : string,
	tempat_lahir : string,
	tanggal_lahir: string,
	usia: string,
	pendidikan_terakhir: string,
	universitas: string,
	fakultas: string,
	jurusan: string,
	masuk_kuliah: number,
	wisuda: number,
	email: string,
	no_hp: string,
	linkedin: string,
	cerita_saya: string,
	gambar: string,
}

const my_profile: Profile[] = [
	{
		nama_lengkap: "Muhammad Nur Fitrah Ramadhan",
		nama_panggilan: "Fitrah",
		tempat_lahir: "Pangkep",
		tanggal_lahir: "17/01/1999",
		usia: "25",
		pendidikan_terakhir: "S1",
		universitas: "Universitas Hasanuddin",
		fakultas: "Ekonomi dan Bisnis",
		jurusan: "Ilmu Ekonomi",
		masuk_kuliah: 2017,
		wisuda: 2022,
		email: "fitrah9ramadhan@gmail.com",
		no_hp: "+62 896-9498-0468",
		linkedin: "fitrah-ramadhan",
		cerita_saya: "Fitrah is not an just ordinary person",
		gambar: "belum tersedia"
	}
]


const app = new Hono()
	.get('/', (c) => {

		const profile_fitrah = my_profile
		return c.json({profile: profile_fitrah});

	})
	.post('/upload', async (c) => {
		const body = await c.req.parseBody()
		const filename = body['file']

		return c.json({filename:filename})
	})


export default app;