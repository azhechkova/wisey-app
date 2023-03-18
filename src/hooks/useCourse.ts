import { useCallback, useEffect, useState } from 'react';
import { getCourse } from '../api/services/courses';
import { ErrorType, TApiResponse } from '../types';

const useCourse = <T>(id?: string): TApiResponse<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [data, setData] = useState(null);

  const fetchCourse = useCallback(async (): Promise<void> => {
    try {
      if (!id) return;
      setLoading(true);
      const { data: courseData } = await getCourse(id);

      setData(courseData);
    } catch (e: unknown) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  return { loading, error, data };
};

export default useCourse;
