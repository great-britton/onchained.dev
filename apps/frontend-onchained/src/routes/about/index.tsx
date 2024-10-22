import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <p>about page</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Onchained | Home",
  meta: [
    {
      name: "Onchained Web Development",
      content: "Onchained Web Development",
    },
  ],
};
