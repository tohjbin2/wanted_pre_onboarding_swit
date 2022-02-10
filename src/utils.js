export const formatingTime = () => {
  const dt = new Date();
  dt.setHours(dt.getHours() + 9);

  return dt.toISOString().replace('T', ' ').substring(0, 19);
};
