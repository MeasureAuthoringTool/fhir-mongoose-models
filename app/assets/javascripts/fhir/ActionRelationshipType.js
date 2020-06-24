const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActionRelationshipTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ActionRelationshipType' },
});

class ActionRelationshipType extends mongoose.Document {
  constructor(object) {
    super(object, ActionRelationshipTypeSchema);
    this._type = 'FHIR::ActionRelationshipType';
  }
};


module.exports.ActionRelationshipTypeSchema = ActionRelationshipTypeSchema;
module.exports.ActionRelationshipType = ActionRelationshipType;
