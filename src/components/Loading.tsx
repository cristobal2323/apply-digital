import { FC } from "react";
("react");

interface Props {
  isLoading: boolean;
  isFetching: boolean;
}

export const Loading: FC<Props> = ({ isLoading, isFetching }) => {
  return (
    <>
      {isLoading || isFetching ? (
        <div className="container">
          <h5>Loading ...</h5>
        </div>
      ) : null}
    </>
  );
};
