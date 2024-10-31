export const truncateString = (str) => {
    if (str.length <= 20) {
      return str;
    } else {
      return str.substring(0, 20) + '...';
    }
  }