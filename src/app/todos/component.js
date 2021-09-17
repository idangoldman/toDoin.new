import { component } from '123code-studio/feature';

component('#toDoin .todos', ({ element, events, locals, records }) => {
  element.on('click', '.check-box', ({ node }) => {
    records
      // .where({ 'id': node.parent.id })
      // .findOne('id', node.parent.id)
      .find('id', node.parent.id)
      .save({
        complete: !record.complete
      });

    element.render();
  });

  element.on('click.double', '.title', ({ node }) => {
    const todo = records.find('id', node.parent.id);

    if (!todo.complete) {
      events.fire('editTodo', todo);
    }
  });

  events.on('sortBySelected', (value) => {
    locals.save('sortBy', value);
    element.render();
  });

  events.on('updateTodo', (todo) => {
    records.save(todo);
    element.render();
  });
});
