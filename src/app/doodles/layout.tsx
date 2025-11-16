import PageHeader from "@/components/PageHeader";

const DoodlesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <PageHeader title="Doodles" buttonText="New doodle" />
      {children}
    </div>
  );
};

export default DoodlesLayout;
