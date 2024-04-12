export default {
  template: `
        <li>
            <label class="p-2 px-4 flex justify-between items-center gap-4">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete">
            </label>
        </li> 
    `,

  props: {
    assignment: Object,
  },
};
