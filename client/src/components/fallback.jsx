const SuspenseFallback = () => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-200`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default SuspenseFallback;
