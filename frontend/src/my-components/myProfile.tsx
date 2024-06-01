import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useQuery } from "@tanstack/react-query";

import { myProfileAPI } from "@/lib/api";

async function fetchMyProfile() {
  const res = await myProfileAPI.profile.$get();
  return res.json();
}

export function MyProfile() {
  const { status, data, error } = useQuery({
    queryKey: ["get-my-profile"],
    queryFn: fetchMyProfile,
  });

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container mx-auto py-10">
      <Table>
          <TableBody>
            {data.profile.map((my_profile) => {
              return (
                <>
                  <TableHeader>
                    <TableRow>
                      <h3 className="text-bold hover:underline">
                        <TableHead>Contact Me!</TableHead>
                      </h3>
                    </TableRow>
                  </TableHeader>
                  <TableRow>
                    <TableCell className="font-medium">Legal name</TableCell>
                    <TableCell>{my_profile.nama_lengkap}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      You can call me
                    </TableCell>
                    <TableCell>{my_profile.nama_panggilan}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Birth</TableCell>
                    <TableCell>
                      {my_profile.tempat_lahir}, {my_profile.tanggal_lahir}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Email me</TableCell>
                    <TableCell>{my_profile.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">WhatsApp me</TableCell>
                    <TableCell>{my_profile.no_hp}</TableCell>
                  </TableRow>

                  <TableHeader>
                    <br />
                    <br />
                    <TableRow>
                      <h3 className="text-bold hover:underline">
                        <TableHead>Education</TableHead>
                      </h3>
                    </TableRow>
                  </TableHeader>
                  <TableRow>
                    <TableCell className="font-medium">University</TableCell>
                    <TableCell>{my_profile.universitas}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Faculty</TableCell>
                    <TableCell>{my_profile.fakultas}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Major</TableCell>
                    <TableCell>{my_profile.jurusan}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Joined</TableCell>
                    <TableCell>{my_profile.masuk_kuliah}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Graduated</TableCell>
                    <TableCell>{my_profile.wisuda}</TableCell>
                  </TableRow>

                  <TableHeader>
                    <br />
                    <br />
                    <TableRow>
                      <h3 className="text-bold hover:underline">
                        <TableHead>Story</TableHead>
                      </h3>
                    </TableRow>
                  </TableHeader>
                  <TableRow>
                    <TableCell className="font-medium">Readme</TableCell>
                    <TableCell>{my_profile.cerita_saya}</TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
      </Table>
    </div>
  );
}
