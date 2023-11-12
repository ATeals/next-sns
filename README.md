# Next.js SNS Clone

<p>
<img src="https://img.shields.io/badge/Next.js-000?&style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?&style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/Prisma-2D3748?&style=for-the-badge&logo=Prisma&logoColor=white">
<img src="https://img.shields.io/badge/Tailwindcss-06B6D4?&style=for-the-badge&logo=Tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/SWR-000?&style=for-the-badge&logo=SWR&logoColor=white">
</p>

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

유저 CRU

    Parallel Routes 를 이용하여 쿠키를 통한 인증 구현

게시글 CRUD

    Parallel Routes & Intercepting Routes 를 이용하여 모달 구현
    마크다운을 이용한 게시글

# 고민 사항

Post 컴포넌트에서 Update, delete, Like 와 같이 mutate가 필요한 버튼을 소유할 때, Post 컴포넌트가 useSWRMutation를 들고 props로 버튼에 handler를 뿌려주는게 좋은지, props로 필요한 정보를 받아서 버튼 내부에 handler를 만들어 주는게 좋은지 궁금합니다.

# 아쉬운 점

- 처음에 생각한 기준보다 한참 떨어지는 코드 퀄리티가 나왔다. 모든 컴포넌트가 중구난방한 위치에 있고, 추상화의 레벨도 다 다르며, 급해서 하드코딩한 부분도 있다. 리팩토링을 천천히 하면서 고치고 싶다.

- app router를 사용했지만 app라우터 모델과는 관련 없는 코드를 작성한 것 같다. 지금 내코드는 page router를 사용해도 특별히 문제가 없다. 좀더 app router의 방식을 탐구해볼 필요가 있다.

- 코드를 너무 낮은 레벨에서 부터 추상화를 생각하면서 작성 했던 것 같다. 전체적인 기능 틀을 먼저 구현하고 이후 천천히 리팩토링하는 방법이 귀찮아도 가장 빠르고 확실한 방법이라고 느꼈다. 오히려 처음부터 완벽하게 추상화 한다는 것인 말이 안된다.
