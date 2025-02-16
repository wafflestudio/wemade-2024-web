type EditBtnProps = {
  onClick: () => void;
  text: string;
};
const EditBtn = ({ onClick, text }: EditBtnProps) => (
  <button
    onClick={onClick}
    className="rounded-[30px] bg-lightGreen px-1.5 py-1 text-xs text-backgroundGreen"
  >
    {text}
  </button>
);

export default EditBtn;
