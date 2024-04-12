export default {
  template: `
    <div class="flex gap-2">
        <button 
            @click="$emit('update:modelValue', tag)"
            v-for="tag in tags" 
            class="border rounded border-gray-400 px-1 py-px text-xs"
            :class="{'border-blue-400 text-blue-400': tag === modelValue}"
            >
        {{tag}}</button>
    </div>
    `,

  props: {
    initialTags: Array,
    modelValue: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
