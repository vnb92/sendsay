import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Icon } from '../Icon/Icon';
import './File.scss';

const CLIP_ICON_WIDTH_PX = 34;
const CLIP_ICON_HEIGHT_PX = 30;

const TRASH_ICON_WIDTH_PX = 13;
const TRASH_ICON_HEIGHT_PX = 16;

export const File = ({ file, onRemove }) => {
  const { t } = useTranslation();

  return (
    <div className="file">
      <Icon
        name="clip"
        className="file__icon-clip"
        width={CLIP_ICON_WIDTH_PX}
        height={CLIP_ICON_HEIGHT_PX}
      />

      <span className="file__name">{ file.name }</span>

      <button
        type="button"
        className="file__trash"
        onClick={onRemove}
      >
        <Icon
          name="trash"
          className="file__trash-icon"
          width={TRASH_ICON_WIDTH_PX}
          height={TRASH_ICON_HEIGHT_PX}
        />
        <span className="file__trash-title">{t('remove')}</span>
      </button>
    </div>
  );
};

File.propTypes = {
  file: PropTypes.shape({
    size: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func,
};

File.defaultProps = {
  onRemove: () => {},
};
