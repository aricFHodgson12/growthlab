import { ILoader } from 'components/types';

export const getLoader = ({ src, width, quality }: ILoader) => {
  return `${process.env.NEXT_PUBLIC_HOST}/${src}?w=${width}&q=${quality || 75}`;
};
