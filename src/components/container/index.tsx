type ContainerProps = {
  children: React.ReactNode;
  height?: string;
};

export default function Container({ children, height }: ContainerProps) {
  return (
    <div className={`container ${height} mx-auto flex items-center`}>
      {children}
    </div>
  );
}
