import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-[#0A1128]/90 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#8A99B4]/20">
      <div className="flex items-center justify-center mb-4 text-[#FFB703]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <Link href="#contact" className="mt-4 inline-block text-[#FFB703] hover:underline font-medium">
        Learn More &rarr;
      </Link>
    </div>
  );
}