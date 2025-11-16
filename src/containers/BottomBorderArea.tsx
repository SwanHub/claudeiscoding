const BottomBorderArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative flex flex-col pb-4 mb-4 border-b-[0.5px] border-border">
      {children}
    </span>
  );
};

export default BottomBorderArea;
