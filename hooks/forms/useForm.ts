import { useState, ChangeEvent } from 'react';

interface UseFormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  validate?: (values: T) => Partial<Record<keyof T, string>> | null;
}

interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitError: string | null;
  submitSuccess: boolean;
}

export function useForm<T extends Record<string, any>>({ 
  initialValues, 
  onSubmit,
  validate
}: UseFormOptions<T>) {
  const [formState, setFormState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isSubmitted: false,
    submitError: null,
    submitSuccess: false
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      touched: { ...prev.touched, [name]: true }
    }));
  };

  const setFieldValue = (name: keyof T, value: any) => {
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      touched: { ...prev.touched, [name]: true }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState(prev => ({ ...prev, isSubmitting: true, submitError: null }));

    if (validate) {
      const errors = validate(formState.values);
      if (errors) {
        setFormState(prev => ({ 
          ...prev, 
          errors,
          isSubmitting: false 
        }));
        return;
      }
    }

    try {
      await onSubmit(formState.values);
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        isSubmitted: true,
        submitSuccess: true
      }));
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        submitError: error instanceof Error ? error.message : 'An error occurred'
      }));
    }
  };

  const resetForm = () => {
    setFormState({
      values: initialValues,
      errors: {},
      touched: {},
      isSubmitting: false,
      isSubmitted: false,
      submitError: null,
      submitSuccess: false
    });
  };

  return {
    values: formState.values,
    errors: formState.errors,
    touched: formState.touched,
    isSubmitting: formState.isSubmitting,
    isSubmitted: formState.isSubmitted,
    submitError: formState.submitError,
    submitSuccess: formState.submitSuccess,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetForm
  };
}
