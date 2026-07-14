# PTerm

물리치료 관련 종사자와 학생을 위한 의학·물리치료 용어 검색 웹페이지 (비상업 프로젝트).

## 현재 상태

정적 샘플 데이터로 동작하는 프로토타입까지 구현되어 있습니다 (검색, 분류 탐색, 용어 상세 페이지). 실제 서비스에 쓸 수 있는 물리치료 용어 데이터 소스를 찾는 과정에서 저작권/라이선스 문제로 프로젝트 진행이 중단된 상태입니다.

## 개발

```bash
npm install
npm run dev      # 로컬 개발 서버
npm run build    # 정적 파일 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
```

## 기술 스택

- Vite + React 19 + TypeScript
- react-router-dom (HashRouter — 별도 서버 설정 없이 정적 호스팅 가능)
- Fuse.js (클라이언트 사이드 검색)
- 데이터: `src/data/*.json` 정적 파일 (백엔드 없음)
