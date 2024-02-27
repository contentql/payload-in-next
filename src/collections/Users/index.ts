import { PrimaryActionEmailHtml } from '../../emails/PrimaryActionEmail';
import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    cookies: {
      secure: true,
      sameSite: 'strict',
      // domain: process.env.PAYLOAD_COOKIE_DOMAIN,
    },
    verify: {
      generateEmailHTML: ({ token }) => {
        return PrimaryActionEmailHtml({
          actionLabel: 'verify your account',
          buttonText: 'Verify Account',
          href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify?token=${token}`,
        });
      },
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'user_name',
      type: 'text',
      label: 'User Name',
    },
    {
      name: 'roles',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Seller', value: 'seller' },
      ],
      defaultValue: ['user'],
      hasMany: true,
      saveToJWT: true,
    },
  ],
};

export default Users;
