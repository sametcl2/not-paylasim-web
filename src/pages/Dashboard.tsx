export const Dashboard = () => {
  return (
    <main className="min-h-screen bg-parchment">
      <div className="container mx-auto px-4 md:px-20 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-heading mb-4">Dashboard</h1>
          <p className="text-lg text-heading/70">
            Hoş geldiniz! Kişisel panonuz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-accent/20">
            <h3 className="text-xl font-semibold text-heading mb-2">
              Notlarım
            </h3>
            <p className="text-heading/70">
              Yüklediğiniz ders notlarını yönetin
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-accent/20">
            <h3 className="text-xl font-semibold text-heading mb-2">
              Favorilerim
            </h3>
            <p className="text-heading/70">Beğendiğiniz notları görüntüleyin</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-accent/20">
            <h3 className="text-xl font-semibold text-heading mb-2">
              İstatistikler
            </h3>
            <p className="text-heading/70">Hesap aktivitelerinizi takip edin</p>
          </div>
        </div>
      </div>
    </main>
  );
};
