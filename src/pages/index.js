import Layout from "../components/Layout/Layout";
import TextImageLetter from "../components/TextImageLetter/TextImageLetter";

const HomePage = () => {
  return (
    <>
      <Layout>
        <TextImageLetter />
        <TextImageLetter
          imgPosition="right"
          variantColor={2}
          variantBg={2}
          text=""
        />
        <TextImageLetter
          imgPosition="left"
          variantColor={3}
          variantBg={3}
          text="Інколи думають, що папуга-нерозлучник може навчитися відтворювати людську мову подібно до хвилястих папужок. Але це є помилкою. Хоча нерозлучник і може навчитися повторювати окремі слова, але в кращому випадку — до десяти слів. Бувають випадки що нерозлучник так і не заговорить. Натомість, він може навчитися імітувати щоденні звуки: телефон, мікрохвильову піч…"
        />
        <TextImageLetter
          imgPosition="right"
          variantColor={1}
          variantBg={4}
          text="Хоча папуги-нерозлучники невеликих розмірів, все ж це не є для них перешкодою бути галасливими. Тому, якщо ви вирішили придбати саме цього птаха, то будьте готові чути спів нерозлучника щоранку. А також він може сповіщати вас про все, що він помічає, і то криком! Інколи нерозлучники можуть кусатися. Якщо таке стається, то можливо, вам потрібно буде навчитися краще розуміти свого птаха. А це, в свою чергу, може допомогти уникнути укусів, які, хоча й не кровоточать, але все-таки є болючими."
        />
        <TextImageLetter
          imgPosition="left"
          variantColor={2}
          variantBg={5}
          text="Цікавою особливістю є те, що пара нерозлучників ніколи не буде сидіти на відстані один від одного. Вони завжди разом, туляться один до одного та доглядають один за другим. Така поведінка є характерною особливістю цих птахів."
        />
        <TextImageLetter
          imgPosition="right"
          variantColor={3}
          variantBg={6}
          text="Цікавою особливістю є те, що пара нерозлучників ніколи не буде сидіти на відстані один від одного. Вони завжди разом, туляться один до одного та доглядають один за другим. Така поведінка є характерною особливістю цих птахів.

          Зазвичай нерозлучники є слухняними та миролюбними. Але для цього необхідно, щоб вони жили в клітці тільки зі своєю парою. А якщо ви поселите в одну клітку нерозлучника з папугою іншої породи — він може стати агресивним, та навіть може заклювати свого сусіда.
          
          
          Існує думка, що папуга-нерозлучник не може жити один. Але це не завжди так. Наприклад, якщо папужка народився в неволі, то він досить спокійно може прожити і сам."
        />
      </Layout>
    </>
  );
};

export default HomePage;