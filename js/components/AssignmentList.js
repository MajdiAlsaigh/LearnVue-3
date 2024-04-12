import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assignment, AssignmentTags },

  template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2 bg-gray-900 p-1.5">
              {{ title }} 
              <span>({{assignments.length}})</span>
            </h2>
            
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
        </section> 
    `,

  props: {
    assignments: Array,
    title: String,
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
