import { record } from '123code-studio/feature';

record('#toDoin .todos', {
  storage: 'local',
  defaults: {
    // createdAt: Date.now(),
    // updatedAt: Date.now(),

    complete: false,
    completedAt: null,
    id: null,
    order: null,
    privacy: false,
    title: ''
  },

  before: {
    save: (record) => {
      record.completedAt = record.complete ? Date.now() : null;
    }
  }
});
