const DetailProject = () => {
  return (
    <div className="dark:text-white px-5 m-auto lg:w-3/4 mb-5 h-fit text-xs md:text-base">
      <h1 className="text-xl md:text-3xl font-semibold">
        Joglo Ndeso Point Of Sales Application (POS)
      </h1>
      <br />
      <a
        href={"https://joglo-ndeso-kasir-admin-dev.vercel.app/"}
        target="blank"
        className="text-xs text-teal-600 dark:text-teal-400 font-semibold hover:underline"
      >
        https://joglo-ndeso-kasir-admin-dev.vercel.app/
      </a>
      <br />
      <br />
      <span>
        Aplikasi ini merupakan project yang saya kerjakan untuk memenuhi
        permintaan dari Joglo Ndeso Resto, sebuah rumah makan yang berada di
        Kabupaten Grobogan. Joglo Ndeso membutuhkan sebuah aplikasi pencatatan
        penjualan untuk mempermudah dalam mengevaluasi pemasukan serta memenuhi
        kebutuhan bisnis lainnya. Aplikasi ini berbeda dari aplikasi Point of
        Sales pada umumnya, saya membuatnya secara khusus dan sesuai dengan
        kebutuhan bisnis dari Joglo Ndeso sehingga dapat menyelesaikan
        permasalahan yang berhubungan dengan pencatatan hasil penjualan. Saya
        menjelaskan disini menggunakan aplikasi yang versi development.
        Fitur-fitur pada aplikasi ini adalah hasil dari diskusi dengan owner
        mengenai apa saja aspek yang dibutuhkan untuk menunjang kelancaran
        bisnisnya.
        <br />
        <br />
        <span>Fitur-fitur yang ada pada aplikasi ini antara lain:</span>
        <br />
        <br />
        <h1 className="font-bold mb-1 text-sm md:text-lg">
          1. Membuat Invoice
        </h1>
        <span>
          Sebelumnya owner harus mencatat secara manual pesanan seorang
          pelanggan, terkadang jika telah banyak pelanggan yang memesan, owner
          menjadi kesulitan untuk mencocokan setiap pelanggan dengan apa yang
          tadi telah dipesan. Sehingga pada saat melakukan proses pembayaran
          dapat terjadi ketidaksesuaian antara apa yang dipesan dengan harga
          yang harus dibayar. semua proses itu dilakukan secara menual
          menggunakan kertas dan bolpoint. Fitur membuat invoice ini berguna
          untuk mencatat nama pelanggan beserta menu yang dipesan, sehingga
          tidak akan terjadi kesalahan pada saat pembayaran. contoh
          penggunaannya dapat dilihat gambar dibawah
        </span>
        <br />
        <br />
        <div className="w-full h-fit border-2 mb-2">
          <img src="images/makeInvoice.jpeg" alt="make invoice" />
        </div>
        <span>
          Logo rumah adalah tombol untuk menuju homepage. Tombol + untuk
          menambah nama invoice/pelanggan yang akan memesan. Nama-nama tersebut
          adalah beberapa invoice yang telah dibuat, klik untuk melihat apa saja
          yang telah dipesan, mengedit pesanan, serta menghapus pesanan.
          <br />
          <br />
          <span className="font-semibold">
            Lalu bagaimana cara untuk membuat pesanannya?
          </span>
          <br />
          <br />
          <span>
            Untuk proses membuat pesanan akan saya jelaskan dengan menampilkan
            page membuat pesanan berikut ini
          </span>
          <div className="w-full h-fit border-2 mb-2 flex justify-center mt-1">
            <img src="images/makeOrder.jpeg" alt="make invoice" />
          </div>
          <span>
            Bagian paling atas adalah nama dari invoice tersebut. Pada contoh
            ini pelanggan dibuatkan invoice dengan nama heri. Section dibawah
            nama adalah tabel dari item/menu yang dipesan oleh peanggan
            tersebut. Setiap baris dari tabel tersebut menampilkan informasi
            mengenai jumlah item, nama item, dan harga item serta tombol delete
            untuk menghapus item tersebut.
          </span>
          <br />
          <br />
          <span>
            Selanjutnya terdapat informasi dari total akumulasi harga dari semua
            item yang dipesan dan tombol bayar jika proses pembayaran telah
            dilakukan. Setelah tombol bayar diklik maka informasi pesanan akan
            tersimpan di database dan nama invoice itu akan otomatis terhapus
            karena transaksi telah selesai.
          </span>
          <br />
          <br />
          <span>
            Section selanjutnya adalah tabel dari daftar semua menu. Terdapat
            juga fitur input cari untuk menemukan nama menu lebih cepat. Setiap
            baris berisi informasi nama beserta harga menu. Tombol add digunakan
            untuk menambah menu pesanan pada invoice.
            <br />
            <br />
            <span className="font-bold">
              Sekarang bagaimana cara menambah daftar menu atau menghapus menu
              yang tidak tersedia?
            </span>
            <br />
            <br />
            Oke, saya jawab. Pengelolaan menu dapat dilakukan pada page
            dashboard yang akan saya jelaskan setelah ini.
          </span>
          <br />
          <br />
          <span>
            Terakhir paling bawah sendiri terdapat tombol berwarna merah
            bertuliskan hapus invoice. Sesuai dengan tulisannya, tombol ini
            berguna untuk menghapus invoice apabila pelanggan tidak jadi
            memesan. {" :'("}
          </span>
        </span>
        <br />
        <br />
        <h1 className="font-bold mb-1 text-sm md:text-lg">2. Dashboard</h1>
        <span>
          Sebelumnya owner kerepotan untuk merekap pemasukan untuk mengetahui
          berapa pemasukan selama sebulan, seminggu, atau sehari. Menggunakan
          aplikasi ini, owner dapat langsung mengetahui semua informasi tersebut
          tanpa harus merekapnya satu persatu. Selain menghemat waktu dan usaha,
          owner dapat membuat keputusan bisnis lebih cepat dan akurat.
          <br />
          Seperti dahboard pada umumnya, pada aplikasi ini dashboard berisi
          informasi hasil penjualan. Terdapat beberapa section pada dashboard
          ini. Untuk lebih jelasnya akan saya lengsung jelaskan melaui gambar
          berikut
        </span>
        <div className="w-full h-fit border-2 mb-2 flex justify-center mt-1">
          <img src="images/dashboard.jpeg" alt="make invoice" />
        </div>
        <span>
          Pada menu utama, tertera informasi mengenai pemasukan/omset yang
          didapat dalam jangka waktu perhari ini, perminggu ini, perbulan ini,
          dan pertahun. Dibawahnya terdapat dua grafik, yaitu grafik pemasukan
          dan grafik pesanan. Grafik pemasukan berisi perbandingan informasi
          pemasukan setiap bulan yang mana pada saat ini masih proses
          development. Sedangkan grafik pesanan berisi informasi jumlah item
          yang terjual setiap bulannya dikelompokkan berdasarkan kategori dari
          menu/item.
        </span>
        <div className="w-full h-fit border-2 mb-2 flex justify-center mt-1">
          <img src="images/dashboardProduct.jpeg" alt="make invoice" />
        </div>
        <span>
          Selanjutnya adalah section products. Pada section products, owner
          dapat melakukan pengelolaan daftar menu, meliputi tambah menu, edit
          menu, dan hapus menu. Terdapat tombol Add Product yang terletak paling
          atas sendiri berguna untuk menambah menu baru. Untuk mengedit dan
          menghapus menu, klik tombol edit yang berwarna hijau atau tombol
          delete yang berwarna merah yang keduanya terdapat pada kolom action di
          tabel daftar menu.
        </span>
        <div className="w-full h-fit border-2 mb-2 flex justify-center mt-1">
          <img src="images/dashboardSales.jpeg" alt="make invoice" />
        </div>
        <span>
          Pada section sales, owner dapat mengetahui informasi tentang hasil
          penjualan perhari berdasarkan tanggal yang ditentukan. Pilih tanggal
          yang ingin diketahui, lalu klik tombol cek. maka akan muncul informasi
          total pemasukan dan menu/item saja yang terjual pada tanggal tersebut.
        </span>
        <br />
        <br />
        <span className="font-semibold">
          Cukup itu saja penjelasan mengenai fungsionalitas pada aplikasi yang
          saya buat ini. Sekarang apa saja techstack yang saya gunakan untuk
          membuat aplikasi ini?
        </span>
        <br />
        <br />
        <span>
          Untuk techstack nya saya menggunakan MERN stack yaitu MongoDB atlas
          untuk menghandle database mulai dari CRUD sampai agregasi data. NodeJS
          dan ExpressJS untuk membuat server REST API, REST API saya buat
          berdasarkan best practice yang ada. ReactJS untuk menghandle sisi
          frontend, fitur di ReactJS seperti hooks, context, dll sangat
          mempermudah saya dalam mengembangkan sisi frontend dari aplikasi ini.
        </span>
        <br />
        <br />
        <span>Penutup</span>
        <br />
        <br />
        <span>
          Saya belajar sangat banyak ketika membuat aplikasi ini. saya belajar
          bagaimana membuat response API yang baik dan konsisten, belajar
          mendesain database yang sesuai kebutuhan, belajar bagaimana
          mengagregasi data pada MongoDB, belajar bagaimana membuat
          authentication dan authorization yang baik menggunakan jsonwebtoken,
          belajar menggunakan middleware, serta belajar tentang keamanan API.
          Proses ini memang tidak mudah, namun membuat saya merasa senang dan
          merasa ingin terus berkembang. Saya sadari memang aplikasi ini belum
          sempurna dan masih dalam tahap pengembangan, namun satu hal yang
          paling membuat saya merasa bersemangat adalah ketika melihat aplikasi
          yang saya buat dapat memberi manfaat pada pengguna. Rasanya seperti
          mendapat suntikan dopamin yang seketika memberi saya semangat untuk
          terus berkembang dan terus memberi lebih.
        </span>
      </span>
    </div>
  );
};

export default DetailProject;
