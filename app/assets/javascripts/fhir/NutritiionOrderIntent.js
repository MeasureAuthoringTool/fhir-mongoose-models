const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const NutritiionOrderIntentSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'NutritiionOrderIntent' },
  _type: { type: String, default: 'FHIR::NutritiionOrderIntent' },
});

class NutritiionOrderIntent extends mongoose.Document {
  constructor(object) {
    super(object, NutritiionOrderIntentSchema);
    this.typeName = 'NutritiionOrderIntent';
    this._type = 'FHIR::NutritiionOrderIntent';
  }
}

module.exports.NutritiionOrderIntentSchema = NutritiionOrderIntentSchema;
module.exports.NutritiionOrderIntent = NutritiionOrderIntent;
