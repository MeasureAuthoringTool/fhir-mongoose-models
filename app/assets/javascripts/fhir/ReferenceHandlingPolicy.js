const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ReferenceHandlingPolicySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ReferenceHandlingPolicy' },
});

class ReferenceHandlingPolicy extends mongoose.Document {
  constructor(object) {
    super(object, ReferenceHandlingPolicySchema);
    this._type = 'FHIR::ReferenceHandlingPolicy';
  }
};


module.exports.ReferenceHandlingPolicySchema = ReferenceHandlingPolicySchema;
module.exports.ReferenceHandlingPolicy = ReferenceHandlingPolicy;
