const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const BiologicallyDerivedProductCollectionSchema = BackboneElementSchemaFunction({
  collector: ReferenceSchema,
  source: ReferenceSchema,
  collectedDateTime: PrimitiveDateTimeSchema,
  collectedPeriod: PeriodSchema,
  typeName: { type: String, default: 'BiologicallyDerivedProductCollection' },
  _type: { type: String, default: 'FHIR::BiologicallyDerivedProductCollection' },
});

class BiologicallyDerivedProductCollection extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductCollectionSchema);
    this.typeName = 'BiologicallyDerivedProductCollection';
    this._type = 'FHIR::BiologicallyDerivedProductCollection';
  }
}

module.exports.BiologicallyDerivedProductCollectionSchema = BiologicallyDerivedProductCollectionSchema;
module.exports.BiologicallyDerivedProductCollection = BiologicallyDerivedProductCollection;
