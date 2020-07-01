const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const BiologicallyDerivedProductStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'BiologicallyDerivedProductStatus' },
  _type: { type: String, default: 'FHIR::BiologicallyDerivedProductStatus' },
});

class BiologicallyDerivedProductStatus extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductStatusSchema);
    this.typeName = 'BiologicallyDerivedProductStatus';
    this._type = 'FHIR::BiologicallyDerivedProductStatus';
  }
}

module.exports.BiologicallyDerivedProductStatusSchema = BiologicallyDerivedProductStatusSchema;
module.exports.BiologicallyDerivedProductStatus = BiologicallyDerivedProductStatus;
