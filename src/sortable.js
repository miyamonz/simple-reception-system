// You have to install sorable.js to use it:
// 'npm install sortablejs'
import Sortable from "sortablejs";

const createSortable = (el, options, vnode) => {
  return Sortable.create(el, {
    ...options,
    onEnd: function(evt) {
      const data = vnode.context.data;
      const item = data[evt.oldIndex];
      if (evt.newIndex > evt.oldIndex) {
        for (let i = evt.oldIndex; i < evt.newIndex; i++) {
          data[i] = data[i + 1];
        }
      } else {
        for (let i = evt.oldIndex; i > evt.newIndex; i--) {
          data[i] = data[i - 1];
        }
      }
      data[evt.newIndex] = item;
      vnode.context.$toast.open(
        `Moved ${item.first_name} from row ${evt.oldIndex +
          1} to ${evt.newIndex + 1}`
      );
    }
  });
};

/**
 * We add a new instance of Sortable when the element
 * is bound or updated, and destroy it when it's unbound.
 */
const sortable = {
  name: "sortable",
  bind(el, binding, vnode) {
    const table = el.querySelector("table");
    table._sortable = createSortable(
      table.querySelector("tbody"),
      binding.value,
      vnode
    );
  },
  update(el, binding, vnode) {
    const table = el.querySelector("table");
    table._sortable.destroy();
    table._sortable = createSortable(
      table.querySelector("tbody"),
      binding.value,
      vnode
    );
  },
  unbind(el) {
    const table = el.querySelector("table");
    table._sortable.destroy();
  }
};
export default sortable;
