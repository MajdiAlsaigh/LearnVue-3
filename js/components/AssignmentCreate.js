export default {
  template: `
        <form @submit.prevent="add">
            <div class="border border-gray-900 text-black">
                <input v-model="newAssignment"placeholder="New Assignment..." class="p-1" />
                <button type="submit" class="bg-gray-200 p-1 px-2 border-l-4">Add</button>
            </div>
        </form>
`,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignment);

      this.newAssignment = "";
    },
  },
};
