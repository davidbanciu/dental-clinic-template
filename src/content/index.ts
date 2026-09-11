import { en } from "./en";
import { ro } from "./ro";

export const content = {
  en,
  ro,
};

export type Language = keyof typeof content;
