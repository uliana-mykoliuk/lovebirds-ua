import Layout from "../components/Layout/Layout";

import CageImg from "../assets/care-page/cage.webp";
import FigureCageImg from "../assets/care-page/figure-cage.webp";
import RoundCageImg from "../assets/care-page/round-cage.webp";
import WoodCageImg from "../assets/care-page/wood-cage.webp";
import SmallCageImg from "../assets/care-page/small-cage.webp";
import GoodCageImg from "../assets/care-page/good-cage.webp";

const CarePage = () => {
  return (
    <Layout
      titleText="Догляд"
      subtitleText="Зробимо життя пернатиків комфортним"
      backgroundVariant={4}
    >
      <div>
        <h3>Що потрібно знати до покупки папуги</h3>
        <p>
          Перед покупкою папуг потрібно ознайомитись з інформацією щодо їх
          утримання, для того щоб проживання улюбленців було комфортним,
          упевнитися, що ви можете створити комфортне середовище для ваших
          нерозлучників і тільки тоді приносити пташок в свій дім. Пам'ятайте,
          нерозлучники, як і будь які інші тваринки, не іграшки і не декорація,
          це маленькі життя які залежать від вас - ви несете за них
          відповідальність.
          <br />
          Отож облаштовуємо середовище для наших пернатих друзів
        </p>
        <h4>Обираємо клітку</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
          }}
        >
          <div>
            <h5>Не можна</h5>
            <img
              src={RoundCageImg}
              alt=""
              style={{ float: "left", height: "100px", paddingRight: "20px" }}
            />
            <p>
              <b>Кругла</b> - така клітка погано впливає на психіку птахи:
              викривляє простір навколо клітки, нема кутка, де папужка міг би
              почувати себе безпечно, пташка втрачає орієнтацію в просторі,
              перебуває в постійному стресі, що впливає на її здоров'я.
            </p>
            <img
              src={SmallCageImg}
              alt=""
              style={{ float: "right", height: "100px", paddingLeft: "20px" }}
            />
            <p>
              <b>Маленька</b> - маленькі клітки годяться для карантину чи
              переноски, але аж ніяк не для постійного житла. Пташка повинна
              мати можливість розправити крила, перелетіти з жердинки на
              жердинку так щоб це не сковувало рухів.
            </p>
            <img
              src={WoodCageImg}
              alt=""
              style={{ float: "left", height: "100px", paddingRight: "20px" }}
            />
            <p>
              <b>Дерев'яна</b> - дерев'яні погані з точки зору практичності.
              По-перше, клітку треба мити щотижня - дерево швидко стане
              непридатним. По-друге, при багатьох заразних хворобах дерево
              заражається паразитами. По-третє дерево не можна обробити
              протипаразитними засобами, отрута просто вбереться в нього і
              пташка може отруїтися.
            </p>
            <img
              src={FigureCageImg}
              alt=""
              style={{ float: "right", height: "100px", paddingLeft: "20px" }}
            />
            <p>
              <b>Фігурна</b> - папужки люблять лазити по прутах клітки,
              чіпляючись за них дзьобом і кігтями. Різні згини, кути, лишні
              прикраси можуть бути небезпечні - пташка може застрягти і
              поранитись
            </p>
          </div>
          <div>
            <h5>Можна</h5>
            <p>
              <b>Розміри.</b> Головним параметром клітки являється довжина
              (папугайчики люблять перестрибувати з жердинки на жердинку, а не
              летіти в висоту). Бажано щоб прути клітки були горизонтальними.
              Відстань між ними не більше 1,5см. Клітка повинна бути прямокутної
              форми з висувним піддоном. Не повинно бути петель, гачків, гострих
              країв, які становитимуть небезпеку для пташки. Дверцята повинні
              добре закриватися. Для пари нерозлучників оптимальна довжина
              клітки від 80см ширина 40см висота 90см
            </p>
            <p>
              <b>Матеріал</b>. Прути клітки не повинні бути оцинкованими,
              містити свинець, мідь - вони викликають отруєння. Не годяться
              також дерев'яні і бамбукові клітки.
            </p>
            <img
              src={GoodCageImg}
              alt=""
              style={{ paddingTop: "20px", height: "250px" }}
            />
          </div>
        </div>
        <h4>Облаштування клітки</h4>
        <p>
          В клітці для одного папуги повинні бути
          <i>(при утриманні пари всі предмети дублюються)</i>:
          <img
            src={CageImg}
            alt=""
            style={{ float: "right", paddingLeft: "30px", height: "350px" }}
          />
          <ul>
            <li>
              Жердинки (3шт. і більше): Гілки для жердинок зрізають з живих
              дерев, обробляють і встановлюють в клітці. Вони повинні
              розміщуватися так, щоб на нижні жердинки не потрапляв послід і
              пташка могла перестрибувати з однієї гілки на іншу
            </li>
            <li>
              Годівнички (2-3шт.): Одна для зернової суміші, друга для
              мінеральних добавок (вугілля, глина), третя пригодиться для
              додаткових продуктів (фрукти, овочі, каші). В годівнички не
              повинен потрапляти послід, пташці повинно бути комфортно до них
              підходити.
            </li>
            <li>
              Поїлка: Найкраще підходить автопоїлка. Але не всі пташки п'ють з
              них, в такому випадку використовується звичайна годівничка чи
              миска. Пташці має бути зручно підходити до поїлки. Поїлка може
              бути одна на двох пташок.
            </li>
            <li>
              Мінеральний камінь, сепія: Бажана наявність і того і іншого.
              Встановлюються так щоб пташці було зручно їх гризти.
            </li>
            <li>Зернова суміш: Завжди повинна бути в годівничці</li>
            <li>
              Іграшки та качелі: Їх кількість залежить від розмірів клітки.
              Вибирати потрібно залежно від вподобань папужки. Не рекомендується
              дзеркало, пластмасові пташки, іграшки зі штучних ниток і
              фарбованого дерева
            </li>
            <li>
              Фруктотримач: Знадобиться для годування фруктами і закріплення
              сепії/каменю
            </li>
            <li>
              Купальня: Купальня з водою ставиться тільки на час купання. Не всі
              пташки люблять специфічні купелі, багато надають перевагу
              звичайному блюдечку.
            </li>
            <li>
              Погризушки: Плетуться з тонких гілочок дозволених дерев, щоб птаха
              гризла кору і сточувала дзьоб.
            </li>
            Рекомендується забрати з клітки решітку на дні (якщо вона є): відомі
            випадки, коли птахи застрягали, ламали лапки, крила.
          </ul>
        </p>
        <p>
          Отож, ми облаштували середовище для папужки і вирішили принести
          нерозлучників додому, процес адптації дуже важливий. Переїзд для
          папуги - стрес, потрібно дати зрозуміти папузі що він в безпеці.
        </p>
        <h4>Перші дні вдома</h4>
        <p>
          <b>Важливо</b>. В період адаптації папуг не можна тривожити, вони і
          так налякані і відчувають сильний стрес, на якийсь час залиште їх в
          спокої, любуйтесь здалеку, нехай освояться. Підходьте до клітки тільки
          для того щоб змінити їжу та воду. Не робіть різких рухів та не
          галасуйте. Перший тиждень не прибирайте клітку щоб не турбувати папуг.
        </p>
        <p>
          Адаптація може тривати від кількох днів до 2-3 тижнів. В перші дні ви
          можете зіткнутися з такими проблемами:
          <ol>
            <li>
              <b>Папуга сидить на одному місці, не рухається, мовчить.</b>
              Це стрес від зміни обстановки. Як тільки папуга трохи
              заспокоїться, оглянеться, він буде шукати їжу і воду.
            </li>
            <li>
              <b>Папуга не їсть, не знаходить годівничку.</b> Будьте готові до
              того, що перші кілька годин, а то й кілька діб. Якщо птаха не
              знаходить годівничку, на перший час повісьте в ще одному місці,
              поставте на підлогу. Але, як правило, годівнички вони завжди
              знаходять.
            </li>
            <li>
              <b>Папуга не п'є воду.</b> Птахи п'ють мало і рідко, тому помітити
              це складно. Якщо ж ви все таки підозрюєте, що пташка не має
              поняття про автопоїлку, поставте на перший час додаткову мисочку з
              водою на дно клітки.
            </li>
            <li>
              <b>У папуги рідкий послід.</b> Через стрес, зміну обстановки у
              папуги буває рідкий послід. Через кілька днів послід повинен
              нормалізуватися.
            </li>
            <li>
              <b>
                Папуга турбується, метається по клітці, щось ковиряє в кутку,
                викручується, ниряє в годівнички з кормом.
              </b>
              Це означає що папуга хоче вибратися, вернутися до родичів. Це
              потрібно перетерпіти, випускати папугу не можна. Папузі треба
              освоїтися, вивчити простір навколо, кімнату. Випускати вперше
              можна тільки через 2-3 тижні після покупки.
            </li>
          </ol>
          Якщо при вашій появі папуга хвилюється метушиться, а у вас нема
          можливості залишити його самого, завішайте частину клітки легкою
          тканиною, щоб він вас не бачив, так йому буде спокійніше. Якщо ви
          бачите що птаха нормально реагує на вашу присутність, то можна
          поговорити з нею спокійним, лагідним голосом.
        </p>
        <h4>Приручення</h4>
        <p>
          Запам'ятайте: в перший тиждень перебування птахів у вах підходити до
          них можна тіль для заміни їжі і води.
        </p>
        <p>
          Починати приручати можна тільки тоді коли папуга освоїться, почне
          грати, не буде боятися їсти в вашій присутності. Процес приручення
          включає в себе кілька етапів, їх тривалість індивідуальна для кожної
          пташки.
          <ol>
            <li>
              Почніть говорити з папугою здалеку, спокійним лагідним голосом.
            </li>
            <li>
              Говоріть сидячи біля клітки. Якщо папуга закриває очка і позіхає,
              значить він вас уважно слухає
            </li>
            <li>Говоріть сидячи біля клітки і тримаючи руку біля клітки</li>
            <li>
              Говоріть сидячи біля клітки, при цьому тримайте ласощі в клітці
              біля входу і терпеливо чекайте.
            </li>
            <li>
              Говоріть, сидячи біля клітки, при цьому повільно, обережно
              протягуйте руку з ласощами до папуги, чекайте. Потрібно бути
              терпеливим, потрібно добитися щоб папужик поїв з руки.
            </li>
            <li>
              Коли папуга вже впевнено клює корм з руки, поступово, по 1см
              відсувайте руку. Потрібно добитися, щоб він спочатку поставив
              лапку на руку, потім перестрибував на руку. Результат досягається
              не одразу, можуть знадобитися тижні і навіть місяці.
            </li>
            <li>
              Коли птаха впевнено йде на контакт в клітці, пробуйте приручати
              при польотах, пропонуйте руку з кормом, піднімайте руку над
              головою і рухайте пальцями. Памятайте: годувати папугу поза
              кліткою не можна, тідьки пригощати.
            </li>
            Якщо птаха на одній із стадій проявляє агресію - повертаємося на
            крок назад відпрацьовуючи його.
          </ol>
        </p>
        <h4>Помилки в прирученні</h4>
        <p>
          <b>Частіше всього власники папуг допускають наступні помилки:</b>
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
          }}
        >
          <div>
            <ol>
              <li>
                З перших днів нові власники не відходять від папуг, заглядають
                до них, пхають руки в клітку, переставляють клітку з місця на
                місце, постійно тривожать птахів. В результаті через неправильно
                проведений процес адаптації, птахи не перестають боятися
                власника і як наслідок починають метушитися і забиватися в куток
                кожен раз коли власник наближається.
              </li>
              <li>
                Нерідко власники хапають птахів руками, щоб винести з клітки,
                погладити і т.д. Це недопустимо. Якщо папуга дозволив себе
                зловити і терпить ваші "ласки", це означає що папуга дуже
                наляканий і боїться спротиву, або ж він хворий і в нього нема на
                це сил. Ніколи не беріть птахів в руки за виключенням випадків
                лікування.
              </li>
              <li>
                Багато власників намагаються погладити пташку, почухати. Цього
                робити не можна. Папужик - не кошеня, як правило, птахи дуже
                негативно відносяться до дотиків, навіть один одному вони чешуть
                тільки голову. З часом тільки абсолютно приручена пташка може
                дозволити вам сама почесати за шийкою, щічки, проти росту пір'я.
                Але це дозволяють одиниці.
              </li>
              <li>
                Випускаючи на прогулянку власники починають ганяти папуг по
                кімнаті, щоб нагодувати, доторкнутися чи спіймати, щоб повернути
                в клітку. Подібна поведінка не допустима, якщо ви хочете щоб
                пташка стала ручною. Пташку потрібно навчити заходити в клітку
                самостійно.
              </li>
              <li>
                На багатьох етапах приручення власники намагаються прискорити
                події - руку з кормом намагаються підсунути під ніс,
                підштовхнути нею папугу, але це тільки сповільнить процес. Рука
                не повинна рухатись. Будь який рух господаря може налякати
                пернатих.
              </li>
            </ol>
          </div>
          <div>
            <ol start={6}>
              <li>
                Коли пташка намагається кусати за руку, власники починають
                кричати і дьоргатися, зганяють птаху - в результаті папуга знову
                наляканий і на контакт йти не хоче, перший час вам треба
                героїчно терпіти, пташка таким чином вас перевіряє
              </li>
              <li>
                Іноді, коли пташка недобре себе почуває чи просто відпочиває і
                не налаштована на спілкування, власники, не звертаючи на це
                увагу, продовжують стояти на своєму - це не правильно, потрібно
                прислухатися до побажань пташки. це прискорить процес
                приручення.
              </li>
              <li>
                Багато вважають, що пташку можна швидше приручити якщо посадити
                її в маленьку клітку, забрати в неї всі розваги, іграшки, не
                випускати на прогулянку. Пташка в таких умовах буде почувати
                себе некомфортно, що може викликати агресію (пташка буде
                постійно намагатись вибратись, чи намагатиметься скинути
                кормушки, поїлки, гризти прути і т.д.) чи навпаки апатію. При
                постійному стресі у папуги буде поганий настрій, і ні про яке
                прирученя й мова не йтиме.
              </li>
              <li>
                Хтось для досягнення більш швидкого ефекту не годує пташку в
                розрахунку на те, що голодною вона візьме корм з рук. Таке
                приручення може дати зворотній ефект - людина в папуги
                асоціюватиметься з голодом і він почне боятись людини. Пташку не
                можна морити голодом, корм завжди повинен бути в клітці. У папуг
                дуже швидки обмін речовин, навіть короткочасне голодування може
                нанести непоправної шкоди здоров'ю папужки.
              </li>
            </ol>
          </div>
        </div>
        <h4>Харчування папужок</h4>
        <p>
          Ми розібралися з тим що потрібно для наших папужок і як їх приручити,
          тепер розглянемо одну із основних тем - харчування. Багато власників
          пернатиків допускають різних помилок в годуванні - найчастішою є хибна
          думка, що зернової суміші вистачає для повноцінного харчування
          папужки. Також багато власників ведуться на різні маркетингові пастки
          купуючи шкідливі ласощі для папуг, які можуть навіть викликати
          отруєння. Отож давайте розглянемо, що потрібно включити в раціон наших
          пташок.
        </p>
        <p>
          Здорове харчування нерозлучників повинно включати:
          <ul>
            <li>Зерновий корм</li>
            <li>Пророщений корм і зелень</li>
            <li>Фрукти, ягоди, овочі</li>
            <li>Гілковий корм</li>
            <li>Каші</li>
            <li>Вода, соки</li>
          </ul>
          Що ще важливо знати?
          <ul>
            <li>Фрукти, ягоди і овочі найважливіша складова раціону</li>
            <li>
              Повноцінне харчування можливе тільки при різноманітному кормі
            </li>
            <li>Людська їжа небезпечна для папуг</li>
          </ul>
        </p>
        <h5>Фрукти і овочі</h5>
        <p>
          В щоденному раціоні папугайчика обов'язково повинні бути свіжі фрукти,
          овочі, ягоди, зелень. Можна давати заморожені овочі/фрукти -
          попередньо розморозивши їх до кімнатної температури.
        </p>
        <p>
          Доволі часто папуги відмовляються від нових продуктів, бояться їх.
          Запасіться терпінням. пропонуйте продукт знову і знову, кожен день в
          різних формах і видах: можна різати дольками, терти на терці, чи
          зробити пюре. Натерті овочі можна злегка присипати зерном, щоб
          залучити папужок. Рано чи пізно цікавість візьме гору.
        </p>
        <p>
          Для закріплення фруктів можна використовувати спеціальні прищепки.
          Можна закріпляти фрукти між прутами клітки. Не залишайте фрукти і
          овочі в клітці на довго - вони швидко псуються.
        </p>
        <p>
          Фрукти і овочі з магазину можуть бути оброблені хімікатами, тому варто
          чистити їх від шкірки. Ті які швидко псуються давати тільки в сезон,
          без нітратів.
        </p>
        <p>
          Перед подачею фрукти/овочі потрібно ретельно промити, очистити від
          кісточок.
        </p>
        <h5>Не можна давати</h5>
        <ul>
          <li>охолодженні овочі/фрукти</li>
          <li>варені овочі</li>
          <li>консервовані овочі/фрукти</li>
          <li>
            овочі/фрукти з підгнившими боками (навіть якщо обрізати їх, в таких
            овочах/фруктах вже утворились токсини).{" "}
          </li>
        </ul>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "30px",
            }}
          >
            <div>
              <h6>можна</h6>
              <p>Фрукти і ягоди</p>
              <ul>
                <li>Абрикос</li>
                <li>Айва</li>
                <li>Ананас</li>
                <li>Апельсин</li>
                <li>Кавун</li>
                <li>Банан</li>
                <li>Вишня</li>
                <li>Груша</li>
                <li>Ожина</li>
                <li>Інжир</li>
                <li>Ківі</li>
                <li>Полуниця</li>
                <li>Агрус</li>
                <li>Лимон</li>
                <li>Мандарин</li>
                <li>Малина</li>
                <li>Нектарин</li>
                <li>Обліпиха</li>
                <li>Персик</li>
                <li>Помело</li>
                <li>Горобина</li>
                <li>Слива</li>
                <li>Смородина</li>
                <li>Фейхоа</li>
                <li>Фінік</li>
                <li>Черешня</li>
                <li>Чорниця</li>
                <li>Шипшина</li>
                <li>Яблуко</li>
              </ul>
            </div>
            <div>
              <h6 style={{ color: "transparent" }}>..</h6>
              <p>Овочі</p>
              <ul>
                <li>Бобові</li>
                <li>Броколі</li>
                <li>Кабачок</li>
                <li>Кольрабі</li>
                <li>Кукурудза</li>
                <li>Монгольд</li>
                <li>Морква</li>
                <li>Огірок</li>
                <li>Болгарський перець</li>
                <li>Помідор</li>
                <li>Ріпа</li>
                <li>Салат</li>
                <li>Буряк</li>
                <li>Турнепс</li>
                <li>Гарбуз</li>
                <li>Пекінська капуста</li>
                <li>Цвітна капуста</li>
                <li>Цукіні</li>
              </ul>
            </div>
          </div>
          <div>
            <h6>Не можна</h6>
            <ul>
              <li>Авокадо</li>
              <li>Баклажан</li>
              <li>Картопля</li>
              <li>Цибуля</li>
              <li>Манго</li>
              <li>Горіхи</li>
              <li>Папая</li>
              <li>Білокачанна капуста</li>
              <li>Редис</li>
              <li>Редька</li>
              <li>Кріп</li>
              <li>Хурма</li>
              <li>Часник</li>
              <li>Щавель</li>
              <li>Петрушка</li>
            </ul>

            <h6>В невеликих кількостях можна</h6>
            <ul>
              <li>Виноград</li>
              <li>Гранат</li>
              <li>Диня</li>
              <li>Рукола</li>
              <li>Шпинат</li>
            </ul>
            <h6>Сухофрукти можна тільки домашнього виробництва</h6>
          </div>
        </div>
        <p>
          Отже ми розглянули основи необхідні для утримання папуг, надіюсь це
          допоможе вам і вашим пернатим друзям. Згодом інформацію по догляду
          буде поповнено
        </p>
      </div>
    </Layout>
  );
};

export default CarePage;
