import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/my-components/header";

import { ServiceCard } from "@/my-components/serviceCard"

export const Route = createFileRoute("/service")({
  component: Service,
});

function Service() {
  return (

    <>
      <center>
        <Header title="Service Available"></Header>
      </center>
      <div className="container flex gap-10 flex-wrap justify-between sm:justify-center">
      <ServiceCard
        title="Jasa Pembuatan Website Company Profile"
        description="Buat website perusahaanmu lebih menarik, responsif, dan super cepat. Dapatkan harga terjangkau."
        stringPrice="Rp. 5.000.000 - Rp. 10.000.000"
        client={2}
        done={10} />

      <ServiceCard
        title="Jasa Pembuatan Aplikasi Sistem Informasi Perusahaan"
        description="Pembuatan sistem HRIS, ticketing, evaluation control, performance report automation."
        stringPrice="Rp. 20.000.000 - Rp. 100.000.000"
        client={1}
        done={2} />
      

      <ServiceCard
        title="Jasa Pembuatan Website Company Profile"
        description="Buat website perusahaanmu lebih menarik, responsive, dan super cepat. Dapatkan harga terjangkau."
        stringPrice="Rp.5.000.000 - Rp. 10.000.000" />

      <ServiceCard
        title="Jasa Pembuatan Website Company Profile"
        description="Buat website perusahaanmu lebih menarik, responsive, dan super cepat. Dapatkan harga terjangkau."
        stringPrice="Rp.5.000.000 - Rp. 10.000.000" />

      <ServiceCard
        title="Jasa Pembuatan Website Company Profile"
        description="Buat website perusahaanmu lebih menarik, responsive, dan super cepat. Dapatkan harga terjangkau."
        stringPrice="Rp.5.000.000 - Rp. 10.000.000" />

      <ServiceCard
        title="Jasa Pembuatan Website Company Profile"
        description="Buat website perusahaanmu lebih menarik, responsive, dan super cepat. Dapatkan harga terjangkau."
        stringPrice="Rp.5.000.000 - Rp. 10.000.000" />
      </div>

      
    </>
    );
}
