const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { NutritiionOrderIntentSchema } = require('./NutritiionOrderIntent');
const { NutritionOrderEnteralFormulaSchema } = require('./NutritionOrderEnteralFormula');
const { NutritionOrderOralDietSchema } = require('./NutritionOrderOralDiet');
const { NutritionOrderStatusSchema } = require('./NutritionOrderStatus');
const { NutritionOrderSupplementSchema } = require('./NutritionOrderSupplement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const NutritionOrderSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  instantiates: [PrimitiveUriSchema],
  status: NutritionOrderStatusSchema,
  intent: NutritiionOrderIntentSchema,
  patient: ReferenceSchema,
  encounter: ReferenceSchema,
  dateTime: PrimitiveDateTimeSchema,
  orderer: ReferenceSchema,
  allergyIntolerance: [ReferenceSchema],
  foodPreferenceModifier: [CodeableConceptSchema],
  excludeFoodModifier: [CodeableConceptSchema],
  oralDiet: NutritionOrderOralDietSchema,
  supplement: [NutritionOrderSupplementSchema],
  enteralFormula: NutritionOrderEnteralFormulaSchema,
  note: [AnnotationSchema],
  typeName: { type: String, default: 'NutritionOrder' },
  _type: { type: String, default: 'FHIR::NutritionOrder' },
});

class NutritionOrder extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderSchema);
    this.typeName = 'NutritionOrder';
    this._type = 'FHIR::NutritionOrder';
  }
}

module.exports.NutritionOrderSchema = NutritionOrderSchema;
module.exports.NutritionOrder = NutritionOrder;
