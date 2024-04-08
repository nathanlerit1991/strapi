import type { Schema, Attribute } from '@strapi/strapi';

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface CarouselCarousel extends Schema.Component {
  collectionName: 'components_carousel_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'folder';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.card': CardCard;
      'carousel.carousel': CarouselCarousel;
    }
  }
}
