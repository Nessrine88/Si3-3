import React, { useEffect } from 'react';
import "../../app/globals.css";

const CardPopup: React.FC<{ show: boolean; handleClose: () => void }> = ({ show, handleClose }) => {
  useEffect(() => {
    if (show) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        if (window.hbspt) {
          // @ts-ignore
          window.hbspt.forms.create({
            region: "na1",
            portalId: "45396312",
            formId: "52c3e838-aa8e-4e75-b874-4fd6ac9c3aef",
            target: "#hubspotForm"
          });
        }
      };
      document.body.appendChild(script);

      // Clean up the script and form on unmount
      return () => {
        document.body.removeChild(script);
        const formContainer = document.getElementById("hubspotForm");
        if (formContainer) {
          formContainer.innerHTML = '';
        }
      };
    }
  }, [show]);

  return (
    show && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4  overflow-auto"
        aria-labelledby="popup-title"
        role="dialog"
        aria-modal="false"
      >
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 id="popup-title" className="text-2xl clash font-bold leading-6 text-[20px]">Add Community</h2>
            <i className="fas fa-times text-[#404040] text-lg cursor-pointer" onClick={handleClose}></i>
          </div>
          <div id="hubspotForm"></div>
        </div>
      </div>
    )
  );
};

export default CardPopup;
