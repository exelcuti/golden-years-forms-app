import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useResidentFormsData = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchForms = async () => {
    try {
      const { data, error } = await supabase
        .from('resident_forms')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setForms(data || []);
    } catch (error) {
      console.error('Error fetching forms:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return { 
    forms, 
    setForms,
    loading, 
    refetch: fetchForms 
  };
};