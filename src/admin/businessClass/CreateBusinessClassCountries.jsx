import AdminCreateDestinationList from "../AdminCreateDestinationList";

const CreateBusinessClassCountries = () => {
  return (
    <AdminCreateDestinationList
      title="Create Business Class Countries"
      submitEndpoint="/admin/business-class"
      redirectPath="/admin/business-class"
    />
  );
};

export default CreateBusinessClassCountries;