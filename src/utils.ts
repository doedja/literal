export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export const getSlug = (slug: string) => slug.split('/').slice(1).join('/');
