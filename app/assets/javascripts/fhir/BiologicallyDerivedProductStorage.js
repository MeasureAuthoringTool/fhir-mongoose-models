const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { BiologicallyDerivedProductStorageScaleSchema } = require('./BiologicallyDerivedProductStorageScale');
const { PeriodSchema } = require('./Period');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const BiologicallyDerivedProductStorageSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  temperature: PrimitiveDecimalSchema,
  scale: BiologicallyDerivedProductStorageScaleSchema,
  duration: PeriodSchema,
  typeName: { type: String, default: 'BiologicallyDerivedProductStorage' },
  _type: { type: String, default: 'FHIR::BiologicallyDerivedProductStorage' },
});

class BiologicallyDerivedProductStorage extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductStorageSchema);
    this.typeName = 'BiologicallyDerivedProductStorage';
    this._type = 'FHIR::BiologicallyDerivedProductStorage';
  }
}

module.exports.BiologicallyDerivedProductStorageSchema = BiologicallyDerivedProductStorageSchema;
module.exports.BiologicallyDerivedProductStorage = BiologicallyDerivedProductStorage;
