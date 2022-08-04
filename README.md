# 갓생메이커

# 👏 프로젝트 소개

2030 사람들이 원하는 목표를 달성할 수 있도록 도와주는 애플리케이션으로,

이용자가 원하는 목표를 설정하여 하루 하루 정해진 목표를 완수할 수 있도록 도와준다.

자신이 오늘 하루 했던 목표 내용을 사진을 통해 공유하면 사람들이 보고 응원의 메세지를 보내 동기부여를 받게된다.

# \***\*⚙️\*\*** 프로젝트 개요

- 프로젝트명 : 갓생메이커
- 개발 인원 : 프론트(React) 2명, 백엔드(Spring) 3명
- 개발 기간 : 2022.06.24 ~ 2022.08.04
- 개발 환경 : React, React-Redux, React-Query, Springboot 2.6.8, JDK 11, Spring Security, Spring JPA
- 배포 환경 : Gradle, AWS S3, AWS EC2
- 웹 서버 : Tomcat 9.0.63
- 데이터베이스 : MySQL 8.0.29 (AWS RDS)
- 협업 도구 : Git, Slack, Notion, GatherTown, Kakao Talk

> **[Back-End Repository](https://github.com/hacksagona/Project_BackEnd) ><br> >[팀 노션](https://www.notion.so/5-2de18c593e1e409d817f6ebe79b36bab)**

# ⭐️ 팀 구성

|  이름  |                              깃허브 주소                               |  포지션  |
| :----: | :--------------------------------------------------------------------: | :------: |
| 김준호 | [https://github.com/kevinkim910408](https://github.com/kevinkim910408) | Frontend |
| 고백재 |       [https://github.com/baeg-jae](https://github.com/baeg-jae)       | Frontend |
| 고승준 |      [https://github.com/kokomong2](https://github.com/kokomong2)      | Backend  |
| 김규관 |         [https://github.com/kwan97](https://github.com/kwan97)         | Backend  |
| 김성영 |     [https://github.com/sungyoungk](https://github.com/sungyoungk)     | Backend  |
| 이지유 |                                                                        | UI & UX  |

<br>

# \***\*🍀\*\*** 와이어프레임

- [[와이어프레임 팀 피그마]](https://www.figma.com/file/jwyyh1kwYKJVD9LoQMnypT/Untitled?node-id=0%3A1)

# 💛 API 설계

- [[API 설계 팀 노션]](https://www.notion.so/8991a35585474adcb5778b9d38e0e6df?v=0ec066f3839b4309ab13abe09d446377)

# \***\*🧩 아키텍처\*\***

![아키텍처](https://user-images.githubusercontent.com/59503331/179120642-e22f3438-72ec-411b-9933-5a48eb2d9733.png)

# \***\*💡 Trouble Shooting\*\***

----------------------------------------------------------------------------------------------------------------------------------------
1. 최적화
싱글페이지 어플리케이션에서 번들 사이즈가 커지면 로딩속도나 성능면에서 문제가 생길 수고, 모든 페이지를 처음부터 불러올 필요가 있을까 하는 생각이 있었습니다.**
     - **검색을 통해, 지금 사용하는 코드가 아닌 코드는 나중에 불러와 사용할 수 가 있는 코드 스플리팅이 있다고 해서 도입하여 페이지별 로딩속도를 개선하였습니다.**
     - **정확히는 페이스북에서 추천하는 Loadable Components를 사용하여 코드 스플리팅을 진행하였습니다.**
       
       ![zxc](https://user-images.githubusercontent.com/59503331/178904370-d7e2c699-d718-400a-8b15-74f3c5188c5c.PNG)
       
----------------------------------------------------------------------------------------------------------------------------------------       
2. 상위div 접근
닉네임가입 페이지에서 닉네임 최대길이와, 현재길이를 보여주기위해 div태그 안에 input의 border를 안보이게해서 만들었는데, input을 focusing 했을때 상위 태그인 div에 접근을 하는 방법이 필요했습니다.
     - **검색을 통해 &:focus-within 이라는 가상클래스를 찾아내어서 상위태그에 접근하여 스타일링을 적용했습니다.**
       
       ![asasd](https://user-images.githubusercontent.com/59503331/178904368-02b1a738-765d-4a59-9923-f575851a5af9.PNG)
       
----------------------------------------------------------------------------------------------------------------------------------------
3. debounce
원인: 
프론트에서 filter를 사용해서 검색을 만들었고, 검색의 input 값을 onChange로 받고있었는데 검색을 할때 한글을 받침이 있어서 아이스크림을검색하려면 '앙'이라는 글자를 거쳐서 '아이'라는 단어가 나오듯이 받침때문에 검색결과창이 무수히 깜빡이던 문제

1차시도: 검색 아이콘 버튼을 통해서 검색이 진행되게 시도
결과: 모바일에서 실행해본 결과, 검색을 하고 버튼을 눌러야하는 불편함이 너무 강해서 실패.

2차시도: 검색을통해 lodash의 debounce를 알게 되었고, lodash 라이브러리를 사용해서 시도
결과: lodash에서 debounce만 사용할건데, 너무 쓸데없는것도 다 가져온 기분이 강해서 포기.

3차시도: debounce를 커스텀으로 제작하기로 결정
결과: setTimeout과 useCallback을 이용해서 custom hook으로 제작 후, 알맞는 시간을 주어 깜빡임의 수를 현저히 줄어들게 성공

----------------------------------------------------------------------------------------------------------------------------------------
4. 무한스크롤
원인: 한번에 데이터를 다 받아서 보여주는건 너무 비효율적이라 생각하고
페이지네이션과 무한스크롤중에 골라야하는데, 사진카드들이 핀터레스트처럼 등장해서 무한스크롤을 사용하기로 결정

1차시도: scroll 위치를 탐색하는 함수를 만들고, 리액트 쿼리의 useinfinitequery를 병합해 보려고 시도
결과: 매 스크롤 순간순간마다 함수가 호출되어서 불필요한 순간에도 계속 호출됨을 감지하고 포기

2차시도: react-intersection-observer 라이브러리를 통해서 화면의 밑 바닥만을 감지할수 있는걸 알아내었고,
라이브러리의 번들 자체가 무겁지 않다고 판단하고 이 라이브러리를 사용하기로 결정
결과: 스크롤이 화면 바닥만을 감지하여 데이터를 성공적으로 get 하게 되었음

----------------------------------------------------------------------------------------------------------------------------------------
5. Global Custom Alert
원인: 유저친화력을 높이기위해 alert창으로 조금 더 정보를 많이 담아주고 싶었는데, alert창을 커스터마이징해서 사용해야함

1차시도: sweetalert2라는 라이브러리가 유명하길래 사용시도
결과: sweetalert2는 주어진 틀 안에서만 커스터마이징이 가능하고, 다른 너무 많은 사람들이 사용하는걸로 생각하고 유니크함이 없다고 판단해서 포기

2차시도: Global하게 작동하는 custom alert를 modal처럼 직접 제작해보기로 결정
결과: redux를 활용해서 alert가 필요한 부분에서 dispatch로 가볍게 true값만 넘겨주면 내가 원하는 커스터마이징 된 alert창을 사용 가능.

----------------------------------------------------------------------------------------------------------------------------------------
6. Dropdown 
원인: 모바일 기준으로 제작하다보니 ui를 드랍다운같은데에 숨겨야지 더 많은 내용물을 담을수 있다고 생각

1차시도: Dropdown정도는 직접 구현해야지 라는 생각으로 애니메이션과 일반 div tag들을 활용해서 제작
결과: 드랍다운을 켜고 같은페이지 내에서 다른 부분을 클릭해도 드랍다운이 닫치지 않는 버그를 발견

2차시도: Detecting 할수있는 custom hook을 useRef와 useState, EventListener를 통해서 제작
결과: 드랍다운 외의 밖의 아무거나 클릭해도 드랍다운이 닫치는거에 성공




