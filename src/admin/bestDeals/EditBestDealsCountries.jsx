import AdminEditDestination from "../AdminEditDestination";

const EditBestDealsCountries = () => {
  return (
    <AdminEditDestination
      title="Edit Best Deals Countries"
      fetchEndPoint="/admin/best-deals/"
      updateEndPoint="/admin/best-deals/"
      redirectEndPoint="/admin/best-deals"
      dataKey="bestDealsCountry"
    />
  );
};

export default EditBestDealsCountries