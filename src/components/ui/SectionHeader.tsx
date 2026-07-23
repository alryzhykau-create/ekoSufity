type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  // Modyfikator szerokości akapitu, np. "sectionLead--wide" — gdy domyślne
  // 720px łamie krótki lead na dwie linie.
  leadClassName?: string;
};

export function SectionHeader({ eyebrow, title, lead, leadClassName }: SectionHeaderProps) {
  return (
    <div>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="sectionTitle">{title}</h2>
      {lead ? <p className={`sectionLead${leadClassName ? ` ${leadClassName}` : ""}`}>{lead}</p> : null}
    </div>
  );
}
