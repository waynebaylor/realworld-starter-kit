import { getUser } from '../state/userState';
import { UserDetails } from '../types';

export const favorite = async (slug: string) => {
  const user = getUser() as UserDetails;
  
  fetch(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Token ${user.token}`
    }
  });
};

export const unfavorite = async (slug: string) => {
  const user = getUser() as UserDetails;

  fetch(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Authorization: `Token ${user.token}`
    }
  });
};