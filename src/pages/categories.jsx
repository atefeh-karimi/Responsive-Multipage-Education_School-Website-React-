import React from "react";
import { Btn } from "../component/btn";
import CardCategory from "../component/cardCategory";
import { content } from "../categoryContent";
import "./categoriesStyle.css";

function categories() {
  const theme = {
    textColor: "black",
    backgroundColor: "white",
    hoverTextColor: "white",
  };
  return (
    <section className="categories">
      <div className="container categories__container">
        <div className="categories__left">
          <h1> دوره های آموزشی </h1>
          <p>لورم ایپسوم متن ساختگی با و با استفاده از طراحان گرافیک است.</p>
          <Btn theme={theme} href="Courses">
            همه آموزش ها
          </Btn>
        </div>
        <div className="categories__right">
          {content.map((c) => {
            return (
              <CardCategory
                key={c.id}
                title={c.title}
                body={c.body}
                icon={c.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default categories;
