define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

    Adapt.register('adapt-test-plugin', 'view', {

        el: "#wrapper",

        initialize: function() {
            this.render();
        },

        render: function() {
            var data = {"title":"Adapt test Plugin"};
            var template = Handlebars.templates["adapt-test-plugin"];
            this.$el.append(template(data));
            return this;
        }

    });

});