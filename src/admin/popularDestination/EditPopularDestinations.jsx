import AdminEditDestination from "../AdminEditDestination";

const EditPopularDestination = () => {
  return (
    <AdminEditDestination
      title="Edit Popular Destination"
      fetchEndPoint="/admin/popular-destination/"
      updateEndPoint="/admin/popular-destination/"
      redirectEndPoint="/admin/popular-destinations"
      dataKey="popularDestination"
    />
  );
};

export default EditPopularDestination