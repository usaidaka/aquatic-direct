import type { Route } from "./+types/home";
import classes from "../styles/pages/home.module.scss"
import Hero from "~/components/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const home = () => {
  return (
    <div className={classes.main}>
      <Hero/>
    </div>
  )
}

export default home

