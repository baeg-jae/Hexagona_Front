export const mainSteps = [
  {
    target: ".main_one",
    locale: { skip: <strong aria-label="skip">SKIP</strong> },
    content: (
      <div>
        <strong>[미션 등록하기]</strong>
        <br />
        <span>총 4개의 카테고리가 있습니다</span>
        <br />
        <span>내가 오늘 하루 수행할 미션을</span>
        <br />
        <span>추가해주세요</span>
      </div>
    ),
    placement: "auto",
    disableBeacon: true,
    disableScrolling: true,
  },
  {
    target: ".main_two",
    locale: { skip: <strong aria-label="skip">SKIP</strong> },
    content: (
      <div>
        <strong>[미션 등록하기]</strong>
        <br />
        <span>카테고리를 한번 클릭해 볼까요?</span>
      </div>
    ),
    placement: "auto",
    disableBeacon: true,
    disableScrolling: true,
  },
];
