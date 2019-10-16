import React from 'react';

import photo from '../../images_raw/rod-profile.jpg';
import * as styles from './intro.css';

const Intro = () => (
  <article>
    <img src={photo} alt="Rod Hall" />
    <div className="intro">
      Hi, my name is Rod. I live in Whittlesey, Peterborough (UK). I&apos;m currently working full-time as a Technical&nbsp;Lead and
      I have over 14 years of professional software development experience
      (plus what I learned when I was learning to code as a kid on my ZX Spectrum!).
      Having completed a few projects in the past,
      I have recently decided to get back into website development for small local businesses.
    </div>
    <h2>A brief note</h2>
    <div>
      As I do work full-time, I will not be able to complete your project as fast as some other
      website design companies. Therefore, please bear this in mind and get in touch with plenty
      of time ahead before you&apos;d like to go live.
    </div>
    <h2>Prices</h2>
    <div>
      <p>
        Let&apos;s cut to the chase, you&apos;re probably wondering how much this stuff costs.
        Whilst costs will vary depending on the scale of the project, you should budget around
        &pound;500 to &pound;1000 for something simple which consists of a main entry page,
        business information, price list, photo gallery and contact page. If you need something more
        complex such as an online booking system or eCommerce website then the prices will start to
        head north fairly rapidly. At this point, I am probably not the right person for your
        project due to this being a side business for me (It might take me a long time).
        But feel free to ask :)
      </p>
      <p>
        You&apos;ll then need to pay for your domain name registration and hosting which I
        can either do or help you set up. A domain might cost around &pound;10 per year and hosting
        around &pound;100 per year but they could vary depending on what you choose.
      </p>
    </div>
    <h2>Technical bits</h2>
    <div>
      <p>
        For those interested, most of my apps will be written in React.js from the ground up
        and I usually host on Amazon&apos;s S3 service but if you prefer to own your own hosting,
        I can help you set that up.
      </p>
      <p>
        If I host for you, you&apos;ll get an SSL certificate which will allow secure traffic
        over https. I will also forward the http adress to https so that all traffic is forced
        through this route. I&apos;ll use CloudFront which will protect agains ddos&nbsp;attacks
        and serve the site from cache where possible.
      </p>
    </div>
  </article>
);

export default Intro;
