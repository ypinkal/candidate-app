import DS from 'ember-data';

import {
  computed
} from "@ember/object";

export default DS.Model.extend({
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),

  emailAddress: DS.attr("string"),

  fullName: computed("firstName", "lastName", function () {
    return `${this.get("firstName")} ${this.get("lastName")}`;
  }),

  organization: DS.belongsTo("organization"),
  documents: DS.hasMany("document")
});
