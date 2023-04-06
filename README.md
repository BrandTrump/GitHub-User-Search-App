# Frontend Mentor - GitHub User Search solution

This is a solution to the [GitHub User Search challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Learnings](#learnings)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

## My process

### Built with

- Semantic HTML5 markup
- SCSS modules
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Next.js 13.2](https://nextjs.org/docs/getting-started) - React framework

### Learnings

- Next.js 13.2 custom route handlers: (htps://nextjs.org/blog/next-13-2#custom-route-handlers).

```js
import { NextResponse } from "next/server";
import { Octokit } from "octokit";

type Props = {
  params: { username: string };
};

export async function GET(request: Request, { params: { username } }: Props) {
  const octokit = new Octokit({
    auth: 'AUTH TOKEN',
  });

  const user = await octokit.request(`/users/${username}`, {
    username: "USERNAME",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const userInfo = user.data;
  return NextResponse.json(userInfo);
}
```

## Author

- Website - Brandon Trump (https://brandontrump.dev/)
