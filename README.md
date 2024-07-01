# CoffeeCat SNS

<p>
<img src="https://img.shields.io/badge/Next.js-000?&style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?&style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/Prisma-2D3748?&style=for-the-badge&logo=Prisma&logoColor=white">
<img src="https://img.shields.io/badge/Tailwindcss-06B6D4?&style=for-the-badge&logo=Tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/ReactQuery-FF4154?&style=for-the-badge&logo=ReactQuery&logoColor=white">
</p>

> ! 클라우드 타입의 정책 변경에 따라 배포된 페이지에서 db에 접근할 수 없어 서비스를 사용할 수 없습니다.

## 로컬테스트

### 설치

```
npm i
```

### env

```
DATABASE_URL= postgres db url
NEXTAUTH_SECRET = 32자 이상의 문자열
```

### 실행

```
npm run build && npm run start

```

# Release

https://coffeecat.vercel.app/

# Folder Structure

```bash
├── app
│   ├── (Post)
│   ├── @auth
│   ├── @modal
│   ├── api
│   ├── like
│   ├── search
│   ├── user
├── components
│   ├── Ui
│   ├── Footer
│   ├── Header
│   ├── SWR
│   └── Post
├── utills
│   ├── elapsedTime.ts
│   ├── generateClassName.ts
│   ├── mutateFetch.ts
│   └── toastError.ts
├── styles
├── hooks
├── constants
└── types
```

**app/(post) [Route Groups]**

    포스트에 대한 그룹 페이지 입니다. 쓰기, 업데이트, 댓글 페이지

**app/@auth [Parallel Routes]**

    로그인, 회원가입 페이지

**app/@modal [Parallel Routes & Intercepting Routes]**

    모달이 필요한 페이지를 미리 가로채 모달로 만드는 페이지

# Feature

### 유저 CRU

---

서버 컴포넌트와 Parallel Routes를 이용하여 쿠키를 통한 인증 구현

### 게시글 CRUD

---

마크다운을 이용한 게시글

[useInfiniteQuery](https://github.com/ATeals/next-sns/blob/main/src/app/PostInfinityList.tsx)를 이용한 무한 스크롤 구현

[useMutation](<https://github.com/ATeals/next-sns/blob/main/src/app/(Post)/write/WriteForm.tsx>)을 이용한 게시글 mutate

[Parallel Routes & Intercepting Routes](<https://github.com/ATeals/next-sns/blob/main/src/app/%40modal/(.)comment/page.tsx>)를 이용하여 모달 구현
