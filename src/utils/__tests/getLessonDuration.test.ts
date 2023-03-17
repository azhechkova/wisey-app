import getLessonDuration from '../getLessonDuration';

describe('getLessonDuration util', () => {
  test('should return 00:00 min', () => {
    const duration = 0;

    expect(getLessonDuration(duration)).toEqual('00:00 min');
  });

  test('should return 02:58 min', () => {
    const duration = 178;

    expect(getLessonDuration(duration)).toEqual('02:58 min');
  });

  test('should return 01:02:58 hrs', () => {
    const duration = 3778;

    expect(getLessonDuration(duration)).toEqual('01:02:58 hrs');
  });
});
