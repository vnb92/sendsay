import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';
import { sendMessage } from '../../api/sendMessage';
import { checkMessageStatus } from '../../api/checkMessageStatus';
import { addTrack } from '../../store/actions/messages';
import { resetForm, setIsPending, setFormErrors } from '../../store/actions/form';
import { getTrackStatus } from '../../helpers/getTrackStatus';
import { validateForm, getHasError } from './helpers';

export const Submit = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const form = useSelector(state => state.form);

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const errors = validateForm(form);
    const hasError = getHasError(errors);
    if (hasError) {
      dispatch(setFormErrors(errors));
      return;
    }

    dispatch(setIsPending(true));
    try {
      const trackId = await sendMessage(form);
      const trackStatus = await checkMessageStatus(trackId);

      const track = {
        id: trackId,
        topic: form.topic,
        date: t('formattedDate', { date: new Date() }),
        status: getTrackStatus(trackStatus),
      };

      dispatch(addTrack(track));
    } catch (error) {
      // eslint-disable-next-line
      alert(t('sendMessageError'))
    } finally {
      dispatch(resetForm());
      dispatch(setIsPending(false));
    }
  };

  return (
    <Button
      type="button"
      text="Отправить"
      onClick={handleSubmit}
    />
  );
};
