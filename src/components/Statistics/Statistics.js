import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map((stat) => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
  return `rgb(${randomIntegerFromInterval(0, 255)}, 
              ${randomIntegerFromInterval(0, 255)},
              ${randomIntegerFromInterval(0, 255)})`;
}
