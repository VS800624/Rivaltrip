import AdminDestinationList from "../AdminDestinationList";

const BusinessClassCountriesIndex = () => {
  return (
    <AdminDestinationList
      title="Business Class Countries"
      fetchEndpoint="/admin/business-class"
      deleteEndpoint="/admin/business-class/"
      dataKey="businessClassCountries"
      createPath="/admin/business-class/create"
      editPath="/admin/business-class/edit"
    />
  );
};

export default BusinessClassCountriesIndex;