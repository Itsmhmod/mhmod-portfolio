import { Email, GitHub, LinkedIn, Resume, Facebook } from 'icons';
import { Config } from 'types';

export const config: Config = {
  name: {
    display: 'Mahmoud Himeda',
  },
  title: {
    display: 'Cyber Security Engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/Itsmhmod',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/its-mhmod/',
    },
    {
      name: 'facebook',
      display: 'Facebook',
      ariaLabel: 'Facebook profile (opens in new window)',
      icon: <Facebook />,
      href: 'https://www.facebook.com/its.mhmood',
    },
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1oxjNgrTN07ujDjkfel67Fy4E9siSSujA/view?usp=sharing',
    },
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:mhmod203026@gmail.com',
    },
  ],
};
