const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AdverseEventActualitySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AdverseEventActuality' },
  _type: { type: String, default: 'FHIR::AdverseEventActuality' },
});

class AdverseEventActuality extends mongoose.Document {
  constructor(object) {
    super(object, AdverseEventActualitySchema);
    this.typeName = 'AdverseEventActuality';
    this._type = 'FHIR::AdverseEventActuality';
  }
}

module.exports.AdverseEventActualitySchema = AdverseEventActualitySchema;
module.exports.AdverseEventActuality = AdverseEventActuality;
