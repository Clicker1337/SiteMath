export enum localSVG {
    LOGOTYPE = 'LOGOTYPE',
    CHEVRON = 'CHEVRON'
  }

function SVGSelector(svg: localSVG) {
    switch (svg) {
        case localSVG.LOGOTYPE:
            return (
                <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="22.5"
                        cy="22.5"
                        r="22.5"
                        fill="#3C388D"
                    />
                    <path
                        d="M38.25 22.5C38.25 27.4703 34.2202 31.5 29.25 31.5C24.2798 31.5 20.25
                        27.4703 20.25 22.5C20.25 20.016 18.234 18 15.75 18C13.266 18 11.25 20.016 11.25
                        22.5C11.25 24.984 13.266 27 15.75 27C16.0245 27 16.29 26.9663 16.551 26.919C17.0663
                        28.3973 17.8245 29.7428 18.7875 30.9375C17.8357 31.2795 16.8232 31.5 15.75 31.5C10.7797
                        31.5 6.75 27.4703 6.75 22.5C6.75 17.5297 10.7797 13.5 15.75 13.5C20.7203 13.5 24.75 17.5297
                        24.75 22.5C24.75 24.984 26.766 27 29.25 27C31.734 27 33.75 24.984 33.75 22.5C33.75 20.016 31.734
                        18 29.25 18C28.9755 18 28.71 18.0338 28.449 18.081C27.9338 16.6027 27.1777 15.2573 26.2125
                        14.0625C27.1643 13.7205 28.1768 13.5 29.25 13.5C34.2202 13.5 38.25 17.5297 38.25 22.5Z"
                        fill="white"
                    />
                </svg>
            );
        case localSVG.CHEVRON:
            return (
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.5625 10.7812L15 19.2188L23.4375 10.7812"
                        stroke="#373737"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        default:
            return null;
    }
}

export default SVGSelector;
