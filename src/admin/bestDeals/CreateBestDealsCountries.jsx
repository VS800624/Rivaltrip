import AdminCreateDestinationList from "../AdminCreateDestinationList";

const CreateBestDealsCountries = () => {
  return (
    <AdminCreateDestinationList
      title="Create Best Deals Countries"
      submitEndpoint="/admin/best-deals"
      redirectPath="/admin/best-deals"
    />
  );
};

export default CreateBestDealsCountries;