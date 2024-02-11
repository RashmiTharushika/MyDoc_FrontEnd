import Topbar from '../../components/ui/topbar/Topbar';
import DoctorRegFrm from '../../components/form/DoctorRegFrm';

import './doctorReg.css';

export default function DoctorReg() {
  return (
    <>
      <Topbar />
      <div className="homeContent">
        <div className="DoctorRegForm">
          <DoctorRegFrm />
        </div>
        <div className="homeBody"></div>
      </div>
    </>
  );
}
