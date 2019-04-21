import * as React from 'react';
import { formContext } from './helpers/context';
import { get } from './helpers/operations';

export interface FieldInformation {
  error: string;
}

export default function useError(fieldId: string): string | null {
  if (process.env.NODE_ENV !== 'production' && (!fieldId || typeof fieldId !== 'string')) {
    throw new Error('The Error needs a valid "fieldId" property to  function correctly.');
  }
  const { errors } = React.useContext(formContext);
  if (process.env.NODE_ENV !== 'procution') {
    React.useDebugValue(`${fieldId} Error: ${get(errors, fieldId)}`);
  }
  return React.useMemo(() => get(errors, fieldId), [errors]);
}
