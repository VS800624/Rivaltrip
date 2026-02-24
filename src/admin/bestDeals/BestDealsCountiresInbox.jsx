import AdminDestinationList from "../AdminDestinationList";

const BestDealsCountriesIndex = () => {
  return (
    <AdminDestinationList
      title="Best Deals Countries"
      fetchEndpoint="/admin/best-deals"
      deleteEndpoint="/admin/best-deals/"
      dataKey="bestDealsCountries"
      createPath="/admin/best-deals/create"
      editPath="/admin/best-deals/edit"
    />
  );
};

export default BestDealsCountriesIndex;