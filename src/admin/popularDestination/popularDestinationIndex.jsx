import AdminDestinationList from "../AdminDestinationList";

const PopularDestinationIndex = () => {
  return (
    <AdminDestinationList
      title="Popular Destinations"
      fetchEndpoint="/admin/popular-destinations"
      deleteEndpoint="/admin/popular-destination/"
      dataKey="popularDestination"
      createPath="/admin/popular-destination/create"
      editPath="/admin/popular-destination/edit"
    />
  );
};

export default PopularDestinationIndex;