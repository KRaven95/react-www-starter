import "@design-system/design-system.scss";

type Item = {
  id: number;
  text: string;
  onPickItem?: () => void;
  isNew?: boolean;
};

type ListProps = {
  items: Item[];
};

const List = ({ items }: ListProps) => {
  return (
    <ul className="ds-list">
      {items.map(({ id, text, isNew, onPickItem }) => {
        const itemRole = !!onPickItem ? "button" : "li";
        return (
          <li key={id} className={`ds-list-item ${isNew ? "new" : ""}`} role={itemRole} onClick={onPickItem}>
            {text}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
