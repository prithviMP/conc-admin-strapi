import type { Schema, Attribute } from '@strapi/strapi';

export interface PollsOption extends Schema.Component {
  collectionName: 'components_polls_options';
  info: {
    displayName: 'Option';
    description: '';
  };
  attributes: {
    optionText: Attribute.String & Attribute.Required;
    votes: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
  };
}

export interface PostsImage extends Schema.Component {
  collectionName: 'components_posts_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PostsPoll extends Schema.Component {
  collectionName: 'components_posts_polls';
  info: {
    displayName: 'Poll';
  };
  attributes: {
    options: Attribute.Component<'polls.option', true>;
  };
}

export interface PostsVideo extends Schema.Component {
  collectionName: 'components_posts_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    video: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'polls.option': PollsOption;
      'posts.image': PostsImage;
      'posts.poll': PostsPoll;
      'posts.video': PostsVideo;
    }
  }
}
