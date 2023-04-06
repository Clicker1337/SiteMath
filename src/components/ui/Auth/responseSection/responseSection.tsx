import { FC, SyntheticEvent } from "react";


import s from "./responseSection.module.scss";

interface IResponseSection {
  callback: (e: SyntheticEvent) => void;
}

const ResponseSection: FC<IResponseSection> = ({ callback }) => {

  return (
      <button
      className={s.button}
        onClick={callback}
      >
        ВОЙТИ
      </button>
  );
};

export default ResponseSection;
