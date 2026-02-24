import AdminEditDestination from "../AdminEditDestination";

const EditBusinessClassCountries = () => {
  return (
    <AdminEditDestination
      title="Edit Business Class Countries"
      fetchEndPoint="/admin/business-class/"
      updateEndPoint="/admin/business-class/"
      redirectEndPoint="/admin/business-class"
      dataKey="businessClassCountry"
    />
  );
};

export default EditBusinessClassCountries