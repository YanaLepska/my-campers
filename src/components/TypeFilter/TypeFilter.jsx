import css from "../EquipmentFilter/EquipmentFilter.module.css";

const TypeFilter = () => {
  return (
    <div className={css.container}>
      <ul className={css.filtersList}>
        <li>Van</li>
        <li>Fully Integrated</li>
        <li>Alcove</li>
      </ul>
    </div>
  );
};

export default TypeFilter;
