# CodeDev: 웹 기반 React 코드 에디터

CodeDev는 웹 기반의 React 코드 에디터입니다. 사용자는 코드를 쉽게 작성하고 랜더링된 결과를 실시간으로 확인할 수 있습니다.
![스크린샷 2023-10-19 오후 5 16 40](https://github.com/oh-wonjune/CodeEditor-forWeb/assets/55135292/a5181388-ecf9-44cb-84b6-66d4ca0b9972)


## 주요 특징

- **분할 화면 디자인**: 화면이 반으로 나뉘어져 있어, 좌측에는 React 코드를 작성하고, 우측에는 랜더링된 결과를 확인할 수 있습니다.
- **실시간 랜더링**: 상단의 'rendering' 버튼을 통해 실시간으로 코드의 랜더링 결과를 확인할 수 있습니다.

## 기술 스택

- **Frontend**:
  - `React`: 주요 프레임워크로서 UI 구성에 사용되었습니다.
  - `MonacoEditor`: 코드 에디터 컴포넌트로, 사용자가 React 코드를 편리하게 작성할 수 있도록 해줍니다.

- **Rendering & Execution**:
  - `Webpack`: 사용자가 작성한 코드를 실시간으로 번들링하여 iframe에 랜더링하기 위해 사용되었습니다.
  
- **Development Tools**:
  - `npm`: 패키지 관리 및 스크립트 실행 도구
