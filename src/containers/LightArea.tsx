const LightArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 rounded-xl border-[0.5px] border-border">
      {children}
    </div>
  );
};

export default LightArea;
