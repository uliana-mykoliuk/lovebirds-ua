import "./CircleCard.css";

const CircleCard = ({ title, text, colorVar, position }) => {
  const variants = {
    1: "circle-bg-var-1",
    2: "circle-bg-var-2",
    3: "circle-bg-var-3",
  };

  return (
    <div
      className={`circle-card ${variants[colorVar]} ${
        position === "right" ? "position-right" : ""
      }`}
    >
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

CircleCard.defaultProps = {
  title: "1. Нерозлучники паруються на все життя.",
  text: "Статевої зрілості моногамні птахи досягають у віці приблизно десяти місяців. Парування починається з залицяння і може тривати протягом приблизно 15 років життя. Моногамія має важливе значення для соціальної стабільності зграй і лежить в основі більшої частини їх соціальної поведінки.",
  colorVar: 1,
};

export default CircleCard;
