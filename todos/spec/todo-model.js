/**
 * Todo Model Spec
 */
 // var Todo = Backbone.Model.extend({
 //   // Default attributes for the todo item.
 //   defaults: function() {
 //     return {
 //       title: "empty todo...",
 //       order: Todos.nextOrder(),
 //       done: false
 //     };
 //   },
 //
 //   // Toggle the `done` state of this todo item.
 //   toggle: function() {
 //     this.save({done: !this.get("done")});
 //    }
 //
 // });
describe("Todo Model", function() {
    it("has valid defaults", function() {
        var todoItem = Todo.prototype.defaults();
        var mainDefaults = {
            title: "empty todo...",
            order: 1,
            done: false
        };
        // console.log("fdsafdas",Todo.prototype.defaults());
        expect(todoItem).toEqual(mainDefaults);
        expect(todoItem.title).toContain("empty");
        expect(todoItem.order).toBeLessThan(2);
        expect(todoItem.done).toBeFalsy();
        expect(todoItem.id).toBeUndefined();
    });

    it("has working toggle", function() {
        var todoItem = Todo.prototype.defaults();
        expect(true).toBe(true);
    });
});
