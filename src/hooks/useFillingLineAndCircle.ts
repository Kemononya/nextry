import { useState, useEffect, MutableRefObject } from "react";

interface LinesAndCircles {
  topCircleRef: MutableRefObject<any>;
  topLineRef: MutableRefObject<any>;
  middleCircleRef: MutableRefObject<any>;
  bottomLineRef: MutableRefObject<any>;
  bottomCircleRef: MutableRefObject<any>;
}

const useFillingLineAndCircle = ({
  topCircleRef,
  topLineRef,
  middleCircleRef,
  bottomLineRef,
  bottomCircleRef,
}: LinesAndCircles) => {
  const [topFilledLineHeight, setTopFilledLineHeight] = useState(0);
  const [topPaleLineHeight, setTopPaleLineHeight] = useState(100);
  const [bottomFilledLineHeight, setBottomFilledLineHeight] = useState(0);
  const [bottomPaleLineHeight, setBottomPaleLineHeight] = useState(100);
  const [topCircleStatus, setTopCircleStatus] = useState("pale");
  const [middleCircleStatus, setMiddleCircleStatus] = useState("pale");
  const [bottomCircleStatus, setBottomCircleStatus] = useState("pale");

  useEffect(() => {
    const updateLinesAndCircleHeight = () => {
      const topCircle = topCircleRef.current;
      const topLine = topLineRef.current;
      const middleCircle = middleCircleRef.current;
      const bottomLine = bottomLineRef.current;
      const bottomCircle = bottomCircleRef.current;

      const currentProgress = window.scrollY;

      const topCircleBreakpoint =
        topCircle?.offsetTop - window.innerHeight / 1.7;
      const topLineBreakpoint = topLine?.offsetTop - window.innerHeight / 1.7;
      const middleCircleBreakpoint =
        middleCircle?.offsetTop - window.innerHeight / 1.7;
      const bottomLineBreakpoint =
        bottomLine?.offsetTop - window.innerHeight / 1.7;
      const bottomCircleBreakpoint =
        bottomCircle?.offsetTop - window.innerHeight / 1.7;

      if (
        topLine.offsetTop - window.innerHeight / 1.5 < currentProgress &&
        middleCircle.offsetTop - window.innerHeight / 1.5 > currentProgress
      ) {
        const percent =
          (
            (currentProgress -
              (topLine?.offsetTop - window.innerHeight / 1.5)) /
            (middleCircle?.offsetTop - topLine?.offsetTop)
          ).toFixed(2) * 100;
        setTopFilledLineHeight(percent);
        setTopPaleLineHeight(100 - percent);
      }

      if (
        bottomLine.offsetTop - window.innerHeight / 1.5 < currentProgress &&
        bottomCircle.offsetTop - window.innerHeight / 1.5 > currentProgress
      ) {
        const percent =
          (
            (currentProgress -
              (bottomLine?.offsetTop - window.innerHeight / 1.5)) /
            (bottomCircle?.offsetTop - bottomLine?.offsetTop)
          ).toFixed(2) * 100;
        setBottomFilledLineHeight(percent);
        setBottomPaleLineHeight(100 - percent);
      }

      if (
        topCircle.offsetTop - (window.innerHeight / 1.5).toFixed() <
        currentProgress
      ) {
        setTopCircleStatus("filled");
      } else if (
        topCircle.offsetTop - (window.innerHeight / 1.5).toFixed() >
        currentProgress
      ) {
        setTopCircleStatus("pale");
      }

      if (
        middleCircle.offsetTop - (window.innerHeight / 1.5).toFixed() <
        currentProgress
      ) {
        setMiddleCircleStatus("filled");
      } else if (
        middleCircle.offsetTop - (window.innerHeight / 1.5).toFixed() >
        currentProgress
      ) {
        setMiddleCircleStatus("pale");
      }

      if (
        bottomCircle.offsetTop - (window.innerHeight / 1.5).toFixed() <
        currentProgress
      ) {
        setBottomCircleStatus("filled");
      } else if (
        bottomCircle.offsetTop - (window.innerHeight / 1.5).toFixed() >
        currentProgress
      ) {
        setBottomCircleStatus("pale");
      }
    };

    window.addEventListener("scroll", updateLinesAndCircleHeight);

    return () => {
      window.removeEventListener("scroll", updateLinesAndCircleHeight);
    };
  }, [
    topCircleRef,
    topLineRef,
    middleCircleRef,
    bottomLineRef,
    bottomCircleRef,
  ]);

  return {
    topFilledLineHeight,
    topPaleLineHeight,
    bottomFilledLineHeight,
    bottomPaleLineHeight,
    topCircleStatus,
    middleCircleStatus,
    bottomCircleStatus,
  };
};

export default useFillingLineAndCircle;
