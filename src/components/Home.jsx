import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

export default function Home() {
  const [data, loading, error] = useOutletContext();

  return (
    <>
      <Hero />
      <Carousel data={data} loading={loading} error={error} />
      <AboutUs></AboutUs>
      <Motivation></Motivation>
    </>
  );
}

function Carousel({ data, loading, error }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data) {
      const id = setInterval(() => {
        setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        console.log("rest");
      }, 1500);

      return () => clearInterval(id);
    }
  }, [data]);

  if (loading || error) return <>Nothing</>;

  const start = 75 * (data.length - 1);
  const step = 75 * 2;

  const imgArr = data.map((item) => item.image);
  const xArr = Array.from({ length: data.length }, (_, i) => start - i * step);

  return (
    <>
      <div className="frame-container">
        <button
          type="button"
          id="prev-btn"
          onClick={() => {
            const newIndex = index === 0 ? xArr.length - 1 : index - 1;
            setIndex(newIndex);
          }}
        >
          &lt;
        </button>
        <div className="frame">
          <div
            className="wide-container"
            style={{ translate: xArr[index] + "px" }}
          >
            {imgArr.map((link, index) => (
              <img key={index} src={link}></img>
            ))}
          </div>
        </div>
        <button
          type="button"
          id="next-btn"
          onClick={() => {
            const newIndex = index === xArr.length - 1 ? 0 : index + 1;
            setIndex(newIndex);
          }}
        >
          &gt;
        </button>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section>
      <h1>Buy to you heart's content!</h1>
      <p>
        Come and satiate your insatiable desire for purchasing new and shiny
        things. Participate in the common practice of consumerism, whereby you
        lead us inside your wallets and we lead you towards an endless cycle of
        dopamine hits.
      </p>
      <p>
        But don't worry, we will never run out of shiny new things for you to
        purchase, so if your recently purchased item can no longer fill-in the
        void inside of your soul, you can always buy 100s of new things. After
        all, constantly buying things you don't need is the only way to live a
        happy and peaceful life, isn't it?
      </p>
    </section>
  );
}

function AboutUs() {
  return (
    <section>
      <h2>About Us</h2>
      <p>
        We at Shopping Cart have delivered dopamine highs disguised as joy since
        the dawn of humankind. Right from the birth of the Indus valley
        civilization, we have provided commodities that nobody needs but
        everybody wants.
      </p>
    </section>
  );
}

function Motivation() {
  return (
    <section>
      <h2>Our Motivation</h2>
      <p>
        At Shopping Cart, our motivation has always remained the same:{" "}
        <em>Exploit man's greed at all costs!</em>. Right from the intial days
        of our operations, we realized human beings often have a common flaw:
        they are unable to control their greed. Where people saw greed as sin,
        we saw it as a phenomenal business opportunity. Civilizations were built
        and destroyed, the sands of time swallowed so many great enterprises
        from the dynasties of the past, and yet Shopping Cart still lives today,
        thousands of years after its inauguration. The fact that we are still
        operating today at full potential showcases that our initial goal to
        exploit human beings was 100% correct.
      </p>
    </section>
  );
}
