const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AdverseEventActualitySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AdverseEventActuality' },
});

class AdverseEventActuality extends mongoose.Document {
  constructor(object) {
    super(object, AdverseEventActualitySchema);
    this._type = 'FHIR::AdverseEventActuality';
  }
};


module.exports.AdverseEventActualitySchema = AdverseEventActualitySchema;
module.exports.AdverseEventActuality = AdverseEventActuality;
