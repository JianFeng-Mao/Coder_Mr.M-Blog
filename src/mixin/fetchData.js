export default function(fetchData = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: fetchData,
      };
    },
    async created() {
      this.data = await this.getFetchData();
      this.isLoading = false;
    },
  };
}
