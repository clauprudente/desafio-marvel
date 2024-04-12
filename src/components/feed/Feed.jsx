import React from "react";
import {
  StyledFeed,
  StyledTitle,
  StyledCard,
  StyledPhoto,
} from "./Feed.styles";
import { Link } from "react-router-dom";

export const Feed = ({ data }) => {
  return (
    <StyledFeed>
      {data &&
        data.map((item) => {
          return (
            <Link to={`/character/${item.id}`}>
              <StyledCard>
                <StyledPhoto
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt="Hero Image"
                />
                <StyledTitle>
                  <p>{item.name}</p>
                </StyledTitle>
              </StyledCard>{" "}
            </Link>
          );
        })}
    </StyledFeed>
  );
};
