import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Cards from "../components/cards";
import Footer from "../components/footer";
import TeamCard from "../components/teamcard";
import {
  Frame,
  Vector,
  card1Img,
  card2Img,
  card3Img,
  card4Img,
  CaretLeft,
  CaretRight,
  Microscope,
  Building,
  Lab,
  PartnerImg1,
  PartnerImg2,
  PartnerImg3,
  PartnerImg4,
  PartnerImg5,
  PartnerImg6,
  PartnerImg7,
  PartnerImg8,
  PartnerImg9,
  PartnerImg10,
  DiscoverImg,
  JanakImage,
  NareshImage,
  VaibhaviImage,
  HemendraImage,
  MayaImage,
} from "../images";
import styles from "./Homepage.module.scss";
import RectangleDiv from "../components/RectangleCard";
import Button from "../components/button";

const Homepage = () => {
  const parentRef = useRef(null);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    const parentElement = parentRef.current;
    const children = parentElement.children;
    let height = 0;

    Array.from(children).forEach((child) => {
      height += child.offsetHeight - 120;
    });

    setTotalHeight(height);
  }, []);

  return (
    <div>
      <div className={styles.homepage}>
        <Header className={styles.navbar} />

        <div className={styles.heading}>
          <div className={styles.powering}>Powering</div>
          <div className={styles.sensible}>sensible </div>

          <div className={styles.pharma}>pharma </div>
          <img src={Frame} alt="Capsule" className={styles.capsule} />
        </div>

        <div className={styles.wrapper}>
          <p className={styles.info}>
            Inventia is powering sensible pharma and advancing pharmaceutical
            excellence for over 35 years by strategically utilising cutting-edge
            technologies. Our robust global capabilities, combined with a deep
            understanding of regional nuances, ensure that we provide access to
            high-quality healthcare across the globe.
          </p>
          <div className={styles.paradiv}>
            <Button variant="unfilled" className={styles.button}>
              Get Started
            </Button>
            <a href="#" className={styles.ctaseconary}>
              Let’s work together
            </a>
          </div>
        </div>

        <div className={styles.nav}>
          <span className={styles.navhleft}>Press Release</span>
          <span className={styles.navhright}>
            <span className={styles.navhright1}>
              We're thrilled to represent our injectables Team at #CPHIWorldwide
              2023!
            </span>
            <div className={styles.navhright2}>
              <img src={CaretLeft} alt="CaretLeft" />
              <span>1 to 3</span>
              <img src={CaretRight} alt="CaretRight" />
            </div>
          </span>
        </div>

        <div className={styles.heading1}>
          <div className={styles.line1}>A balanced approach</div>
          <div className={styles.line2}>
            to <span className={styles.highlight}>power your growth</span>
          </div>
        </div>

        <div className={styles.cards}>
          <Cards
            image={card1Img}
            altmsg="Expert R&D and IPR teams"
            heading="Expert R&D and IPR teams"
            content="with a collective experience of over 200 years to help you gain a strategic advantage"
            className={styles.card1}
          />
          <Cards
            image={card2Img}
            altmsg="Extensive global access"
            heading="Extensive global access"
            content="to our adaptable offerings and regulatory proficiency while keeping local nuances in mind"
            className={styles.card2}
          />
          <Cards
            image={card3Img}
            altmsg="Flexible business models"
            heading="Flexible business models"
            content="that can easily adapt to your needs with minimal turnaround"
            className={styles.card3}
          />
          <Cards
            image={card4Img}
            altmsg="Consistent collaboration"
            heading="Consistent collaboration"
            content="to nurture and grow your product portfolio in a balanced and calibrated approach"
            className={styles.card4}
          />
        </div>

        <div className={styles.collabHeading}>
          <p className={styles.upperHeading}>
            consciously collaborative, end-to-end solutions
          </p>
          <p className={styles.lowerHeading}>
            We{" "}
            <span className={styles.lowerHeadingChild}>
              purposefully empower
            </span>{" "}
            you through every stage of R&D, manufacturing, and business
            development, making your product's life cycle our utmost priority.
          </p>
        </div>

        <div
          className={styles.mainCard}
          ref={parentRef}
          style={{ height: totalHeight }}
        >
          <RectangleDiv
            className={styles.Rcard1}
            heading="Research & Development"
            subheading="Holistically managing your product lifecycle"
            highlightNum="01"
            information="Inventia believes in pushing the boundaries of science to deliver simple, scalable and high-value solutions across your entire development cycle. Our R&D units, providing IP, regulatory & project management capabilities, work as an extension of your team to develop and deliver both simple and value-added generics across markets."
            image={Microscope}
            altInfo="microscope image"
            btnText="Learn more"
            imageWidth="100%"
          />
          <RectangleDiv
            className={styles.Rcard2}
            heading="Manufacturing"
            subheading="The gold standard"
            highlightNum="02"
            information="The highest standard of pharmaceutical quality, safety and reliability begins with manufacturing facilities that surpass world-class manufacturing standards & compliance. From inception to market, much more – our process of safety, quality and supply chain ensures the best quality every time."
            image={Building}
            altInfo="factory image"
            btnText="Learn more"
            imageWidth="90%"
          />
          <RectangleDiv
            className={styles.Rcard3}
            heading="Business Development"
            subheading="People-centric at heart"
            highlightNum="03"
            information="Conscious collaboration is the name-of-the-game at Inventia. We work closely with our business development team to create a bespoke product plan for your needs. Our global collaboration team works directly with you to build a customized approach to grow and nurture your product portfolio."
            image={Lab}
            altInfo="business image"
            btnText="Learn more"
            imageWidth="80%"
          />
        </div>

        <div className={styles.partnerDiv}>
          <div className={styles.headings}>
            <div className={styles.upperHeading}>Powering our</div>
            <div className={styles.lowerHeading}>
              <span>partner</span>
              <span className={styles.lowerHeadingChild}> network</span>
            </div>
          </div>
          <div className={styles.partnerImages}>
            <div className={styles.imgDiv1}>
              <img src={PartnerImg1} alt="radiant" />
              <img src={PartnerImg2} alt="acme" />
              <img src={PartnerImg3} alt="jamp" />
              <img src={PartnerImg4} alt="accord" />
              <img src={PartnerImg5} alt="euroframe" />
            </div>
            <div className={styles.imgDiv2}>
              {" "}
              <img src={PartnerImg6} alt="alkem" />
              <img src={PartnerImg7} alt="ani" />
              <img src={PartnerImg8} alt="sanofi" />
              <img src={PartnerImg9} alt="mega" />
              <img src={PartnerImg10} alt="popular" />
            </div>
          </div>
        </div>

        <div className={styles.discoverDiv}>
          <div className={styles.headings}>
            <div className={styles.upperHeading}>Discover ingredients</div>
            <div className={styles.lowerHeading}>
              <span>with</span>
              <span className={styles.lowerHeadingChild}>
                {" "}
                our product finder
              </span>
            </div>
          </div>

          <div className={styles.discoverImg}>
            <img src={DiscoverImg} alt="" />
          </div>

          <div className={styles.infoSection}>
            <p className={styles.info}>
              Use our intuitive search tool to find the product of interest by
              Therapeutic category, API Type & Formulation. Immediately receive
              the information in your inbox for offline use.
            </p>
            <Button variant="filled">Explore our product portfolio</Button>
          </div>
        </div>

        <div className={styles.teamCollab}>
          <div className={styles.headings}>
            <div className={styles.upperHeading}>Collaboration. Trust.</div>
            <div className={styles.lowerHeading}>Balance. Flexibility.</div>
            <p className={styles.info}>
              At Inventia, decades of industry expertise, a diverse group of
              veterans & strong problem-solving capabilities join forces to help
              your teams cross the finish line.
            </p>
          </div>

          <Button variant="unfilled" className={styles.button}>
            How we do it
          </Button>
        </div>
        <div className={styles.teamSection}>
          <div className={styles.div1}>
            <TeamCard
              name="Janak Shah"
              role="Chief Managing Director"
              imgLeft={true}
              image={JanakImage}
            />
            <TeamCard
              name="Naresh Shah"
              role="Chief Operating Officer"
              imgLeft={true}
              image={NareshImage}
            />
            <TeamCard
              name="Naresh Shah"
              role="Chief Operating Officer"
              imgLeft={true}
              image={VaibhaviImage}
            />
          </div>

          <div className={styles.div2}>
            <TeamCard
              name="Hemendra Shah"
              role="Chief Financial Officer"
              imgLeft={false}
              image={HemendraImage}
            />
            <TeamCard
              name="Maya Shah"
              role="Whole-time Director"
              imgLeft={false}
              image={MayaImage}
            />
            <TeamCard
              name="Maya Shah"
              role="Whole-time Director"
              imgLeft={false}
              image={MayaImage}
            />
          </div>
        </div>

        <div className={styles.innovatorsDiv}>
          <span className={styles.upperHeading}>join us</span>
          <p className={styles.lowerHeading}>
            We're{" "}
            <span className={styles.lowerHeadingChild}>
              talented innovators
            </span>{" "}
            harnessing the power of science to fuel explosive growth.
          </p>

          <Button variant="filled" className={styles.button}>
            Learn about our culture
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
