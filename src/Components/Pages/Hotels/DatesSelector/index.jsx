import React from "react";
import { Input } from "../../../Input";

export const DatesSelector = ({ formData, changeFormData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
      <Input
        type="date"
        value={formData.startDate}
        name="startDate"
        label="startDate"
        labelText="Start date"
        onChange={changeFormData}
      />
      <Input
        type="date"
        value={formData.endDate}
        name="endDate"
        label="endDate"
        labelText="End date"
        onChange={changeFormData}
      />
      <Input
        type="number"
        value={formData.people}
        name="people"
        label="guest"
        labelText="Gests number"
        onChange={changeFormData}
      />
    </div>
  );
};
