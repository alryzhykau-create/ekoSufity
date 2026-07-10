type FaqListProps = {
  items: ReadonlyArray<{ question: string; answer: string }>;
};

// Wspólny akordeon FAQ — jeden wygląd pytań na całej stronie.
export function FaqList({ items }: FaqListProps) {
  return (
    <div className="faqList">
      {items.map((item) => (
        <details className="faqItem" key={item.question}>
          <summary>
            <span>{item.question}</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
