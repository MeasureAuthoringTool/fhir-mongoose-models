const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const BiologicallyDerivedProductStorageScaleSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'BiologicallyDerivedProductStorageScale' },
  _type: { type: String, default: 'FHIR::BiologicallyDerivedProductStorageScale' },
});

class BiologicallyDerivedProductStorageScale extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductStorageScaleSchema);
    this.typeName = 'BiologicallyDerivedProductStorageScale';
    this._type = 'FHIR::BiologicallyDerivedProductStorageScale';
  }
}

module.exports.BiologicallyDerivedProductStorageScaleSchema = BiologicallyDerivedProductStorageScaleSchema;
module.exports.BiologicallyDerivedProductStorageScale = BiologicallyDerivedProductStorageScale;
