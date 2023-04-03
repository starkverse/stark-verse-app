export const formatStr = ({
  value,
  len = 4,
}: any) => {
  const l = value.length;
  if(l < len * 2) {
    return value;
  };
  let start = len;
  if(value.startsWith('0x')) {
    start = len + 2;
  }
  return value.slice(0, start) + '...' + value.slice(l-len);
}