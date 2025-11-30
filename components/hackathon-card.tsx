
import { BriefcaseBusiness } from "lucide-react";


interface Props {
  date: string;
  titre: string;
  etablissement: string;
  description?: string;
}

export function HackathonCard({
  date,
  titre,
  etablissement,
  description,
}: Props) {
  return (
    <li className="relative ml-12 py-4">
      <div className="absolute -left-16 top-4">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <BriefcaseBusiness className="w-4 h-4 text-white object-contain" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {date && (
          <time className="text-xs text-muted-foreground">{date}</time>
        )}
        <h2 className="font-semibold leading-none">{titre}</h2>
        {etablissement && (
          <p className="text-sm text-muted-foreground">{etablissement}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>

    </li>
  );
}
