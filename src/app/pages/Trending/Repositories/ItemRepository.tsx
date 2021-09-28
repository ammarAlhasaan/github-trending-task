// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label,jsx-a11y/alt-text,react/jsx-props-no-spreading */
import React from 'react';
import { Item } from '../../../components';
import { ForkIcon, RepoNameIcon, StarIcon } from '../../../icons';

const nsItem = 'repo-item';

const Avatar = ({ url, avatar }: any) => (
  <a href={url} className="avatar">
    <img width="20" height="20" src={avatar} />
  </a>
);
const ItemRepository = ({
  username,
  repositoryName,
  url,
  description,
  language,
  totalStars,
  forks,
  builtBy,
}: any) => (
  <Item>
    <div className={nsItem}>
      <div className="col-9">
        <a href={url} className={`${nsItem}__title`}>
          <h3>
            <RepoNameIcon />
            <span>{username}</span>
            <span><b>{`/${repositoryName}`}</b></span>
          </h3>
        </a>

        <p className="color-text-secondary">{description}</p>
        <div className={`${nsItem}__details`}>
          {language && (<span className={`${nsItem}__language`}>{language}</span>)}
          {totalStars && (
          <a href="#">
            <span className={`${nsItem}__stars`}>
              <StarIcon />
              {totalStars}
            </span>
          </a>
          )}
          {forks && (
          <a href="#">
            <span className={`${nsItem}__forks`}>
              <ForkIcon />
              {forks}
            </span>
          </a>
          )}
          {builtBy && (
          <>
            <span className={`${nsItem}__built-by`}>
              Built by
              {builtBy?.map((user: any, index: number) => <Avatar key={String(index)} {...user} />)}
            </span>
          </>
          )}
        </div>
      </div>
    </div>
  </Item>
);

export default ItemRepository;
