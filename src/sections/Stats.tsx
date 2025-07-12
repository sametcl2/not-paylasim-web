import { Users, Scroll, Library, Award } from "lucide-react";

export const Stats = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M15 15h30v30H15V15zm15 15l10-10v20l-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading mb-4">
            Rakamlarla Not Paylaşım
          </h2>
          <p className="text-heading/60">
            Türkiye'nin en büyük öğrenci topluluğu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-book-blue w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-book-blue mb-2 group-hover:text-book-blue/80 transition-colors">
              50,000+
            </div>
            <div className="text-heading/70 font-medium">Aktif Öğrenci</div>
          </div>
          <div className="text-center group">
            <div className="bg-secondary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Scroll className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 group-hover:text-secondary/80 transition-colors">
              10,000+
            </div>
            <div className="text-heading/70 font-medium">Paylaşılan Not</div>
          </div>
          <div className="text-center group">
            <div className="bg-book-green w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Library className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-book-green mb-2 group-hover:text-book-green/80 transition-colors">
              500+
            </div>
            <div className="text-heading/70 font-medium">Üniversite</div>
          </div>
          <div className="text-center group">
            <div className="bg-destructive w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-destructive mb-2 group-hover:text-destructive/80 transition-colors">
              98%
            </div>
            <div className="text-heading/70 font-medium">Memnuniyet</div>
          </div>
        </div>
      </div>
    </section>
  );
};
