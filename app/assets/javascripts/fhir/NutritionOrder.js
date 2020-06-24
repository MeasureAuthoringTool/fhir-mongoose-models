const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { NutritiionOrderIntentSchema } = require('./NutritiionOrderIntent');
const { NutritionOrderEnteralFormulaSchema } = require('./NutritionOrderEnteralFormula');
const { NutritionOrderOralDietSchema } = require('./NutritionOrderOralDiet');
const { NutritionOrderStatusSchema } = require('./NutritionOrderStatus');
const { NutritionOrderSupplementSchema } = require('./NutritionOrderSupplement');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NutritionOrderSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   instantiates : [String],
   status : NutritionOrderStatusSchema,
   intent : NutritiionOrderIntentSchema,
   patient : ReferenceSchema,
   encounter : ReferenceSchema,
   dateTime : DateTime,
   orderer : ReferenceSchema,
   allergyIntolerance : [ReferenceSchema],
   foodPreferenceModifier : [CodeableConceptSchema],
   excludeFoodModifier : [CodeableConceptSchema],
   oralDiet : NutritionOrderOralDietSchema,
   supplement : [NutritionOrderSupplementSchema],
   enteralFormula : NutritionOrderEnteralFormulaSchema,
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'NutritionOrder' },
});

class NutritionOrder extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderSchema);
    this._type = 'FHIR::NutritionOrder';
  }
};


module.exports.NutritionOrderSchema = NutritionOrderSchema;
module.exports.NutritionOrder = NutritionOrder;
