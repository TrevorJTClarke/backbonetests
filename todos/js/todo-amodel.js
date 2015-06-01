// Todo Model
// ----------
// Our basic **Todo** model has `title`, `order`, and `done` attributes.
var Todo = Backbone.Model.extend({
  // Default attributes for the todo item.
  defaults: function() {
    return {
      title: "empty todo...",
      order: Todos.nextOrder(),
      done: false
    };
  },

  // Toggle the `done` state of this todo item.
  toggle: function() {
    this.save({done: !this.get("done")});
  },

  // remove the title for this item
  duplicate: function( data ) {
    //   var view = new TodoView({model: data});
      console.log(this);
    //   this.$("#todo-list").append(view.render().el);
  }

});
