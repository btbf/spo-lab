import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'サイドチェーンバリデータ',
    Svg: require('@site/static/img/Server-bro.svg').default,
    description: (
      <>
        Midnightを始めとするカルダノサイドチェーンバリデータ構築・運用技術サポート
      </>
    ),
  },
  {
    title: 'ミスリル・プロトコル',
    Svg: require('@site/static/img/Server status-pana.svg').default,
    description: (
      <>
        ミスリルノードの構築・運用技術サポート
      </>
    ),
  },
  {
    title: 'カルダノエコシステムTip',
    Svg: require('@site/static/img/Multi-device targeting-rafiki.svg').default,
    description: (
      <>
        カルダノエコシステム各プロジェクトが実施するSPO利用技術サポート(Scooper,Dripper,NuNet,etc...)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="announcementInner_RsrQ">
          カルダノブロックチェーンは今後も新技術導入によってSPO自身の活動範囲を拡大することが可能です。
          BTBF SPO Lab.ではワンランク上の活動を希望するSPOをサポートします。
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
