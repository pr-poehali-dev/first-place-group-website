const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-3xl font-bold mb-2">Политика конфиденциальности</h1>
        <p className="text-muted-foreground mb-10">Последнее обновление: 22 июня 2026 г.</p>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">1. Общие положения</h2>
          <p className="text-muted-foreground leading-relaxed">
            Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных физических лиц (далее — «Пользователи»), которые используют сайт и сервисы ИП Жихарев А.С. (далее — «Оператор»).
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Политика разработана в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», а также иными применимыми нормативными правовыми актами Российской Федерации.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">2. Оператор персональных данных</h2>
          <p className="text-muted-foreground leading-relaxed">
            Оператором персональных данных является:<br />
            <strong className="text-foreground">ИП Жихарев А.С.</strong><br />
            ОГРНИП: 316619600189924<br />
            ИНН: 616405779815<br />
            Деятельность рекламных агентств.<br />
            Контактный e-mail: <span className="text-primary">alex500leb@yandex.ru</span>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">3. Состав обрабатываемых персональных данных</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">Оператор может обрабатывать следующие категории персональных данных:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
            <li>Фамилия, имя, отчество;</li>
            <li>Адрес электронной почты;</li>
            <li>Номер телефона;</li>
            <li>Наименование организации;</li>
            <li>Данные, автоматически собираемые при посещении сайта (IP-адрес, тип браузера, cookie-файлы, страницы посещения).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">4. Цели обработки персональных данных</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">Персональные данные обрабатываются в следующих целях:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
            <li>Обработка заявок и обращений Пользователей;</li>
            <li>Заключение и исполнение договоров об оказании услуг;</li>
            <li>Направление коммерческих предложений, информационных и маркетинговых материалов (с согласия Пользователя);</li>
            <li>Улучшение качества работы сайта и сервисов Оператора;</li>
            <li>Исполнение требований законодательства Российской Федерации.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">5. Правовые основания обработки</h2>
          <p className="text-muted-foreground leading-relaxed">
            Обработка персональных данных осуществляется на основании согласия субъекта персональных данных (ст. 6, ч. 1, п. 1 Федерального закона № 152-ФЗ), а также в случаях, предусмотренных законодательством Российской Федерации. Отправляя форму обратной связи на сайте, Пользователь подтверждает своё согласие на обработку персональных данных в соответствии с настоящей Политикой.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">6. Порядок и условия обработки</h2>
          <p className="text-muted-foreground leading-relaxed">
            Оператор обрабатывает персональные данные с использованием средств автоматизации и без таковых. Срок хранения персональных данных определяется целями их обработки и требованиями законодательства, но не превышает 5 лет с момента последнего взаимодействия с Пользователем, если иное не установлено законом.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий с ними.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">7. Передача персональных данных третьим лицам</h2>
          <p className="text-muted-foreground leading-relaxed">
            Оператор не передаёт персональные данные Пользователей третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации, либо когда Пользователь дал явное согласие на такую передачу.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">8. Использование cookie-файлов</h2>
          <p className="text-muted-foreground leading-relaxed">
            Сайт использует cookie-файлы для обеспечения его корректной работы, анализа посещаемости и персонализации контента. Пользователь вправе отключить cookie-файлы в настройках браузера. Отключение cookie может повлиять на функциональность отдельных разделов сайта.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">9. Права субъекта персональных данных</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">В соответствии с Федеральным законом № 152-ФЗ Пользователь имеет право:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
            <li>Получать информацию об обработке своих персональных данных;</li>
            <li>Требовать уточнения, блокирования или уничтожения персональных данных;</li>
            <li>Отозвать согласие на обработку персональных данных;</li>
            <li>Обжаловать действия (бездействие) Оператора в уполномоченный орган по защите прав субъектов персональных данных (Роскомнадзор).</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Для реализации своих прав Пользователь может направить письменный запрос по адресу электронной почты Оператора.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">10. Изменения в Политике конфиденциальности</h2>
          <p className="text-muted-foreground leading-relaxed">
            Оператор вправе вносить изменения в настоящую Политику в одностороннем порядке без предварительного уведомления Пользователей. Новая редакция Политики вступает в силу с момента её размещения на сайте. Рекомендуем периодически проверять страницу Политики на предмет обновлений.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">11. Контактная информация</h2>
          <p className="text-muted-foreground leading-relaxed">
            По всем вопросам, связанным с обработкой персональных данных, обращайтесь:<br />
            E-mail: <span className="text-primary">alex500leb@yandex.ru</span>
          </p>
        </section>

        <div className="border-t border-border pt-8 mt-10">
          <button
            onClick={() => window.close()}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Закрыть страницу
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;