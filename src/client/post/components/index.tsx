"use client";

import { Body } from "./post/Body";
import { Editer } from "./post/Editer";
import { Footer } from "./post/Footor";
import { Header } from "./post/Header";
import { Main } from "./post/Main";
import { CommentButton } from "./Modifier/CommentButton";
import { DeleteButton } from "./Modifier/DeleteButton";
import { ModifierMenu } from "./Modifier/Menu";
import { UpdateButton } from "./Modifier/UpdateButton";

export const Post = Object.assign(Main, {
  Body,
  Header,
  Footer,
  Editer,
  ModifierMenu,
  CommentButton,
  DeleteButton,
  UpdateButton,
});
