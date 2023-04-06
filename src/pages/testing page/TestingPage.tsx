import clsx from "clsx";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import s from "./TestingPage.module.scss";
import MainLayout from "../../components/layouts/MainLayout.component";
import MathInput from "../../components/common/mathinput/MathInput.component";

const TestingPage = () => {
  const fraction = "\\int_{}\\frac{4sin(x)^4}{cos(x)^6}*dx";

  return (
    <MainLayout selfClassName={s.test}>
      <div className="container">
        <div className={clsx(s.test__header, s.header)}>
          <a href="/" className={s.header__link}>
            Вернуться назад
          </a>
          <section className={clsx(s.header__testname)}>
            <p className={s.header__title}>
              Тест #1
            </p>
            <p className={s.header__subtitle}>Интегралы</p>
          </section>
        </div>
        <div className={clsx(s.test__exercise, s.exercise)}>
          <p className={s.exercise__title}>Задание 1. Решите приведенный ниже интеграл</p>
          <BlockMath>{fraction}</BlockMath>
          <section className={s.exercise__answerfield}>
            <MathInput />
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default TestingPage;
