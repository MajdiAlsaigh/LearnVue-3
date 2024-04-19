export default {
  template: `
        <div :class=
            "{
            'p-3.5 rounded-lg': true,
            'bg-gray-700 border border-gray-600': theme === 'dark',
            'bg-gray-300 border border-gray-900 text-gray-900 ': theme === 'light',
            }">

                <h2 v-if="$slots.heading" class="font-bold mb-2">
                    <slot name="heading" />
                </h2>

                <slot />

                <footer v-if="$slots.footer" class="text-sm border-t mt-4 pt-2">
                    <slot name="footer"/>
                </footer>
                
        </div>
  `,

  props: {
    theme: { type: String, default: "dark" },
  },
};
