import { Image } from 'sanity';

export interface  Card {
  _type: 'cards';
  cardIcon: {
      asset: {
          url: string;
          _type: 'reference';
      };
  };
  title: string;
  status: string;
  description: string;
  links: {
      icon: {
          asset: {
              url: string;
          };
      };
      name: string;
  }[];
}

export interface  MemberPolicy {
    _type: 'memberPolicies';
    title: string;
    description: string;
  }

export interface PrivacyPolicy {
    _type: 'privacyPolicy';
    title:string;
    description:string;
}
  