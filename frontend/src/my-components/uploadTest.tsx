import { myProfileAPI } from "@/lib/api"


async function upload_test() { 
    const res = await myProfileAPI.profile
}

export function UploadTest() {
    return (
        <>
        <form action="" encType="multipart/form-data">

            <input type="file" name="file" />
            <button type="submit">Upload</button>

        </form>

        </>
    )
}