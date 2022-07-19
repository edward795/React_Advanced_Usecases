import React from "react";
import { useState } from "react";
import { ModalContent } from "./ModalContent";
import { forwardRef, useImperativeHandle } from "react";

export const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => {
      setOpen(true);
    },
  }));
  return (
    <div>
      <ModalContent
        open={open}
        setOpen={setOpen}
        onClose={() => setOpen(false)}
        {...props}
      />
    </div>
  );
});
