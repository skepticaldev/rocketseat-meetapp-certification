import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt', pt);

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(
    defaultValue ? parseISO(defaultValue) : new Date()
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        locale="pt"
        todayButton="Hoje"
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="Hora"
        showTimeSelect
        dateFormat="dd 'de' MMMM 'de' yyyy, 'às ' HH:mm"
      />
      {error && <span>{error}</span>}
    </>
  );
}
