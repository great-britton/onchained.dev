import { component$ } from "@builder.io/qwik";
import Favicon from "../../../public/favicon.svg?jsx";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  return (
    <header class="flex flex-col">
      <section class="flex items-center">
        <div class="flex flex-col items-center justify-center">
          <Favicon class="mx-8 mt-8 h-28 w-28" />
          <div>Onchained Labs</div>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </section>

      <hx class="text-lg text-slate-200" />
    </header>
  );
});
