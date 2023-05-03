import "@design-system/design-system.scss";

type Item = {
  id: number;
  text: string;
  isNew?: boolean;
};

type ListProps = {
  items: Item[];
};

const List = ({ items }: ListProps) => {
  return (
    <ul className="ds-list">
      {items.map(({ id, text, isNew }) => (
        <li key={id} className={`ds-list-item ${isNew ? "new" : ""}`}>
          {text}
        </li>
      ))}
    </ul>
  );
};

export default List;
