const CounterComponent = ({ title, count }) => {
  return (
    <div className="text-center p-1 max-h-fit text-gray-500">
      <p>{title}</p>
      <p>{count}</p>
    </div>
  );
};

export default CounterComponent;
