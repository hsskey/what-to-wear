# WHAT-TO-WEAR

### 프로젝트 기반

이 프로젝트는 [create-react-app](https://github.com/facebook/create-react-app)를 커스텀하여 만든 토이프로젝트 입니다.

### 주요 라이브러리

* [react](https://reactjs.org/) 17.0.1
* [recoil](https://github.com/facebookexperimental/Recoil) 0.1.2.
* [@emotion/react](https://github.com/emotion-js/emotion/tree/master/packages/react) 11.1.1

### 시작하기

```sh
# Download the repo
git clone https://github.com/hsskey/what-to-wear.git
# Enter the repo
cd what-to-wear
# Install the dependencies
yarn or npm install
# Start local development
yarn start or npm start
# 브라우저에서 확인
open http://localhost:3000
```

### 프로젝트 구조

아래 참고:

```sh
boilerplat-admin/src
├── component/        # 프로젝트 전체에서 공유되는 Component.
├── resource/         # 프로젝트 전체에서 공유되는 resource.
├── state/            # 비동기 처리 통신을 통해 가져온 데이터를 recoil selector로 가져옴.
```

### TODOs
- [X] typescript로 전환 
