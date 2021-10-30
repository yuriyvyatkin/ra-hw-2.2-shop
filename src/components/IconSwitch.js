export default function IconSwitch({ icon, onSwitch }) {
  return (
    <i className="material-icons">
      <a href="#0" className="switcher" onClick={() => onSwitch(icon)}>
        {icon}
      </a>
    </i>
  );
}
