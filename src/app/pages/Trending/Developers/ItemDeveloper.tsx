// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label,jsx-a11y/alt-text,react/jsx-props-no-spreading */
import React from 'react';
import cn from 'classnames';
import { Item } from '../../../components';
import { PopularRepoIcon, RepoNameIcon } from '../../../icons';

const nsItem = 'dev-item';

const Avatar = ({ url, avatar }: any) => (
  <a href={url} className="avatar">
    <img width="48" height="48" src={avatar} />
  </a>
);
const ItemDeveloper = ({
  rank,
  username,
  name,
  url,
  avatar,
  popularRepository,
}: any) => (
  <Item>
    <div className={cn(nsItem, 'row')}>
      <div className="col-md-4 col-12 d-flex user-details">
        <div>
          {rank}
        </div>
        <div><Avatar avatar={avatar} url={url} /></div>
        <div>
          <a href={url} className={`${nsItem}__title`}>
            <h3>
              {name}
            </h3>
          </a>
          <p className="color-text-secondary">{username}</p>
        </div>
      </div>
      <div className="col-md-4 col-12">
        <div className="popular-repo">
          <PopularRepoIcon />
          POPULAR REPO
        </div>
        <a href={popularRepository.url} className={`${nsItem}__title`}>
          <h4>
            <RepoNameIcon />
            <span>{popularRepository.repositoryName}</span>
          </h4>
        </a>
        <div>
          <p className="color-text-secondary">
            {popularRepository.description}
          </p>
        </div>
      </div>
    </div>
  </Item>
);
export default ItemDeveloper;
