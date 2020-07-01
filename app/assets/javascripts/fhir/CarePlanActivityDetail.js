const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CarePlanActivityKindSchema } = require('./CarePlanActivityKind');
const { CarePlanActivityStatusSchema } = require('./CarePlanActivityStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');

const CarePlanActivityDetailSchema = BackboneElementSchemaFunction({
  kind: CarePlanActivityKindSchema,
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  code: CodeableConceptSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  goal: [ReferenceSchema],
  status: CarePlanActivityStatusSchema,
  statusReason: CodeableConceptSchema,
  doNotPerform: PrimitiveBooleanSchema,
  scheduledTiming: TimingSchema,
  scheduledPeriod: PeriodSchema,
  scheduledString: PrimitiveStringSchema,
  location: ReferenceSchema,
  performer: [ReferenceSchema],
  productCodeableConcept: CodeableConceptSchema,
  productReference: ReferenceSchema,
  dailyAmount: SimpleQuantitySchema,
  quantity: SimpleQuantitySchema,
  description: PrimitiveStringSchema,
  typeName: { type: String, default: 'CarePlanActivityDetail' },
  _type: { type: String, default: 'FHIR::CarePlanActivityDetail' },
});

class CarePlanActivityDetail extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanActivityDetailSchema);
    this.typeName = 'CarePlanActivityDetail';
    this._type = 'FHIR::CarePlanActivityDetail';
  }
}

module.exports.CarePlanActivityDetailSchema = CarePlanActivityDetailSchema;
module.exports.CarePlanActivityDetail = CarePlanActivityDetail;
