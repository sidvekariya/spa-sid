import React from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import logo from "@/public/images/heroLogo.svg";
import heroGirl from "@/public/images/heroImg.png";
import Button from "./Button";

import { Work_Sans } from "@next/font/google";
import { Playfair_Display } from "@next/font/google";

const worksans = Work_Sans({ subsets: ["latin"] });
const PlayfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
    return (
        <div className={styles.heroContent}>
            <div className={styles.left}>
                <div className={styles.titleLogo}>
                    <Image
                        className={styles.logo}
                        src={logo}
                        alt="company logo"
                    ></Image>
                    <div style={worksans.style} className={styles.text}>
                        The Day Beauty
                    </div>
                </div>

                <div style={PlayfairDisplay.style} className={styles.title}>
                    Be <span className={styles.greenText}>Beautiful</span>
                    <div>You need time for Perfection</div>
                </div>

                <div className={styles.buttons}>
                    <div>
                        <Button
                            text="Become a member"
                            backgroundColor="green"
                        />
                    </div>
                    <div>
                        <Button text="See pricing" backgroundColor="white" />
                    </div>
                </div>
            </div>

            <div style={worksans.style} className={styles.right}>
                <Image className={styles.girl} src={heroGirl}></Image>

                <div className={styles.divs}>
                    <div className={styles.whiteDiv}>
                        <div className={styles.text1}>Grand Opening</div>
                        <div className={styles.text2}>
                            All items are 25% Discount for New Member!
                        </div>
                    </div>

                    <div className={styles.greenDiv}>
                        <div className={styles.time}>
                            <div>20 </div>
                            <div>:</div>
                            <div>10 </div>
                            <div>:</div>
                            <div>05</div>
                        </div>
                        <div className={styles.timeText}>
                            <div>hours</div>
                            <div>minutes</div>
                            <div>seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
