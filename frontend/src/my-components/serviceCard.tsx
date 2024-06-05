import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ellipsis } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


import { Link } from "@tanstack/react-router"




export function ServiceCard({ title = "title", description = "description", stringPrice = "Rp. XXX.XXX.XXX", client=2, done=10 }) {

    return (

        <>
            <Card className="max-w-[350px] shadow-2xl">
                <CardHeader>
                    <div className="my-2 flex justify-between">
                        <p className="text-xs text-slate-500 italic">Service</p>

                        <Popover>
                            <PopoverTrigger><Ellipsis /></PopoverTrigger>
                            <PopoverContent className="w-fit">
                                <ul className="flex flex-col gap-1 text-sm">
                                    <li className="hover:underline"><Link>Lihat Detail</Link></li>
                                    <hr />
                                    <li className="hover:underline" ><Link>Pesan Sekarang</Link></li>
                                    <hr />
                                    <li className="hover:underline"><Link>Lihat Contoh</Link></li>
                                </ul>
                            </PopoverContent>
                        </Popover>
                        
                    </div>
                    <CardTitle>
                        <Link to="/requestCompForm" className="hover:underline">
                            <a>{title}</a>
                        </Link>
                    </CardTitle>
                    <CardDescription className="text-justify">
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h1><b>Harga</b>: {stringPrice}</h1>
                    <div className="mt-5 flex fllex-row gap-10">
                        <div className="text-center">
                            <h1 className="font-bold text-3xl">{client}</h1>
                            <p className="text-xs">Client</p>
                        </div>

                        <div className="text-center">
                            <h1 className="font-bold text-3xl">{done}</h1>
                            <p className="text-xs">Selesai</p>

                        </div>
                    </div>
                    <div className="flex flex-row mt-5 gap-5">
                        <Button variant="outline"><Link to="/examples">Example</Link></Button>
                        <Button><Link to="/requestCompForm">Book Now</Link></Button>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <h1 className="text-xs text-slate-400 hover:underline"><a href="https://milenialsolusindo.co.id"><i><b>Powered by</b></i>: Milenial IT Solusindo</a></h1>
                </CardFooter>
            </Card>
        </>



    )
}