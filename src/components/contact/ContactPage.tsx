import { SiteHeader } from "@/components/SiteHeader";
import { DesignFooter } from "@/components/design/DesignPage";
import { DesignText as T } from "@/components/design/DesignText";
import styles from "./ContactPage.module.css";

export function ContactPage() {
  return (
    <div className={styles.page} id="top">
      <a className="skip" href="#contact-main"><T zh="跳到正文" en="Skip to content" /></a>
      <SiteHeader current="contact" boundaryId="contact-work" />
      <main id="contact-main" className={styles.main}>
        <header className={styles.hero}>
          <h1>说一出品</h1>
        </header>
        <div className={styles.context} id="contact-work">
          <section className={styles.person} aria-labelledby="producer-title">
            <h2 id="producer-title" className={styles.label}><T zh="制片人" en="PRODUCER" /></h2>
            <p className={styles.name}>黄宇</p>
            <p className={styles.channel}><span className={styles.channelLabel}>WeChat</span><span className={styles.wechat}>Yellow-Gangja</span></p>
          </section>
          <section className={styles.person} aria-labelledby="td-title">
            <h2 id="td-title" className={styles.label}>TD</h2>
            <p className={styles.name}>Luo</p>
          </section>
        </div>
      </main>
      <DesignFooter />
    </div>
  );
}
