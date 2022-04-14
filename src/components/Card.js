import sass from "../assets/sass.png";
import less from "../assets/less.png";

export default function Card({ shade, title, content, link }) {
  const logo = shade === 'sass_color' ? sass : less;
  return (
    <div class="col">
      <div key={shade} className={`card card-${shade}`}>
        <div class="card-body card-body-custom">
          <img src={logo} alt={logo} width="73" height="34" />
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{content}</p>
          <a
            className={`btn button-${shade}`}
            href={link}
            target="_blank"
            rel="nofollower noreferrer"
          >
            learn more
          </a>
        </div>
      </div>
    </div>
  );
}
