import { useLazyGetUserByIdQuery } from "@/services/user/getUserById";
import { selectUser } from "@/store/auth";
import { useSelector } from "@/store/setup/hooks";
import { TokenPayloadType } from "@/types/auth";
import {
  BarChart3,
  Bell,
  BookOpen,
  CreditCard,
  Heart,
  Settings,
  User,
} from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Profile = () => {
  const navigate = useNavigate();
  const { id: userId } = useSelector(selectUser) as TokenPayloadType;

  console.log("User ID:", userId);

  const [fetchUser, { data: user, isLoading }] = useLazyGetUserByIdQuery();

  console.log({ user });

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        await fetchUser({ id: userId });
      }
    };
    fetchUserData();
  }, [userId]);

  const menuItems = [
    {
      icon: BookOpen,
      title: "Notlarım",
      description: "Yüklediğiniz ders notlarını yönetin",
      action: () => navigate("/profile/my-notes"),
    },
    {
      icon: Heart,
      title: "Favorilerim",
      description: "Beğendiğiniz notları görüntüleyin",
      action: () => navigate("/profile/favorites"),
    },
    {
      icon: CreditCard,
      title: "Satın Aldıklarım",
      description: "Satın aldığınız notları görüntüleyin",
      action: () => navigate("/profile/purchases"),
    },
    {
      icon: BarChart3,
      title: "İstatistikler",
      description: "Hesap aktivitelerinizi takip edin",
      action: () => navigate("/profile/stats"),
    },
    {
      icon: Bell,
      title: "Bildirimler",
      description: "Bildirim ayarlarınızı yönetin",
      action: () => navigate("/profile/notifications"),
    },
    {
      icon: Settings,
      title: "Hesap Ayarları",
      description: "Profil bilgilerinizi düzenleyin",
      action: () => navigate("/profile/settings"),
    },
  ];

  if (isLoading) {
    return (
      <main className="min-h-screen bg-parchment">
        <div className="container mx-auto px-4 md:px-20 py-8">
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <User className="w-10 h-10 text-white" />
            </div>
            <p className="text-xl text-heading/60 animate-pulse">
              Profil bilgileri yükleniyor...
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-parchment">
      <div className="container mx-auto px-4 md:px-20 py-8">
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 border border-accent/20 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-heading mb-2"></h1>
              <p className="text-lg text-heading/70 mb-4">{user?.username}</p>
              <div className="flex flex-wrap gap-4 text-sm text-heading/60">
                <span>Üyelik tarihi: Ocak 2024</span>
                <span>•</span>
                <span>Toplam not: 12</span>
                <span>•</span>
                <span>Toplam indirme: 45</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                onClick={item.action}
                className="bg-white rounded-xl p-6 border border-accent/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-heading mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-heading/70 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
