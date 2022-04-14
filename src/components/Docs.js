import Layout from "./Layout";
import { useState } from "react";
import Section, { Color, Button, Badge, Card, Alert } from "./Section" 
import shades from "../api/shades";

function Docs() {
  const links = ["Colors", "Buttons", "Badges", "Cards", "Alerts"];
  const [active, setActive] = useState(links[0]);

  return (
    <Layout>
      <nav class="navbar navbar-expand-lg navbar-light navbar-turquoise fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
                    {links.map((link) => {
                      const activeClass = link === active ? "active" : "";
                      return (
                        <li className="nav-item" onClick={() => setActive(link)}>
                          <a
                            className={`nav-link ${activeClass}`}
                            aria-current="page"
                            href={`#${link.toLowerCase()}`}
                          >
                            {link}
                          </a>
                        </li>
                      );
                    })}
                </ul>
          </div>
        </div>
      </nav>
      
      <div>
        <div className="container">
          <Section id="colors" title="Color Palette">
            {shades.map(shade => <Color shade={shade} />)}
          </Section>
         
          <Section id="buttons" title="Buttons">
            {shades.map(shade => <Button shade={shade} />)}
          </Section>
          
          <Section id="badge" title="Badges">
            {shades.map(shade => <Badge shade={shade} />)}
          </Section>

          <Section id="cards" title="Cards">
            {shades.map(shade => <Card shade={shade} />)}
          </Section>
          
          <Section id="alerts" title="Alerts">
            {shades.map(shade => <Alert shade={shade} />)}
          </Section>
      
        </div>
      </div>
    </Layout>
  );
}
export default Docs;
