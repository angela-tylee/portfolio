import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ButtonGroup = ({ color }) => {
  const { t } = useTranslation();

  const shareModalContainerRef = useRef(null);

  // TODO: Manipulate class instead of style directly.
  function toggleContactBtn() {
    if (shareModalContainerRef.current.style.display !== 'block') {
      shareModalContainerRef.current.style.display = 'block';
      shareModalContainerRef.current.classList.add('show');
    } else {
      shareModalContainerRef.current.style.display = 'none';
    }
  }

  return (
    <div className="d-flex">
      <div className="contact-btn-container position-relative">
        <div
          ref={shareModalContainerRef}
          className="share-modal-container w-100"
        >
          <div className="share-modal bg-body-secondary rounded-1 mx-2 py-2 px-4 d-flex justify-content-between align-items-center shadow">
            <a
              href="https://www.linkedin.com/in/angela-tylee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a href="mailto:angela.tylee25@gmail.com">
              <i className="bi bi-envelope-fill fs-5"></i>
            </a>
          </div>
        </div>
        <button
          className={`btn btn-${color}`}
          onClick={toggleContactBtn}
          style={{ width: '130px' }}
        >
          {t('get-in-touch')}
        </button>
      </div>
      <button
        href=""
        className={`btn btn-outline-${color} ms-4`}
        style={{ width: '130px' }}
      >
        <a href={t('resume-pdf')} target="_blank" rel="noopener noreferrer">{t('resume')}</a>
      </button>
    </div>
  );
};

export default ButtonGroup;
