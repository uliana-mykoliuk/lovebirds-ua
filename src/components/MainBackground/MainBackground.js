const MainBackground = ({ titleText, subtitleText, backgroundVariant }) => {
  const variants = {
    1: "main-bg-1",
    2: "main-bg-2",
    3: "main-bg-3",
    4: "main-bg-4",
    5: "main-bg-5",
  };

  return (
    <main className={`main ${variants[backgroundVariant]}`}>
      <div className="black-cover" />
      <div className="text-block">
        <h1>{titleText}</h1>
        <h2>{subtitleText}</h2>
      </div>
    </main>
  );
};

MainBackground.defaultProps = {
  titleText: "Нерозлучники",
  subtitleText: "Пташки, що подарують вам любов ",
  backgroundVariant: 1,
};

export default MainBackground;
