import style from "./Modal.module.css";
import { forwardRef, useState } from "react";
import { useImperativeHandle } from "react/cjs/react.development";

const DeleteModal = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    displayModal() {
      setToggle(true);
      // setTimeout(() => setToggle(false), 3000);
    },
  }));

  const hideModal = () => {
    setToggle(false);
  };
  return (
    <>
      {toggle && (
        <div className={style.modal}>
          <div className={style.modal__content}>
            <button className={style.modal__content_button} onClick={hideModal}>
              X
            </button>
            <h3 className={style.modal__content_label}>
              Do you want to remove the product?
            </h3>
            <div className={style.modal__actions}>
              <button
                className={style.modal__actions_cancel}
                onClick={hideModal}
              >
                Cancel
              </button>
              <button className={style.modal__actions_delete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export { DeleteModal };
