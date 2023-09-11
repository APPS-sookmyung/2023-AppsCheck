import { PageLayout } from "../../components";
import styles from "./AdminPage.module.css";

const AdminPage =() => {
    return(
        <PageLayout>

    <div className={styles.div}>
      <div className={styles.background} />
      <div className={styles.statusBar}>
        <img className={styles.connectionsIcon} alt="wifi" src="/connections.svg" />
        <div className={styles.time}>
          <div className={styles.time1}>09:27</div>
        </div>
      </div>
      <div className={styles.appscheck}>AppsCheck</div>
      <div className={styles.boxParent}>
        <div className={styles.box}>
          <div className={styles.boxChild} />
          <div className={styles.div1}>2023 - 05 - 11</div>
          <img className={styles.boxItem} alt="" src="/polygon-6.svg" />
          <img className={styles.boxInner} alt="" src="/polygon-5.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-28.png"
          />
          <img className={styles.boxChild1} alt="" src="/rectangle-30.png" />
          <img className={styles.boxChild2} alt="" src="/rectangle-31.png" />
          <img className={styles.boxChild3} alt="" src="/rectangle-32.png" />
          <div className={styles.div2}>출석</div>
          <div className={styles.div3}>21</div>
          <div className={styles.div4}>2</div>
          <div className={styles.div5}>1</div>
          <div className={styles.div6}>4</div>
          <div className={styles.div7}>지각</div>
          <div className={styles.div8}>결석</div>
          <div className={styles.div9}>미정</div>
        </div>
        <div className={styles.box1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.apps}>Apps</div>
          <img className={styles.icon} alt="" src="/redoIcon.png" />
          <div className={styles.list}>
            <div className={styles.div10}>김눈송6</div>
            <div className={styles.div11}>김눈송5</div>
            <div className={styles.div12}>김눈송4</div>
            <div className={styles.div13}>김눈송3</div>
            <div className={styles.div14}>김눈송2</div>
            <div className={styles.div15}>김눈송1</div>
            <div className={styles.pm}>
              <span className={styles.pmTxt}>
                <p className={styles.p}>출석</p>
                <p className={styles.pm1}>17:58:05 pm</p>
              </span>
            </div>
            <div className={styles.pm2}>
              <span className={styles.pmTxt}>
                <p className={styles.p}>출석</p>
                <p className={styles.pm1}>18:00:05 pm</p>
              </span>
            </div>
            <div className={styles.pm4}>
              <span className={styles.pmTxt}>
                <p className={styles.p}>출석</p>
                <p className={styles.pm1}>17:35:00 pm</p>
              </span>
            </div>
            <div className={styles.div16}>미정</div>
            <div className={styles.div17}>
              <span className={styles.pmTxt}>
                <p className={styles.p}>결석</p>
                <p className={styles.pm1}>사유 : 가족 행사</p>
              </span>
            </div>
            <div className={styles.div18}>지각</div>
          </div>
          <img className={styles.boxChild4} alt="" src="/vector-8.svg" />
        </div>
      </div>
      <div className={styles.image4Parent}>
        <img className={styles.image4Icon} alt="" src="/public/images-4.png" />
        <img className={styles.image3Icon} alt="" src="/image-3.png" />
        <img className={styles.image2Icon} alt="" src="/image-2.png" />
        <img className={styles.image1Icon} alt="" src="/image-1.png" />
      </div>
    </div>
        </PageLayout>
    );
};

export default AdminPage;