export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-heading via-heading/95 to-leather text-white py-16 relative overflow-hidden">
      {/* Book-inspired background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M15 15h30v30H15V15zm15 10l10-10v20l-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-book-gold to-book-gold/80 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">📚</span>
              </div>
              <h3 className="text-xl font-bold">Not Paylaşım</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Türkiye'nin en büyük öğrenci not paylaşım kütüphanesi. Bilginin
              gücünü keşfedin.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-book-gold">📖 Platform</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  Nasıl Çalışır
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  Fiyatlandırma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  Güvenlik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  API Dokümantasyonu
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-book-gold">Destek</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  Canlı Destek
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  SSS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  Öğrenci Topluluğu
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-book-gold">Yasal</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  Çerez Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-book-gold transition-colors">
                  KVKK Aydınlatma
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Not Paylaşım. Tüm hakları saklıdır. Made with 📚 for
              students.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🛡️ Güvenli Platform</span>
              <span>✅ Doğrulanmış Notlar</span>
              <span>⚡ 7/24 Erişim</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
