/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef } from "react";
import { useFormControl } from "../FormControl";
import { useColorMode } from "../ColorModeProvider";
import Text from "../Text";

export const FormHelperText = forwardRef((props, ref) => {
  const { mode } = useColorMode();
  const formControl = useFormControl(props);
  const color = { light: "gray.500", dark: "whiteAlpha.600" };

  return (
    <Text
      mt={2}
      ref={ref}
      id={`${formControl.id}-help-text`}
      color={color[mode]}
      lineHeight="normal"
      fontSize="sm"
      {...props}
    />
  );
});

export default FormHelperText;
