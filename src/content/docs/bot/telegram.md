---
title: 텔레그램 알림봇
description: 텔레그램 알림봇 사용 방법에 대한 문서입니다.
---

텔레그램 알림봇을 사용하려면 텔레그램에서 [@ajou_notice_bot](https://t.me/ajou_notice_bot)을 통해 등록하여 알림을 받아보실 수 있습니다.

## 텔레그램 알림봇 사용 방법

텔레그램 알림봇의 사용 방법을 설명합니다.

### 명령어

- `/start`: 알림봇과 채팅을 시작합니다.
- `/subscribe`: 공지사항 알림을 구독합니다.
- `/unsubscribe`: 공지사항 알림을 구독 해지합니다.
- `/category`: 공지사항의 카테고리 필터를 설정합니다.
- `/department`: 공지사항의 부서 필터를 설정합니다.
- `/keyword`: 공지사항의 키워드 필터를 설정합니다.

### 공지사항 알림 설정

1. 텔레그램에서 [@ajou_notice_bot](https://t.me/ajou_notice_bot)과 채팅을 시작합니다.
2. `/subscribe` 명령어를 입력하여 공지사항 알림을 활성화합니다.
3. 봇이 공지사항을 주기적으로 확인하여 새로운 공지사항이 있을 때마다 알림을 보냅니다.

### 알림 필터 설정

1. `/category` 명령어를 입력하여 특정 카테고리의 공지사항만 받도록 설정합니다.
2. `/department` 명령어를 입력하여 특정 부서의 공지사항만 받도록 설정합니다.
3. `/keyword` 명령어를 입력하여 특정 키워드가 포함된 공지사항만 받도록 설정합니다.

### 공지사항 알림 해제

1. `/unsubscribe` 명령어를 입력하여 공지사항 알림을 해제합니다.

## 추가 정보

텔레그램 알림봇은 Cloudflare Workers와 Cloudflare D1을 사용하여 [webhook](https://core.telegram.org/bots/webhooks) 방식으로 운영되고 있습니다. 더 많은 내용이나 상세한 구현에 관한 부분은 [GitHub](https://github.com/asitisdev/ajou-notice-telegram-bot)를 참고해주세요.
