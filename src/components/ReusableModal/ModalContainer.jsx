import React from "react";
import { useState } from "react";
import { ChildModalContent } from "./ChildModalContent";
import { forwardRef, useImperativeHandle } from "react";

export const ModalContainer = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => {
      setOpen(true);
    },
    closeModal: () => {
      setOpen(false);
    },
  }));
  return (
    <div>
      <ChildModalContent
        open={open}
        onClose={() => setOpen(false)}
        {...props}
      />
    </div>
  );
});
