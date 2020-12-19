// @flow strict
import React from "react";
// import ReactDisqusComments from "react-disqus-comments";
import { Disqus } from "gatsby-plugin-disqus";
import { useSiteMetadata } from "../../../hooks";

type Props = {
  postTitle: string,
  postSlug: string,
};

const Comments = ({ postTitle, postSlug }: Props) => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    // <ReactDisqusComments
    //   shortname={disqusShortname}
    //   identifier={postTitle}
    //   title={postTitle}
    //   url={url + postSlug}
    // />
    <Disqus
      shortname={disqusShortname}
      identifier={postTitle}
      title={postTitle}
      url={url + postSlug}
    />
  );
};

export default Comments;
