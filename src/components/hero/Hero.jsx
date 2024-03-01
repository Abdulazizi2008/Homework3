import "./hero.scss";

function Hero() {
  return (
    <div className="container">
      <section className="hero">
        <div className="par1">
          <div className="par2">LEANGROUP - тубы и этикетки</div>
          <div className="par3">Ламинатные тубы</div>
          <div className="par4">
            Используются для производства зубных паст. Широко применяются в
            сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
            химии и DIY (Do-it-Yourself).
          </div>
          <button>Каталог</button>
        </div>
        <div className="par5">
          <svg
            width="62"
            height="10"
            viewBox="0 0 62 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="57" cy="5" r="4.5" stroke="#EF7C00" />
            <circle cx="31" cy="5" r="4.5" stroke="#EF7C00" />
            <circle cx="5" cy="5" r="5" fill="#EF7C00" />
          </svg>
        </div>
      </section>
      <section className="par6">
        <h1>
          О компании <span>LEANGROUP</span>
        </h1>
        <div className="all">
          <div className="part1">
            <img src="/images/video.png" alt="" />
            <svg
              width="74"
              height="73"
              viewBox="0 0 74 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37 0.0983582C16.5674 0.0983582 0 16.3942 0 36.4918C0 56.5894 16.5674 72.8852 37 72.8852C57.4326 72.8852 74 56.5894 74 36.4918C74 16.3942 57.4326 0.0983582 37 0.0983582ZM48.9011 37.0523L30.8636 49.9606C30.7647 50.0305 30.6482 50.0722 30.5267 50.0812C30.4053 50.0902 30.2837 50.0661 30.1753 50.0115C30.0669 49.9569 29.9759 49.874 29.9123 49.7719C29.8487 49.6698 29.8149 49.5524 29.8147 49.4326V23.6322C29.8143 23.5122 29.8477 23.3945 29.9112 23.292C29.9747 23.1895 30.0658 23.1063 30.1744 23.0516C30.283 22.9969 30.4049 22.9729 30.5266 22.9822C30.6482 22.9915 30.7649 23.0337 30.8636 23.1042L48.9011 36.0044C48.9863 36.0637 49.0558 36.1422 49.1038 36.2334C49.1518 36.3245 49.1768 36.4257 49.1768 36.5284C49.1768 36.631 49.1518 36.7322 49.1038 36.8234C49.0558 36.9145 48.9863 36.993 48.9011 37.0523Z"
                fill="#EF7C00"
              />
            </svg>
          </div>
          <div className="part2">
            <p>
              Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
              сегодняшний день является ведущей компанией по производству
              ламинатных и экструзионных туб.{" "}
            </p>{" "}
            <p>
              {" "}
              Имея две технологии – для производства ламинатных и экструзионных
              туб, мы предлагаем вам широкий спектр возможностей. Большим
              преимуществом является собственный печатный цех в ламинате и
              in-line печать в экструзии с возможностью различных дополнительных
              опций декора. Особое внимание уделяется работе с поставщиками для
              контроля и поддержания качества производимой нами продукции.{" "}
            </p>{" "}
            <p>
              С января 2018 года компания стала членом Европейской Ассоциации
              производителей туб (ETMA), что подтверждает сильную позицию бренда
              и на рынке Европы.
            </p>{" "}
          </div>
        </div>
      </section>
      <section className="par7">
        <h1>
          Качество продукции подтверждают <span>сертификаты</span>
        </h1>
        <div className="par8">
          <img src="/images/1.png" alt="" />
          <img src="/images/2.png" alt="" />
          <img src="/images/3.png" alt="" />
          <img src="/images/4.png" alt="" />
          <img src="/images/5.png" alt="" />
        </div>
      </section>
      <section className="par9">
        <h1>
          Наша <span>продукция</span>
        </h1>
        <div className="btns">
          <button>Ламинатные тубы</button>
          <button>Экструзионные тубы</button>
          <button>Другая упаковка</button>
        </div>
        <div className="cards">
          <img src="/images/6.png" alt="" />
          <img src="/images/7.png" alt="" />
          <img src="/images/8.png" alt="" />
          <img src="/images/9.png" alt="" />
          <img src="/images/10.png" alt="" />
        </div>
        <div className="btn1">
          <button>Перейти в каталог</button>
        </div>
      </section>
      <section className="par10">
        <div className="all2">
          <div className="par11">
            Получить подробную <span>информацию</span>
          </div>
          <div className="par12">
            Просто заполните форму, наш менеджер свяжется с вами в ближайшее
            время
          </div>
        </div>
        <div className="par13">
          <form>
            <label htmlFor="name">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5625 7.31514C8.63379 7.31514 10.3125 5.67781 10.3125 3.65757C10.3125 1.63733 8.63379 0 6.5625 0C4.49121 0 2.8125 1.63733 2.8125 3.65757C2.8125 5.67781 4.49121 7.31514 6.5625 7.31514ZM9.1875 8.22953H8.69824C8.04785 8.521 7.32422 8.68673 6.5625 8.68673C5.80078 8.68673 5.08008 8.521 4.42676 8.22953H3.9375C1.76367 8.22953 0 9.94973 0 12.07V13.2587C0 14.0159 0.629883 14.6303 1.40625 14.6303H11.7188C12.4951 14.6303 13.125 14.0159 13.125 13.2587V12.07C13.125 9.94973 11.3613 8.22953 9.1875 8.22953Z"
                  fill="#EF7C00"
                />
              </svg>
            </label>
            <input type="text" name="name" id="rerr" placeholder="Ваше имя" />
          </form>
          <form>
            <label htmlFor="name">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7916 12.7009L12.6767 14.747C12.3646 15.0593 11.9508 15.1651 11.5478 15.1656C9.76565 15.1135 8.08113 14.2597 6.69803 13.3829C4.42775 11.772 2.34468 9.77454 1.0373 7.36069C0.535877 6.34849 -0.0524727 5.05699 0.00373975 3.92717C0.00875225 3.50216 0.126177 3.08504 0.433065 2.81109L2.54789 0.749427C2.98704 0.385097 3.41173 0.511063 3.69275 0.935439L5.39414 4.08219C5.57321 4.45499 5.47049 4.85442 5.20331 5.1208L4.42416 5.88035C4.37606 5.94462 4.34544 6.01777 4.34466 6.09738C4.64344 7.2254 5.54858 8.26509 6.34818 8.9806C7.14776 9.69611 8.00724 10.6655 9.12289 10.895C9.26079 10.9325 9.4297 10.9457 9.52836 10.8562L10.4347 9.95715C10.7472 9.72618 11.1983 9.61328 11.5319 9.80215H11.5478L14.6166 11.5693C15.0672 11.8447 15.1141 12.377 14.7916 12.7009Z"
                  fill="#EF7C00"
                />
              </svg>
            </label>
            <input type="text" name="name" id="rerr" placeholder="Ваше имя" />
          </form>
        </div>
        <div className="par14">
          <form>
            <input
              type="comment"
              name="gg"
              id="comm"
              placeholder="Комментарий"
            />
          </form>
        </div>
        <div className="btn3">
          <button>Получить информацию</button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
