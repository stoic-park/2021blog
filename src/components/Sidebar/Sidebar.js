// @flow strict
import React from "react";
import Author from "./Author";
import Contacts from "./Contacts";
import Copyright from "./Copyright";
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";
import { useSiteMetadata, useTagsList } from "../../hooks";
// tag 컴포넌트 가져오기
import Tags from "../Post/Tags";

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  // 태그 목록
  const tags = useTagsList();
  // console.log(tags);
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__inner"]}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
        {/* <Tags
          tags={tags.map((tag) => tag.fieldValue)}
          tagSlugs={tags.map((tag) => `/tag/${tag.fieldValue}`)}
          // {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        /> */}
      </div>
    </div>
  );
};

export default Sidebar;
