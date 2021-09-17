import { component } from '123code-studio/feature';

component('#toDoin .typing', ({ element, sessions, events }) => {
  element.on('click', '.privacy', ({ node }) => {
    sessions.save('todo.privacy', !node.is('.on'));
    element.render();
  });

  element.on(['key.down > esc', 'focusout'], () => {
    sessions.empty('todo');
    element.render();
  });

  element.on(['key.down > shift + enter :preventDefault','key.down > tab :preventDefault'], () => {
    // To be continued...
  });

  element.on(['submit :preventDefault', 'key.down > enter :preventDefault'], () => {
    const todo = sessions.save('todo', {
      id: element.find('[name="id"]').value,
      title: element.find('.title').value,
      privacy: element.find('.privacy').is('.on')
    });

    if (todo.title.not.empty) {
      events.fire('updateTodo', todo);
      todo.empty();
      element.render();
    }
  });

  events.on('editTodo', (todo) => {
    sessions.save('todo', todo);
    element.render();
  });
});

