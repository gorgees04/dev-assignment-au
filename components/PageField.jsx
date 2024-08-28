import CheckBox from "./CheckBox";

export default function PageField({ page, setChecked }) {
  return (
    <div className="page-field">
      <p className="text">{page.text}</p>
      <CheckBox page={page} setChecked={(value) => setChecked(value)} />
    </div>
  );
}
