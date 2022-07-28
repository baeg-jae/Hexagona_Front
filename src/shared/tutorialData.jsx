export const mainSteps = [
  {
    target: ".main_one",
    locale: { skip: <strong aria-label="skip">SKIP</strong> },
    content: (
      <div>
        <strong>[목표 등록하기]</strong>
        <br />
        <span>총 4개의 카테고리가 있습니다</span>
        <br />
        <span>내가 오늘 하루 수행할 목표를</span>
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
        <strong>[목표 등록하기]</strong>
        <br />
        <span>카테고리를 한번 클릭해 볼까요?</span>
      </div>
    ),
    placement: "auto",
    disableBeacon: true,
    disableScrolling: true,
  },
];

export const missionOne = [
  {
    target: ".mission_one",
    locale: { skip: <strong aria-label="skip">SKIP</strong> },
    content: (
      <div>
        <strong>[목표 등록하기]</strong>
        <br />
        <span>목표를 추가하는 버튼은 여기에요!</span>
        <br />
        <span>1가지 이상을 추가하면 </span>
        <br />
        <span>이 버튼은 사라져요!</span>
        <br />
      </div>
    ),
    placement: "auto",
    disableBeacon: true,
    disableScrolling: true,
  },
  {
    target: ".mission_two",
    locale: { skip: <strong aria-label="skip">SKIP</strong> },
    content: (
      <div>
        <strong>[목표 등록하기]</strong>
        <br />
        <span>이 아래 버튼으로도 추가할수 있어요!</span>
        <br />
        <span>지금 하나만 추가해 볼까요?</span>
        <br />
      </div>
    ),
    placement: "auto",
    disableBeacon: true,
    disableScrolling: true,
  },
];

export const missionTwo = [
  {
    target: ".mission_one",
    locale: { skip: <strong aria-label="skip">SKIP</strong> },
    content: (
      <div>
        <strong>[사진 등록하기]</strong>
        <br />
        <span>목표 추가에 성공하셨습니다!</span>
        <br />
        <span>이제 이 목표를 완수하면</span>
        <br />
        <span>카메라를 클릭해서 사진으로 </span>
        <br />
        <span>인증해 주세요 </span>
        <br />
      </div>
    ),
    placement: "auto",
    disableBeacon: true,
    disableScrolling: true,
  },
];

export const missionThree = [
  {
    target: ".mission_one",
    locale: { skip: <strong aria-label="skip">SKIP</strong> },
    content: (
      <div>
        <strong>[사진 인증하기]</strong>
        <br />
        <span>마지막 단계입니다!</span>
        <br />
        <span>한번 더 클릭하셔서</span>
        <br />
        <span>인증한 목표를 모두에게 </span>
        <br />
        <span>공유해주세요!</span>
        <br />
      </div>
    ),
    placement: "auto",
    disableBeacon: true,
    disableScrolling: true,
  },
];
