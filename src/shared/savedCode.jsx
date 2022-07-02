// 파일 관련
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { storage } from "shared/firebase";

// const [fileImage, setFileImage] = useState("");
// const saveFileImage = (e) => {
//   setFileImage(URL.createObjectURL(e.target.files[0]));
//   uploadFB(e);
// };
// const uploadFB = async (e) => {
//   const upload_file = await uploadBytes(
//     ref(storage, `images/${e.target.files[0].name}`),
//     e.target.files[0]
//   );
//   const file_url = await getDownloadURL(upload_file.ref);
//   register_imageRef.current = { url: file_url };
// };

{
  /* <input type="file" placeholder="img" onChange={saveFileImage} />; */
}

// 회원가입 관련
// const queryClient = useQueryClient();

// const userSignUpMutation = useMutation(__signUpQuery, {
//   onSuccess: () => {
//     // 캐시에 있는 모든 쿼리를 무효화한다.
//     queryClient.invalidateQueries("users");
//   },
//   onError: () => {
//     // 에러처리
//   },
//   onSettled: () => {
//     // finally
//   },
// });

// const userEmailCheckMutation = useMutation(__emailCheckQuery, {
//   onSuccess: () => {
//     // 캐시에 있는 모든 쿼리를 무효화한다.
//     queryClient.invalidateQueries("users");
//   },
//   onError: () => {
//     // 에러처리
//   },
//   onSettled: () => {
//     // finally
//   },
// });

// const onIdDupCheckHandler = () => {
//   userEmailCheckMutation.mutate({
//     email: email,
//   });
// };

// const onSubmitHandler = () => {
//   userSignUpMutation.mutate({
//     nickName: nickName,
//     email: email,
//     number: number,
//     location: location,
//     pw: pw,
//     gender: gender,
//     birth: birth,
//     fileImage: register_imageRef.current.url,
//   });
// };

// import { styled, keyframes } from "@emotion/styled";

// // 애니메이션 keyframes 예제
// // 애니메이션 사용시 항상 사용처보다 위에서 선언
// const bounce = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }

//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }

//   70% {
//     transform: translate3d(0, -15px, 0);
//   }

//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// `;

// // 기본 예제
// export const Header = styled.div`
//   text-align: center;
//   font-weight: 700;
//   font-size: 48px;
//   line-height: 46px;
//   letter-spacing: -0.75px;
//   margin-top: 50px;
//   margin-bottom: 50px;
//   animation: ${bounce} 1s ease infinite;
// `;
