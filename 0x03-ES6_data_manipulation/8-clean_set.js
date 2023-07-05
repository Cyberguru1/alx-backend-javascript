// function to perform

const cleanSet = (set, starts) => {
  const str = [];
  if (starts === '' || typeof starts !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(starts)) {
      str.push(s.slice(starts.length));
    }
  });
  return str.join('-');
};

export default cleanSet;
