/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const About = ({ className = 'about', id = 'about' }) => (
  <div className={className} id={id}>
    <h5 className={`${className}__title`} id={`${id}__title`}>athena</h5>
    <div className={`${className}__box`} id={`${id}__box`} />
    <h4 className={`${className}__header`} id={`${id}__header`}>what is athena?</h4>
    <p className={`${className}__text`} id={`${id}__text`}>
      Pre-debut Project:
      LOONA’s original concept was to execute their debut project. Each month,
      a new member was revealed and released a solo title track,
      usually accompanied by a duet with a previous member. HeeJin was announced as
      the first girl in 2016, fol
      lowed by HyunJin, HaSeul, and YeoJin. After a few members were announc
      ed, they would then form a sub-unit, which would release a mini album and usually a repackage.
      HeeJin, HyunJin, and HaSeul formed LOONA 1/3, along with ViVi, who was reve
      aled for LOONA 1/3’s debut. ViVi released her solo between the debut and repackage albums. Ki
      m Lip, JinSoul (who was teased as a featured singer on ViVi’s album), and Choerry then
      joined and formed OD
      D EYE CIRCLE. Yves, Chuu, Go Won, and HyeJu, then known as Olivia Hye, then joined and fo
      rmed LOONA yyxy. With all twelve members and sub-units revealed, LOONA made t
      heir debut as a full group.
    </p>
    <div className={`${className}__back`} id={`${id}__back`}>
      <Link className={`${className}__back__button`} id={`${id}__back__button`} to="/" />
    </div>
  </div>
);

export default About;

About.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
