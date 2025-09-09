import React from "react";

function Card({ testimony, avater, userName, userTitle }) {
  return (
    <div className="card">
      <p className="card__testimony">{testimony}</p>
      <div className="card__profile">
        <img src={avater} alt={userName} className="card__avater" />
        <div className="card__user-data">
          <h3 className="card__user-name">{userName}</h3>
          <p className="card__user-title">{userTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonal() {
  return (
    <div className="testimonial">
      {/* <img src="/public/images/" alt="" className="qote" /> */}
      <Card
        testimony="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        avater="/public/images/profile-1.jpg"
        userName="Satish Patel
"
        userTitle="Founder & CEO, Huddle
"
      />
      <Card
        testimony="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        avater="/public/images/profile-2.jpg"
        userName="Bruce McKenzie
"
        userTitle="Founder & CEO, Huddle
"
      />
      <Card
        testimony="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        avater="/public/images/profile-3.jpg"
        userName="Iva Boyd
"
        userTitle="Founder & CEO, Huddle
"
      />
    </div>
  );
}
