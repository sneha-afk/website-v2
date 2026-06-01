interface ColumnsProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

// Pass in elements to put in a split-two column layout
export function Columns({ left, right }: ColumnsProps) {
  return (
    <div className="columns">
      {left}
      {right}
    </div>
  );
}
