import "./PhotoCard.scss";

const PhotoCard = ({ title, text, bgVar }) => {
  const variants = {
    1: "photo-card-bg-1",
    2: "photo-card-bg-2",
    3: "photo-card-bg-3",
    4: "photo-card-bg-4",
    5: "photo-card-bg-5",
    6: "photo-card-bg-6",
    7: "photo-card-bg-7",
    8: "photo-card-bg-8",
    9: "photo-card-bg-9",
  };

  return (
    <div className={`photo-card ${variants[bgVar]}`}>
      <div className="black-cover" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

PhotoCard.defaultProps = {
  bgVar: 1,
  title: "Нерозлучник чорнощокий",
  text: "Дрібний птах, завдовжки 14 см. Оперення в основному зелене, з червонувато-коричневим чолом і чорним горлом та щоками, що контрастують з білими навколоочними кільцями та дзьобом з білуватою основою та червоним кінчиком. Його ніжки сіруватого кольору.",
};

export default PhotoCard;
