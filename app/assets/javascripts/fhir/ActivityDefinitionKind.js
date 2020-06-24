const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActivityDefinitionKindSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ActivityDefinitionKind' },
});

class ActivityDefinitionKind extends mongoose.Document {
  constructor(object) {
    super(object, ActivityDefinitionKindSchema);
    this._type = 'FHIR::ActivityDefinitionKind';
  }
};


module.exports.ActivityDefinitionKindSchema = ActivityDefinitionKindSchema;
module.exports.ActivityDefinitionKind = ActivityDefinitionKind;
