import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: { Assignments, Panel },

  template: `
        <div class="grid gap-6">
          <assignments></assignments>

          <panel>Hello World</panel>

          <panel>
              <template v-slot:heading>Heading slot template</template>
              this also heading but not bold
          </panel>

          <panel>
              this also footer but not extra small
              <template v-slot:footer>Footer slot template</template>
          </panel>

          <panel theme="light">
              <template v-slot:heading>Light theme heading</template>
              this also light them but not extra small
              <template v-slot:footer>Another footer template</template>
          </panel>
        </div>
    `,
};
