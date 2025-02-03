type InfoDetailProps = {
  title: string;
  content: string | string[];
};

const InfoDetail = ({ title, content }: InfoDetailProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-3.5 font-psemibold text-[15px]">{title}</div>{' '}
      {/* title 아래 마진 14px */}
      {Array.isArray(content) ? (
        <div className="flex flex-col gap-2.5">
          {' '}
          {/* content 사이 gap 10px */}
          {content.map((item, index) => (
            <div
              key={index}
              className="font-pmedium text-sm font-normal"
            >
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div className="font-pmedium text-sm font-normal">{content}</div>
      )}
    </div>
  );
};

export default InfoDetail;
