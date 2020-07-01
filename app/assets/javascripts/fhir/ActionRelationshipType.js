const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActionRelationshipTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActionRelationshipType' },
  _type: { type: String, default: 'FHIR::ActionRelationshipType' },
});

class ActionRelationshipType extends mongoose.Document {
  constructor(object) {
    super(object, ActionRelationshipTypeSchema);
    this.typeName = 'ActionRelationshipType';
    this._type = 'FHIR::ActionRelationshipType';
  }
}

module.exports.ActionRelationshipTypeSchema = ActionRelationshipTypeSchema;
module.exports.ActionRelationshipType = ActionRelationshipType;
