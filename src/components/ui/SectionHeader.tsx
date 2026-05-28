type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function SectionHeader({ eyebrow, title, lead }: SectionHeaderProps) {
  return (
    <div>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="sectionTitle">{title}</h2>
      {lead ? <p className="sectionLead">{lead}</p> : null}
    </div>
  );
}
