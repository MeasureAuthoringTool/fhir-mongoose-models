const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CarePlanActivityKindSchema } = require('./CarePlanActivityKind');
const { CarePlanActivityStatusSchema } = require('./CarePlanActivityStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CarePlanActivityDetailSchema = BackboneElementSchemaFunction({
   kind : CarePlanActivityKindSchema,
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   code : CodeableConceptSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   goal : [ReferenceSchema],
   status : CarePlanActivityStatusSchema,
   statusReason : CodeableConceptSchema,
   doNotPerform : Boolean,
   scheduledTiming : TimingSchema,
   scheduledPeriod : PeriodSchema,
   scheduledString : String,
   location : ReferenceSchema,
   performer : [ReferenceSchema],
   productCodeableConcept : CodeableConceptSchema,
   productReference : ReferenceSchema,
   dailyAmount : SimpleQuantitySchema,
   quantity : SimpleQuantitySchema,
   description : String,
   fhirTitle: { type: String, default: 'CarePlanActivityDetail' },
});

class CarePlanActivityDetail extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanActivityDetailSchema);
    this._type = 'FHIR::CarePlanActivityDetail';
  }
};


module.exports.CarePlanActivityDetailSchema = CarePlanActivityDetailSchema;
module.exports.CarePlanActivityDetail = CarePlanActivityDetail;
