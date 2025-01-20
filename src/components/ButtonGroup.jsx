import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ButtonGroup = ({ color }) => {
  const { t } = useTranslation();

  const shareModalContainerRef = useRef(null);

  // TODO: useRef or id
  // const shareModal = document.querySelector('.share-modal-container');

  // function toggleContactBtn() {
  //   if (shareModal.style.display == 'none') {
  //     shareModal.style.display = 'block';
  //     shareModal.classList.add('show');
  //   } else {
  //     shareModal.style.display = 'none';
  //    }
  // }

    // console.log("1", shareModalContainerRef.current.style.display)

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
        <div ref={shareModalContainerRef} className="share-modal-container w-100">
          <div className="share-modal bg-secondary rounded-1 mx-2 py-2 px-4 d-flex justify-content-between align-items-center">
            <i className="bi bi-linkedin fs-5"></i>
            <i className="bi bi-envelope-fill fs-5"></i>
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
      <button href="" className={`btn btn-outline-${color} ms-4`}>
        {t('resume')}
      </button>
    </div>
  );
};

export default ButtonGroup;
