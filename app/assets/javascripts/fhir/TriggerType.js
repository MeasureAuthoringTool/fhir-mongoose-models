const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TriggerTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'TriggerType' },
});

class TriggerType extends mongoose.Document {
  constructor(object) {
    super(object, TriggerTypeSchema);
    this._type = 'FHIR::TriggerType';
  }
};


module.exports.TriggerTypeSchema = TriggerTypeSchema;
module.exports.TriggerType = TriggerType;
