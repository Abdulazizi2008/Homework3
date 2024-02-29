import "./header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src="./public/images/lll.png" alt="logo" />
          </a>
          <div className="nav-items">
            <a className="nav-item">
              Продукция{" "}
              <svg
                width="1"
                height="29"
                viewBox="0 0 1 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="0.499999"
                  y2="28.5"
                  stroke="#00103D"
                  stroke-opacity="0.12"
                />
              </svg>
            </a>
            <a className="nav-item">
              Сертификаты
              <svg
                width="1"
                height="29"
                viewBox="0 0 1 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="0.499999"
                  y2="28.5"
                  stroke="#00103D"
                  stroke-opacity="0.12"
                />
              </svg>
            </a>
            <a className="nav-item">
              Наша команда
              <svg
                width="1"
                height="29"
                viewBox="0 0 1 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="0.499999"
                  y2="28.5"
                  stroke="#00103D"
                  stroke-opacity="0.12"
                />
              </svg>
            </a>
            <a className="nav-item">
              Новости
              <svg
                width="1"
                height="29"
                viewBox="0 0 1 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="0.499999"
                  y2="28.5"
                  stroke="#00103D"
                  stroke-opacity="0.12"
                />
              </svg>
            </a>
            <a className="nav-item">
              Вакансии
              <svg
                width="1"
                height="29"
                viewBox="0 0 1 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="0.499999"
                  y2="28.5"
                  stroke="#00103D"
                  stroke-opacity="0.12"
                />
              </svg>
            </a>
            <a className="nav-item">
              Контакты
              <svg
                width="1"
                height="29"
                viewBox="0 0 1 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="0.499999"
                  y2="28.5"
                  stroke="#00103D"
                  stroke-opacity="0.12"
                />
              </svg>
            </a>
          </div>
          <button class="menu">
            <img src="./public/images/ggg.svg" alt="" />
          </button>
          <div className="nav-items2">
            <a href="#" className="nav-imem2">
              RU
            </a>
            |
            <a href="#" className="nav-imem2">
              EN
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
