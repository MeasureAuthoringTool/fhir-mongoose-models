const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CarePlanActivitySchema } = require('./CarePlanActivity');
const { CarePlanIntentSchema } = require('./CarePlanIntent');
const { CarePlanStatusSchema } = require('./CarePlanStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const CarePlanSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  replaces: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: CarePlanStatusSchema,
  intent: CarePlanIntentSchema,
  category: [CodeableConceptSchema],
  title: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  period: PeriodSchema,
  created: PrimitiveDateTimeSchema,
  author: ReferenceSchema,
  contributor: [ReferenceSchema],
  careTeam: [ReferenceSchema],
  addresses: [ReferenceSchema],
  supportingInfo: [ReferenceSchema],
  goal: [ReferenceSchema],
  activity: [CarePlanActivitySchema],
  note: [AnnotationSchema],
  typeName: { type: String, default: 'CarePlan' },
  _type: { type: String, default: 'FHIR::CarePlan' },
});

class CarePlan extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanSchema);
    this.typeName = 'CarePlan';
    this._type = 'FHIR::CarePlan';
  }
}

module.exports.CarePlanSchema = CarePlanSchema;
module.exports.CarePlan = CarePlan;
