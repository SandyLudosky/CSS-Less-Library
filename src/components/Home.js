import { useContext } from "react";
import { Context } from "../context";
import Layout from "./Layout";
import Card from "./Card";

function Home() {
  const { items } = useContext(Context);
  return (
    <Layout>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light text-river">Simplifier le CSS</h1>
              <p className="lead text-muted">
                Utiliser les langages d’extension CSS pour écrire des feuilles de style de qualité professionnelle avec une architecture CSS modulaire, flexible et facilement maintenable
              </p>
              <p>
            
                <a
                  target="_blank"
                  href="https://lesscss.org/features/"
                  className="btn button-outline-less_color btn-lg mx-1"
                >
                  Learn less
                </a>
                <a
                  target="_blank"
                  href="https://sass-lang.com/guide"
                  className="btn button-outline-avium btn-lg "
                >
                  Learn Sass
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {items.map((topic, index) => {
                const shade = topic.id === "sass" ? "sass_color" : "less_color"
                return(<Card key={index} {...topic} shade={shade}/>)
              })}
            </div>
          </div>
        </div>
      </main>
      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p className="mb-0">
            New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
            <a href="/docs/5.1/getting-started/introduction/">
              getting started guide
            </a>
            .
          </p>
        </div>
      </footer>
    </Layout>
  );
}
export default Home;
