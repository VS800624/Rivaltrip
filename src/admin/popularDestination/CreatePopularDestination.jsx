import AdminCreateDestinationList from "../AdminCreateDestinationList";

const CreatePopularDestination = () => {
  return (
    <AdminCreateDestinationList
      title="Create Popular Destinations"
      submitEndpoint="/admin/popular-destination"
      redirectPath="/admin/popular-destination"
    />
  );
};

export default CreatePopularDestination;