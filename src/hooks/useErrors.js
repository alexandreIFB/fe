import { useState } from 'react';

function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExist = errors.some((error) => error.field === field);

    if (errorAlreadyExist) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  function findMessageError(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    setError,
    removeError,
    findMessageError,
    getErrorMessageByFieldName,
    errors,
  };
}

export default useErrors;
