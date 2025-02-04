type InfoDetailProps = {
  title: string;
  content: string | string[];
};

const InfoDetail = ({ title, content }: InfoDetailProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-3.5 text-[15px] font-semibold">{title}</div>{' '}
      {Array.isArray(content) ? (
        <div className="flex flex-col gap-2.5">
          {content.map((item, index) => (
            <div
              key={index}
              className="text-sm font-normal"
            >
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-sm font-normal">{content}</div>
      )}
    </div>
  );
};

export default InfoDetail;
