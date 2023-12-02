import React from "react";
import RatingCard from "@/app/components/Cards/RatingCard";
import { takemeAppRatings } from "@/app/data/ui";
import Link from "next/link";

const RatingsComp = () => {
  return (
    <>
      <h3 className="text-center my-3">
        Stories of TAKEME App from Google Play Store
      </h3>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 px-7 justify-center content-center">
        {takemeAppRatings?.map((item, key) => (
          <RatingCard
            key={item.id}
            no_of_stars={item.no_of_stars}
            name={item.name}
            profile_link={item.profile_link}
            review={item.review}
          />
        ))}
        <Link href="https://bit.ly/legendmp-takeme" className="btn btn-link">
          see more
        </Link>
      </div>
    </>
  );
};

export default RatingsComp;
