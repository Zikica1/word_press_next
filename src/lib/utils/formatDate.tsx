export const formatDate = (date: string) => {
  const dateObj = new Date(date);

  return new Intl.DateTimeFormat('sr-RS', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(dateObj);
};
