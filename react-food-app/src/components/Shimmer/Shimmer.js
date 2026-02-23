const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img shimmer"></div>
            <div className="shimmer-line shimmer"></div>
            <div className="shimmer-line small shimmer"></div>
            <div className="shimmer-line small shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;