import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assignment, AssignmentTags },

  template: `
      <section 
        v-show="assignments.length"
        class="w-64 p-3.5 bg-gray-700 border border-gray-600 rounded-lg">

          <div class="flex justify-between items-start bg-gray-900 p-1.5 mb-1">
              <h2 class="font-bold">
                  {{ title }} 
                  <span>({{assignments.length}})</span>
              </h2>
              <button v-show="canToggle" @click="$emit('toggle')">&times</button>
          </div>
          
          <assignment-tags
              v-model="currentTag"
              :initial-tags="assignments.map((a) => a.tag)"
          />

          <ul class="border border-gray-500 divide-y divide-gray-500 mt-6">
              <assignment 
                  v-for="assignment in filteredAssignments"
                  :key="assignment.id" 
                  :assignment="assignment"
              ></assignment>
          </ul>

          <slot></slot>
      </section> 
    `,

  props: {
    assignments: Array,
    title: String,
    canToggle: { type: Boolean, default: false },
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }
      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
