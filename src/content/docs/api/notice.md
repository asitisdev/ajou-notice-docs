---
title: 공지사항 API
description: 아주대학교 공지사항 API 문서입니다
---

아주대학교 공지사항 API를 설명하는 문서입니다.

아주대학교 공지사항 API는 평일 오전 09시부터 오후 19시까지는 5분 간격으로 학교 홈페이지에서 공지사항을 받아와 데이터베이스가 업데이트되며, 이외 시간대에는 30분에 한번씩 업데이트가 진행됩니다. 주말에는 업데이트가 이루어지지 않습니다.

## 엔드포인트

아주대학교 공지사항 API는 현재 `ajou-notice.asitis.workers.dev`를 통해 접근할 수 있습니다

## GET - /api/notices

데이터베이스에서 공지사항 목록을 페이지네이션(10개 단위)으로 가져옵니다. 분류, 공지부서 및 검색어로 필터링할 수 있습니다.

### 쿼리 파라미터

- `page` (선택, integer): 페이지 번호, 기본값은 1입니다.
- `category` (선택, string): 해당 카테고리로 공지사항을 필터링합니다.
- `department` (선택, string): 해당 부서로 공지사항을 필터링합니다.
- `search` (선택, string): 제목 또는 내용에 해당 검색어가 포함된 공지사항을 검색합니다.

### 응답

#### 200: OK

데이터베이스에 저장된 공지사항의 JSON 배열을 반환합니다.

- `id` (integer): 공지사항의 게시글 번호
- `category` (string): 공지사항의 카테고리
- `department` (string): 공지사항을 게시한 부서
- `title` (string): 공지사항의 제목
- `content` (string): 공지사항의 내용
- `url` (string): 공지사항의 링크
- `date` (string): 공지사항이 게시된 날짜

#### 405: Method Not Allowed

요청 메서드가 `GET`이 아닌 경우.

### 요청 예시

```
GET /api/notices?page=1&category=비교과&search=대회
```

### 응답 예시

```json
[
  {
    "id": 22379,
    "category": "비교과",
    "department": "지식재산융합인재양성사업",
    "title": "(재공지)[지식재산] 2024-2 비즈니스모델(BM) 아이디어 경진대회 운영 안내",
    "content": "지식재산융합인재양성사업\n\n\n2024-2학기 비즈니스모델(BM) 아이디어 경진대회 운영 안내",
    "url": "https://www.ajou.ac.kr/kr/ajou/notice.do?articleNo=326382&mode=view",
    "date": "2024-09-13"
  },
  {
    "id": 22378,
    "category": "비교과",
    "department": "지식재산융합인재양성사업",
    "title": "(재공지)[지식재산] 2024-2학기 발명-특허 경진대회 운영 안내",
    "content": "지식재산융합인재양성사업\n\n\n2024-2학기 발명-특허 경진대회 운영 안내",
    "url": "https://www.ajou.ac.kr/kr/ajou/notice.do?articleNo=326381&mode=view",
    "date": "2024-09-13"
  },
  {
    "id": 22375,
    "category": "비교과",
    "department": "혁신융합단",
    "title": "[경진대회] 제3회 신·빅·해 <빅데이터 해커톤 대회> 참가 신청 안내",
    "content": "1. 참가대상: 전국 대학 학부생(졸업생, 휴학생, 일반인 참가 불가)\n2. 접수기간: 2024년 9월 27일까지 \n3. 참가방법: QR코드 신청(첨부파일 참고) 또는 하단 링크 클릭\n    https://docs.google.com/forms/d/1SkkQSwsPqVP0CA8vukC5M7rd93wbwRYS0Z1tH34HK5M/edit\n4. 문의사항: nicesquid@snu.ac.kr",
    "url": "https://www.ajou.ac.kr/kr/ajou/notice.do?articleNo=326368&mode=view",
    "date": "2024-09-13"
  }
]
```

## 데이터베이스 구조

아주대 공지사항 API 데이터베이스의 구조입니다.

### notices 테이블

| 컬럼         | 타입    | 설명                                         |
| ------------ | ------- | -------------------------------------------- |
| `id`         | Integer | 공지사항 게시글 번호                         |
| `category`   | Text    | 공지사항 분류 (예: 학사, 장학, 비교과, 기타) |
| `department` | Text    | 공지 부서                                    |
| `title`      | Text    | 공지사항 제목                                |
| `content`    | Text    | 공지사항 내용                                |
| `url`        | Text    | 공지사항 링크                                |
| `date`       | Text    | 공지사항 작성일                              |

### 추가 정보

아주대학교 공지사항 API는 Cloudflare Workers와 Cloudflare D1을 사용하여 운영되고 있습니다. 더 많은 내용이나 상세한 구현에 관한 부분은 [GitHub](https://github.com/asitisdev/ajou-notice)를 참고해주세요.
