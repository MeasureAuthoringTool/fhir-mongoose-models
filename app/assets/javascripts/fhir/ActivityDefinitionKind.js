const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActivityDefinitionKindSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActivityDefinitionKind' },
  _type: { type: String, default: 'FHIR::ActivityDefinitionKind' },
});

class ActivityDefinitionKind extends mongoose.Document {
  constructor(object) {
    super(object, ActivityDefinitionKindSchema);
    this.typeName = 'ActivityDefinitionKind';
    this._type = 'FHIR::ActivityDefinitionKind';
  }
}

module.exports.ActivityDefinitionKindSchema = ActivityDefinitionKindSchema;
module.exports.ActivityDefinitionKind = ActivityDefinitionKind;
