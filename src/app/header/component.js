import { component } from '123code-studio/feature';

component('#toDoin .header', ({ element, events, locals }) => {
  element.on('click', '.sort-by .icon', () => {
    locals.save('sortByIsOpen', !ֿlocals.sortByIsOpen);
    element.render();
  });

  element.on('click.out', '.sort-by', () => {
    locals.save('sortByIsOpen', false);
    element.render();
  });

  element.on('click :preventDefault', '.sort-by nav a', ({ node }) => {
    const selectedValue = node.href.replace('#', '');

    locals.save({
      sortByIsOpen: false,
      sortBySelected: {
        text: node.value,
        value: selectedValue
      }
    });

    events.fire('sortBySelected', selectedValue);
    element.render();
  });
});
