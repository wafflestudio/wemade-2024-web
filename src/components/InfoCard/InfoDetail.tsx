interface InfoDetailProps {
  title: string;
  content: string | string[];
}

const InfoDetail = ({ title, content }: InfoDetailProps) => {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <div className="flex flex-col">
      <div className="mb-3 text-[15px] font-semibold">{title}</div>
      <div className="flex flex-col gap-2">
        {contentArray.map((item) => (
          <div
            key={item}
            className="text-sm font-normal"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoDetail;
