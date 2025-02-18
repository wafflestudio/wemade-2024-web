import ListHeader from './ListHeader';

const OrgDetail = () => {
  const listBackShadow =
    'shadow-inner shadow-[0px_0px_5px_0px_rgba(0,0,0,0.05)]';
  return (
    <div className={`${listBackShadow} h-[763px] rounded-md bg-backgroundGray`}>
      <ListHeader
        title="위메이드"
        count={78}
      />
    </div>
  );
};

export default OrgDetail;
