import React, {useImperativeHandle, forwardRef} from 'react';

interface FormProps {
  initialData: string;
}

export interface FormRef {
  submit(): void
}

const Form: React.RefForwardingComponent<FormRef, FormProps> = (props, ref) => {
  function submit() {
    alert('Submit')
  }
  useImperativeHandle(ref, () => ({
    submit,
  }))
  return (
    <div />
  );
}

export default forwardRef(Form);