import Navbar from "./NavbarProfile";
import BorderProfile from "./BorderProfile";
import PropTypes from 'prop-types';

function Dashboard({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Nav */}
      <Navbar />

      {/* Border profile */}
      <BorderProfile />

      <div className="flex-grow container mx-auto mt-16">
          <div className="text-center">
              <h1 className="text-2xl font-bold">sonyvansha</h1>
              <p className="text-gray-500">Tanda tangan ini diperlihatkan untuk semua orang...</p>
              <div className="flex justify-center space-x-4 mt-4">
                  <span>0 Postingan</span>
                  <span>0 Ikuti</span>
                  <span>0 Pengikut</span>
                  <span>0 Suka</span>
              </div>
          </div>
          <div className="flex mt-8">
              <div className="w-3/4 pr-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-xl font-bold mb-4">Jelajahi</h2>
                      <div className="grid grid-cols-4 gap-4">
                          <div className="bg-gray-100 p-4 rounded-lg text-center ">
                              <i className="fas fa-gift text-2xl text-red-500 mb-2"></i>
                              <h3 className="font-bold">Lakukan Lapor Kehadiran</h3>
                              <p className="text-gray-500">Lapor kehadiran untuk pertama kalinya dan dapatkan 100 Primogem</p>
                              <a href="#" className="text-blue-500 hover:underline">Selesaikan</a>
                          </div>
                          <div className="bg-gray-100 p-4 rounded-lg text-center">
                              <i className="fas fa-book text-2xl text-blue-500 mb-2"></i>
                              <h3 className="font-bold">Kunjungi Panduan</h3>
                              <p className="text-gray-500">Semua panduan yang ingin kamu lihat ada di sini</p>
                              <a href="#" className="text-blue-500 hover:underline">Selesaikan</a>
                          </div>
                          <div className="bg-gray-100 p-4 rounded-lg text-center">
                              <i className="fas fa-map text-2xl text-green-500 mb-2"></i>
                              <h3 className="font-bold">Lihat Fitur</h3>
                              <p className="text-gray-500">Membantumu menjelajahi peta dan mengembangkan party</p>
                              <a href="#" className="text-blue-500 hover:underline">Selesaikan</a>
                          </div>
                          <div className="bg-gray-100 p-4 rounded-lg text-center">
                              <i className="fas fa-user-friends text-2xl text-purple-500 mb-2"></i>
                              <h3 className="font-bold">Ikuti 2 Akun</h3>
                              <p className="text-gray-500">Jangan lewatkan lagi berita terbaru dan tren terpopuler</p>
                              <a href="#" className="text-blue-500 hover:underline">Selesaikan</a>
                          </div>
                      </div>
                  </div>

                  {/* Page Topic */}
                  {children}

              </div>
              <div className="w-1/4">
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                      <h2 className="text-xl font-bold mb-4">Creator LAB</h2>
                      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Masuk</button>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                      <h2 className="text-xl font-bold mb-4">Pusat Achievement</h2>
                      <a href="#" className="text-blue-500 hover:underline">Lihat</a>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                      <h2 className="text-xl font-bold mb-4">Data Pribadi</h2>
                      <p className="text-gray-500">ID Akun: 414889995</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-xl font-bold mb-4">Pencapaian</h2>
                      <p className="text-gray-500">SonyVansha</p>
                      <p className="text-gray-500">Asia Lv.32</p>
                      <div className="mt-4">
                          <div className="flex justify-between text-gray-500">
                              <span>Hari Aktif</span>
                              <span>12</span>
                          </div>
                          <div className="flex justify-between text-gray-500 mt-2">
                              <span>Data Pencapaian Tercapai</span>
                              <span>85</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;