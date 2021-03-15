import React from "react";
import Rating from "@material-ui/lab/Rating";
import { useRouter } from "next/router";
import HoverRating from "app/components/elements/HoverRating";

// {
//   imgUrl,
//   name,
//   author,
//   rating,
//   price,
//   discount,
// }
export default function CourseSwiperItem() {
  const router = useRouter();

  const handleClick = () => router.push("/course/1");
  return (
    <div className="course-swiper-item" onClick={handleClick}>
      <img
        src="https://img-a.udemycdn.com/course/240x135/2605732_e3d5_3.jpg?KH_c_8Csyb1eQsIycUKHMTn6qk_oavpuWkzF01rfxjxQr1W7YMR9BwOijplslKIcRTBhMF4HmwKs4SCIz3o7V3aeySYfs-XA3RkU9OVMVKyV9cWVtQatjsZh6g6A0mb_"
        alt=""
        className="course-swiper-image"
      />
      <p className="course-swiper-title">
        AWS EKS Kubernetes-Masterclass | DevOps, Microservices
      </p>
      <p className="course-swiper-author">Johnathan</p>
      <div className="course-swiper-rating">
        {/* <Rating value={4.4} precision={0.1} readOnly /> */}
        {/* <HoverRating value={4.5} readOnly={true} /> */}
      </div>
      <p className="course-swiper-price">$12.99</p>
    </div>
  );
}
