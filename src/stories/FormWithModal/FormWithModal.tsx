import React, { useState } from 'react';
import { Button } from "../Button";
import s from './FormWithModal.module.scss';
import { Popover } from "../Popover/Popover";
import { logo } from "src/stories/Logo/Logo.stories";

interface ErrorObj {
  title: boolean,
  description: boolean,
}

export const FormWithModal: React.FC = () => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorObj>({
    title: false,
    description: false,
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitleValue(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDescriptionValue(e.target.value);
  };

  const handleOpenPopup = (): void => {
    const newErrors = {
      title: !titleValue.trim(),
      description: !descriptionValue.trim()
    };

    setErrors(newErrors);
    setVisible(!newErrors.title && !newErrors.description);
  }

  const onClosePopover = ():void => {
    setVisible(false);
  };
  
  return (
    <div className={s.wrapper}>
      <form className={s.form}>
        <fieldset className={s.fieldset}>
          <label className={s.label}>Modal title*:</label>
          <input
            placeholder={'Enter the title here'}
            type="text"
            maxLength={30}
            name={'title'}
            onChange={handleTitleChange}
          />
          <span className={s.err} style={{ display: errors.title ? 'block' : 'none' }}>
            Required field
          </span>
        </fieldset>
        <fieldset className={s.fieldset}>
          <label className={s.label}>Modal description*:</label>
          <input
            placeholder={'Enter the description here'}
            type="text"
            maxLength={30}
            name={'description'}
            onChange={handleDescriptionChange}
          />
          <span className={s.err} style={{ display: errors.description ? 'block' : 'none' }}>
            Required field
          </span>
        </fieldset>
        <Button
          label={'Открыть модальное окно'}
          primary={true}
          onClick={handleOpenPopup}
        />
      </form>
      <Popover
        visible={visible}
        title={titleValue}
        onClose={onClosePopover}
      >
        <h3>{descriptionValue}</h3>
      </Popover>
    </div>
  );
}