// Create React App은 버전 4에서 기본적으로 새로운 JSX 변환을 지원하지만
// 사용자 지정 설정을 사용하는 경우 jsx없이 작성할 때 TypeScript 오류를 제거하려면
// 다음이 필요합니다 import React from 'react'.
import React from "react";
import Router from "./Shared/Router";

function App() {
  return <Router />;
}

export default App;
