import React from "react";

const useSelect = (options) => {
  const [value, setValue] = React.useState("");

  function onChange({ target }) {
    setValue(target.value);
  }

  return { value, setValue, onChange, options };
};

export default useSelect;
