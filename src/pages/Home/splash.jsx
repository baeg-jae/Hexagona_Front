// import React, { useRef } from 'react';
// import { useSpring, animated, useChain } from 'react-spring';

// function splash() {
//     const text1Ref = useRef();
//     const text2Ref = useRef();
//     const text3Ref = useRef();
//     const text1Style = useAnimated(text1Ref);
//     const text2Style = useAnimated(text2Ref);
//     const text3Style = useAnimated(text3Ref);

//     useChain([text1Ref, text2Ref, text3Ref]);

//     return (
//         <div>
//             <animated.h1 style={text1Style}>Welcome</animated.h1>
//             <animated.h1 style={text2Style}>To</animated.h1>
//             <animated.h1 style={text3Style}>The</animated.h1>
//             <img src="https://i.ytimg.com/vi/e2JT4dXbi0E/maxresdefault.jpg" height={200} alt="" />
//         </div>
//     );
// }

// const useAnimation = (ref) => {
//     const spring = useSpring({
//         from: {
//             opacity: 0,
//             position: 'absolute',
//         },
//         to: [
//             {
//                 opacity: 1,
//             },
//             {
//                 opacity: 0,
//             },
//         ],
//         ref: ref,
//     });
//     return spring;
// };

// export default splash;
