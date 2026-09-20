interface WhyChooseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyChooseCard({ title, description, icon }: WhyChooseCardProps) {
  return (
    <div className="bg-[#0A1128]/80 rounded-lg p-6 text-center border border-[#8A99B4]/20 hover:border-[#FFB703]/50 transition-colors duration-300">
      <div className="flex items-center justify-center mb-4 text-[#FFB703]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}