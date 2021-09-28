import React from 'react';
import ContentLoader from 'react-content-loader';

const FadingLoaderCard1 = () => (
  <ContentLoader
    width={400}
    height={40}
    backgroundColor="#ababab"
    foregroundColor="#fafafa"
  >
    <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
    <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
    <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
  </ContentLoader>
);

const FadingLoaderCard2 = () => (
  <ContentLoader
    width={400}
    height={40}
    backgroundColor="#bfbfbf"
    foregroundColor="#fafafa"
  >
    <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
    <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
    <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
  </ContentLoader>
);

const FadingLoaderCard3 = () => (
  <ContentLoader
    width={400}
    height={40}
    backgroundColor="#dadada"
    foregroundColor="#fafafa"
  >
    <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
    <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
    <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
  </ContentLoader>
);

const FadingLoaderCard4 = () => (
  <ContentLoader
    width={400}
    height={40}
    backgroundColor="#ececec"
    foregroundColor="#fafafa"
  >
    <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
    <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
    <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
  </ContentLoader>
);

const FadingLoaderCard5 = () => (
  <ContentLoader
    width={400}
    height={40}
    backgroundColor="#f7f7f7"
    foregroundColor="#fafafa"
  >
    <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
    <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
    <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
  </ContentLoader>
);

export default () => (
  <div>
    <FadingLoaderCard1 />
    <FadingLoaderCard2 />
    <FadingLoaderCard3 />
    <FadingLoaderCard4 />
    <FadingLoaderCard5 />
  </div>
);
