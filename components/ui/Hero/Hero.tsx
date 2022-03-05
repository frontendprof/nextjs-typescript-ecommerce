import { FC } from 'react';
import Link from 'next/link';

import { Container } from '@components/ui';

import s from './Hero.module.css';

interface Props {
  description: string;
  headline: string;
}
const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div style={{ background: 'black' }}>
      <Container el="div">
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div className={s.wrap}>
            <p className={s.description}>{description}</p>
            <Link href="/">
              <a className={s.link}>Read More</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
