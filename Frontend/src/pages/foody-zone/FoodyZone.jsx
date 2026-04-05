import styles from "./FoodyZone.module.css";
import { MENU_TYPES } from "../../constants/constants";

const FoodyZone = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.heading}>
          <h1>
            F<span>oo</span>dy Z<span>o</span>ne
          </h1>
          <p>Search Bar</p>
        </div>
        <nav className={styles.nav}>
          {MENU_TYPES.map((item) => {
            return (
              <button
                key={item?.id}
                onClick={(e) => {
                  console.log(item?.name);
                }}
              >
                {item?.name}
              </button>
            );
          })}
        </nav>
      </header>

      <main className={styles.main}>
        <img src="/FOODY_ZONE_bg.png" />
      </main>
    </div>
  );
};

export default FoodyZone;
