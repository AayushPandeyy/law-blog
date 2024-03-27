import React from "react";
import image from "../assets/image.jpg";
import "../css/latestarticle.css";

export default function LatestArticleComponent() {
  return (
    <div className="news-card">
      <div className="image-container">
        <img src={image} alt="News" />
      </div>
      <div className="content">
        <div className="meta">
          <span className="category">Criminal Law</span>
          <span className="read-time">5 min read</span>
        </div>
        <h2 className="title">
          Marriage Cancellation in Nepal – Void Marriage Law in Nepal 2081 Easy
          Guide
        </h2>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          doloremque tempore adipisci enim animi perferendis, cumque, maxime
          obcaecati exercitationem dolorum nesciunt? Dolor velit voluptatum vel
          quaerat delectus corporis assumenda neque iusto. Delectus corporis
          suscipit facere, eaque placeat enim ullam esse. Voluptatem cumque
          harum provident atque blanditiis sequi tempora laboriosam recusandae
          cupiditate facere? Quos quia ad, molestiae voluptatum perspiciatis
          necessitatibus harum. At tenetur iste quasi laboriosam! Iusto totam
          corrupti sit recusandae quos voluptatem omnis earum, eum, natus
          aspernatur expedita, id tenetur exercitationem aliquam reiciendis
          veritatis nobis animi cumque! Nisi commodi laudantium praesentium
          nostrum dicta amet architecto ad vel cum? Expedita, perferendis!
        </p>
        <div className="date">9 Jan 2022</div>
        <button className="show-more-button">Show More</button>
      </div>
    </div>
  );
}
