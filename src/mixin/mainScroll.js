export default function(refValue = undefined) {
  return {
    computed: {
      value() {
        if (!this.$refs[refValue]) {
          return window;
        }
        return this.$refs[refValue];
      },
    },
    mounted() {
      this.value.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      this.value.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.$bus.$emit('mainScroll', this.value);
      },
    },
  };
}
