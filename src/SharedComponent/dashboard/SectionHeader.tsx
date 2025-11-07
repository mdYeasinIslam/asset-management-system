import { ReactNode } from "react";

interface IProps {
  title: string;
  icon: ReactNode;
}

export default function SectionHeader({ title, icon }: IProps) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}
