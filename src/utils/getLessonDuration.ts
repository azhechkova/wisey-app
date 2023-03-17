const getLabel = (hrs: number): string => {
  if (hrs) return 'hrs';

  return 'min';
};

const getLessonDuration = (duration: number): string => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const seconds = duration - hours * 3600 - minutes * 60;

  const intl = Intl.NumberFormat('en-US', { minimumIntegerDigits: 1 });
  const intlPadded = Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2,
  });

  const timeFormat = [hours, minutes, seconds]
    .map(val => {
      return val < 10 ? intlPadded.format(val) : intl.format(val);
    })
    .filter((val, i) => {
      if (i === 0) {
        return !(val === '00' || val === '0');
      }

      return true;
    })
    .join(':');

  const label = getLabel(hours);

  return `${timeFormat} ${label}`;
};

export default getLessonDuration;
