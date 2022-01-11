import React from "react";

const useInputFile = () => {
  const [value, setValue] = React.useState('');

  function onChange({ target }) {
    setValue({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return { value, setValue, onChange};
};

export default useInputFile;
