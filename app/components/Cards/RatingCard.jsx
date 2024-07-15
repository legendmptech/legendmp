import Image from "next/image";
import React from "react";
function RatingCard({ name, review, profile_link, no_of_stars }) {
  const star = "⭐";
  return (
    <div className="w-full flex flex-col md:w-[300px] p-3 gap-2 content-end hover:scale-105 transition-all">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10">
          <Image
            src={profile_link}
            width={50}
            height={50}
            alt="profile image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <p>{name}</p>
          <p>{star.repeat(no_of_stars)}</p>
        </div>
      </div>
      <p>{review}</p>
    </div>
  );
}
export default RatingCard;
