export const example01 = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  const isMobile = toMatch.some((toMatchItem) => {
    return window.navigator.userAgent.match(toMatchItem);
  });
  return isMobile;
};

export const example02 = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // 안드로이드 아이폰을 검사해 체크
  return isMobile;
};

export const example03 = () => {
  const isMobile = /Mobi/i.test(window.navigator.userAgent); // "Mobi" 가 User agent에 포함되어 있으면 모바일
  return isMobile;
};
