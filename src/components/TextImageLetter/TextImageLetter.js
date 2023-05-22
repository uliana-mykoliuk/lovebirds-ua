import "./TextImageLetter.scss";

const TextImageLetter = ({ text, variantColor, variantBg, imgPosition }) => {
  const colors = {
    1: "dot-bg-var-1",
    2: "dot-bg-var-2",
    3: "dot-bg-var-3",
  };

  const backgrounds = {
    1: "img-bg-1",
    2: "img-bg-2",
    3: "img-bg-3",
    4: "img-bg-4",
    5: "img-bg-5",
    6: "img-bg-6",
  };

  return (
    <div
      className={
        imgPosition === "left"
          ? "txt-img-container"
          : "txt-img-container-right-img"
      }
    >
      <div className={imgPosition === "left" ? "img-block" : "img-block-right"}>
        <div
          className={`txt-img-let-image-container ${backgrounds[variantBg]}`}
        />
        <div className={`txt-img-let-letter ${colors[variantColor]}`} />
      </div>
      <div className="text-block">{text}</div>
    </div>
  );
};

TextImageLetter.defaultProps = {
  text: "Нерозлучники все частіше стають домашніми тваринами. Це й не дивно, адже вони відомі своєю гарною зовнішністю, веселою і життєрадісною вдачею, простим доглядом і відсутністю великих матеріальних витрат. Тим не менш, є кілька речей, які вам потрібно знати про нерозлучників, якщо ви хочете, щоб ваш вихованець почувався комфортно проживаючи з вами.",
  variantColor: 1,
  variantBg: 1,
  imgPosition: "left",
};

export default TextImageLetter;
