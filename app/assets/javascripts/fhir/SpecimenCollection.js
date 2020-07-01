const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const SpecimenCollectionSchema = BackboneElementSchemaFunction({
  collector: ReferenceSchema,
  collectedDateTime: PrimitiveDateTimeSchema,
  collectedPeriod: PeriodSchema,
  duration: DurationSchema,
  quantity: SimpleQuantitySchema,
  method: CodeableConceptSchema,
  bodySite: CodeableConceptSchema,
  fastingStatusCodeableConcept: CodeableConceptSchema,
  fastingStatusDuration: DurationSchema,
  typeName: { type: String, default: 'SpecimenCollection' },
  _type: { type: String, default: 'FHIR::SpecimenCollection' },
});

class SpecimenCollection extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenCollectionSchema);
    this.typeName = 'SpecimenCollection';
    this._type = 'FHIR::SpecimenCollection';
  }
}

module.exports.SpecimenCollectionSchema = SpecimenCollectionSchema;
module.exports.SpecimenCollection = SpecimenCollection;
