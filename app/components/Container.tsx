"use client";

interface ContainerProps {
  children: React.ReactNode;
}

// const Container: React.FC<ContainerProps> = ({ children }) => {
// you can also write the below line in above way
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
