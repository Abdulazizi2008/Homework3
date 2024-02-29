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
            <img src="./public/images/video.png" alt="" />
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
          <img src="./public/images/1.png" alt="" />
          <img src="./public/images/2.png" alt="" />
          <img src="./public/images/3.png" alt="" />
          <img src="./public/images/4.png" alt="" />
          <img src="./public/images/5.png" alt="" />
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
          <img src="./public/images/6.png" alt="" />
          <img src="./public/images/7.png" alt="" />
          <img src="./public/images/8.png" alt="" />
          <img src="./public/images/9.png" alt="" />
          <img src="./public/images/10.png" alt="" />
        </div>
        <div className="btn1">
          <button>Перейти в каталог</button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
