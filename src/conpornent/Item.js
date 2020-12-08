import React from 'react';

import Setup from '../assets/setup.jpg'
import A6P from '../assets/IMG_1.jpg';
import Alice from '../assets/IMG_2.jpg';
import EKF from '../assets/IMG_3.jpg';
import EKF2 from '../assets/IMG_4.jpg';
import EKF3 from '../assets/IMG_5.jpg';
import Tcase from '../assets/IMG_6.jpg';
import A6P2 from '../assets/IMG_7.jpg';
import PM03 from '../assets/IMG_8.jpg';
import t1 from '../assets/IMG_9.jpg';
import t2 from '../assets/IMG_10.jpg';
import t3 from '../assets/IMG_11.jpg';
import './Item.css';


function Item() {
    return (
        <div>
            <section class="cards">
                <article>
                    <img className="article-img" src={t3} alt="imgae" />
                    <p className="article-title"> Inspired by T1 </p>
                </article>
                <article>
                    <img className="article-img" src={t2} alt="image" />
                    <p className="article-title"> Inspired by T1 </p>
                </article>
                <article>
                    <img className="article-img" src={t1} alt="image" />
                    <p className="article-title"> Inspired by T1 </p>
                </article>
                <article>
                    <img className="article-img" src={Tcase} alt="image" />
                    <p className="article-title"> Inspired by T1 </p>
                </article>
                <article>
                    <img className="article-img" src={PM03} alt="image" />
                    <p className="article-title"> Design on the back </p>
                </article>
                <article>
                    <img className="article-img" src={EKF3} alt="image" />
                    <p className="article-title"> EKWB fitting </p>
                </article>
                <article>
                    <img className="article-img" src={EKF2} alt="image" />
                    <p className="article-title"> EKWB fitting </p>
                </article>
                <article>
                    <img className="article-img" src={EKF} alt="image" />
                    <p className="article-title"> EKWB fitting </p>
                </article>
                <article>
                    <img className="article-img" src={Alice} alt="image" />
                    <p className="article-title"> Keyboard Case Design </p>
                </article>
                <article>
                    <img className="article-img" src={A6P2} alt="image" />
                    <p className="article-title"> A 60 Plus Custom </p>
                </article>
                <article>
                    <img className="article-img" src={A6P} alt="image" />
                    <p className="article-title"> A 60 Plus Custom </p>
                </article>
                <article>
                    <img className="article-img" src={Setup} alt="image" />
                    <p className="article-title"> minimal setup </p>
                </article>
            </section>
        </div>
    );
}
export default Item;
