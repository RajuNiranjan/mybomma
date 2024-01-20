import UploadCardInfo from "@/components/uplodeinfo/uploadcardinfo";
import Uplodeform from "@/components/uplodeinfo/uplodeform";
import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <div className="w-full  grid grid-cols-1 sm:grid-cols-12 gap-2">
        <div className=" sm:col-span-8">
          <UploadCardInfo />
        </div>
        <div className="w-full sm:col-span-4">
          <Uplodeform />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
