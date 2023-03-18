import { useCallback, useEffect, useState } from 'react';
import { getCourses } from '../api/services/courses';
import { ErrorType, TApiResponse } from '../types';

const useCourses = <T>(): TApiResponse<T[]> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [data, setData] = useState<T[]>([]);

  const fetchCourses = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const { data: coursesData } = await getCourses();

      setData(coursesData.courses as T[]);
    } catch (e: unknown) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return { loading, error, data };
};

export default useCourses;
